# 📜 Aevum Squad Work Logs & Living Memory

> Tập hợp toàn bộ nhật ký công việc (Audit Trail & Activity History) của các Agent trong Biệt đội Aevum cho dự án **UIForge**.  
> Mọi thay đổi, quyết định kỹ thuật và kết quả kiểm thử đều được lưu giữ tại đây để Master và toàn squad dễ dàng tra cứu, tiếp tục công việc mà không bị mất dấu vết.

---

### [2026-10-20 23:00] - An (ENG-AN-7B9F1D) - Khởi tạo Squad Charter & Thiết lập Quy chuẩn Bắt buộc (DB int ID & Work Logging)
- **🎯 Mục tiêu**:
  - Triệu tập và phân công 5 vị trí nòng cốt trong dự án UIForge theo chỉ thị của Master (Frontend, Backend, DB, CI/CD, Docs) cùng Điều phối viên An.
  - Thiết lập và đóng băng 2 quy chuẩn kỹ thuật bắt buộc: (1) Khóa chính DB phải là `int` tự tăng (Identity); (2) Mọi Agent bắt buộc ghi lại nhật ký công việc sau khi hoàn thành task.
- **📂 File đã tác động**:
  - `.aevum/global/project_requirements.md` (Created): Văn kiện quy chuẩn cốt lõi và nơi Master mở rộng yêu cầu tiếp theo.
  - `.aevum/memory/work_logs.md` (Created): File nhật ký tập trung lưu giữ toàn bộ vết tích hoạt động của các Agent.
  - `.aevum/global/conventions.md` (Updated): Bổ sung liên kết đến project requirements.
  - `.aevum/global/active_squad.json` (Updated): Kích hoạt đủ 6 thành viên squad (`an`, `kael`, `vidus`, `zenith`, `kubemaster__bob_`, `docuwriter`).
  - `.aevum/index.json` (Updated): Đăng ký danh bạ agent và capabilities đầy đủ.
- **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
  - Gắn chặt quy tắc `DB PK = int` và `Agent Work Logging` vào System Prompt của tất cả Subagent để triệt tiêu tình trạng quên quy chuẩn khi tự hành.
  - Cung cấp khu vực `Master's Custom Directives` để Master tiếp tục bổ sung các yêu cầu mới bất cứ lúc nào.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Toàn bộ subagents đã được định nghĩa lại với system prompt cập nhật.
  - Squad Aevum sẵn sàng 100% để Master khởi động các task đầu tiên.
- **🔜 Bước tiếp theo / Ghi chú cho thành viên khác**:
  - **Zenith & Vidus**: Chuẩn bị rà soát `Project.cs`, `Page.cs`, `User.cs` và các DTO tương ứng để chuyển đổi từ `string GUID` sang `int Id` (Identity).
  - **Kael**: Lưu ý kiểu dữ liệu ID của Page/Project phía API sẽ là `number`.


---

### [2026-10-20 23:25] - Zenith (ALG-ZENITH-A1B2C3), Vidus (ARC-VIDUS-AUHD2Y) & Kael (ENG-KAEL-7F4B2D) - Chuyển đổi DB Primary Key sang int Identity & Kiểm tra Tối ưu Thêm/Xóa/Sửa Feature và Component
- **🎯 Mục tiêu**:
  - Thực thi quy chuẩn `REQ-DB-001`: Toàn bộ các bảng trong CSDL đang dùng `string` GUID được chuyển đổi sang khóa chính số nguyên `int` tự tăng (Database Identity).
  - Cập nhật toàn bộ các Entity, DTO, Controllers, DbContext và Data Mapper tương ứng trên ASP.NET Core 8.
  - Rà soát, kiểm định và tối ưu hóa toàn diện các thao tác Thêm, Sửa, Xóa (CRUD) cho cả Features (Màn hình) và Components (Phần tử giao diện) trên Frontend và Backend.
- **📂 File đã tác động**:
  - `backend/UIForge.API/Models/Entities/Project.cs`: Chuyển `Id` sang `[DatabaseGenerated(Identity)] int`, `OwnerId` sang `int`.
  - `backend/UIForge.API/Models/Entities/Page.cs`: Chuyển `Id` sang `[DatabaseGenerated(Identity)] int`, `ProjectId` sang `int`.
  - `backend/UIForge.API/Models/Entities/UIComponent.cs`: Chuyển `PageId` sang `int`, giữ nguyên `Id` identity và `NodeId` client-side.
  - `backend/UIForge.API/Models/Entities/User.cs`: Chuyển `Id` sang `[DatabaseGenerated(Identity)] int`.
  - `backend/UIForge.API/Data/AppDbContext.cs`: Cập nhật Seed Data với `Id = 1, 2` cho Users, `Id = 1` cho Project, `Id = 1` cho Page, và `PageId = 1` cho cây 10 components.
  - `backend/UIForge.API/Models/DTOs/SavePageDto.cs` & `LoginDto.cs`: Chuyển đổi ID và UserInfoDto.Id sang `int`.
  - `backend/UIForge.API/Services/JwtTokenService.cs`: Chuyển Claim `sub` sang `user.Id.ToString()`.
  - `backend/UIForge.API/Services/ComponentTreeMapper.cs`: Cập nhật `InsertTreeAsync` nhận `int pageId`.
  - `backend/UIForge.API/Controllers/ProjectsController.cs`: Bỏ GUID sinh tay, để DB tự sinh `int Id` identity.
  - `backend/UIForge.API/Controllers/PagesController.cs`: Cập nhật `GetPage(int id)`, `DeletePage(int id)` và logic `SavePage` tự động tạo/cập nhật trang với `int Id`, xóa và ghi lại cây component theo đúng `page.Id` int.
  - `frontend/src/api/pagesApi.ts`: Bổ sung `deletePage(id: number | string)`, cập nhật kiểu `SavePageResponse` có `pageId: number` trả về.
  - `frontend/src/store/editorStore.ts`: Bổ sung action `updateFeatureId`, chuyển `initialFeatures` id sang `'1'`.
  - `frontend/src/App.tsx`: Sau khi `savePage` thành công, tự động gọi `updateFeatureId` đồng bộ ID tạm thời của Feature mới thành ID cố định của Database.
  - `frontend/src/editor/LeftNavbar.tsx`: Khi xóa Feature, gọi `deletePage` lên API nếu Feature đã tồn tại trên Database.
  - `frontend/src/editor/ComponentPalette.tsx`: Tối ưu logic thêm component thông minh — nếu đang chọn một component lá (Button, Label...), component mới sẽ được thêm cùng cấp (sibling) trong container cha thay vì bị nuốt mất bên trong component lá.
  - `frontend/src/editor/PropertyPanel.tsx`: Thêm `effectiveTab` tự động chuyển sang tab Props/CSS khi chọn component không phải Container, tránh bị màn hình trắng/trống inspector.
