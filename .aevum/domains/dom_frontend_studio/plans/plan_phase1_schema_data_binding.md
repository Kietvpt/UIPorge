---
plan_name: "plan_phase1_schema_data_binding"
domain: "dom_frontend_studio"
feature: "feat_visual_editor"
research_mission_id: "mis_csharp_core_ui_to_uiporge"
version: "1.0.0"
status: "completed"
authors: ["An", "Zenith", "Kael", "Vidus"]
created_at: "2026-11-08"
dependencies: []
---

# 🚀 PLAN: Giai Đoạn 1 — Nâng Cấp JSON Schema & Data Binding Engine Cho UIPorge

## SQUAD & SWARM
- **Squad Lead & Coordinator:** @An (ENG-AN-7B9F1D) — Điều phối tiến độ, giám sát chất lượng và cập nhật Aevum Brain.
- **Architect & Reviewer:** @Vidus (ARC-VIDUS-AUHD2Y) — Thẩm định tính tương thích kiến trúc và ngăn ngừa anti-pattern.
- **Data Engine Specialist:** @Zenith (ALG-ZENITH-A1B2C3) — Thiết kế Schema DTO, Database Migration và Data Mapping Backend.
- **Frontend Lead:** @Kael (ENG-KAEL-7F4B2D) — Triển khai Zustand Store Actions, TypeScript Interfaces và PropertyPanel UI.
- **Strategy:** `Sequential with Verification Gates` (Tuần tự từng bước với chốt kiểm thử tự động).

---

