using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    /// <summary>
    /// 🧩 ComponentPolicy: Chính sách phân quyền chi tiết cho từng phần tử (Component) và Cột bảng lưới (GridPolicy).
    /// Chuẩn hóa 5 quyền cốt lõi: Xem, Cập nhật, Cập nhật toàn bộ, Xóa, Hủy theo Người dùng (UserId) hoặc Vai trò (RoleId).
    /// </summary>
    public class ComponentPolicy : BaseEntity
    {
        [Required]
        public int PageId { get; set; }

        [Required]
        [MaxLength(100)]
        public string NodeId { get; set; } = string.Empty;

        public int? ComponentId { get; set; }

        public int? RoleId { get; set; }

        public int? UserId { get; set; }

        [MaxLength(100)]
        public string? FieldName { get; set; }

        public bool CanRead { get; set; } = true;         // Xem (false -> Ẩn component / che giấu trường nhạy cảm)

        public bool CanWrite { get; set; } = false;       // Cập nhật trên bản ghi của chính mình (CreatedBy == currentUser)

        public bool CanWriteAll { get; set; } = false;    // Cập nhật toàn bộ: Sửa được trên mọi bản ghi (kể cả do role khác tạo)

        public bool CanDelete { get; set; } = false;      // Xóa (false -> Ẩn/khóa nút xóa hoặc xóa dòng con)

        public bool CanDeactivate { get; set; } = false;  // Hủy (false -> Ẩn/khóa nút hủy / deactive)

        [MaxLength(500)]
        public string? Description { get; set; }

        // Navigation
        [ForeignKey("PageId")]
        public Page? Page { get; set; }

        [ForeignKey("ComponentId")]
        public UIComponent? Component { get; set; }

        [ForeignKey("RoleId")]
        public Role? Role { get; set; }

        [ForeignKey("UserId")]
        public User? User { get; set; }
    }
}
