using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Logging;
using UIForge.Core.Data;
using UIForge.Core.Entities;
using UIForge.Core.Services;

namespace UIForge.Core.Controllers
{
    /// <summary>
    /// 📊 ExcelExportController: Bộ API xuất dữ liệu chuyên nghiệp sang file .xlsx chuẩn Microsoft OpenXML.
    /// Kế thừa và cải tiến từ TMSController.ExportExcel của Core C#.
    /// </summary>
    [ApiController]
    [Route("api/core/export")]
    public class ExcelExportController : ControllerBase
    {
        private readonly UIForgeDbContext _dbContext;
        private readonly ExcelExportService _exportService;
        private readonly ILogger<ExcelExportController> _logger;

        public ExcelExportController(
            UIForgeDbContext dbContext,
            ILogger<ExcelExportController> logger,
            ExcelExportService? exportService = null)
        {
            _dbContext = dbContext;
            _logger = logger;
            _exportService = exportService ?? new ExcelExportService();
        }

        /// <summary>
        /// 📊 POST /api/core/export/excel
        /// Nhận danh sách cột và các dòng dữ liệu tùy biến từ GridView/Client và xuất ra file .xlsx.
        /// </summary>
        [HttpPost("excel")]
        public IActionResult ExportCustomExcel([FromBody] ExcelExportRequest request)
        {
            if (request == null)
            {
                return BadRequest(new { success = false, message = "Dữ liệu yêu cầu xuất Excel không hợp lệ." });
            }

            try
            {
                var bytes = _exportService.ExportToExcel(request);
                var safeTitle = string.IsNullOrWhiteSpace(request.Title) ? "ExportData" : request.Title.Trim().Replace(" ", "_");
                var fileName = $"{safeTitle}_{DateTime.UtcNow:yyyyMMdd_HHmmss}.xlsx";

                return File(
                    bytes,
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi kết xuất Excel từ payload tùy biến.");
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        /// <summary>
        /// 🌐 GET /api/core/export/excel/{entityName}
        /// Tự động quét toàn bộ dữ liệu của một Thực thể bất kỳ trong SQL Server và xuất ra file .xlsx.
        /// </summary>
        [HttpGet("excel/{entityName}")]
        public async Task<IActionResult> ExportEntityToExcel(
            string entityName,
            [FromQuery] string? title = null,
            [FromQuery] string? sheetName = null)
        {
            var entityType = ResolveEntityType(entityName);
            if (entityType == null)
            {
                return NotFound(new { success = false, message = $"Thực thể '{entityName}' không tồn tại trong hệ thống." });
            }

            try
            {
                var clrType = entityType.ClrType;
                var isBaseEntity = typeof(BaseEntity).IsAssignableFrom(clrType);

                var queryMethod = typeof(DbContext).GetMethod(nameof(DbContext.Set), Type.EmptyTypes)?
                    .MakeGenericMethod(clrType);
                if (queryMethod?.Invoke(_dbContext, null) is not IQueryable queryable)
                {
                    return BadRequest(new { success = false, message = $"Không thể truy vấn thực thể '{entityName}'" });
                }

                var toListAsyncMethod = typeof(EntityFrameworkQueryableExtensions)
                    .GetMethods(BindingFlags.Public | BindingFlags.Static)
                    .First(m => m.Name == nameof(EntityFrameworkQueryableExtensions.ToListAsync) && m.GetParameters().Length == 2)
                    .MakeGenericMethod(clrType);

                var task = (Task)toListAsyncMethod.Invoke(null, new object[] { queryable, CancellationToken.None })!;
                await task.ConfigureAwait(false);
                var resultProp = task.GetType().GetProperty("Result");
                var rawList = (IEnumerable)resultProp!.GetValue(task)!;

                // Chuẩn bị danh sách cột từ Reflection properties
                var props = clrType.GetProperties(BindingFlags.Public | BindingFlags.Instance)
                    .Where(p => p.GetCustomAttribute<System.Text.Json.Serialization.JsonIgnoreAttribute>() == null)
                    .ToList();

                var columns = new List<ExcelExportColumn>();
                foreach (var p in props)
                {
                    var pt = Nullable.GetUnderlyingType(p.PropertyType) ?? p.PropertyType;
                    var dataType = "string";
                    var align = "left";

                    if (pt == typeof(int) || pt == typeof(long) || pt == typeof(decimal) || pt == typeof(double) || pt == typeof(float))
                    {
                        dataType = "number";
                        align = "right";
                    }
                    else if (pt == typeof(DateTime) || pt == typeof(DateTimeOffset))
                    {
                        dataType = "date";
                        align = "center";
                    }
                    else if (pt == typeof(bool))
                    {
                        dataType = "boolean";
                        align = "center";
                    }

                    columns.Add(new ExcelExportColumn
                    {
                        Key = p.Name,
                        Title = p.Name,
                        DataType = dataType,
                        Align = align,
                    });
                }

                var rows = new List<Dictionary<string, object?>>();
                foreach (var item in rawList)
                {
                    if (isBaseEntity && item is BaseEntity b && !b.Active)
                        continue;

                    var dict = new Dictionary<string, object?>(StringComparer.OrdinalIgnoreCase);
                    foreach (var p in props)
                    {
                        dict[p.Name] = p.GetValue(item);
                    }
                    rows.Add(dict);
                }

                var cleanTitle = string.IsNullOrWhiteSpace(title) ? $"Danh sách {entityName}" : title;
                var exportReq = new ExcelExportRequest
                {
                    Title = cleanTitle,
                    SheetName = string.IsNullOrWhiteSpace(sheetName) ? entityName : sheetName,
                    Columns = columns,
                    Rows = rows
                };

                var bytes = _exportService.ExportToExcel(exportReq);
                var fileName = $"{entityName}_{DateTime.UtcNow:yyyyMMdd_HHmmss}.xlsx";

                return File(
                    bytes,
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi xuất dữ liệu thực thể {EntityName} sang Excel.", entityName);
                return StatusCode(500, new { success = false, message = ex.Message });
            }
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
    }
}
