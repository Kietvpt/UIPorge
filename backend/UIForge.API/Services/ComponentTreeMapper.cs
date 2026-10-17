using System.Text.Json;
using System.Text.Json.Nodes;
using UIForge.API.Data;
using UIForge.API.Models.Entities;

namespace UIForge.API.Services
{
    /// <summary>
    /// Chuyển đổi cây component (JSON lồng nhau từ frontend)
    /// <-> các dòng phẳng trong bảng UIComponents (quan hệ cha-con qua ParentId identity).
    /// </summary>
    public static class ComponentTreeMapper
    {
        // ---------- Lưu: cây JSON -> dòng phẳng (Id identity do DB sinh) ----------

        /// <summary>
        /// Insert cây components vào DB theo từng tầng (roots trước, con sau)
        /// để Id identity của cha được DB sinh ra trước khi gán cho con.
        /// </summary>
        public static async Task InsertTreeAsync(AppDbContext context, JsonElement components, string pageId)
        {
            if (components.ValueKind == JsonValueKind.Array)
                await InsertLevelAsync(context, components, pageId, null);
        }

        private static async Task InsertLevelAsync(AppDbContext context, JsonElement nodes, string pageId, int? parentId)
        {
            var batch = new List<(JsonElement Node, UIComponent Row)>();
            var autoOrder = 0;

            foreach (var node in nodes.EnumerateArray())
            {
                autoOrder++;
                var row = new UIComponent
                {
                    PageId = pageId,
                    ParentId = parentId,
                    NodeId = GetStr(node, "id") ?? Guid.NewGuid().ToString("N"),
                    Type = GetStr(node, "type") ?? "Container",
                    PropsJson = GetRaw(node, "props", "{}"),
                    StyleJson = GetRaw(node, "style", "{}"),
                    EventsJson = GetRaw(node, "events", "[]"),
                    Order = GetInt(node, "order") ?? autoOrder,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                };
                batch.Add((node, row));
                context.Components.Add(row);
            }

            // Save 1 lần cho cả tầng -> DB sinh Id identity cho từng row
            await context.SaveChangesAsync();

            // Đệ quy xuống tầng con với ParentId = Id identity thật vừa được sinh
            foreach (var (node, row) in batch)
            {
                if (node.TryGetProperty("children", out var children)
                    && children.ValueKind == JsonValueKind.Array
                    && children.GetArrayLength() > 0)
                {
                    await InsertLevelAsync(context, children, pageId, row.Id);
                }
            }
        }

        // ---------- Đọc: dòng phẳng -> cây JSON (id/parentId trả về dùng NodeId phía client) ----------

        public static JsonArray BuildTree(IEnumerable<UIComponent> rows)
        {
            var list = rows.ToList();
            var nodeIdById = list.ToDictionary(r => r.Id, r => r.NodeId);
            var lookup = list.ToLookup(r => r.ParentId);
            return BuildLevel(lookup, nodeIdById, null);
        }

        private static JsonArray BuildLevel(
            ILookup<int?, UIComponent> lookup,
            Dictionary<int, string> nodeIdById,
            int? parentKey)
        {
            var arr = new JsonArray();
            foreach (var r in lookup[parentKey].OrderBy(r => r.Order))
            {
                var obj = new JsonObject
                {
                    ["id"] = r.NodeId,
                    ["type"] = r.Type,
                    ["parentId"] = r.ParentId.HasValue && nodeIdById.TryGetValue(r.ParentId.Value, out var pid) ? pid : null,
                    ["pageId"] = r.PageId,
                    ["props"] = ParseOr(r.PropsJson, "{}"),
                    ["style"] = ParseOr(r.StyleJson, "{}"),
                    ["events"] = ParseOr(r.EventsJson, "[]"),
                    ["order"] = r.Order,
                };
                obj["children"] = BuildLevel(lookup, nodeIdById, r.Id);
                arr.Add(obj);
            }
            return arr;
        }

        // ---------- JSON helpers ----------

        private static string? GetStr(JsonElement node, string prop)
            => node.TryGetProperty(prop, out var el) && el.ValueKind == JsonValueKind.String
                ? el.GetString()
                : null;

        private static int? GetInt(JsonElement node, string prop)
            => node.TryGetProperty(prop, out var el) && el.ValueKind == JsonValueKind.Number && el.TryGetInt32(out var v)
                ? v
                : null;

        private static string GetRaw(JsonElement node, string prop, string fallback)
            => node.TryGetProperty(prop, out var el)
               && el.ValueKind != JsonValueKind.Undefined
               && el.ValueKind != JsonValueKind.Null
                ? el.GetRawText()
                : fallback;

        private static JsonNode? ParseOr(string? json, string fallback)
        {
            try
            {
                return JsonNode.Parse(string.IsNullOrWhiteSpace(json) ? fallback : json);
            }
            catch
            {
                return JsonNode.Parse(fallback);
            }
        }
    }
}
