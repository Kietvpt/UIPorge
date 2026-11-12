using System;
using System.Linq;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using UIForge.API.Data;
using UIForge.Core.Data;
using UIForge.Core.Extensions;
using UIForge.Core.Hubs;
using UIForge.Core.Services;

var builder = WebApplication.CreateBuilder(args);

// ============================================================
// 1. Multi-branch Database (Code First)
//    Mỗi request resolve AppDbContext theo "branch" claim trong JWT
//    -> UIPorge_BetaV1, UIPorge_BetaV2... (mặc định BetaV1)
// ============================================================
builder.Services.AddHttpContextAccessor();

builder.Services.AddScoped(sp =>
{
    var config = sp.GetRequiredService<IConfiguration>();
    var http = sp.GetService<IHttpContextAccessor>()?.HttpContext;
    var branch = http?.User?.FindFirst("branch")?.Value
                 ?? http?.Request?.Headers["X-Branch"].FirstOrDefault();
    var connStr = BranchConnectionFactory.Build(config, branch);
    var options = new DbContextOptionsBuilder<AppDbContext>()
        .UseSqlServer(connStr)
        .Options;
    return new AppDbContext(options);
});

// ============================================================
// 🚀 Đăng ký thư viện UIForge.Core (NuGet Package)
// ============================================================
builder.Services.AddUIForgeCore<AppDbContext>(builder.Configuration);

// ============================================================
// 2. JWT Authentication & Role-based Authorization (Dev / User)
// ============================================================
var jwtKey = builder.Configuration["Jwt:Key"]!;
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
        };
    });
builder.Services.AddAuthorization();

// 3. Controllers & JSON options (Kèm Controller từ thư viện UIForge.Core)
builder.Services.AddControllers()
    .AddApplicationPart(typeof(UIForge.Core.Controllers.DynamicMetadataController).Assembly)
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    });

// 4. CORS Configuration for React Frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

// 5. Swagger / OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "UIForge API", Version = "v1", Description = "Backend schema & layout engine for UIForge" });
});

// 6. SignalR Realtime Hub & Background Maintenance Service
builder.Services.AddSignalR();
builder.Services.AddHostedService<ScheduledMaintenanceService>();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");

app.UseAuthentication();
app.UseAuthorization();

