using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using UIForge.Core.Data;
using UIForge.Core.Entities;

namespace UIForge.Core.Controllers
{
    /// <summary>
    /// 🌐 DynamicMetadataController: Bộ máy quản trị Danh bạ Thực thể (Entity Metadata)
    /// và Cung cấp API Dữ liệu Chung (Generic Entity Data Engine) cho UIForge kết nối trực tiếp SQL Server.
    /// 100% Generic & Domain-Agnostic: Không phụ thuộc bất kỳ Entity nghiệp vụ cụ thể nào.
    /// Thuộc thư viện NuGet UIForge.Core.
    /// </summary>
    [ApiController]
    [Route("api/core")]
    public class DynamicMetadataController : ControllerBase
    {
        private readonly UIForgeDbContext _dbContext;

        public DynamicMetadataController(UIForgeDbContext dbContext)
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
        /// Tự động quét Reflection toàn bộ Entity trong DbContext kế thừa BaseEntity.
        /// </summary>
        [HttpGet("metadata/entities")]
        public IActionResult GetRegisteredEntities()
        {
            var catalogs = new List<EntityMetadataDto>();
            var baseEntityType = typeof(BaseEntity);

            var entityTypes = _dbContext.Model.GetEntityTypes()
                .Where(e => baseEntityType.IsAssignableFrom(e.ClrType))
                .Select(e => e.ClrType)
                .Distinct()
                .ToList();

            foreach (var type in entityTypes)
            {
                var cleanName = type.Name.EndsWith("Entity", StringComparison.OrdinalIgnoreCase)
                    ? type.Name[..^6]
                    : type.Name;

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

                var tableName = _dbContext.Model.FindEntityType(type)?.GetTableName() ?? cleanName;

                catalogs.Add(new EntityMetadataDto
                {
                    Name = cleanName,
                    DisplayName = cleanName,
                    TableName = tableName,
                    Description = $"Thực thể {cleanName} kế thừa BaseEntity",
                    Columns = columns
                });
            }

            return Ok(catalogs);
        }

        /// <summary>
        /// 📊 GET /api/core/data/{entityName}?$filter=...
        /// Truy vấn dữ liệu Generic từ SQL Server cho Gridview, Dropdown, Form với hỗ trợ OData.
        /// </summary>
        [HttpGet("data/{entityName}")]
        public async Task<IActionResult> QueryEntityData(
            string entityName,
            [FromQuery] string? filter = null,
            [FromQuery(Name = "$filter")] string? odataFilter = null)
        {
            var entityType = ResolveEntityType(entityName);
            if (entityType == null)
            {
                return NotFound(new { message = $"Thực thể '{entityName}' không tồn tại trong hệ thống." });
            }

            var filterExpr = filter ?? odataFilter ?? string.Empty;
            var clrType = entityType.ClrType;
            var isBaseEntity = typeof(BaseEntity).IsAssignableFrom(clrType);

            var queryMethod = typeof(DbContext).GetMethod(nameof(DbContext.Set), Type.EmptyTypes)?
                .MakeGenericMethod(clrType);
            if (queryMethod?.Invoke(_dbContext, null) is not IQueryable queryable)
            {
                return BadRequest(new { message = $"Không thể truy vấn thực thể '{entityName}'" });
            }

            var toListAsyncMethod = typeof(EntityFrameworkQueryableExtensions)
                .GetMethods(BindingFlags.Public | BindingFlags.Static)
                .First(m => m.Name == nameof(EntityFrameworkQueryableExtensions.ToListAsync) && m.GetParameters().Length == 2)
                .MakeGenericMethod(clrType);

            var task = (Task)toListAsyncMethod.Invoke(null, new object[] { queryable, CancellationToken.None })!;
            await task.ConfigureAwait(false);
            var resultProp = task.GetType().GetProperty("Result");
            var rawList = (IEnumerable)resultProp!.GetValue(task)!;

            var resultList = new List<object>();

            foreach (var item in rawList)
            {
                if (isBaseEntity && item is BaseEntity b && !b.Active)
                    continue;

                if (!string.IsNullOrWhiteSpace(filterExpr) && !MatchesFilter(item, filterExpr))
                    continue;

                resultList.Add(item);
            }

            var idProp = clrType.GetProperty("Id");
            if (idProp != null)
            {
                resultList = resultList.OrderByDescending(x => idProp.GetValue(x)).ToList();
            }

            return Ok(resultList);
        }

