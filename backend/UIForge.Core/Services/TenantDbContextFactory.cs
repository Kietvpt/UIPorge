using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UIForge.Core.Data;
using UIForge.Core.Extensions;

namespace UIForge.Core.Services
{
    /// <summary>
    /// Tạo DbContext trỏ vào database của một branch bất kỳ.
    /// Dùng cho các luồng chưa có JWT (vd: lúc login hoặc background jobs).
    /// Hỗ trợ Multi-DB Provider: SqlServer, PostgreSQL, SQLite.
    /// </summary>
    public class TenantDbContextFactory
    {
        private readonly IConfiguration _config;

        public TenantDbContextFactory(IConfiguration config)
        {
            _config = config;
        }

        public UIForgeDbContext Create(string? branch)
        {
            var options = new DbContextOptionsBuilder<UIForgeDbContext>()
                .UseUIForgeDatabase(_config, branch)
                .Options;
            return new UIForgeDbContext(options);
        }

        public TContext CreateCustom<TContext>(string? branch, Func<DbContextOptions<TContext>, TContext> factory) where TContext : DbContext
        {
            var options = new DbContextOptionsBuilder<TContext>()
                .UseUIForgeDatabase(_config, branch)
                .Options;
            return factory(options);
        }
    }
}
