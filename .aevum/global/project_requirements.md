# 📋 UIForge — Project Requirements & Technical Mandates

> **Trạng thái**: Hiệu lực tuyệt đối đối với toàn bộ AI Agents trong Aevum Squad.  
> **Cập nhật lần cuối**: 2026-10-20  
> **Người quản trị tối cao**: Master (User)

Tài liệu này là nguồn chân lý (Single Source of Truth) lưu giữ toàn bộ các yêu cầu, ràng buộc kỹ thuật cốt lõi và các chỉ thị đặc biệt từ Master. **Mọi Agent trước khi thiết kế, sinh mã nguồn hoặc tạo migration BẮT BUỘC phải đọc và tuân thủ nghiêm ngặt.**

---

## 🔒 I. QUY CHUẨN KỸ THUẬT BẮT BUỘC (MANDATORY TECHNICAL CONSTRAINTS)

### 1. REQ-DB-001: Khóa chính CSDL (Primary Key) BẮT BUỘC là số nguyên `int` (Auto-Increment / Identity)
- **Ràng buộc**:
  - Mọi bảng / Entity trong cơ sở dữ liệu SQL Server (cả các entity hiện tại như `Project`, `Page`, `User` và mọi entity tạo mới về sau) **BẮT BUỘC sử dụng khóa chính `Id` kiểu số nguyên `int` tự tăng (Database Identity)**.
  - **CẤM** sử dụng kiểu `string` (GUID / UUID / hash) làm Primary Key cho các bảng trong DB.
  - Cú pháp chuẩn trong C# / EF Core 8:
    ```csharp
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    ```
  - **Khóa ngoại (Foreign Keys)**: Tất cả khóa ngoại tham chiếu đến các Entity này cũng phải là kiểu `int` (ví dụ: `public int ProjectId { get; set; }`, `public int PageId { get; set; }`, `public int UserId { get; set; }`).
  - **Phân tách NodeId Client**: Nếu giao diện Frontend cần định danh chuỗi phía client (như `btn_123`, `node_container_1`), sử dụng trường riêng biệt `public string NodeId { get; set; }` độc lập hoàn toàn với Khóa chính DB `int Id` (như đã triển khai mẫu ở `UIComponent.cs`).

---

### 2. REQ-LOG-002: Bắt buộc ghi Nhật ký Công việc (Agent Work Logging Mandate)
- **Ràng buộc**:
  - Bất kỳ Agent nào (`kael`, `vidus`, `zenith`, `bob`, `docuwriter`, `an`) sau khi thực hiện xong một lượt chạy hoặc một tác vụ (dù lớn hay nhỏ) **BẮT BUỘC phải ghi lại nhật ký công việc** vào file:
    👉 [`.aevum/memory/work_logs.md`](file:///d:/Learn/UIPorge/.aevum/memory/work_logs.md)
  - Đồng thời cập nhật tóm tắt 1 dòng vào file:
    👉 [`.aevum/global/changelog.json`](file:///d:/Learn/UIPorge/.aevum/global/changelog.json)
  - **Mục đích**: Lưu trữ Living Memory và Audit Trail để Master và các thành viên khác khi xem lại luôn biết chính xác ai đã làm gì, sửa file nào, lý do đưa ra quyết định, và các bước tiếp theo là gì.

- **Cấu trúc mỗi mục Work Log trong `.aevum/memory/work_logs.md`**:
  ```markdown
  ### [YYYY-MM-DD HH:mm] - [Tên Agent] ([Mã AID]) - [Tiêu đề Tác vụ]
  - **🎯 Mục tiêu**: ...
  - **📂 File đã tác động**:
    - `path/to/file1` (Created/Modified)
  - **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
    - ...
  - **✅ Kết quả kiểm thử & Trạng thái**: (Build pass / Unit test / Sẵn sàng tích hợp)
  - **🔜 Bước tiếp theo / Ghi chú cho thành viên khác**:
    - ...
  ```

---

## 📌 II. KHU VỰC MASTER BỔ SUNG YÊU CẦU TIẾP THEO (MASTER'S CUSTOM DIRECTIVES)

*Master có thể trực tiếp bổ sung hoặc yêu cầu Agent thêm các quy tắc mới vào danh sách này bất kỳ lúc nào. Toàn bộ Agent sẽ lập tức tuân thủ.*

- [x] **REQ-001**: Khóa chính trong DB bắt buộc là `int` tự tăng (Identity), khóa ngoại là `int`.
- [x] **REQ-002**: Toàn bộ Agent bắt buộc ghi Work Log chi tiết vào `.aevum/memory/work_logs.md` và `.aevum/global/changelog.json` sau mỗi lần chạy.
- [ ] **REQ-003**: *(Chờ Master bổ sung)*
- [ ] **REQ-004**: *(Chờ Master bổ sung)*
- [ ] **REQ-005**: *(Chờ Master bổ sung)*

---

## 🤝 III. TRÁCH NHIỆM CỤ THỂ CỦA TỪNG VỊ TRÍ VỚI QUY CHUẨN

1. **Zenith (Database Architect)**:
   - Chịu trách nhiệm trực tiếp về schema CSDL.
   - Refactor `Project.cs`, `Page.cs`, `User.cs` từ `string Id` (GUID) sang `int Id` (Identity) kèm migration tương ứng.
   - Kiểm tra mọi entity mới phải tuân thủ `int Id`.

2. **Vidus (Backend Architect)**:
   - Cập nhật các DTO, Controller routes (`/api/pages/{id:int}`, `/api/projects/{id:int}`) sử dụng kiểu `int` cho ID thay vì string GUID.
   - Phối hợp với Zenith để bảo đảm API Contract chuẩn xác.

3. **Kael (Frontend Lead)**:
   - Đồng bộ types trên TypeScript (`Project.id: number`, `Page.id: number`), phân biệt rõ với `nodeId: string` của component visual editor.

4. **Bob (DevOps / CI/CD)**:
   - Đảm bảo các script seed data và migration chạy mượt mà trong pipeline tự động với ID tự tăng.

5. **DocuWriter (Technical Writer)**:
   - Ghi nhận đầy đủ tài liệu API specs phản ánh đúng kiểu `int Id` cho các endpoints và hướng dẫn dev mới.

6. **An (Coordinator)**:
   - Đôn đốc, giám sát việc ghi log của từng Agent, tổng hợp báo cáo tiến độ gửi Master.