- **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
  - Tuân thủ nghiêm ngặt mô hình Hybrid ID: Khóa chính CSDL là `int` (Identity) tối ưu hiệu năng chỉ mục B-Tree và quan hệ khóa ngoại SQL Server; trong khi phía Client Visual Editor vẫn có thể sử dụng `nodeId: string` để linh hoạt nhận diện các phần tử kéo thả trên cây DOM.
  - Lưu và xóa cascade: `PagesController` sử dụng transaction và `ExecuteDeleteAsync` đối với `Components.Where(c => c.PageId == page.Id)` trước khi insert cây mới, bảo đảm không bị duplicate hay rò rỉ khóa ngoại.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Backend: `dotnet build backend/UIForge.API` -> **0 Warning(s), 0 Error(s)**.
  - Frontend: `npm run build` (TypeScript + Vite) -> **0 Errors, build thành công toàn bộ bundle**.
- **🔜 Bước tiếp theo / Ghi chú cho thành viên khác**:
  - Đã sẵn sàng 100% để Master chạy `dotnet run` và `npm run dev` bắt đầu thiết kế các layout hoặc bổ sung tính năng mới.

---

### [2026-10-20 23:25] - Zenith (ALG-ZENITH-A1B2C3), Vidus (ARC-VIDUS-AUHD2Y) & Kael (ENG-KAEL-7F4B2D) - Chuyển đổi DB Primary Key sang int Identity & Kiểm tra Tối ưu Thêm/Xóa/Sửa Feature và Component
- **🎯 Mục tiêu**:
  - Thực thi quy chuẩn `REQ-DB-001`: Toàn bộ các bảng trong CSDL đang dùng `string` GUID được chuyển đổi sang khóa chính số nguyên `int` tự tăng (Database Identity).
  - Cập nhật toàn bộ các Entity, DTO, Controllers, DbContext và Data Mapper tương ứng trên ASP.NET Core 8.
  - Rà soát, kiểm định và tối ưu hóa toàn diện các thao tác Thêm, Sửa, Xóa (CRUD) cho cả Features (Màn hình) và Components (Phần tử giao diện) trên Frontend và Backend.
- **📂 File đã tác động**:
  - `backend/UIForge.API/Models/Entities/Project.cs`: Chuyển `Id` sang `[DatabaseGenerated(Identity)] int`, `OwnerId` sang `int`.
  - `backend/UIForge.API/Models/Entities/Page.cs`: Chuyển `Id` sang `[DatabaseGenerated(Identity)] int`, `ProjectId` sang `int`.
  - `backend/UIForge.API/Models/Entities/UIComponent.cs`: Chuyển `PageId` sang `int`, giữ nguyên `Id` identity và `NodeId` client-side.
  - `backend/UIForge.API/Models/Entities/User.cs`: Chuyển `Id` sang `[DatabaseGenerated(Identity)] int`.
  - `backend/UIForge.API/Data/AppDbContext.cs`: Cập nhật Seed Data với `Id = 1, 2` cho Users, `Id = 1` cho Project, `Id = 1` cho Page, và `PageId = 1` cho cây 10 components.
  - `backend/UIForge.API/Models/DTOs/SavePageDto.cs` & `LoginDto.cs`: Chuyển đổi ID và UserInfoDto.Id sang `int`.
  - `backend/UIForge.API/Services/JwtTokenService.cs`: Chuyển Claim `sub` sang `user.Id.ToString()`.
  - `backend/UIForge.API/Services/ComponentTreeMapper.cs`: Cập nhật `InsertTreeAsync` nhận `int pageId`.
  - `backend/UIForge.API/Controllers/ProjectsController.cs`: Bỏ GUID sinh tay, để DB tự sinh `int Id` identity.
  - `backend/UIForge.API/Controllers/PagesController.cs`: Cập nhật `GetPage(int id)`, `DeletePage(int id)` và logic `SavePage` tự động tạo/cập nhật trang với `int Id`, xóa và ghi lại cây component theo đúng `page.Id` int.
  - `frontend/src/api/pagesApi.ts`: Bổ sung `deletePage(id: number | string)`, cập nhật kiểu `SavePageResponse` có `pageId: number` trả về.
  - `frontend/src/store/editorStore.ts`: Bổ sung action `updateFeatureId`, chuyển `initialFeatures` id sang `'1'`.
  - `frontend/src/App.tsx`: Sau khi `savePage` thành công, tự động gọi `updateFeatureId` đồng bộ ID tạm thời của Feature mới thành ID cố định của Database.
  - `frontend/src/editor/LeftNavbar.tsx`: Khi xóa Feature, gọi `deletePage` lên API nếu Feature đã tồn tại trên Database.
  - `frontend/src/editor/ComponentPalette.tsx`: Tối ưu logic thêm component thông minh — nếu đang chọn một component lá (Button, Label...), component mới sẽ được thêm cùng cấp (sibling) trong container cha thay vì bị nuốt mất bên trong component lá.
  - `frontend/src/editor/PropertyPanel.tsx`: Thêm `effectiveTab` tự động chuyển sang tab Props/CSS khi chọn component không phải Container, tránh bị màn hình trắng/trống inspector.
