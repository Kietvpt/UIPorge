# CẨM NANG ĐẶC TẢ & HƯỚNG DẪN SỬ DỤNG HỆ THỐNG COMPONENT UIFORGE CORE
## Thư viện `@uiforge/core` (Frontend Enterprise Framework)

> **Phiên bản tài liệu**: 1.0.0  
> **Áp dụng cho**: Toàn bộ lập trình viên, kỹ sư giải pháp và người dùng xây dựng giao diện trên UIForge Framework.  
> **Cập nhật lần cuối**: Tháng 11/2026.

---

> [!IMPORTANT]
> ### ⚠️ QUY TẮC BẮT BUỘC DUY TRÌ TÀI LIỆU (MANDATORY DOCUMENTATION INTEGRITY RULE)
> **Mọi kỹ sư phần mềm, lập trình viên hoặc AI Agent khi thực hiện bất kỳ hành động nào sau đây:**
> 1. Thêm mới một Component vào thư viện `@uiforge/core` (hoặc thư mục `src/renderer/components/`).
> 2. Bổ sung, sửa đổi hoặc xóa bỏ các thuộc tính (`props`) của Component hiện hữu.
> 3. Thay đổi hành vi điều hướng bàn phím, sự kiện hoặc cơ chế Data Binding.
> 
> **ĐỀU BẮT BUỘC PHẢI CẬP NHẬT LẠI TÀI LIỆU NÀY NGAY TRONG CÙNG PHIÊN LÀM VIỆC.**  
> Tuyệt đối không được để mã nguồn và tài liệu hướng dẫn bị lệch pha (desynchronized).

---

## I. TỔNG QUAN KIẾN TRÚC COMPONENT TRONG UIFORGE

