using Microsoft.EntityFrameworkCore;
using UIForge.Core.Data;
using UIForge.API.Modules.Logistics.Entities;

namespace UIForge.API.Data
{
    /// <summary>
    /// 🏛️ AppDbContext của Host Web API (Mẫu thử nghiệm Logistics ERP).
    /// Kế thừa toàn bộ bảng và siêu dữ liệu từ UIForgeDbContext (thư viện UIForge.Core),
    /// và mở rộng các DbSet nghiệp vụ Logistics (Transactions, Terminals, Containers).
    /// </summary>
    public class AppDbContext : UIForgeDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // =========================================================================
        // 📦 SAMPLE BUSINESS MODULE TABLES (Logistics Test Bench)
        // =========================================================================
        public DbSet<TransactionEntity> Transactions => Set<TransactionEntity>();
        public DbSet<TerminalEntity> Terminals => Set<TerminalEntity>();
        public DbSet<ContainerEntity> Containers => Set<ContainerEntity>();
        public DbSet<VendorEntity> Vendors => Set<VendorEntity>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Cấu hình bảng Core từ thư viện UIForge.Core
            base.OnModelCreating(modelBuilder);

            // Cấu hình các bảng nghiệp vụ Logistics mẫu
            modelBuilder.Entity<TransactionEntity>(entity =>
            {
                entity.ToTable("Transactions");
                entity.Property(e => e.TotalGw).HasColumnType("decimal(18,2)");
                entity.Property(e => e.TotalCbm).HasColumnType("decimal(18,2)");
                entity.Property(e => e.TotalVgm).HasColumnType("decimal(18,2)");
            });

            modelBuilder.Entity<TerminalEntity>(entity =>
            {
                entity.ToTable("Terminals");
            });

            modelBuilder.Entity<ContainerEntity>(entity =>
            {
                entity.ToTable("Containers");
                entity.Property(e => e.Gw).HasColumnType("decimal(18,2)");
                entity.Property(e => e.Cbm).HasColumnType("decimal(18,2)");
                entity.Property(e => e.Vgm).HasColumnType("decimal(18,2)");
            });

            modelBuilder.Entity<VendorEntity>(entity =>
            {
                entity.ToTable("Vendors");
            });
        }
    }
}