        /// <summary>
        /// 🎯 GET /api/core/data/{entityName}/{id}
        /// Lấy chi tiết một bản ghi theo Id từ SQL Server (Generic)
        /// </summary>
        [HttpGet("data/{entityName}/{id}")]
        public async Task<IActionResult> GetEntityById(string entityName, int id)
        {
            var entityType = ResolveEntityType(entityName);
            if (entityType == null)
            {
                return NotFound(new { message = $"Thực thể '{entityName}' không tồn tại trong hệ thống." });
            }

            var record = await _dbContext.FindAsync(entityType.ClrType, id);
            if (record == null)
            {
                return NotFound(new { message = $"Không tìm thấy bản ghi {entityName} #{id}" });
            }

            if (record is BaseEntity b && !b.Active)
            {
                return NotFound(new { message = $"Bản ghi {entityName} #{id} đã bị xóa hoặc không hoạt động." });
            }

            return Ok(record);
        }

        /// <summary>
        /// ➕ POST /api/core/data/{entityName}
        /// Thêm mới bản ghi vào SQL Server (Generic)
        /// </summary>
        [HttpPost("data/{entityName}")]
        public async Task<IActionResult> CreateEntity(string entityName, [FromBody] JsonElement payload)
        {
            var entityType = ResolveEntityType(entityName);
            if (entityType == null)
            {
                return NotFound(new { message = $"Thực thể '{entityName}' không tồn tại trong hệ thống." });
            }

            var entity = JsonSerializer.Deserialize(payload.GetRawText(), entityType.ClrType, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (entity == null)
            {
                return BadRequest(new { message = "Dữ liệu bản ghi không hợp lệ" });
            }

            if (entity is BaseEntity b)
            {
                b.Id = 0;
                b.Active = true;
                b.CreatedDate = DateTime.UtcNow;
                b.CreatedBy = User.Identity?.Name ?? "system";
            }

            _dbContext.Add(entity);
            await _dbContext.SaveChangesAsync();

            return Ok(entity);
        }

        /// <summary>
        /// ✏️ PUT /api/core/data/{entityName}/{id}
        /// Cập nhật bản ghi trong SQL Server (Generic)
        /// </summary>
        [HttpPut("data/{entityName}/{id}")]
        public async Task<IActionResult> UpdateEntity(string entityName, int id, [FromBody] JsonElement payload)
        {
            var entityType = ResolveEntityType(entityName);
            if (entityType == null)
            {
                return NotFound(new { message = $"Thực thể '{entityName}' không tồn tại trong hệ thống." });
            }

            var existing = await _dbContext.FindAsync(entityType.ClrType, id);
            if (existing == null)
            {
                return NotFound(new { message = $"Không tìm thấy bản ghi #{id}" });
            }

            if (existing is BaseEntity bExisting && !bExisting.Active)
            {
                return NotFound(new { message = $"Bản ghi #{id} đã bị xóa hoặc không hoạt động." });
            }

            var incoming = JsonSerializer.Deserialize(payload.GetRawText(), entityType.ClrType, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (incoming == null)
            {
                return BadRequest(new { message = "Dữ liệu cập nhật không hợp lệ" });
            }

            var props = entityType.ClrType.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (var prop in props)
            {
                if (!prop.CanWrite || !prop.CanRead) continue;
                if (prop.Name is "Id" or "CreatedDate" or "CreatedBy") continue;

                var newVal = prop.GetValue(incoming);
                if (newVal != null)
                {
                    prop.SetValue(existing, newVal);
                }
            }

            if (existing is BaseEntity b)
            {
                b.UpdatedDate = DateTime.UtcNow;
                b.UpdatedBy = User.Identity?.Name ?? "system";
            }

            await _dbContext.SaveChangesAsync();
            return Ok(existing);
        }

        /// <summary>
        /// 🗑️ DELETE /api/core/data/{entityName}/{id}
        /// Thực hiện Xóa mềm (Soft Delete) trong SQL Server bằng cách đặt Active = false (Generic)
        /// </summary>
        [HttpDelete("data/{entityName}/{id}")]
        public async Task<IActionResult> SoftDeleteEntity(string entityName, int id)
        {
            var entityType = ResolveEntityType(entityName);
            if (entityType == null)
            {
                return NotFound(new { message = $"Thực thể '{entityName}' không tồn tại trong hệ thống." });
            }

            var record = await _dbContext.FindAsync(entityType.ClrType, id);
            if (record == null)
            {
                return NotFound(new { message = $"Không tìm thấy bản ghi #{id}" });
            }

            if (record is BaseEntity b)
            {
                b.Active = false;
                b.UpdatedDate = DateTime.UtcNow;
                b.UpdatedBy = User.Identity?.Name ?? "system";
            }
            else
            {
                _dbContext.Remove(record);
            }

            await _dbContext.SaveChangesAsync();
            return Ok(new { success = true, message = $"Đã xóa mềm bản ghi #{id} ({entityName}) trong cơ sở dữ liệu thành công" });
        }

        /// <summary>
        /// 🔒 GET /api/core/data/{entityName}/check-unique?field=Code&value=ABC&excludeId=123
        /// Kiểm tra tính duy nhất (Unique Constraint) của bất kỳ trường nào trong bất kỳ bảng nào (100% Generic).
        /// </summary>
        [HttpGet("data/{entityName}/check-unique")]
        public async Task<IActionResult> CheckUnique(
            string entityName,
            [FromQuery] string field,
            [FromQuery] string value,
            [FromQuery] int? excludeId = null)
        {
            if (string.IsNullOrWhiteSpace(field) || string.IsNullOrWhiteSpace(value))
            {
                return BadRequest(new { isUnique = false, message = "Tên trường và giá trị không được để trống." });
            }

            var entityType = ResolveEntityType(entityName);
            if (entityType == null)
            {
                return NotFound(new { isUnique = false, message = $"Thực thể '{entityName}' không tồn tại." });
            }

            var clrType = entityType.ClrType;
            var isBaseEntity = typeof(BaseEntity).IsAssignableFrom(clrType);

            var queryMethod = typeof(DbContext).GetMethod(nameof(DbContext.Set), Type.EmptyTypes)?
                .MakeGenericMethod(clrType);
            if (queryMethod?.Invoke(_dbContext, null) is not IQueryable queryable)
            {
                return BadRequest(new { isUnique = false, message = $"Không thể truy vấn thực thể '{entityName}'" });
            }

            var toListAsyncMethod = typeof(EntityFrameworkQueryableExtensions)
                .GetMethods(BindingFlags.Public | BindingFlags.Static)
                .First(m => m.Name == nameof(EntityFrameworkQueryableExtensions.ToListAsync) && m.GetParameters().Length == 2)
                .MakeGenericMethod(clrType);

            var task = (Task)toListAsyncMethod.Invoke(null, new object[] { queryable, CancellationToken.None })!;
            await task.ConfigureAwait(false);
            var resultProp = task.GetType().GetProperty("Result");
            var rawList = (IEnumerable)resultProp!.GetValue(task)!;

            var cleanVal = value.Trim();
            bool isDuplicate = false;

            var prop = clrType.GetProperty(field, BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
            var idProp = clrType.GetProperty("Id", BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);

            if (prop == null)
            {
                return BadRequest(new { isUnique = false, message = $"Trường '{field}' không tồn tại trong thực thể '{entityName}'." });
            }

            foreach (var item in rawList)
            {
                if (isBaseEntity && item is BaseEntity b && !b.Active)
                    continue;

                if (excludeId.HasValue && idProp != null)
                {
                    var idVal = idProp.GetValue(item);
                    if (idVal != null && Convert.ToInt32(idVal) == excludeId.Value)
                        continue;
                }

                var itemVal = prop.GetValue(item)?.ToString();
                if (string.Equals(itemVal?.Trim(), cleanVal, StringComparison.OrdinalIgnoreCase))
                {
                    isDuplicate = true;
                    break;
                }
            }

            return Ok(new
            {
                isUnique = !isDuplicate,
                entityName,
                field,
                value = cleanVal,
                message = isDuplicate
                    ? $"Giá trị '{cleanVal}' đã tồn tại trong danh mục {entityName}."
                    : $"Giá trị '{cleanVal}' hợp lệ và chưa tồn tại."
            });
        }

        private IEntityType? ResolveEntityType(string entityName)
        {
            var clean = entityName.Trim();
            return _dbContext.Model.GetEntityTypes()
                .FirstOrDefault(e =>
                    e.ClrType.Name.Equals(clean, StringComparison.OrdinalIgnoreCase) ||
                    e.ClrType.Name.Equals(clean + "Entity", StringComparison.OrdinalIgnoreCase) ||
                    (e.GetTableName() != null && e.GetTableName()!.Equals(clean, StringComparison.OrdinalIgnoreCase)) ||
                    (e.GetTableName() != null && e.GetTableName()!.Equals(clean + "s", StringComparison.OrdinalIgnoreCase)) ||
                    (e.GetTableName() != null && clean.EndsWith("s", StringComparison.OrdinalIgnoreCase) && e.GetTableName()!.Equals(clean[..^1], StringComparison.OrdinalIgnoreCase))
                );
        }

        private static bool MatchesFilter(object item, string filterExpr)
        {
            var match = Regex.Match(
                filterExpr,
                @"(\w+)\s+(eq|ne)\s+('?[^']+'?)",
                RegexOptions.IgnoreCase
            );

            if (match.Success)
            {
                var fieldName = match.Groups[1].Value;
                var op = match.Groups[2].Value.ToLowerInvariant();
                var rawVal = match.Groups[3].Value.Trim('\'');

                var prop = item.GetType().GetProperty(fieldName, BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
                if (prop != null)
                {
                    var propVal = prop.GetValue(item)?.ToString() ?? string.Empty;
                    var equals = string.Equals(propVal, rawVal, StringComparison.OrdinalIgnoreCase);
                    return op == "eq" ? equals : !equals;
                }
            }
            return true;
        }
    }
}

