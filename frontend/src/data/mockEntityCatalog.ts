import type { UIEntityCatalog } from '@/types/schema'

/**
 * 📦 MOCK ENTITY CATALOG (DỮ LIỆU MẪU ĐỂ TEST DATA BINDING)
 * 
 * NGUYÊN TẮC KIẾN TRÚC:
 * - UIPorge là một UI Builder Engine tổng quát (Domain-Agnostic).
 * - Các thực thể nghiệp vụ Logistic (Vendor, Shipment, Terminal...) dưới đây
 *   chỉ đóng vai trò là "Dữ Liệu Mẫu (Fixture Data)" để phục vụ kiểm thử 
 *   tính năng chọn trường và liên kết dữ liệu (Data Binding) trong giao diện thiết kế.
 * - Mô hình lõi của UIPorge (UIEntityCatalog, ComponentNode, FormFieldProps)
 *   hoàn toàn độc lập và không phụ thuộc vào bất kỳ nghiệp vụ cụ thể nào.
 */
export const MOCK_ENTITY_CATALOGS: UIEntityCatalog[] = [
  {
    id: 'ent_shipment',
    name: 'Shipment',
    displayName: 'Lô Hàng (FCL / LCL Shipment)',
    description: 'Thông tin hồ sơ lô hàng vận chuyển đường biển/hàng không (Ảnh 4)',
    fields: [
      { name: 'JobNo', displayName: 'Mã Job (Job No.)', dataType: 'string', isRequired: true },
      { name: 'MBLNo', displayName: 'Số M-B/L (M-B/L No.)', dataType: 'string', isRequired: true },
      { name: 'MBLIssuedDate', displayName: 'Ngày Phát Hành M-B/L', dataType: 'date' },
      { name: 'MBLType', displayName: 'Loại M-B/L (Surrendered/Original)', dataType: 'string', options: ['SURRENDERED', 'ORIGINAL', 'SEA WAYBILL'] },
      { name: 'ShipmentDate', displayName: 'Ngày Lô Hàng (S.Date)', dataType: 'date' },
      { name: 'POL', displayName: 'Cảng Xếp Hàng (POL)', dataType: 'string' },
      { name: 'POD', displayName: 'Cảng Dỡ Hàng (POD)', dataType: 'string' },
      { name: 'ETA', displayName: 'Ngày Đến Dự Kiến (ETA)', dataType: 'date' },
      { name: 'ETD', displayName: 'Ngày Đi Dự Kiến (ETD)', dataType: 'date' },
      { name: 'Service', displayName: 'Phương Thức Vận Chuyển', dataType: 'string', options: ['CY/CY', 'CFS/CFS', 'DOOR/DOOR'] },
      { name: 'PaymentTerm', displayName: 'Điều Khoản Thanh Toán (P.Term)', dataType: 'string', options: ['PREPAID', 'COLLECT'] },
      { name: 'TotalPackages', displayName: 'Tổng Số Kiện (T.Packages)', dataType: 'number' },
      { name: 'PackageType', displayName: 'Loại Bao Bì (P.Type)', dataType: 'string', options: ['PALLETS', 'CARTONS', 'BAGS', 'WOODEN CRATES'] },
      { name: 'TotalGW', displayName: 'Tổng Trọng Lượng (Total GW - KGS)', dataType: 'number' },
      { name: 'TotalCBM', displayName: 'Tổng Thể Tích (Total CBM - M3)', dataType: 'number' },
      { name: 'TotalVGM', displayName: 'Tổng Trọng Lượng Xác Thực (Total VGM)', dataType: 'number' },
      { name: 'PONo', displayName: 'Số Đơn Đặt Hàng (PO No.)', dataType: 'string' },
      { name: 'Notes', displayName: 'Ghi Chú Đơn Hàng', dataType: 'string' },
    ],
  },
  {
    id: 'ent_vendor',
    name: 'Vendor',
    displayName: 'Nhà Cung Cấp / Đối Tác (Vendor)',
    description: 'Danh mục đại lý, hãng tàu, forwarder đối tác (Ảnh 1 & Vendor.cs)',
    fields: [
      { name: 'Id', displayName: 'Mã Hệ Thống (ID)', dataType: 'number', isRequired: true },
      { name: 'CompanyLocalFullName', displayName: 'Tên Doanh Nghiệp (Tiếng Việt)', dataType: 'string', isRequired: true },
      { name: 'CompanyInterShortName', displayName: 'Tên Viết Tắt (Quốc Tế)', dataType: 'string' },
      { name: 'TaxCode', displayName: 'Mã Số Thuế (Tax Code)', dataType: 'string' },
      { name: 'Address', displayName: 'Địa Chỉ Giao Dịch', dataType: 'string' },
      { name: 'PhoneNumber', displayName: 'Số Điện Thoại', dataType: 'string' },
      { name: 'Email', displayName: 'Hòm Thư Điện Tử', dataType: 'string' },
      { name: 'Note', displayName: 'Ghi Chú Nhà Cung Cấp', dataType: 'string' },
      { name: 'Active', displayName: 'Đang Hoạt Động', dataType: 'boolean' },
    ],
  },
  {
    id: 'ent_customer',
    name: 'Customer',
    displayName: 'Khách Hàng (Customer)',
    description: 'Hồ sơ chủ hàng, người gửi hàng (Shipper) hoặc người nhận hàng (Consignee)',
    fields: [
      { name: 'CustomerCode', displayName: 'Mã Khách Hàng', dataType: 'string', isRequired: true },
      { name: 'CustomerName', displayName: 'Tên Khách Hàng', dataType: 'string', isRequired: true },
      { name: 'TaxCode', displayName: 'Mã Số Thuế', dataType: 'string' },
      { name: 'ContactPerson', displayName: 'Người Liên Hệ', dataType: 'string' },
      { name: 'PhoneNumber', displayName: 'Số Điện Thoại', dataType: 'string' },
      { name: 'Address', displayName: 'Địa Chỉ Văn Phòng', dataType: 'string' },
      { name: 'Salesman', displayName: 'Nhân Viên Phụ Trách (Sales)', dataType: 'string' },
    ],
  },
  {
    id: 'ent_terminal',
    name: 'Terminal',
    displayName: 'Cảng Biển & Ga Hàng Không (Terminal/Port)',
    description: 'Danh bạ cảng biển xếp dỡ hàng hóa (Ảnh 4: SHANGHAI, TIEN SA TERMINAL)',
    fields: [
      { name: 'TerminalCode', displayName: 'Mã Cảng (CNSGH, VNDTS)', dataType: 'string', isRequired: true },
      { name: 'TerminalName', displayName: 'Tên Cảng Biển / Ga Hàng Hóa', dataType: 'string', isRequired: true },
      { name: 'CountryCode', displayName: 'Mã Quốc Gia (CN, VN, US)', dataType: 'string' },
      { name: 'PortType', displayName: 'Loại Cảng (Sea / Air / Inland)', dataType: 'string', options: ['SeaPort', 'Airport', 'ICD'] },
    ],
  },
  {
    id: 'ent_commodity',
    name: 'Commodity',
    displayName: 'Chủng Loại Hàng Hóa (Commodity)',
    description: 'Tên mặt hàng, mã HS code hàng hóa xuất nhập khẩu',
    fields: [
      { name: 'CommodityCode', displayName: 'Mã Chủng Loại', dataType: 'string', isRequired: true },
      { name: 'CommodityName', displayName: 'Tên Hàng Hóa', dataType: 'string', isRequired: true },
      { name: 'HsCode', displayName: 'Mã Biểu Thuế (HS Code)', dataType: 'string' },
      { name: 'Description', displayName: 'Mô Tả Đặc Tính Kỹ Thuật', dataType: 'string' },
    ],
  },
]

