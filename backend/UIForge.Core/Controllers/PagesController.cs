using System;
using System.Linq;
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

        /// <summary>Danh sách tất cả pages kèm cây components đầy đủ</summary>
        [HttpGet]
        public async Task<IActionResult> GetPages()
        {
            var pages = await _context.Pages
                .Include(p => p.Components)
                .OrderBy(p => p.CreatedAt)
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
                        Name = dto.Name,
                        Route = dto.Route,
                        Icon = dto.Icon,
                        ScriptFile = dto.ScriptFile,
                        LayoutTemplateId = dto.LayoutTemplateId,
                        LayoutConfigJson = LayoutConfigRaw(dto),
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow,
                    };
                    _context.Pages.Add(page);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    page.Name = dto.Name;
                    page.Route = dto.Route;
                    page.Icon = dto.Icon ?? page.Icon;
                    page.ScriptFile = dto.ScriptFile ?? page.ScriptFile;
                    page.LayoutTemplateId = dto.LayoutTemplateId;
                    page.LayoutConfigJson = LayoutConfigRaw(dto) ?? page.LayoutConfigJson;
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
            p.Name,
            p.Route,
            p.Icon,
            p.ScriptFile,
            p.LayoutTemplateId,
            LayoutConfig = ParseJsonOrNull(p.LayoutConfigJson),
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
               && dto.LayoutConfig.Value.ValueKind != System.Text.Json.JsonValueKind.Undefined
               && dto.LayoutConfig.Value.ValueKind != System.Text.Json.JsonValueKind.Null
                ? dto.LayoutConfig.Value.GetRawText()
                : null;
    }
}