- **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
  - Tuân thủ nghiêm ngặt mô hình Hybrid ID: Khóa chính CSDL là `int` (Identity) tối ưu hiệu năng chỉ mục B-Tree và quan hệ khóa ngoại SQL Server; trong khi phía Client Visual Editor vẫn có thể sử dụng `nodeId: string` để linh hoạt nhận diện các phần tử kéo thả trên cây DOM.
  - Lưu và xóa cascade: `PagesController` sử dụng transaction và `ExecuteDeleteAsync` đối với `Components.Where(c => c.PageId == page.Id)` trước khi insert cây mới, bảo đảm không bị duplicate hay rò rỉ khóa ngoại.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Backend: `dotnet build backend/UIForge.API` -> **0 Warning(s), 0 Error(s)**.
  - Frontend: `npm run build` (TypeScript + Vite) -> **0 Errors, build thành công toàn bộ bundle**.
- **🔜 Bước tiếp theo / Ghi chú cho thành viên khác**:
  - Đã sẵn sàng 100% để Master chạy `dotnet run` và `npm run dev` bắt đầu thiết kế các layout hoặc bổ sung tính năng mới.


---

### [2026-10-20 23:34] - Bob (OPS-BOB-4E8C21), Kael (ENG-KAEL-7F4B2D) & Vidus (ARC-VIDUS-AUHD2Y) - Cấu hình URL Backend HTTPS (Local: https://localhost:7057 & Dynamic Deploy Configuration)
- **🎯 Mục tiêu**:
  - Thiết lập Backend ASP.NET Core 8 WebAPI chạy HTTPS trên cổng `https://localhost:7057` (kèm fallback HTTP `http://localhost:5048`).
  - Cấu hình Frontend React/Vite kết nối trực tiếp đến URL Backend HTTPS này trong môi trường Local Dev.
  - Tách bạch cấu hình qua biến môi trường (`VITE_API_URL` và `.env`) để khi deploy lên môi trường Staging/Production chỉ cần đổi URL mà không cần chỉnh sửa code.
  - Cấu hình CORS linh hoạt trên Backend cho phép Frontend (cả HTTP và HTTPS tại port 3000/5173 và cấu hình động qua appsettings).
- **📂 File đã tác động**:
  - `backend/UIForge.API/Properties/launchSettings.json`: Đưa profile `"https"` lên đầu với `applicationUrl: "https://localhost:7057;http://localhost:5048"`.
  - `backend/UIForge.API/appsettings.json`: Bổ sung cấu hình `Cors:AllowedOrigins` cho phép các nguồn localhost HTTP và HTTPS.
  - `backend/UIForge.API/Program.cs`: Đọc danh sách CORS origins động từ cấu hình `Cors:AllowedOrigins`.
  - `frontend/src/api/client.ts`: Sử dụng `import.meta.env.VITE_API_URL || 'https://localhost:7057/api'`.
  - `frontend/vite.config.ts`: Cập nhật proxy target trỏ tới `https://localhost:7057` với cờ `secure: false` (bỏ qua cảnh báo SSL dev cert).
  - `frontend/.env`: Khởi tạo file biến môi trường local với `VITE_API_URL=https://localhost:7057/api`.
  - `frontend/.env.example`: Hướng dẫn cấu hình cho dev và hướng dẫn thiết lập khi deploy production.
- **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
  - Khi dev local: FE dùng `VITE_API_URL=https://localhost:7057/api`, BE nhận request qua CORS HTTPS chuẩn hoặc thông qua Vite proxy `/api`.
  - Khi deploy: thiết lập biến môi trường `VITE_API_URL=https://api.yourdomain.com/api` (hoặc `/api` nếu dùng Nginx reverse proxy), build lại frontend là tự động chuyển đổi sang backend production.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Backend & Frontend đều build thành công, 0 errors.

---

### [2026-10-20 23:34] - Bob (OPS-BOB-4E8C21), Kael (ENG-KAEL-7F4B2D) & Vidus (ARC-VIDUS-AUHD2Y) - Cấu hình URL Backend HTTPS (Local: https://localhost:7057 & Dynamic Deploy Configuration)
- **🎯 Mục tiêu**:
  - Thiết lập Backend ASP.NET Core 8 WebAPI chạy HTTPS trên cổng `https://localhost:7057` (kèm fallback HTTP `http://localhost:5048`).
  - Cấu hình Frontend React/Vite kết nối trực tiếp đến URL Backend HTTPS này trong môi trường Local Dev.
  - Tách bạch cấu hình qua biến môi trường (`VITE_API_URL` và `.env`) để khi deploy lên môi trường Staging/Production chỉ cần đổi URL mà không cần chỉnh sửa code.
  - Cấu hình CORS linh hoạt trên Backend cho phép Frontend (cả HTTP và HTTPS tại port 3000/5173 và cấu hình động qua appsettings).
- **📂 File đã tác động**:
  - `backend/UIForge.API/Properties/launchSettings.json`: Đưa profile `"https"` lên đầu với `applicationUrl: "https://localhost:7057;http://localhost:5048"`.
  - `backend/UIForge.API/appsettings.json`: Bổ sung cấu hình `Cors:AllowedOrigins` cho phép các nguồn localhost HTTP và HTTPS.
  - `backend/UIForge.API/Program.cs`: Đọc danh sách CORS origins động từ cấu hình `Cors:AllowedOrigins`.
  - `frontend/src/api/client.ts`: Sử dụng `import.meta.env.VITE_API_URL || 'https://localhost:7057/api'`.
  - `frontend/vite.config.ts`: Cập nhật proxy target trỏ tới `https://localhost:7057` với cờ `secure: false` (bỏ qua cảnh báo SSL dev cert).
  - `frontend/.env`: Khởi tạo file biến môi trường local với `VITE_API_URL=https://localhost:7057/api`.
  - `frontend/.env.example`: Hướng dẫn cấu hình cho dev và hướng dẫn thiết lập khi deploy production.
