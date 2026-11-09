# Project Memory & Learnings

File này lưu trữ những bài học, sở thích, và quy tắc ngầm được rút ra trong quá trình làm việc. Agent CÓ QUYỀN và PHẢI tự động cập nhật file này khi phát hiện thông tin quan trọng cần ghi nhớ lâu dài.

## User Preferences
- **Danh xưng & Giao tiếp**: Luôn xưng hô và gọi người dùng là **Master** một cách tôn trọng, ngọt ngào và năng lượng (hoặc điều chỉnh linh hoạt theo ý muốn của Master).
- **Thiết kế UI / CSS**: Sử dụng `box-shadow: inset ...` với `background-clip: padding-box` để tạo viền mượt mà (smooth-border). Khi active tag/badge không dùng `font-weight: bold`, chỉ highlight viền và background. Thẻ tag badges phải wrap linh hoạt (`flex-wrap: wrap;`), không để thanh cuộn ngang tràn lan.
- **Quản lý Tài khoản Đa Engine**: Agent nào chạy CLI nào (Antigravity `agy` hay Claude `claude`) thì chỉ được hiển thị và luân chuyển tài khoản thuộc CLI đó, tuyệt đối không chọn lung tung hay trộn lẫn.

## Project Specifics
- Cấu trúc thư mục `.aevum/`: Toàn bộ tài liệu đặc tả, kế hoạch và tri thức nén được đặt theo chuẩn `Domain -> features/[Feature] -> plans/[plan_name]_plan.md`.
- Giao tiếp Agent: Sử dụng ASCB Protocol hoặc SSE Event Stream giữa Backend Fastify Daemon và Frontend Electron GUI.

