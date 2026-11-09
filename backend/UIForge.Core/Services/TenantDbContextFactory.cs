using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using UIForge.Core.Data;

namespace UIForge.Core.Services
{
    /// <summary>
    /// Tạo DbContext trỏ vào database của một branch bất kỳ.
    /// Dùng cho các luồng chưa có JWT (vd: lúc login hoặc background jobs).
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
            var connStr = BranchConnectionFactory.Build(_config, branch);
            var options = new DbContextOptionsBuilder<UIForgeDbContext>()
                .UseSqlServer(connStr)
                .Options;
            return new UIForgeDbContext(options);
        }

        public TContext CreateCustom<TContext>(string? branch, Func<DbContextOptions<TContext>, TContext> factory) where TContext : DbContext
        {
            var connStr = BranchConnectionFactory.Build(_config, branch);
            var options = new DbContextOptionsBuilder<TContext>()
                .UseSqlServer(connStr)
                .Options;
            return factory(options);
        }
    }
}

