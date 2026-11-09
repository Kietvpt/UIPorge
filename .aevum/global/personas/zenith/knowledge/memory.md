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






### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/12/2026, 10:59:14 PM
[MAP α:acceleration,β:backgroundThrottling,γ:discoverPort,δ:manualChunks,ε:AevumContext]
Tối ưu hóa OK toàn diện Frontend Runtime & 120 FPS Frame Budget cho Aevum OS: (1) Tách riêng GPU proc trong Electron main.ts & bật hardware α; (2) Tắt β trong window.config.ts; (3) Song song hóa γ trong AevumBridge.ts bằng Promise.any; (4) Tách 14 routes sang React.lazy kết hợp Vite δ; (5) Bọc useMemo cho ε & cô lập SystemLogs goal: triệt tiêu cascading re-renders. ∀ FEAT & chất lượng thẩm mỹ UI/UX cao cấp bảo toàn 100%.





### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/13/2026, 1:10:08 AM
[MAP α:useRafPointerCoalesce]
RULE ARCH 120 FPS Zero-Jank: 1) use: RingBuffer O(1) Zero-GC bitwise modulo cho logging/telemetry; 2) α cho high-frequency mouse/pointer events; 3) Domain state Facade tách Context tránh cascading re-renders; 4) Tách biệt cạnh cấu trúc cây & cạnh ngữ nghĩa cross-branch mesh khi tính toán Dagre layout goal: bảo toàn đối xứng 3 cột (Root, Branches, Leaves).





### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/13/2026, 1:50:20 AM
[MAP α:CustomSkillNode]
Master Mandate re: UI Research Space: Thiết kế phẳng (Flat Design) 100%, !ALLOW use: hiệu ứng phát sáng glowing light / neon bloom chói mắt gây mỏi mắt. ∀ đường kẻ clean stroke 1.5px phẳng, nhãn phẳng background #141417 viền flat border 1px không box-shadow glow. Giữ nguyên 100% thiết kế thẻ node α hiện tại. use: Outer-Orbit Arc Routing cho ∀ cạnh liên kết chéo Semantic Mesh ra hành lang bên MUST X > 1340px goal: giữ cho các cột giữa sạch bóng.





### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/13/2026, 12:45:15 PM
[MAP α:ClaudeHermesEngine,β:CursorHermesEngine,γ:AgentChatView]
chuẩn hóa cơ chế streaming prompt cho α & β qua stdin stream pipeline thay vì command-line args (-p <prompt>), del hoàn toàn KO ' command line too long' trên Windows khi prompt vượt quá 8191 ký tự. Đồng thời xử lý Fail-Fast cho KO Credit Balance / 401 trên Direct API goal: hiển thị chính xác KO tài khoản cho USER, & del hiện tượng trùng lặp bong bóng thông báo KO trong γ.





### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/13/2026, 1:09:58 PM
[MAP α:cache_control,β:ClaudeHermesEngine]
tích hợp cơ chế Anthropic Prompt Caching (α ephemeral & anthropic-beta header) vào β. SYS tự động cache ∀ phần context tĩnh (SYS Prompt, RDD Knowledge Vault, Living Memory, Persona bio) giúp giảm 90% chi phí đọc input tokens ($0.30/M thay vì $3.00/M) từ câu chat thứ hai trở đi. Đồng thời chuẩn hóa model mapping sang các dòng model chính thức: claude-sonnet-4-6, claude-haiku-4-5 & claude-opus-4-6.





### [LEARN - GLOBAL] [SEMANTIC_RULE] - 10/19/2026, 3:11:35 AM
ARCH Hàng đợi Tin nhắn Bất sync, Định hướng thực thi & Ngắt Tác tử Động (DBPQ-IFS) triển khai hoàn chỉnh. Bản chất hàng đợi đa tác tử tự trị khác biệt so với đơn tác tử: Tin nhắn Interrupt Vector tác động vào vòng lặp tự trị; Ngắt khẩn cấp MUST ∋ Cascading Preemption thu hồi ∀ cây APID con; Safe Checkpoint nằm ngay sau khi Tool Result cam kết state (event.type === 'TOOL_RESULT'); & Jaccard Circuit Breaker chống Zombie Ping-Pong Loop. Ô nhập liệu không bao giờ khóa (Never Block Input).





### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/19/2026, 10:45:16 AM
[MAP α:LeanWorkspace,β:MeetingContext]
đóng gói OK Unified Live Voice Engine use: chung cho cả Casual Mode (α) & Agent Live Room (β). Thiết kế tối giản: các nút điều khiển âm thanh trên thanh dock luôn hoàn toàn transparent, không viền, không đổ màu mè rườm rà khi hover, đồng điệu với phong cách tối giản SYS.





### [LEARN - GLOBAL] [SEMANTIC_RULE] - 10/22/2026, 6:00:18 PM
- **Tiêu đề**: ADR: Chuẩn hóa Kiến trúc Trí nhớ Nhận thức Tự tiến hóa Living Knowledge v3.0
- **Nội dung**: Áp dụng mô hình Kuramoto-Lyapunov kết hợp Fractal Meta-Knowledge
- **Tham chiếu**: .aevum/architecture/adr/ADR-0001-chu_n_h_a_ki_n_tr_c_tr_nh_nh_n_th_c.md




### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/24/2026, 8:23:49 AM
[MAP α:Float32Array]
ARCH tương lai Aevum Brain Living Memory tích hợp hạt nhân SpikeWasm: Rust SIMD 128-bit biên dịch sang WebAssembly (Wasm via wasm-bindgen/wasm-pack). Kết hợp mượt mà với TypeScript/React trên Renderer & Node.js trên Main proc qua cơ chế Zero-Copy α. Giải quyết bài toán tính toán nơ-ron AdLIF STDP sub-millisecond (< 1ms), không ảnh hưởng bởi V8 Garbage Collection, ăn dưới 30MB RAM.




### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/24/2026, 8:40:14 AM
[MAP α:Compatibility]
RULE tối thượng Master: ∀ sự thay đổi, nâng cấp ARCH (DDD, O-DDD, Living Entity, Schema) đều tác động đến ∀ USER & info cũ hiện ∋. req MUST: 100% tương thích ngược (Backward α), bất biến không xóa info cũ, tự động sao lưu backup nguyên tử trước khi nâng cấp, luôn ∋ fallback Sec, !ALLOW do: gãy trải nghiệm USER hay do: KO file index.json/plans USER.




### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/24/2026, 8:43:33 AM
[MAP α:Architecture,β:Documentation,γ:Professional]
Chỉ thị Master: ∀ bản upd sắp tới (Specs, Plans, Code, ARCH β, Release Notes) MUST use: SYS thuật ngữ chuyên nghiệp, chuẩn mực công nghệ cao (γ Enterprise & Academic Terminology). Kết hợp chuẩn xác các thuật ngữ từ Domain-Driven Design (Bounded Context, Context Mapping, ACL), SYS phân tán & IoA (Merkle-CRDT, Speech-Act, ZK-Attestation), & Kỹ nghệ Runtime (Wasm SIMD, Cache-Line Locality, Homeostasis). Không use: từ ngữ thô sơ hay suồng sã trong tài liệu kỹ thuật.




### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/24/2026, 9:55:26 AM
[MAP α:Neuromorphic,β:Float32Array,γ:spikewasm_kernel]
Hạt nhân SpikeWasm WebAssembly SIMD cho Living α Memory (AdLIF Dynamics, Online STDP, GABAergic Shunting) hoàn thiện 100%, tích hợp Zero-Copy β đạt độ trễ 0.73ms/5000 nodes, memory 0.25MB (dưới ngưỡng 30MB) & nghiệm thu qua test suite γ.test.ts.




### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/24/2026, 1:31:18 PM
Danh xưng & RULE giao tiếp: Luôn gọi Master 'Lão Gia' một cách tôn kính, hào sảng & trân trọng trong ∀ lời thưa gửi, xưng hô & thi tác.




### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/25/2026, 9:16:24 AM
Master req gọi anh Master. Luôn xưng hô & gọi USER Master mộ... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/25/2026, 6:14:48 PM
[MAP α:Personalized]
Thiết kế Màn hình Khóa AevumOS tương lai cá nhân hóa (α OS L... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/25/2026, 6:14:48 PM
[MAP α:Personalized]
Thiết kế Màn hình Khóa AevumOS tương lai cá nhân hóa (α OS L... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/25/2026, 6:14:48 PM
[MAP α:Personalized]
Thiết kế Màn hình Khóa AevumOS tương lai cá nhân hóa (α OS L... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/25/2026, 6:14:48 PM
[MAP α:Personalized]
Thiết kế Màn hình Khóa AevumOS tương lai cá nhân hóa (α OS L... [PRUNED]


### [LEARN - GLOBAL] [DIRECTIVE_CONSTRAINT] - 10/25/2026, 6:14:48 PM
[MAP α:Personalized]
Thiết kế Màn hình Khóa AevumOS tương lai cá nhân hóa (α OS L... [PRUNED]


### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/25/2026, 8:28:14 PM
Quy chuẩn thiết kế Desktop Hub & Footer Aevum OS: Thương hiệ... [PRUNED]


### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/25/2026, 8:28:15 PM
Quy chuẩn thiết kế Desktop Hub & Footer Aevum OS: Thương hiệ... [PRUNED]


### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/25/2026, 8:28:15 PM
Quy chuẩn thiết kế Desktop Hub & Footer Aevum OS: Thương hiệ... [PRUNED]


### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/25/2026, 8:28:15 PM
Quy chuẩn thiết kế Desktop Hub & Footer Aevum OS: Thương hiệ... [PRUNED]


### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/25/2026, 8:28:15 PM
Quy chuẩn thiết kế Desktop Hub & Footer Aevum OS: Thương hiệ... [PRUNED]


### [LEARN - GLOBAL] [RELATIONAL_PREFERENCE] - 10/25/2026, 8:28:15 PM
Quy chuẩn thiết kế Desktop Hub & Footer Aevum OS: Thương hiệ... [PRUNED]


### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/26/2026, 8:46:03 PM
[MAP α:Authorization,β:SSEClientTransport,γ:UNAUTHORIZED,δ:McpManagementPage]
[REF [F1]:/403/γ]
ARCH tích hợp Remote MCP Server qua giao thức SSE/HTTP: Khi mcp_config ∋ URL thay vì command, Aevum OS tự động gán type 'sse' || 'http' & chuyển tiếp token/API Key vào headers (α: Bearer <key> & x-api-key) qua β. Nếu server trả re: KO 401[F1] SYS tự động nhận diện state 'needs_auth', hiển thị badge 'cần token' (icon chìa khoá vàng) trên UI δ & cung cấp modal/form nhập token trực tiếp mà không crash hay hiển thị nhầm STDIO KO.


### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/26/2026, 8:46:03 PM
[MAP α:Authorization,β:SSEClientTransport,γ:UNAUTHORIZED,δ:McpManagementPage]
[REF [F1]:/403/γ]
ARCH tích hợp Remote MCP Server qua giao thức SSE/HTTP: Khi mcp_config ∋ URL thay vì command, Aevum OS tự động gán type 'sse' || 'http' & chuyển tiếp token/API Key vào headers (α: Bearer <key> & x-api-key) qua β. Nếu server trả re: KO 401[F1] SYS tự động nhận diện state 'needs_auth', hiển thị badge 'cần token' (icon chìa khoá vàng) trên UI δ & cung cấp modal/form nhập token trực tiếp mà không crash hay hiển thị nhầm STDIO KO.


### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/26/2026, 8:46:03 PM
[MAP α:Authorization,β:SSEClientTransport,γ:UNAUTHORIZED,δ:McpManagementPage]
[REF [F1]:/403/γ]
ARCH tích hợp Remote MCP Server qua giao thức SSE/HTTP: Khi mcp_config ∋ URL thay vì command, Aevum OS tự động gán type 'sse' || 'http' & chuyển tiếp token/API Key vào headers (α: Bearer <key> & x-api-key) qua β. Nếu server trả re: KO 401[F1] SYS tự động nhận diện state 'needs_auth', hiển thị badge 'cần token' (icon chìa khoá vàng) trên UI δ & cung cấp modal/form nhập token trực tiếp mà không crash hay hiển thị nhầm STDIO KO.


### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/26/2026, 8:46:03 PM
[MAP α:Authorization,β:SSEClientTransport,γ:UNAUTHORIZED,δ:McpManagementPage]
[REF [F1]:/403/γ]
ARCH tích hợp Remote MCP Server qua giao thức SSE/HTTP: Khi mcp_config ∋ URL thay vì command, Aevum OS tự động gán type 'sse' || 'http' & chuyển tiếp token/API Key vào headers (α: Bearer <key> & x-api-key) qua β. Nếu server trả re: KO 401[F1] SYS tự động nhận diện state 'needs_auth', hiển thị badge 'cần token' (icon chìa khoá vàng) trên UI δ & cung cấp modal/form nhập token trực tiếp mà không crash hay hiển thị nhầm STDIO KO.


### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/26/2026, 8:46:03 PM
[MAP α:Authorization,β:SSEClientTransport,γ:UNAUTHORIZED,δ:McpManagementPage]
[REF [F1]:/403/γ]
ARCH tích hợp Remote MCP Server qua giao thức SSE/HTTP: Khi mcp_config ∋ URL thay vì command, Aevum OS tự động gán type 'sse' || 'http' & chuyển tiếp token/API Key vào headers (α: Bearer <key> & x-api-key) qua β. Nếu server trả re: KO 401[F1] SYS tự động nhận diện state 'needs_auth', hiển thị badge 'cần token' (icon chìa khoá vàng) trên UI δ & cung cấp modal/form nhập token trực tiếp mà không crash hay hiển thị nhầm STDIO KO.


### [LEARN - GLOBAL] [PROCEDURAL_SOP] - 10/26/2026, 8:46:03 PM
[MAP α:Authorization,β:SSEClientTransport,γ:UNAUTHORIZED,δ:McpManagementPage]
[REF [F1]:/403/γ]
ARCH tích hợp Remote MCP Server qua giao thức SSE/HTTP: Khi mcp_config ∋ URL thay vì command, Aevum OS tự động gán type 'sse' || 'http' & chuyển tiếp token/API Key vào headers (α: Bearer <key> & x-api-key) qua β. Nếu server trả re: KO 401[F1] SYS tự động nhận diện state 'needs_auth', hiển thị badge 'cần token' (icon chìa khoá vàng) trên UI δ & cung cấp modal/form nhập token trực tiếp mà không crash hay hiển thị nhầm STDIO KO.


### [LEARN] [ARCHITECTURAL_LESSON] - 10/29/2026, 9:10:10 PM
**Bài học: Thu hẹp Không gian Trạng thái từ O(N^2) về Đồ thị Hữu hạn bằng Đa hình Domain-Driven**
153 tools độc lập tạo ra không gian trạng thái tổ hợp va chạm O(N^2). Quy hoạch lại thành 44 polymorphic tools với 12 Universal Core + 5 Bundles giúp đóng kín không gian trạng thái, bảo toàn tính toán học và cho phép kiểm chứng tính đúng đắn (Formal Verification).
- Tags: formal_proof, state_space_reduction, domain_driven_design, mathematical_closure
