using System;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using UIForge.Core.Data;
using UIForge.Core.Services;

namespace UIForge.Core.Extensions
{
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// 🚀 Cấu hình Database Provider cho DbContextOptionsBuilder dựa trên Database:Provider ("SqlServer" | "PostgreSQL" | "SQLite").
        /// </summary>
        public static DbContextOptionsBuilder UseUIForgeDatabase(
            this DbContextOptionsBuilder options,
            IConfiguration config,
            string? branch = null)
        {
            var provider = BranchConnectionFactory.GetDatabaseProvider(config);
            var connStr = BranchConnectionFactory.Build(config, branch);

            return provider switch
            {
                "PostgreSQL" => options.UseNpgsql(connStr),
                "SQLite" => options.UseSqlite(connStr),
                _ => options.UseSqlServer(connStr)
            };
        }

        /// <summary>
        /// 🚀 Cấu hình Database Provider cho DbContextOptionsBuilder&lt;TContext&gt; dựa trên Database:Provider ("SqlServer" | "PostgreSQL" | "SQLite").
        /// </summary>
        public static DbContextOptionsBuilder<TContext> UseUIForgeDatabase<TContext>(
            this DbContextOptionsBuilder<TContext> options,
            IConfiguration config,
            string? branch = null) where TContext : DbContext
        {
            var provider = BranchConnectionFactory.GetDatabaseProvider(config);
            var connStr = BranchConnectionFactory.Build(config, branch);

            return provider switch
            {
                "PostgreSQL" => options.UseNpgsql(connStr),
                "SQLite" => options.UseSqlite(connStr),
                _ => options.UseSqlServer(connStr)
            };
        }

        /// <summary>
        /// 🚀 Đăng ký toàn bộ các dịch vụ và thành phần của UIForge Core Framework vào DI Container.
        /// </summary>
        public static IServiceCollection AddUIForgeCore<TContext>(this IServiceCollection services, IConfiguration configuration)
            where TContext : UIForgeDbContext
        {
            services.AddHttpContextAccessor();
            services.AddSingleton<TenantDbContextFactory>();
            services.AddSingleton<JwtTokenService>();
            
            // Ánh xạ UIForgeDbContext sang TContext của Host Application
            services.AddScoped<UIForgeDbContext>(sp => sp.GetRequiredService<TContext>());

            return services;
        }

        /// <summary>
        /// 📦 Tự động nạp toàn bộ Controllers từ thư viện UIForge.Core vào ứng dụng Web API Host.
        /// </summary>
        public static IMvcBuilder AddUIForgeControllers(this IMvcBuilder builder)
        {
            return builder.AddApplicationPart(typeof(UIForge.Core.Controllers.DynamicMetadataController).Assembly);
        }

        /// <summary>
        /// 🔐 Đăng ký JWT Authentication tiêu chuẩn cho UIForge.
        /// </summary>
        public static IServiceCollection AddUIForgeJwtAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            var jwtKey = configuration["Jwt:Key"] ?? "DefaultFallbackSecretKeyForUIForgeCoreFramework2026!#*";
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = configuration["Jwt:Issuer"] ?? "UIForge",
                        ValidAudience = configuration["Jwt:Audience"] ?? "UIForgeClient",
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
                    };
                });
            services.AddAuthorization();

            return services;
        }
    }
}
