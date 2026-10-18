namespace UIForge.API.Models.DTOs
{
    public class LoginDto
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

        /// <summary>
        /// Branch = hậu tố của tên database (vd "BetaV1" -> UIPorge_BetaV1).
        /// Để trống sẽ dùng branch mặc định.
        /// </summary>
        public string? Branch { get; set; }
    }

    public class AuthResponseDto
    {
        public string Token { get; set; } = string.Empty;
        public DateTime ExpiresAt { get; set; }
        public string Branch { get; set; } = string.Empty;
        public UserInfoDto User { get; set; } = new();
    }

    public class UserInfoDto
    {
        public string Id { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string? FullName { get; set; }
        public string Role { get; set; } = "User";
    }
}
