using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    public class Page
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int ProjectId { get; set; }

        [MaxLength(50)]
        public string? Code { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? Title { get; set; }

        [Required]
        [MaxLength(200)]
        public string Route { get; set; } = "/";

        [MaxLength(100)]
        public string? Icon { get; set; }

        public int? ParentId { get; set; }

        public int Order { get; set; } = 0;

        public bool IsMenu { get; set; } = true;

        public bool IsGroup { get; set; } = false;

        public bool Active { get; set; } = true;

        [MaxLength(100)]
        public string? EntityName { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        [MaxLength(255)]
        public string? ScriptFile { get; set; }

        public string? ScriptContent { get; set; }

        [Required]
        [MaxLength(100)]
        public string LayoutTemplateId { get; set; } = "sidebar-left";

        public string? LayoutConfigJson { get; set; }

        public string? FeaturePropsJson { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        [ForeignKey("ProjectId")]
        public Project? Project { get; set; }

        [ForeignKey("ParentId")]
        public Page? Parent { get; set; }

        public ICollection<Page> Children { get; set; } = new List<Page>();

        public ICollection<UIComponent> Components { get; set; } = new List<UIComponent>();
    }
}
