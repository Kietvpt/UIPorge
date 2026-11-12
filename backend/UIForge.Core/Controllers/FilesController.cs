using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UIForge.Core.Services;

namespace UIForge.Core.Controllers
{
    /// <summary>
    /// 📂 FilesController: Bộ API quản trị Upload, Download và Xóa tệp đính kèm.
    /// Kế thừa và chuẩn hóa từ FileUploadController & GenericController của Core C#.
    /// </summary>
    [ApiController]
    [Route("api/core/files")]
    public class FilesController : ControllerBase
    {
        private readonly FileStorageService _storageService;
        private readonly ILogger<FilesController> _logger;

        public FilesController(
            IWebHostEnvironment env,
            ILogger<FilesController> logger,
            FileStorageService? storageService = null)
        {
            _storageService = storageService ?? new FileStorageService(env);
            _logger = logger;
        }

        /// <summary>
        /// 📤 POST /api/core/files/upload
        /// Nhận một hoặc nhiều tệp đính kèm từ multipart/form-data.
        /// </summary>
        [HttpPost("upload")]
        public async Task<IActionResult> UploadFiles([FromForm] List<IFormFile>? files, IFormFile? file)
        {
            var uploadList = new List<IFormFile>();
            if (files != null && files.Count > 0)
            {
                uploadList.AddRange(files.Where(f => f.Length > 0));
            }
            if (file != null && file.Length > 0 && !uploadList.Contains(file))
            {
                uploadList.Add(file);
            }

            // Fallback: Đọc từ Request.Form.Files nếu danh sách truyền vào qua model binding rỗng
            if (uploadList.Count == 0 && Request.HasFormContentType && Request.Form.Files.Count > 0)
            {
                uploadList.AddRange(Request.Form.Files.Where(f => f.Length > 0));
            }

            if (uploadList.Count == 0)
            {
                return BadRequest(new { success = false, message = "Không tìm thấy tệp đính kèm nào được tải lên." });
            }

            var baseUrl = $"{Request.Scheme}://{Request.Host.Value}";
            try
            {
                var results = await _storageService.SaveFilesAsync(uploadList, baseUrl);
                return Ok(new
                {
                    success = true,
                    count = results.Count,
                    data = results,
                    // Nếu chỉ upload 1 file thì cung cấp luôn shortcut file đầu tiên cho tiện tích hợp
                    file = results.FirstOrDefault()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi lưu tệp tải lên.");
                return BadRequest(new { success = false, message = ex.Message });
            }
        }

        /// <summary>
        /// 📥 GET /api/core/files/download/{*filePath}
        /// Tải xuống tệp tin với đúng ContentType hoặc mở xem trực tiếp trong trình duyệt.
        /// </summary>
        [HttpGet("download/{*filePath}")]
        public IActionResult DownloadFile(string filePath, [FromQuery] bool inline = false)
        {
            if (string.IsNullOrWhiteSpace(filePath))
            {
                return BadRequest(new { success = false, message = "Đường dẫn tệp không được để trống." });
            }

            try
            {
                var physicalPath = _storageService.GetPhysicalPath(filePath);
                if (!System.IO.File.Exists(physicalPath))
                {
                    return NotFound(new { success = false, message = $"Không tìm thấy tệp '{filePath}'." });
                }

                var fileName = Path.GetFileName(physicalPath);
                var contentType = FileStorageService.GetContentType(physicalPath);

                if (inline)
                {
                    Response.Headers["Content-Disposition"] = $"inline; filename=\"{fileName}\"";
                }

                return PhysicalFile(physicalPath, contentType, enableRangeProcessing: true);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Forbid(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi tải tệp '{FilePath}'.", filePath);
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        /// <summary>
        /// 🗑️ DELETE /api/core/files/{*filePath}
        /// Xóa tệp tin vật lý đã lưu trên máy chủ.
        /// </summary>
        [HttpDelete("{*filePath}")]
        public IActionResult DeleteFile(string filePath)
        {
            if (string.IsNullOrWhiteSpace(filePath))
            {
                return BadRequest(new { success = false, message = "Đường dẫn tệp không được để trống." });
            }

            try
            {
                var deleted = _storageService.DeleteFile(filePath);
                if (!deleted)
                {
                    return NotFound(new { success = false, message = $"Không tìm thấy tệp '{filePath}' để xóa." });
                }

                return Ok(new { success = true, message = $"Đã xóa tệp '{filePath}' thành công." });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Forbid(ex.Message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi xóa tệp '{FilePath}'.", filePath);
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }
    }
}