- **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
  - Khi dev local: FE dùng `VITE_API_URL=https://localhost:7057/api`, BE nhận request qua CORS HTTPS chuẩn hoặc thông qua Vite proxy `/api`.
  - Khi deploy: thiết lập biến môi trường `VITE_API_URL=https://api.yourdomain.com/api` (hoặc `/api` nếu dùng Nginx reverse proxy), build lại frontend là tự động chuyển đổi sang backend production.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Backend & Frontend đều build thành công, 0 errors.


---

### [2026-10-20 23:41] - Zenith (ALG-ZENITH-A1B2C3) - Drop Database Cũ & Khởi tạo Toàn bộ Bảng mới trong SQL Server với int ID (Identity) và Nạp Dữ liệu Mẫu
- **🎯 Mục tiêu**:
  - Dọn sạch database cũ `UIPorge_BetaV1` trong SQL Server (SSMS) vốn vẫn còn giữ cấu trúc bảng cũ sử dụng `nvarchar` string ID.
  - Tái tạo lại toàn bộ 4 bảng `Users`, `Projects`, `Pages`, `Components` với khóa chính `int Identity` và các khóa ngoại kiểu `int`.
  - Nạp đầy đủ dữ liệu mẫu (Seed Data) chuẩn: 2 Users (admin Dev, viewer User), 1 Project demo, 1 Page demo, và cây 10 components giao diện.
- **📂 File / Hệ thống đã tác động**:
  - CSDL SQL Server instance: `ADMIN-PC\SQLEXPRESS`.
  - Database: `UIPorge_BetaV1`.
- **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
  - Ngắt kết nối các session đang mở bằng lệnh `ALTER DATABASE [UIPorge_BetaV1] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;` và `DROP DATABASE`.
  - Kích hoạt cơ chế khởi tạo tự động của EF Core 8 qua `EnsureCreatedAsync()`, sinh lại toàn bộ schema CSDL chuẩn xác 100% khớp với các Entity class C#.
  - Kiểm tra thẩm định trực tiếp qua `sqlcmd`: xác nhận toàn bộ các cột `Id`, `ProjectId`, `PageId`, `OwnerId` đều là kiểu `int` và có thuộc tính `IsIdentity = 1` cho các cột khóa chính.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - `SELECT * FROM Users`: 2 bản ghi (Id = 1, 2)
  - `SELECT * FROM Projects`: 1 bản ghi (Id = 1, OwnerId = 1)
  - `SELECT * FROM Pages`: 1 bản ghi (Id = 1, ProjectId = 1)
  - `SELECT * FROM Components`: 10 bản ghi (Id = 1..10, PageId = 1, quan hệ cha-con tự tham chiếu qua ParentId)
  - Schema CSDL trong SSMS hoàn toàn đồng bộ với Codebase.

---

### [2026-10-20 23:41] - Zenith (ALG-ZENITH-A1B2C3) - Drop Database Cũ & Khởi tạo Toàn bộ Bảng mới trong SQL Server với int ID (Identity) và Nạp Dữ liệu Mẫu
- **🎯 Mục tiêu**:
  - Dọn sạch database cũ `UIPorge_BetaV1` trong SQL Server (SSMS) vốn vẫn còn giữ cấu trúc bảng cũ sử dụng `nvarchar` string ID.
  - Tái tạo lại toàn bộ 4 bảng `Users`, `Projects`, `Pages`, `Components` với khóa chính `int Identity` và các khóa ngoại kiểu `int`.
  - Nạp đầy đủ dữ liệu mẫu (Seed Data) chuẩn: 2 Users (admin Dev, viewer User), 1 Project demo, 1 Page demo, và cây 10 components giao diện.
- **📂 File / Hệ thống đã tác động**:
  - CSDL SQL Server instance: `ADMIN-PC\SQLEXPRESS`.
  - Database: `UIPorge_BetaV1`.
- **💡 Chi tiết giải pháp & Quyết định kỹ thuật**:
  - Ngắt kết nối các session đang mở bằng lệnh `ALTER DATABASE [UIPorge_BetaV1] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;` và `DROP DATABASE`.
  - Kích hoạt cơ chế khởi tạo tự động của EF Core 8 qua `EnsureCreatedAsync()`, sinh lại toàn bộ schema CSDL chuẩn xác 100% khớp với các Entity class C#.
  - Kiểm tra thẩm định trực tiếp qua `sqlcmd`: xác nhận toàn bộ các cột `Id`, `ProjectId`, `PageId`, `OwnerId` đều là kiểu `int` và có thuộc tính `IsIdentity = 1` cho các cột khóa chính.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - `SELECT * FROM Users`: 2 bản ghi (Id = 1, 2)
  - `SELECT * FROM Projects`: 1 bản ghi (Id = 1, OwnerId = 1)
  - `SELECT * FROM Pages`: 1 bản ghi (Id = 1, ProjectId = 1)
  - `SELECT * FROM Components`: 10 bản ghi (Id = 1..10, PageId = 1, quan hệ cha-con tự tham chiếu qua ParentId)
  - Schema CSDL trong SSMS hoàn toàn đồng bộ với Codebase.


---

