using System.Text.Json;

namespace UIForge.Core.DTOs
{
    public class SavePageDto
    {
        public string? Id { get; set; }
        public int? ProjectId { get; set; }
        public string? Code { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Title { get; set; }
        public string Route { get; set; } = "/";
        public string? Icon { get; set; }
        public int? ParentId { get; set; }
        public int? Order { get; set; }
        public bool? IsMenu { get; set; }
        public bool? IsGroup { get; set; }
        public bool? Active { get; set; }
        public string? EntityName { get; set; }
        public string? Description { get; set; }
        public string? ScriptFile { get; set; }
        public string? ScriptContent { get; set; }
        public string LayoutTemplateId { get; set; } = "sidebar-left";
        public JsonElement? LayoutConfig { get; set; }
        public JsonElement? FeatureProps { get; set; }
        public JsonElement Components { get; set; }
    }
}
