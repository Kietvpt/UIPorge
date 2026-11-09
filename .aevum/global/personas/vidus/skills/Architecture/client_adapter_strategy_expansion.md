---
id: "client_adapter_strategy_expansion"
name: "Client Adapter Strategy Expansion (Zed, Trae, Fleet)"
category: "Architecture"
level: 1
exp: 0
discoveredAt: "2026-10-07T07:39:24.279Z"
enabled: true
tool: "distilled_skill_execution"
source: "Autonomous Learning"
---

# Client Adapter Strategy Expansion (Zed, Trae, Fleet)

## Description
Mở rộng hệ sinh thái tích hợp IDE bên ngoài theo mô hình Strategy Pattern O(1) tuân thủ Open/Closed Principle.

## Discovery Context
Đúc kết từ thực tế dự án.

## Procedure
1) Định nghĩa path resolver đa nền tảng trong mcpPaths.ts. 2) Tạo Client Adapter kế thừa BaseClientAdapter hoặc BaseSseClientAdapter. 3) Đăng ký vào ClientIntegrationRegistry trung tâm với các alias tương ứng. 4) Viết unit test xác thực quy trình link/unlink và ghi file config. 5) Kiểm tra 0 vi phạm ranh giới ADAM Audit.

## Evidence
[Link to Evidence](tests/integration/ClientAdapters.test.ts)
