---
id: "mcp_handler_hexagonal_port_decoupling"
name: "MCP Handler Hexagonal Port Decoupling & Host Isolation"
category: "Architecture"
role_archetype: "Architecture"
skill_level: 2
exp: 380
discovered_at: "2026-10-07T07:27:16.633Z"
source: "Autonomous Learning & Core Refactoring"
adaptation_count: 4
enabled: true
tool: "distilled_skill_execution"
---

# MCP Handler Hexagonal Port Decoupling & Host Isolation

## 1. BẢN THIẾT KẾ NGUYÊN LÝ (FIRST PRINCIPLES & INVARIANTS)
### 1.1. Bài toán Cốt lõi
Các Tool Handlers của MCP thường có xu hướng phụ thuộc trực tiếp vào môi trường máy chủ cụ thể (như `import * as vscode from 'vscode'` hoặc gọi trực tiếp Electron IPC), làm gãy vỡ khả năng chạy trên CLI, Headless Server, hoặc Web IDE.
### 1.2. Nguyên lý Nền tảng (Hexagonal Architecture / Ports & Adapters)
- Tầng Domain & MCP Handlers chỉ giao tiếp với thế giới bên ngoài thông qua các Inward/Outward Ports trừu tượng (`IMcpApplicationPort`).
- Dependency Inversion Principle: Handlers phụ thuộc vào Abstraction, Host Adapter phụ thuộc vào Abstraction.
### 1.3. Ràng buộc Bất biến (Non-Negotiable Invariants)
- **Zero Host Leakage**: Nghiêm cấm mọi import trực tiếp thư viện host (`vscode`, `electron`, `window`) trong file handlers.
- **Port Contract Compliance**: Mọi truy xuất project services và lệnh hệ thống bắt buộc phải đi qua cổng `IMcpApplicationPort`.

---

## 2. QUY TRÌNH THAO TÁC CHUẨN (SOP)
1. **Bước 1 - Khảo sát Phụ thuộc Host**: Rà soát toàn bộ import và lời gọi hàm trong handler xem có dính dáng tới Host API không.
2. **Bước 2 - Định hình Hợp đồng Port (Port Contract)**: Mở rộng `IMcpApplicationPort` trong `src/core/ports/` để bao hàm các phương thức cần thiết (`executeCommand`, `getEffectiveRoot`, `getProjectServices`).
3. **Bước 3 - Thay thế Lời gọi Trực tiếp**: Chuyển đổi các thao tác mở file, gọi lệnh, hiển thị thông báo thành các lệnh gọi qua Port.
4. **Bước 4 - Kiểm toán Ranh giới (Boundary Audit)**: Chạy `npx tsc --noEmit` và ADAM Boundary Audit để đảm bảo 0 vi phạm ranh giới.

---

## 3. CÔNG THỨC TÁI TẠO ĐỘNG (GENERATIVE RECONSTRUCTION RECIPE)
- Khi tái cấu trúc hoặc sinh mới một MCP Handler ở bất kỳ dự án nào:
  * Khởi tạo signature hàm: `export function register[Domain]Handlers(ctx: McpToolContext): void`.
  * Trích xuất dependencies từ `ctx`: `const { server, workspaceRoot, getProjectServices, executeCommand } = ctx;`.
  * Không khởi tạo service thủ công bằng từ khóa `new Service(workspaceRoot)`; luôn dùng `getProjectServices()` để tái sử dụng instance đã được quản lý vòng đời.

---

## 4. TIÊU CHÍ ĐÁNH GIÁ & KIỂM ĐỊNH (VERIFICATION CRITERIA)
- [ ] 0 dòng lệnh `import * as vscode` hoặc `electron` trong thư mục handlers.
- [ ] Toàn bộ handlers hoạt động trơn tru trong chế độ Headless CLI mà không cần giao diện đồ họa.
- [ ] Đạt chuẩn kiểm thử tự động với Mock Application Port độc lập.

---

## 5. MA TRẬN TIẾN HÓA (EVOLUTION MATRIX)
- *2026-10-07*: Đúc kết kỹ năng cô lập host isolation trong đợt refactor Aevum Core.
- *2026-10-14*: Nâng cấp lên chuẩn Universal Generative Skill Archetype (UGSA) cùng An và Kai.