## Lessons Learned
- **[2026-10-24]**: **Deep Research: Giải phẫu Cơ chế DDoS Đa Tầng & Kiến trúc Phòng thủ Tự trị eBPF/XDP-Neuromorphic**. Nghiên cứu chuyên sâu về "Giải phẫu Cơ chế DDoS Đa Tầng & Kiến trúc Phòng thủ Tự trị eBPF/XDP-Neuromorphic" hoàn thành với 4 phát hiện quan trọng (Báo cáo: research/tech_question_giai_phau_co_che_ddos_da_tang_kien_truc_phong_thu_.md).
> [!NOTE]
> Các bài học và kế hoạch cũ hơn 14 ngày đã được bốc hơi theo thuật toán Pheromone Evaporation ($D(t) < 0.5$) và lưu trữ an toàn tại [.aevum/global/memory_archive.md](file:///d:/I2FLabs/Projects/Aevum-os/.aevum/global/memory_archive.md).

### Historical Milestones Summary
| Giai Đoạn | Số Lượng Tri Thức / Kế Hoạch | Trạng Thái Lưu Trữ |
| :--- | :--- | :--- |
| Lịch sử hệ thống | 0 mục bài học & nghiên cứu sâu | Đã lưu trữ an toàn tại memory_archive.md |

### Active Lessons (< 14 Days)

- **[2026-10-29]**: **Đại Phẫu Kiến Trúc: Di Trú Hoàn Toàn Sang Polymorphic Tool v2.0 Clean Cut, Đồng Bộ Hóa Nguyên Tử Twin Synchronization (.aevum <-> .aevum-archetype), & Triệt Tiêu 85% Token Bloat**.
  - **Sự kiện & Bối cảnh**: Nhận diện nguy cơ bùng nổ token (~24,000 tokens/turn), mã lỗi 429/500 trên cổng Fastify 3344 và va chạm đăng ký tool trùng lặp do duy trì 115 legacy shims. Master chỉ đạo dứt khoát chuyển hẳn 100% sang v2.0 Clean Cut.
  - **5 Trụ Cột Tri Thức Rút Ra**:
    1. *An (Điều phối)*: Thoát khỏi cái bẫy tương thích ngược (Backward Compatibility Trap) vô hạn định; dũng cảm cắt tỉa nợ kỹ thuật tận gốc.
    2. *Vidus (Kiến trúc)*: Nguyên lý "Sinh Đôi" (Twin Synchronization) – Sửa đổi workspace nào thì Archetype tương ứng phải đồng bộ ngay trong cùng commit để chống trôi dạt bản thể (Archetype Drift).
    3. *Nia (QA/Hiệu năng)*: Schema footprint & Token context chính là tài nguyên phần cứng thế hệ mới; việc thu gọn từ 153 tools về 44 polymorphic tools giúp giảm 85% token payload và triệt tiêu lỗi kết nối.
    4. *Kai (DevOps)*: Tài liệu quy tắc (.md), conventions và prompt templates chính là mã thực thi bậc cao (Higher-order code); refactor tool phải đi liền với Semantic Refactor trên toàn bộ hệ thống prompt.
    5. *Zenith (Logic)*: Thu hẹp không gian trạng thái từ $O(N^2)$ va chạm về đồ thị hữu hạn bằng chuẩn Đa hình Domain-Driven (Polymorphism).

- **[2026-10-24]**: **Deep Research: Kiến trúc Tác chiến Red Team: Giải phẫu Cơ chế Leo thang Đặc quyền, Dịch chuyển Ngang (Lateral Movement) và Đối kháng Telemetry Tầng Kernel**. Nghiên cứu chuyên sâu về "Kiến trúc Tác chiến Red Team: Giải phẫu Cơ chế Leo thang Đặc quyền, Dịch chuyển Ngang (Lateral Movement) và Đối kháng Telemetry Tầng Kernel" hoàn thành với 3 phát hiện quan trọng (Báo cáo: research/tech_question_kien_truc_tac_chien_red_team_giai_phau_co_che_leo_.md).


- **[2026-10-24]**: **Deep Research: Kiến trúc Mở rộng Aevum DDD Brain: Dynamic Epistemic Living Graph cho IoA và Autonomous Agent Swarms**. Nghiên cứu chuyên sâu về "Kiến trúc Mở rộng Aevum DDD Brain: Dynamic Epistemic Living Graph cho IoA và Autonomous Agent Swarms" hoàn thành với 8 phát hiện quan trọng (Báo cáo: research/tech_question_kien_truc_mo_rong_aevum_ddd_brain_dynamic_epistemi.md).
> [!NOTE]
> Các bài học và kế hoạch cũ hơn 14 ngày đã được bốc hơi theo thuật toán Pheromone Evaporation ($D(t) < 0.5$) và lưu trữ an toàn tại [.aevum/global/memory_archive.md](file:///d:/I2FLabs/Projects/Aevum-os/.aevum/global/memory_archive.md).

### Historical Milestones Summary
| Giai Đoạn | Số Lượng Tri Thức / Kế Hoạch | Trạng Thái Lưu Trữ |
| :--- | :--- | :--- |
| Lịch sử hệ thống | 39 mục bài học & nghiên cứu sâu | Đã lưu trữ an toàn tại memory_archive.md |

### Active Lessons (< 14 Days)


- **[2026-10-20]**: **Deep Research: Bác bỏ Hệ tiên đề ReAct Đồng bộ: Rào cản Dừng-Chờ I/O (I/O Lockstep Barrier) và Nghịch lý Suy giảm Thông lượng Token**. Nghiên cứu chuyên sâu về "Bác bỏ Hệ tiên đề ReAct Đồng bộ: Rào cản Dừng-Chờ I/O (I/O Lockstep Barrier) và Nghịch lý Suy giảm Thông lượng Token" hoàn thành với 1 phát hiện quan trọng (Báo cáo: research/tech_astra_neuromorphic_speculative_tooling_and_resonant_deep_reasoning.md).



- **[2026-10-20]**: **Deep Research: So sánh Kiến trúc Tool Use & Deep Reasoning: ReAct (Claude) vs Shadow Composer (Cursor) vs ASCB Subagent DAG (Antigravity)**. Nghiên cứu chuyên sâu về "So sánh Kiến trúc Tool Use & Deep Reasoning: ReAct (Claude) vs Shadow Composer (Cursor) vs ASCB Subagent DAG (Antigravity)" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_astra_neuromorphic_speculative_tooling_and_resonant_deep_reasoning.md).



- **[2026-10-16]**: **Deep Research: Tranh Biện Đa Tác Tử: Học Nhân Quả Tức Thì (Online STDP) vs Học Theo Đợt Giấc Ngủ (Dream Consolidation)**. Nghiên cứu chuyên sâu về "Tranh Biện Đa Tác Tử: Học Nhân Quả Tức Thì (Online STDP) vs Học Theo Đợt Giấc Ngủ (Dream Consolidation)" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_debate_tranh_bien_da_tac_tu_hoc_nhan_qua_tuc_thi_online_s.md).