Các Component trong UIForge được thiết kế theo các nguyên tắc nền tảng:
- **100% Domain-Agnostic**: Component hoàn toàn trung lập, không chứa mã cứng logic nghiệp vụ (không phụ thuộc Logistics, ERP, Kho vận hay Bán hàng).
- **Two-Way Data Binding**: Tự động liên kết 2 chiều với `dataEngine` qua `dataBinding: { entityName, fieldName }`.
- **Desktop ERP Keyboard UX**: Kế thừa chuẩn trải nghiệm phần mềm Desktop (Core C# `GridView.cs`, `EditForm.cs`, `SearchEntry.cs`) với phím điều hướng mũi tên, Enter, Tab và hệ thống phím nóng `F1`..`F6`.
- **Flexbox & Grid Layout Hybrid**: Tương thích hoàn hảo với hệ thống chia lưới 12-cột responsive.

---

## II. CHI TIẾT ĐẶC TẢ TỪNG COMPONENT

---

### 1. Bảng Dữ Liệu Nâng Cao: `ForgeTable` (`Table`)

#### 1.1. Chức năng chính
- Kế thừa và hiện đại hóa từ `GridView.cs` (183KB) trong Core C# cũ.
- Hỗ trợ **Cột Ghim Cố Định** (`sticky: 'left'`, `frozen: true`) không bị trôi khi cuộn ngang.
- Hỗ trợ **Dòng Tổng Cộng** (`SummaryRow`) tự động tính tổng (`sum`), đếm (`count`), trung bình (`avg`).
- Hỗ trợ **Bộ Lọc Đa Cột** (`FilterLocal`) theo thời gian thực (phím tắt `F6` hoặc nút Lọc trên toolbar).
- Hỗ trợ **Xuất Excel** chuẩn định dạng `.xls` (kế thừa `ButtonExcel.cs`).
- Hỗ trợ **In Báo Cáo & Xuất PDF** trực tiếp từ trình duyệt kèm header công ty và chữ ký phê duyệt (kế thừa `ButtonPdf.cs` & `PdfReport.cs`).
- Hỗ trợ **Điều hướng bàn phím chuẩn Desktop**:
  - `↑ / ↓ / ← / →`: Di chuyển tiêu điểm giữa các ô dữ liệu.
  - `Enter`: Xác nhận giá trị, nhảy xuống dòng tiếp theo (nếu ở dòng cuối và `canAdd: true`, tự động tạo dòng mới).
  - `Tab / Shift+Tab`: Di chuyển ngang qua các ô cho phép sửa (`editable: true`).
  - `F1`: Chọn tất cả / Bỏ chọn (`Toggle All`).
  - `F2`: Thêm dòng mới (`Add Row`).
  - `F3`: Nhân bản dòng đang chọn (`Duplicate Row`).
  - `F4`: Xóa dòng đang chọn (`Delete Row`).
  - `F6`: Bật/Tắt chế độ lọc từng cột.

#### 1.2. Bảng thuộc tính (`props`)

| Thuộc tính | Kiểu dữ liệu | Mặc định | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"BẢNG DỮ LIỆU"` | Tiêu đề hiển thị trên thanh công cụ của bảng |
| `columns` | `TableColumn[]` | `[]` | Mảng định nghĩa danh sách cột (Xem cấu trúc `TableColumn` bên dưới) |
| `data` | `any[]` | `[]` | Dữ liệu các dòng nạp vào bảng khi dùng dạng tĩnh |
| `reference` / `refName` | `string` | `undefined` | Tên Dataset / Entity trong `dataEngine` / Backend để bảng tự động truy vấn dữ liệu động |
| `query` / `sqlWhere` / `dataSource` | `string` | `undefined` | Chuỗi truy vấn OData (VD: `Active eq true&$orderby=Id desc`) hoặc điều kiện lọc SQL nạp dữ liệu cho bảng |
| `canAdd` | `boolean` | `true` | Cho phép thêm dòng mới (`+ Thêm dòng` hoặc phím `F2`) |
| `canDelete` | `boolean` | `true` | Cho phép xóa dòng đang chọn (Nút xóa hoặc phím `F4`) |
| `canDuplicate`| `boolean` | `true` | Cho phép nhân bản dòng đang chọn (phím `F3`) |
| `showFilters` | `boolean` | `false` | Trạng thái hiển thị thanh lọc con theo từng cột |
| `pageSize` | `number` | `50` | Số lượng dòng hiển thị trên mỗi trang phân trang |

#### 1.3. Cấu trúc đối tượng Cột (`TableColumn`)

```typescript
export interface TableColumn {
  key: string                 // Khóa trường dữ liệu (VD: 'code', 'price', 'quantity')
  title: string               // Tiêu đề cột hiển thị trên Header
  width?: string              // Độ rộng cột (VD: '150px', '200px')
  align?: 'left' | 'center' | 'right' // Căn lề dữ liệu trong cột
  sticky?: 'left' | 'right'   // Ghim cố định cột bên trái hoặc phải
  frozen?: boolean            // Cờ đóng băng cột
  sortable?: boolean          // Cho phép click header để sắp xếp A-Z, Z-A
  editable?: boolean          // Cho phép sửa trực tiếp (Inline Editing) trong ô
  componentType?: 'Input' | 'Number' | 'Select' | 'Checkbox' | 'DatePicker' // Loại editor trong ô
  aggregate?: 'sum' | 'count' | 'avg' // Hàm tính toán tổng cộng ở SummaryRow
  summarySuffix?: string      // Hậu tố hiển thị ở dòng tổng cộng (VD: ' KGS', ' VNĐ')
  precision?: number          // Số chữ số thập phân khi componentType là 'Number'
  options?: { value: any; label: string }[] // Danh sách tùy chọn nếu là 'Select'
  hidden?: boolean            // Ẩn cột khỏi bảng
  order?: number              // Thứ tự hiển thị cột từ trái qua phải
}
```

---

### 2. Ô Tra Cứu Đa Cột: `ForgeSearchEntry` (`SearchEntry`)

#### 2.1. Chức năng chính
- Kế thừa từ `SearchEntry.cs` (29KB) và `AdvancedSearch.cs` (34KB) của Core C# cũ.
- Hiển thị ô tìm kiếm với icon kính lúp. Người dùng có thể:
  - Bấm phím nóng `F1` hoặc click vào ô để mở **Modal Tra Cứu Đa Cột** (`ForgeSearchModal`).
  - Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong bảng danh mục (Mã, Tên, Mã số thuế, Điện thoại, Địa chỉ...).
  - Dùng phím mũi tên `↑/↓` và bấm `Enter` để chọn bản ghi ngay tức khắc.
- Tự động kích hoạt cơ chế **Auto-Populate**: Khi chọn 1 bản ghi, hệ thống tự động đổ dữ liệu sang các trường khác trên Form theo chuỗi quy tắc `populateRule`.

#### 2.2. Bảng thuộc tính (`props`)

| Thuộc tính | Kiểu dữ liệu | Mặc định | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"Đối tác / Danh mục"` | Nhãn tiêu đề hiển thị bên cạnh hoặc trên ô nhập |
| `reference` | `string` | `""` | Tên bảng danh mục cần tra cứu (VD: `MasterData`, `Customers`, `Vendors`, `Products`) |
| `displayField` | `string` | `"name"` | Tên trường dùng để hiển thị text trong ô nhập (VD: `name`, `fullName`) |
| `valueField` | `string` | `"code"` | Tên trường dùng để lưu giá trị chính (VD: `code`, `id`) |
| `populateRule`| `string` | `""` | Quy tắc đổ dữ liệu tự động (VD: `"CustomerName = name, TaxCode = taxId, Address = fullAddress"`) |
| `placeholder` | `string` | `"Tra cứu danh mục (F1)..."` | Gợi ý văn bản khi chưa chọn bản ghi |
| `colSpan` | `number` | `4` | Số cột chiếm trên lưới 12-cột (từ 1 đến 12) |
| `disabled` | `boolean` | `false` | Vô hiệu hóa ô tra cứu |

---

### 3. Gợi Ý Nhập Liệu Tự Động: `ForgeAutocomplete` (`Autocomplete`)

#### 3.1. Chức năng chính
- Kế thừa từ `AutocompleteTextbox.cs` (15.7KB) của Core C# cũ.
- Cung cấp gợi ý thông minh thời gian thực khi người dùng bắt đầu gõ ký tự.
- Cho phép điều hướng danh sách gợi ý hoàn toàn bằng bàn phím (`ArrowDown`, `ArrowUp`, `Enter` để chọn, `Escape` để hủy menu).
- Hỗ trợ cả danh sách tùy chọn tĩnh (`options`) lẫn bộ dữ liệu động từ máy chủ (`reference`).
- Hỗ trợ Two-Way Binding và Auto-Populate trường phụ thuộc.

#### 3.2. Bảng thuộc tính (`props`)

| Thuộc tính | Kiểu dữ liệu | Mặc định | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"Tìm kiếm gợi ý"` | Nhãn tiêu đề của ô nhập |
| `reference` | `string` | `undefined` | Tên Dataset nạp dữ liệu động |
| `options` | `AutocompleteOption[]` | `[]` | Mảng danh sách gợi ý cố định `{ value, label, sublabel }` |
| `displayField` | `string` | `"name"` | Trường hiển thị tên gợi ý chính |
| `valueField` | `string` | `"code"` | Trường giá trị lưu trữ |
| `sublabelField`| `string` | `undefined` | Trường hiển thị chú thích phụ bên dưới (VD: Mã số thuế, nhóm) |
| `populateRule`| `string` | `""` | Quy tắc điền tự động dữ liệu sang các trường khác |
| `placeholder` | `string` | `"Gõ để tìm kiếm..."` | Placeholder hiển thị |
| `colSpan` | `number` | `4` | Số cột chiếm trên lưới 12-cột |

---

### 4. Bảng Đính Kèm Tệp Tin: `ForgeFileUploadGrid` (`FileUploadGrid`)

#### 4.1. Chức năng chính
- Kế thừa từ `FileUploadGrid.cs` (14.6KB) và `FilePreview.cs` (17.7KB) của Core C# cũ.
- Quản lý toàn diện tài liệu, chứng từ, hóa đơn đính kèm theo hồ sơ.
- Hỗ trợ kéo & thả tệp tin trực tiếp (`Drag & Drop Zone`) hoặc bấm nút "Đính kèm tệp".
- Bảng hiển thị: Số thứ tự, Tên tệp tin, Icon định dạng, Kích thước (tự động đổi B/KB/MB), Người tải lên, Ngày tải.
- **Lightbox Preview Modal**: Xem trước tức thì ảnh chất lượng cao (PNG, JPG) hoặc nhúng tài liệu (PDF) trong cửa sổ popup mà không cần rời trang.
- Nút "Tải về" và "Xóa tệp" có xác nhận an toàn.

#### 4.2. Bảng thuộc tính (`props`)

| Thuộc tính | Kiểu dữ liệu | Mặc định | Mô tả chi tiết |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"Hồ sơ & Chứng từ đính kèm"` | Tiêu đề hiển thị trên header của bảng đính kèm |
| `files` | `AttachedFile[]` | `[]` | Mảng dữ liệu tệp đính kèm |
| `maxSizeMB` | `number` | `25` | Dung lượng tối đa cho phép của mỗi tệp (Mặc định: 25MB) |
| `allowedExtensions` | `string[]` | `['*']` | Danh sách phần mở rộng cho phép (VD: `['.pdf', '.png', '.jpg', '.xlsx']`) |
| `readOnly` | `boolean` | `false` | Chế độ chỉ đọc (ẩn nút tải lên và xóa tệp) |
| `colSpan` | `number` | `12` | Số cột chiếm trên lưới 12-cột (khuyến nghị `12` chiếm trọn dòng) |

---

### 5. Nhóm Ô Nhập Liệu Cơ Bản: TextBox, Number, DatePicker, Select, Checkbox, Textarea

#### 5.1. Ô Nhập Văn Bản: `ForgeTextBox` (`TextBox`)
- **Chức năng**: Nhập text 1 dòng kèm nhãn, validation và two-way binding.
- **Thuộc tính chính**:
  - `label`: Tiêu đề nhãn.
  - `labelPosition`: `'left'` (nằm bên trái ô) hoặc `'top'` (nằm bên trên ô).
  - `placeholder`: Chuỗi gợi ý chìm.
  - `required`: Bắt buộc nhập (`true/false`).
  - `colSpan`: Số cột chiếm (1 đến 12).
  - `dataBinding`: `{ entityName: 'Document', fieldName: 'Code', twoWay: true }`.

#### 5.2. Ô Nhập Số: `ForgeNumber` (`Number`)
- **Chức năng**: Nhập số lượng, đơn giá, thành tiền với căn lề phải chuẩn nghiệp vụ kế toán/ERP.
- **Thuộc tính chính**:
  - `precision`: Số chữ số thập phân sau dấu phẩy (VD: `0` cho số kiện, `2` cho trọng lượng/tiền tệ).
  - `thousandsSeparator`: Hiển thị dấu phân cách hàng nghìn (VD: `1,000,000`).
  - `min` / `max`: Giới hạn giá trị nhỏ nhất và lớn nhất.

#### 5.3. Lịch Chọn Ngày: `ForgeDatePicker` & `EnterpriseDatePicker` (`DatePicker`)
- **Chức năng**: Nhập trực tiếp hoặc chọn ngày tháng từ Popup Lịch (Portal z-index 99999) chuẩn định dạng `DD/MM/YYYY`, đồng bộ 100% cơ chế giữa Form độc lập và ô chỉnh sửa trong `GridView`/`GridPolicy`.
- **Thuộc tính chính & Tính năng**:
  - `format`: Định dạng ngày (mặc định `'DD/MM/YYYY'`).
  - `minDate` / `maxDate`: Giới hạn khoảng thời gian hợp lệ.
  - Chọn nhanh Tháng / Năm qua dropdown tích hợp ngay trên Popover Lịch, nút **Hôm nay** & **Xóa ngày**.
  - Phím tắt: `Enter` (chọn), `F4` / `Alt+Down` (mở lịch), `Esc` (đóng).
  - Hỗ trợ kiểm tra tuần tự ngày (`DateSequence`: ngày bắt đầu phải nhỏ hơn hoặc bằng ngày kết thúc).

#### 5.4. Dropdown Đa Cột Enterprise: `ForgeSelect` & `EnterpriseSelect` (`Select` / `Dropdown`)
- **Chức năng**: Ô chọn danh mục Enterprise nâng cao (thay thế hoàn toàn `<select>` đơn cột truyền thống), hỗ trợ hiển thị danh sách dạng **bảng nhiều cột (Multi-Column Table Popover)**, đồng bộ hoàn toàn giữa Component trên Form và Cột kiểu `Select`/`Dropdown` trong `GridPolicy`.
- **Thuộc tính chính**:
  - `reference`: Tên bảng/thực thể tham chiếu tự động truy vấn (VD: `Vendor`, `Terminal`, `Customer`).
  - `dataSource`: Điều kiện lọc truy vấn danh mục (hỗ trợ cả cú pháp OData `Active eq true` lẫn SQL đơn giản `active = true`).
  - `dropdownColumns`: Mảng cấu hình các cột hiển thị khi mở popup (`{ key, title, width, align }`). Thiết lập trực quan ngay trên Tab **"Cột Dropdown"** của `PropertyPanel` hoặc Tab **"CỘT DROPDOWN"** trong `ColumnPropertiesModal`.
  - `formatData`: Chuỗi nội suy định dạng hiển thị trên ô Select sau khi chọn xong. Hỗ trợ prefix thực thể (VD: `{Vendor.FullName} - {Vendor.Address}` hoặc `{ShortName}`).
  - `populateField`: Tự động điền nhiều trường/cột khác trên Form hoặc dòng GridView theo quy tắc `TargetField = SourceField`.
  - `options`: Mảng `{ value, label }` (nếu dùng danh sách tĩnh không tham chiếu API).
  - Tìm kiếm đa cột tức thì (Quick Search Input), điều hướng phím mũi tên `↑`/`↓` + `Enter`.

#### 5.5. Hộp Kiểm: `ForgeCheckbox` (`Checkbox`)
- **Chức năng**: Bật/tắt trạng thái Boolean (Đúng / Sai, Hoạt động / Tạm dừng).
- **Thuộc tính chính**:
  - `label`: Nhãn mô tả trạng thái.
  - `checked`: Giá trị boolean binding.

#### 5.6. Văn Bản Dài: `ForgeTextarea` (`Textarea`)
- **Chức năng**: Nhập văn bản nhiều dòng (Ghi chú, điều khoản đơn hàng, mô tả).
- **Thuộc tính chính**:
  - `rows`: Số dòng hiển thị mặc định (VD: `3` đến `10`).

---

### 6. Nhóm Bố Cục & Điều Hướng: Section, Container, Tabs, Modal, Button, RecordSelector

#### 6.1. Khối Bố Cục Thẻ: `ForgeSection` (`Section`)
- **Chức năng**: Gom nhóm các trường thông tin vào một khung thẻ Card trực quan có đổ bóng (`boxShadow`), tiêu đề và nút thu gọn/mở rộng (`collapsible`).

#### 6.2. Khoảng Trắng Bố Cục: `ForgeContainer` (`Container`)
- **Chức năng**: Bố cục tự do đa năng Flexbox hoặc CSS Grid.
- **Đặc biệt**: Khi đặt `tab: true, isTab: true, label: 'TÊN TAB'`, Container sẽ tự động trở thành một phân hệ Tab trong hệ thống Tab Stack!

#### 6.3. Bộ Chọn Bản Ghi: `ForgeRecordSelector` (`RecordSelector`)
- **Chức năng**: Thanh chọn nhanh danh sách bản ghi con dạng Tag Badges (VD: Danh sách các chứng từ con `[ DOC-001 ]`, `[ DOC-002 ]` kèm nút `[ + Tạo mới ]`).

#### 6.4. Nút Thao Tác: `ForgeButton` (`Button`)
- **Chức năng**: Nút bấm kích hoạt các sự kiện nghiệp vụ (Lưu, Duyệt, Mở popup, In báo cáo).
- **Thuộc tính chính**:
  - `variant`: `'primary'` (xanh nổi bật), `'secondary'` (xám thanh lịch), `'danger'` (đỏ cảnh báo), `'outline'`.
  - `size`: `'sm'`, `'md'`, `'lg'`.
  - `events`: Danh sách sự kiện gắn vào file `.bl.ts`.

---

## III. QUY CHUẨN ĐẶT TÊN & LIÊN KẾT DỮ LIỆU (DATA BINDING CONVENTION)

Hệ thống UIForge hỗ trợ đầy đủ các tham số liên kết dữ liệu và cấu hình Core C# kế thừa từ hệ thống gốc (`GuiInfo.cs`, `GridView.cs`, `Select2.cs`, `SearchEntry.cs`).

### 1. Nguyên Tắc "Đúng Người Đúng Việc" Theo Từng Loại Component

Tab **Data** trên thanh `PropertyPanel` được thiết kế ngữ cảnh thông minh:
- **Bảng Dữ Liệu (`Table` / `GridView`)**: Chỉ hiển thị `Reference / RefName`, `DATASOURCE` (Query OData), và `SqlWhere`. Không hiển thị `FieldName`, `PopulateField`, hay `Formatter`.
- **Tra Cứu Danh Mục (`Select` / `Dropdown` / `SearchEntry` / `Autocomplete`)**: Hiển thị `FieldName` (**nhập tay tự do**), `Reference / RefName`, `DATASOURCE` (bộ lọc danh mục như `active = true` hoặc `Active eq true`), `PopulateField` (tự động điền), `SelectField` & `IdField`, `FormatData`, và mở khóa thêm Tab **"Cột Dropdown"** để thiết lập danh sách cột đa chiều (`dropdownColumns`).
- **Ô Nhập Liệu (`TextBox` / `Number` / `DatePicker` / `Checkbox` / `Textarea`)**: Hiển thị `FieldName` (**nhập tay tự do**), `Two-Way Binding`, `Formatter` / `FormatData`.
- **Khung Bố Cục (`Section` / `Container` / `Button`)**: Hiển thị thông báo nhẹ và nút mở Modal nếu cần cấu hình nâng cao.

### 2. Ý nghĩa và hướng dẫn sử dụng các tham số cốt lõi

| Tham số trên giao diện | Mã thuộc tính | Mô tả và quy cách sử dụng |
| :--- | :--- | :--- |
| **Nguồn Dữ Liệu (DATASOURCE)** | `dataSource` / `dataSourceFilter` | **Hợp nhất từ Query và DataSource**. Chứa câu lệnh truy vấn OData (VD: `?$filter=Active eq true&$orderby=Id desc`) hoặc hàm JS trả về chuỗi lọc bản ghi. |
| **Đối Tượng Tham Chiếu (Reference / RefName)** | `refName` / `reference` | Tên bảng hoặc Entity trong Database / Backend API mà component sẽ truy vấn nạp dữ liệu (VD: `Transaction`, `Terminal`, `Customer`). |
| **Trường Dữ Liệu (Field Name)** | `fieldName` | Tên trường trên Form/Model. **Được nhập tay tự do** (kèm gợi ý datalist nếu có). Không ép buộc select. Bảng GridView danh sách chính không cần trường này. |
| **Tự Động Điền (Populate Field)** | `populateField` | **Chỉ dùng cho Dropdown / SearchEntry / Autocomplete**. Quy tắc điền tự động nhiều trường khi chọn một mục: `TargetField1 = SourceField1, TargetField2 = SourceField2`. GridView không dùng trường này. |
| **Điều Kiện Lọc SQL (SqlWhere)** | `sqlWhere` | Điều kiện mệnh đề `WHERE` của SQL trực tiếp (tương thích Core C# `GuiInfo.SqlWhere`). |
| **Khóa Chính (IdField)** | `idField` | Tên trường khóa chính làm giá trị nhận dạng (mặc định: `id` hoặc `Id`). |
| **Cột Chọn (SelectField)** | `selectField` | Tên trường làm nhãn hiển thị trong danh sách lựa chọn (mặc định: `name` hoặc `code`). |
| **Cột Hiển Thị Dropdown** | `dropdownColumns` | Mảng cấu hình các cột xuất hiện trong bảng chọn Multi-Column Select (VD: `FullName`, `Address`). Hỗ trợ cấu hình cho cả Component `Select` lẫn cột `Select` trong `GridPolicy`. |
| **Chuỗi Định Dạng (FormatData)** | `formatData` | Mẫu hiển thị chuỗi dữ liệu sau khi chọn (VD: `{Vendor.FullName} - {Vendor.Address}` hoặc `{ShortName}`). Tự động giải mã prefix Entity và matching không phân biệt hoa thường. |
| **Nút "🔍 Mở Toàn Bộ Thông Số Core"** | Modal Core C# | Nút bấm mở hộp thoại đầy đủ toàn bộ hơn 30 thuộc tính chuẩn Core C#. |

---

## IV. BẢNG PHÍM NÓNG ERP CHUẨN HÓA TRÊN TOÀN HỆ THỐNG

| Phím tắt | Tác vụ trên Bảng Dữ Liệu (`ForgeTable`) | Tác vụ trên Form / Ô Nhập Liệu |
| :--- | :--- | :--- |
| **`↑ / ↓`** | Di chuyển focus lên / xuống hàng liền kề | Di chuyển trong menu gợi ý (`Autocomplete`) |
| **`← / →`** | Di chuyển focus sang ô bên trái / phải | Di chuyển con trỏ văn bản |
| **`Enter`** | Commit giá trị ô, nhảy xuống ô dòng dưới | Chọn mục gợi ý, xác nhận nhập liệu |
| **`Tab`** | Nhảy sang ô có thể sửa (`editable`) tiếp theo | Nhảy sang ô nhập liệu kế tiếp |
| **`Shift + Tab`** | Nhảy lùi lại ô có thể sửa phía trước | Nhảy lùi lại ô nhập phía trước |
| **`F1`** | Chọn tất cả / Bỏ chọn tất cả dòng (`Toggle All`) | Mở Modal tra cứu đa cột (`SearchEntry`) |
| **`F2`** | Thêm dòng mới vào bảng (`Add Row`) | - |
| **`F3`** | Nhân bản dòng dữ liệu đang chọn (`Duplicate Row`) | - |
| **`F4`** | Xóa dòng dữ liệu đang chọn (`Delete Row`) | - |
| **`F6`** | Bật / Tắt thanh lọc dữ liệu từng cột (`Filter`) | - |
| **`Escape`** | Hủy chế độ sửa ô, khôi phục giá trị ban đầu | Đóng Menu gợi ý / Đóng Modal popup |

---

## V. HƯỚNG DẪN DÀNH CHO LẬP TRÌNH VIÊN: KHI THÊM HOẶC SỬA COMPONENT MỚI

Khi bạn phát triển thêm một component mới vào `@uiforge/core`:
1. **Bước 1 - Tạo Component**: Đặt mã nguồn trong `frontend/src/renderer/components/Forge[TênComponent].tsx`. Đảm bảo 100% trung lập không dính từ khóa nghiệp vụ.
2. **Bước 2 - Barrel Export**: Export component trong `frontend/src/renderer/components/index.ts` và `frontend/src/core/index.ts`.
3. **Bước 3 - Khai báo Type Schema**: Thêm tên Component vào `ComponentType` trong `frontend/src/types/schema.ts`.
4. **Bước 4 - Đăng ký Renderer**: Thêm `case '[TênComponent]':` vào `renderLeafContent()` trong `frontend/src/renderer/Renderer.tsx`.
5. **Bước 5 - Đăng ký Palette**: Thêm mẫu định nghĩa vào `AVAILABLE_COMPONENTS` trong `frontend/src/editor/ComponentPalette.tsx`.
6. **Bước 6 - Bổ sung Property Inspector**: Thêm mục chỉnh sửa thuộc tính trong `frontend/src/editor/PropertyPanel.tsx`.
7. **Bước 7 - CẬP NHẬT TÀI LIỆU NÀY**: Bổ sung mục mới vào Phần II của file tài liệu này với đầy đủ: Chức năng, Bảng thuộc tính (`props`) và ví dụ minh họa.

