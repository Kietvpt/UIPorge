using System;
using System.Collections.Generic;
using System.Text.Json;

namespace UIForge.Core.DTOs
{
    /// <summary>
    /// DTO đại diện cho một phần tử trong danh sách kéo thả reorder
    /// </summary>
    public class ReorderPageItemDto
    {
        public int Id { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; }
        public bool? IsGroup { get; set; }
    }

    /// <summary>
    /// DTO cập nhật toàn diện cấu hình Feature (Tab 1 FeaturePropertiesModal)
    /// </summary>
    public class UpdateFeaturePropertiesDto
    {
        public string? Code { get; set; }
        public string? Name { get; set; }
        public string? Title { get; set; }
        public string? Route { get; set; }
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
        public string? LayoutTemplateId { get; set; }
        public JsonElement? FeatureProps { get; set; }
    }

    /// <summary>
    /// DTO tạo mới một Page / Feature
    /// </summary>
    public class CreatePageDto
    {
        public int? ProjectId { get; set; }
        public string? Code { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Title { get; set; }
        public string Route { get; set; } = "/";
        public string? Icon { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; } = 0;
        public bool IsMenu { get; set; } = true;
        public bool IsGroup { get; set; } = false;
        public bool Active { get; set; } = true;
        public string? EntityName { get; set; }
        public string? Description { get; set; }
        public string? ScriptFile { get; set; }
        public string? ScriptContent { get; set; }
        public string LayoutTemplateId { get; set; } = "sidebar-left";
        public JsonElement? FeatureProps { get; set; }
    }
}
