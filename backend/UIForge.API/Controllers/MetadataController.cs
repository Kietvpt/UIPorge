using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UIForge.API.Controllers
{
    /// <summary>
    /// Metadata Controller cung cấp danh bạ các Entity & Field cho Data Binding trong UI Builder.
    /// 
    /// NGUYÊN TẮC THIẾT KẾ:
    /// - UIPorge là công cụ Low-Code UI Studio tổng quát (Domain-Agnostic Engine).
    /// - Các dữ liệu thực thể Logistic (Vendor, Shipment, Terminal...) dưới đây 
    ///   là bộ "Dữ Liệu Mẫu (Test Fixture Data)" để phục vụ kiểm thử tính năng 
    ///   Data Binding và Auto-populate trên giao diện thiết kế.
    /// - Không nhúng logic nghiệp vụ đặc thù logistic vào lõi engine UIPorge.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class MetadataController : ControllerBase
    {
        public class EntityFieldDto
        {
            public string Name { get; set; } = string.Empty;
            public string DisplayName { get; set; } = string.Empty;
            public string DataType { get; set; } = "string"; // string, number, date, boolean
            public bool IsRequired { get; set; }
            public string[]? Options { get; set; }
        }

        public class EntityCatalogDto
        {
            public string Id { get; set; } = string.Empty;
            public string Name { get; set; } = string.Empty;
            public string DisplayName { get; set; } = string.Empty;
            public string Description { get; set; } = string.Empty;
            public List<EntityFieldDto> Fields { get; set; } = new();
        }

        /// <summary>
        /// Danh bạ các Entity có thể chọn để Data Binding
        /// </summary>
        [HttpGet("entities")]
        public IActionResult GetEntities()
        {
            var catalogs = new List<EntityCatalogDto>
            {
                new()
                {
                    Id = "ent_shipment",
                    Name = "Shipment",
                    DisplayName = "Lô Hàng (FCL / LCL Shipment)",
                    Description = "Thông tin hồ sơ lô hàng vận chuyển đường biển/hàng không (Ảnh 4)",
                    Fields = new List<EntityFieldDto>
                    {
                        new() { Name = "JobNo", DisplayName = "Mã Job (Job No.)", DataType = "string", IsRequired = true },
                        new() { Name = "MBLNo", DisplayName = "Số M-B/L (M-B/L No.)", DataType = "string", IsRequired = true },
                        new() { Name = "MBLIssuedDate", DisplayName = "Ngày Phát Hành M-B/L", DataType = "date" },
                        new() { Name = "MBLType", DisplayName = "Loại M-B/L (Surrendered/Original)", DataType = "string", Options = new[] { "SURRENDERED", "ORIGINAL", "SEA WAYBILL" } },
                        new() { Name = "ShipmentDate", DisplayName = "Ngày Lô Hàng (S.Date)", DataType = "date" },
                        new() { Name = "POL", DisplayName = "Cảng Xếp Hàng (POL)", DataType = "string" },
                        new() { Name = "POD", DisplayName = "Cảng Dỡ Hàng (POD)", DataType = "string" },
                        new() { Name = "ETA", DisplayName = "Ngày Đến Dự Kiến (ETA)", DataType = "date" },
                        new() { Name = "ETD", DisplayName = "Ngày Đi Dự Kiến (ETD)", DataType = "date" },
                        new() { Name = "Service", DisplayName = "Phương Thức Vận Chuyển", DataType = "string", Options = new[] { "CY/CY", "CFS/CFS", "DOOR/DOOR" } },
                        new() { Name = "PaymentTerm", DisplayName = "Điều Khoản Thanh Toán (P.Term)", DataType = "string", Options = new[] { "PREPAID", "COLLECT" } },
                        new() { Name = "TotalPackages", DisplayName = "Tổng Số Kiện (T.Packages)", DataType = "number" },
                        new() { Name = "PackageType", DisplayName = "Loại Bao Bì (P.Type)", DataType = "string", Options = new[] { "PALLETS", "CARTONS", "BAGS", "WOODEN CRATES" } },
                        new() { Name = "TotalGW", DisplayName = "Tổng Trọng Lượng (Total GW - KGS)", DataType = "number" },
                        new() { Name = "TotalCBM", DisplayName = "Tổng Thể Tích (Total CBM - M3)", DataType = "number" },
                        new() { Name = "TotalVGM", DisplayName = "Tổng Trọng Lượng Xác Thực (Total VGM)", DataType = "number" },
                        new() { Name = "PONo", DisplayName = "Số Đơn Đặt Hàng (PO No.)", DataType = "string" },
                        new() { Name = "Notes", DisplayName = "Ghi Chú Đơn Hàng", DataType = "string" }
                    }
                },
                new()
                {
                    Id = "ent_vendor",
                    Name = "Vendor",
                    DisplayName = "Nhà Cung Cấp / Đối Tác (Vendor)",
                    Description = "Danh mục đại lý, hãng tàu, forwarder đối tác (Ảnh 1 & Vendor.cs)",
                    Fields = new List<EntityFieldDto>
                    {
                        new() { Name = "Id", DisplayName = "Mã Hệ Thống (ID)", DataType = "number", IsRequired = true },
                        new() { Name = "CompanyLocalFullName", DisplayName = "Tên Doanh Nghiệp (Tiếng Việt)", DataType = "string", IsRequired = true },
                        new() { Name = "CompanyInterShortName", DisplayName = "Tên Viết Tắt (Quốc Tế)", DataType = "string" },
                        new() { Name = "TaxCode", DisplayName = "Mã Số Thuế (Tax Code)", DataType = "string" },
                        new() { Name = "Address", DisplayName = "Địa Chỉ Giao Dịch", DataType = "string" },
                        new() { Name = "PhoneNumber", DisplayName = "Số Điện Thoại", DataType = "string" },
                        new() { Name = "Email", DisplayName = "Hòm Thư Điện Tử", DataType = "string" },
                        new() { Name = "Active", DisplayName = "Đang Hoạt Động", DataType = "boolean" }
                    }
                },
                new()
                {
                    Id = "ent_customer",
                    Name = "Customer",
                    DisplayName = "Khách Hàng (Customer)",
                    Description = "Hồ sơ chủ hàng, người gửi hàng (Shipper) hoặc người nhận hàng (Consignee)",
                    Fields = new List<EntityFieldDto>
                    {
                        new() { Name = "CustomerCode", DisplayName = "Mã Khách Hàng", DataType = "string", IsRequired = true },
                        new() { Name = "CustomerName", DisplayName = "Tên Khách Hàng", DataType = "string", IsRequired = true },
                        new() { Name = "TaxCode", DisplayName = "Mã Số Thuế", DataType = "string" },
                        new() { Name = "ContactPerson", DisplayName = "Người Liên Hệ", DataType = "string" },
                        new() { Name = "PhoneNumber", DisplayName = "Số Điện Thoại", DataType = "string" },
                        new() { Name = "Address", DisplayName = "Địa Chỉ Văn Phòng", DataType = "string" },
                        new() { Name = "Salesman", DisplayName = "Nhân Viên Phụ Trách (Sales)", DataType = "string" }
                    }
                },
                new()
                {
                    Id = "ent_terminal",
                    Name = "Terminal",
                    DisplayName = "Cảng Biển & Ga Hàng Không (Terminal/Port)",
                    Description = "Danh bạ cảng biển xếp dỡ hàng hóa (Ảnh 4)",
                    Fields = new List<EntityFieldDto>
                    {
                        new() { Name = "TerminalCode", DisplayName = "Mã Cảng (CNSGH, VNDTS)", DataType = "string", IsRequired = true },
                        new() { Name = "TerminalName", DisplayName = "Tên Cảng Biển / Ga Hàng Hóa", DataType = "string", IsRequired = true },
                        new() { Name = "CountryCode", DisplayName = "Mã Quốc Gia (CN, VN, US)", DataType = "string" },
                        new() { Name = "PortType", DisplayName = "Loại Cảng (Sea / Air / ICD)", DataType = "string", Options = new[] { "SeaPort", "Airport", "ICD" } }
                    }
                },
                new()
                {
                    Id = "ent_commodity",
                    Name = "Commodity",
                    DisplayName = "Chủng Loại Hàng Hóa (Commodity)",
                    Description = "Tên mặt hàng, mã HS code hàng hóa xuất nhập khẩu",
                    Fields = new List<EntityFieldDto>
                    {
                        new() { Name = "CommodityCode", DisplayName = "Mã Chủng Loại", DataType = "string", IsRequired = true },
                        new() { Name = "CommodityName", DisplayName = "Tên Hàng Hóa", DataType = "string", IsRequired = true },
                        new() { Name = "HsCode", DisplayName = "Mã Biểu Thuế (HS Code)", DataType = "string" },
                        new() { Name = "Description", DisplayName = "Mô Tả Kỹ Thuật", DataType = "string" }
                    }
                }
            };

            return Ok(catalogs);
        }

        /// <summary>
        /// Dữ liệu mẫu (Test Sample Data) tương ứng với thực tế trên Ảnh 4
        /// </summary>
        [HttpGet("entities/{entityName}/sample-data")]
        public IActionResult GetSampleData(string entityName)
        {
            var lower = entityName.ToLowerInvariant();
            if (lower == "shipment")
            {
                return Ok(new Dictionary<string, object>
                {
                    ["jobNo"] = "FCLI-26020005",
                    ["mblNo"] = "ASHVT00002005",
                    ["mblIssuedDate"] = "2026-01-25",
                    ["mblType"] = "SURRENDERED",
                    ["shipmentDate"] = "2026-02-02",
                    ["pol"] = "SHANGHAI / CNSGH",
                    ["pod"] = "TIEN SA TERMINAL / VNDTS",
                    ["eta"] = "2026-02-03",
                    ["service"] = "CY/CY",
                    ["paymentTerm"] = "COLLECT",
                    ["totalPackages"] = 12,
                    ["packageType"] = "PALLETS",
                    ["totalGW"] = 1085,
                    ["totalCBM"] = 25.00,
                    ["totalVGM"] = 0,
                    ["poNo"] = "PO-2026-8899"
                });
            }

            if (lower == "vendor")
            {
                return Ok(new List<Dictionary<string, object>>
                {
                    new()
                    {
                        ["id"] = 1,
                        ["companyLocalFullName"] = "CÔNG TY TNHH VFRAC-IT VIỆT NAM",
                        ["companyInterShortName"] = "VFRAC-IT",
                        ["taxCode"] = "0312456789",
                        ["address"] = "Tầng 5, Tòa nhà Bitexco, Q.1, TP.HCM",
                        ["phoneNumber"] = "028 3822 9999",
                        ["email"] = "ops@vfrac-it.com",
                        ["active"] = true
                    },
                    new()
                    {
                        ["id"] = 2,
                        ["companyLocalFullName"] = "SHANGHAI TRANSLEAD LOGISTICS CO., LTD",
                        ["companyInterShortName"] = "SHANGHAI TRANSLEAD",
                        ["taxCode"] = "9131000078",
                        ["address"] = "Pudong New District, Shanghai, China",
                        ["phoneNumber"] = "+86 21 5888 1234",
                        ["email"] = "booking@translead.cn",
                        ["active"] = true
                    }
                });
            }

            return Ok(new { message = $"Dữ liệu mẫu cho '{entityName}' đã sẵn sàng." });
        }
    }
}

