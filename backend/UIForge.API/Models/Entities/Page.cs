using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.API.Models.Entities
{
    public class Page
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int ProjectId { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Route { get; set; } = "/";

        /// <summary>Tên icon (lucide-react) hiển thị trên navbar</summary>
        [MaxLength(100)]
        public string? Icon { get; set; }

        [Required]
        [MaxLength(100)]
        public string LayoutTemplateId { get; set; } = "sidebar-left";

        /// <summary>Tên file nghiệp vụ TypeScript (BL file) gắn với màn hình này</summary>
        [MaxLength(255)]
        public string? ScriptFile { get; set; }

        /// <summary>Cấu hình layout tổng của page (direction, gap, wrap) dạng JSON</summary>
        [Column(TypeName = "nvarchar(max)")]
        public string? LayoutConfigJson { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        [ForeignKey("ProjectId")]
        public Project? Project { get; set; }

        public ICollection<UIComponent> Components { get; set; } = new List<UIComponent>();
    }
}