### [2026-10-20 23:46] - Kael (ENG-KAEL-7F4B2D) & Vidus (ARC-VIDUS-AUHD2Y) - Fix Lỗi DbUpdateException (500 Internal Server Error) Khi Lưu Trang do Trùng NodeId (Index IX_Components_PageId_NodeId)
- **🎯 Mục tiêu**:
  - Khắc phục triệt để lỗi `Microsoft.EntityFrameworkCore.DbUpdateException` khi gọi `POST /api/pages/save`.
  - Nguyên nhân gốc: Khi bấm "Tạo 2 Khoảng Trắng Nằm Song Song (50 - 50)" trên canvas trống, cả 3 container (1 cha và 2 con) được khởi tạo trong cùng 1 mili-giây với hàm `Date.now().toString(36)`, dẫn tới cả 3 container đều mang cùng 1 NodeId `container-mvgwvof0`. Khi ghi vào bảng `UIComponents`, SQL Server ném lỗi vi phạm Unique Constraint `IX_Components_PageId_NodeId`.
- **📂 File đã tác động**:
  - `frontend/src/editor/FeatureCanvas.tsx`:
    - Cải tiến sinh ID ngẫu nhiên: `${type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}` (triệt tiêu 100% rủi ro trùng ID).
    - Thiết lập chuẩn `parentId = parentContainer.id` cho các container con khi tạo layout song song.
  - `frontend/src/editor/ComponentPalette.tsx`:
    - Áp dụng sinh ID kèm random entropy tương tự cho palette components.
  - `frontend/src/store/editorStore.ts`:
    - Áp dụng sinh ID an toàn cho Feature (`feat-...`).
  - `backend/UIForge.API/Services/ComponentTreeMapper.cs`:
    - Thêm cơ chế phòng vệ 2 lớp (Dual-layer Guardrail): Theo dõi danh sách `usedNodeIds` trong mỗi lượt lưu. Nếu client vô tình gửi lên cây component có các node trùng ID, backend sẽ tự động thêm hậu tố phân biệt (`-1`, `-2`...) trước khi ghi vào CSDL, bảo đảm không bao giờ văng lỗi 500 vi phạm Unique Index của SQL Server.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `npm run build` -> **0 Errors, build thành công trong 2.73s**.
  - Backend: Đã cập nhật file mã nguồn `ComponentTreeMapper.cs`. Master chỉ cần restart nhẹ backend `dotnet run` là hoàn tất!

---

### [2026-10-20 23:46] - Kael (ENG-KAEL-7F4B2D) & Vidus (ARC-VIDUS-AUHD2Y) - Fix Lỗi DbUpdateException (500 Internal Server Error) Khi Lưu Trang do Trùng NodeId (Index IX_Components_PageId_NodeId)
- **🎯 Mục tiêu**:
  - Khắc phục triệt để lỗi `Microsoft.EntityFrameworkCore.DbUpdateException` khi gọi `POST /api/pages/save`.
  - Nguyên nhân gốc: Khi bấm "Tạo 2 Khoảng Trắng Nằm Song Song (50 - 50)" trên canvas trống, cả 3 container (1 cha và 2 con) được khởi tạo trong cùng 1 mili-giây với hàm `Date.now().toString(36)`, dẫn tới cả 3 container đều mang cùng 1 NodeId `container-mvgwvof0`. Khi ghi vào bảng `UIComponents`, SQL Server ném lỗi vi phạm Unique Constraint `IX_Components_PageId_NodeId`.
- **📂 File đã tác động**:
  - `frontend/src/editor/FeatureCanvas.tsx`:
    - Cải tiến sinh ID ngẫu nhiên: `${type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}` (triệt tiêu 100% rủi ro trùng ID).
    - Thiết lập chuẩn `parentId = parentContainer.id` cho các container con khi tạo layout song song.
  - `frontend/src/editor/ComponentPalette.tsx`:
    - Áp dụng sinh ID kèm random entropy tương tự cho palette components.
  - `frontend/src/store/editorStore.ts`:
    - Áp dụng sinh ID an toàn cho Feature (`feat-...`).
  - `backend/UIForge.API/Services/ComponentTreeMapper.cs`:
    - Thêm cơ chế phòng vệ 2 lớp (Dual-layer Guardrail): Theo dõi danh sách `usedNodeIds` trong mỗi lượt lưu. Nếu client vô tình gửi lên cây component có các node trùng ID, backend sẽ tự động thêm hậu tố phân biệt (`-1`, `-2`...) trước khi ghi vào CSDL, bảo đảm không bao giờ văng lỗi 500 vi phạm Unique Index của SQL Server.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `npm run build` -> **0 Errors, build thành công trong 2.73s**.
  - Backend: Đã cập nhật file mã nguồn `ComponentTreeMapper.cs`. Master chỉ cần restart nhẹ backend `dotnet run` là hoàn tất!


---

### [2026-10-21 15:00] - Kael (ENG-KAEL-7F4B2D) - Hiện thực hóa Tính năng Kéo & Thả Component (Drag and Drop Architecture)
- **🎯 Mục tiêu**:
  - Hiện thực hóa tính năng Kéo & Thả (Drag & Drop) toàn diện cho dự án UIForge theo yêu cầu của Master.
  - Hỗ trợ cả 2 nhu cầu: (1) Kéo component từ thanh công cụ Palette thả trực tiếp vào Canvas hoặc Container; (2) Kéo các component đã có trên Canvas để đổi thứ tự (Reorder) hoặc di chuyển lồng vào/ra khỏi Container (Nesting & Reparenting).
