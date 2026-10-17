using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using UIForge.API.Data;
using UIForge.API.Services;

var builder = WebApplication.CreateBuilder(args);

// ============================================================
// 1. Multi-branch Database (Code First)
//    Mỗi request resolve AppDbContext theo "branch" claim trong JWT
//    -> UIPorge_BetaV1, UIPorge_BetaV2... (mặc định BetaV1)
// ============================================================
builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton<TenantDbContextFactory>();
builder.Services.AddSingleton<JwtTokenService>();

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

// 3. Controllers & JSON options
builder.Services.AddControllers()
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
// Các branch khác sẽ được tạo lúc login lần đầu.
try
{
    var factory = app.Services.GetRequiredService<TenantDbContextFactory>();
    await using var db = factory.Create(null);
    await db.Database.EnsureCreatedAsync();
    Console.WriteLine("[DB] Default branch database is ready.");
}
catch (Exception ex)
{
    Console.WriteLine($"[Notice] SQL Server connection attempt: {ex.Message}");
    Console.WriteLine("[Notice] Continuing application startup. Kiểm tra SQL Server (ADMIN-PC\\SQLEXPRESS) đã chạy chưa.");
}

app.MapControllers();

app.Run();
