---
plan_name: "plan_phase2_component_library_advanced_grid"
domain: "dom_frontend_studio"
feature: "feat_component_renderer"
research_mission_id: "mis_csharp_core_ui_to_uiporge"
version: "1.0.0"
status: "in_progress"
authors: ["An", "Kael", "Luna", "Vidus", "Zenith"]
created_at: "2026-11-08"
dependencies: ["plan_phase1_schema_data_binding"]
---

# 🚀 PLAN: Giai Đoạn 2 — Hiện Đại Hóa Component Library & Bảng Dữ Liệu Nâng Cao

## SQUAD & SWARM
- **Squad Lead & Coordinator:** @An (ENG-AN-7B9F1D) — Điều phối tiến độ, rà soát kiến trúc, kiểm soát chất lượng và cập nhật Aevum Brain.
- **Frontend Lead & Core Developer:** @Kael (ENG-KAEL-7F4B2D) — Xây dựng các component React 18, TailwindCSS, cấu trúc State và DOM Recycling 120Hz.
- **UI/UX & Styling Specialist:** @Luna (DSN-LUNA-3C9A12) — Thiết kế giao diện Sticky Columns, Micro-interactions, DatePicker Calendar và Dark-mode tokens.
- **System Architect:** @Vidus (ARC-VIDUS-AUHD2Y) — Thẩm định hiệu năng rendering bảng dữ liệu lớn, chống rò rỉ bộ nhớ (zero-leak).
- **Data Engine Specialist:** @Zenith (ALG-ZENITH-A1B2C3) — Thuật toán tính toán dòng tổng kết (Aggregation/Subtotals) và phân trang tối ưu.
- **Strategy:** `Component-Driven Development with E2E Verification Gates`.

---

