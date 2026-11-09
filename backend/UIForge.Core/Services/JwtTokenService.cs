using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UIForge.Core.Entities;

namespace UIForge.Core.Services
{
    public class JwtTokenService
    {
        private readonly IConfiguration _config;

        public JwtTokenService(IConfiguration config)
        {
            _config = config;
        }

        public (string Token, DateTime ExpiresAt) CreateToken(User user, string branch)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"] ?? "DefaultFallbackSecretKeyForUIForgeCoreFramework2026!#*"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.UtcNow.AddHours(
                double.Parse(_config["Jwt:ExpiresHours"] ?? "12"));

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim("fullName", user.FullName ?? user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim("branch", branch),
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"] ?? "UIForge",
                audience: _config["Jwt:Audience"] ?? "UIForgeClient",
                claims: claims,
                expires: expires,
                signingCredentials: creds);

            return (new JwtSecurityTokenHandler().WriteToken(token), expires);
        }
    }
}

