using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    /// <summary>
    /// ⚙️ UserSetting: Lưu cấu hình cá nhân hóa của người dùng (GridPolicy: độ rộng cột, ẩn/hiện cột, ghim, v.v.).
    /// Kế thừa BaseEntity (hỗ trợ Soft Delete qua cờ Active và Audit Trail).
    /// </summary>
    public class UserSetting : BaseEntity
    {
        public int? UserId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Username { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string FeatureCode { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string ComponentId { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string SettingType { get; set; } = "GridPolicy";

        [Required]
        [Column(TypeName = "nvarchar(max)")]
        public string SettingJson { get; set; } = "{}";
    }
}