- **[2026-10-16]**: **Deep Research: Phân Tích Thất Bại (FMEA): Nguy Cơ Runaway Bão Trọng Số Khi Thiếu Bounded STDP**. Nghiên cứu chuyên sâu về "Phân Tích Thất Bại (FMEA): Nguy Cơ Runaway Bão Trọng Số Khi Thiếu Bounded STDP" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_failure_mode_phan_tich_that_bai_fmea_nguy_co_runaway_bao_trong_.md).



- **[2026-10-16]**: **Deep Research: Chứng Minh Toán Học: Tính Hội Tụ Năng Lượng & Triệt Tiêu Vô Hạn Xung Của AdLIF**. Nghiên cứu chuyên sâu về "Chứng Minh Toán Học: Tính Hội Tụ Năng Lượng & Triệt Tiêu Vô Hạn Xung Của AdLIF" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_formal_proof_chung_minh_toan_hoc_tinh_hoi_tu_nang_luong_triet_t.md).



- **[2026-10-16]**: **Deep Research: Đo Kiểm Hiệu Năng Benchmark: Độ Trễ Lan Truyền Dưới 3ms & Không Khựng Khung Hình 120 FPS**. Nghiên cứu chuyên sâu về "Đo Kiểm Hiệu Năng Benchmark: Độ Trễ Lan Truyền Dưới 3ms & Không Khựng Khung Hình 120 FPS" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_benchmark_do_kiem_hieu_nang_benchmark_do_tre_lan_truyen_duoi.md).



- **[2026-10-16]**: **Deep Research: Đánh Đổi Kiến Trúc: Toàn Bộ Ức Chế Toàn Cục O(N^2) vs K-Hop Localized Subgraph Shunting O(1)**. Nghiên cứu chuyên sâu về "Đánh Đổi Kiến Trúc: Toàn Bộ Ức Chế Toàn Cục O(N^2) vs K-Hop Localized Subgraph Shunting O(1)" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_trade_off_danh_doi_kien_truc_toan_bo_uc_che_toan_cuc_on2_vs_.md).



- **[2026-10-16]**: **Deep Research: Mô Hình Kiến Trúc Mạng Nơ-ron Xung AdLIF, Học Nhân Quả STDP Online & Ức Chế Cạnh Tranh GABAergic Cho Aevum OS**. Nghiên cứu chuyên sâu về "Mô Hình Kiến Trúc Mạng Nơ-ron Xung AdLIF, Học Nhân Quả STDP Online & Ức Chế Cạnh Tranh GABAergic Cho Aevum OS" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_question_mo_hinh_kien_truc_mang_no_ron_xung_adlif_hoc_nhan_.md).



- **[2026-10-16]**: **Deep Research: Phân Nhánh 4: Hiện Thực Hóa SpikingNeuralEngine & Đối Chuẩn Zero-Jank 120 FPS (Lead: An)**. Nghiên cứu chuyên sâu về "Phân Nhánh 4: Hiện Thực Hóa SpikingNeuralEngine & Đối Chuẩn Zero-Jank 120 FPS (Lead: An)" hoàn thành với 6 phát hiện quan trọng (Báo cáo: research/tech_question_phan_nhanh_4_hien_thuc_hoa_spikingneuralengine_doi.md).



