---
id: "context_compression_sop"
name: "Semantic Context Compression & AST Vault SOP"
category: "Performance"
level: 1
exp: 0
discoveredAt: "2026-10-07T05:03:44.291Z"
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
Đã hoàn tất toàn bộ quy trình rà soát và refactor chuẩn hóa kiến trúc Clean Architecture & Hexagonal Ports theo phê duyệt của Master. 1) Tinh chỉnh Domain Purity: tách NeuralContextEngine sang Application Service (NeuralContextService.ts), loại bỏ triệt để I/O direct imports trong domain. 2) Chuẩn hóa Ports: kiến tạo src/core/ports/ với IStorageAdapter và IAuthStorage, re-export tương thích ngược. 3) Đã biên dịch tsc --noEmit đạt 0 lỗi và ADAM Boundary Audit đạt 0 vi phạm ranh giới.

## Procedure
*(To be updated through practice)*

## Evidence
*(To be attached upon successful execution)*
