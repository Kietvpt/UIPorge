---
title: "Nghiên Cứu Kỹ Thuật & Kế Hoạch Triển Khai Giai Đoạn 3: Hệ Thống Quản Trị Cột GridPolicy & Enterprise Data Grid"
date: "2026-11-08"
author_persona: "Kael & An"
mission_id: "sphere_1794153714348_uiporge_next_phases_migration_"
node_id: "node_1794153717992_giai_o_n_3_gridpolicy_ent"
node_type: "specification"
tier: 2
tags: ["stage3", "grid_policy", "context_menu", "column_properties", "summary_row", "frozen_column", "inline_editing"]
status: "in_planning"
---

# 📊 Báo Cáo Kỹ Thuật & Kế Hoạch Triển Khai Giai Đoạn 3: GridPolicy & Enterprise Data Grid

> **Người lập:** Kael (`ENG-KAEL-3C81B4`) & An (`ENG-AN-7B9F1D`)  
> **Dự án:** UIPorge Visual Web Application Framework  
> **Căn cứ nghiệp vụ:** Ảnh 4, Ảnh 5, Ảnh 6 từ Master và mã nguồn `GridPolicy.cs` tại `D:\Learn\UIPorge\logone\logone\Core.API\Models\GridPolicy.cs`

---

## 1. Mục Tiêu & Yêu Cầu Nghiệp Vụ Cốt Lõi

Giai đoạn 3 tập trung biến component `ForgeTable` của UIPorge thành một **Enterprise Data Grid** mạnh mẽ ngang ngửa hoặc vượt trội hơn C# Core cũ, tái hiện trọn vẹn 3 tính năng đặc trưng trong ảnh Master cung cấp:

1. **Menu ngữ cảnh trực tiếp trên Header cột (`HeaderContextMenu.tsx`)** — *Ảnh 5*:
   - Chuột phải hoặc click icon $\vdots$ trên tiêu đề cột hiển thị menu:
     - 👁️ **Show header / Hide header** (Ẩn/Hiện cột)
     - 📌 **Cố định cột (Freeze Column: Left / Right)** (Ghim cột không bị trôi khi cuộn ngang)
     - ⚙️ **Column Data Options** (Mở modal thiết lập thuộc tính cột)
     - 📋 **Clone Column** (Nhân bản cột với cấu hình tương tự)
     - 🗑️ **Remove Column** (Xóa cột khỏi bảng)
     - 🔍 **Filter Local** (Lọc dữ liệu tức thì trên cột)

2. **Modal Cấu Hình Thuộc Tính Cột (`ColumnPropertiesModal.tsx`)** — *Ảnh 6*:
   - Tái hiện form cấu hình thuộc tính cột chuẩn `GridPolicy.cs`:
     - **General**: `FieldName` (Mã trường), `ShortDesc` (Tiêu đề hiển thị), `Width`, `MinWidth`, `MaxWidth`
     - **Component Type**: `TextBox`, `Select`, `DatePicker`, `Number`, `Checkbox`, `Link`, `Textarea`
     - **Formatting**: `TextAlign` (Trái / Giữa / Phải), `FormatCell` (tiền tệ, ngày tháng), `Precision` (số chữ số thập phân)
     - **Behavior**: `Editable` (cho phép sửa inline), `Disabled` (vô hiệu hóa), `Hidden` (ẩn)
     - **Advanced**: `PopulateField`, `CascadeField`, `Validation`

3. **Hàng Tổng Hợp Chân Bảng (`SummaryRow.tsx`)** — *Ảnh 4*:
   - Hiển thị dòng **TỔNG CỘNG** ghim cố định ở đáy bảng.
   - Tự động tính toán tổng theo cấu hình của từng cột:
     - `SUM`: Tổng Packages (`12 PALLETS`), Tổng CBM (`25.00`), Tổng VGM (`0`)
     - `COUNT`: Tổng số dòng (`4 bản ghi`)
     - `AVG`: Giá trị trung bình

4. **Ghim Cột Cố Định (Sticky/Frozen Columns) & Sửa Dữ Liệu Trực Tiếp (Inline Editing)**:
   - Cột cố định dùng CSS `position: sticky` chuẩn Tailwind (`sticky left-0 bg-[#0f172a] z-10`).
   - Click đúp hoặc nhấn Enter vào ô dữ liệu để kích hoạt input sửa trực tiếp, Enter để lưu, Esc để hủy.

---

## 2. Kiến Trúc Dữ Liệu GridPolicy (Schema Definition)

