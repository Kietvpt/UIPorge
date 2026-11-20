using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using UIForge.Core.Data;
using UIForge.Core.Entities;
using UIForge.Core.Security;

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
    [RequireEntityPermission]
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

            var excludedCoreNames = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
            {
                "BaseEntity",
                "Project", "Projects",
                "Page", "Pages",
                "UIComponent", "UIComponents", "Components",
                "Role", "Roles",
                "UserRole", "UserRoles",
                "RolePermission", "RolePermissions",
                "UserSetting", "UserSettings",
                "AuditLog", "AuditLogs",
                "__EFMigrationsHistory"
            };

            var entityTypes = _dbContext.Model.GetEntityTypes()
                .Where(e => !e.ClrType.IsAbstract
                            && baseEntityType.IsAssignableFrom(e.ClrType)
                            && !excludedCoreNames.Contains(e.ClrType.Name)
                            && !excludedCoreNames.Contains(e.GetTableName() ?? string.Empty))
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
                    if (p.GetCustomAttribute<System.Text.Json.Serialization.JsonIgnoreAttribute>() != null)
                        continue;

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
        /// 📊 GET /api/core/data/{entityName}?$filter=...&$top=...&$skip=...&$orderby=...
        /// Truy vấn dữ liệu Generic từ SQL Server cho Gridview, Dropdown, Form với hỗ trợ OData phân trang, lọc và sắp xếp.
        /// </summary>
        [HttpGet("data/{entityName}")]
        public async Task<IActionResult> QueryEntityData(
            string entityName,
            [FromQuery] string? filter = null,
            [FromQuery(Name = "$filter")] string? odataFilter = null,
            [FromQuery(Name = "$top")] int? top = null,
            [FromQuery(Name = "$skip")] int? skip = null,
            [FromQuery(Name = "$orderby")] string? orderBy = null,
            [FromHeader(Name = "X-Feature-Id")] int? featureId = null,
            [FromHeader(Name = "X-Preview-Role")] string? previewRole = null)
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
            bool specifiesActiveFilter = !string.IsNullOrWhiteSpace(filterExpr) &&
                                         filterExpr.Contains("active", StringComparison.OrdinalIgnoreCase);

            foreach (var item in rawList)
            {
                if (!specifiesActiveFilter && isBaseEntity && item is BaseEntity b && !b.Active)
                    continue;

                if (!string.IsNullOrWhiteSpace(filterExpr) && !MatchesFilter(item, filterExpr))
                    continue;

                resultList.Add(item);
            }

            // Sắp xếp động theo $orderby (ví dụ "Id desc", "FullName asc"), mặc định Id desc
            if (!string.IsNullOrWhiteSpace(orderBy))
            {
                var orderParts = orderBy.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
                IOrderedEnumerable<object>? ordered = null;

                for (int i = 0; i < orderParts.Length; i++)
                {
                    var part = orderParts[i];
                    var tokens = part.Split(' ', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
                    var fieldName = tokens[0];
                    bool isDesc = tokens.Length > 1 && tokens[1].Equals("desc", StringComparison.OrdinalIgnoreCase);

                    var prop = clrType.GetProperty(fieldName, BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
                    if (prop != null)
                    {
                        if (i == 0)
                        {
                            ordered = isDesc
                                ? resultList.OrderByDescending(x => prop.GetValue(x))
                                : resultList.OrderBy(x => prop.GetValue(x));
                        }
                        else if (ordered != null)
                        {
                            ordered = isDesc
                                ? ordered.ThenByDescending(x => prop.GetValue(x))
                                : ordered.ThenBy(x => prop.GetValue(x));
                        }
                    }
                }

                if (ordered != null)
                {
                    resultList = ordered.ToList();
                }
            }
            else
            {
                var idProp = clrType.GetProperty("Id");
                if (idProp != null)
                {
                    resultList = resultList.OrderByDescending(x => idProp.GetValue(x)).ToList();
                }
            }

            var totalCount = resultList.Count;

            if (skip.HasValue && skip.Value > 0)
            {
                resultList = resultList.Skip(skip.Value).ToList();
            }

            if (top.HasValue && top.Value > 0)
            {
                resultList = resultList.Take(top.Value).ToList();
            }

            // 🛡️ Phân quyền che giấu trường nhạy cảm (Field Masking) nếu CanRead == false trên Component/GridPolicy
            var maskedFields = await GetMaskedFieldsAsync(entityName, featureId, previewRole);
            if (maskedFields.Count > 0)
            {
                foreach (var item in resultList)
                {
                    foreach (var field in maskedFields)
                    {
                        var prop = clrType.GetProperty(field, BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
                        if (prop != null && prop.CanWrite)
                        {
                            prop.SetValue(item, null);
                        }
                    }
                }
            }

            return Ok(new
            {
                value = resultList,
                count = totalCount
            });
        }

        /// <summary>
        /// 🎯 GET /api/core/data/{entityName}/{id}
        /// Lấy chi tiết một bản ghi theo Id từ SQL Server (Generic)
        /// </summary>
        [HttpGet("data/{entityName}/{id}")]
        public async Task<IActionResult> GetEntityById(
            string entityName,
            int id,
            [FromHeader(Name = "X-Feature-Id")] int? featureId = null,
            [FromHeader(Name = "X-Preview-Role")] string? previewRole = null)
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

            // 🛡️ Phân quyền che giấu trường nhạy cảm (Field Masking) nếu CanRead == false trên Component/GridPolicy
            var maskedFields = await GetMaskedFieldsAsync(entityName, featureId, previewRole);
            if (maskedFields.Count > 0)
            {
                var clrType = entityType.ClrType;
                foreach (var field in maskedFields)
                {
                    var prop = clrType.GetProperty(field, BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
                    if (prop != null && prop.CanWrite)
                    {
                        prop.SetValue(record, null);
                    }
                }
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

            var entity = JsonSerializer.Deserialize(payload.GetRawText(), entityType.ClrType, DynamicDeserializeOptions);

            if (entity == null)
            {
                return BadRequest(new { message = "Dữ liệu bản ghi không hợp lệ" });
            }

            var currentUser = User.Identity?.Name ?? "system";
            if (entity is BaseEntity b)
            {
                b.Id = 0;
                b.Active = true;
                b.CreatedDate = DateTime.UtcNow;
                b.CreatedBy = currentUser;
            }

            _dbContext.Add(entity);
            await _dbContext.SaveChangesAsync();

            var idProp = entityType.ClrType.GetProperty("Id");
            int recordId = (idProp?.GetValue(entity) as int?) ?? 0;

            // 📜 Ghi vết AuditLog khi tạo mới
            var createChanges = new List<object>();
            foreach (var prop in entityType.ClrType.GetProperties(BindingFlags.Public | BindingFlags.Instance))
            {
                if (prop.CanRead && prop.Name is not ("Id" or "CreatedDate" or "CreatedBy" or "UpdatedDate" or "UpdatedBy"))
                {
                    var val = prop.GetValue(entity)?.ToString();
                    if (!string.IsNullOrEmpty(val))
                    {
                        createChanges.Add(new { field = prop.Name, oldValue = (string?)null, newValue = val });
                    }
                }
            }
            await RecordAuditLogAsync(entityName, recordId, "CREATE", JsonSerializer.Serialize(createChanges), currentUser);

            return Ok(entity);
        }

        /// <summary>
        /// ✏️ PUT /api/core/data/{entityName}/{id}
        /// Cập nhật bản ghi trong SQL Server (Generic)
        /// </summary>
        [HttpPut("data/{entityName}/{id}")]
        public async Task<IActionResult> UpdateEntity(
            string entityName,
            int id,
            [FromBody] JsonElement payload,
            [FromHeader(Name = "X-Feature-Id")] int? featureId = null,
            [FromHeader(Name = "X-Preview-Role")] string? previewRole = null)
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

            if (existing is BaseEntity bExisting)
            {
                if (!bExisting.Active)
                {
                    return NotFound(new { message = $"Bản ghi #{id} đã bị xóa hoặc không hoạt động." });
                }

                // 🛡️ Optimistic Concurrency Control (kiểm tra sai lệch > 1s giữa Expected và DB)
                DateTime? expectedDate = null;
                if (Request.Headers.TryGetValue("X-Expected-UpdatedDate", out var headerVal) &&
                    DateTime.TryParse(headerVal.ToString(), out var dtHeader))
                {
                    expectedDate = dtHeader;
                }
                else if (payload.ValueKind == JsonValueKind.Object &&
                         (payload.TryGetProperty("_expectedUpdatedDate", out var propExp) ||
                          payload.TryGetProperty("expectedUpdatedDate", out propExp)))
                {
                    if (propExp.ValueKind == JsonValueKind.String &&
                        DateTime.TryParse(propExp.GetString(), out var dtProp))
                    {
                        expectedDate = dtProp;
                    }
                }

                if (expectedDate.HasValue && bExisting.UpdatedDate.HasValue)
                {
                    var diffSeconds = Math.Abs((bExisting.UpdatedDate.Value - expectedDate.Value).TotalSeconds);
                    if (diffSeconds > 1.0)
                    {
                        return Conflict(new
                        {
                            message = "Dữ liệu đã bị người dùng khác thay đổi trước đó. Vui lòng tải lại bản ghi!",
                            currentRecord = existing
                        });
                    }
                }
            }

            // 🛡️ Kiểm tra phân quyền cập nhật cấp Feature & Component (Field-Level Security)
            var (isAllowed, errorMsg, allowedFields) = await EvaluateFieldUpdatePermissionsAsync(entityName, existing, featureId, previewRole);
            if (!isAllowed)
            {
                return StatusCode(403, new { message = errorMsg });
            }

            var incoming = JsonSerializer.Deserialize(payload.GetRawText(), entityType.ClrType, DynamicDeserializeOptions);

            if (incoming == null)
            {
                return BadRequest(new { message = "Dữ liệu cập nhật không hợp lệ" });
            }

            var presentKeys = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            if (payload.ValueKind == JsonValueKind.Object)
            {
                foreach (var jp in payload.EnumerateObject())
                {
                    presentKeys.Add(jp.Name);
                }
            }

            var currentUser = User.Identity?.Name ?? "system";
            var changes = new List<object>();

            var nullabilityCtx = new NullabilityInfoContext();
            var props = entityType.ClrType.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (var prop in props)
            {
                if (!prop.CanWrite || !prop.CanRead) continue;
                if (prop.Name is "Id" or "CreatedDate" or "CreatedBy" or "UpdatedDate" or "UpdatedBy") continue;
                if (prop.GetCustomAttribute<JsonIgnoreAttribute>() != null) continue;
                if (presentKeys.Count > 0 && !presentKeys.Contains(prop.Name)) continue;

                var oldVal = prop.GetValue(existing)?.ToString();
                var newVal = prop.GetValue(incoming);
                var newStr = newVal?.ToString();

                bool isChanged = !string.Equals(oldVal, newStr, StringComparison.OrdinalIgnoreCase);
                if (isChanged)
                {
                    if (allowedFields != null && !allowedFields.Contains(prop.Name))
                    {
                        return StatusCode(403, new
                        {
                            message = $"Bạn không có quyền chỉnh sửa trường dữ liệu '{prop.Name}' (bị khóa bởi phân quyền phần tử)."
                        });
                    }

                    changes.Add(new { field = prop.Name, oldValue = oldVal, newValue = newStr });
                }

                if (newVal != null)
                {
                    prop.SetValue(existing, newVal);
                }
                else if (Nullable.GetUnderlyingType(prop.PropertyType) != null ||
                         (!prop.PropertyType.IsValueType && nullabilityCtx.Create(prop).WriteState == NullabilityState.Nullable))
                {
                    prop.SetValue(existing, null);
                }
            }

            if (existing is BaseEntity b)
            {
                b.UpdatedDate = DateTime.UtcNow;
                b.UpdatedBy = currentUser;
            }

            await _dbContext.SaveChangesAsync();

            // 📜 Ghi vết AuditLog khi cập nhật
            if (changes.Count > 0)
            {
                await RecordAuditLogAsync(entityName, id, "UPDATE", JsonSerializer.Serialize(changes), currentUser);
            }

            return Ok(existing);
        }

        /// <summary>
        /// 🩹 PATCH /api/core/data/{entityName}/{id}
        /// Cập nhật một phần từng trường đơn lẻ (kế thừa PatchUpdate.cs / PatchAsync của Core C# cũ).
        /// Hỗ trợ cả 2 định dạng:
        /// 1) Danh sách thay đổi có kiểm tra xung đột oldVal: { "changes": [{ "field": "Name", "oldVal": "Old", "value": "New" }] }
        /// 2) Dictionary trường trực tiếp: { "fieldName": "newValue", ... }
        /// </summary>
        [HttpPatch("data/{entityName}/{id}")]
        public async Task<IActionResult> PatchEntity(
            string entityName,
            int id,
            [FromBody] JsonElement payload,
            [FromHeader(Name = "X-Feature-Id")] int? featureId = null,
            [FromHeader(Name = "X-Preview-Role")] string? previewRole = null)
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

            // 🛡️ Kiểm tra phân quyền cập nhật cấp Feature & Component (Field-Level Security)
            var (isAllowed, errorMsg, allowedFields) = await EvaluateFieldUpdatePermissionsAsync(entityName, existing, featureId, previewRole);
            if (!isAllowed)
            {
                return StatusCode(403, new { message = errorMsg });
            }

            var currentUser = User.Identity?.Name ?? "system";
            var patchChanges = new List<object>();
            var clrType = entityType.ClrType;
            var props = clrType.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            var nullabilityCtx = new NullabilityInfoContext();

            // Format 1: Payload có danh sách "changes"
            if (payload.ValueKind == JsonValueKind.Object &&
                (payload.TryGetProperty("changes", out var changesProp) || payload.TryGetProperty("Changes", out changesProp)) &&
                changesProp.ValueKind == JsonValueKind.Array)
            {
                foreach (var item in changesProp.EnumerateArray())
                {
                    string? field = null;
                    string? oldVal = null;
                    JsonElement valElem = default;
                    bool hasValElem = false;

                    if (item.TryGetProperty("field", out var f) || item.TryGetProperty("Field", out f))
                        field = f.GetString();
                    if (item.TryGetProperty("oldVal", out var ov) || item.TryGetProperty("OldVal", out ov))
                        oldVal = ov.GetString();
                    if (item.TryGetProperty("value", out var v) || item.TryGetProperty("Value", out v))
                    {
                        valElem = v;
                        hasValElem = true;
                    }

                    if (string.IsNullOrWhiteSpace(field) || !hasValElem) continue;

                    var prop = props.FirstOrDefault(p => string.Equals(p.Name, field, StringComparison.OrdinalIgnoreCase));
                    if (prop == null || !prop.CanWrite || prop.Name is "Id" or "CreatedDate" or "CreatedBy") continue;

                    // 🛡️ Kiểm tra phân quyền sửa trường dữ liệu
                    if (allowedFields != null && !allowedFields.Contains(prop.Name))
                    {
                        return StatusCode(403, new
                        {
                            message = $"Bạn không có quyền chỉnh sửa trường dữ liệu '{prop.Name}' (bị khóa bởi phân quyền phần tử)."
                        });
                    }

                    var currentPropVal = prop.GetValue(existing)?.ToString();

                    // Kiểm tra xung đột oldVal nếu có
                    if (oldVal != null)
                    {
                        if (!string.Equals(currentPropVal, oldVal, StringComparison.OrdinalIgnoreCase))
                        {
                            return Conflict(new
                            {
                                message = $"Dữ liệu trường '{prop.Name}' đã bị thay đổi trước đó từ '{oldVal}' thành '{currentPropVal}'. Vui lòng tải lại!",
                                currentRecord = existing
                            });
                        }
                    }

                    AssignPropertyValue(existing, prop, valElem, nullabilityCtx);
                    var updatedVal = prop.GetValue(existing)?.ToString();

                    if (!string.Equals(currentPropVal, updatedVal, StringComparison.OrdinalIgnoreCase))
                    {
                        patchChanges.Add(new { field = prop.Name, oldValue = currentPropVal, newValue = updatedVal });
                    }
                }
            }
            // Format 2: Flat JSON object key-value
            else if (payload.ValueKind == JsonValueKind.Object)
            {
                foreach (var propItem in payload.EnumerateObject())
                {
                    var fieldName = propItem.Name;
                    if (fieldName.StartsWith("_")) continue;

                    var prop = props.FirstOrDefault(p => string.Equals(p.Name, fieldName, StringComparison.OrdinalIgnoreCase));
                    if (prop == null || !prop.CanWrite || prop.Name is "Id" or "CreatedDate" or "CreatedBy") continue;

                    // 🛡️ Kiểm tra phân quyền sửa trường dữ liệu
                    if (allowedFields != null && !allowedFields.Contains(prop.Name))
                    {
                        return StatusCode(403, new
                        {
                            message = $"Bạn không có quyền chỉnh sửa trường dữ liệu '{prop.Name}' (bị khóa bởi phân quyền phần tử)."
                        });
                    }

                    var currentPropVal = prop.GetValue(existing)?.ToString();
                    AssignPropertyValue(existing, prop, propItem.Value, nullabilityCtx);
                    var updatedVal = prop.GetValue(existing)?.ToString();

                    if (!string.Equals(currentPropVal, updatedVal, StringComparison.OrdinalIgnoreCase))
                    {
                        patchChanges.Add(new { field = prop.Name, oldValue = currentPropVal, newValue = updatedVal });
                    }
                }
            }
            else
            {
                return BadRequest(new { message = "Payload PATCH không hợp lệ." });
            }

            if (existing is BaseEntity b)
            {
                b.UpdatedDate = DateTime.UtcNow;
                b.UpdatedBy = currentUser;
            }

            await _dbContext.SaveChangesAsync();

            // 📜 Ghi vết AuditLog cho PATCH
            if (patchChanges.Count > 0)
            {
                await RecordAuditLogAsync(entityName, id, "PATCH", JsonSerializer.Serialize(patchChanges), currentUser);
            }

            return Ok(existing);
        }

        private static void AssignPropertyValue(object target, PropertyInfo prop, JsonElement valElem, NullabilityInfoContext nullabilityCtx)
        {
            var targetType = Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType;

            if (valElem.ValueKind == JsonValueKind.Null || valElem.ValueKind == JsonValueKind.Undefined)
            {
                if (Nullable.GetUnderlyingType(prop.PropertyType) != null ||
                    (!prop.PropertyType.IsValueType && nullabilityCtx.Create(prop).WriteState == NullabilityState.Nullable))
                {
                    prop.SetValue(target, null);
                }
                return;
            }

            try
            {
                if (targetType == typeof(string))
                {
                    prop.SetValue(target, valElem.GetString());
                }
                else if (targetType == typeof(int))
                {
                    if (valElem.ValueKind == JsonValueKind.Number)
                        prop.SetValue(target, valElem.GetInt32());
                    else if (int.TryParse(valElem.GetString(), out var iVal))
                        prop.SetValue(target, iVal);
                }
                else if (targetType == typeof(long))
                {
                    if (valElem.ValueKind == JsonValueKind.Number)
                        prop.SetValue(target, valElem.GetInt64());
                    else if (long.TryParse(valElem.GetString(), out var lVal))
                        prop.SetValue(target, lVal);
                }
                else if (targetType == typeof(decimal))
                {
                    if (valElem.ValueKind == JsonValueKind.Number)
                        prop.SetValue(target, valElem.GetDecimal());
                    else if (decimal.TryParse(valElem.GetString(), out var dVal))
                        prop.SetValue(target, dVal);
                }
                else if (targetType == typeof(double))
                {
                    if (valElem.ValueKind == JsonValueKind.Number)
                        prop.SetValue(target, valElem.GetDouble());
                    else if (double.TryParse(valElem.GetString(), out var dbVal))
                        prop.SetValue(target, dbVal);
                }
                else if (targetType == typeof(bool))
                {
                    if (valElem.ValueKind is JsonValueKind.True or JsonValueKind.False)
                        prop.SetValue(target, valElem.GetBoolean());
                    else if (bool.TryParse(valElem.GetString(), out var bVal))
                        prop.SetValue(target, bVal);
                }
                else if (targetType == typeof(DateTime))
                {
                    if (valElem.ValueKind == JsonValueKind.String && DateTime.TryParse(valElem.GetString(), out var dtVal))
                        prop.SetValue(target, dtVal);
                }
                else
                {
                    var converted = JsonSerializer.Deserialize(valElem.GetRawText(), prop.PropertyType, DynamicDeserializeOptions);
                    prop.SetValue(target, converted);
                }
            }
            catch
            {
                // Bỏ qua lỗi ép kiểu
            }
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

            var currentUser = User.Identity?.Name ?? "system";
            if (record is BaseEntity b)
            {
                b.Active = false;
                b.UpdatedDate = DateTime.UtcNow;
                b.UpdatedBy = currentUser;
            }
            else
            {
                _dbContext.Remove(record);
            }

            await _dbContext.SaveChangesAsync();

            // 📜 Ghi vết AuditLog khi xóa mềm
            var deleteChanges = new List<object>
            {
                new { field = "Active", oldValue = "True", newValue = "False" }
            };
            await RecordAuditLogAsync(entityName, id, "DELETE", JsonSerializer.Serialize(deleteChanges), currentUser);

            return Ok(new { success = true, message = $"Đã xóa mềm bản ghi #{id} ({entityName}) trong cơ sở dữ liệu thành công" });
        }

        /// <summary>
        /// 📜 GET /api/core/audit/{entityName}/{recordId}
        /// Lấy toàn bộ lịch sử kiểm toán thay đổi của một bản ghi cụ thể (kế thừa History.cs của Core C# cũ).
        /// </summary>
        [HttpGet("audit/{entityName}/{recordId:int}")]
        public async Task<IActionResult> GetAuditLogs(string entityName, int recordId)
        {
            var logs = await _dbContext.AuditLogs
                .AsNoTracking()
                .Where(a => a.Active &&
                            a.EntityName.ToLower() == entityName.ToLower() &&
                            a.RecordId == recordId)
                .OrderByDescending(a => a.ChangedAt)
                .ToListAsync();

            return Ok(logs);
        }

        private async Task RecordAuditLogAsync(string entityName, int recordId, string action, string changesJson, string changedBy)
        {
            try
            {
                var audit = new AuditLog
                {
                    EntityName = entityName,
                    RecordId = recordId,
                    Action = action,
                    ChangesJson = changesJson,
                    ChangedBy = changedBy,
                    ChangedAt = DateTime.UtcNow,
                    Active = true,
                    CreatedDate = DateTime.UtcNow,
                    CreatedBy = changedBy
                };
                _dbContext.AuditLogs.Add(audit);
                await _dbContext.SaveChangesAsync();
            }
            catch
            {
                // Bỏ qua lỗi ghi audit để không ảnh hưởng luồng chính
            }
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
            if (string.IsNullOrWhiteSpace(filterExpr)) return true;

            var parts = Regex.Split(filterExpr, @"\s+and\s+", RegexOptions.IgnoreCase);
            foreach (var part in parts)
            {
                var trimmed = part.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;

                trimmed = Regex.Replace(trimmed, @"^\$filter\s*=\s*", "", RegexOptions.IgnoreCase).Trim();

                var match = Regex.Match(
                    trimmed,
                    @"^(\w+)(?:\s+(eq|ne)\s+|\s*(==|=|!=)\s*)('?[^']+'?)$",
                    RegexOptions.IgnoreCase
                );

                if (match.Success)
                {
                    var fieldName = match.Groups[1].Value;
                    var op = (!string.IsNullOrEmpty(match.Groups[2].Value) ? match.Groups[2].Value : match.Groups[3].Value).ToLowerInvariant();
                    var rawVal = match.Groups[4].Value.Trim('\'', '"', ' ');

                    var prop = item.GetType().GetProperty(fieldName, BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
                    if (prop != null)
                    {
                        var propVal = prop.GetValue(item)?.ToString() ?? string.Empty;
                        var equals = string.Equals(propVal, rawVal, StringComparison.OrdinalIgnoreCase);
                        bool isNeg = (op == "ne" || op == "!=");
                        bool matched = isNeg ? !equals : equals;
                        if (!matched) return false;
                    }
                }
            }
            return true;
        }
        private static readonly JsonSerializerOptions DynamicDeserializeOptions = CreateDynamicDeserializeOptions();

        private static JsonSerializerOptions CreateDynamicDeserializeOptions()
        {
            var opts = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
                NumberHandling = JsonNumberHandling.AllowReadingFromString,
            };
            opts.Converters.Add(new FlexibleStringJsonConverter());
            opts.Converters.Add(new FlexibleNullableDateTimeConverter());
            return opts;
        }

        private sealed class FlexibleStringJsonConverter : JsonConverter<string?>
        {
            public override string? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                return reader.TokenType switch
                {
                    JsonTokenType.String => reader.GetString(),
                    JsonTokenType.Number => Encoding.UTF8.GetString(reader.ValueSpan),
                    JsonTokenType.True => "true",
                    JsonTokenType.False => "false",
                    JsonTokenType.Null => null,
                    _ => JsonDocument.ParseValue(ref reader).RootElement.ToString(),
                };
            }

            public override void Write(Utf8JsonWriter writer, string? value, JsonSerializerOptions options)
            {
                if (value == null) writer.WriteNullValue();
                else writer.WriteStringValue(value);
            }
        }

        private sealed class FlexibleNullableDateTimeConverter : JsonConverter<DateTime?>
        {
            public override DateTime? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            {
                if (reader.TokenType == JsonTokenType.Null) return null;
                if (reader.TokenType == JsonTokenType.String)
                {
                    var s = reader.GetString();
                    if (string.IsNullOrWhiteSpace(s)) return null;
                    if (DateTime.TryParse(s, out var dt)) return dt;
                }
                return reader.GetDateTime();
            }

            public override void Write(Utf8JsonWriter writer, DateTime? value, JsonSerializerOptions options)
            {
                if (value.HasValue) writer.WriteStringValue(value.Value);
                else writer.WriteNullValue();
            }
        }

        private async Task<(int? userId, string username, List<string> roleCodes, List<int> roleIds, bool isDev)> ResolveCurrentUserAsync(string? previewRole)
        {
            var user = HttpContext.User;
            var username = user.Identity?.Name ?? "system";

            var subVal = user.FindFirst(ClaimTypes.NameIdentifier)?.Value
                         ?? user.FindFirst("sub")?.Value;
            int.TryParse(subVal, out var userId);

            var roleClaims = user.FindAll(ClaimTypes.Role).Select(c => c.Value)
                .Concat(user.FindAll("role").Select(c => c.Value))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .ToList();

            bool isOriginalDev = roleClaims.Any(r => string.Equals(r, "Dev", StringComparison.OrdinalIgnoreCase))
                                 || string.Equals(username, "admin", StringComparison.OrdinalIgnoreCase);

            // Cho phép Dev giả lập xem theo Role (Preview as Role)
            if (isOriginalDev && !string.IsNullOrWhiteSpace(previewRole) && !string.Equals(previewRole, "Dev", StringComparison.OrdinalIgnoreCase))
            {
                var pRole = previewRole.Trim();
                var pRoleObj = await _dbContext.Roles.FirstOrDefaultAsync(r => r.Code == pRole && r.Active);
                var pRoleIdList = pRoleObj != null ? new List<int> { pRoleObj.Id } : new List<int>();
                return (userId > 0 ? userId : 1, username, new List<string> { pRole }, pRoleIdList, false);
            }

            if (roleClaims.Count == 0 && userId > 0)
            {
                var userRoles = await _dbContext.Set<UserRole>()
                    .Where(ur => ur.UserId == userId && ur.Active)
                    .Join(_dbContext.Roles.Where(r => r.Active), ur => ur.RoleId, r => r.Id, (ur, r) => new { r.Id, r.Code })
                    .ToListAsync();

                foreach (var ur in userRoles)
                {
                    if (!roleClaims.Contains(ur.Code, StringComparer.OrdinalIgnoreCase))
                        roleClaims.Add(ur.Code);
                }
            }

            if (roleClaims.Count == 0)
            {
                roleClaims.Add("Dev");
            }

            var roleIds = await _dbContext.Roles
                .Where(r => roleClaims.Contains(r.Code) && r.Active)
                .Select(r => r.Id)
                .ToListAsync();

            bool isDev = roleClaims.Any(r => string.Equals(r, "Dev", StringComparison.OrdinalIgnoreCase));
            return (userId > 0 ? userId : null, username, roleClaims, roleIds, isDev);
        }

        private async Task<(bool isAllowed, string? errorMessage, HashSet<string>? allowedFields)> EvaluateFieldUpdatePermissionsAsync(
            string entityName,
            object existingEntity,
            int? headerFeatureId,
            string? previewRole)
        {
            var (userId, username, roleCodes, roleIds, isDev) = await ResolveCurrentUserAsync(previewRole);
            if (isDev)
            {
                return (true, null, null); // Dev có toàn quyền bypass
            }

            int targetPageId = headerFeatureId ?? 0;
            if (targetPageId <= 0)
            {
                var page = await _dbContext.Pages.FirstOrDefaultAsync(p => p.EntityName == entityName || p.Route.Contains(entityName));
                if (page != null) targetPageId = page.Id;
            }

            if (targetPageId <= 0)
            {
                return (true, null, null);
            }

            // 1. Kiểm tra quyền cấp Feature
            var featurePolicies = await _dbContext.FeaturePolicies
                .Where(fp => fp.FeatureId == targetPageId && fp.Active)
                .ToListAsync();

            bool hasFeatureWriteAll = false;
            bool hasFeatureWriteOwn = false;

            var userFp = userId.HasValue ? featurePolicies.FirstOrDefault(fp => fp.UserId == userId.Value) : null;
            if (userFp != null)
            {
                hasFeatureWriteAll = userFp.CanWriteAll;
                hasFeatureWriteOwn = userFp.CanWrite;
            }
            else
            {
                var roleFps = featurePolicies.Where(fp => fp.RoleId.HasValue && roleIds.Contains(fp.RoleId.Value)).ToList();
                if (roleFps.Count > 0)
                {
                    hasFeatureWriteAll = roleFps.Any(fp => fp.CanWriteAll);
                    hasFeatureWriteOwn = roleFps.Any(fp => fp.CanWrite);
                }
            }

            bool isOwner = false;
            if (existingEntity is BaseEntity be)
            {
                isOwner = string.Equals(be.CreatedBy, username, StringComparison.OrdinalIgnoreCase);
            }

            // Nếu user có CanWriteAll ở cấp Feature hoặc là người tạo và có CanWrite -> Cho phép sửa toàn bộ
            if (hasFeatureWriteAll || (hasFeatureWriteOwn && isOwner))
            {
                return (true, null, null);
            }

            // 2. Nếu không có toàn quyền sửa bản ghi ở cấp Feature (VD: Pricing sửa lô của Shipment) -> Kiểm tra cấp Component & GridPolicy
            var compPolicies = await _dbContext.ComponentPolicies
                .Where(cp => cp.PageId == targetPageId && cp.Active && !string.IsNullOrEmpty(cp.FieldName))
                .ToListAsync();

            var allowedFields = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            foreach (var cp in compPolicies)
            {
                bool canEdit = false;
                if (userId.HasValue && cp.UserId == userId.Value)
                {
                    canEdit = cp.CanWriteAll || (cp.CanWrite && isOwner);
                }
                else if (cp.RoleId.HasValue && roleIds.Contains(cp.RoleId.Value))
                {
                    canEdit = cp.CanWriteAll || (cp.CanWrite && isOwner);
                }

                if (canEdit && !string.IsNullOrWhiteSpace(cp.FieldName))
                {
                    allowedFields.Add(cp.FieldName.Trim());
                }
            }

            if (allowedFields.Count == 0)
            {
                return (false, "Bạn chỉ có quyền xem dữ liệu, không có quyền chỉnh sửa bản ghi này.", null);
            }

            return (true, null, allowedFields);
        }

        private async Task<HashSet<string>> GetMaskedFieldsAsync(string entityName, int? headerFeatureId, string? previewRole)
        {
            var (userId, username, roleCodes, roleIds, isDev) = await ResolveCurrentUserAsync(previewRole);
            if (isDev) return new HashSet<string>();

            int targetPageId = headerFeatureId ?? 0;
            if (targetPageId <= 0)
            {
                var page = await _dbContext.Pages.FirstOrDefaultAsync(p => p.EntityName == entityName || p.Route.Contains(entityName));
                if (page != null) targetPageId = page.Id;
            }
            if (targetPageId <= 0) return new HashSet<string>();

            var compPolicies = await _dbContext.ComponentPolicies
                .Where(cp => cp.PageId == targetPageId && cp.Active && !string.IsNullOrEmpty(cp.FieldName))
                .ToListAsync();

            var maskedFields = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            foreach (var group in compPolicies.GroupBy(cp => cp.FieldName, StringComparer.OrdinalIgnoreCase))
            {
                var field = group.Key;
                if (string.IsNullOrWhiteSpace(field)) continue;

                var userRule = userId.HasValue ? group.FirstOrDefault(cp => cp.UserId == userId.Value) : null;
                if (userRule != null)
                {
                    if (!userRule.CanRead) maskedFields.Add(field);
                }
                else
                {
                    var roleRules = group.Where(cp => cp.RoleId.HasValue && roleIds.Contains(cp.RoleId.Value)).ToList();
                    if (roleRules.Count > 0 && roleRules.All(r => !r.CanRead))
                    {
                        maskedFields.Add(field);
                    }
                }
            }

            return maskedFields;
        }
    }
}