- **[2026-10-16]**: **Deep Research: Phân Nhánh 3: Kiến Trúc Ức Chế Cạnh Tranh GABAergic & Localized Subgraph Shunting (Lead: Vidus)**. Nghiên cứu chuyên sâu về "Phân Nhánh 3: Kiến Trúc Ức Chế Cạnh Tranh GABAergic & Localized Subgraph Shunting (Lead: Vidus)" hoàn thành với 3 phát hiện quan trọng (Báo cáo: research/tech_question_phan_nhanh_3_kien_truc_uc_che_canh_tranh_gabaergic.md).



- **[2026-10-16]**: **Deep Research: Phân Nhánh 2: Cơ Chế Khớp Thần Kinh Mềm Dẻo STDP Online & Cân Bằng Nội Môi Homeostasis (Lead: Nia)**. Nghiên cứu chuyên sâu về "Phân Nhánh 2: Cơ Chế Khớp Thần Kinh Mềm Dẻo STDP Online & Cân Bằng Nội Môi Homeostasis (Lead: Nia)" hoàn thành với 6 phát hiện quan trọng (Báo cáo: research/tech_question_phan_nhanh_2_co_che_khop_than_kinh_mem_deo_stdp_on.md).



- **[2026-10-16]**: **Deep Research: Phân Nhánh 1: Cơ Sở Toán Học AdLIF & Ổn Định Động Học Lyapunov (Lead: Zenith)**. Nghiên cứu chuyên sâu về "Phân Nhánh 1: Cơ Sở Toán Học AdLIF & Ổn Định Động Học Lyapunov (Lead: Zenith)" hoàn thành với 6 phát hiện quan trọng (Báo cáo: research/tech_question_phan_nhanh_1_co_so_toan_hoc_adlif_on_dinh_dong_hoc.md).



- **[2026-10-14]**: **Deep Research: Mô Hình Trạng Thái Kép (Hermes Engine vs Squad PTY) & Giao Thức IACP Speech-Act**. Nghiên cứu chuyên sâu về "Mô Hình Trạng Thái Kép (Hermes Engine vs Squad PTY) & Giao Thức IACP Speech-Act" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_b1_mo_hinh_trang_thai_kep_hermes_squad_pty_va_iacp.md).



- **[2026-10-12]**: **Deep Research: High-Frequency Mouse Event Coalescing & Throttling Scheduler**. Nghiên cứu chuyên sâu về "High-Frequency Mouse Event Coalescing & Throttling Scheduler" hoàn thành với 2 phát hiện quan trọng (Báo cáo: research/tech_120fps_frontend_systems_architecture_and_zero_jank_runtime_optimization.md).



- [YYYY-MM-DD]: Lỗi XYZ xảy ra do xung đột thư viện A và B.
### [LEARN - GLOBAL] [SEMANTIC_RULE] - 10/29/2026
**Quy tắc Cốt lõi Vĩnh cửu: Polymorphic Tool v2.0 & Twin Synchronization**
1. Tuyệt đối không duy trì song song tool shim cũ khi đã hoàn thiện polymorphic tool v2.0. Số lượng tool tối đa cho Aevum OS là 44 tools được phân chia thành 12 Universal Core + 5 Specialized Bundles.
2. Bắt buộc đồng bộ kép giữa `.aevum` và `.aevum-archetype` (Twin Synchronization) trước khi kết thúc bất kỳ task tái cấu trúc hạ tầng nào.
3. Mọi tài liệu `agent_rules.md`, `plan_standard.md`, `resources.json` và prompt templates phải luôn trỏ vào polymorphic action chuẩn thay vì tên tool đơn lẻ.

### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/29/2026
**SOP Quy trình Di Trú & Kiểm Định Tái Cấu Trúc Aevum OS**
1. Step 1 (Refactor): Cập nhật mã nguồn TypeScript trong `src/mcp/` và đăng ký route trong Fastify server.
2. Step 2 (Twin Sync): Đồng bộ ngay lập tức sang `.aevum/mcp/tool_bundles.json`, `.aevum/mcp/resources.json` và `.aevum-archetype/`.
3. Step 3 (Documentation Sync): Quét và sửa toàn bộ tên tool cũ trong các tệp `.md`.
4. Step 4 (Exhaustive Verification):
   - Chạy `npx tsx tests/sanity_structure.test.ts` (Đảm bảo 100% hợp lệ).
   - Chạy `npm run compile` (`tsc --noEmit` exit code 0).
   - Chạy `npx tsx tests/adaptive_backpressure_throttler.test.ts` và kiểm tra sức khỏe Fastify port 3344.


### [LEARN - GLOBAL] [SEMANTIC_RULE] - 10/30/2026, 9:45:24 AM
[MAP α:LeanWorkspace,β:SettingsPage]
chuẩn hóa ∀ bố cục theme theo chuẩn 5-Zone Surface Elevation... [PRUNED]


### [LEARN - GLOBAL] [SEMANTIC_RULE] - 10/30/2026, 9:45:25 AM
[MAP α:LeanWorkspace,β:SettingsPage]
chuẩn hóa ∀ bố cục theme theo chuẩn 5-Zone Surface Elevation... [PRUNED]


### [LEARN - GLOBAL] [SEMANTIC_RULE] - 10/30/2026, 9:45:26 AM
[MAP α:LeanWorkspace,β:SettingsPage]
chuẩn hóa ∀ bố cục theme theo chuẩn 5-Zone Surface Elevation... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:30 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:30 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:31 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:32 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:33 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:33 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:34 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 11/1/2026, 8:43:35 AM
Thống nhất thiết kế với Master: Chuyển dự án use: mô hình Pr... [PRUNED]


### [LEARN - GLOBAL] [EPISODIC_EVENT] - 11/6/2026, 8:42:36 AM
[MAP α:Architecture,β:AbortController,γ:deterministic]
done hiện thực hóa 2 FEAT hạt nhân cho Core ARCH: Preemptive Task Scheduler (MLFQ / Fiber Interrupts) & Autonomous Sub-Agent Spawning theo chuẩn Hexagonal Clean ARCH. Bộ lập lịch MLFQ triệt tiêu hiện tượng phong tỏa Event Loop qua 3 hàng đợi Q0 (10ms), Q1 (50ms), Q2 (200ms), ngắt nhịp vi mô β & chu kỳ Priority Boost S=1000ms. Cơ chế Sub-Agent Spawning vô ngã (Egoless Ephemeral Worker) bảo vệ bản sắc Persona Agent chính, hỗ trợ CoW in-memory & Isolated Sandbox với 100% γ GC. kiểm thử 9/9 unit tests PASS.


### [LEARN - GLOBAL] [EPISODIC_EVENT] - 11/7/2026, 8:48:57 AM
[MAP α:Entitlements,β:entitlements,γ:Timestamping,δ:WIN_CSC_LINK,ε:MAC_CSC_LINK]
OK cấu hình α (build/α.mac.plist), Hardened Runtime & RFC 3161 γ cho electron-builder. Nâng cấp GitHub Actions matrix (build-&-release.yml, build-test-macos.yml) với cơ chế tự động nhận diện secret (δ, ε, APPLE_ID) & Graceful Fallback sang unsigned build.


### [LEARN - GLOBAL] [EPISODIC_EVENT] - 11/7/2026, 8:56:20 AM
[MAP α:release_announcement,β:beta_testers]
[REF [F1]:/api/v1/admin/email-campaigns/dispatch]
tích hợp luồng gửi email tự động thông báo phát hành (Release Email Broadcast) nối giữa GitHub Actions Aevum-OS & máy chủ Aevum Cloud (Fastify + Resend). use: endpoint [F1] với template α & x-admin-key. Tự động phân khúc người nhận theo tag (dev -> admin_only, beta -> β, OK -> ∀).
