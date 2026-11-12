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
    /// 🛡️ RequireEntityPermissionAttribute: Action Filter kiểm tra phân quyền RBAC động
    /// cho các thao tác trên thực thể (Entity) theo HTTP Method.
    /// GET -> CanRead, POST -> CanCreate, PUT/PATCH -> CanUpdate, DELETE -> CanDelete.
    /// An toàn, tương thích ngược:
    /// - Không có JWT hoặc Role == "Dev" -> Cho phép đi qua.
    /// - Role != "Dev" -> Kiểm tra bảng RolePermissions trong UIForgeDbContext.
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

            // 1. Nếu request chưa được xác thực (môi trường dev/test hoặc anonymous) -> Cho phép đi qua
            if (user?.Identity == null || !user.Identity.IsAuthenticated)
            {
                await next();
                return;
            }

            // 2. Nếu User có role "Dev" -> Toàn quyền truy cập
            var roleClaim = user.FindFirst(ClaimTypes.Role)?.Value 
                            ?? user.FindFirst("role")?.Value;
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

            var dbContext = httpContext.RequestServices.GetService<UIForgeDbContext>();
            if (dbContext == null)
            {
                await next();
                return;
            }

            try
            {
                var method = httpContext.Request.Method.ToUpperInvariant();

                // Lấy UserId từ claims
                var subVal = user.FindFirst(ClaimTypes.NameIdentifier)?.Value 
                             ?? user.FindFirst("sub")?.Value;
                int.TryParse(subVal, out var userId);

                // Tìm danh sách RoleId của user
                var roleIds = new List<int>();
                if (userId > 0)
                {
                    roleIds = await dbContext.Set<UserRole>()
                        .Where(ur => ur.UserId == userId && ur.Active)
                        .Select(ur => ur.RoleId)
                        .ToListAsync();
                }

                // Nếu chưa có trong UserRoles, tìm Role theo roleClaim trong bảng Roles
                if (roleIds.Count == 0 && !string.IsNullOrWhiteSpace(roleClaim))
                {
                    var roleObj = await dbContext.Set<Role>()
                        .FirstOrDefaultAsync(r => r.Code == roleClaim && r.Active);
                    if (roleObj != null)
                    {
                        roleIds.Add(roleObj.Id);
                    }
                }

                if (roleIds.Count > 0)
                {
                    var cleanEntity = targetEntity.Trim();

                    // Tìm các rules phân quyền tương ứng
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
