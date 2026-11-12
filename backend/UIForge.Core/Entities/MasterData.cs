using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    /// <summary>
    /// 🌳 MasterData: Bảng danh mục tham chiếu cây phân cấp dùng chung cho toàn bộ hệ thống UIForge.
    /// Kế thừa BaseEntity (hỗ trợ Soft Delete qua cờ Active và Audit Trail).
    /// </summary>
    public class MasterData : BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string Code { get; set; } = string.Empty;

        [Required]
        [MaxLength(250)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Type { get; set; } = string.Empty;

        public int? ParentId { get; set; }

        [MaxLength(500)]
        public string? Path { get; set; }

        public int SortOrder { get; set; } = 0;

        [MaxLength(1000)]
        public string? Description { get; set; }
    }
}
