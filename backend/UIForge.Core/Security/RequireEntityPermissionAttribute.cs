using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using UIForge.Core.Data;
using UIForge.Core.Entities;

namespace UIForge.Core.Security
{
    /// <summary>
    /// 🛡️ RequireEntityPermissionAttribute: Action Filter kiểm tra phân quyền RBAC & Feature/Component Policy động
    /// cho các thao tác trên thực thể (Entity) theo HTTP Method.
    /// GET -> CanRead, POST -> CanWrite/CanCreate, PUT/PATCH -> CanWrite/CanWriteAll hoặc Component-level CanWrite/CanWriteAll (Method B), DELETE -> CanDelete/CanDeleteAll.
    /// An toàn, tương thích ngược:
    /// - Không có JWT và không có X-Preview-Role -> Cho phép đi qua (chế độ phát triển).
    /// - Role == "Dev" (hoặc X-Preview-Role == "Dev") -> Toàn quyền bypass.
    /// - Role != "Dev" -> Kiểm tra ma trận FeaturePolicies & ComponentPolicies, fallback sang RolePermissions.
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
    public class RequireEntityPermissionAttribute : Attribute, IAsyncActionFilter
    {
        private readonly string? _entityName;

        public RequireEntityPermissionAttribute(string? entityName = null)
        {
            _entityName = entityName;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var httpContext = context.HttpContext;
            var user = httpContext.User;

            // 1. Kiểm tra header giả lập vai trò (Preview as Role) từ TopNav FE
            var previewRole = httpContext.Request.Headers["X-Preview-Role"].FirstOrDefault();

            // Nếu request chưa xác thực và không có preview role -> Cho phép đi qua (môi trường dev không JWT)
            if ((user?.Identity == null || !user.Identity.IsAuthenticated) && string.IsNullOrWhiteSpace(previewRole))
            {
                await next();
                return;
            }

            // 2. Xác định vai trò hiệu lực: X-Preview-Role ghi đè role trong JWT token
            var roleClaim = !string.IsNullOrWhiteSpace(previewRole)
                ? previewRole
                : (user?.FindFirst(ClaimTypes.Role)?.Value ?? user?.FindFirst("role")?.Value);

            // Nếu vai trò là "Dev" -> Toàn quyền truy cập (Bypass 100%)
            if (string.Equals(roleClaim, "Dev", StringComparison.OrdinalIgnoreCase))
            {
                await next();
                return;
            }

            // 3. Xác định targetEntity từ attribute constructor hoặc từ route values
            var targetEntity = _entityName;
            if (string.IsNullOrWhiteSpace(targetEntity) && context.RouteData.Values.TryGetValue("entityName", out var routeVal))
            {
                targetEntity = routeVal?.ToString();
            }

            if (string.IsNullOrWhiteSpace(targetEntity))
            {
                await next();
                return;
            }

            var cleanEntity = targetEntity.Trim();
            var dbContext = httpContext.RequestServices.GetService<UIForgeDbContext>();
            if (dbContext == null)
            {
                await next();
                return;
            }

            try
            {
                var method = httpContext.Request.Method.ToUpperInvariant();

                // Lấy UserId từ claims (nếu không giả lập role)
                int userId = 0;
                if (string.IsNullOrWhiteSpace(previewRole) && user != null)
                {
                    var subVal = user.FindFirst(ClaimTypes.NameIdentifier)?.Value 
                                 ?? user.FindFirst("sub")?.Value;
                    int.TryParse(subVal, out userId);
                }

                // Tìm danh sách RoleId của user / preview role
                var roleIds = new List<int>();
                if (!string.IsNullOrWhiteSpace(previewRole))
                {
                    var pRole = await dbContext.Set<Role>()
                        .FirstOrDefaultAsync(r => r.Code == previewRole || r.Name == previewRole);
                    if (pRole != null)
                    {
                        roleIds.Add(pRole.Id);
                    }
                }
                else
                {
                    if (userId > 0)
                    {
                        roleIds = await dbContext.Set<UserRole>()
                            .Where(ur => ur.UserId == userId && ur.Active)
                            .Select(ur => ur.RoleId)
                            .ToListAsync();
                    }

                    if (roleIds.Count == 0 && !string.IsNullOrWhiteSpace(roleClaim))
                    {
                        var roleObj = await dbContext.Set<Role>()
                            .FirstOrDefaultAsync(r => r.Code == roleClaim && r.Active);
                        if (roleObj != null)
                        {
                            roleIds.Add(roleObj.Id);
                        }
                    }
                }

                // 4. Xác định FeatureId từ header X-Feature-Id hoặc suy ra từ EntityName qua bảng Pages
                var featureIdHeader = httpContext.Request.Headers["X-Feature-Id"].FirstOrDefault();
                int.TryParse(featureIdHeader, out var featureId);

                if (featureId <= 0)
                {
                    var page = await dbContext.Set<Page>()
                        .FirstOrDefaultAsync(p => p.EntityName == cleanEntity || p.EntityName == targetEntity);
                    if (page != null)
                    {
                        featureId = page.Id;
                    }
                }

                // 5. Kiểm tra phân quyền ma trận cấp Feature (FeaturePolicies) & cấp Component (ComponentPolicies)
                if (featureId > 0)
                {
                    var featurePolicies = await dbContext.Set<FeaturePolicy>()
                        .Where(fp => fp.FeatureId == featureId && fp.Active &&
                                     ((userId > 0 && fp.UserId == userId) || (fp.RoleId.HasValue && roleIds.Contains(fp.RoleId.Value))))
                        .ToListAsync();

                    if (featurePolicies.Count > 0)
                    {
                        // Quy tắc đích danh UserId có độ ưu tiên cao hơn RoleId
                        var effectivePolicies = (userId > 0 && featurePolicies.Any(fp => fp.UserId == userId))
                            ? featurePolicies.Where(fp => fp.UserId == userId).ToList()
                            : featurePolicies;

                        bool canRead = effectivePolicies.Any(p => p.CanRead);
                        bool canWrite = effectivePolicies.Any(p => p.CanWrite);
                        bool canWriteAll = effectivePolicies.Any(p => p.CanWriteAll);
                        bool canDelete = effectivePolicies.Any(p => p.CanDelete);
                        bool canDeleteAll = effectivePolicies.Any(p => p.CanDeleteAll);
                        bool canDeactivate = effectivePolicies.Any(p => p.CanDeactivate);

                        if (method == "GET")
                        {
                            if (!canRead)
                            {
                                context.Result = new ObjectResult(new
                                {
                                    success = false,
                                    message = $"Bạn không có quyền xem dữ liệu trên tính năng '{cleanEntity}'."
                                }) { StatusCode = 403 };
                                return;
                            }
                            await next();
                            return;
                        }
                        else if (method == "DELETE")
                        {
                            if (!canDelete && !canDeleteAll)
                            {
                                context.Result = new ObjectResult(new
                                {
                                    success = false,
                                    message = $"Bạn không có quyền xóa dữ liệu trên tính năng '{cleanEntity}'."
                                }) { StatusCode = 403 };
                                return;
                            }
                            await next();
                            return;
                        }
                        else if (method == "PUT" || method == "PATCH")
                        {
                            // Nếu có quyền sửa cấp Feature -> cho phép qua
                            if (canWrite || canWriteAll)
                            {
                                await next();
                                return;
                            }

                            // Nếu ở cấp Feature chỉ có CanRead (không có CanWrite / CanWriteAll)
                            // Kiểm tra xem có ComponentPolicy nào cấp CanWrite hoặc CanWriteAll không (Partial Edit Mode - Phương án B)
                            if (canRead)
                            {
                                var hasComponentWrite = await dbContext.Set<ComponentPolicy>()
                                    .AnyAsync(cp => cp.PageId == featureId 
                                                 && cp.Active 
                                                 && (cp.CanWrite || cp.CanWriteAll)
                                                 && ((userId > 0 && cp.UserId == userId) || (cp.RoleId.HasValue && roleIds.Contains(cp.RoleId.Value))));

                                if (hasComponentWrite)
                                {
                                    // Cho phép request đi tiếp vào DynamicMetadataController để thực hiện Phương án B (Silent Field Filter)
                                    await next();
                                    return;
                                }
                            }

                            context.Result = new ObjectResult(new
                            {
                                success = false,
                                message = $"Bạn không có quyền cập nhật dữ liệu trên tính năng '{cleanEntity}'."
                            }) { StatusCode = 403 };
                            return;
                        }
                        else if (method == "POST")
                        {
                            if (!canWrite && !canWriteAll)
                            {
                                context.Result = new ObjectResult(new
                                {
                                    success = false,
                                    message = $"Bạn không có quyền thêm mới dữ liệu trên tính năng '{cleanEntity}'."
                                }) { StatusCode = 403 };
                                return;
                            }
                            await next();
                            return;
                        }
                    }
                }

                // 6. Fallback sang bảng RolePermissions truyền thống (Tương thích ngược 100%)
                if (roleIds.Count > 0)
                {
                    var permissions = await dbContext.Set<RolePermission>()
                        .Where(p => roleIds.Contains(p.RoleId) && p.Active &&
                                    (p.EntityName == cleanEntity ||
                                     p.EntityName == cleanEntity + "s" ||
                                     (cleanEntity.EndsWith("s") && p.EntityName == cleanEntity.Substring(0, cleanEntity.Length - 1)) ||
                                     p.EntityName == "*"))
                        .ToListAsync();

                    if (permissions.Count > 0)
                    {
                        bool isAllowed = method switch
                        {
                            "GET" => permissions.Any(p => p.CanRead),
                            "POST" => permissions.Any(p => p.CanCreate),
                            "PUT" or "PATCH" => permissions.Any(p => p.CanUpdate),
                            "DELETE" => permissions.Any(p => p.CanDelete),
                            _ => true
                        };

                        // Nếu method là PUT/PATCH mà RolePermissions không cho phép, kiểm tra thêm ComponentPolicies nếu có featureId
                        if (!isAllowed && (method == "PUT" || method == "PATCH") && featureId > 0)
                        {
                            var hasComponentWrite = await dbContext.Set<ComponentPolicy>()
                                .AnyAsync(cp => cp.PageId == featureId 
                                             && cp.Active 
                                             && (cp.CanWrite || cp.CanWriteAll)
                                             && ((userId > 0 && cp.UserId == userId) || (cp.RoleId.HasValue && roleIds.Contains(cp.RoleId.Value))));
                            if (hasComponentWrite)
                            {
                                isAllowed = true;
                            }
                        }

                        if (!isAllowed)
                        {
                            context.Result = new ObjectResult(new
                            {
                                success = false,
                                message = $"Bạn không có quyền thực hiện thao tác '{method}' trên thực thể '{targetEntity}'."
                            })
                            {
                                StatusCode = 403
                            };
                            return;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Ghi log lỗi kiểm tra quyền nhưng không làm sập ứng dụng
                var logger = httpContext.RequestServices.GetService<ILogger<RequireEntityPermissionAttribute>>();
                logger?.LogWarning(ex, "Lỗi kiểm tra quyền RBAC trên thực thể {EntityName}. Bỏ qua kiểm tra.", targetEntity);
            }

            await next();
        }
    }
}