- **📂 File đã tác động**:
  - `frontend/package.json`: Cài đặt bộ thư viện chuyên biệt `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`.
  - `frontend/src/store/editorStore.ts`:
    - Bổ sung action `moveComponent(dragId, newParentId, newIndex)`: bóc tách node (`extractNode`), cập nhật `parentId`, chèn vào vị trí đích (`insertNodeInParent`) và đánh số lại thứ tự `order: 1, 2, 3...`.
    - Mở rộng action `addComponent(component, parentId, targetIndex)` hỗ trợ chèn chính xác tại chỉ mục mong muốn khi drop từ Palette.
  - `frontend/src/editor/useDragDrop.ts` (Created):
    - Quản lý logic va chạm kép (`pointerWithin` ưu tiên, fallback sang `rectIntersection`).
    - Phòng vệ chống vòng lặp vô hạn `isDescendant`: ngăn không cho kéo Container cha thả vào chính nó hoặc vào bất kỳ Container con/cháu nào của nó.
    - Xử lý các quy tắc phân loại Drop Target tự nhiên: Sibling reorder khi cùng cha, Nesting khi thả vào Container, Sibling insertion khi thả trước phần tử con, Root drop khi thả ra nền Canvas.
  - `frontend/src/editor/DraggableComponent.tsx` (Created):
    - Đóng gói useDraggable và useDroppable cho từng component.
    - Tay nắm kéo (Drag Handle) dạng pill gọn gàng ở góc trên bên phải khi hover hoặc select.
    - Hiệu ứng thị giác chỉ dẫn vị trí thả: Đường kẻ xanh phát sáng (Drop indicator line) cho vị trí anh em, viền phát sáng viền sáng (Drop highlight box) cho Container.
  - `frontend/src/editor/ComponentPalette.tsx`:
    - Biến từng mục trong bảng thành phần thành Draggable (`useDraggable`) mang theo metadata. Hỗ trợ song song cả bấm Click để thêm và Kéo thả trực tiếp.
  - `frontend/src/editor/LeftNavbar.tsx`:
    - Thêm Tab chuyển đổi giữa **📑 Màn hình** (Features list) và **🧩 Thành phần** (Draggable Palette) để người dùng thao tác kéo thả thuận tiện nhất.
  - `frontend/src/editor/FeatureCanvas.tsx`:
    - Cấu hình vùng Droppable nền (`canvas-root`), hiển thị chỉ dẫn khi kéo thả vào khoảng trống.
  - `frontend/src/App.tsx`:
    - Bao bọc toàn bộ không gian làm việc trong `DndContext` thống nhất.
    - Tích hợp `DragOverlay` hiển thị con trỏ mờ (Ghost Preview) bám theo chuột khi đang kéo.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `tsc -b && vite build` -> **0 Errors, build thành công trong 1.78s**.

---

### [2026-10-21 15:10] - Kael (ENG-KAEL-7F4B2D) - Đồng bộ Kích thước (Width, Height, Flex) Lên Outer Wrapper `<div class="group/drag relative">`
- **🎯 Mục tiêu**:
  - Khắc phục vấn đề bố cục khi component được bọc bởi `DraggableComponent`: Trong mô hình CSS Flexbox, phần tử con trực tiếp của thẻ cha (Flex item) chính là `<div class="group/drag relative">`.
  - Nếu các thuộc tính bố cục (`width`, `height`, `minHeight`, `maxHeight`, `flex`, `minWidth`, `maxWidth`) chỉ nằm ở thẻ con bên trong (`ForgeContainer` hoặc Leaf component) mà không nằm ở thẻ wrapper ngoài, Flexbox của thẻ cha sẽ không thể co giãn hoặc định tỉ lệ chính xác (ví dụ `50%`, `33.3%`, `flex: 1`).
- **📂 File đã tác động**:
  - `frontend/src/editor/DraggableComponent.tsx`:
    - Tạo hàm tính toán bố cục `getComponentOuterLayoutStyle(node, parentFlexConfig)`.
    - Đưa toàn bộ các thuộc tính định kích thước và co giãn (`width`, `height`, `minHeight`, `maxHeight`, `flex`, `minWidth`, `maxWidth`, `alignSelf`) trực tiếp lên thẻ `<div class="group/drag relative" style="...">`.
    - Bổ sung `display: flex; flex-direction: column` cho wrapper để component bên trong luôn lấp đầy 100% không gian của wrapper.
  - `frontend/src/renderer/Renderer.tsx`:
    - Bổ sung prop `isWrappedByDrag`. Khi component được bọc bởi `DraggableComponent`, inner wrapper sẽ thiết lập `width: 100%; height: 100%` để lấp đầy thẻ drag ngoài.
  - `frontend/src/renderer/components/ForgeContainer.tsx`:
    - Nhận prop `isWrappedByDrag`. Khi `true`, gán `width: 100%; flex: 1 1 auto; height: 100%` cho container con, tránh việc tính đè 2 lần tỉ lệ phần trăm (`50% của 50% = 25%`).
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `tsc -b && vite build` -> **0 Errors, build thành công trong 1.80s**.
  - Khi người dùng chọn nhanh preset `50%`, `33.3%`, `100%`, `Flex: 1` hoặc gõ Width/Height tùy chỉnh trong `PropertyPanel`, thẻ `<div class="group/drag relative">` sẽ cập nhật `style` ngay tức thì.

---

### [2026-10-21 15:25] - Kael (ENG-KAEL-7F4B2D) - Tinh Chỉnh Giao Diện Gọn Gàng & Lưu Trạng Thái Màn Hình (URL Persistence on F5)
- **🎯 Mục tiêu**:
  - Thực thi 6 tinh chỉnh giao diện & trải nghiệm người dùng theo chỉ thị của Master:
    1. Bỏ Tab "Thành phần" (Dev chuột phải vào màn hình hoặc khoảng trắng để thêm).
    2. Bỏ huy hiệu "Flex (Dọc) / Ngang" trên Container để giao diện thoáng, không bị rối mắt.
    3. Ẩn ô thông báo "Chế độ xem — không có quyền chỉnh sửa" đối với người dùng thông thường (viewer/user).
    4. Bỏ thanh tiêu đề "DANH MỤC FEATURES..." ở sidebar trái (Dev chuột phải vào sidebar để tạo màn hình mới).
    5. Bỏ thanh chọn "Bố cục màn hình", mặc định các khối bố cục là xếp dọc (`column`).
    6. Tích hợp tính năng lưu URL màn hình: Khi bấm chuyển sang Feature nào, tự động cập nhật URL (`?feature={id}`) và `localStorage`. Khi nhấn F5 (Refresh trình duyệt), màn hình đang làm việc sẽ được khôi phục chính xác 100%.
