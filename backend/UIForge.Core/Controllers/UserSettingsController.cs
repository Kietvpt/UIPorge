using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UIForge.Core.Data;
using UIForge.Core.Entities;

namespace UIForge.Core.Controllers
{
    /// <summary>
    /// ⚙️ UserSettingsController: API Quản lý Cấu hình Cá nhân hóa của Người dùng
    /// (Lưu trữ GridPolicy tùy biến: thứ tự cột, độ rộng cột, ẩn/hiện cột, ghim freeze...).
    /// </summary>
    [ApiController]
    [Route("api/core/user-settings")]
    public class UserSettingsController : ControllerBase
    {
        private readonly UIForgeDbContext _dbContext;

        public UserSettingsController(UIForgeDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public class SaveUserSettingDto
        {
            public int? UserId { get; set; }
            public string? Username { get; set; }
            public string FeatureCode { get; set; } = string.Empty;
            public string ComponentId { get; set; } = string.Empty;
            public string SettingType { get; set; } = "GridPolicy";
            public string SettingJson { get; set; } = "{}";
        }

        /// <summary>
        /// 🔍 GET /api/core/user-settings?featureCode=...&componentId=...&settingType=GridPolicy
        /// Lấy cấu hình cá nhân hóa của user hiện tại (theo JWT hoặc query username, fallback "admin").
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetUserSetting(
            [FromQuery] string featureCode,
            [FromQuery] string componentId,
            [FromQuery] string settingType = "GridPolicy",
            [FromQuery] string? username = null)
        {
            if (string.IsNullOrWhiteSpace(featureCode) || string.IsNullOrWhiteSpace(componentId))
            {
                return BadRequest(new { message = "featureCode và componentId không được để trống." });
            }

            var effectiveUser = !string.IsNullOrWhiteSpace(username)
                ? username.Trim()
                : User.Identity?.Name ?? "admin";

            var effectiveType = string.IsNullOrWhiteSpace(settingType) ? "GridPolicy" : settingType.Trim();

            var setting = await _dbContext.UserSettings
                .AsNoTracking()
                .Where(s => s.Active &&
                            s.Username == effectiveUser &&
                            s.FeatureCode == featureCode &&
                            s.ComponentId == componentId &&
                            s.SettingType == effectiveType)
                .OrderByDescending(s => s.Id)
                .FirstOrDefaultAsync();

            if (setting == null)
            {
                return NotFound(new { message = "Không tìm thấy cấu hình người dùng." });
            }

            return Ok(setting);
        }

        /// <summary>
        /// 💾 POST /api/core/user-settings
        /// Thêm mới hoặc cập nhật (Upsert) cấu hình cá nhân hóa cho bộ (Username, FeatureCode, ComponentId, SettingType).
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> SaveUserSetting([FromBody] SaveUserSettingDto dto)
        {
            if (dto == null || string.IsNullOrWhiteSpace(dto.FeatureCode) || string.IsNullOrWhiteSpace(dto.ComponentId))
            {
                return BadRequest(new { message = "Dữ liệu cấu hình hoặc featureCode / componentId không hợp lệ." });
            }

            var effectiveUser = !string.IsNullOrWhiteSpace(dto.Username)
                ? dto.Username.Trim()
                : User.Identity?.Name ?? "admin";

            var effectiveType = string.IsNullOrWhiteSpace(dto.SettingType) ? "GridPolicy" : dto.SettingType.Trim();

            var existing = await _dbContext.UserSettings
                .FirstOrDefaultAsync(s => s.Active &&
                                          s.Username == effectiveUser &&
                                          s.FeatureCode == dto.FeatureCode &&
                                          s.ComponentId == dto.ComponentId &&
                                          s.SettingType == effectiveType);

            if (existing != null)
            {
                existing.SettingJson = dto.SettingJson ?? "{}";
                existing.UpdatedDate = DateTime.UtcNow;
                existing.UpdatedBy = effectiveUser;
                if (dto.UserId.HasValue) existing.UserId = dto.UserId.Value;
            }
            else
            {
                existing = new UserSetting
                {
                    UserId = dto.UserId,
                    Username = effectiveUser,
                    FeatureCode = dto.FeatureCode,
                    ComponentId = dto.ComponentId,
                    SettingType = effectiveType,
                    SettingJson = dto.SettingJson ?? "{}",
                    Active = true,
                    CreatedDate = DateTime.UtcNow,
                    CreatedBy = effectiveUser
                };
                _dbContext.UserSettings.Add(existing);
            }

            await _dbContext.SaveChangesAsync();
            return Ok(existing);
        }

        /// <summary>
        /// 🗑️ DELETE /api/core/user-settings?featureCode=...&componentId=...&settingType=GridPolicy
        /// Xóa cấu hình cá nhân hóa để người dùng quay về giao diện mặc định.
        /// </summary>
        [HttpDelete]
        public async Task<IActionResult> DeleteUserSetting(
            [FromQuery] string featureCode,
            [FromQuery] string componentId,
            [FromQuery] string settingType = "GridPolicy",
            [FromQuery] string? username = null)
        {
            var effectiveUser = !string.IsNullOrWhiteSpace(username)
                ? username.Trim()
                : User.Identity?.Name ?? "admin";

            var effectiveType = string.IsNullOrWhiteSpace(settingType) ? "GridPolicy" : settingType.Trim();

            var setting = await _dbContext.UserSettings
                .FirstOrDefaultAsync(s => s.Active &&
                                          s.Username == effectiveUser &&
                                          s.FeatureCode == featureCode &&
                                          s.ComponentId == componentId &&
                                          s.SettingType == effectiveType);

            if (setting != null)
            {
                setting.Active = false;
                setting.UpdatedDate = DateTime.UtcNow;
                setting.UpdatedBy = effectiveUser;
                await _dbContext.SaveChangesAsync();
            }

            return Ok(new { success = true, message = "Đã đặt lại cấu hình mặc định thành công." });
        }
    }
}
