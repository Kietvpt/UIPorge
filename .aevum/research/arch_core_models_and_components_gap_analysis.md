---
title: "Báo Cáo Đối Chiếu Kiến Trúc: Giải Phẫu Hệ Thống Models & Components Giữa C# Core vs UIPorge"
date: "2026-11-08"
author_persona: "An"
mission_id: "mis_csharp_core_ui_to_uiporge"
node_type: "gap_analysis"
inbound_edge: "arch_csharp_core_ui_deconstruction"
tags: ["gap_analysis", "models", "components", "core_vs_uiporge", "migration_strategy"]
status: "completed"
---

# 🏛️ Báo Cáo Đối Chiếu Kiến Trúc: Giải Phẫu Hệ Thống Models & Components Giữa C# Core vs UIPorge

> **Tác giả:** An (`ENG-AN-7B9F1D`) — Squad Lead & Coordinator  
> **Nguồn khảo sát:**  
> - `logone/logone/Core/Components` (60+ components chuyên sâu)  
> - `logone/logone/Core.API/Models` (40+ domain models thực thể)  
> - `backend/UIForge.API/Models/Entities` & `frontend/src/types/schema.ts` (Hiện trạng UIPorge)

---

## 1. Phát Hiện Sâu Sắc Của Master & Đặt Vấn Đề

