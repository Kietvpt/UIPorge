---
id: "defensive_unit_testing_sop"
name: "Defensive Unit & Regression Testing SOP"
category: "Quality"
level: 1
exp: 0
discoveredAt: "2026-09-20T19:38:52.474Z"
enabled: true
tool: "defensive_unit_testing_sop"
---

# Defensive Unit & Regression Testing SOP

## Description
Quy trình thiết kế bộ kiểm thử phòng vệ (Defensive Tests), kiểm soát các trường hợp biên (edge cases) và ngăn ngừa lỗi hồi quy.

## Capabilities Resonance
- Unit Test
- Bug Fixing
- Security

## Discovery Context
1. Triển khai thuật toán Pheromone Evaporation D(t) = exp(-lambda * delta_t) với chu kỳ bán rã 14 ngày trong MemoryPulseService.ts, phân tầng 3 cấp: Tier 1 (Preferences & Specifics) bất tử; Tier 2 (Active Lessons < 14 ngày) giữ lại và khử trùng lặp; Tier 3 (Stale / Historical > 14 ngày) lưu trữ an toàn sang memory_archive.md. 2. Dọn dẹp thực tế memory.md: giảm từ 60.8KB (690 dòng) xuống 10.6KB (97 dòng), tỷ lệ nén 82.5%, loại bỏ 74 mục trùng lặp và lưu trữ 71 mục lịch sử, giải phóng hơn 50KB context window cho Agent. 3. Nâng cấp Thalamic Gating 2.0 trong AdaptiveToolDispatcher.ts với cụm từ khóa ngữ nghĩa đa chiều, tự động kích hoạt bundle công cụ chính xác theo ý định người dùng. 4. Vượt qua 100% kiểm thử TypeScript và suite kiểm định Thalamic Gating.

## Procedure
*(To be updated through practice)*

## Evidence
*(To be attached upon successful execution)*
