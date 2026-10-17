using Microsoft.EntityFrameworkCore;
using UIForge.API.Models.Entities;

namespace UIForge.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects => Set<Project>();
        public DbSet<Page> Pages => Set<Page>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Project -> Pages (1-to-many)
            modelBuilder.Entity<Project>()
                .HasMany(p => p.Pages)
                .WithOne(p => p.Project)
                .HasForeignKey(p => p.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);

            // Seed demo project and page for rapid initial boot
            var demoProjectId = "demo-project-001";
            var demoPageId = "page-01";

            modelBuilder.Entity<Project>().HasData(new Project
            {
                Id = demoProjectId,
                Name = "Enterprise Demo System",
                Description = "Low-code system template built with UIForge",
                OwnerId = "admin",
                CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
            });

            modelBuilder.Entity<Page>().HasData(new Page
            {
                Id = demoPageId,
                ProjectId = demoProjectId,
                Name = "Orders & Inventory View",
                Route = "/inventory",
                LayoutTemplateId = "sidebar-left",
                ComponentsJson = "[]",
                CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                UpdatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc),
            });
        }
    }
}
