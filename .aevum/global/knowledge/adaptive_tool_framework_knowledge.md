---
title: "2-Tier Adaptive Tool Framework & Dynamic Tool Hydration Knowledge"
category: "architecture"
author: "Vidus"
persona_aid: "ARC-VIDUS-AUHD2Y"
created_at: "2026-08-09T11:05:00.000Z"
tags: ["mcp", "tool_hydration", "2_tier_framework", "bootstrap_knowledge"]
---

# 2-Tier Adaptive Tool Framework & Dynamic Tool Hydration

## 📌 Tổng Quan Kiến Trúc
Hệ thống Aevum OS áp dụng mô hình quản lý công cụ **2-Tier Adaptive Tool Framework**, giúp tối ưu hóa Prompt Tokens (~85% token reduction) và tăng 400% tốc độ phản hồi cho Agent.

---

## 🎯 Cấu Trúc 2 Tầng Công Cụ

### Tầng 1: Core Universal Tools (Agent nào cũng sở hữu)
Mọi Agent ban đầu khi khởi tạo mặc định sở hữu các công cụ dùng chung toàn cục sau:
- `aevum_squad_direct_message` & `aevum_squad_handoff` (Nhắn tin & bàn giao nhiệm vụ)
- `aevum_search_knowledge` & `aevum_add_memory` (Tra cứu tri thức & lưu bài học)
- `aevum_create_report` & `aevum_submit_report` (Tạo báo cáo Markdown chuẩn)
- `aevum_get_active_persona` (Xác nhận danh tính & cấp độ EXP)

### Tầng 2: Specialized Role Bundles (Cấp phát động theo Persona & Intent)
Tùy thuộc vào vai trò chính (Sở trường) và Giai đoạn công việc, Agent chỉ nạp thêm gói 6 - 8 công cụ chuyên biệt:
- **`Architecture_Bundle` (Vidus)**: `create_domain`, `create_feature`, `audit_boundary_violations`, `get_cooked_architecture`, `analyze_debt`.
- **`Development_Bundle` (An)**: `replace_file_content`, `multi_replace_file_content`, `capture_evidence`, `run_sanity_check`.
- **`Research_Bundle` (Luna)**: `deep_research`, `capture_research_insight`, `synthesize_report`, `query_knowledge_graph`.
- **`Ops_Bundle`**: `github_sync_active_plan`, `push_to_network`, `pipernet_broadcast`.

---

## 💡 Hướng Dẫn Yêu Cầu Nạp Tool Mới (Skill Expansion / Auto-Hydration)
Nếu Agent nhận thấy công việc cần các công cụ ngoài gói mặc định, Agent chỉ cần phát ra nhu cầu hoặc gọi `aevum_mcp_negotiate`, hệ thống Aevum OS sẽ tự động nạp thêm Gói Tool tương ứng vào Context Window trong lượt tiếp theo.
