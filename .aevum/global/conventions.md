# Coding Conventions & Project Mandates

> Xem văn kiện yêu cầu cốt lõi chi tiết tại: [project_requirements.md](file:///d:/Learn/UIPorge/.aevum/global/project_requirements.md)

## 🚨 Top Project Mandates
1. **Database Entity ID**: BẮT BUỘC dùng kiểu số nguyên `int` tự tăng (Database Identity) làm Primary Key cho mọi bảng:
   ```csharp
   [Key]
   [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
   public int Id { get; set; }
   ```
   Tất cả foreign keys tương ứng cũng là kiểu `int`. Tuyệt đối không dùng string GUID cho PK bảng CSDL.
2. **Work Logging Mandate**: Mọi Agent sau khi hoàn tất task BẮT BUỘC ghi log chi tiết vào [work_logs.md](file:///d:/Learn/UIPorge/.aevum/memory/work_logs.md) và cập nhật [changelog.json](file:///d:/Learn/UIPorge/.aevum/global/changelog.json).

## General Coding Rules
- **Backend (ASP.NET Core 8)**: Clean Architecture, RESTful API conventions, DTO separation, Async/Await.
- **Frontend (React 18 + TypeScript)**: TailwindCSS, Zustand state management, 120 FPS performance, zero-jank, sub-16ms micro-interactions.
- **DevOps (Docker & GitHub Actions)**: Multi-stage Dockerfiles, Docker Compose, automated CI/CD pipelines.
- **Documentation**: Swagger/OpenAPI synchronization, clear markdown specs, reproducible setups.
