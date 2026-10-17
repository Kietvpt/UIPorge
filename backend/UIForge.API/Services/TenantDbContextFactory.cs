using Microsoft.EntityFrameworkCore;
using UIForge.API.Data;

namespace UIForge.API.Services
{
    /// <summary>
    /// Tạo AppDbContext trỏ vào database của một branch bất kỳ.
    /// Dùng cho các luồng chưa có JWT (vd: lúc login).
    /// </summary>
    public class TenantDbContextFactory
    {
        private readonly IConfiguration _config;

        public TenantDbContextFactory(IConfiguration config)
        {
            _config = config;
        }

        public AppDbContext Create(string? branch)
        {
            var connStr = BranchConnectionFactory.Build(_config, branch);
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseSqlServer(connStr)
                .Options;
            return new AppDbContext(options);
        }
    }
}
