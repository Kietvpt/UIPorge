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
        /// Tự động deduplicate NodeId nếu client gửi trùng id trong cùng 1 page.
        /// </summary>
        public static async Task InsertTreeAsync(AppDbContext context, JsonElement components, int pageId)
        {
            if (components.ValueKind == JsonValueKind.Array)
            {
                var usedNodeIds = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                await InsertLevelAsync(context, components, pageId, null, usedNodeIds);
            }
        }

        private static async Task InsertLevelAsync(
            AppDbContext context,
            JsonElement nodes,
            int pageId,
            int? parentId,
            HashSet<string> usedNodeIds)
        {
            var batch = new List<(JsonElement Node, UIComponent Row)>();
            var autoOrder = 0;

            foreach (var node in nodes.EnumerateArray())
            {
                autoOrder++;
                var rawId = GetStr(node, "id") ?? Guid.NewGuid().ToString("N");

                // Đảm bảo NodeId luôn unique trong phạm vi 1 page, tránh vi phạm IX_Components_PageId_NodeId
                var uniqueNodeId = rawId;
                var suffixIndex = 1;
                while (!usedNodeIds.Add(uniqueNodeId))
                {
                    uniqueNodeId = $"{rawId}-{suffixIndex++}";
                }

                var row = new UIComponent
                {
                    PageId = pageId,
                    ParentId = parentId,
                    NodeId = uniqueNodeId,
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
                    await InsertLevelAsync(context, children, pageId, row.Id, usedNodeIds);
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

        // ---------- Helpers ----------

        private static string? GetStr(JsonElement el, string prop)
            => el.TryGetProperty(prop, out var v) && v.ValueKind == JsonValueKind.String
                ? v.GetString()
                : null;

        private static int? GetInt(JsonElement el, string prop)
            => el.TryGetProperty(prop, out var v) && v.ValueKind == JsonValueKind.Number
                ? v.GetInt32()
                : null;

        private static string GetRaw(JsonElement el, string prop, string fallback)
            => el.TryGetProperty(prop, out var v) && v.ValueKind != JsonValueKind.Undefined && v.ValueKind != JsonValueKind.Null
                ? v.GetRawText()
                : fallback;

        private static JsonNode? ParseOr(string? raw, string fallback)
        {
            try
            {
                return JsonNode.Parse(string.IsNullOrWhiteSpace(raw) ? fallback : raw);
            }
            catch
            {
                return JsonNode.Parse(fallback);
            }
        }
    }
}
