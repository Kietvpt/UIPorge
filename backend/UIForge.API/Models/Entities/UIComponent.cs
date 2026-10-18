using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.API.Models.Entities
{
    /// <summary>
    /// Một component trong cây giao diện của Page.
    /// Id = khóa chính identity (số tự tăng do DB quản lý).
    /// NodeId = id phía client (frontend), dùng dựng cây khi trả về.
    /// Quan hệ cha-con tự tham chiếu: ParentId -> Id (identity) của node cha.
    /// </summary>
    public class UIComponent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        /// <summary>Id phía client (frontend node id), unique trong phạm vi 1 page</summary>
        [Required]
        [MaxLength(100)]
        public string NodeId { get; set; } = string.Empty;

        [Required]
        public string PageId { get; set; } = string.Empty;

        /// <summary>Id (identity) của component cha. NULL = node gốc của page.</summary>
        public int? ParentId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Type { get; set; } = string.Empty;

        /// <summary>Toàn bộ props (label, placeholder, variant, flexConfig, gridConfig...)</summary>
        [Column(TypeName = "nvarchar(max)")]
        public string PropsJson { get; set; } = "{}";

        /// <summary>Toàn bộ style tùy biến (width, padding, colors...)</summary>
        [Column(TypeName = "nvarchar(max)")]
        public string StyleJson { get; set; } = "{}";

        /// <summary>Danh sách event handlers (onClick, onChange...)</summary>
        [Column(TypeName = "nvarchar(max)")]
        public string EventsJson { get; set; } = "[]";

        /// <summary>Thứ tự hiển thị trong cùng cấp cha</summary>
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
