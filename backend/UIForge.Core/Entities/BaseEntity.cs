using System;

namespace UIForge.Core.Entities
{
    /// <summary>
    /// 🏛️ Lớp thực thể cơ sở (BaseEntity) chuẩn của UIForge Core Framework.
    /// NGUYÊN TẮC BẮT BUỘC:
    /// - Mọi Table/Entity nghiệp vụ của doanh nghiệp khi tích hợp vào UIForge ĐỀU PHẢI kế thừa từ BaseEntity này.
    /// - Hỗ trợ Xóa mềm (Soft Delete) thông qua cờ `Active`.
    /// - Hỗ trợ Dấu vết kiểm toán (Audit Trail) thông qua CreatedDate, CreatedBy, UpdatedDate, UpdatedBy.
    /// - Mọi truy vấn mặc định trong hệ thống đều tự động gán điều kiện: Active == true.
    /// </summary>
    public abstract class BaseEntity
    {
        public int Id { get; set; }
        public bool Active { get; set; } = true;
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public string? CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string? UpdatedBy { get; set; }
    }
}

