---
id: "reflex_worker_backpressure_and_queue_bounding"
name: "Reflex Worker Backpressure & Bounded Concurrency Queue"
category: "Performance"
level: 1
exp: 0
discoveredAt: "2026-10-07T07:13:18.966Z"
enabled: true
tool: "distilled_skill_execution"
source: "Autonomous Learning"
---

# Reflex Worker Backpressure & Bounded Concurrency Queue

## Description
Kiểm soát áp lực luồng (Backpressure) và giới hạn hàng đợi bất đồng bộ cho Worker Thread nhằm triệt tiêu nghẽn CPU và tránh đóng băng Node Event Loop / Electron IPC.

## Discovery Context
Đúc kết từ thực tế dự án.

## Procedure
1) Cấu hình Worker Thread với TypeScript loader tương thích (tsx/cjs). 2) Thiết lập Bounded FIFO Queue và High-Watermark (maxQueueSize, maxConcurrency). 3) Cài đặt chính sách hủy task cũ (drop-oldest) khi người dùng thao tác nhanh. 4) Bỏ qua việc gửi các task đã hết hạn (expired in queue) sang worker để tiết kiệm 100% CPU. 5) Thu thập số liệu metrics (totalSubmitted, totalDropped, totalCompleted, avgLatencyMs) phục vụ giám sát sức khỏe runtime.

## Evidence
[Link to Evidence](tests/reflex/WorkerBackpressure.test.ts)
