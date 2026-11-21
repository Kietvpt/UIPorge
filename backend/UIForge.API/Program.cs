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
    var options = new DbContextOptionsBuilder<AppDbContext>()
        .UseUIForgeDatabase(config, branch)
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
    .AddUIForgeControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
        options.JsonSerializerOptions.NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.AllowReadingFromString;
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

    var provider = BranchConnectionFactory.GetDatabaseProvider(app.Configuration);
    if (provider == "SqlServer")
    {
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

        -- 🌳 MIGRATION BẢNG PAGES: HỆ THỐNG PHÂN TẦNG FEATURE, KÉO THẢ & FEATURE PROPERTIES
        IF EXISTS (SELECT 1 FROM sys.tables WHERE name = 'Pages')
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'ParentId')
                ALTER TABLE Pages ADD ParentId INT NULL;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'Order')
                ALTER TABLE Pages ADD [Order] INT NOT NULL CONSTRAINT DF_Pages_Order DEFAULT 0;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'Code')
                ALTER TABLE Pages ADD Code NVARCHAR(50) NULL;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'Title')
                ALTER TABLE Pages ADD Title NVARCHAR(200) NULL;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'EntityName')
                ALTER TABLE Pages ADD EntityName NVARCHAR(100) NULL;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'Description')
                ALTER TABLE Pages ADD Description NVARCHAR(500) NULL;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'IsMenu')
                ALTER TABLE Pages ADD IsMenu BIT NOT NULL CONSTRAINT DF_Pages_IsMenu DEFAULT 1;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'IsGroup')
                ALTER TABLE Pages ADD IsGroup BIT NOT NULL CONSTRAINT DF_Pages_IsGroup DEFAULT 0;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'Active')
                ALTER TABLE Pages ADD Active BIT NOT NULL CONSTRAINT DF_Pages_Active DEFAULT 1;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'ScriptContent')
                ALTER TABLE Pages ADD ScriptContent NVARCHAR(MAX) NULL;

            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('Pages') AND name = 'FeaturePropsJson')
                ALTER TABLE Pages ADD FeaturePropsJson NVARCHAR(MAX) NULL;

            -- Đánh chỉ mục tăng tốc độ truy vấn phân cấp và sắp xếp
            IF NOT EXISTS (SELECT 1 FROM sys.indexes WHERE name = 'IX_Pages_Hierarchy' AND object_id = OBJECT_ID('Pages'))
            BEGIN
                CREATE INDEX IX_Pages_Hierarchy ON Pages (ParentId, [Order], IsMenu, Active);
            END

            -- Backfill dữ liệu an toàn cho các trang hiện có qua dynamic SQL (EXEC) để tránh lỗi compile-time column name
            EXEC(N'
                UPDATE Pages SET [Order] = Id WHERE [Order] = 0 OR [Order] IS NULL;
                UPDATE Pages SET Active = 1 WHERE Active IS NULL;
                UPDATE Pages SET IsMenu = 1 WHERE IsMenu IS NULL;
                UPDATE Pages SET IsGroup = 0 WHERE IsGroup IS NULL;
                UPDATE Pages SET Title = Name WHERE Title IS NULL OR Title = '''';
                UPDATE Pages SET Code = ''F'' + RIGHT(''0000000'' + CAST(Id AS NVARCHAR(10)), 7) WHERE Code IS NULL OR Code = '''';
                
                -- Chuẩn hóa mã Code & Entity theo đúng Hình 3 cho trang FCL Import
                UPDATE Pages 
                SET Code = ''F0013226'', Title = N''FCL Import'', EntityName = ''Transaction'', Description = N''Hệ thống quản lý lô hàng nhập FCL Logistics''
                WHERE Route = ''/fcl-import'' AND (Code LIKE ''F000000%'' OR Code IS NULL);

                -- Tạo nhóm Menu Cha mẫu SHIPMENTS (chuẩn Hình 1) nếu chưa có
                IF NOT EXISTS (SELECT 1 FROM Pages WHERE Route = ''/shipments'' OR Name = ''SHIPMENTS'')
                BEGIN
                    INSERT INTO Pages (ProjectId, Name, Title, Route, Icon, LayoutTemplateId, [Order], Code, IsMenu, IsGroup, Active, CreatedAt, UpdatedAt)
                    VALUES (1, ''SHIPMENTS'', N''SHIPMENTS'', ''/shipments'', ''Truck'', ''sidebar-left'', 10, ''F_SHIPMENTS'', 1, 1, 1, GETUTCDATE(), GETUTCDATE());
                    
                    DECLARE @ShipmentsId INT = SCOPE_IDENTITY();
                    -- Gắn trang FCL Import vào làm con của nhóm SHIPMENTS
                    UPDATE Pages SET ParentId = @ShipmentsId, [Order] = 1 WHERE Route = ''/fcl-import'';
                END
            ');
        END

        -- 🛡️ MIGRATION BẢNG FEATUREPOLICIES (Chuẩn 13 cột khớp 100% Core C#)
        IF OBJECT_ID('FeaturePolicies', 'U') IS NULL
        BEGIN
            CREATE TABLE FeaturePolicies (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                FeatureId INT NOT NULL,
                FeatureCode NVARCHAR(50) NULL,
                EntityName NVARCHAR(100) NULL,
                RoleId INT NULL,
                UserId INT NULL,
                CanRead BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanRead DEFAULT 1,
                CanWrite BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanWrite DEFAULT 0,
                CanWriteAll BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanWriteAll DEFAULT 0,
                CanDelete BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanDelete DEFAULT 0,
                CanDeleteAll BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanDeleteAll DEFAULT 0,
                CanDeactivate BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanDeactivate DEFAULT 0,
                CanShare BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanShare DEFAULT 0,
                RecordId INT NOT NULL CONSTRAINT DF_FeaturePolicies_RecordId DEFAULT 0,
                LockUpdateAfterCreated INT NULL,
                LockDeleteAfterCreated INT NULL,
                Description NVARCHAR(500) NULL,
                Active BIT NOT NULL CONSTRAINT DF_FeaturePolicies_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_FeaturePolicies_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
            CREATE INDEX IX_FeaturePolicies_Feature_Role_User ON FeaturePolicies(FeatureId, RoleId, UserId, Active);
        END
        ELSE
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'CanWriteAll')
                ALTER TABLE FeaturePolicies ADD CanWriteAll BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanWriteAll DEFAULT 0;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'CanDeleteAll')
                ALTER TABLE FeaturePolicies ADD CanDeleteAll BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanDeleteAll DEFAULT 0;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'CanDeactivate')
                ALTER TABLE FeaturePolicies ADD CanDeactivate BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanDeactivate DEFAULT 0;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'CanShare')
                ALTER TABLE FeaturePolicies ADD CanShare BIT NOT NULL CONSTRAINT DF_FeaturePolicies_CanShare DEFAULT 0;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'RecordId')
                ALTER TABLE FeaturePolicies ADD RecordId INT NOT NULL CONSTRAINT DF_FeaturePolicies_RecordId DEFAULT 0;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'LockUpdateAfterCreated')
                ALTER TABLE FeaturePolicies ADD LockUpdateAfterCreated INT NULL;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'LockDeleteAfterCreated')
                ALTER TABLE FeaturePolicies ADD LockDeleteAfterCreated INT NULL;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('FeaturePolicies') AND name = 'Description')
                ALTER TABLE FeaturePolicies ADD Description NVARCHAR(500) NULL;
        END

        -- 🧩 MIGRATION BẢNG COMPONENTPOLICIES (Chuẩn 5 quyền: CanRead, CanWrite, CanWriteAll, CanDelete, CanDeactivate)
        IF OBJECT_ID('ComponentPolicies', 'U') IS NULL
        BEGIN
            CREATE TABLE ComponentPolicies (
                Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
                PageId INT NOT NULL,
                NodeId NVARCHAR(100) NOT NULL,
                ComponentId INT NULL,
                RoleId INT NULL,
                UserId INT NULL,
                FieldName NVARCHAR(100) NULL,
                CanRead BIT NOT NULL CONSTRAINT DF_ComponentPolicies_CanRead DEFAULT 1,
                CanWrite BIT NOT NULL CONSTRAINT DF_ComponentPolicies_CanWrite DEFAULT 0,
                CanWriteAll BIT NOT NULL CONSTRAINT DF_ComponentPolicies_CanWriteAll DEFAULT 0,
                CanDelete BIT NOT NULL CONSTRAINT DF_ComponentPolicies_CanDelete DEFAULT 0,
                CanDeactivate BIT NOT NULL CONSTRAINT DF_ComponentPolicies_CanDeactivate DEFAULT 0,
                Description NVARCHAR(500) NULL,
                Active BIT NOT NULL CONSTRAINT DF_ComponentPolicies_Active DEFAULT 1,
                CreatedDate DATETIME2 NOT NULL CONSTRAINT DF_ComponentPolicies_CreatedDate DEFAULT GETUTCDATE(),
                CreatedBy NVARCHAR(MAX) NULL,
                UpdatedDate DATETIME2 NULL,
                UpdatedBy NVARCHAR(MAX) NULL
            );
            CREATE INDEX IX_ComponentPolicies_Page_Node_Role_User ON ComponentPolicies(PageId, NodeId, RoleId, UserId, Active);
        END
        ELSE
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('ComponentPolicies') AND name = 'CanWriteAll')
                ALTER TABLE ComponentPolicies ADD CanWriteAll BIT NOT NULL CONSTRAINT DF_ComponentPolicies_CanWriteAll DEFAULT 0;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('ComponentPolicies') AND name = 'CanDeactivate')
                ALTER TABLE ComponentPolicies ADD CanDeactivate BIT NOT NULL CONSTRAINT DF_ComponentPolicies_CanDeactivate DEFAULT 0;
            IF NOT EXISTS (SELECT 1 FROM sys.columns WHERE object_id = OBJECT_ID('ComponentPolicies') AND name = 'Description')
                ALTER TABLE ComponentPolicies ADD Description NVARCHAR(500) NULL;
        END

        -- 🛡️ Seed danh mục Roles chuẩn khớp ảnh Core C# và phân công logistics thực tế
        IF EXISTS (SELECT 1 FROM sys.tables WHERE name = 'Roles')
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'Admin')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('Admin', N'Quản trị hệ thống', N'Quản trị viên toàn hệ thống', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'System')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('System', N'Hệ thống tự động', N'Tài khoản tác vụ hệ thống nền', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'Shipment')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('Shipment', N'Khai thác / Giao nhận', N'Bộ phận quản lý lô hàng và vận đơn FCL/LCL', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'Pricing')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('Pricing', N'Báo giá / Cước phí', N'Bộ phận định giá và quản lý chi phí cước logistics', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'SALES')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('SALES', N'Kinh doanh (Sales)', N'Bộ phận tiếp thị và bán cước', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'SALESGROUP')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('SALESGROUP', N'Nhóm Kinh doanh', N'Trưởng nhóm và quản lý kinh doanh', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'DOCS_CUSTOMS')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('DOCS_CUSTOMS', N'DOCS AND CUSTOMS', N'Bộ phận chứng từ và thủ tục hải quan', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'CS')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('CS', N'Chăm sóc khách hàng (CS)', N'Bộ phận dịch vụ khách hàng', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'TRUCKING')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('TRUCKING', N'Vận tải nội địa (Trucking)', N'Điều phối xe tải và giao hàng nội địa', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'OPS')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('OPS', N'Hiện trường (Operations)', N'Giao nhận tại cảng và kho bãi', 1, GETUTCDATE(), 'system');

            IF NOT EXISTS (SELECT 1 FROM Roles WHERE Code = 'DEPUTY_GEN')
                INSERT INTO Roles (Code, Name, Description, Active, CreatedDate, CreatedBy)
                VALUES ('DEPUTY_GEN', N'Deputy General', N'Ban điều hành / Phó Tổng Giám Đốc', 1, GETUTCDATE(), 'system');
        END

        -- 🚀 SEED DỮ LIỆU MẪU KỊCH BẢN FCL IMPORT (F0013226) CHO DEV, SHIPMENT, PRICING
        EXEC(N'
            DECLARE @FclPageId INT;
            SELECT TOP 1 @FclPageId = Id FROM Pages WHERE Route = ''/fcl-import'' OR Code = ''F0013226'';

            IF @FclPageId IS NOT NULL AND EXISTS (SELECT 1 FROM sys.tables WHERE name = ''FeaturePolicies'')
            BEGIN
                -- 1. Seed FeaturePolicies trên FCL Import (nếu chưa có rule cho trang này)
                IF NOT EXISTS (SELECT 1 FROM FeaturePolicies WHERE FeatureId = @FclPageId)
                BEGIN
                    -- Toàn quyền: Dev, Admin, System, Shipment, DOCS_CUSTOMS
                    INSERT INTO FeaturePolicies (FeatureId, FeatureCode, EntityName, RoleId, CanRead, CanWrite, CanWriteAll, CanDelete, CanDeleteAll, CanDeactivate, CanShare, RecordId, Active, Description, CreatedDate, CreatedBy)
                    SELECT @FclPageId, ''F0013226'', ''Transaction'', r.Id, 1, 1, 1, 1, 1, 1, 1, 0, 1, N''Toàn quyền vận hành FCL Import'', GETUTCDATE(), ''system''
                    FROM Roles r
                    WHERE r.Code IN (''Dev'', ''Admin'', ''System'', ''Shipment'', ''DOCS_CUSTOMS'');

                    -- Giới hạn Feature (Chỉ xem): Pricing, SALES, SALESGROUP
                    INSERT INTO FeaturePolicies (FeatureId, FeatureCode, EntityName, RoleId, CanRead, CanWrite, CanWriteAll, CanDelete, CanDeleteAll, CanDeactivate, CanShare, RecordId, Active, Description, CreatedDate, CreatedBy)
                    SELECT @FclPageId, ''F0013226'', ''Transaction'', r.Id, 1, 0, 0, 0, 0, 0, 0, 0, 1, N''Chỉ xem tổng thể, sửa chi tiết theo Component/GridPolicy'', GETUTCDATE(), ''system''
                    FROM Roles r
                    WHERE r.Code IN (''Pricing'', ''SALES'', ''SALESGROUP'');
                END

                -- 2. Seed ComponentPolicies trên FCL Import (cấp quyền CanWriteAll cho Pricing trên các trường giá cước)
                IF EXISTS (SELECT 1 FROM sys.tables WHERE name = ''ComponentPolicies'')
                BEGIN
                    IF NOT EXISTS (SELECT 1 FROM ComponentPolicies WHERE PageId = @FclPageId)
                    BEGIN
                        DECLARE @PricingRoleId INT;
                        SELECT TOP 1 @PricingRoleId = Id FROM Roles WHERE Code = ''Pricing'';

                        IF @PricingRoleId IS NOT NULL
                        BEGIN
                            -- Component trên form: Vendor, PTerm, Notes, Commodity
                            INSERT INTO ComponentPolicies (PageId, NodeId, FieldName, RoleId, CanRead, CanWrite, CanWriteAll, CanDelete, CanDeactivate, Active, Description, CreatedDate, CreatedBy)
                            VALUES 
                            (@FclPageId, ''fld_vendor'', ''VendorId'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Nhập/chọn Nhà cung cấp'', GETUTCDATE(), ''system''),
                            (@FclPageId, ''fld_pterm'', ''PTerm'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Sửa Điều khoản thanh toán'', GETUTCDATE(), ''system''),
                            (@FclPageId, ''fld_notes'', ''Notes'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Nhập Ghi chú chi phí cước'', GETUTCDATE(), ''system''),
                            (@FclPageId, ''fld_commodity'', ''Commodity'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Cập nhật Tên hàng hóa'', GETUTCDATE(), ''system''),
                            -- Cột trên GridPolicy / ForgeTable: POL, POD, BuyingRate, SellingRate
                            (@FclPageId, ''col_pol'', ''PolId'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Chọn Cảng đi'', GETUTCDATE(), ''system''),
                            (@FclPageId, ''col_pod'', ''PodId'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Chọn Cảng đến'', GETUTCDATE(), ''system''),
                            (@FclPageId, ''col_buyingRate'', ''BuyingRate'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Nhập Giá mua cước (Buy Rate)'', GETUTCDATE(), ''system''),
                            (@FclPageId, ''col_sellingRate'', ''SellingRate'', @PricingRoleId, 1, 1, 1, 0, 0, 1, N''Pricing: Nhập Giá bán cước (Sell Rate)'', GETUTCDATE(), ''system'');
                        END
                    END
                END
            END
        ');
    ";
        await db.Database.ExecuteSqlRawAsync(sqlMigration);
        Console.WriteLine("[DB] SQL Server database schema migrated: Components (JSON), MasterDatas, Roles, UserRoles, RolePermissions, UserSettings, AuditLogs, Pages (Hierarchy & Features), FeaturePolicies (13 columns), ComponentPolicies (5 permissions).");
    }
    else
    {
        Console.WriteLine($"[DB] Multi-DB Provider '{provider}' active. EnsureCreatedAsync initialized all tables and seed data.");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"[Notice] Database connection attempt: {ex.Message}");
    Console.WriteLine("[Notice] Continuing application startup.");
}

app.MapControllers();
app.MapHub<UIForgeHub>("/hubs/uiforge");

app.Run();
