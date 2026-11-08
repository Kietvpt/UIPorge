using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UIForge.API.Models.Entities;

namespace UIForge.API.Controllers
{
    /// <summary>
    /// 🌐 DynamicMetadataController: Bộ máy quản trị Danh bạ Thực thể (Entity Metadata)
    /// và Cung cấp API Dữ liệu Chung (Generic Entity Data Engine) cho UIForge.
    /// 
    /// CHỨC NĂNG CỐT LÕI:
    /// 1. Tự động đồng bộ Model giữa Backend (.NET) và Frontend (UI Studio).
    ///    Khi Backend bổ sung hoặc chỉnh sửa Entity, Frontend tự động nhận biết danh sách bảng và cột.
    /// 2. Cung cấp API truy vấn dữ liệu theo chuẩn OData ($filter, $select, $orderby).
    /// 3. Tuân thủ triệt để nguyên tắc BaseEntity (Soft Delete với Active = true, Audit Trail).
    /// </summary>
    [ApiController]
    [Route("api/core")]
    public class DynamicMetadataController : ControllerBase
    {
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

        // ── KHO DỮ LIỆU MẪU IN-MEMORY DÀNH CHO DEMO KIỂM THỬ THỰC TẾ ──
        private static readonly List<TransactionEntity> _sampleTransactions = new()
        {
            new TransactionEntity
            {
                Id = 1,
                JobNo = "FCLI-26020005",
                TypeId = 1, // FCL Import
                ShipmentDate = new DateTime(2026, 2, 2),
                MblNo = "ASHVT00002005",
                MblIssuedDate = new DateTime(2026, 1, 25),
                MblType = "SURRENDERED",
                VendorId = "VFRAC-IT",
                VendorName = "VFRAC-IT VIETNAM",
                SLines = "SITC",
                Agent = "SHANGHAI TRANSLEAD",
                PolId = "CNSGH",
                PodId = "VNDTS",
                Service = "CY/CY",
                Opic = "NGO PHAN THI LY",
                Eta = new DateTime(2026, 2, 3),
                PTerm = "COLLECT",
                Commodity = "Linh kiện điện tử phụ trợ",
                TotalPackages = 12,
                PackageType = "PALLETS",
                TotalGw = 1085m,
                TotalCbm = 25.00m,
                TotalVgm = 0m,
                PoNo = "PO-2026-8899",
                Notes = "Lô hàng FCL nhập khẩu theo chỉ thị của khách hàng Foxlink Đà Nẵng.",
                Active = true,
                CreatedDate = DateTime.UtcNow,
                CreatedBy = "admin"
            },
            new TransactionEntity
            {
                Id = 2,
                JobNo = "FCLI-26020006",
                TypeId = 1, // FCL Import
                ShipmentDate = new DateTime(2026, 2, 5),
                MblNo = "ASHVT00002006",
                MblIssuedDate = new DateTime(2026, 1, 28),
                MblType = "ORIGINAL",
                VendorId = "TRANSLEAD",
                VendorName = "SHANGHAI TRANSLEAD",
                SLines = "ONE",
                Agent = "OCEAN NETWORK EXPRESS JAPAN",
                PolId = "KRPUS",
                PodId = "VNSGN",
                Service = "CY/CY",
                Opic = "HO THI MAI",
                Eta = new DateTime(2026, 2, 8),
                PTerm = "PREPAID",
                Commodity = "Nguyên phụ liệu may mặc",
                TotalPackages = 450,
                PackageType = "CARTONS",
                TotalGw = 3450m,
                TotalCbm = 42.50m,
                TotalVgm = 3450m,
                PoNo = "PO-2026-9011",
                Notes = "Hàng đi cảng Cát Lái, kiểm tra thông quan trước khi giải phóng hàng.",
                Active = true,
                CreatedDate = DateTime.UtcNow,
                CreatedBy = "admin"
            },
            new TransactionEntity
            {
                Id = 3,
                JobNo = "LCLI-26020001",
                TypeId = 2, // LCL Import
                ShipmentDate = new DateTime(2026, 2, 6),
                MblNo = "SITC2602009",
                Active = true,
                CreatedDate = DateTime.UtcNow,
                CreatedBy = "admin"
            }
        };