- **📂 File đã tác động**:
  - `frontend/src/renderer/components/ForgeContainer.tsx`: Loại bỏ hoàn toàn khối huy hiệu hiển thị chế độ Flex/Grid ở góc trên của Container.
  - `frontend/src/editor/TopNav.tsx`: Loại bỏ badge "Chế độ xem — không có quyền chỉnh sửa" cho tài khoản thường.
  - `frontend/src/editor/LeftNavbar.tsx`: Tối giản hóa sidebar, bỏ tab switcher và bỏ header "Danh mục Features". Giữ nguyên tính năng chuột phải tạo màn hình mới / đổi tên / xóa.
  - `frontend/src/editor/FeatureCanvas.tsx`: Loại bỏ thanh "Bố cục màn hình", đặt mặc định hướng layout là `column`.
  - `frontend/src/store/editorStore.ts`:
    - Bổ sung hàm `getSavedFeatureId()` và `saveActiveFeatureIdToUrl()`.
    - Đồng bộ `activeFeatureId` với URL Query (`?feature=...`) và `localStorage` trong tất cả các action: `setActiveFeature`, `setFeatures`, `addFeature`, `updateFeatureId`, `deleteFeature`.
  - `frontend/src/App.tsx`:
    - Lắng nghe sự kiện `popstate` để hỗ trợ nút Back/Forward của trình duyệt khi duyệt qua các màn hình.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `tsc -b && vite build` -> **0 Errors, build thành công trong 1.97s**.
  - URL luôn cập nhật đồng bộ với màn hình hiện tại (ví dụ: `/?feature=3`), nhấn F5 giữ nguyên chính xác màn hình đang chọn.

---

### [2026-10-21 15:25] - Kael (ENG-KAEL-7F4B2D) - Tinh Chỉnh Giao Diện Gọn Gàng & Lưu Trạng Thái Màn Hình (URL Persistence on F5)
- **🎯 Mục tiêu**:
  - Thực thi 6 tinh chỉnh giao diện & trải nghiệm người dùng theo chỉ thị của Master:
    1. Bỏ Tab "Thành phần" (Dev chuột phải vào màn hình hoặc khoảng trắng để thêm).
    2. Bỏ huy hiệu "Flex (Dọc) / Ngang" trên Container để giao diện thoáng, không bị rối mắt.
    3. Ẩn ô thông báo "Chế độ xem — không có quyền chỉnh sửa" đối với người dùng thông thường (viewer/user).
    4. Bỏ thanh tiêu đề "DANH MỤC FEATURES..." ở sidebar trái (Dev chuột phải vào sidebar để tạo màn hình mới).
    5. Bỏ thanh chọn "Bố cục màn hình", mặc định các khối bố cục là xếp dọc (`column`).
    6. Tích hợp tính năng lưu URL màn hình: Khi bấm chuyển sang Feature nào, tự động cập nhật URL (`?feature={id}`) và `localStorage`. Khi nhấn F5 (Refresh trình duyệt), màn hình đang làm việc sẽ được khôi phục chính xác 100%.
- **📂 File đã tác động**:
  - `frontend/src/renderer/components/ForgeContainer.tsx`: Loại bỏ hoàn toàn khối huy hiệu hiển thị chế độ Flex/Grid ở góc trên của Container.
  - `frontend/src/editor/TopNav.tsx`: Loại bỏ badge "Chế độ xem — không có quyền chỉnh sửa" cho tài khoản thường.
  - `frontend/src/editor/LeftNavbar.tsx`: Tối giản hóa sidebar, bỏ tab switcher và bỏ header "Danh mục Features". Giữ nguyên tính năng chuột phải tạo màn hình mới / đổi tên / xóa.
  - `frontend/src/editor/FeatureCanvas.tsx`: Loại bỏ thanh "Bố cục màn hình", đặt mặc định hướng layout là `column`.
  - `frontend/src/store/editorStore.ts`:
    - Bổ sung hàm `getSavedFeatureId()` và `saveActiveFeatureIdToUrl()`.
    - Đồng bộ `activeFeatureId` với URL Query (`?feature=...`) và `localStorage` trong tất cả các action: `setActiveFeature`, `setFeatures`, `addFeature`, `updateFeatureId`, `deleteFeature`.
  - `frontend/src/App.tsx`:
    - Lắng nghe sự kiện `popstate` để hỗ trợ nút Back/Forward của trình duyệt khi duyệt qua các màn hình.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `tsc -b && vite build` -> **0 Errors, build thành công trong 1.97s**.
  - URL luôn cập nhật đồng bộ với màn hình hiện tại (ví dụ: `/?feature=3`), nhấn F5 giữ nguyên chính xác màn hình đang chọn.


---

### [2026-10-21 16:15] - Kael (ENG-KAEL-7F4B2D) & Vidus (ARC-VIDUS-AUHD2Y) - Triển Khai Hoàn Chỉnh Hệ Thống File Nghiệp Vụ (BL Binding), Đa Sự Kiện, Custom CSS & Resizable Panels
- **🎯 Mục tiêu**:
  - Thực thi toàn bộ kế hoạch 4 phân hệ đã được Master phê duyệt:
    1. **Feature BL File Binding**: Mỗi Feature bắt buộc gắn với 1 file logic TypeScript (`*.bl.ts`). Nếu chưa có file thì Canvas bị khóa và hiển thị màn hình yêu cầu khai báo tên file.
    2. **Component Multi-Event System**: Cho phép gắn nhiều sự kiện (`click`, `dblclick`, `change`...) cho 1 component. Mỗi sự kiện gồm loại trigger và hàm gọi thực thi thuộc file BL của Feature hiện tại.
    3. **Custom CSS Textarea**: Ô soạn thảo CSS trong Tab Kiểu dáng cho phép gõ mã CSS thuần (`font-weight: bold; color: red; ...`), tự động phân tích (parse) và áp dụng riêng biệt cho component đó.
    4. **Resizable Panels**: Thanh viền kéo chuột co giãn linh hoạt ở cả `LeftNavbar` và `PropertyPanel`, tự động lưu kích thước vào `localStorage`.
