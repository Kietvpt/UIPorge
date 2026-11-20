using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UIForge.Core.Data;
using UIForge.Core.DTOs;
using UIForge.Core.Entities;

namespace UIForge.Core.Controllers
{
    [ApiController]
    [Route("api/core/feature-policies")]
    [Authorize]
    public class FeaturePoliciesController : ControllerBase
    {
        private readonly UIForgeDbContext _context;
        private readonly ILogger<FeaturePoliciesController> _logger;

        public FeaturePoliciesController(UIForgeDbContext context, ILogger<FeaturePoliciesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Danh sách tất cả vai trò hoạt động trong CSDL (chuẩn Domain-Agnostic)
        /// </summary>
        [HttpGet("~/api/core/roles")]
        [HttpGet("roles")]
        [AllowAnonymous]
        public async Task<IActionResult> GetRoles()
        {
            var roles = await _context.Roles
                .Where(r => r.Active)
                .OrderBy(r => r.Id)
                .Select(r => new
                {
                    r.Id,
                    r.Code,
                    r.Name,
                    r.Description
                })
                .ToListAsync();

            return Ok(roles);
        }

        /// <summary>
        /// Tạo mới vai trò động (Dynamic Role)
        /// </summary>
        [HttpPost("~/api/core/roles")]
        [HttpPost("roles")]
        public async Task<IActionResult> CreateRole([FromBody] CreateRoleRequest req)
        {
            if (req == null || string.IsNullOrWhiteSpace(req.Code) || string.IsNullOrWhiteSpace(req.Name))
            {
                return BadRequest(new { message = "Mã vai trò (Code) và Tên vai trò (Name) không được để trống." });
            }

            var cleanCode = req.Code.Trim();
            var cleanName = req.Name.Trim();

            var exists = await _context.Roles.AnyAsync(r => r.Code.ToLower() == cleanCode.ToLower() && r.Active);
            if (exists)
            {
                return Conflict(new { message = $"Vai trò với mã '{cleanCode}' đã tồn tại trong hệ thống." });
            }

            var newRole = new Role
            {
                Code = cleanCode,
                Name = cleanName,
                Description = req.Description?.Trim(),
                Active = true,
                CreatedDate = DateTime.UtcNow,
                CreatedBy = User.Identity?.Name ?? "system"
            };

            _context.Roles.Add(newRole);
            await _context.SaveChangesAsync();

            return Ok(new { success = true, role = newRole });
        }

        /// <summary>
        /// Xóa vai trò động (soft delete Active = false, chặn xóa role Dev)
        /// </summary>
        [HttpDelete("~/api/core/roles/{id:int}")]
        [HttpDelete("roles/{id:int}")]
        public async Task<IActionResult> DeleteRole(int id)
        {
            if (id <= 0)
            {
                return BadRequest(new { message = "ID vai trò không hợp lệ." });
            }

            var role = await _context.Roles.FindAsync(id);
            if (role == null)
            {
                return NotFound(new { message = $"Không tìm thấy vai trò #{id}." });
            }

            if (string.Equals(role.Code, "Dev", StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest(new { message = "Không thể xóa vai trò hệ thống 'Dev'." });
            }

            role.Active = false;
            role.UpdatedDate = DateTime.UtcNow;
            role.UpdatedBy = User.Identity?.Name ?? "system";
            await _context.SaveChangesAsync();

            return Ok(new { success = true });
        }

        /// <summary>
        /// Danh sách tất cả người dùng hoạt động trong CSDL (chuẩn Domain-Agnostic)
        /// </summary>
        [HttpGet("~/api/core/users")]
        [HttpGet("users")]
        [AllowAnonymous]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _context.Users
                .Where(u => u.Active)
                .OrderBy(u => u.Id)
                .Select(u => new
                {
                    u.Id,
                    u.Username,
                    u.FullName,
                    u.Role
                })
                .ToListAsync();

            return Ok(users);
        }

        /// <summary>
        /// Lấy danh sách phân quyền của 1 Feature (Tab QUYỀN HẠN của FeaturePropertiesModal).
        /// Khớp 13 cột của Core C# cũ.
        /// </summary>
        [HttpGet("{featureId:int}")]
        public async Task<IActionResult> GetFeaturePolicies(int featureId)
        {
            var policies = await _context.FeaturePolicies
                .Include(fp => fp.Role)
                .Include(fp => fp.User)
                .Where(fp => fp.FeatureId == featureId)
                .OrderBy(fp => fp.Id)
                .ToListAsync();

            var dtos = policies.Select(fp => new FeaturePolicyItemDto
            {
                Id = fp.Id,
                FeatureId = fp.FeatureId,
                FeatureCode = fp.FeatureCode,
                EntityName = fp.EntityName,
                UserId = fp.UserId,
                UserName = fp.User != null ? (fp.User.FullName ?? fp.User.Username) : null,
                RoleId = fp.RoleId,
                RoleCode = fp.Role?.Code,
                RoleName = fp.Role?.Name,
                CanRead = fp.CanRead,
                CanWrite = fp.CanWrite,
                CanWriteAll = fp.CanWriteAll,
                CanDelete = fp.CanDelete,
                CanDeleteAll = fp.CanDeleteAll,
                CanDeactivate = fp.CanDeactivate,
                CanShare = fp.CanShare,
                RecordId = fp.RecordId,
                LockUpdateAfterCreated = fp.LockUpdateAfterCreated,
                LockDeleteAfterCreated = fp.LockDeleteAfterCreated,
                Description = fp.Description,
                Active = fp.Active
            }).ToList();

            return Ok(dtos);
        }

        /// <summary>
        /// Lưu toàn bộ bảng phân quyền của 1 Feature trong một transaction (thêm mới, cập nhật, xóa bỏ).
        /// Hỗ trợ cả PUT và POST, chấp nhậnทั้ง mảng JSON trần `[...]` lẫn object `{"featureId":4,"policies":[...]}`.
        /// </summary>
        [HttpPut("{featureId:int}")]
        [HttpPost("{featureId:int}")]
        public async Task<IActionResult> SaveFeaturePolicies(int featureId, [FromBody] JsonElement body)
        {
            await using var tx = await _context.Database.BeginTransactionAsync();
            try
            {
                var page = await _context.Pages.FindAsync(featureId);
                if (page == null)
                {
                    return NotFound(new { message = $"Feature '{featureId}' not found." });
                }

                // Trích xuất mảng items từ body (dù gửi mảng trần [...] hay object {"policies":[...]} / {"items":[...]} / {"rules":[...]})
                JsonElement itemsElement = default;
                bool hasArray = false;
                if (body.ValueKind == JsonValueKind.Array)
                {
                    itemsElement = body;
                    hasArray = true;
                }
                else if (body.ValueKind == JsonValueKind.Object)
                {
                    if ((body.TryGetProperty("policies", out itemsElement) ||
                         body.TryGetProperty("Policies", out itemsElement) ||
                         body.TryGetProperty("items", out itemsElement) ||
                         body.TryGetProperty("Items", out itemsElement) ||
                         body.TryGetProperty("rules", out itemsElement) ||
                         body.TryGetProperty("Rules", out itemsElement)) &&
                        itemsElement.ValueKind == JsonValueKind.Array)
                    {
                        hasArray = true;
                    }
                }

                if (!hasArray)
                {
                    return BadRequest(new { message = "Payload must be a JSON array or an object containing a 'policies' array." });
                }

                var allRoles = await _context.Roles.Where(r => r.Active).ToListAsync();
                var allUsers = await _context.Users.Where(u => u.Active).ToListAsync();

                var items = new List<FeaturePolicyItemDto>();
                foreach (var el in itemsElement.EnumerateArray())
                {
                    if (el.ValueKind != JsonValueKind.Object) continue;

                    int id = ParseIntOrZero(el, "id", "Id");
                    int? roleId = ParseNullableInt(el, "roleId", "RoleId");
                    string? roleCode = ParseString(el, "roleCode", "RoleCode");
                    string? roleName = ParseString(el, "roleName", "RoleName");

                    // Nếu roleId gửi lên là chuỗi mã role (vd: "Pricing")
                    if ((!roleId.HasValue || roleId.Value <= 0) && string.IsNullOrWhiteSpace(roleCode))
                    {
                        roleCode = ParseStringFromAnyProp(el, "roleId", "RoleId");
                    }

                    if ((!roleId.HasValue || roleId.Value <= 0) && !string.IsNullOrWhiteSpace(roleCode))
                    {
                        var matchedRole = allRoles.FirstOrDefault(r =>
                            string.Equals(r.Code, roleCode, StringComparison.OrdinalIgnoreCase) ||
                            string.Equals(r.Name, roleCode, StringComparison.OrdinalIgnoreCase));
                        if (matchedRole != null)
                        {
                            roleId = matchedRole.Id;
                            roleCode = matchedRole.Code;
                            roleName = matchedRole.Name;
                        }
                    }
                    else if (roleId.HasValue && roleId.Value > 0)
                    {
                        var matchedRole = allRoles.FirstOrDefault(r => r.Id == roleId.Value);
                        if (matchedRole == null && !string.IsNullOrWhiteSpace(roleCode))
                        {
                            matchedRole = allRoles.FirstOrDefault(r =>
                                string.Equals(r.Code, roleCode, StringComparison.OrdinalIgnoreCase));
                        }
                        if (matchedRole != null)
                        {
                            roleId = matchedRole.Id;
                            roleCode = matchedRole.Code;
                            roleName = matchedRole.Name;
                        }
                        else if (!string.IsNullOrWhiteSpace(roleCode))
                        {
                            // Tự động khởi tạo Role mới trong bảng Roles nếu DB chưa có Role này (tránh lỗi FK)
                            var createdRole = new Role
                            {
                                Code = roleCode,
                                Name = !string.IsNullOrWhiteSpace(roleName) ? roleName : roleCode,
                                Description = $"Auto-created role {roleCode}",
                                Active = true,
                                CreatedDate = DateTime.UtcNow,
                                CreatedBy = User.Identity?.Name ?? "system"
                            };
                            _context.Roles.Add(createdRole);
                            await _context.SaveChangesAsync();
                            allRoles.Add(createdRole);
                            roleId = createdRole.Id;
                        }
                        else
                        {
                            roleId = null;
                        }
                    }

                    int? userId = ParseNullableInt(el, "userId", "UserId");
                    string? userName = ParseString(el, "userName", "UserName");
                    if ((!userId.HasValue || userId.Value <= 0) && string.IsNullOrWhiteSpace(userName))
                    {
                        userName = ParseStringFromAnyProp(el, "userId", "UserId");
                    }
                    if ((!userId.HasValue || userId.Value <= 0) && !string.IsNullOrWhiteSpace(userName))
                    {
                        var matchedUser = allUsers.FirstOrDefault(u =>
                            string.Equals(u.Username, userName, StringComparison.OrdinalIgnoreCase) ||
                            string.Equals(u.FullName, userName, StringComparison.OrdinalIgnoreCase));
                        if (matchedUser != null)
                        {
                            userId = matchedUser.Id;
                            userName = matchedUser.Username;
                        }
                    }
                    else if (userId.HasValue && userId.Value > 0)
                    {
                        if (!allUsers.Any(u => u.Id == userId.Value))
                        {
                            userId = null;
                        }
                    }

                    items.Add(new FeaturePolicyItemDto
                    {
                        Id = id,
                        FeatureId = featureId,
                        FeatureCode = ParseString(el, "featureCode", "FeatureCode") ?? page.Code,
                        EntityName = ParseString(el, "entityName", "EntityName") ?? page.EntityName,
                        UserId = userId,
                        UserName = userName,
                        RoleId = roleId,
                        RoleCode = roleCode,
                        RoleName = roleName,
                        CanRead = ParseBool(el, true, "canRead", "CanRead"),
                        CanWrite = ParseBool(el, false, "canWrite", "CanWrite"),
                        CanWriteAll = ParseBool(el, false, "canWriteAll", "CanWriteAll"),
                        CanDelete = ParseBool(el, false, "canDelete", "CanDelete"),
                        CanDeleteAll = ParseBool(el, false, "canDeleteAll", "CanDeleteAll"),
                        CanDeactivate = ParseBool(el, false, "canDeactivate", "CanDeactivate"),
                        CanShare = ParseBool(el, false, "canShare", "CanShare"),
                        RecordId = ParseIntOrZero(el, "recordId", "RecordId"),
                        LockUpdateAfterCreated = ParseNullableInt(el, "lockUpdateAfterCreated", "LockUpdateAfterCreated"),
                        LockDeleteAfterCreated = ParseNullableInt(el, "lockDeleteAfterCreated", "LockDeleteAfterCreated"),
                        Description = ParseString(el, "description", "Description"),
                        Active = ParseBool(el, true, "active", "Active")
                    });
                }

                var existingPolicies = await _context.FeaturePolicies
                    .Where(fp => fp.FeatureId == featureId)
                    .ToListAsync();

                var incomingIds = items.Where(i => i.Id > 0).Select(i => i.Id).ToHashSet();

                // 1. Xóa các rule không còn trong danh sách gửi lên
                var toDelete = existingPolicies.Where(ep => !incomingIds.Contains(ep.Id)).ToList();
                if (toDelete.Count > 0)
                {
                    _context.FeaturePolicies.RemoveRange(toDelete);
                }

                var existingDict = existingPolicies.ToDictionary(ep => ep.Id);

                // 2. Cập nhật hoặc thêm mới
                foreach (var item in items)
                {
                    if (item.Id > 0 && existingDict.TryGetValue(item.Id, out var existing))
                    {
                        existing.UserId = item.UserId > 0 ? item.UserId : null;
                        existing.RoleId = item.RoleId > 0 ? item.RoleId : null;
                        existing.FeatureCode = item.FeatureCode ?? page.Code;
                        existing.EntityName = item.EntityName ?? page.EntityName;
                        existing.CanRead = item.CanRead;
                        existing.CanWrite = item.CanWrite;
                        existing.CanWriteAll = item.CanWriteAll;
                        existing.CanDelete = item.CanDelete;
                        existing.CanDeleteAll = item.CanDeleteAll;
                        existing.CanDeactivate = item.CanDeactivate;
                        existing.CanShare = item.CanShare;
                        existing.RecordId = item.RecordId;
                        existing.LockUpdateAfterCreated = item.LockUpdateAfterCreated;
                        existing.LockDeleteAfterCreated = item.LockDeleteAfterCreated;
                        existing.Description = item.Description;
                        existing.Active = item.Active;
                        existing.UpdatedDate = DateTime.UtcNow;
                        existing.UpdatedBy = User.Identity?.Name ?? "system";
                    }
                    else
                    {
                        var newPolicy = new FeaturePolicy
                        {
                            FeatureId = featureId,
                            FeatureCode = item.FeatureCode ?? page.Code,
                            EntityName = item.EntityName ?? page.EntityName,
                            UserId = item.UserId > 0 ? item.UserId : null,
                            RoleId = item.RoleId > 0 ? item.RoleId : null,
                            CanRead = item.CanRead,
                            CanWrite = item.CanWrite,
                            CanWriteAll = item.CanWriteAll,
                            CanDelete = item.CanDelete,
                            CanDeleteAll = item.CanDeleteAll,
                            CanDeactivate = item.CanDeactivate,
                            CanShare = item.CanShare,
                            RecordId = item.RecordId,
                            LockUpdateAfterCreated = item.LockUpdateAfterCreated,
                            LockDeleteAfterCreated = item.LockDeleteAfterCreated,
                            Description = item.Description,
                            Active = item.Active,
                            CreatedDate = DateTime.UtcNow,
                            CreatedBy = User.Identity?.Name ?? "system"
                        };
                        _context.FeaturePolicies.Add(newPolicy);
                    }
                }

                await _context.SaveChangesAsync();
                await tx.CommitAsync();

                // Lấy lại danh sách sau khi lưu
                return await GetFeaturePolicies(featureId);
            }
            catch (Exception ex)
            {
                await tx.RollbackAsync();
                _logger.LogError(ex, "Failed to save feature policies for feature {FeatureId}", featureId);
                return StatusCode(500, new { message = "Error saving feature policies.", details = ex.Message });
            }
        }

        private static int ParseIntOrZero(JsonElement el, params string[] names)
        {
            foreach (var name in names)
            {
                if (el.TryGetProperty(name, out var prop))
                {
                    if (prop.ValueKind == JsonValueKind.Number && prop.TryGetInt32(out var val))
                        return val > 0 ? val : 0;
                    if (prop.ValueKind == JsonValueKind.String && int.TryParse(prop.GetString(), out var sval))
                        return sval > 0 ? sval : 0;
                }
            }
            return 0;
        }

        private static int? ParseNullableInt(JsonElement el, params string[] names)
        {
            foreach (var name in names)
            {
                if (el.TryGetProperty(name, out var prop))
                {
                    if (prop.ValueKind == JsonValueKind.Number && prop.TryGetInt32(out var val))
                        return val > 0 ? val : null;
                    if (prop.ValueKind == JsonValueKind.String && int.TryParse(prop.GetString(), out var sval))
                        return sval > 0 ? sval : null;
                }
            }
            return null;
        }

        private static string? ParseString(JsonElement el, params string[] names)
        {
            foreach (var name in names)
            {
                if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.String)
                {
                    var s = prop.GetString();
                    if (!string.IsNullOrWhiteSpace(s)) return s.Trim();
                }
            }
            return null;
        }

        private static string? ParseStringFromAnyProp(JsonElement el, params string[] names)
        {
            foreach (var name in names)
            {
                if (el.TryGetProperty(name, out var prop) && prop.ValueKind == JsonValueKind.String)
                {
                    var s = prop.GetString();
                    if (!string.IsNullOrWhiteSpace(s) && !int.TryParse(s, out _)) return s.Trim();
                }
            }
            return null;
        }

        private static bool ParseBool(JsonElement el, bool defaultVal, params string[] names)
        {
            foreach (var name in names)
            {
                if (el.TryGetProperty(name, out var prop))
                {
                    if (prop.ValueKind == JsonValueKind.True) return true;
                    if (prop.ValueKind == JsonValueKind.False) return false;
                    if (prop.ValueKind == JsonValueKind.String && bool.TryParse(prop.GetString(), out var b)) return b;
                    if (prop.ValueKind == JsonValueKind.Number && prop.TryGetInt32(out var n)) return n != 0;
                }
            }
            return defaultVal;
        }
    }
}
