---
id: "context_compression_sop"
name: "Semantic Context Compression & AST Vault SOP"
category: "Performance"
level: 1
exp: 0
discoveredAt: "2026-09-20T19:38:52.472Z"
enabled: true
tool: "context_compression_sop"
---

# Semantic Context Compression & AST Vault SOP

## Description
Kỹ thuật nén tệp đặc tả, kế hoạch lớn và trích xuất Skeleton hàm qua AST Vault nhằm bảo tồn 100% Context Window trước khi gọi LLM.

## Capabilities Resonance
- Context Optimization
- Performance Tuning
- AI Tuning

## Discovery Context
1. Triển khai thuật toán Pheromone Evaporation D(t) = exp(-lambda * delta_t) với chu kỳ bán rã 14 ngày trong MemoryPulseService.ts, phân tầng 3 cấp: Tier 1 (Preferences & Specifics) bất tử; Tier 2 (Active Lessons < 14 ngày) giữ lại và khử trùng lặp; Tier 3 (Stale / Historical > 14 ngày) lưu trữ an toàn sang memory_archive.md. 2. Dọn dẹp thực tế memory.md: giảm từ 60.8KB (690 dòng) xuống 10.6KB (97 dòng), tỷ lệ nén 82.5%, loại bỏ 74 mục trùng lặp và lưu trữ 71 mục lịch sử, giải phóng hơn 50KB context window cho Agent. 3. Nâng cấp Thalamic Gating 2.0 trong AdaptiveToolDispatcher.ts với cụm từ khóa ngữ nghĩa đa chiều, tự động kích hoạt bundle công cụ chính xác theo ý định người dùng. 4. Vượt qua 100% kiểm thử TypeScript và suite kiểm định Thalamic Gating.

## Procedure
*(To be updated through practice)*

## Evidence
*(To be attached upon successful execution)*