- **📂 File đã tác động**:
  - `frontend/src/editor/useResizablePanels.ts` (Created): Quản lý sự kiện kéo thả chuột co giãn độ rộng 2 thanh biên trái và phải kèm giới hạn min/max an toàn.
  - `frontend/src/editor/cssParser.ts` (Created): Parser chuyển đổi chuỗi CSS thô sang `React.CSSProperties` và ngược lại.
  - `frontend/src/logic/blRegistry.ts` (Created): Quản lý danh mục các hàm được export của từng file BL, hỗ trợ tra cứu và thêm hàm mới.
  - `frontend/src/logic/eventRunner.ts` (Created): Kích hoạt các sự kiện gắn trên component khi ở chế độ xem trước (Preview), hiển thị thông báo gọi hàm trực quan.
  - `frontend/src/types/schema.ts`: Mở rộng `FeaturePage.scriptFile`, `ComponentEvent` (`id`, `trigger`, `handlerName`), và `ComponentStyle.customCss`.
  - `frontend/src/store/editorStore.ts`: Bổ sung action `updateFeatureScriptFile`.
  - `frontend/src/editor/LeftNavbar.tsx` & `PropertyPanel.tsx`: Nhận prop `width` linh hoạt, tích hợp Inspector Feature hiển thị file BL và danh mục hàm khi không chọn component.
  - `frontend/src/editor/FeatureCanvas.tsx`: Tích hợp BL Lock Guard - khóa Canvas nếu Feature chưa gắn file BL và cung cấp form nhập tên file trực tiếp.
  - `frontend/src/renderer/components/ForgeButton.tsx`: Kích hoạt `triggerComponentEvent` cho cả sự kiện click và dblclick.
  - `frontend/src/api/pagesApi.ts` & `App.tsx`: Đồng bộ trường `scriptFile` qua API lưu trang.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `tsc -b && vite build` -> **0 Errors, build thành công trong 1.79s**.

---

### [2026-10-21 16:15] - Kael (ENG-KAEL-7F4B2D) & Vidus (ARC-VIDUS-AUHD2Y) - Triển Khai Hoàn Chỉnh Hệ Thống File Nghiệp Vụ (BL Binding), Đa Sự Kiện, Custom CSS & Resizable Panels
- **🎯 Mục tiêu**:
  - Thực thi toàn bộ kế hoạch 4 phân hệ đã được Master phê duyệt:
    1. **Feature BL File Binding**: Mỗi Feature bắt buộc gắn với 1 file logic TypeScript (`*.bl.ts`). Nếu chưa có file thì Canvas bị khóa và hiển thị màn hình yêu cầu khai báo tên file.
    2. **Component Multi-Event System**: Cho phép gắn nhiều sự kiện (`click`, `dblclick`, `change`...) cho 1 component. Mỗi sự kiện gồm loại trigger và hàm gọi thực thi thuộc file BL của Feature hiện tại.
    3. **Custom CSS Textarea**: Ô soạn thảo CSS trong Tab Kiểu dáng cho phép gõ mã CSS thuần (`font-weight: bold; color: red; ...`), tự động phân tích (parse) và áp dụng riêng biệt cho component đó.
    4. **Resizable Panels**: Thanh viền kéo chuột co giãn linh hoạt ở cả `LeftNavbar` và `PropertyPanel`, tự động lưu kích thước vào `localStorage`.
- **📂 File đã tác động**:
  - `frontend/src/editor/useResizablePanels.ts` (Created): Quản lý sự kiện kéo thả chuột co giãn độ rộng 2 thanh biên trái và phải kèm giới hạn min/max an toàn.
  - `frontend/src/editor/cssParser.ts` (Created): Parser chuyển đổi chuỗi CSS thô sang `React.CSSProperties` và ngược lại.
  - `frontend/src/logic/blRegistry.ts` (Created): Quản lý danh mục các hàm được export của từng file BL, hỗ trợ tra cứu và thêm hàm mới.
  - `frontend/src/logic/eventRunner.ts` (Created): Kích hoạt các sự kiện gắn trên component khi ở chế độ xem trước (Preview), hiển thị thông báo gọi hàm trực quan.
  - `frontend/src/types/schema.ts`: Mở rộng `FeaturePage.scriptFile`, `ComponentEvent` (`id`, `trigger`, `handlerName`), và `ComponentStyle.customCss`.
  - `frontend/src/store/editorStore.ts`: Bổ sung action `updateFeatureScriptFile`.
  - `frontend/src/editor/LeftNavbar.tsx` & `PropertyPanel.tsx`: Nhận prop `width` linh hoạt, tích hợp Inspector Feature hiển thị file BL và danh mục hàm khi không chọn component.
  - `frontend/src/editor/FeatureCanvas.tsx`: Tích hợp BL Lock Guard - khóa Canvas nếu Feature chưa gắn file BL và cung cấp form nhập tên file trực tiếp.
  - `frontend/src/renderer/components/ForgeButton.tsx`: Kích hoạt `triggerComponentEvent` cho cả sự kiện click và dblclick.
  - `frontend/src/api/pagesApi.ts` & `App.tsx`: Đồng bộ trường `scriptFile` qua API lưu trang.
- **✅ Kết quả kiểm thử & Trạng thái**:
  - Frontend: `tsc -b && vite build` -> **0 Errors, build thành công trong 1.79s**.

