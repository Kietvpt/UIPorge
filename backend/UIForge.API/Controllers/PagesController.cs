using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UIForge.API.Data;
using UIForge.API.Models.DTOs;
using UIForge.API.Models.Entities;

namespace UIForge.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PagesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ILogger<PagesController> _logger;

        public PagesController(AppDbContext context, ILogger<PagesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPage(string id)
        {
            var page = await _context.Pages.FindAsync(id);
            if (page == null)
            {
                return NotFound(new { message = $"Page '{id}' not found." });
            }

            return Ok(page);
        }

        [HttpPost("save")]
        public async Task<IActionResult> SavePage([FromBody] SavePageDto dto)
        {
            try
            {
                var pageId = string.IsNullOrEmpty(dto.Id) ? "page-01" : dto.Id;
                var page = await _context.Pages.FindAsync(pageId);

                var componentsString = dto.Components.ValueKind != System.Text.Json.JsonValueKind.Undefined
                    ? dto.Components.GetRawText()
                    : "[]";

                if (page == null)
                {
                    page = new Page
                    {
                        Id = pageId,
                        ProjectId = string.IsNullOrEmpty(dto.ProjectId) ? "demo-project-001" : dto.ProjectId,
                        Name = dto.Name,
                        Route = dto.Route,
                        LayoutTemplateId = dto.LayoutTemplateId,
                        ComponentsJson = componentsString,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow,
                    };
                    _context.Pages.Add(page);
                }
                else
                {
                    page.Name = dto.Name;
                    page.Route = dto.Route;
                    page.LayoutTemplateId = dto.LayoutTemplateId;
                    page.ComponentsJson = componentsString;
                    page.UpdatedAt = DateTime.UtcNow;
                }

                await _context.SaveChangesAsync();
                return Ok(new { success = true, pageId = page.Id, updatedAt = page.UpdatedAt });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to save page layout.");
                return StatusCode(500, new { message = "Error saving layout.", details = ex.Message });
            }
        }
    }
}
