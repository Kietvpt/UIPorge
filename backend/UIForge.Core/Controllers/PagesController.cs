using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UIForge.Core.Data;
using UIForge.Core.DTOs;
using UIForge.Core.Entities;
using UIForge.Core.Services;

namespace UIForge.Core.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class PagesController : ControllerBase
    {
        private readonly UIForgeDbContext _context;
        private readonly ILogger<PagesController> _logger;

        public PagesController(UIForgeDbContext context, ILogger<PagesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Danh sách tất cả pages kèm cây components đầy đủ.
        /// Sắp xếp theo Order tăng dần, sau đó theo Id.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetPages()
        {
            var pages = await _context.Pages
                .Include(p => p.Components)
                .OrderBy(p => p.Order)
                .ThenBy(p => p.Id)
                .ToListAsync();

            return Ok(pages.Select(MapPage));
        }

        /// <summary>Chi tiết 1 page kèm cây components</summary>
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetPage(int id)
        {
            var page = await _context.Pages
                .Include(p => p.Components)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (page == null)
            {
                return NotFound(new { message = $"Page '{id}' not found." });
            }

            return Ok(MapPage(page));
        }

        /// <summary>Tạo mới một Page / Feature</summary>
        [HttpPost]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> CreatePage([FromBody] CreatePageDto dto)
        {
            try
            {
                var page = new Page
                {
                    ProjectId = dto.ProjectId ?? 1,
                    Code = dto.Code,
                    Name = string.IsNullOrWhiteSpace(dto.Name) ? "New Feature" : dto.Name,
                    Title = dto.Title,
                    Route = string.IsNullOrWhiteSpace(dto.Route) ? $"/feature-{Guid.NewGuid().ToString("N")[..6]}" : dto.Route,
                    Icon = dto.Icon ?? "Layers",
                    ParentId = dto.ParentId > 0 ? dto.ParentId : null,
                    Order = dto.Order,
                    IsMenu = dto.IsMenu,
                    IsGroup = dto.IsGroup,
                    Active = dto.Active,
                    EntityName = dto.EntityName,
                    Description = dto.Description,
                    ScriptFile = dto.ScriptFile,
                    ScriptContent = dto.ScriptContent,
                    LayoutTemplateId = dto.LayoutTemplateId ?? "sidebar-left",
                    FeaturePropsJson = FeaturePropsRaw(dto.FeatureProps),
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                };

                _context.Pages.Add(page);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetPage), new { id = page.Id }, MapPage(page));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to create page.");
                return StatusCode(500, new { message = "Error creating page.", details = ex.Message });
            }
        }

        /// <summary>
        /// Lưu giao diện: upsert page + thay toàn bộ cây components.
        /// Chỉ tài khoản role "Dev" mới được lưu.
        /// </summary>
        [HttpPost("save")]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> SavePage([FromBody] SavePageDto dto)
        {
            await using var tx = await _context.Database.BeginTransactionAsync();
            try
            {
                int pageIntId = 0;
                bool isExisting = !string.IsNullOrEmpty(dto.Id) && int.TryParse(dto.Id, out pageIntId) && pageIntId > 0;
                var page = isExisting ? await _context.Pages.FindAsync(pageIntId) : null;

                if (page == null)
                {
                    page = new Page
                    {
                        ProjectId = dto.ProjectId ?? 1,
                        Code = dto.Code,
                        Name = dto.Name,
                        Title = dto.Title,
                        Route = dto.Route,
                        Icon = dto.Icon,
                        ParentId = dto.ParentId > 0 ? dto.ParentId : null,
                        Order = dto.Order ?? 0,
                        IsMenu = dto.IsMenu ?? true,
                        IsGroup = dto.IsGroup ?? false,
                        Active = dto.Active ?? true,
                        EntityName = dto.EntityName,
                        Description = dto.Description,
                        ScriptFile = dto.ScriptFile,
                        ScriptContent = dto.ScriptContent,
                        LayoutTemplateId = dto.LayoutTemplateId,
                        LayoutConfigJson = LayoutConfigRaw(dto),
                        FeaturePropsJson = FeaturePropsRaw(dto.FeatureProps),
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow,
                    };
                    _context.Pages.Add(page);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    if (dto.Code != null) page.Code = dto.Code;
                    page.Name = dto.Name;
                    if (dto.Title != null) page.Title = dto.Title;
                    page.Route = dto.Route;
                    page.Icon = dto.Icon ?? page.Icon;
                    page.ParentId = (dto.ParentId.HasValue && dto.ParentId.Value > 0 && dto.ParentId.Value != page.Id) ? dto.ParentId.Value : null;
                    if (dto.Order.HasValue) page.Order = dto.Order.Value;
                    if (dto.IsMenu.HasValue) page.IsMenu = dto.IsMenu.Value;
                    if (dto.IsGroup.HasValue) page.IsGroup = dto.IsGroup.Value;
                    if (dto.Active.HasValue) page.Active = dto.Active.Value;
                    if (dto.EntityName != null) page.EntityName = dto.EntityName;
                    if (dto.Description != null) page.Description = dto.Description;
                    page.ScriptFile = dto.ScriptFile ?? page.ScriptFile;
                    if (dto.ScriptContent != null) page.ScriptContent = dto.ScriptContent;
                    page.LayoutTemplateId = dto.LayoutTemplateId;
                    page.LayoutConfigJson = LayoutConfigRaw(dto) ?? page.LayoutConfigJson;
                    var featurePropsJson = FeaturePropsRaw(dto.FeatureProps);
                    if (featurePropsJson != null) page.FeaturePropsJson = featurePropsJson;
                    page.UpdatedAt = DateTime.UtcNow;
                    await _context.SaveChangesAsync();
                }

                await _context.Components.Where(c => c.PageId == page.Id).ExecuteDeleteAsync();
                await ComponentTreeMapper.InsertTreeAsync(_context, dto.Components, page.Id);

                await tx.CommitAsync();
                return Ok(new { success = true, pageId = page.Id, updatedAt = page.UpdatedAt });
            }
            catch (Exception ex)
            {
                await tx.RollbackAsync();
                _logger.LogError(ex, "Failed to save page layout.");
                return StatusCode(500, new { message = "Error saving layout.", details = ex.Message });
            }
        }

        /// <summary>
        /// Kéo thả cập nhật phân tầng và thứ tự hàng loạt (Drag & Drop Reorder).
        /// Nhận danh sách các mục: Id, ParentId, Order, IsGroup.
        /// </summary>
        [HttpPut("reorder")]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> ReorderPages([FromBody] List<ReorderPageItemDto> items)
        {
            if (items == null || items.Count == 0)
            {
                return BadRequest(new { message = "Items list cannot be empty." });
            }

            await using var tx = await _context.Database.BeginTransactionAsync();
            try
            {
                var pageIds = items.Select(i => i.Id).ToList();
                var pages = await _context.Pages.Where(p => pageIds.Contains(p.Id)).ToListAsync();
                var pageDict = pages.ToDictionary(p => p.Id);

                foreach (var item in items)
                {
                    if (pageDict.TryGetValue(item.Id, out var page))
                    {
                        // Ngăn chặn tạo chu kỳ cha-con: ParentId không thể bằng chính Id của nó
                        if (item.ParentId.HasValue && item.ParentId.Value == item.Id)
                        {
                            page.ParentId = null;
                        }
                        else
                        {
                            page.ParentId = item.ParentId > 0 ? item.ParentId : null;
                        }

                        page.Order = item.Order;
                        if (item.IsGroup.HasValue)
                        {
                            page.IsGroup = item.IsGroup.Value;
                        }
                        page.UpdatedAt = DateTime.UtcNow;
                    }
                }

                await _context.SaveChangesAsync();
                await tx.CommitAsync();

                return Ok(new { success = true, updatedCount = items.Count });
            }
            catch (Exception ex)
            {
                await tx.RollbackAsync();
                _logger.LogError(ex, "Failed to reorder pages.");
                return StatusCode(500, new { message = "Error reordering pages.", details = ex.Message });
            }
        }

        /// <summary>
        /// Cập nhật thuộc tính Feature (Tab 1 FeaturePropertiesModal).
        /// </summary>
        [HttpPut("{id:int}/properties")]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> UpdateProperties(int id, [FromBody] UpdateFeaturePropertiesDto dto)
        {
            var page = await _context.Pages
                .Include(p => p.Components)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (page == null)
            {
                return NotFound(new { message = $"Page '{id}' not found." });
            }

            try
            {
                if (dto.Code != null) page.Code = dto.Code;
                if (!string.IsNullOrWhiteSpace(dto.Name)) page.Name = dto.Name;
                if (dto.Title != null) page.Title = dto.Title;
                if (!string.IsNullOrWhiteSpace(dto.Route)) page.Route = dto.Route;
                if (dto.Icon != null) page.Icon = dto.Icon;

                if (dto.ParentId.HasValue && dto.ParentId.Value == page.Id)
                {
                    return BadRequest(new { message = "A feature cannot be its own parent." });
                }
                page.ParentId = (dto.ParentId.HasValue && dto.ParentId.Value > 0) ? dto.ParentId.Value : null;

                if (dto.Order.HasValue) page.Order = dto.Order.Value;
                if (dto.IsMenu.HasValue) page.IsMenu = dto.IsMenu.Value;
                if (dto.IsGroup.HasValue) page.IsGroup = dto.IsGroup.Value;
                if (dto.Active.HasValue) page.Active = dto.Active.Value;
                if (dto.EntityName != null) page.EntityName = dto.EntityName;
                if (dto.Description != null) page.Description = dto.Description;
                if (dto.ScriptFile != null) page.ScriptFile = dto.ScriptFile;
                if (dto.ScriptContent != null) page.ScriptContent = dto.ScriptContent;
                if (dto.LayoutTemplateId != null) page.LayoutTemplateId = dto.LayoutTemplateId;

                var rawProps = FeaturePropsRaw(dto.FeatureProps);
                if (rawProps != null)
                {
                    page.FeaturePropsJson = rawProps;
                }

                page.UpdatedAt = DateTime.UtcNow;
                await _context.SaveChangesAsync();

                return Ok(new { success = true, page = MapPage(page) });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to update page properties for id {PageId}.", id);
                return StatusCode(500, new { message = "Error updating properties.", details = ex.Message });
            }
        }

        /// <summary>
        /// Nhân bản một Feature kèm toàn bộ cây UIComponents của nó.
        /// </summary>
        [HttpPost("clone/{id:int}")]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> ClonePage(int id)
        {
            var source = await _context.Pages
                .Include(p => p.Components)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (source == null)
            {
                return NotFound(new { message = $"Source page '{id}' not found." });
            }

            await using var tx = await _context.Database.BeginTransactionAsync();
            try
            {
                var uniqueSuffix = Guid.NewGuid().ToString("N")[..6];
                var newPage = new Page
                {
                    ProjectId = source.ProjectId,
                    Code = !string.IsNullOrEmpty(source.Code) ? $"{source.Code}_CPY" : null,
                    Name = $"{source.Name} (Copy)",
                    Title = source.Title != null ? $"{source.Title} (Copy)" : $"{source.Name} (Copy)",
                    Route = $"{source.Route.TrimEnd('/')}-copy-{uniqueSuffix}",
                    Icon = source.Icon,
                    ParentId = source.ParentId,
                    Order = source.Order + 1,
                    IsMenu = source.IsMenu,
                    IsGroup = source.IsGroup,
                    Active = source.Active,
                    EntityName = source.EntityName,
                    Description = source.Description,
                    ScriptFile = source.ScriptFile,
                    ScriptContent = source.ScriptContent,
                    LayoutTemplateId = source.LayoutTemplateId,
                    LayoutConfigJson = source.LayoutConfigJson,
                    FeaturePropsJson = source.FeaturePropsJson,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                };

                _context.Pages.Add(newPage);
                await _context.SaveChangesAsync();

                // Nhân bản toàn bộ cây components
                var oldComponents = await _context.Components
                    .Where(c => c.PageId == source.Id)
                    .ToListAsync();

                if (oldComponents.Count > 0)
                {
                    var oldToNewMap = new Dictionary<int, UIComponent>();

                    // 1. Sao chép các nút gốc (ParentId == null)
                    var roots = oldComponents.Where(c => c.ParentId == null).ToList();
                    foreach (var old in roots)
                    {
                        var newComp = new UIComponent
                        {
                            PageId = newPage.Id,
                            ParentId = null,
                            NodeId = old.NodeId,
                            Type = old.Type,
                            PropsJson = old.PropsJson,
                            StyleJson = old.StyleJson,
                            EventsJson = old.EventsJson,
                            DataBindingJson = old.DataBindingJson,
                            ValidationJson = old.ValidationJson,
                            PermissionsJson = old.PermissionsJson,
                            Order = old.Order,
                            CreatedAt = DateTime.UtcNow,
                            UpdatedAt = DateTime.UtcNow,
                        };
                        _context.Components.Add(newComp);
                        oldToNewMap[old.Id] = newComp;
                    }
                    await _context.SaveChangesAsync();

                    // 2. Sao chép các nút con theo từng tầng
                    var remaining = oldComponents.Where(c => c.ParentId != null).ToList();
                    int maxIterations = 20;
                    while (remaining.Count > 0 && maxIterations-- > 0)
                    {
                        var currentBatch = remaining.Where(c => oldToNewMap.ContainsKey(c.ParentId!.Value)).ToList();
                        if (currentBatch.Count == 0)
                        {
                            // Nếu có nút mồ côi không tìm thấy cha, gắn vào gốc
                            foreach (var orphan in remaining)
                            {
                                var newOrphan = new UIComponent
                                {
                                    PageId = newPage.Id,
                                    ParentId = null,
                                    NodeId = orphan.NodeId,
                                    Type = orphan.Type,
                                    PropsJson = orphan.PropsJson,
                                    StyleJson = orphan.StyleJson,
                                    EventsJson = orphan.EventsJson,
                                    DataBindingJson = orphan.DataBindingJson,
                                    ValidationJson = orphan.ValidationJson,
                                    PermissionsJson = orphan.PermissionsJson,
                                    Order = orphan.Order,
                                    CreatedAt = DateTime.UtcNow,
                                    UpdatedAt = DateTime.UtcNow,
                                };
                                _context.Components.Add(newOrphan);
                                oldToNewMap[orphan.Id] = newOrphan;
                            }
                            await _context.SaveChangesAsync();
                            break;
                        }

                        foreach (var child in currentBatch)
                        {
                            var parentNew = oldToNewMap[child.ParentId!.Value];
                            var newChild = new UIComponent
                            {
                                PageId = newPage.Id,
                                ParentId = parentNew.Id,
                                NodeId = child.NodeId,
                                Type = child.Type,
                                PropsJson = child.PropsJson,
                                StyleJson = child.StyleJson,
                                EventsJson = child.EventsJson,
                                DataBindingJson = child.DataBindingJson,
                                ValidationJson = child.ValidationJson,
                                PermissionsJson = child.PermissionsJson,
                                Order = child.Order,
                                CreatedAt = DateTime.UtcNow,
                                UpdatedAt = DateTime.UtcNow,
                            };
                            _context.Components.Add(newChild);
                            oldToNewMap[child.Id] = newChild;
                            remaining.Remove(child);
                        }
                        await _context.SaveChangesAsync();
                    }
                }

                await tx.CommitAsync();

                var createdPage = await _context.Pages
                    .Include(p => p.Components)
                    .FirstOrDefaultAsync(p => p.Id == newPage.Id);

                return CreatedAtAction(nameof(GetPage), new { id = newPage.Id }, MapPage(createdPage ?? newPage));
            }
            catch (Exception ex)
            {
                await tx.RollbackAsync();
                _logger.LogError(ex, "Failed to clone page {PageId}.", id);
                return StatusCode(500, new { message = "Error cloning page.", details = ex.Message });
            }
        }

        /// <summary>
        /// Bật/tắt trạng thái Active của Feature (Deactivate / Activate).
        /// </summary>
        [HttpPut("{id:int}/toggle-active")]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> ToggleActive(int id)
        {
            var page = await _context.Pages.FindAsync(id);
            if (page == null)
            {
                return NotFound(new { message = $"Page '{id}' not found." });
            }

            page.Active = !page.Active;
            page.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();

            return Ok(new { success = true, id = page.Id, active = page.Active });
        }

        /// <summary>Xóa page (chỉ Dev)</summary>
        [HttpDelete("{id:int}")]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> DeletePage(int id)
        {
            var page = await _context.Pages.FindAsync(id);
            if (page == null) return NotFound(new { message = $"Page '{id}' not found." });

            _context.Pages.Remove(page);
            await _context.SaveChangesAsync();
            return Ok(new { success = true });
        }

        private static object MapPage(Page p) => new
        {
            p.Id,
            p.ProjectId,
            p.Code,
            p.Name,
            p.Title,
            p.Route,
            p.Icon,
            p.ParentId,
            p.Order,
            p.IsMenu,
            p.IsGroup,
            p.Active,
            p.EntityName,
            p.Description,
            p.ScriptFile,
            p.ScriptContent,
            p.LayoutTemplateId,
            LayoutConfig = ParseJsonOrNull(p.LayoutConfigJson),
            FeatureProps = ParseJsonOrNull(p.FeaturePropsJson),
            Components = ComponentTreeMapper.BuildTree(p.Components),
            p.CreatedAt,
            p.UpdatedAt,
        };

        private static JsonNode? ParseJsonOrNull(string? json)
        {
            if (string.IsNullOrWhiteSpace(json)) return null;
            try { return JsonNode.Parse(json); } catch { return null; }
        }

        private static string? LayoutConfigRaw(SavePageDto dto)
            => dto.LayoutConfig.HasValue
               && dto.LayoutConfig.Value.ValueKind != JsonValueKind.Undefined
               && dto.LayoutConfig.Value.ValueKind != JsonValueKind.Null
                ? dto.LayoutConfig.Value.GetRawText()
                : null;

        private static string? FeaturePropsRaw(JsonElement? props)
            => props.HasValue
               && props.Value.ValueKind != JsonValueKind.Undefined
               && props.Value.ValueKind != JsonValueKind.Null
                ? props.Value.GetRawText()
                : null;
    }
}
