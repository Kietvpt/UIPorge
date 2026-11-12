using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace UIForge.Core.Services
{
    public class FileUploadResult
    {
        public string FileName { get; set; } = string.Empty;
        public string OriginalName { get; set; } = string.Empty;
        public string RelativePath { get; set; } = string.Empty;
        public string DownloadUrl { get; set; } = string.Empty;
        public long Size { get; set; }
        public string ContentType { get; set; } = string.Empty;
        public DateTime UploadedAt { get; set; } = DateTime.UtcNow;
    }

    /// <summary>
    /// 📂 FileStorageService: Dịch vụ quản lý lưu trữ, tải xuống và vệ sinh file đính kèm.
    /// Kế thừa và cải tiến từ FileUploadController & GenericController của Core C#.
    /// </summary>
    public class FileStorageService
    {
        private readonly IWebHostEnvironment _env;
        private readonly string _uploadRoot;

        // Các đuôi tệp nguy hiểm bị cấm tuyệt đối
        private static readonly HashSet<string> BlockedExtensions = new(StringComparer.OrdinalIgnoreCase)
        {
            ".exe", ".bat", ".cmd", ".sh", ".php", ".asp", ".aspx", ".dll", ".com", ".ps1", ".vbs", ".msi"
        };

        public FileStorageService(IWebHostEnvironment env)
        {
            _env = env;
            _uploadRoot = Path.Combine(_env.ContentRootPath, "uploads");
            if (!Directory.Exists(_uploadRoot))
            {
                Directory.CreateDirectory(_uploadRoot);
            }
        }

        public string GetUploadRoot() => _uploadRoot;

        /// <summary>
        /// Lưu một file upload vào thư mục uploads/{yyyyMM}/
        /// Tự động chống trùng tên file qua IncreaseFileName.
        /// </summary>
        public async Task<FileUploadResult> SaveFileAsync(IFormFile file, string? baseUrl = null)
        {
            if (file == null || file.Length == 0)
            {
                throw new ArgumentException("Tệp tải lên không có dữ liệu hoặc rỗng.");
            }

            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (BlockedExtensions.Contains(extension))
            {
                throw new InvalidOperationException($"Phần mở rộng '{extension}' không được phép tải lên vì lý do bảo mật.");
            }

            var subFolder = DateTime.UtcNow.ToString("yyyyMM");
            var targetDir = Path.Combine(_uploadRoot, subFolder);
            if (!Directory.Exists(targetDir))
            {
                Directory.CreateDirectory(targetDir);
            }

            // Chuẩn hóa tên file an toàn
            var originalCleanName = Path.GetFileName(file.FileName);
            var safeBaseName = Path.GetFileNameWithoutExtension(originalCleanName)
                .Replace(" ", "_")
                .Replace("%", "_")
                .Replace("#", "_");

            var targetPath = Path.Combine(targetDir, safeBaseName + extension);
            targetPath = IncreaseFileName(targetPath);

            var finalFileName = Path.GetFileName(targetPath);
            var relativePath = $"uploads/{subFolder}/{finalFileName}";

            await using (var stream = new FileStream(targetPath, FileMode.Create, FileAccess.Write, FileShare.None))
            {
                await file.CopyToAsync(stream);
            }

            var cleanBaseUrl = (baseUrl ?? string.Empty).TrimEnd('/');
            var downloadUrl = string.IsNullOrEmpty(cleanBaseUrl)
                ? $"/api/core/files/download/{subFolder}/{finalFileName}"
                : $"{cleanBaseUrl}/api/core/files/download/{subFolder}/{finalFileName}";

            return new FileUploadResult
            {
                FileName = finalFileName,
                OriginalName = originalCleanName,
                RelativePath = relativePath,
                DownloadUrl = downloadUrl,
                Size = file.Length,
                ContentType = GetContentType(targetPath),
                UploadedAt = DateTime.UtcNow
            };
        }

        /// <summary>
        /// Lưu danh sách nhiều file cùng lúc
        /// </summary>
        public async Task<List<FileUploadResult>> SaveFilesAsync(IEnumerable<IFormFile> files, string? baseUrl = null)
        {
            var results = new List<FileUploadResult>();
            foreach (var file in files)
            {
                if (file.Length > 0)
                {
                    results.Add(await SaveFileAsync(file, baseUrl));
                }
            }
            return results;
        }

        /// <summary>
        /// Lấy đường dẫn file vật lý an toàn và kiểm tra chống Directory Traversal
        /// </summary>
        public string GetPhysicalPath(string relativeOrSubPath)
        {
            var clean = relativeOrSubPath.Replace("\\", "/").TrimStart('/');
            if (clean.StartsWith("uploads/", StringComparison.OrdinalIgnoreCase))
            {
                clean = clean.Substring("uploads/".Length);
            }

            var fullPath = Path.GetFullPath(Path.Combine(_uploadRoot, clean));
            var fullRoot = Path.GetFullPath(_uploadRoot);

            if (!fullPath.StartsWith(fullRoot, StringComparison.OrdinalIgnoreCase))
            {
                throw new UnauthorizedAccessException("Đường dẫn tệp không hợp lệ (Directory Traversal detected).");
            }

            return fullPath;
        }

        /// <summary>
        /// Xóa file vật lý
        /// </summary>
        public bool DeleteFile(string relativeOrSubPath)
        {
            var physicalPath = GetPhysicalPath(relativeOrSubPath);
            if (File.Exists(physicalPath))
            {
                File.Delete(physicalPath);
                return true;
            }
            return false;
        }

        /// <summary>
        /// Chống trùng tên file (kế thừa từ Core C# IncreaseFileName)
        /// </summary>
        public static string IncreaseFileName(string path)
        {
            var uploadedPath = path;
            var index = 0;
            while (File.Exists(path))
            {
                var noExtension = Path.GetFileNameWithoutExtension(uploadedPath);
                var dir = Path.GetDirectoryName(uploadedPath) ?? string.Empty;
                var ext = Path.GetExtension(uploadedPath);
                index++;
                path = Path.Combine(dir, $"{noExtension}_{index}{ext}");
            }
            return path;
        }

        /// <summary>
        /// Suy đoán ContentType chuẩn
        /// </summary>
        public static string GetContentType(string filePath)
        {
            var ext = Path.GetExtension(filePath).ToLowerInvariant();
            return ext switch
            {
                ".pdf" => "application/pdf",
                ".png" => "image/png",
                ".jpg" or ".jpeg" => "image/jpeg",
                ".gif" => "image/gif",
                ".webp" => "image/webp",
                ".svg" => "image/svg+xml",
                ".xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                ".xls" => "application/vnd.ms-excel",
                ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ".doc" => "application/msword",
                ".txt" => "text/plain; charset=utf-8",
                ".csv" => "text/csv; charset=utf-8",
                ".json" => "application/json",
                ".zip" => "application/zip",
                _ => "application/octet-stream"
            };
        }
    }
}
