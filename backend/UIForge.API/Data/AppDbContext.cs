using Microsoft.EntityFrameworkCore;
using UIForge.API.Models.Entities;
using UIForge.API.Services;

namespace UIForge.API.Data
{
    /// <summary>
    /// DbContext gắn với MỘT database branch cụ thể (UIPorge_{branch}).
    /// Instance được tạo per-request theo "branch" claim trong JWT (xem Program.cs),
    /// hoặc qua TenantDbContextFactory khi chưa đăng nhập.
    /// </summary>
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users => Set<User>();
        public DbSet<Project> Projects => Set<Project>();
        public DbSet<Page> Pages => Set<Page>();
        public DbSet<UIComponent> Components => Set<UIComponent>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Project -> Pages (1-n, xóa project xóa luôn pages)
            modelBuilder.Entity<Project>()
                .HasMany(p => p.Pages)
                .WithOne(p => p.Project)
                .HasForeignKey(p => p.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);

            // Page -> Components (1-n, xóa page xóa luôn components)
            modelBuilder.Entity<Page>()
                .HasMany(p => p.Components)
                .WithOne(c => c.Page)
                .HasForeignKey(c => c.PageId)
                .OnDelete(DeleteBehavior.Cascade);

            // Component -> Component cha-con tự tham chiếu.
            // Restrict để tránh lỗi "multiple cascade paths" của SQL Server.
            modelBuilder.Entity<UIComponent>()
                .HasOne(c => c.Parent)
                .WithMany(c => c.Children)
                .HasForeignKey(c => c.ParentId)
                .OnDelete(DeleteBehavior.Restrict);

