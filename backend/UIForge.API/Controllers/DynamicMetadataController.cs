using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UIForge.API.Data;
using UIForge.API.Models.Entities;

namespace UIForge.API.Controllers
{
    /// <summary>
    /// 🌐 DynamicMetadataController: Bộ máy quản trị Danh bạ Thực thể (Entity Metadata)
    /// và Cung cấp API Dữ liệu Chung (Generic Entity Data Engine) cho UIForge kết nối trực tiếp SQL Server.
    /// </summary>
    [ApiController]
    [Route("api/core")]
    public class DynamicMetadataController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public DynamicMetadataController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public class ColumnMetadataDto
        {
            public string Name { get; set; } = string.Empty;
            public string DisplayName { get; set; } = string.Empty;
            public string DataType { get; set; } = "string"; // string, number, date, boolean
            public bool IsRequired { get; set; }
            public bool IsPrimaryKey { get; set; }
            public bool IsAuditField { get; set; }
        }

        public class EntityMetadataDto
        {
            public string Name { get; set; } = string.Empty;
            public string DisplayName { get; set; } = string.Empty;
            public string TableName { get; set; } = string.Empty;
            public string Description { get; set; } = string.Empty;
            public List<ColumnMetadataDto> Columns { get; set; } = new();
        }

        /// <summary>
        /// 🔍 GET /api/core/metadata/entities
        /// Trả về danh sách tất cả các Entity kế thừa BaseEntity được đăng ký trong hệ thống
        /// </summary>
        [HttpGet("metadata/entities")]
        public IActionResult GetRegisteredEntities()
        {
            var catalogs = new List<EntityMetadataDto>();

            var entityTypes = new (Type Type, string Name, string DisplayName, string TableName)[]
            {
                (typeof(TransactionEntity), "Transaction", "Lô Hàng (Transactions)", "Transactions"),
                (typeof(TerminalEntity), "Terminal", "Cảng Biển / Ga Hàng Không (Terminals)", "Terminals"),
                (typeof(ContainerEntity), "Container", "Danh Mục Container (Containers)", "Containers"),
            };

            foreach (var (type, name, displayName, tableName) in entityTypes)
            {
                var columns = new List<ColumnMetadataDto>();
                var props = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);

                foreach (var p in props)
                {
                    var colType = "string";
                    var pt = Nullable.GetUnderlyingType(p.PropertyType) ?? p.PropertyType;

                    if (pt == typeof(int) || pt == typeof(long) || pt == typeof(decimal) || pt == typeof(double) || pt == typeof(float))
                        colType = "number";
                    else if (pt == typeof(DateTime) || pt == typeof(DateTimeOffset))
                        colType = "date";
                    else if (pt == typeof(bool))
                        colType = "boolean";

                    var isAudit = p.Name is "CreatedDate" or "CreatedBy" or "UpdatedDate" or "UpdatedBy" or "Active";

                    columns.Add(new ColumnMetadataDto
                    {
                        Name = p.Name,
                        DisplayName = p.Name,
                        DataType = colType,
                        IsPrimaryKey = p.Name == "Id",
                        IsAuditField = isAudit,
                        IsRequired = !isAudit && p.Name == "Id"
                    });
                }

                catalogs.Add(new EntityMetadataDto
                {
                    Name = name,
                    DisplayName = displayName,
                    TableName = tableName,
                    Description = $"Thực thể {name} tuân thủ BaseEntity",
                    Columns = columns
                });
            }

