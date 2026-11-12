using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace UIForge.Core.Hubs
{
    public class RecordLockInfo
    {
        public string LockKey { get; set; } = string.Empty;
        public string EntityName { get; set; } = string.Empty;
        public int RecordId { get; set; }
        public string Username { get; set; } = string.Empty;
        public string ConnectionId { get; set; } = string.Empty;
        public DateTime LockedAt { get; set; } = DateTime.UtcNow;
    }

    /// <summary>
    /// ⚡ UIForgeHub: ASP.NET Core SignalR Realtime Hub cho UIForge Platform (.NET 8).
    /// Hỗ trợ thông báo thời gian thực, quản trị nhóm màn hình (Feature Groups),
    /// và Chốt chặn khóa bản ghi đồng thời (Pessimistic / Concurrent Record Locking).
    /// </summary>
    public class UIForgeHub : Hub
    {
        private static readonly ConcurrentDictionary<string, RecordLockInfo> ActiveLocks = new(StringComparer.OrdinalIgnoreCase);
        private static readonly ConcurrentDictionary<string, HashSet<string>> ConnectionLocks = new();
        private readonly ILogger<UIForgeHub> _logger;

        public UIForgeHub(ILogger<UIForgeHub> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Tham gia vào nhóm màn hình / phân hệ (Feature Code)
        /// </summary>
        public async Task JoinFeatureGroup(string featureCode)
        {
            if (!string.IsNullOrWhiteSpace(featureCode))
            {
                var groupName = $"feature_{featureCode.Trim().ToLowerInvariant()}";
                await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
                _logger.LogInformation("Connection {ConnectionId} joined group {GroupName}", Context.ConnectionId, groupName);
            }
        }

        /// <summary>
        /// Rời khỏi nhóm màn hình / phân hệ
        /// </summary>
        public async Task LeaveFeatureGroup(string featureCode)
        {
            if (!string.IsNullOrWhiteSpace(featureCode))
            {
                var groupName = $"feature_{featureCode.Trim().ToLowerInvariant()}";
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
                _logger.LogInformation("Connection {ConnectionId} left group {GroupName}", Context.ConnectionId, groupName);
            }
        }

        /// <summary>
        /// 🔒 Khóa bản ghi khi một người dùng bắt đầu chỉnh sửa (ngăn người khác ghi đè)
        /// </summary>
        public async Task<bool> LockRecord(string entityName, int recordId, string username)
        {
            if (string.IsNullOrWhiteSpace(entityName) || recordId <= 0) return false;

            var cleanEntity = entityName.Trim();
            var lockKey = $"{cleanEntity}_{recordId}".ToLowerInvariant();
            var currentConn = Context.ConnectionId;
            var safeUsername = string.IsNullOrWhiteSpace(username) ? "Người dùng khác" : username.Trim();

            // Kiểm tra xem đã bị ai khóa chưa
            if (ActiveLocks.TryGetValue(lockKey, out var existing))
            {
                // Nếu chính kết nối này khóa hoặc lock đã quá 30 phút (hết hạn) -> gia hạn
                if (existing.ConnectionId == currentConn || (DateTime.UtcNow - existing.LockedAt).TotalMinutes > 30)
                {
                    existing.ConnectionId = currentConn;
                    existing.Username = safeUsername;
                    existing.LockedAt = DateTime.UtcNow;
                    return true;
                }

                // Đang bị người khác khóa -> từ chối
                return false;
            }

            var lockInfo = new RecordLockInfo
            {
                LockKey = lockKey,
                EntityName = cleanEntity,
                RecordId = recordId,
                Username = safeUsername,
                ConnectionId = currentConn,
                LockedAt = DateTime.UtcNow
            };

            ActiveLocks[lockKey] = lockInfo;

            // Ghi nhận lock vào danh sách kết nối để tự động giải phóng khi ngắt kết nối
            ConnectionLocks.AddOrUpdate(currentConn,
                _ => new HashSet<string>(StringComparer.OrdinalIgnoreCase) { lockKey },
                (_, set) => { lock (set) { set.Add(lockKey); } return set; });

            // Thông báo tới tất cả các client khác trong hệ thống
            await Clients.Others.SendAsync("RecordLocked", new
            {
                entityName = cleanEntity,
                recordId,
                username = safeUsername,
                lockedAt = lockInfo.LockedAt
            });

            _logger.LogInformation("Bản ghi {EntityName} #{RecordId} đã bị khóa bởi {Username} ({ConnectionId})", cleanEntity, recordId, safeUsername, currentConn);
            return true;
        }

        /// <summary>
        /// 🔓 Mở khóa bản ghi khi người dùng lưu xong hoặc hủy chỉnh sửa
        /// </summary>
        public async Task<bool> UnlockRecord(string entityName, int recordId)
        {
            if (string.IsNullOrWhiteSpace(entityName) || recordId <= 0) return false;

            var cleanEntity = entityName.Trim();
            var lockKey = $"{cleanEntity}_{recordId}".ToLowerInvariant();

            if (ActiveLocks.TryRemove(lockKey, out var removed))
            {
                if (ConnectionLocks.TryGetValue(Context.ConnectionId, out var set))
                {
                    lock (set) { set.Remove(lockKey); }
                }

                await Clients.Others.SendAsync("RecordUnlocked", new
                {
                    entityName = cleanEntity,
                    recordId
                });

                _logger.LogInformation("Bản ghi {EntityName} #{RecordId} đã được mở khóa", cleanEntity, recordId);
                return true;
            }

            return false;
        }

        /// <summary>
        /// Lấy toàn bộ danh sách bản ghi đang bị khóa trên toàn hệ thống
        /// </summary>
        public Task<List<RecordLockInfo>> GetActiveLocks()
        {
            return Task.FromResult(ActiveLocks.Values.ToList());
        }

        /// <summary>
        /// 📢 Thông báo khi một bản ghi được cập nhật để các client khác tự động nạp lại
        /// </summary>
        public async Task NotifyRecordUpdated(string entityName, int recordId, string updatedBy)
        {
            var cleanEntity = entityName.Trim();
            await Clients.Others.SendAsync("RecordUpdated", new
            {
                entityName = cleanEntity,
                recordId,
                updatedBy = string.IsNullOrWhiteSpace(updatedBy) ? "Hệ thống" : updatedBy,
                updatedAt = DateTime.UtcNow
            });
        }

        /// <summary>
        /// 🔔 Gửi thông báo hệ thống tức thời (Toasts / Notifications)
        /// </summary>
        public async Task SendNotification(string title, string message, string type = "info")
        {
            await Clients.All.SendAsync("ReceiveNotification", new
            {
                title,
                message,
                type,
                timestamp = DateTime.UtcNow
            });
        }

        /// <summary>
        /// Tự động dọn dẹp toàn bộ các bản ghi đang khóa khi client ngắt kết nối
        /// </summary>
        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            var connId = Context.ConnectionId;
            if (ConnectionLocks.TryRemove(connId, out var locks))
            {
                foreach (var lockKey in locks)
                {
                    if (ActiveLocks.TryRemove(lockKey, out var removed))
                    {
                        await Clients.Others.SendAsync("RecordUnlocked", new
                        {
                            entityName = removed.EntityName,
                            recordId = removed.RecordId
                        });
                        _logger.LogInformation("Tự động mở khóa {EntityName} #{RecordId} do mất kết nối {ConnectionId}", removed.EntityName, removed.RecordId, connId);
                    }
                }
            }

            await base.OnDisconnectedAsync(exception);
        }
    }
}
