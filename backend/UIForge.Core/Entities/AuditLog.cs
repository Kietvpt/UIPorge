using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    /// <summary>
    /// 📜 AuditLog: Bảng lưu vết kiểm toán chi tiết từng trường của mọi thực thể trong hệ thống.
    /// Kế thừa BaseEntity (hỗ trợ Soft Delete qua cờ Active và Audit Trail).
    /// </summary>
    public class AuditLog : BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string EntityName { get; set; } = string.Empty;

        public int RecordId { get; set; }

        [Required]
        [MaxLength(30)]
        public string Action { get; set; } = string.Empty; // CREATE, UPDATE, PATCH, DELETE

        [Column(TypeName = "nvarchar(max)")]
        public string ChangesJson { get; set; } = "[]"; // [{ field, oldValue, newValue }]

        [MaxLength(100)]
        public string ChangedBy { get; set; } = "system";

        public DateTime ChangedAt { get; set; } = DateTime.UtcNow;
    }
}