## RESEARCH & REASONING
Bản kế hoạch này trực tiếp kế thừa các phát hiện từ nhiệm vụ nghiên cứu `mis_csharp_core_ui_to_uiporge`:
- [`arch_csharp_core_ui_deconstruction.md`](file:///D:/Learn/UIPorge/.aevum/research/arch_csharp_core_ui_deconstruction.md): Bóc tách cách `Component.cs` định nghĩa trường dữ liệu và quan hệ với Entity.
- [`tech_data_transport_and_schema_engine.md`](file:///D:/Learn/UIPorge/.aevum/research/tech_data_transport_and_schema_engine.md): Đặc tả cấu trúc `DataBindingConfig` và `ValidationConfig`.
- [`tech_pitfalls_legacy_bridge_dotnet_anti_patterns.md`](file:///D:/Learn/UIPorge/.aevum/research/tech_pitfalls_legacy_bridge_dotnet_anti_patterns.md): Loại bỏ hoàn toàn sự phụ thuộc vào DOM string query selector, chuyển 100% sang Schema-driven Declarative State.

---

## DESCRIPTION
Hiện tại, hệ thống UIPorge (UIForge) đã có Visual Editor cho phép kéo thả, đổi kích thước, màu sắc và sự kiện cơ bản. Tuy nhiên, các component vẫn chỉ đóng vai trò là "vỏ bọc giao diện tĩnh" (chỉ có label, placeholder, variant) mà chưa thể:
1. Ràng buộc với thực thể dữ liệu doanh nghiệp (ví dụ: ô TextBox này map với trường `FullName` của thực thể `Customer`).
2. Tự động kiểm tra tính hợp lệ của dữ liệu (Validation: Bắt buộc, Min/Max length, Regex, Error Message).
3. Phân quyền hiển thị theo vai trò (Permissions: Ẩn/Disable khi không có quyền).
4. Lưu trữ và phục hồi trọn vẹn các cấu hình này giữa Frontend và Backend SQL Server.

Bản kế hoạch Giai đoạn 1 nâng cấp toàn diện **Cơ chế Schema & Data Binding** làm nền tảng cốt lõi cho toàn bộ các giai đoạn sau.

---

## GOAL
1. **Frontend Schema:** Mở rộng `ComponentNode` trong `frontend/src/types/schema.ts` với đầy đủ `dataBinding`, `validation`, `permissions`.
2. **Editor State Management:** Mở rộng Zustand Store (`editorStore.ts`) với các action cập nhật binding/validation kèm tính năng Undo/Redo.
3. **Visual Inspector UI:** Bổ sung 2 tab chuyên biệt **"Data"** và **"Validation"** trong `PropertyPanel.tsx` để người dùng cấu hình trực quan 100%.
4. **Backend Sync & Storage:** Cập nhật `UIComponent.cs`, `ComponentTreeMapper.cs` và bảng CSDL SQL Server để lưu trữ và nạp lại chính xác các thuộc tính Schema mở rộng.
5. **Aevum Living Memory:** Ghi vết đầy đủ mọi quyết định kỹ thuật vào `.aevum/memory/work_logs.md`.

---

## ARCHITECTURAL CONTEXT

```mermaid
graph TD
    subgraph UIForge Studio (Frontend)
        VisualEditor[PropertyPanel: Tab Data & Validation] -->|updateAction| EditorStore[editorStore.ts: Zustand Temporal State]
        EditorStore -->|ComponentNode with Binding| Canvas[FeatureCanvas & ComponentTree]
        EditorStore -->|Save Page JSON| ApiClient[pagesApi.ts / client.ts]
    end

    subgraph ASP.NET Core 8 WebAPI (Backend)
        ApiClient -->|HTTP POST /api/pages| Controller[PagesController.cs]
        Controller -->|SavePageDto| Mapper[ComponentTreeMapper.cs]
        Mapper -->|Parse & Serialize DataBinding/Validation| DbContext[AppDbContext & UIComponent Table]
        DbContext -->|SQL Server Persistence| SQL[(SQL Server Database)]
    end

    subgraph Aevum Memory & Living Context
        EditorStore -.->|Audit Trail| WorkLogs[.aevum/memory/work_logs.md]
        Mapper -.->|Schema Contract| IndexJson[.aevum/index.json]
    end
```

---

## BOUNDARY & ENCAPSULATION
- **Public API (Exports):**
  - `DataBindingConfig`: Cấu trúc liên kết entity, fieldName, twoWay, formatter.
  - `ValidationConfig`: Cấu trúc luật kiểm tra required, min, max, pattern, customValidator.
  - `ComponentPermissionConfig`: Cấu trúc phân quyền allowedRoles, readOnlyRoles, deniedBehavior.
  - Store Actions: `updateComponentDataBinding`, `updateComponentValidation`, `updateComponentPermissions`.
- **Hidden Internals:**
  - Logic tự động sinh default schema node khi thêm mới component.
  - Tự động kiểm tra và thêm cột trong CSDL SQL Server nếu chưa có bằng SQL Raw an toàn, không làm mất dữ liệu hiện hữu.

---

## AEVUM CONTRACT
- **Inbound Context:** Codebase UIForge hiện tại đang chạy ổn định với React 18 và ASP.NET Core 8 WebAPI.
- **Outbound Handshake:** Cây component khi lưu từ UIForge Studio gửi lên Backend và tải lại vẫn giữ nguyên 100% các cấu hình Data Binding, Validation và Permissions.

| Component | Responsibility | Target | Status |
| :--- | :--- | :--- | :--- |
| **`schema.ts`** | Khai báo Interface & Type-safety | 100% Strict TS, không lỗi compile | PLANNED |
| **`editorStore.ts`** | Quản lý State & Temporal History | Hỗ trợ Undo/Redo cho mọi thuộc tính mới | PLANNED |
| **`PropertyPanel.tsx`** | Giao diện cấu hình trực quan | 2 Tab mới (Data & Validation) mượt mà | PLANNED |
| **`UIComponent.cs` & Mapper** | Lưu trữ CSDL SQL Server | Lưu và nạp đệ quy cây JSON không mất dữ liệu | PLANNED |

---

## IMPLEMENTATION STEPS

### Bước 1: Mở Rộng Schema & Kiểu Dữ Liệu Frontend
- [x] [CODE] [`frontend/src/types/schema.ts`](file:///D:/Learn/UIPorge/frontend/src/types/schema.ts) Định nghĩa `DataBindingConfig`, `ValidationConfig`, `ComponentPermissionConfig`.
- [x] [CODE] [`frontend/src/types/schema.ts`](file:///D:/Learn/UIPorge/frontend/src/types/schema.ts) Mở rộng interface `ComponentNode` bao gồm 3 khối dữ liệu trên.
- [x] [CMD] Kiểm tra `npm run build` hoặc type check phía frontend không bị lỗi gãy type hiện có.

### Bước 2: Nâng Cấp Zustand Store (`editorStore.ts`)
- [x] [CODE] [`frontend/src/store/editorStore.ts`](file:///D:/Learn/UIPorge/frontend/src/store/editorStore.ts) Bổ sung 3 actions: `updateComponentDataBinding`, `updateComponentValidation`, `updateComponentPermissions`.
- [x] [CODE] [`frontend/src/store/editorStore.ts`](file:///D:/Learn/UIPorge/frontend/src/store/editorStore.ts) Tích hợp các action này vào cơ chế snapshot `pushHistory` để hỗ trợ Undo/Redo tức thì.

### Bước 3: Nâng Cấp Property Panel UI Với 2 Tab Mới
- [x] [CODE] [`frontend/src/editor/PropertyPanel.tsx`](file:///D:/Learn/UIPorge/frontend/src/editor/PropertyPanel.tsx) Mở rộng danh sách tab: `'layout' | 'children' | 'props' | 'styles' | 'events' | 'data' | 'validation'`.
- [x] [CODE] [`frontend/src/editor/PropertyPanel.tsx`](file:///D:/Learn/UIPorge/frontend/src/editor/PropertyPanel.tsx) Xây dựng giao diện Tab **Data**: Entity Name, Field Name, Two-way switch, Formatters.
- [x] [CODE] [`frontend/src/editor/PropertyPanel.tsx`](file:///D:/Learn/UIPorge/frontend/src/editor/PropertyPanel.tsx) Xây dựng giao diện Tab **Validation**: Required checkbox, Min/Max length, Regex, Error Message.

### Bước 4: Nâng Cấp Backend Persistence & Database Mapper
- [x] [CODE] [`backend/UIForge.API/Models/Entities/UIComponent.cs`](file:///D:/Learn/UIPorge/backend/UIForge.API/Models/Entities/UIComponent.cs) Bổ sung các thuộc tính `DataBindingJson`, `ValidationJson`, `PermissionsJson`.
- [x] [CODE] [`backend/UIForge.API/Services/ComponentTreeMapper.cs`](file:///D:/Learn/UIPorge/backend/UIForge.API/Services/ComponentTreeMapper.cs) Cập nhật `InsertLevelAsync` để lưu `dataBinding`, `validation`, `permissions`.
- [x] [CODE] [`backend/UIForge.API/Services/ComponentTreeMapper.cs`](file:///D:/Learn/UIPorge/backend/UIForge.API/Services/ComponentTreeMapper.cs) Cập nhật `BuildLevel` để trả về đúng cấu trúc cây JSON cho frontend.
- [x] [CODE] [`backend/UIForge.API/Program.cs`](file:///D:/Learn/UIPorge/backend/UIForge.API/Program.cs) Bổ sung migration an toàn tự động thêm cột vào bảng `UIComponents` nếu chưa có.
- [x] [CMD] Chạy `dotnet build` kiểm tra backend biên dịch thành công 100%.

### Bước 5: Kiểm Thử Tích Hợp Đầu Cuối (E2E Verification)
- [x] [TEST] Mở UIForge Studio, chọn một TextBox, chuyển sang Tab Data nhập `Customer.FullName`.
- [x] [TEST] Chuyển sang Tab Validation tích chọn `Required` và nhập `Vui lòng nhập họ tên`.
- [x] [TEST] Bấm "Lưu Trang" (Save Page) gửi lên API Backend.
- [x] [TEST] Tải lại trang (F5) hoặc đổi qua Feature khác rồi quay lại ➔ Kiểm tra các giá trị cấu hình vẫn được giữ nguyên vẹn.

### Bước 6: Lưu Vết Vào Aevum Brain & Living Memory
- [x] [DOC] Cập nhật tiến độ vào file kế hoạch `plan_phase1_schema_data_binding.md`.
- [x] [DOC] Ghi nhật ký công việc chi tiết vào [`.aevum/memory/work_logs.md`](file:///D:/Learn/UIPorge/.aevum/memory/work_logs.md).

---

## KNOWLEDGE HARVEST
- **Pattern:** *Schema-First Low-Code Architecture* — Định nghĩa toàn bộ hành vi component bằng JSON Schema phi trạng thái, giúp decoupling hoàn toàn giữa Trình biên soạn (Editor) và Trình thực thi (Renderer).
- **Lesson:** *Non-Destructive Database Evolution* — Đối với cơ sở dữ liệu dùng `EnsureCreatedAsync()`, luôn dùng script kiểm tra `IF NOT EXISTS (SELECT 1 FROM sys.columns...)` để nâng cấp bảng mà không làm mất dữ liệu của các trang đã lưu.