## RESEARCH & REASONING
Bản kế hoạch này trực tiếp kế thừa các phát hiện từ các tài liệu nghiên cứu chuyên sâu:
- [`arch_csharp_core_ui_deconstruction.md`](file:///D:/Learn/UIPorge/.aevum/research/arch_csharp_core_ui_deconstruction.md): Bóc tách 4.000 dòng code của `GridView.cs` và cơ chế quản lý vòng đời form trong `EditForm.cs`.
- [`tech_mvvm_fluent_to_reactive_components.md`](file:///D:/Learn/UIPorge/.aevum/research/tech_mvvm_fluent_to_reactive_components.md): Chuyển dịch `ComponentFactory` sang React Component Registry Pattern và hiện đại hóa Sticky Columns qua CSS Backdrop Blur.
- [`tech_pitfalls_legacy_bridge_dotnet_anti_patterns.md`](file:///D:/Learn/UIPorge/.aevum/research/tech_pitfalls_legacy_bridge_dotnet_anti_patterns.md): Tuyệt đối không can thiệp DOM bằng chuỗi string (`Html.Take`), 100% sử dụng React Controlled Components.

---

## DESCRIPTION
Sau khi Giai đoạn 1 đã hoàn tất việc đặt nền móng cho Schema & Data Binding, hệ thống UIPorge cần sở hữu một **Thư viện Thành phần Giao diện Doanh nghiệp (Enterprise Component Library)** đủ mạnh mẽ để thay thế toàn bộ giải pháp C# cũ:
1. **Bảng Dữ Liệu Doanh Nghiệp (Advanced Data Grid):** Hiện tại `ForgeTable.tsx` chỉ hiển thị dạng bảng tĩnh sơ sài. Cần nâng cấp thành Grid doanh nghiệp với **Cột cố định (Sticky/Frozen Columns)**, **Dòng tổng kết (Summary Row: Tổng, Trung bình, Đếm)**, **Tìm kiếm lọc nhanh**, **Sắp xếp theo cột (Sortable)**, và **Thanh phân trang (Pagination)**.
2. **Bộ Điều Khiển Nhập Liệu Văn Phòng:** Cung cấp đầy đủ các phần tử nhập liệu phổ biến trong ứng dụng ERP/CRM:
   - `DatePicker`: Lịch chọn ngày tháng trực quan, định dạng chuẩn Việt Nam (DD/MM/YYYY).
   - `Select / Autocomplete`: Menu thả xuống hỗ trợ lọc tìm kiếm từ khóa nhanh.
   - `Checkbox`: Hộp kiểm bật/tắt giá trị logic.
   - `Divider`: Đường kẻ phân cách khối layout.
3. **Bộ Khung Quản Trị Biểu Mẫu (Form Container & Modal Popup):**
   - `ForgeFormContainer`: Thẻ chứa thông minh có tiêu đề, thân form và thanh nút tác vụ chuẩn (`Lưu`, `Hủy`, `Gửi duyệt`, `In ấn`) tích hợp cảnh báo sửa đổi (**Dirty Tracking**).
   - `ForgeModal`: Hộp thoại popup phục vụ hiển thị form chi tiết hoặc xác nhận thao tác nguy hiểm.
4. **Trình Kéo Thả (Component Palette) & Visual Inspector:** Đưa toàn bộ các component mới vào thanh công cụ để người dùng kéo thả trực tiếp lên Canvas và chỉnh sửa thuộc tính trong Property Panel.

---

## GOAL
1. **Advanced Grid Engine:** Xây dựng `ForgeAdvancedGrid.tsx` hỗ trợ Sticky Columns (trái/phải), Summary Footer Row, Search/Filter, Sortable Headers và Pagination.
2. **Core Enterprise Form Controls:** Hoàn thiện 4 component: `ForgeDatePicker.tsx`, `ForgeSelect.tsx`, `ForgeCheckbox.tsx`, `ForgeDivider.tsx`.
3. **Form Container & Modal:** Hoàn thiện `ForgeFormContainer.tsx` và `ForgeModal.tsx`.
4. **Component Registry Integration:** Đăng ký tất cả component mới vào `Renderer.tsx` và `ComponentPalette.tsx`.
5. **Property Panel Customization:** Mở rộng `PropertyPanel.tsx` với giao diện cấu hình trực quan cho các component mới.
6. **E2E & Living Memory:** Đảm bảo tất cả component mới lưu trữ và phục hồi trọn vẹn qua Backend SQL Server, cập nhật tiến độ vào Aevum Brain.

---

## ARCHITECTURAL CONTEXT

```mermaid
graph TD
    subgraph Component Palette & Visual Editor
        Palette[ComponentPalette.tsx: 11 Enterprise Components] -->|Drag & Drop| Canvas[Visual Editor Canvas]
        Inspector[PropertyPanel.tsx: Props, Data, Validation] -->|Cấu hình thuộc tính| Store[editorStore.ts]
    end

    subgraph React Component Registry (Renderer.tsx)
        Canvas -->|Render Node| Registry{COMPONENT_REGISTRY}
        Registry --> Grid[ForgeAdvancedGrid: Sticky Cols, Summary, Paging]
        Registry --> FormBox[ForgeFormContainer: Card, Dirty Check, Actions]
        Registry --> DPicker[ForgeDatePicker: Calendar Popup]
        Registry --> Sel[ForgeSelect: Searchable Dropdown]
        Registry --> Chk[ForgeCheckbox: Controlled Checkbox]
        Registry --> Mod[ForgeModal: Dialog Backdrop]
        Registry --> Div[ForgeDivider: Separator Line]
    end

    subgraph Data & Persistence Layer
        Grid -.->|DataBinding| Phase1Schema[Phase 1 JSON Schema & Binding]
        FormBox -.->|Dirty State| FormHook[Dirty State Tracking Hook]
        Store -->|Save Page JSON| BackendAPI[ASP.NET Core 8 WebAPI & SQL Server]
    end
```

---

## BOUNDARY & ENCAPSULATION
- **Public API (Component Interfaces & Props):**
  - `TableColumn`: Mở rộng thêm `sticky?: 'left' | 'right'`, `aggregate?: 'sum' | 'avg' | 'count'`, `align?: 'left' | 'center' | 'right'`.
  - `FormContainerProps`: `title`, `subtitle`, `showSaveBtn`, `showCancelBtn`, `showPrintBtn`, `dirtyTracking`.
  - `DatePickerProps`: `placeholder`, `format`, `minDate`, `maxDate`.
  - `SelectProps`: `options`, `searchable`, `placeholder`, `multiple`.
  - `ModalProps`: `title`, `isOpen`, `size`, `showCloseBtn`.
- **Hidden Internals:**
  - Logic tính toán vị trí `sticky` z-index và shadow ngăn cách giữa cột cố định và cột cuộn tự do.
  - Logic đếm số dòng và cộng dồn giá trị số trong `Summary Row` sử dụng thuật toán gom nhóm O(N).
  - Tự động đóng Popup DatePicker / Select khi người dùng bấm chuột ra ngoài (Click Outside Listener).

---

## AEVUM CONTRACT

| Component | Trách Nhiệm | Tiêu Chí Đạt Được | Trạng Thái |
| :--- | :--- | :--- | :--- |
| **`ForgeAdvancedGrid.tsx`** | Bảng dữ liệu doanh nghiệp | Sticky Columns mượt mà, Footer tính tổng chính xác | PLANNED |
| **`ForgeDatePicker.tsx`** | Lịch chọn ngày tháng | Popup mở êm, định dạng DD/MM/YYYY chuẩn | PLANNED |
| **`ForgeSelect.tsx`** | Dropdown tìm kiếm | Lọc từ khóa theo thời gian thực, hỗ trợ data binding | PLANNED |
| **`ForgeCheckbox.tsx`** | Hộp kiểm boolean | Tương thích controlled state và validation | PLANNED |
| **`ForgeFormContainer.tsx`** | Vỏ bọc form doanh nghiệp | Thanh action bar chuẩn, dirty detection | PLANNED |
| **`ForgeModal.tsx`** | Hộp thoại popup | Backdrop blur, ESC để đóng, lồng component con | PLANNED |
| **`ComponentPalette.tsx`** | Danh mục kéo thả | Hiển thị đủ 11 component kèm icon và mô tả | PLANNED |

---

## IMPLEMENTATION STEPS

### Bước 1: Nâng Cấp Bảng Dữ Liệu Doanh Nghiệp (`ForgeAdvancedGrid.tsx`)
- [ ] [CODE] Mở rộng interface `TableColumn` trong [`frontend/src/types/schema.ts`](file:///D:/Learn/UIPorge/frontend/src/types/schema.ts) với `sticky`, `aggregate`, `align`.
- [ ] [CODE] Xây dựng [`frontend/src/renderer/components/ForgeAdvancedGrid.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/ForgeAdvancedGrid.tsx) hỗ trợ:
  - Cột cố định (Sticky left) với hiệu ứng bóng đổ border ngăn cách.
  - Dòng tổng kết (Summary Row) tự động tính toán Sum / Avg / Count cho các cột số.
  - Thanh tìm kiếm từ khóa lọc dữ liệu (Search Filter Input).
  - Sắp xếp tăng/giảm khi nhấp vào tiêu đề cột.
  - Phân trang phân đoạn (Pagination) với bộ chọn số dòng/trang (10, 25, 50).
- [ ] [VERIFY] Kiểm tra bảng cuộn ngang mượt mà, cột cố định giữ nguyên vị trí.

### Bước 2: Xây Dựng Bộ Thành Phần Nhập Liệu Văn Phòng
- [ ] [CODE] Xây dựng [`frontend/src/renderer/components/ForgeDatePicker.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/ForgeDatePicker.tsx) có popup chọn lịch.
- [ ] [CODE] Xây dựng [`frontend/src/renderer/components/ForgeSelect.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/ForgeSelect.tsx) hỗ trợ tìm kiếm nhanh options.
- [ ] [CODE] Xây dựng [`frontend/src/renderer/components/ForgeCheckbox.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/ForgeCheckbox.tsx) cho dữ liệu true/false.
- [ ] [CODE] Xây dựng [`frontend/src/renderer/components/ForgeDivider.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/ForgeDivider.tsx) phân tách khu vực thị giác.

### Bước 3: Xây Dựng Form Container & Modal Popup
- [ ] [CODE] Xây dựng [`frontend/src/renderer/components/ForgeFormContainer.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/ForgeFormContainer.tsx) có Header, Body, Action Bar (Lưu, Hủy, In).
- [ ] [CODE] Xây dựng [`frontend/src/renderer/components/ForgeModal.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/ForgeModal.tsx) có backdrop làm mờ và nút đóng.

### Bước 4: Đăng Ký Component Palette & Cập Nhật Dispatcher
- [ ] [CODE] Cập nhật [`frontend/src/renderer/Renderer.tsx`](file:///D:/Learn/UIPorge/frontend/src/renderer/Renderer.tsx) bổ sung các component mới vào `COMPONENT_REGISTRY`.
- [ ] [CODE] Xuất khẩu toàn bộ component mới qua [`frontend/src/renderer/components/index.ts`](file:///D:/Learn/UIPorge/frontend/src/renderer/components/index.ts).
- [ ] [CODE] Mở rộng danh mục kéo thả trong [`frontend/src/editor/ComponentPalette.tsx`](file:///D:/Learn/UIPorge/frontend/src/editor/ComponentPalette.tsx) từ 5 lên **11 component**.

### Bước 5: Mở Rộng Inspector UI (`PropertyPanel.tsx`)
- [ ] [CODE] Bổ sung cấu hình thuộc tính cho `Table`: Thêm/sửa cột, bật/tắt Sticky Column, chọn kiểu Aggregate (Sum/Avg).
- [ ] [CODE] Bổ sung cấu hình thuộc tính cho `Select`: Thêm/sửa danh sách Options (key-value).
- [ ] [CODE] Bổ sung cấu hình thuộc tính cho `DatePicker`: Định dạng ngày tháng, Placeholder.
- [ ] [CODE] Bổ sung cấu hình thuộc tính cho `FormContainer`: Tiêu đề form, các nút tác vụ hiển thị.

### Bước 6: Kiểm Thử Tích Hợp Đầu Cuối E2E & Lưu Vết Living Memory
- [ ] [TEST] Kéo thả Table nâng cao, DatePicker, Select, FormContainer lên Canvas.
- [ ] [TEST] Bấm "Lưu Trang" gửi lên API Backend ➔ Tải lại trang kiểm tra cấu hình toàn vẹn 100%.
- [ ] [CMD] `npm run build` và `dotnet build` đạt 0 lỗi.
- [ ] [DOC] Cập nhật tiến độ vào Living Memory [`.aevum/memory/work_logs.md`](file:///D:/Learn/UIPorge/.aevum/memory/work_logs.md).

---

## KNOWLEDGE HARVEST
- **Pattern:** *Compositional Grid Architecture* — Tách bảng dữ liệu lớn thành 3 khối viewport ảo: Sticky Left Columns, Scrollable Center Body, và Computed Summary Footer, giúp duy trì tốc độ khung hình 120Hz ngay cả khi render hàng trăm cell dữ liệu.
- **Lesson:** *Zero-DOM Leak Form Lifecycle* — Sử dụng React state isolation cho form input, tránh hoàn toàn các closure rò rỉ bộ nhớ từng xuất hiện trong Bridge.NET C#.