            // NodeId (id phía client) unique trong phạm vi 1 page
            modelBuilder.Entity<UIComponent>()
                .HasIndex(c => new { c.PageId, c.NodeId })
                .IsUnique();

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            var seedDate = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc);

            // ---------- Seed users mặc định (mỗi branch DB đều có bộ user này) ----------
            // admin / admin123  -> role Dev (được chỉnh sửa)
            // viewer / viewer123 -> role User (chỉ xem)
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Username = "admin",
                    PasswordHash = PasswordHasher.Hash("admin123"),
                    FullName = "Quản trị hệ thống",
                    Role = "Dev",
                    CreatedAt = seedDate,
                },
                new User
                {
                    Id = 2,
                    Username = "viewer",
                    PasswordHash = PasswordHasher.Hash("viewer123"),
                    FullName = "Người dùng xem",
                    Role = "User",
                    CreatedAt = seedDate,
                }
            );

            // ---------- Seed demo project ----------
            const int demoProjectId = 1;
            const int demoPageId = 1;

            modelBuilder.Entity<Project>().HasData(new Project
            {
                Id = demoProjectId,
                Name = "Enterprise Demo System",
                Description = "Low-code system template built with UIForge",
                OwnerId = 1,
                CreatedAt = seedDate,
                UpdatedAt = seedDate,
            });

            modelBuilder.Entity<Page>().HasData(new Page
            {
                Id = demoPageId,
                ProjectId = demoProjectId,
                Name = "Tổng quan hệ thống",
                Route = "/dashboard",
                Icon = "LayoutDashboard",
                ScriptFile = "dashboard.bl.ts",
                LayoutTemplateId = "sidebar-left",
                LayoutConfigJson = "{\"direction\":\"column\",\"gap\":\"16px\",\"wrap\":\"wrap\"}",
                CreatedAt = seedDate,
                UpdatedAt = seedDate,
            });

            // ---------- Seed cây components demo (dashboard thống kê) ----------
            // Id = identity do DB quản lý; NodeId = id phía client; ParentId = Id của cha
            modelBuilder.Entity<UIComponent>().HasData(
                new UIComponent
                {
                    Id = 1,
                    NodeId = "box-stats",
                    PageId = demoPageId,
                    ParentId = null,
                    Type = "Container",
                    PropsJson = "{\"layoutMode\":\"grid\",\"gridConfig\":{\"columns\":3,\"gap\":\"16px\"}}",
                    StyleJson = "{\"padding\":\"16px\",\"backgroundColor\":\"#1e293b\",\"borderRadius\":\"12px\",\"border\":\"1px solid #334155\",\"width\":\"100%\"}",
                    EventsJson = "[]",
                    Order = 1,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 2,
                    NodeId = "stat-1",
                    PageId = demoPageId,
                    ParentId = 1,
                    Type = "Container",
                    PropsJson = "{\"layoutMode\":\"flex\",\"flexConfig\":{\"direction\":\"column\",\"wrap\":\"nowrap\",\"justify\":\"flex-start\",\"align\":\"flex-start\",\"gap\":\"4px\"}}",
                    StyleJson = "{\"padding\":\"16px\",\"backgroundColor\":\"#0f172a\",\"borderRadius\":\"8px\",\"border\":\"1px solid #334155\"}",
                    EventsJson = "[]",
                    Order = 1,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 3,
                    NodeId = "lbl-stat-1",
                    PageId = demoPageId,
                    ParentId = 2,
                    Type = "Label",
                    PropsJson = "{\"label\":\"Doanh thu hôm nay\"}",
                    StyleJson = "{\"color\":\"#94a3b8\",\"fontSize\":\"12px\"}",
                    EventsJson = "[]",
                    Order = 1,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 4,
                    NodeId = "lbl-stat-val-1",
                    PageId = demoPageId,
                    ParentId = 2,
                    Type = "Label",
                    PropsJson = "{\"label\":\"₫ 128,450,000\"}",
                    StyleJson = "{\"color\":\"#38bdf8\",\"fontSize\":\"20px\",\"fontWeight\":\"bold\"}",
                    EventsJson = "[]",
                    Order = 2,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 5,
                    NodeId = "stat-2",
                    PageId = demoPageId,
                    ParentId = 1,
                    Type = "Container",
                    PropsJson = "{\"layoutMode\":\"flex\",\"flexConfig\":{\"direction\":\"column\",\"wrap\":\"nowrap\",\"justify\":\"flex-start\",\"align\":\"flex-start\",\"gap\":\"4px\"}}",
                    StyleJson = "{\"padding\":\"16px\",\"backgroundColor\":\"#0f172a\",\"borderRadius\":\"8px\",\"border\":\"1px solid #334155\"}",
                    EventsJson = "[]",
                    Order = 2,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 6,
                    NodeId = "lbl-stat-2",
                    PageId = demoPageId,
                    ParentId = 5,
                    Type = "Label",
                    PropsJson = "{\"label\":\"Đơn hàng mới\"}",
                    StyleJson = "{\"color\":\"#94a3b8\",\"fontSize\":\"12px\"}",
                    EventsJson = "[]",
                    Order = 1,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 7,
                    NodeId = "lbl-stat-val-2",
                    PageId = demoPageId,
                    ParentId = 5,
                    Type = "Label",
                    PropsJson = "{\"label\":\"1,429 đơn\"}",
                    StyleJson = "{\"color\":\"#4ade80\",\"fontSize\":\"20px\",\"fontWeight\":\"bold\"}",
                    EventsJson = "[]",
                    Order = 2,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 8,
                    NodeId = "stat-3",
                    PageId = demoPageId,
                    ParentId = 1,
                    Type = "Container",
                    PropsJson = "{\"layoutMode\":\"flex\",\"flexConfig\":{\"direction\":\"column\",\"wrap\":\"nowrap\",\"justify\":\"flex-start\",\"align\":\"flex-start\",\"gap\":\"4px\"}}",
                    StyleJson = "{\"padding\":\"16px\",\"backgroundColor\":\"#0f172a\",\"borderRadius\":\"8px\",\"border\":\"1px solid #334155\"}",
                    EventsJson = "[]",
                    Order = 3,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 9,
                    NodeId = "lbl-stat-3",
                    PageId = demoPageId,
                    ParentId = 8,
                    Type = "Label",
                    PropsJson = "{\"label\":\"Tỉ lệ hoàn tất\"}",
                    StyleJson = "{\"color\":\"#94a3b8\",\"fontSize\":\"12px\"}",
                    EventsJson = "[]",
                    Order = 1,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                },
                new UIComponent
                {
                    Id = 10,
                    NodeId = "lbl-stat-val-3",
                    PageId = demoPageId,
                    ParentId = 8,
                    Type = "Label",
                    PropsJson = "{\"label\":\"98.6%\"}",
                    StyleJson = "{\"color\":\"#facc15\",\"fontSize\":\"20px\",\"fontWeight\":\"bold\"}",
                    EventsJson = "[]",
                    Order = 2,
                    CreatedAt = seedDate,
                    UpdatedAt = seedDate,
                }
            );
        }
    }
}