```typescript
// frontend/src/types/gridPolicy.ts

export type ColumnComponentType = 
  | 'TextBox' 
  | 'Select' 
  | 'DatePicker' 
  | 'Number' 
  | 'Checkbox' 
  | 'Link' 
  | 'Textarea';

export type ColumnAlign = 'left' | 'center' | 'right';
export type ColumnFreeze = 'none' | 'left' | 'right';
export type SummaryType = 'none' | 'sum' | 'count' | 'avg' | 'min' | 'max';

export interface GridColumnPolicy {
  id: string;
  field: string;               // Tên trường dữ liệu (vd: "containerNo", "packageNumber")
  label: string;               // Tiêu đề cột (ShortDesc)
  width?: number;              // Độ rộng pixel (mặc định 140px)
  minWidth?: number;           // Độ rộng tối thiểu
  maxWidth?: number;           // Độ rộng tối đa
  align?: ColumnAlign;         // Canh lề chữ (left, center, right)
  freeze?: ColumnFreeze;       // Cố định cột (left, right, none)
  hidden?: boolean;            // Trạng thái ẩn cột
  componentType: ColumnComponentType; // Loại component hiển thị trong cell
  editable?: boolean;          // Cho phép sửa trực tiếp (Inline Editing)
  disabled?: boolean;          // Khóa không cho tương tác
  format?: string;             // Format: "currency", "date", "number", "custom"
  precision?: number;          // Số chữ số thập phân (vd: 2 cho 25.00)
  summary?: SummaryType;       // Phép toán tổng hợp chân bảng
  summaryPrefix?: string;      // Tiền tố hiển thị (vd: "Total: ")
  summarySuffix?: string;      // Hậu tố hiển thị (vd: " PALLETS", " CBM")
  populateField?: string;      // Trường tự động điền
  cascadeField?: string;       // Trường liên kết cascading
  validation?: string;         // Quy tắc kiểm tra (JSON string hoặc rule name)
}
```

---

## 3. Cây File Dự Kiến Tạo Mới & Nâng Cấp

| File Đường Dẫn | Trạng Thái | Nhiệm Vụ |
| :--- | :---: | :--- |
| `frontend/src/types/gridPolicy.ts` | Tạo mới | Định nghĩa cấu trúc Schema chuẩn cho `GridColumnPolicy` |
| `frontend/src/renderer/components/grid/HeaderContextMenu.tsx` | Tạo mới | Menu ngữ cảnh khi chuột phải hoặc bấm $\vdots$ trên cột |
| `frontend/src/renderer/components/grid/ColumnPropertiesModal.tsx` | Tạo mới | Dialog thiết lập thuộc tính cột giống Ảnh 6 của Core cũ |
| `frontend/src/renderer/components/grid/SummaryRow.tsx` | Tạo mới | Hàng tổng hợp chân bảng tự động tính SUM/COUNT/AVG |
| `frontend/src/renderer/components/grid/InlineCellEditor.tsx` | Tạo mới | Bộ render ô nhập liệu linh hoạt khi click đúp |
| `frontend/src/renderer/components/ForgeTable.tsx` | Nâng cấp | Tích hợp Context Menu, Sticky Columns, Summary Row, Inline Editing |
| `frontend/src/editor/PropertyPanel.tsx` | Cập nhật | Tab Bảng: Quản lý danh sách cột, kéo thả thứ tự, mở modal cấu hình |

---

## 4. Kế Hoạch Kiểm Thử & Nghiệm Thu (Acceptance Criteria)

1. **Kiểm thử Header Context Menu**:
   - Nhấp chuột phải vào cột `CONTAINER NO` ➔ Menu mở đúng vị trí con trỏ chuột.
   - Chọn `Freeze Column (Left)` ➔ Cột ghim chặt mép trái, cuộn ngang bảng không bị trôi.
   - Chọn `Hide Header` ➔ Cột ẩn khỏi bảng, có thể bật lại từ danh sách cột.
2. **Kiểm thử Column Properties Modal**:
   - Chọn `Column Data Options` ➔ Modal hiển thị đầy đủ các trường giống Ảnh 6.
   - Đổi `ComponentType` sang `DatePicker`, `Format` sang `DD/MM/YYYY` ➔ Ô dữ liệu hiển thị định dạng ngày và có icon lịch.
   - Đổi `Precision` thành `2` cho cột `CBM` ➔ Giá trị hiển thị `25.00`.
3. **Kiểm thử Summary Footer**:
   - Kiểm tra dòng `TỔNG CỘNG` chân bảng: Tổng số lượng package hiển thị đúng `12 PALLETS`, CBM hiển thị `25.00 CBM`.
4. **Kiểm thử Inline Editing**:
   - Click đúp vào ô `SEAL NO` ➔ Hiện ô nhập, gõ `ARL2873759` và Enter ➔ Dữ liệu cập nhật ngay trên State.

