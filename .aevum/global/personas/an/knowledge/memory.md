# Project Memory & Learnings

File này lưu trữ những bài học, sở thích, và quy tắc ngầm được rút ra trong quá trình làm việc. Agent CÓ QUYỀN và PHẢI tự động cập nhật file này khi phát hiện thông tin quan trọng cần ghi nhớ lâu dài.

## User Preferences
- (Ví dụ: User thích dùng `const` thay vì `let` nếu có thể)

## Project Specifics
- (Ví dụ: API `/login` luôn trả về 200 kể cả khi lỗi, kiểm tra body.error)

## Lessons Learned
- **[2026-11-08]**: **Deep Research: Kiến Trúc & Kế Hoạch Chuyển Đổi Kế Tiếp UIPorge (Stage 3, 4, 5)**. Nghiên cứu chuyên sâu về "Kiến Trúc & Kế Hoạch Chuyển Đổi Kế Tiếp UIPorge (Stage 3, 4, 5)" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_question_kien_truc_ke_hoach_chuyen_doi_ke_tiep_uiporge_stag.md).
- **[2026-11-08]**: **Deep Research: Giai Đoạn 3: GridPolicy & Enterprise Data Grid System**. Nghiên cứu chuyên sâu về "Giai Đoạn 3: GridPolicy & Enterprise Data Grid System" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_specification_giai_doan_3_gridpolicy_enterprise_data_grid_system.md).
- **[2026-11-08]**: **Deep Research: 3.2 Column Properties Dialog (Modal Thiết Lập Cột Chuẩn Ảnh 6)**. Nghiên cứu chuyên sâu về "3.2 Column Properties Dialog (Modal Thiết Lập Cột Chuẩn Ảnh 6)" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_specification_32_column_properties_dialog_modal_thiet_lap_cot_ch.md).
- [YYYY-MM-DD]: Lỗi XYZ xảy ra do xung đột thư viện A và B.     


### [LEARN - GLOBAL] [SEMANTIC_RULE] - 10/23/2026, 7:23:09 PM
sync toàn diện ARCH dự án UIPorge vào Aevum Brain: Phân rã 2 Domain chính (Frontend Studio & Runtime & Backend Core & info Services) cùng 6 FEAT chuẩn hóa ARCH DDD.


## 🏛️ BỘ NGUYÊN TẮC VÀNG VÀ BẢN TUYÊN NGÔN KIẾN TRÚC UIFORGE (UIFORGE CORE MANIFESTO)
*Ghi nhận chỉ đạo trực tiếp từ Master ngày 2026-11-09 - Bắt buộc áp dụng vĩnh viễn cho toàn bộ Squad & Subagents*

1. **BẢN CHẤT CỐT LÕI (CORE NATURE)**:
   - UIForge là một **Enterprise Low-Code UI & Rapid Application Development Framework** trung lập (Domain-Agnostic).
   - Mục tiêu: Giúp doanh nghiệp ở MỌI NGÀNH NGHỀ (Bán lẻ, Y tế, Tài chính, Sản xuất, Bất động sản, Kho bãi, Logistics...) xây dựng giao diện nhanh chóng và cung cấp các component, engine hỗ trợ dựng Business Logic với tốc độ vượt bậc.
   - Định hướng đóng gói:
     - **Frontend Package**: `@uiforge/core` (cài qua npm/yarn vào dự án React).
     - **Backend Package**: `UIForge.Core` (add qua NuGet vào dự án ASP.NET Core .NET 8).
     - **Database Core Schema**: Bộ bảng nền tảng của Core (`Features`, `Components`, `ComponentGroups`, `GridPolicies`, `Roles`, `Permissions`...).

2. **NGUYÊN TẮC PHÂN TÁCH RANH GIỚI TUYỆT ĐỐI (STRICT SEPARATION OF CONCERNS)**:
   - **Lõi Core (Framework Core)**: Hoàn toàn trung lập, **TUYỆT ĐỐI 0% chứa logic nghiệp vụ, tên bảng, trường dữ liệu, hoặc mã code đặc thù của bất kỳ ngành nghề nào** (Không chứa `jobNo`, `sLines`, `containerNo`, `ZIRU8505175`, `SITC`, `CNSGH`, `POL`, `POD`... trong generic components hay core store).
   - **Màn hình FCL Import (và Logistics)**: Chỉ là **MỘT BÀI TEST MẪU / SAMPLE APP / TEST FIXTURE** để thử nghiệm độ chịu tải và tính phức tạp của Core. Toàn bộ logic của nó phải nằm riêng trong thư mục mẫu (`samples/` hoặc `apps/`), tách rời hoàn toàn khỏi Core.