Khi rà soát thư mục `Core/Components` và `Core.API/Models` (đặc biệt là tệp [`FeaturePolicy.cs`](file:///D:/Learn/UIPorge/logone/logone/Core.API/Models/FeaturePolicy.cs) tại dòng 23 với trường `EntityId`), Master đã chỉ ra một khoảng cách kiến trúc sống còn:

> *"Bên Core có rất nhiều loại component khác nhau + model của component + feature, entity, những model liên quan đến core cũng khá nhiều, sao mình không tham khảo để chuyển đổi qua? Bên đây đã làm chức năng khá đầy đủ rồi mà bên UIPorge model liên quan đến core khá ít nhỉ?"*

Đây là nhận định **hoàn toàn chính xác và mang tính bước ngoặt**. Sự chênh lệch này xuất phát từ bản chất khởi đầu của hai dự án:

```mermaid
graph LR
    subgraph C# Core (Metadata-Driven Engine)
        Entity[Entity & EntityRef] --> Feature[Feature & FeaturePolicy]
        Feature --> CompGroup[ComponentGroup & Section]
        CompGroup --> Comp[Component: 143 thuộc tính]
        Comp --> GridPol[GridPolicy: Frozen, Summary, Filter]
    end

    subgraph UIPorge Ban Đầu (Document-Tree Prototype)
        Page[Page / Feature] --> Tree[UIComponent Tree: JSON Props]
        Tree --> Render[Renderer Sơ Cấp: 5 Components]
    end
```

* **C# Core:** Là một **Metadata-Driven Enterprise Application Generator** trưởng thành qua nhiều năm. Mọi thứ từ Thực thể CSDL (`Entity`), Màn hình (`Feature`), Phân quyền (`FeaturePolicy`), Bố cục nhóm (`ComponentGroup`), Cột bảng (`GridPolicy`) đến từng ô nhập liệu (`Component`) đều được chuẩn hóa thành các bảng quan hệ chặt chẽ.
* **UIPorge (Hiện tại):** Khởi đầu với mô hình **Document-Tree (NoSQL-like trên RDBMS)**: 1 `Page` chỉ chứa 1 cây `UIComponent` phẳng tự tham chiếu và nhét toàn bộ cấu hình vào các cột JSON (`PropsJson`, `StyleJson`). Cách này giúp Trình kéo thả (Visual Editor) chạy rất nhanh ở giai đoạn đầu nhưng làm cho tầng mô hình dữ liệu của UIPorge bị "mỏng" và thiếu vắng các thực thể nghiệp vụ cốt lõi.

---

## 2. Thống Kê & Phân Tích Kho Tài Nguyên Khổng Lồ Của C# Core

### 2.1. Thư mục `Core.API/Models` (41 Domain Models)
Hệ thống Model của C# Core được chia thành 5 trụ cột vững chắc:

| Trụ Cột | Các Model Cốt Lõi | Chức Năng Nghiệp Vụ | Tương Ứng Trong UIPorge Hiện Tại |
| :--- | :--- | :--- | :--- |
| **1. Entity & Metadata** | `Entity.cs`, `EntityRef.cs`, `MasterData.cs`, `Dictionary.cs` | Định nghĩa danh bạ thực thể doanh nghiệp (`Customer`, `Contract`, `Invoice`), quan hệ khóa ngoại, lookup tự động. | ❌ Chưa có (Đang gõ chuỗi string tự do trong Phase 1). |
| **2. Feature & Policy** | `Feature.cs`, `FeaturePolicy.cs`, `GridPolicy.cs`, `FeatureTemplate.cs` | Quản lý màn hình, menu, phân quyền CRUD chi tiết (`CanRead`, `CanWrite`, `CanDelete`, `LockUpdateAfterCreated`), cấu hình cột Grid (`Frozen`, `Summary`). | ⚠️ `Page.cs` mới chỉ có thông tin cơ bản; chưa có Policy tách biệt. |
| **3. Component Architecture** | `Component.cs`, `ComponentGroup.cs`, `ComponentGroupJob.cs`, `HideComponentGroup.cs` | 143 thuộc tính chi tiết cho từng ô nhập liệu (HotKey, Precision, FormatData, CascadeField, GroupBy) và phân nhóm Tab/Section responsive. | ⚠️ Đang gom vào `PropsJson` và `schema.ts`. |
| **4. Workflow & Approval** | `ApprovalConfig.cs`, `Approvement.cs`, `TaskNotification.cs` | Cấu hình quy trình phê duyệt nhiều cấp (Duyệt đơn hàng, Duyệt chi). | ❌ Chưa có. |
| **5. Multi-Tenant & RBAC** | `Tenant.cs`, `Role.cs`, `User.cs`, `UserRole.cs`, `UserSetting.cs` | Quản trị đa khách thuê, phân quyền vai trò người dùng và cấu hình cá nhân hóa. | ⚠️ Mới có bảng `Users` và claim đa nhánh cơ bản. |

---

### 2.2. Thư mục `Core/Components` (60+ Specialized Components)
Kho component của Core không chỉ có Text và Button, mà bao gồm cả một hệ sinh thái phong phú:

1. **Nhóm Bảng & Danh Sách Dữ Liệu:**
   * `GridView.cs` (183 KB): Cột cố định, lọc đa cột, tính tổng dòng cuối, inline edit.
   * `VirtualGrid.cs` & `CompareGridView.cs`: Bảng cuộn ảo cho hàng chục ngàn dòng và bảng so sánh 2 bản ghi.
   * `ListView.cs` (91 KB) & `ListViewSearch.cs`: Danh sách thẻ item linh hoạt.
   * `SearchGrid.cs` & `GroupGridView.cs`: Bảng có thanh tìm kiếm nâng cao và gom nhóm cha-con.
2. **Nhóm Nhập Liệu Chuyên Nghiệp:**
   * `Number.cs`: Tự động làm tròn theo `Precision`, định dạng dấu phẩy hàng nghìn (`1,000,000.00`).
   * `AutocompleteTextbox.cs` & `AutocompleteTextarea.cs`: Gợi ý từ khóa từ CSDL khi gõ.
   * `Select2.cs` & `MultipleSearchEntry.cs`: Dropdown chọn 1 hoặc nhiều mục với tìm kiếm từ xa.
   * `Datepicker.cs`, `Timepicker.cs`, `MonthBox.cs`, `AdvancedDateSearch.cs`: Bộ công cụ thời gian đầy đủ.
   * `CKEditor.cs`, `CodeEditor.cs`, `RichTextBox.cs`: Trình soạn thảo văn bản giàu định dạng và viết mã code.
   * `BarCode.cs` & `Rating.cs`: Mã vạch và đánh giá sao.
3. **Nhóm Bố Cục & Quản Trị Form:**
   * `Section.cs` (1.525 dòng code): Card chứa thông minh, hỗ trợ thu gọn (Collapsible), huy hiệu số lượng (Badge), và Kanban column.
   * `EditForm.cs` (70 KB): Quản lý toàn bộ vòng đời lưu, hủy, dirty check của form.
   * `TabComponent.cs` & `TabEditor.cs`: Quản lý tab ngang và tab dọc.
   * `ConfirmDialog.cs` & `ContextMenu.cs`: Hộp thoại xác nhận và menu chuột phải.
4. **Nhóm Báo Cáo & Tác Vụ Doanh Nghiệp:**
   * `ButtonExcel.cs` & `ButtonPdf.cs`: Xuất dữ liệu tức thì sang Excel và PDF.
   * `PdfReport.cs` & `MutiplePdfReport.cs`: Trình tạo báo cáo in ấn chuyên nghiệp.
   * `AIChat.cs` & `ChatV2.cs`: Module hội thoại AI tích hợp sẵn trong Core.

---

## 3. Bản Đồ Chuyển Đổi & Kế Hoạch Hiện Đại Hóa Sang UIPorge

Để không làm phức tạp hóa hệ thống nhưng vẫn hấp thu trọn vẹn sức mạnh của Core, chúng ta chia lộ trình tiếp thu thành **4 Trục Chuyển Đổi Chiến Lược**:

```mermaid
graph TD
    subgraph Trục 1: Tầng Thực Thể Metadata (Backend)
        E1[Tạo UIEntity & UIEntityField trong UIPorge.API] --> E2[API Danh mục Thực thể Doanh nghiệp]
        E2 --> E3[Frontend Studio chọn Entity/Field từ Dropdown thay vì gõ text]
    end

    subgraph Trục 2: Tầng Màn Hình & Phân Quyền
        F1[Nâng cấp Page.cs thành Feature hoàn chỉnh] --> F2[Bổ sung FeaturePolicy.cs]
        F2 --> F3[Field-level & Button-level RBAC]
    end

    subgraph Trục 3: Tầng Bố Cục Nâng Cao
        C1[Section.cs của Core] --> C2[ForgeSection: Collapsible Card with Badges]
        C3[TabComponent.cs] --> C4[ForgeTabs: Horizontal / Vertical Tabs]
    end

    subgraph Trục 4: Hiện Đại Hóa 60+ Components Sang React 18
        G1[GridView.cs] --> G2[ForgeAdvancedGrid: Sticky, Summary, Paging]
        I1[Number, Select2, Datepicker] --> I2[Bộ Input Doanh Nghiệp Chuẩn Hóa]
        R1[ButtonExcel, ButtonPdf] --> R2[Nút Xuất Báo Cáo Trực Tiếp]
    end
```

---

## 4. Hành Động Cụ Thể Ngay Trong Giai Đoạn 2

Master đã mở ra một tầm nhìn cực kỳ đúng đắn. Thay vì chỉ làm 1-2 component đơn lẻ, em đề xuất tích hợp ngay các tinh hoa của Core vào **Giai đoạn 2**:

1. **Hấp thụ `GridPolicy.cs` vào `ForgeAdvancedGrid`:**
   * Đưa các trường: `Frozen` (Cột cố định), `Summary` (Sum, Avg, Count), `FormatCell` (Định dạng tiền/ngày), `Precision` (Số chữ số thập phân), `TextAlign` vào cấu hình Table.
2. **Kế thừa các Input thiết yếu của `Core/Components`:**
   * Thay vì chỉ có `TextBox`, bổ sung ngay: `Number` (Format tiền tệ tự động), `Select2` (Searchable Dropdown), `DatePicker` (Lịch DD/MM/YYYY), `Checkbox`.
3. **Kế thừa `Section.cs` và `EditForm.cs`:**
   * Tạo `ForgeSection` (Card có tiêu đề, collapsible, badge) và `ForgeFormContainer` (Action bar: Lưu, Hủy, In).
4. **Chuẩn bị cấu trúc cho Thực Thể Doanh Nghiệp (`Entity.cs`):**
   * Trong các giai đoạn tiếp theo, bổ sung bảng `Entities` và `EntityFields` vào backend `UIForge.API` để người dùng trong Visual Editor chỉ cần bấm chọn `Customer ➔ FullName` từ danh mục thực thể có sẵn, tái lập 100% sức mạnh của C# Core nhưng trên nền React 18 và ASP.NET Core 8 siêu tốc!

