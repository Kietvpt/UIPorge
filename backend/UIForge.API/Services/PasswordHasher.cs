using System.Security.Cryptography;
using System.Text;

namespace UIForge.API.Services
{
    /// <summary>
    /// Hash mật khẩu SHA256 + salt tĩnh (đủ dùng cho môi trường dev / nội bộ).
    /// Production nên thay bằng ASP.NET Core Identity PasswordHasher hoặc BCrypt.
    /// </summary>
    public static class PasswordHasher
    {
        private const string Salt = "UIForge::StaticSalt::v1::";

        public static string Hash(string password)
        {
            var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(Salt + password));
            return Convert.ToHexString(bytes).ToLowerInvariant();
        }

        public static bool Verify(string password, string hash)
            => string.Equals(Hash(password), hash, StringComparison.OrdinalIgnoreCase);
    }
}
