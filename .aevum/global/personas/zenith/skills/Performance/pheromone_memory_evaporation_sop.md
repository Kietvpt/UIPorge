---
id: "pheromone_memory_evaporation_sop"
name: "Pheromone Memory Evaporation & Thalamic Gating SOP"
category: "Performance"
level: 1
exp: 0
discoveredAt: "2026-09-20T19:39:09.180Z"
enabled: true
tool: "distilled_skill_execution"
source: "Autonomous Learning"
---

# Pheromone Memory Evaporation & Thalamic Gating SOP

## Description
Quy trình dọn dẹp nợ kỹ thuật bộ nhớ và chống đãng trí cho AI Agent bằng thuật toán bốc hơi pheromone và cổng đồi thị ngữ nghĩa Thalamic Gating.

## Discovery Context
Đúc kết từ thực tế dự án.

## Procedure
1. Kiểm tra sức khỏe bộ nhớ định kỳ bằng aevum_audit_memory để phát hiện MEMORY_BLOAT (> 15KB) và các cụm REDUNDANCY. 2. Áp dụng công thức suy giảm D(t) = exp(-lambda * delta_t) với chu kỳ bán rã 14 ngày. 3. Phân tầng 3 cấp nghiêm ngặt: Tier 1 (Preferences, Specifics) bất tử; Tier 2 (Active Lessons < 14 ngày) giữ lại và khử trùng lặp; Tier 3 (Stale / Historical Milestones > 14 ngày) chuyển sang memory_archive.md. 4. Cô đọng memory.md thành bảng tóm tắt cột mốc lịch sử ngắn gọn. 5. Tự động kích hoạt Thalamic Gating 2.0 trong AdaptiveToolDispatcher để chỉ mở bundle công cụ liên quan theo ý định ngữ nghĩa.

## Evidence
[Link to Evidence](.aevum/domains/core_intelligence/features/workspace_knowledge_reflex/plans/pheromone_memory_evaporation_and_thalamic_gating.md)