            return Ok(catalogs);
        }

        /// <summary>
        /// 📊 GET /api/core/data/{entityName}?$filter=...
        /// Truy vấn dữ liệu từ SQL Server cho Gridview, Dropdown, Form với hỗ trợ OData.
        /// </summary>
        [HttpGet("data/{entityName}")]
        public async Task<IActionResult> QueryEntityData(
            string entityName,
            [FromQuery] string? filter = null,
            [FromQuery(Name = "$filter")] string? odataFilter = null)
        {
            var filterExpr = filter ?? odataFilter ?? string.Empty;
            var target = entityName.ToLowerInvariant();

            if (target is "transaction" or "transactions")
            {
                var query = _dbContext.Transactions.Where(t => t.Active).AsQueryable();

                // Lọc cơ bản theo TypeId (TypeId eq 1 cho FCL Import, TypeId eq 2 cho LCL)
                if (filterExpr.Contains("TypeId eq 1", StringComparison.OrdinalIgnoreCase) || filterExpr.Contains("typeid=1", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(t => t.TypeId == 1);
                }
                else if (filterExpr.Contains("TypeId eq 2", StringComparison.OrdinalIgnoreCase) || filterExpr.Contains("typeid=2", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(t => t.TypeId == 2);
                }

                // Lọc theo JobNo nếu có
                if (filterExpr.Contains("JobNo eq", StringComparison.OrdinalIgnoreCase))
                {
                    var match = System.Text.RegularExpressions.Regex.Match(filterExpr, @"JobNo\s+eq\s+'([^']+)'", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                    if (match.Success)
                    {
                        var jNo = match.Groups[1].Value;
                        query = query.Where(t => t.JobNo == jNo);
                    }
                }

                var list = await query.OrderByDescending(t => t.Id).ToListAsync();
                return Ok(list);
            }

            if (target is "terminal" or "terminals")
            {
                var list = await _dbContext.Terminals.Where(t => t.Active).OrderBy(t => t.Code).ToListAsync();
                return Ok(list);
            }

            if (target is "container" or "containers")
            {
                var list = await _dbContext.Containers.Where(c => c.Active).OrderBy(c => c.Id).ToListAsync();
                return Ok(list);
            }

            return Ok(new List<object>());
        }

        /// <summary>
        /// 🎯 GET /api/core/data/{entityName}/{id}
        /// Lấy chi tiết một bản ghi theo Id từ SQL Server
        /// </summary>
        [HttpGet("data/{entityName}/{id}")]
        public async Task<IActionResult> GetEntityById(string entityName, int id)
        {
            var target = entityName.ToLowerInvariant();
            if (target is "transaction" or "transactions")
            {
                var record = await _dbContext.Transactions.FirstOrDefaultAsync(t => t.Id == id && t.Active);
                if (record == null) return NotFound(new { message = $"Không tìm thấy bản ghi {entityName} #{id}" });
                return Ok(record);
            }

            if (target is "terminal" or "terminals")
            {
                var record = await _dbContext.Terminals.FirstOrDefaultAsync(t => t.Id == id && t.Active);
                if (record == null) return NotFound(new { message = $"Không tìm thấy bản ghi {entityName} #{id}" });
                return Ok(record);
            }

            if (target is "container" or "containers")
            {
                var record = await _dbContext.Containers.FirstOrDefaultAsync(c => c.Id == id && c.Active);
                if (record == null) return NotFound(new { message = $"Không tìm thấy bản ghi {entityName} #{id}" });
                return Ok(record);
            }

            return NotFound();
        }

        /// <summary>
        /// ➕ POST /api/core/data/transaction
        /// Thêm mới bản ghi Transaction vào SQL Server
        /// </summary>
        [HttpPost("data/transaction")]
        public async Task<IActionResult> CreateTransaction([FromBody] TransactionEntity entity)
        {
            if (entity == null) return BadRequest(new { message = "Dữ liệu bản ghi không hợp lệ" });

            entity.Id = 0;
            entity.Active = true;
            entity.CreatedDate = DateTime.UtcNow;
            entity.CreatedBy = User.Identity?.Name ?? "system";

            _dbContext.Transactions.Add(entity);
            await _dbContext.SaveChangesAsync();

            return Ok(entity);
        }

        /// <summary>
        /// ✏️ PUT /api/core/data/transaction/{id}
        /// Cập nhật bản ghi Transaction trong SQL Server
        /// </summary>
        [HttpPut("data/transaction/{id}")]
        public async Task<IActionResult> UpdateTransaction(int id, [FromBody] TransactionEntity updated)
        {
            var existing = await _dbContext.Transactions.FirstOrDefaultAsync(t => t.Id == id && t.Active);
            if (existing == null) return NotFound(new { message = $"Không tìm thấy bản ghi #{id}" });

            // Cập nhật các trường nghiệp vụ
            existing.JobNo = updated.JobNo;
            existing.TypeId = updated.TypeId;
            existing.ShipmentDate = updated.ShipmentDate;
            existing.MblNo = updated.MblNo;
            existing.MblIssuedDate = updated.MblIssuedDate;
            existing.MblType = updated.MblType;
            existing.VendorId = updated.VendorId;
            existing.VendorName = updated.VendorName;
            existing.SLines = updated.SLines;
            existing.Agent = updated.Agent;
            existing.PolId = updated.PolId;
            existing.PodId = updated.PodId;
            existing.Service = updated.Service;
            existing.Opic = updated.Opic;
            existing.Eta = updated.Eta;
            existing.PTerm = updated.PTerm;
            existing.Commodity = updated.Commodity;
            existing.TotalPackages = updated.TotalPackages;
            existing.PackageType = updated.PackageType;
            existing.TotalGw = updated.TotalGw;
            existing.TotalCbm = updated.TotalCbm;
            existing.TotalVgm = updated.TotalVgm;
            existing.PoNo = updated.PoNo;
            existing.Notes = updated.Notes;

            existing.UpdatedDate = DateTime.UtcNow;
            existing.UpdatedBy = User.Identity?.Name ?? "system";

            await _dbContext.SaveChangesAsync();
            return Ok(existing);
        }

        /// <summary>
        /// ➕ POST /api/core/data/{entityName}
        /// Thêm mới bản ghi vào SQL Server (Generic)
        /// </summary>
        [HttpPost("data/{entityName}")]
        public async Task<IActionResult> CreateEntity(string entityName, [FromBody] System.Text.Json.JsonElement payload)
        {
            var target = entityName.ToLowerInvariant();
            if (target is "transaction" or "transactions")
            {
                var entity = System.Text.Json.JsonSerializer.Deserialize<TransactionEntity>(payload.GetRawText(), new System.Text.Json.JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (entity == null) return BadRequest(new { message = "Dữ liệu bản ghi không hợp lệ" });

                entity.Active = true;
                entity.CreatedDate = DateTime.UtcNow;
                entity.CreatedBy = User.Identity?.Name ?? "system";

                _dbContext.Transactions.Add(entity);
                await _dbContext.SaveChangesAsync();

                return Ok(entity);
            }

            return BadRequest(new { message = $"Chưa hỗ trợ tạo mới cho entity {entityName}" });
        }

        /// <summary>
        /// ✏️ PUT /api/core/data/{entityName}/{id}
        /// Cập nhật bản ghi trong SQL Server
        /// </summary>
        [HttpPut("data/{entityName}/{id}")]
        public async Task<IActionResult> UpdateEntity(string entityName, int id, [FromBody] System.Text.Json.JsonElement payload)
        {
            var target = entityName.ToLowerInvariant();
            if (target is "transaction" or "transactions")
            {
                var existing = await _dbContext.Transactions.FirstOrDefaultAsync(t => t.Id == id && t.Active);
                if (existing == null) return NotFound(new { message = $"Không tìm thấy bản ghi #{id}" });

                var updated = System.Text.Json.JsonSerializer.Deserialize<TransactionEntity>(payload.GetRawText(), new System.Text.Json.JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (updated == null) return BadRequest(new { message = "Dữ liệu cập nhật không hợp lệ" });

                // Cập nhật các trường nghiệp vụ
                existing.JobNo = updated.JobNo;
                existing.TypeId = updated.TypeId;
                existing.ShipmentDate = updated.ShipmentDate;
                existing.MblNo = updated.MblNo;
                existing.MblIssuedDate = updated.MblIssuedDate;
                existing.MblType = updated.MblType;
                existing.VendorId = updated.VendorId;
                existing.VendorName = updated.VendorName;
                existing.SLines = updated.SLines;
                existing.Agent = updated.Agent;
                existing.PolId = updated.PolId;
                existing.PodId = updated.PodId;
                existing.Service = updated.Service;
                existing.Opic = updated.Opic;
                existing.Eta = updated.Eta;
                existing.PTerm = updated.PTerm;
                existing.Commodity = updated.Commodity;
                existing.TotalPackages = updated.TotalPackages;
                existing.PackageType = updated.PackageType;
                existing.TotalGw = updated.TotalGw;
                existing.TotalCbm = updated.TotalCbm;
                existing.TotalVgm = updated.TotalVgm;
                existing.PoNo = updated.PoNo;
                existing.Notes = updated.Notes;

                existing.UpdatedDate = DateTime.UtcNow;
                existing.UpdatedBy = User.Identity?.Name ?? "system";

                await _dbContext.SaveChangesAsync();
                return Ok(existing);
            }

            return BadRequest(new { message = $"Chưa hỗ trợ cập nhật cho entity {entityName}" });
        }

        /// <summary>
        /// 🗑️ DELETE /api/core/data/{entityName}/{id}
        /// Thực hiện Xóa mềm (Soft Delete) trong SQL Server bằng cách đặt Active = false
        /// </summary>
        [HttpDelete("data/{entityName}/{id}")]
        public async Task<IActionResult> SoftDeleteEntity(string entityName, int id)
        {
            var target = entityName.ToLowerInvariant();
            if (target is "transaction" or "transactions")
            {
                var record = await _dbContext.Transactions.FirstOrDefaultAsync(t => t.Id == id);
                if (record != null)
                {
                    record.Active = false;
                    record.UpdatedDate = DateTime.UtcNow;
                    record.UpdatedBy = User.Identity?.Name ?? "system";
                    await _dbContext.SaveChangesAsync();
                    return Ok(new { success = true, message = $"Đã xóa mềm bản ghi #{id} trong cơ sở dữ liệu thành công" });
                }
            }

            return NotFound();
        }
    }
}
