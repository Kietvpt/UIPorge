using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UIForge.API.Models.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Username { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string PasswordHash { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? FullName { get; set; }

        /// <summary>"Dev" = được chỉnh sửa giao diện, "User" = người dùng thường (chỉ xem)</summary>
        [Required]
        [MaxLength(20)]
        public string Role { get; set; } = "User";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