// Tự tạo database của branch mặc định (kèm seed data) nếu chưa có.
try
{
    var factory = app.Services.GetRequiredService<TenantDbContextFactory>();
    await using var db = factory.CreateCustom<AppDbContext>(null, opts => new AppDbContext(opts));
    await db.Database.EnsureCreatedAsync();
    Console.WriteLine("[DB] Default branch database is ready.");

    // Non-destructive schema migration for Phase 1 (DataBinding, Validation, Permissions)
    const string sqlMigration = @"
        IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Components') AND name = 'DataBindingJson')
            ALTER TABLE Components ADD DataBindingJson NVARCHAR(MAX) NULL;
        IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Components') AND name = 'ValidationJson')
            ALTER TABLE Components ADD ValidationJson NVARCHAR(MAX) NULL;
        IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Components') AND name = 'PermissionsJson')
            ALTER TABLE Components ADD PermissionsJson NVARCHAR(MAX) NULL;

        -- Đồng bộ các cột BaseEntity cho bảng Users (nếu DB tạo trước khi User kế thừa BaseEntity)
        IF EXISTS (SELECT 1 FROM sys.tables WHERE name = 'Users')
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Users') AND name = 'Active')
                ALTER TABLE Users ADD Active BIT NOT NULL CONSTRAINT DF_Users_Active DEFAULT 1;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Users') AND name = 'CreatedDate')
                ALTER TABLE Users ADD CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_Users_CreatedDate DEFAULT GETUTCDATE();
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Users') AND name = 'CreatedBy')
                ALTER TABLE Users ADD CreatedBy NVARCHAR(MAX) NULL;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Users') AND name = 'UpdatedDate')
                ALTER TABLE Users ADD UpdatedDate DATETIME2 NULL;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Users') AND name = 'UpdatedBy')
                ALTER TABLE Users ADD UpdatedBy NVARCHAR(MAX) NULL;
        END

        -- Tạo bảng Vendors nếu DB branch chưa có
        IF OBJECT_ID('Vendors', 'U') IS NULL
        BEGIN
            CREATE TABLE Vendors (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                FullName NVARCHAR(MAX) NOT NULL,
                Address NVARCHAR(MAX) NULL,
                Active BIT NOT NULL CONSTRAINT DF_Vendors_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_Vendors_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
        END

        -- 🌳 Tạo bảng MasterDatas (Danh mục tham chiếu cây phân cấp) nếu chưa có
        IF OBJECT_ID('MasterDatas', 'U') IS NULL
        BEGIN
            CREATE TABLE MasterDatas (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                Code NVARCHAR(100) NOT NULL,
                Name NVARCHAR(250) NOT NULL,
                Type NVARCHAR(100) NOT NULL,
                ParentId INT NULL,
                Path NVARCHAR(500) NULL,
                SortOrder INT NOT NULL CONSTRAINT DF_MasterDatas_SortOrder DEFAULT 0,
                Description NVARCHAR(1000) NULL,
                Active BIT NOT NULL CONSTRAINT DF_MasterDatas_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_MasterDatas_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
        END

        -- 🛡️ Tạo bảng Roles (Vai trò RBAC) nếu chưa có
        IF OBJECT_ID('Roles', 'U') IS NULL
        BEGIN
            CREATE TABLE Roles (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                Code NVARCHAR(50) NOT NULL,
                Name NVARCHAR(150) NOT NULL,
                Description NVARCHAR(500) NULL,
                Active BIT NOT NULL CONSTRAINT DF_Roles_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_Roles_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
        END

        -- 🔗 Tạo bảng UserRoles (Liên kết Người dùng - Vai trò) nếu chưa có
        IF OBJECT_ID('UserRoles', 'U') IS NULL
        BEGIN
            CREATE TABLE UserRoles (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                UserId INT NOT NULL,
                RoleId INT NOT NULL,
                Active BIT NOT NULL CONSTRAINT DF_UserRoles_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_UserRoles_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
        END

        -- 🔒 Tạo bảng RolePermissions (Phân quyền chi tiết theo Thực thể & Màn hình) nếu chưa có
        IF OBJECT_ID('RolePermissions', 'U') IS NULL
        BEGIN
            CREATE TABLE RolePermissions (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                RoleId INT NOT NULL,
                FeatureCode NVARCHAR(100) NULL,
                EntityName NVARCHAR(100) NULL,
                CanRead BIT NOT NULL CONSTRAINT DF_RolePermissions_CanRead DEFAULT 1,
                CanCreate BIT NOT NULL CONSTRAINT DF_RolePermissions_CanCreate DEFAULT 0,
                CanUpdate BIT NOT NULL CONSTRAINT DF_RolePermissions_CanUpdate DEFAULT 0,
                CanDelete BIT NOT NULL CONSTRAINT DF_RolePermissions_CanDelete DEFAULT 0,
                CanExport BIT NOT NULL CONSTRAINT DF_RolePermissions_CanExport DEFAULT 1,
                Active BIT NOT NULL CONSTRAINT DF_RolePermissions_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_RolePermissions_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
        END

        -- ⚙️ Tạo bảng UserSettings (Cấu hình cá nhân hóa GridPolicy/UI) nếu chưa có
        IF OBJECT_ID('UserSettings', 'U') IS NULL
        BEGIN
            CREATE TABLE UserSettings (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                UserId INT NULL,
                Username NVARCHAR(100) NOT NULL,
                FeatureCode NVARCHAR(150) NOT NULL,
                ComponentId NVARCHAR(150) NOT NULL,
                SettingType NVARCHAR(50) NOT NULL CONSTRAINT DF_UserSettings_SettingType DEFAULT 'GridPolicy',
                SettingJson NVARCHAR(MAX) NOT NULL,
                Active BIT NOT NULL CONSTRAINT DF_UserSettings_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_UserSettings_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
            CREATE INDEX IX_UserSettings_Lookup ON UserSettings(Username, FeatureCode, ComponentId, SettingType);
        END

        -- 📜 Tạo bảng AuditLogs (Nhật ký kiểm toán thay đổi dữ liệu chi tiết) nếu chưa có
        IF OBJECT_ID('AuditLogs', 'U') IS NULL
        BEGIN
            CREATE TABLE AuditLogs (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                EntityName NVARCHAR(100) NOT NULL,
                RecordId INT NOT NULL,
                Action NVARCHAR(30) NOT NULL,
                ChangesJson NVARCHAR(MAX) NULL,
                ChangedBy NVARCHAR(100) NULL,
                ChangedAt DATETIME2 NOT NULL CONSTRAINT DF_AuditLogs_ChangedAt DEFAULT GETUTCDATE(),
                Active BIT NOT NULL CONSTRAINT DF_AuditLogs_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_AuditLogs_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
            CREATE INDEX IX_AuditLogs_Entity_Record ON AuditLogs(EntityName, RecordId, ChangedAt DESC);
        END

        -- 🛡️ Seed mặc định 2 Role chuẩn (Dev, User) nếu chưa có
        IF EXISTS (SELECT 1 FROM sys.tables WHERE name = 'Roles')
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'Dev')
            BEGIN
                SET IDENTITY_INSERT Roles ON;
                INSERT INTO Roles (Id, Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES (1, 'Dev', N'Nhà phát triển / Quản trị', N'Toàn quyền cấu hình và quản trị hệ thống', 1, GETUTCDATE(), 'system');
                SET IDENTITY_INSERT Roles OFF;
            END
            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'User')
            BEGIN
                SET IDENTITY_INSERT Roles ON;
                INSERT INTO Roles (Id, Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES (2, 'User', N'Người dùng nghiệp vụ', N'Người dùng thao tác nghiệp vụ theo phân quyền', 1, GETUTCDATE(), 'system');
                SET IDENTITY_INSERT Roles OFF;
            END
        END

        -- 🌳 Seed danh mục mẫu MasterDatas (CURRENCY, UNIT) nếu chưa có
        IF EXISTS (SELECT 1 FROM sys.tables WHERE name = 'MasterDatas')
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM MasterDatas WHERE Type = 'CURRENCY' AND Code = 'USD')
            BEGIN
                INSERT INTO MasterDatas (Code, Name, Type, SortOrder, Description, Active, CreatedDate, CreatedBy)
                VALUES ('USD', N'Đô la Mỹ (USD)', 'CURRENCY', 1, N'Tiền tệ quốc tế', 1, GETUTCDATE(), 'system');
            END
            IF NOT EXISTS (SELECT 1 FROM MasterDatas WHERE Type = 'CURRENCY' AND Code = 'VND')
            BEGIN
                INSERT INTO MasterDatas (Code, Name, Type, SortOrder, Description, Active, CreatedDate, CreatedBy)
                VALUES ('VND', N'Việt Nam Đồng (VNĐ)', 'CURRENCY', 2, N'Đồng Việt Nam', 1, GETUTCDATE(), 'system');
            END
            IF NOT EXISTS (SELECT 1 FROM MasterDatas WHERE Type = 'UNIT' AND Code = 'CONT')
            BEGIN
                INSERT INTO MasterDatas (Code, Name, Type, SortOrder, Description, Active, CreatedDate, CreatedBy)
                VALUES ('CONT', N'Container (Cont)', 'UNIT', 1, N'Đơn vị container chuẩn', 1, GETUTCDATE(), 'system');
            END
            IF NOT EXISTS (SELECT 1 FROM MasterDatas WHERE Type = 'UNIT' AND Code = 'PALLET')
            BEGIN
                INSERT INTO MasterDatas (Code, Name, Type, SortOrder, Description, Active, CreatedDate, CreatedBy)
                VALUES ('PALLET', N'Pallet (PLT)', 'UNIT', 2, N'Đơn vị kiện pallet', 1, GETUTCDATE(), 'system');
            END
            IF NOT EXISTS (SELECT 1 FROM MasterDatas WHERE Type = 'UNIT' AND Code = 'CARTON')
            BEGIN
                INSERT INTO MasterDatas (Code, Name, Type, SortOrder, Description, Active, CreatedDate, CreatedBy)
                VALUES ('CARTON', N'Carton (Thùng)', 'UNIT', 3, N'Đơn vị thùng carton', 1, GETUTCDATE(), 'system');
            END
        END

        -- 🔗 Seed liên kết UserRoles cho tài khoản hiện có nếu bảng UserRoles trống
        IF EXISTS (SELECT 1 FROM sys.tables WHERE name = 'UserRoles') AND EXISTS (SELECT 1 FROM sys.tables WHERE name = 'Users')
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM UserRoles)
            BEGIN
                INSERT INTO UserRoles (UserId, RoleId, Active, CreatedDate, CreatedBy)
                SELECT u.Id, ISNULL(r.Id, 2), 1, GETUTCDATE(), 'system'
                FROM Users u
                LEFT JOIN Roles r ON (u.Role = r.Code OR (u.Role IS NULL AND r.Code = 'User'));
            END
        END
    ";
    await db.Database.ExecuteSqlRawAsync(sqlMigration);
    Console.WriteLine("[DB] Database schema migrated: Components (JSON), MasterDatas, Roles, UserRoles, RolePermissions, UserSettings, AuditLogs.");
}
catch (Exception ex)
{
    Console.WriteLine($"[Notice] SQL Server connection attempt: {ex.Message}");
    Console.WriteLine("[Notice] Continuing application startup. Kiểm tra SQL Server (ADMIN-PC\\SQLEXPRESS) đã chạy chưa.");
}

app.MapControllers();
app.MapHub<UIForgeHub>("/hubs/uiforge");

app.Run();
