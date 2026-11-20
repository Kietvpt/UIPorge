using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    /// <summary>
    /// 🛡️ FeaturePolicy: Chính sách phân quyền chi tiết cho Feature (Màn hình / Tính năng).
    /// Chuẩn hóa 13 cột khớp 100% với FeaturePolicy.cs và giao diện Core C# cũ.
    /// Hỗ trợ phân quyền theo Người dùng (UserId) hoặc Vai trò (RoleId).
    /// </summary>
    public class FeaturePolicy : BaseEntity
    {
        [Required]
        public int FeatureId { get; set; }

        [MaxLength(50)]
        public string? FeatureCode { get; set; }

        [MaxLength(100)]
        public string? EntityName { get; set; }

        public int? RoleId { get; set; }

        public int? UserId { get; set; }

        public bool CanRead { get; set; } = true;

        public bool CanWrite { get; set; } = false;

        public bool CanWriteAll { get; set; } = false;

        public bool CanDelete { get; set; } = false;

        public bool CanDeleteAll { get; set; } = false;

        public bool CanDeactivate { get; set; } = false;

        public bool CanShare { get; set; } = false;

        public int RecordId { get; set; } = 0;

        public int? LockUpdateAfterCreated { get; set; }

        public int? LockDeleteAfterCreated { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        // Navigation
        [ForeignKey("FeatureId")]
        public Page? Feature { get; set; }

        [ForeignKey("RoleId")]
        public Role? Role { get; set; }

        [ForeignKey("UserId")]
        public User? User { get; set; }
    }
}
