# 🚀 UIForge Cloud Deployment Guide

Tài liệu hướng dẫn triển khai trọn bộ hệ thống UIForge (Frontend, Backend .NET 8, PostgreSQL / SQL Server và Caddy SSL) trên Cloud VPS hoặc máy chủ nội bộ.

---

## 📁 Cấu Trúc Thư Mục `deploy/`

- `docker-compose.yml`: Quản lý 4 container dịch vụ (`postgres`, `backend`, `frontend`, `caddy`).
- `Dockerfile.backend`: Multi-stage build .NET 8 Web API siêu nhẹ trên Alpine Linux.
- `Dockerfile.frontend`: Multi-stage build React/Vite và serve qua Nginx Alpine.
- `nginx.conf`: Cấu hình Nginx hỗ trợ gzip, cache tài nguyên và **SPA Clean Path Routing** (`try_files $uri $uri/ /index.html;`).
- `Caddyfile`: Reverse proxy tự động cấp phát và gia hạn chứng chỉ SSL Let's Encrypt / ZeroSSL.
- `.env.example`: File mẫu chứa các biến môi trường cấu hình domain, database và JWT.

---

## ⚡ Triển Khai Nhanh Trong 3 Bước

### Bước 1: Chuẩn bị file `.env`
Tại thư mục `deploy/`:
```bash
cp .env.example .env
nano .env
```
Cập nhật các thông tin chính:
- `FRONTEND_DOMAIN`: Tên miền của giao diện (ví dụ: `demo.uiforge.dev`)
- `API_DOMAIN`: Tên miền của Backend API (ví dụ: `api.uiforge.dev`)
- `ACME_EMAIL`: Email của quản trị viên để nhận cảnh báo chứng chỉ SSL.

### Bước 2: Khởi chạy với PostgreSQL (Mặc định - Khuyên dùng cho Demo)
PostgreSQL chỉ tiêu tốn khoảng **100MB - 150MB RAM**, cực kỳ nhẹ và phù hợp với VPS 2GB - 4GB RAM:
```bash
docker compose up -d --build
```

### Bước 3: (Tùy chọn) Chuyển sang Microsoft SQL Server 2022
Nếu doanh nghiệp yêu cầu chuẩn Microsoft SQL Server:
1. Đổi trong file `.env`: `DB_PROVIDER=SqlServer`
2. Khởi chạy với profile `sqlserver`:
```bash
docker compose --profile sqlserver up -d --build
```

---

## 🔍 Kiểm Tra Trạng Thái & Nhật Ký (Logs)

- Kiểm tra các container đang chạy:
  ```bash
  docker compose ps
  ```
- Xem nhật ký Backend:
  ```bash
  docker compose logs -f backend
  ```
- Xem nhật ký Reverse Proxy SSL Caddy:
  ```bash
  docker compose logs -f caddy
  ```
- Khởi động lại toàn bộ:
  ```bash
  docker compose restart
  ```
- Dừng hệ thống:
  ```bash
  docker compose down
  ```
