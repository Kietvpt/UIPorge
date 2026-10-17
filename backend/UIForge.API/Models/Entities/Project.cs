using System.ComponentModel.DataAnnotations;

namespace UIForge.API.Models.Entities
{
    public class Project
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString("N");

        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string? Description { get; set; }

        public string OwnerId { get; set; } = "default-user";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public ICollection<Page> Pages { get; set; } = new List<Page>();
    }
}
