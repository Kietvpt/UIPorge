using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UIForge.API.Models.DTOs;
using UIForge.API.Services;

namespace UIForge.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly TenantDbContextFactory _dbFactory;
        private readonly JwtTokenService _jwt;
        private readonly ILogger<AuthController> _logger;

        public AuthController(TenantDbContextFactory dbFactory, JwtTokenService jwt, ILogger<AuthController> logger)
        {
            _dbFactory = dbFactory;
            _jwt = jwt;
            _logger = logger;
        }

        /// <summary>
        /// Đăng nhập bằng username + password + branch.
        /// Branch quyết định database được kết nối: UIPorge_{branch} (mặc định BetaV1).
        /// Nếu database của branch chưa tồn tại sẽ tự động được tạo (code-first) kèm user seed.
        /// </summary>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            string branch;
            try
            {
                branch = BranchConnectionFactory.Normalize(dto.Branch, HttpContext.RequestServices.GetRequiredService<IConfiguration>());
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

            try
            {
                await using var db = _dbFactory.Create(branch);

                // Tự động provision database cho branch mới (code-first + seed users)
                await db.Database.EnsureCreatedAsync();

                var user = await db.Users.FirstOrDefaultAsync(u => u.Username == dto.Username);
                if (user == null || !PasswordHasher.Verify(dto.Password, user.PasswordHash))
                {
                    return Unauthorized(new { message = "Sai tên đăng nhập hoặc mật khẩu." });
                }

                var (token, expiresAt) = _jwt.CreateToken(user, branch);

                return Ok(new AuthResponseDto
                {
                    Token = token,
                    ExpiresAt = expiresAt,
                    Branch = branch,
                    User = new UserInfoDto
                    {
                        Id = user.Id,
                        Username = user.Username,
                        FullName = user.FullName,
                        Role = user.Role,
                    },
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Login failed for user '{Username}' on branch '{Branch}'.", dto.Username, branch);
                return StatusCode(500, new
                {
                    message = $"Không thể kết nối database 'UIPorge_{branch}'. Kiểm tra SQL Server đã chạy chưa.",
                    details = ex.Message,
                });
            }
        }
    }
}