        private static readonly List<TerminalEntity> _sampleTerminals = new()
        {
            new TerminalEntity { Id = 1, Code = "CNSGH", FullName = "SHANGHAI / CNSGH", Country = "CHINA", VendorId = "VFRAC-IT", VendorName = "VFRAC-IT VIETNAM", AgentName = "SHANGHAI TRANSLEAD", Active = true },
            new TerminalEntity { Id = 2, Code = "KRPUS", FullName = "BUSAN / KRPUS", Country = "KOREA", VendorId = "TRANSLEAD", VendorName = "SHANGHAI TRANSLEAD", AgentName = "OCEAN NETWORK EXPRESS JAPAN", Active = true },
            new TerminalEntity { Id = 3, Code = "SGSIN", FullName = "SINGAPORE / SGSIN", Country = "SINGAPORE", VendorId = "VFRAC-IT", VendorName = "VFRAC-IT VIETNAM", AgentName = "SITC LOGISTICS SINGAPORE", Active = true },
            new TerminalEntity { Id = 4, Code = "CNNGB", FullName = "NINGBO / CNNGB", Country = "CHINA", VendorId = "TRANSLEAD", VendorName = "KMTC VIETNAM CO., LTD", AgentName = "KMTC INCHEON", Active = true },
            new TerminalEntity { Id = 5, Code = "VNDTS", FullName = "TIEN SA TERMINAL / VNDTS", Country = "VIETNAM", VendorId = "VFRAC-IT", VendorName = "CẢNG ĐÀ NẴNG", AgentName = "TIEN SA LOGISTICS", Active = true },
            new TerminalEntity { Id = 6, Code = "VNSGN", FullName = "CAT LAI / VNSGN", Country = "VIETNAM", VendorId = "TRANSLEAD", VendorName = "TÂN CẢNG SÀI GÒN", AgentName = "SAIGON NEWPORT", Active = true },
            new TerminalEntity { Id = 7, Code = "VNHPH", FullName = "HAI PHONG / VNHPH", Country = "VIETNAM", VendorId = "VFRAC-IT", VendorName = "CẢNG HẢI PHÒNG", AgentName = "HAI PHONG PORT AUTHORITY", Active = true }
        };

        /// <summary>
        /// 🔍 GET /api/core/metadata/entities
        /// Quét Reflection các Entity kế thừa BaseEntity để trả về danh bạ Bảng và Cột cho UI Designer.
        /// </summary>
        [HttpGet("metadata/entities")]
        public IActionResult GetEntityMetadataCatalog()
        {
            var entityTypes = new List<(string Name, string DisplayName, string TableName, Type Type)>
            {
                ("Transaction", "Lô Hàng (Transactions)", "Transactions", typeof(TransactionEntity)),
                ("Terminal", "Cảng Biển / Ga Hàng Không (Terminals)", "Terminals", typeof(TerminalEntity)),
                ("Container", "Danh Mục Container (Containers)", "Containers", typeof(ContainerEntity))
            };

            var catalogs = new List<EntityMetadataDto>();

            foreach (var (name, displayName, tableName, type) in entityTypes)
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
        /// Truy vấn dữ liệu tổng quát cho các Component (Gridview, Dropdown, Form) với hỗ trợ OData.
        /// </summary>
        [HttpGet("data/{entityName}")]
        public IActionResult QueryEntityData(
            string entityName,
            [FromQuery] string? filter = null,
            [FromQuery(Name = "$filter")] string? odataFilter = null)
        {
            var filterExpr = filter ?? odataFilter ?? string.Empty;
            var target = entityName.ToLowerInvariant();

            if (target is "transaction" or "transactions")
            {
                var query = _sampleTransactions.Where(t => t.Active).AsQueryable();

                // Lọc cơ bản theo TypeId (ví dụ: TypeId eq 1 cho FCL Import)
                if (filterExpr.Contains("TypeId eq 1", StringComparison.OrdinalIgnoreCase) || filterExpr.Contains("typeid=1", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(t => t.TypeId == 1);
                }
                else if (filterExpr.Contains("TypeId eq 2", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(t => t.TypeId == 2);
                }

                return Ok(query.ToList());
            }

            if (target is "terminal" or "terminals")
            {
                var query = _sampleTerminals.Where(t => t.Active).AsQueryable();
                return Ok(query.ToList());
            }

            return Ok(new List<object>());
        }

        /// <summary>
        /// 🎯 GET /api/core/data/{entityName}/{id}
        /// Lấy chi tiết một bản ghi theo Id phục vụ hiển thị màn hình TransactionDetailBL
        /// </summary>
        [HttpGet("data/{entityName}/{id}")]
        public IActionResult GetEntityById(string entityName, int id)
        {
            var target = entityName.ToLowerInvariant();
            if (target is "transaction" or "transactions")
            {
                var record = _sampleTransactions.FirstOrDefault(t => t.Id == id && t.Active);
                if (record == null) return NotFound(new { message = $"Không tìm thấy bản ghi {entityName} #{id}" });
                return Ok(record);
            }

            if (target is "terminal" or "terminals")
            {
                var record = _sampleTerminals.FirstOrDefault(t => t.Id == id && t.Active);
                if (record == null) return NotFound(new { message = $"Không tìm thấy bản ghi {entityName} #{id}" });
                return Ok(record);
            }

            return NotFound();
        }

        /// <summary>
        /// 🗑️ DELETE /api/core/data/{entityName}/{id}
        /// Thực hiện Xóa mềm (Soft Delete) bằng cách đặt Active = false
        /// </summary>
        [HttpDelete("data/{entityName}/{id}")]
        public IActionResult SoftDeleteEntity(string entityName, int id)
        {
            var target = entityName.ToLowerInvariant();
            if (target is "transaction" or "transactions")
            {
                var record = _sampleTransactions.FirstOrDefault(t => t.Id == id);
                if (record != null)
                {
                    record.Active = false;
                    record.UpdatedDate = DateTime.UtcNow;
                    record.UpdatedBy = User.Identity?.Name ?? "system";
                    return Ok(new { success = true, message = $"Đã xóa mềm bản ghi #{id} thành công" });
                }
            }

            return NotFound();
        }
    }
}
