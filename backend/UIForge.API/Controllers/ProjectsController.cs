using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UIForge.API.Data;
using UIForge.API.Models.Entities;

namespace UIForge.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // Yêu cầu đăng nhập
    public class ProjectsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProjects()
        {
            var projects = await _context.Projects
                .Include(p => p.Pages)
                .OrderByDescending(p => p.UpdatedAt)
                .ToListAsync();

            return Ok(projects);
        }

        [HttpPost]
        [Authorize(Roles = "Dev")]
        public async Task<IActionResult> CreateProject([FromBody] Project project)
        {
            project.Id = Guid.NewGuid().ToString("N");
            project.CreatedAt = DateTime.UtcNow;
            project.UpdatedAt = DateTime.UtcNow;

            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProjects), new { id = project.Id }, project);
        }
    }
}
