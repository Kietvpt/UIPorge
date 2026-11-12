using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.Core.Entities
{
    /// <summary>
    /// 🛡️ Role: Vai trò người dùng trong hệ thống (RBAC).
    /// </summary>
    public class Role : BaseEntity
    {
        [Required]
        [MaxLength(50)]
        public string Code { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? Description { get; set; }
    }

    /// <summary>
    /// 🔗 UserRole: Bảng liên kết Người dùng - Vai trò (N-N).
    /// </summary>
    public class UserRole : BaseEntity
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }
    }

    /// <summary>
    /// 🔒 RolePermission: Phân quyền chi tiết theo Vai trò cho từng Màn hình (Feature) và Thực thể (Entity).
    /// </summary>
    public class RolePermission : BaseEntity
    {
        public int RoleId { get; set; }

        [MaxLength(100)]
        public string? FeatureCode { get; set; }

        [MaxLength(100)]
        public string? EntityName { get; set; }

        public bool CanRead { get; set; } = true;
        public bool CanCreate { get; set; } = false;
        public bool CanUpdate { get; set; } = false;
        public bool CanDelete { get; set; } = false;
        public bool CanExport { get; set; } = true;
    }
}
