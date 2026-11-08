# 🏛️ BẢN TUYÊN NGÔN KIẾN TRÚC & BỘ QUY TẮC BẤT BIẾN CỦA UIFORGE
## (UIForge Core Architecture Manifesto & Conventions)

> **Căn cứ chỉ đạo:** Master phê duyệt ngày 2026-11-09  
> **Áp dụng:** Toàn bộ thành viên phát triển, AI Agent, Subagents và các module trong hệ sinh thái UIForge.

---

## 1. Bản Chất Định Vị Sản Phẩm

* **UIForge KHÔNG PHẢI là một ứng dụng Logistics hay bất kỳ phần mềm nghiệp vụ đóng khung nào.**
* **UIForge là một Nền Tảng / Khung Phát Triển Giao Diện Doanh Nghiệp (Enterprise Low-Code UI & Rapid Application Development Framework)** đa ngành nghề, dùng để tạo ra bất kỳ phần mềm quản trị nào (ERP, CRM, Bệnh viện, Bán lẻ, Sản xuất, Logistics...).
* Nhiệm vụ của UIForge:
  1. Cung cấp bộ Component UI trung lập (`ForgeTable`, `ForgeTextBox`, `ForgeSelect`, `ForgeDatePicker`, `ForgeTabs`...).
  2. Cung cấp bộ công cụ thiết kế kéo-thả (Visual Canvas Designer).
  3. Cung cấp các động cơ cốt lõi (Core Runtime Engines): Data Binding, Dynamic Cascading, Validation, RBAC Phân quyền, Dynamic Navigation (FeatureTab vs FeaturePopup).
  4. Giúp các kỹ sư xây dựng **Business Logic (BL)** của riêng họ với tốc độ nhanh gấp nhiều lần.

---

## 2. Mô Hình Đóng Gói (Package Architecture)

UIForge được thiết kế để phân phối dưới dạng các Package tái sử dụng độc lập:

1. **Frontend Package (`@uiforge/core`)**:
   * Cài đặt qua `npm` hoặc `yarn` vào bất kỳ dự án React / Next.js / Vite nào.
   * Chỉ chứa các UI Components trung lập, Canvas Editor, và các Runtime Engines dựa trên Metadata.
   * **Tuyệt đối không chứa logic nghiệp vụ, tên bảng, hay dữ liệu của một ngành nghề cụ thể.**

2. **Backend Package (`UIForge.Core` / NuGet Package)**:
   * Thêm vào bất kỳ dự án ASP.NET Core (.NET 8) nào qua `dotnet add package`.
   * Cung cấp sẵn các `DynamicODataController`, `MetadataDiscoveryService`, `BaseEntity`, `DynamicTransactionService` giao tiếp 2 chiều với Core UI.

3. **Core Database Schema (Bảng Nền Tảng Bắt Buộc)**:
   * Khi khởi tạo một dự án mới, database của khách hàng bắt buộc phải có các bảng Core của UIForge:
     * `Features` (Quản lý màn hình)
     * `Components` (Cây linh kiện, lưu cấu hình UI dưới dạng JSON)
     * `ComponentGroups` (Các nhóm/khối container)
     * `GridPolicies` (Chính sách cột của Grid)
     * `FeaturePolicies` / `Permissions` (Phân quyền truy cập)

---

## 3. Bộ Quy Tắc Chuẩn Cho Table Doanh Nghiệp (Core Entity Conventions)

Bất kỳ doanh nghiệp nào khi tích hợp CSDL của họ vào UIForge, các Entity nghiệp vụ (`Transactions`, `Terminals`, `Customers`, `Orders`, `Patients`...) chỉ cần tuân theo chuẩn `BaseEntity`:

```csharp
public abstract class BaseEntity
{
    public int Id { get; set; } // Khóa chính chuẩn
    public bool Active { get; set; } = true; // Xóa mềm (Soft Delete)
    public DateTime CreatedDate { get; set; } = DateTime.UtcNow; // Ngày tạo (UTC)
    public string CreatedBy { get; set; } = string.Empty; // Người tạo
    public DateTime? UpdatedDate { get; set; } // Ngày sửa cuối (UTC)
    public string? UpdatedBy { get; set; } // Người sửa cuối
}
```

* **Xóa Mềm (Soft Delete):** Mọi câu query trong Core mặc định luôn có `?$filter=Active eq true`. Khi người dùng bấm xóa trên UI, Core chỉ cập nhật `Active = false`, dữ liệu không bao giờ bị xóa vĩnh viễn khỏi DB.
* **Quan Hệ Cha - Con (Parent - Child):** Bảng con có khóa ngoại tham chiếu đến bảng cha (ví dụ `OrderId` tham chiếu đến `Order.Id`).

---

## 4. Quy Tắc Data Binding, Cascading & Populate Theo Metadata

1. **Chuẩn Query**: Sử dụng chuẩn **OData** (`?$filter=...&$orderby=...&$expand=...&$top=...&$skip=...`).
2. **Metadata Của Component (JSON)**:
   * **`Reference`**: Tên Entity trong Database (ví dụ `Terminal`, `Customer`, `Product`), được quét động qua API `GET /api/core/metadata/entities`.
   * **`IdField`**: Trường lưu giá trị khóa (mặc định `Id`).
   * **`FieldName`**: Trường hiển thị văn bản (ví dụ `FullName`, `CustomerName`, `ProductName`).
   * **`Query`**: Câu điều kiện lọc OData (ví dụ `?$filter=Active eq true and TypeId eq 1`).
   * **`Populate field`**: Chuỗi quy tắc ánh xạ động:
     `TargetField1 = SourceField1, TargetField2 = SourceField2`
     Ví dụ: `VendorId = Terminal.VendorId, Agent = Terminal.AgentName`.
     $\rightarrow$ Khi người dùng chọn dropdown, Core tự động đọc quy tắc này để đổ dữ liệu, không hề có dòng code hardcode nào trong UI Component.

---

## 5. Quy Tắc Quản Lý Màn Hình: FeatureTab vs FeaturePopup

1. **FeatureTab**: Màn hình mở thành 1 thẻ tab mới trên TabBar đa nhiệm, giúp người dùng làm việc song song trên nhiều đối tượng (ví dụ mở cùng lúc 3 tab lô hàng hoặc 3 tab đơn hàng).
2. **FeaturePopup**: Màn hình dạng Dialog / Modal cửa sổ đè lên màn hình gọi nó. Khi sửa xong bấm Lưu $\rightarrow$ Popup tự đóng và GridView cha tự reload lại dữ liệu.
3. **Context Passing**: Cột Button hoặc sự kiện double-click trên GridView bắt trọn vẹn context dữ liệu dòng (`row.id`), truyền vào hàm `navigationEngine.openFeature(featureId, { id: row.id }, 'Tab' | 'Popup')`.

---

## 6. Ranh Giới Nghiêm Ngặt Giữa "Core Mới" Và "Ứng Dụng Mẫu (Sample Apps)"

* Màn hình **FCL Import** (và toàn bộ dữ liệu Logistics) chỉ là **1 Bài Test Mẫu (Sample App / Test Fixture)** để kiểm tra độ tin cậy của Core Engine.
* Mọi Business Logic đặc thù của Logistics (tính phí THC, kiểm tra M-B/L, check container ISO 6346) **bắt buộc phải nằm trong thư mục của ứng dụng mẫu (`samples/Logistics.Demo/` hoặc `fclImport.bl.ts`)**, tuyệt đối không được viết vào bên trong các Component dùng chung của Core (`ForgeTextBox`, `ForgeTable`, `ForgeSelect`...).

