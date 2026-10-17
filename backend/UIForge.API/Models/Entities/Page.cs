using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.API.Models.Entities
{
    public class Page
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString("N");

        [Required]
        public string ProjectId { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Route { get; set; } = "/";

        [Required]
        [MaxLength(100)]
        public string LayoutTemplateId { get; set; } = "sidebar-left";

        /// <summary>
        /// Stores the entire JSON tree of components for ultra-fast rendering & flexibility
        /// </summary>
        [Column(TypeName = "nvarchar(max)")]
        public string ComponentsJson { get; set; } = "[]";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        [ForeignKey("ProjectId")]
        public Project? Project { get; set; }
    }
}
