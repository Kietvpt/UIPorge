using System;
using System.Collections.Generic;

namespace UIForge.Core.DTOs
{
    /// <summary>
    /// DTO cho từng dòng phân quyền Feature (khớp 13 cột của Core C# cũ)
    /// </summary>
    public class FeaturePolicyItemDto
    {
        public int Id { get; set; }
        public int FeatureId { get; set; }
        public string? FeatureCode { get; set; }
        public string? EntityName { get; set; }
        public int? UserId { get; set; }
        public string? UserName { get; set; }
        public int? RoleId { get; set; }
        public string? RoleCode { get; set; }
        public string? RoleName { get; set; }
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
        public string? Description { get; set; }
        public bool Active { get; set; } = true;
    }

    /// <summary>
    /// Request lưu danh sách phân quyền của 1 Feature
    /// </summary>
    public class SaveFeaturePoliciesRequest
    {
        public int FeatureId { get; set; }
        public List<FeaturePolicyItemDto> Policies { get; set; } = new();
    }

    /// <summary>
    /// DTO cho từng dòng phân quyền Component & GridPolicy (chuẩn 5 quyền: Xem, Cập nhật, Cập nhật tất cả, Xóa, Hủy)
    /// </summary>
    public class ComponentPolicyItemDto
    {
        public int Id { get; set; }
        public int PageId { get; set; }
        public string NodeId { get; set; } = string.Empty;
        public int? ComponentId { get; set; }
        public int? UserId { get; set; }
        public string? UserName { get; set; }
        public int? RoleId { get; set; }
        public string? RoleCode { get; set; }
        public string? RoleName { get; set; }
        public string? FieldName { get; set; }
        public bool CanRead { get; set; } = true;
        public bool CanWrite { get; set; } = false;
        public bool CanWriteAll { get; set; } = false;
        public bool CanDelete { get; set; } = false;
        public bool CanDeactivate { get; set; } = false;
        public string? Description { get; set; }
        public bool Active { get; set; } = true;
    }

    /// <summary>
    /// Request lưu danh sách phân quyền của 1 Component / Column
    /// </summary>
    public class SaveComponentPoliciesRequest
    {
        public int PageId { get; set; }
        public string NodeId { get; set; } = string.Empty;
        public List<ComponentPolicyItemDto> Policies { get; set; } = new();
    }

    /// <summary>
    /// Request tạo mới vai trò người dùng động (Dynamic Role)
    /// </summary>
    public class CreateRoleRequest
    {
        public string Code { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
    }
}
