# UIForge — Low-Code UI Framework Builder

> Framework giúp xây dựng giao diện phần mềm web nhanh hơn với layout dựng sẵn, component library, visual editor, và runtime renderer.

---

## 🏗️ Cấu trúc Skeleton

```
UIForge/
├── frontend/               # React 18 + Vite + TypeScript + TailwindCSS + Zustand
│   ├── src/
│   │   ├── editor/         # Visual Editor UI
│   │   │   ├── ComponentPalette.tsx   # Danh sách component có sẵn (click để thêm)
│   │   │   ├── ComponentTree.tsx      # Quản lý cây component trong layout
│   │   │   ├── PropertyPanel.tsx      # Chỉnh sửa Props, CSS tùy biến, Event handlers
│   │   │   └── TopBar.tsx             # Undo/Redo, Live Preview toggle, Save
│   │   ├── renderer/       # Runtime Renderer (mô tả bằng JSON Schema)
│   │   │   ├── Renderer.tsx           # Dynamic dispatcher
│   │   │   └── components/            # Mỗi component 1 file riêng
│   │   │       ├── index.ts           # Barrel export (thêm component mới → export ở đây)
│   │   │       ├── types.ts           # Props dùng chung
│   │   │       ├── ForgeButton.tsx
│   │   │       ├── ForgeTextBox.tsx
│   │   │       ├── ForgeLabel.tsx
│   │   │       ├── ForgeContainer.tsx
│   │   │       └── ForgeTable.tsx
│   │   ├── layouts/        # Layout Templates phần mềm
│   │   │   └── SidebarLayout.tsx      # Navbar bên trái + Nút mở/đóng inspector bên phải
│   │   ├── store/          # Zustand State Management (undo/redo, CRUD component)
│   │   └── types/schema.ts # JSON Schema định nghĩa ComponentNode, Page, Project
│
└── backend/                # ASP.NET Core 8 WebAPI + Entity Framework Core + SQL Server
    └── UIForge.API/
        ├── Controllers/    # PagesController (save/load layout), ProjectsController
        ├── Models/         # Entity models (Project, Page) & DTOs
        ├── Data/           # AppDbContext (SQL Server & SSMS mapping)
        └── Program.cs      # CORS, Swagger OpenAPI, JSON serialization
```

---

## 🚀 Hướng dẫn khởi chạy

### 1. Khởi chạy Frontend (React + Vite)
```bash
cd frontend
npm run dev
```
👉 Mở trình duyệt tại: `http://localhost:3000` (hoặc port hiển thị trong console).

### 2. Khởi chạy Backend (ASP.NET Core WebAPI)
```bash
cd backend/UIForge.API
dotnet run
```
👉 Swagger UI API docs tại: `https://localhost:7001/swagger` hoặc `http://localhost:5000/swagger`.

### 3. Cấu hình SQL Server (SSMS)
Trong file `backend/UIForge.API/appsettings.json`, chỉnh sửa chuỗi kết nối phù hợp với máy của bạn:
```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=UIForgeDb;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True"
}
```
*(Nếu dùng SQL Express thì thay `Server=localhost\\SQLEXPRESS`)*.

---

## 🎯 Các tính năng đã hoàn thiện trong Skeleton

1. **Layout có sẵn**:
   - Layout với **Navbar bên trái** cho ứng dụng quản trị/phần mềm.
   - Nút **"Open/Hide Inspector Panel"** để mở/tắt màn hình quản lý bên phải.
2. **Thêm Component bằng chuột trái**:
   - Menu Component Palette bên trái với các component có sẵn: *Button, Text Input, Label, Container, Data Table*.
   - Nhấn chuột trái để thêm ngay vào layout.
3. **Màn hình Quản lý Component (Inspector)**:
   - **Tab Props**: Đổi label, placeholder, variant (primary/secondary/danger/ghost), size, disabled.
   - **Tab CSS (Styles)**: Tùy biến màu nền (color picker), màu chữ, padding, border radius, width nếu không muốn dùng kiểu mặc định của hệ thống.
   - **Tab Events**: Gắn các event như `onClick`, `onChange` kèm action (`navigate`, `callApi`, ...).
   - **Tab Tree**: Xem và quản lý cây thứ tự component, xóa component.
4. **Undo / Redo & Live Preview**:
   - Nút hoàn tác (Undo/Redo) các thao tác chỉnh sửa.
   - Nút **"Preview Live"** để xem giao diện thực tế như người dùng cuối sẽ thấy.
5. **Backend Persistence**:
   - Controller `PagesController` nhận toàn bộ JSON Schema của giao diện và lưu trữ vào SQL Server.
