# UIForge Core — Enterprise Low-Code Framework

> **Source Chính (`Kietvpt/UIPorge`)** — Nơi phát triển, nâng cấp Core Framework (Frontend + Backend) và đóng gói phát hành thư viện nội bộ (**NuGet `UIForge.Core`** & **npm `@kietvpt/uiforge-core`**) lên **GitHub Packages**.

---

## 🏗️ Kiến trúc Hệ sinh thái 3 Repositories

1. **`UIPorge` (Repo này — Source Chính)**: Phát triển Core Engine, UI Components, Visual Designer và tự động publish package qua GitHub Actions.
2. **`UIForge-App-Template` (Source Phụ — Client Starter & Staging Demo)**: Dự án sạch cài trực tiếp package `UIForge.Core` + `@kietvpt/uiforge-core` để triển khai cho khách hàng hoặc chạy Demo trên VPS.
3. **`UIForge-Docs` (Trang Giới thiệu & Tài liệu)**: Website Docusaurus song ngữ (Việt / Anh) giới thiệu tính năng, hướng dẫn cài đặt và Live Playground.

---

## 📂 Cấu trúc Source Chính

```text
UIPorge/
├── .github/workflows/
│   └── publish-packages.yml    # Tự động pack & publish NuGet + npm lên GitHub Packages
├── backend/
│   ├── UIForge.Core/           # 📦 NuGet Package UIForge.Core (.NET 8)
│   │   ├── Controllers/        # DynamicMetadata, Pages, FeaturePolicies, ComponentPolicies, Auth, Export, Reports
│   │   ├── Data/               # UIForgeDbContext (Code-First Core Schema)
│   │   ├── Entities/           # BaseEntity, Page, UIComponent, Role, User, FeaturePolicy, ComponentPolicy, AuditLog...
│   │   ├── Security/           # RequireEntityPermissionAttribute (Multi-Tier RBAC + Field Filtering)
│   │   └── Services/           # Multi-DB Provider (SqlServer / PostgreSQL / SQLite), Branching, JWT, PDF/Docx/Excel
│   └── UIForge.API/            # Host Test Bench (Logistics FCL Import demo) để Dev kiểm thử Core
└── frontend/
    ├── src/
    │   ├── core/               # 📦 Entry point đóng gói npm @kietvpt/uiforge-core
    │   │   ├── config.ts       # Cấu hình API Base URL tập trung (setApiBaseUrl / getApiBaseUrl)
    │   │   ├── engines/        # dataEngine, permissionEngine, navigationEngine, eventRunner, validationEngine, realtimeEngine
    │   │   └── index.ts        # Barrel export toàn bộ Components, Engines, Studio & Types
    │   ├── editor/             # Visual Canvas, LeftNavbar (phân tầng), PropertyPanel, FeatureManager, PolicyMatrixGrid
    │   ├── renderer/           # Runtime Renderer, PermissionGuard, FormFieldWrapper, ForgeTable (GridPolicy)
    │   └── store/              # Zustand Stores (editorStore với Clean Path Routing, authStore, masterDetailStore)
    └── vite.lib.config.ts      # Build thư viện ESM/CJS + CSS (dist-lib/)
```

---

## ✨ Tính năng Cốt lõi

* **Visual Designer & Layout 12-Cột ERP**: Kéo thả linh hoạt (`@dnd-kit`), hỗ trợ CSS Grid 12-cột, Flexbox, Tab Stack, `ForgeSection`, `ForgeTable` (GridPolicy, Virtual Scroll, Group-By, Inline Ghost Row, Excel Copy/Paste/Export).
* **Phân tầng Feature & Clean Path Routing**: Cây menu cha-con kéo thả sắp xếp trên Leftbar, điều hướng URL sạch không dùng query ID (ví dụ `/transactions`, `/fcl-import/FCLI-260200033345`).
* **Phân quyền Đa tầng (Multi-Tier Dynamic RBAC)**:
  * **Dynamic Roles**: Chỉ bắt buộc duy nhất role `Dev` khi khởi tạo Core; toàn bộ các role nghiệp vụ khác tạo/xóa động ngay trên giao diện.
  * **3 Tầng kiểm soát**: Feature (13 cột quyền chuẩn) -> Container/Section (thừa kế xuống con) -> Component & từng cột GridPolicy (5 quyền: `Xem`, `Cập nhật`, `Cập nhật toàn bộ`, `Xóa`, `Hủy`).
  * **Backend Field Filtering**: Lọc dữ liệu an toàn theo từng trường được cấp quyền khi lưu (`PUT/PATCH`).
* **Multi-Database Provider**: Chuyển đổi linh hoạt giữa **PostgreSQL**, **SQL Server** và **SQLite** thông qua cấu hình `Database:Provider` + `ConnectionStrings:BranchTemplate`.
* **Dual Business Logic Engine**: Tách biệt logic nghiệp vụ khỏi Core qua `*.bl.ts` (Frontend) và `BaseEntity` / Custom Controllers (Backend).

---

## 🚀 Chạy Local Development (Kiểm thử Core)

### 1. Backend (.NET 8)
Cấu hình `Database:Provider` (`SqlServer` | `PostgreSQL` | `SQLite`) và `ConnectionStrings:BranchTemplate` trong `backend/UIForge.API/appsettings.json`, sau đó chạy:
```bash
dotnet run --project backend/UIForge.API/UIForge.API.csproj --urls http://localhost:5048
```
* Swagger UI: `http://localhost:5048/swagger`

### 2. Frontend (React 18 + Vite)
```bash
cd frontend
npm install
npm run dev
```
* Giao diện Web: `http://localhost:3000` (tài khoản Dev mặc định: `admin` / `admin123`).

---

## 📦 Đóng gói & Publish lên GitHub Packages (Nội bộ)

Workflow `.github/workflows/publish-packages.yml` hỗ trợ 2 cách phát hành:

1. **Tự động khi đẩy Git Tag**:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
2. **Chạy thủ công trên GitHub Actions**:
   * Vào tab **Actions** -> **Publish UIForge Packages to GitHub Packages** -> **Run workflow** -> nhập version (ví dụ `1.0.0`).

Sau khi chạy xong, 2 package nội bộ sẽ sẵn sàng tại GitHub Packages:
* **NuGet**: `UIForge.Core` (`https://nuget.pkg.github.com/Kietvpt/index.json`)
* **npm**: `@kietvpt/uiforge-core` (`https://npm.pkg.github.com`)
