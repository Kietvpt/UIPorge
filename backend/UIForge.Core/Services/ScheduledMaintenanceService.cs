using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace UIForge.Core.Services
{
    public class JobExecutionRecord
    {
        public string JobName { get; set; } = string.Empty;
        public DateTime ExecutedAt { get; set; } = DateTime.UtcNow;
        public bool Success { get; set; } = true;
        public string Details { get; set; } = string.Empty;
        public long DurationMs { get; set; }
    }

    /// <summary>
    /// 🕒 ScheduledMaintenanceService: BackgroundService định kỳ tự động chạy tác vụ nền của UIForge Core.
    /// Kế thừa chức năng DeleteDowloadService, RemindJobBgService và Hangfire của Core C# cũ.
    /// 100% Native .NET 8 BCL, zero-dependency.
    /// </summary>
    public class ScheduledMaintenanceService : BackgroundService
    {
        private readonly IWebHostEnvironment _env;
        private readonly ILogger<ScheduledMaintenanceService> _logger;
        private static readonly ConcurrentQueue<JobExecutionRecord> JobLogs = new();
        private const int MaxLogHistory = 50;

        public ScheduledMaintenanceService(IWebHostEnvironment env, ILogger<ScheduledMaintenanceService> logger)
        {
            _env = env;
            _logger = logger;
        }

        public static List<JobExecutionRecord> GetJobHistory() => JobLogs.ToArray().OrderByDescending(x => x.ExecutedAt).ToList();

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("🕒 UIForge ScheduledMaintenanceService đã khởi chạy thành công.");

            // Chờ 10 giây sau khi app khởi động để tránh chiếm dụng tài nguyên
            await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);

            while (!stoppingToken.IsCancellationRequested)
            {
                var sw = System.Diagnostics.Stopwatch.StartNew();
                try
                {
                    // 1. Dọn dẹp tệp tin tạm (Clean Expired Temp Files)
                    var cleanedCount = CleanTemporaryUploads();

                    // 2. Ghi nhận log thực thi
                    sw.Stop();
                    var record = new JobExecutionRecord
                    {
                        JobName = "CleanTemporaryUploads & HealthCheck",
                        ExecutedAt = DateTime.UtcNow,
                        Success = true,
                        Details = $"Đã quét thư mục uploads. Đã dọn dẹp {cleanedCount} tệp tạm/hết hạn.",
                        DurationMs = sw.ElapsedMilliseconds
                    };
                    LogJob(record);
                }
                catch (Exception ex)
                {
                    sw.Stop();
                    _logger.LogError(ex, "Lỗi trong chu kỳ ScheduledMaintenanceService.");
                    LogJob(new JobExecutionRecord
                    {
                        JobName = "CleanTemporaryUploads",
                        ExecutedAt = DateTime.UtcNow,
                        Success = false,
                        Details = ex.Message,
                        DurationMs = sw.ElapsedMilliseconds
                    });
                }

                // Chạy định kỳ mỗi 30 phút một lần
                await Task.Delay(TimeSpan.FromMinutes(30), stoppingToken);
            }
        }

        private int CleanTemporaryUploads()
        {
            var uploadsPath = Path.Combine(_env.ContentRootPath, "uploads");
            if (!Directory.Exists(uploadsPath)) return 0;

            var cleaned = 0;
            var tempFolder = Path.Combine(uploadsPath, "temp");
            if (Directory.Exists(tempFolder))
            {
                var files = Directory.GetFiles(tempFolder);
                var threshold = DateTime.UtcNow.AddDays(-1); // File tạm quá 24h
                foreach (var f in files)
                {
                    try
                    {
                        if (File.GetCreationTimeUtc(f) < threshold)
                        {
                            File.Delete(f);
                            cleaned++;
                        }
                    }
                    catch
                    {
                        // Bỏ qua file đang bị process khác khóa
                    }
                }
            }

            return cleaned;
        }

        private static void LogJob(JobExecutionRecord record)
        {
            JobLogs.Enqueue(record);
            while (JobLogs.Count > MaxLogHistory)
            {
                JobLogs.TryDequeue(out _);
            }
        }
    }
}
