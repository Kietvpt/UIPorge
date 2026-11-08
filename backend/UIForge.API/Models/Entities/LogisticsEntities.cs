using System;

namespace UIForge.API.Models.Entities
{
    /// <summary>
    /// 🚢 SAMPLE LOGISTICS ENTITY: Lô hàng (Transaction)
    /// Dùng làm ví dụ kiểm thử cho Master-Detail & OData Query (TypeId = 1: FCL, TypeId = 2: LCL).
    /// Tuân thủ quy chuẩn kế thừa BaseEntity (Soft Delete + Audit Trail).
    /// </summary>
    public class TransactionEntity : BaseEntity
    {
        public string JobNo { get; set; } = string.Empty;
        public int TypeId { get; set; } = 1; // 1: FCL Import, 2: LCL, 3: AIR
        public DateTime? ShipmentDate { get; set; }
        public string? MblNo { get; set; }
        public DateTime? MblIssuedDate { get; set; }
        public string? MblType { get; set; }
        public string? VendorId { get; set; }
        public string? VendorName { get; set; }
        public string? SLines { get; set; }
        public string? Agent { get; set; }
        public string? PolId { get; set; }
        public string? PodId { get; set; }
        public string? Service { get; set; }
        public string? Opic { get; set; }
        public DateTime? Eta { get; set; }
        public string? PTerm { get; set; }
        public string? Commodity { get; set; }
        public int TotalPackages { get; set; }
        public string? PackageType { get; set; }
        public decimal TotalGw { get; set; }
        public decimal TotalCbm { get; set; }
        public decimal TotalVgm { get; set; }
        public string? PoNo { get; set; }
        public string? Notes { get; set; }
    }

    /// <summary>
    /// ⚓ SAMPLE LOGISTICS ENTITY: Cảng biển / Ga hàng không (Terminal)
    /// Dùng làm ví dụ kiểm thử cho Reference & Cascading Populate Field.
    /// </summary>
    public class TerminalEntity : BaseEntity
    {
        public string Code { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string? VendorId { get; set; }
        public string? VendorName { get; set; }
        public string? AgentName { get; set; }
    }

    /// <summary>
    /// 📦 SAMPLE LOGISTICS ENTITY: Danh mục Container
    /// </summary>
    public class ContainerEntity : BaseEntity
    {
        public int TransactionId { get; set; }
        public string ContainerNo { get; set; } = string.Empty;
        public string Size { get; set; } = "40HC";
        public string? SealNo { get; set; }
        public int PackageNumber { get; set; }
        public string? PackageType { get; set; }
        public decimal Gw { get; set; }
        public decimal Cbm { get; set; }
        public decimal Vgm { get; set; }
        public string? Description { get; set; }
    }
}

