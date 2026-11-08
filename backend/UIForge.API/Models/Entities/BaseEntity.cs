using System;

namespace UIForge.API.Models.Entities
{
    /// <summary>
    /// 🏛️ Lớp thực thể cơ sở (BaseEntity) chuẩn của UIForge Core Framework.
    /// 
    /// NGUYÊN TẮC BẮT BUỘC:
    /// - Mọi Table/Entity nghiệp vụ của doanh nghiệp khi tích hợp vào UIForge 
    ///   ĐỀU PHẢI kế thừa từ BaseEntity này.
    /// - Hỗ trợ Xóa mềm (Soft Delete) thông qua cờ `Active`.
    /// - Hỗ trợ Dấu vết kiểm toán (Audit Trail) thông qua CreatedDate, CreatedBy, UpdatedDate, UpdatedBy.
    /// - Mọi truy vấn mặc định trong hệ thống đều tự động gán điều kiện: Active == true.
    /// </summary>
    public abstract class BaseEntity
    {
        /// <summary>
        /// Khóa chính định danh duy nhất của bản ghi
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Cờ trạng thái hoạt động phục vụ Xóa mềm (Soft Delete).
        /// True: Bản ghi khả dụng.
        /// False: Bản ghi đã xóa mềm, không hiển thị trong các truy vấn thông thường.
        /// </summary>
        public bool Active { get; set; } = true;

        /// <summary>
        /// Thời điểm tạo bản ghi (UTC)
        /// </summary>
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        /// <summary>
        /// Tài khoản người dùng đã tạo bản ghi
        /// </summary>
        public string? CreatedBy { get; set; }

        /// <summary>
        /// Thời điểm cập nhật bản ghi gần nhất (UTC)
        /// </summary>
        public DateTime? UpdatedDate { get; set; }

        /// <summary>
        /// Tài khoản người dùng cập nhật bản ghi gần nhất
        /// </summary>
        public string? UpdatedBy { get; set; }
    }
}
