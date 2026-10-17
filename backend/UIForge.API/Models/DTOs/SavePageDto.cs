using System.Text.Json;

namespace UIForge.API.Models.DTOs
{
    public class SavePageDto
    {
        public string? Id { get; set; }
        public string? ProjectId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Route { get; set; } = "/";
        public string LayoutTemplateId { get; set; } = "sidebar-left";
        public JsonElement Components { get; set; }
    }
}
