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
    [Route("api/core/component-policies")]
    [Authorize]
    public class ComponentPoliciesController : ControllerBase
    {
        private readonly UIForgeDbContext _context;
        private readonly ILogger<ComponentPoliciesController> _logger;

        public ComponentPoliciesController(UIForgeDbContext context, ILogger<ComponentPoliciesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Lấy danh sách phân quyền của 1 Component hoặc Cột GridPolicy (Tab QUYỀN HẠN của Component).
        /// Hỗ trợ cả pageId là số hoặc chuỗi số, tự động fallback đọc từ UIComponent.PermissionsJson nếu bảng ComponentPolicies chưa có rule.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetComponentPolicies([FromQuery] string? pageId, [FromQuery] string? nodeId)
        {
            if (string.IsNullOrWhiteSpace(pageId))
            {
                return BadRequest(new { message = "pageId is required." });
            }

            int pId = 0;
            if (!int.TryParse(pageId, out pId) || pId <= 0)
            {
                return BadRequest(new { message = $"Invalid pageId: '{pageId}'" });
            }

            if (string.IsNullOrWhiteSpace(nodeId))
            {
                return await GetAllComponentPoliciesByPage(pId);
            }

            var policies = await _context.ComponentPolicies
                .Include(cp => cp.Role)
                .Include(cp => cp.User)
                .Where(cp => cp.PageId == pId && cp.NodeId == nodeId)
                .OrderBy(cp => cp.Id)
                .ToListAsync();

            if (policies.Count > 0)
            {
                var dtos = policies.Select(cp => new ComponentPolicyItemDto
                {
                    Id = cp.Id,
                    PageId = cp.PageId,
                    NodeId = cp.NodeId,
                    ComponentId = cp.ComponentId,
                    UserId = cp.UserId,
                    UserName = cp.User != null ? (cp.User.FullName ?? cp.User.Username) : null,
                    RoleId = cp.RoleId,
                    RoleCode = cp.Role?.Code,
                    RoleName = cp.Role?.Name,
                    FieldName = cp.FieldName,
                    CanRead = cp.CanRead,
                    CanWrite = cp.CanWrite,
                    CanWriteAll = cp.CanWriteAll,
                    CanDelete = cp.CanDelete,
                    CanDeactivate = cp.CanDeactivate,
                    Description = cp.Description,
                    Active = cp.Active
                }).ToList();

                return Ok(dtos);
            }

            // Fallback: Nếu trong bảng ComponentPolicies chưa có dòng nào, kiểm tra cột UIComponent.PermissionsJson
            var compRow = await _context.Components.FirstOrDefaultAsync(c => c.PageId == pId && c.NodeId == nodeId);
            if (compRow != null && !string.IsNullOrWhiteSpace(compRow.PermissionsJson))
            {
                try
                {
                    using var doc = JsonDocument.Parse(compRow.PermissionsJson);
                    var root = doc.RootElement;
                    var fallbackDtos = new List<ComponentPolicyItemDto>();

                    if (root.TryGetProperty("policies", out var polArr) && polArr.ValueKind == JsonValueKind.Array)
                    {
                        var allRoles = await _context.Roles.Where(r => r.Active).ToDictionaryAsync(r => r.Id);
                        var allUsers = await _context.Users.Where(u => u.Active).ToDictionaryAsync(u => u.Id);

                        foreach (var elem in polArr.EnumerateArray())
                        {
                            int? rId = elem.TryGetProperty("roleId", out var rp) && rp.TryGetInt32(out var rv) ? rv : null;
                            int? uId = elem.TryGetProperty("userId", out var up) && up.TryGetInt32(out var uv) ? uv : null;
                            string? rCode = elem.TryGetProperty("roleCode", out var rcp) ? rcp.GetString() : null;

                            Role? matchedRole = null;
                            if (rId.HasValue && allRoles.TryGetValue(rId.Value, out var rObj)) matchedRole = rObj;
                            else if (!string.IsNullOrEmpty(rCode)) matchedRole = allRoles.Values.FirstOrDefault(r => string.Equals(r.Code, rCode, StringComparison.OrdinalIgnoreCase));

                            User? matchedUser = null;
                            if (uId.HasValue && allUsers.TryGetValue(uId.Value, out var uObj)) matchedUser = uObj;

                            fallbackDtos.Add(new ComponentPolicyItemDto
                            {
                                PageId = pId,
                                NodeId = nodeId,
                                ComponentId = compRow.Id,
                                RoleId = matchedRole?.Id ?? rId,
                                RoleCode = matchedRole?.Code ?? rCode,
                                RoleName = matchedRole?.Name,
                                UserId = matchedUser?.Id ?? uId,
                                UserName = matchedUser?.FullName ?? matchedUser?.Username,
                                CanRead = !elem.TryGetProperty("canRead", out var cr) || cr.GetBoolean(),
                                CanWrite = elem.TryGetProperty("canWrite", out var cw) && cw.GetBoolean(),
                                CanWriteAll = elem.TryGetProperty("canWriteAll", out var cwa) && cwa.GetBoolean(),
                                CanDelete = elem.TryGetProperty("canDelete", out var cd) && cd.GetBoolean(),
                                CanDeactivate = elem.TryGetProperty("canDeactivate", out var cda) && cda.GetBoolean(),
                                Active = !elem.TryGetProperty("active", out var act) || act.GetBoolean()
                            });
                        }

                        if (fallbackDtos.Count > 0)
                        {
                            return Ok(fallbackDtos);
                        }
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogWarning(ex, "Failed to parse legacy PermissionsJson for component {PageId}/{NodeId}", pId, nodeId);
                }
            }

            return Ok(new List<ComponentPolicyItemDto>());
        }

        /// <summary>
        /// Lấy toàn bộ phân quyền component của 1 Page để Frontend cache runtime.
        /// </summary>
        [HttpGet("by-page/{pageId:int}")]
        public async Task<IActionResult> GetAllComponentPoliciesByPage(int pageId)
        {
            var policies = await _context.ComponentPolicies
                .Include(cp => cp.Role)
                .Include(cp => cp.User)
                .Where(cp => cp.PageId == pageId)
                .OrderBy(cp => cp.NodeId).ThenBy(cp => cp.Id)
                .ToListAsync();

            var dtos = policies.Select(cp => new ComponentPolicyItemDto
            {
                Id = cp.Id,
                PageId = cp.PageId,
                NodeId = cp.NodeId,
                ComponentId = cp.ComponentId,
                UserId = cp.UserId,
                UserName = cp.User != null ? (cp.User.FullName ?? cp.User.Username) : null,
                RoleId = cp.RoleId,
                RoleCode = cp.Role?.Code,
                RoleName = cp.Role?.Name,
                FieldName = cp.FieldName,
                CanRead = cp.CanRead,
                CanWrite = cp.CanWrite,
                CanWriteAll = cp.CanWriteAll,
                CanDelete = cp.CanDelete,
                CanDeactivate = cp.CanDeactivate,
                Description = cp.Description,
                Active = cp.Active
            }).ToList();

            return Ok(dtos);
        }

        /// <summary>
        /// Lưu ma trận phân quyền cho 1 Component hoặc Cột GridPolicy trong một transaction.
        /// Đồng thời đồng bộ vào UIComponent.PermissionsJson cho component tương ứng.
        /// Hỗ trợ cả PUT và POST, chấp nhận pageId cả trong body hoặc trên URL route, và parse linh hoạt id chuỗi ("cpr_...") lẫn roleCode/roleId.
        /// </summary>
        [HttpPut]
        [HttpPost]
        [HttpPut("{pageId}")]
        [HttpPost("{pageId}")]
        public async Task<IActionResult> SaveComponentPolicies([FromBody] JsonElement body, [FromRoute] string? pageId = null)
        {
            if (body.ValueKind != JsonValueKind.Object)
            {
                return BadRequest(new { message = "Invalid request payload." });
            }

            int pId = ParseIntOrZero(body, "pageId", "PageId");
            if (pId <= 0 && !string.IsNullOrWhiteSpace(pageId) && int.TryParse(pageId, out var pIdRoute))
            {
                pId = pIdRoute;
            }

            string? nodeId = ParseString(body, "nodeId", "NodeId");
            string? defaultFieldName = ParseString(body, "fieldName", "FieldName");

            if (pId <= 0 || string.IsNullOrWhiteSpace(nodeId))
            {
                return BadRequest(new { message = "Invalid pageId or nodeId." });
            }

            JsonElement policiesEl = default;
            bool hasArr = (body.TryGetProperty("policies", out policiesEl) ||
                           body.TryGetProperty("Policies", out policiesEl) ||
                           body.TryGetProperty("rules", out policiesEl) ||
                           body.TryGetProperty("Rules", out policiesEl) ||
                           body.TryGetProperty("items", out policiesEl) ||
                           body.TryGetProperty("Items", out policiesEl)) &&
                          policiesEl.ValueKind == JsonValueKind.Array;

            await using var tx = await _context.Database.BeginTransactionAsync();
            try
            {
                var allRoles = await _context.Roles.Where(r => r.Active).ToListAsync();
                var allUsers = await _context.Users.Where(u => u.Active).ToListAsync();
                var compRow = await _context.Components.FirstOrDefaultAsync(c => c.PageId == pId && c.NodeId == nodeId);

                var parsedPolicies = new List<ComponentPolicyItemDto>();
                if (hasArr)
                {
                    foreach (var el in policiesEl.EnumerateArray())
                    {
                        if (el.ValueKind != JsonValueKind.Object) continue;

                        int id = ParseIntOrZero(el, "id", "Id");
                        int? roleId = ParseNullableInt(el, "roleId", "RoleId");
                        string? roleCode = ParseString(el, "roleCode", "RoleCode");
                        string? roleName = ParseString(el, "roleName", "RoleName");

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
                            else
                            {
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

                        parsedPolicies.Add(new ComponentPolicyItemDto
                        {
                            Id = id,
                            PageId = pId,
                            NodeId = nodeId,
                            ComponentId = ParseNullableInt(el, "componentId", "ComponentId") ?? compRow?.Id,
                            UserId = userId,
                            UserName = userName,
                            RoleId = roleId,
                            RoleCode = roleCode,
                            RoleName = roleName,
                            FieldName = ParseString(el, "fieldName", "FieldName") ?? defaultFieldName ?? nodeId,
                            CanRead = ParseBool(el, true, "canRead", "CanRead"),
                            CanWrite = ParseBool(el, false, "canWrite", "CanWrite"),
                            CanWriteAll = ParseBool(el, false, "canWriteAll", "CanWriteAll"),
                            CanDelete = ParseBool(el, false, "canDelete", "CanDelete"),
                            CanDeactivate = ParseBool(el, false, "canDeactivate", "CanDeactivate"),
                            Description = ParseString(el, "description", "Description"),
                            Active = ParseBool(el, true, "active", "Active")
                        });
                    }
                }

                var existingPolicies = await _context.ComponentPolicies
                    .Where(cp => cp.PageId == pId && cp.NodeId == nodeId)
                    .ToListAsync();

                var incomingIds = parsedPolicies.Where(p => p.Id > 0).Select(p => p.Id).ToHashSet();

                // 1. Xóa các rule bị xóa khỏi danh sách
                var toDelete = existingPolicies.Where(ep => !incomingIds.Contains(ep.Id)).ToList();
                if (toDelete.Count > 0)
                {
                    _context.ComponentPolicies.RemoveRange(toDelete);
                }

                var existingDict = existingPolicies.ToDictionary(ep => ep.Id);

                // 2. Cập nhật hoặc thêm mới
                foreach (var item in parsedPolicies)
                {
                    if (item.Id > 0 && existingDict.TryGetValue(item.Id, out var existing))
                    {
                        existing.UserId = item.UserId > 0 ? item.UserId : null;
                        existing.RoleId = item.RoleId > 0 ? item.RoleId : null;
                        existing.FieldName = item.FieldName;
                        existing.CanRead = item.CanRead;
                        existing.CanWrite = item.CanWrite;
                        existing.CanWriteAll = item.CanWriteAll;
                        existing.CanDelete = item.CanDelete;
                        existing.CanDeactivate = item.CanDeactivate;
                        existing.Description = item.Description;
                        existing.Active = item.Active;
                        existing.UpdatedDate = DateTime.UtcNow;
                        existing.UpdatedBy = User.Identity?.Name ?? "system";
                    }
                    else
                    {
                        var newPolicy = new ComponentPolicy
                        {
                            PageId = pId,
                            NodeId = nodeId,
                            ComponentId = item.ComponentId,
                            UserId = item.UserId > 0 ? item.UserId : null,
                            RoleId = item.RoleId > 0 ? item.RoleId : null,
                            FieldName = item.FieldName,
                            CanRead = item.CanRead,
                            CanWrite = item.CanWrite,
                            CanWriteAll = item.CanWriteAll,
                            CanDelete = item.CanDelete,
                            CanDeactivate = item.CanDeactivate,
                            Description = item.Description,
                            Active = item.Active,
                            CreatedDate = DateTime.UtcNow,
                            CreatedBy = User.Identity?.Name ?? "system"
                        };
                        _context.ComponentPolicies.Add(newPolicy);
                    }
                }

                // 3. Đồng bộ cache vào UIComponent.PermissionsJson nếu tồn tại trong bảng Components
                if (compRow != null)
                {
                    var cacheObj = new
                    {
                        policies = parsedPolicies.Select(p => new
                        {
                            userId = p.UserId,
                            userName = p.UserName,
                            roleId = p.RoleId,
                            roleCode = p.RoleCode,
                            canRead = p.CanRead,
                            canWrite = p.CanWrite,
                            canWriteAll = p.CanWriteAll,
                            canDelete = p.CanDelete,
                            canDeactivate = p.CanDeactivate,
                            active = p.Active
                        }).ToList()
                    };
                    compRow.PermissionsJson = JsonSerializer.Serialize(cacheObj);
                    compRow.UpdatedAt = DateTime.UtcNow;
                }

                await _context.SaveChangesAsync();
                await tx.CommitAsync();

                return await GetComponentPolicies(pId.ToString(), nodeId);
            }
            catch (Exception ex)
            {
                await tx.RollbackAsync();
                _logger.LogError(ex, "Failed to save component policies for {PageId} / {NodeId}", pId, nodeId);
                return StatusCode(500, new { message = "Error saving component policies.", details = ex.Message });
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