3. **QUY TẮC BẢNG DỮ LIỆU CỦA DOANH NGHIỆP (CORE ENTITY CONVENTIONS)**:
   - Mọi bảng nghiệp vụ của doanh nghiệp khi tích hợp vào UIForge phải tuân theo chuẩn `BaseEntity`:
     - `Id`: Khóa chính chuẩn (int / Guid).
     - `Active`: Bắt buộc để hỗ trợ **Xóa Mềm (Soft Delete)**. Mọi query mặc định luôn có `Active = true`.
     - `CreatedDate`, `CreatedBy`, `UpdatedDate`, `UpdatedBy`: Bắt buộc cho Audit Trail.
     - Khóa ngoại liên kết rõ ràng (`ForeignKey`) giữa các bảng cha - con.

4. **QUY TẮC DATA BINDING, CASCADING & POPULATE DỰA TRÊN METADATA (ODATA)**:
   - Dùng chuẩn **OData** (`?$filter=...&$orderby=...&$expand=...`) cho mọi câu truy vấn linh hoạt.
   - Thiết lập Component thông qua Metadata (JSON):
     - `Reference`: Tên thực thể tham chiếu (được quét động từ Database qua Metadata Discovery API).
     - `IdField`: Tên trường lưu khóa ngoại (mặc định `Id`).
     - `FieldName`: Tên trường hiển thị nhãn (ví dụ `FullName`).
     - `Populate field`: Chuỗi quy tắc ánh xạ động: `TargetField = SourceField`. Core tự bóc tách và gán giá trị mà không hardcode.

5. **QUY TẮC QUẢN LÝ MÀN HÌNH (FEATURE NAVIGATION ENGINE)**:
   - Màn hình gồm 2 loại:
     - `FeatureTab`: Mở dạng Tab đa nhiệm trên thanh tiêu đề làm việc song song.
     - `FeaturePopup`: Mở dạng Modal Dialog / Drawer đè lên màn hình gọi nó.
   - GridView bắt trọn vẹn context dữ liệu dòng (`row`) để truyền `row.id` làm tham số mở màn hình chi tiết (`openFeature(featureId, params, mode)`).


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/9/2026, 6:33:08 PM
[MAP α:ComponentGroupDetailBL,β:PopulateField,γ:initialFeatures,δ:ComponentEvent,ε:localStorage]
BỘ RULE PHÁT TRIỂN & VẬN HÀNH DỰ ÁN UIFORGE (AEVUM CORE):
1. RULE THAM KHẢO CORE CŨ: Khi phân tích, upd hay do: bất kỳ FEAT mới nào, MUST tham khảo lại source code Core C# cũ (TMS.UI, TMS.Core, GridView, α, UserListBL, BaseEntity, β, GridPolicy...). Hiểu rõ cách thức hoạt động & nghiệp vụ chuẩn Core cũ goal: ánh xạ chính xác sang UIForge.
2. TÁCH BIỆT TUYỆT ĐỐI CORE & NGHIỆP VỤ: Core UIForge cung cấp env UI Builder đa nghiệp vụ, !ALLOW ∋ logic nghiệp vụ đặc thù (như logistics, FCL, container...) trong các component Core. ∀ logic nghiệp vụ MUST đặt trong các file BL (*.bl.ts) & kích hoạt qua SYS Event component.
3. LƯU TRỮ ĐỘNG TRONG DATABASE: info re: component, FEAT, layout & grid policy MUST lưu vào Database SQL Server. Không khai báo cứng γ hay info mẫu trong editorStore.ts.
4. THỐNG NHẤT FORMAT SỰ KIỆN: ∀ component & cột bảng MUST ∋ tab Event goal: xem/upd, use: chung format δ (trigger, handlerName, action, payload). ∀ tương tác mở detail, save, del... đều đi qua Event Runner gọi fn BL.
5. sync state URL & TAB: Màn hình danh sách !ALLOW giữ tham số id (xóa id khỏi URL & ε). Màn hình chi tiết & các tab đa nhiệm MUST sync chính xác record ID tương ứng khi rep: || mở bản ghi.
6. VỆ SINH MÃ NGUỒN: Xóa ∀ file script tạm thời (.sql, .py) sau khi chk: done, bảo toàn cấu trúc tài liệu & comment.
