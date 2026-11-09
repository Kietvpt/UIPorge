using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    public class UIComponent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string NodeId { get; set; } = string.Empty;

        [Required]
        public int PageId { get; set; }

        public int? ParentId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Type { get; set; } = string.Empty;

        [Column(TypeName = "nvarchar(max)")]
        public string PropsJson { get; set; } = "{}";

        [Column(TypeName = "nvarchar(max)")]
        public string StyleJson { get; set; } = "{}";

        [Column(TypeName = "nvarchar(max)")]
        public string EventsJson { get; set; } = "[]";

        [Column(TypeName = "nvarchar(max)")]
        public string? DataBindingJson { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? ValidationJson { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string? PermissionsJson { get; set; }

        public int Order { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        [ForeignKey("PageId")]
        public Page? Page { get; set; }

        [ForeignKey("ParentId")]
        public UIComponent? Parent { get; set; }

        public ICollection<UIComponent> Children { get; set; } = new List<UIComponent>();
    }
}

