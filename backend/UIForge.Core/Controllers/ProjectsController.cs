using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UIForge.Core.Data;
using UIForge.Core.Entities;

namespace UIForge.Core.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ProjectsController : ControllerBase
    {
        private readonly UIForgeDbContext _context;

        public ProjectsController(UIForgeDbContext context)
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
            project.CreatedAt = DateTime.UtcNow;
            project.UpdatedAt = DateTime.UtcNow;

            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProjects), new { id = project.Id }, project);
        }
    }
}

