using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UIForge.Core.Services;

namespace UIForge.Core.Controllers
{
    /// <summary>
    /// 📑 ReportsController: Bộ API kết xuất Báo cáo PDF (%PDF-1.4 & HTML Print) và Hợp đồng mẫu Word (.docx).
    /// Kế thừa và chuẩn hóa từ FileUploadController & DocxRegexReplacer của Core C#.
    /// </summary>
    [ApiController]
    [Route("api/core/reports")]
    public class ReportsController : ControllerBase
    {
        private readonly PdfReportService _pdfService;
        private readonly DocxReplacerService _docxService;
        private readonly ILogger<ReportsController> _logger;

        public ReportsController(
            ILogger<ReportsController> logger,
            PdfReportService? pdfService = null,
            DocxReplacerService? docxService = null)
        {
            _logger = logger;
            _pdfService = pdfService ?? new PdfReportService();
            _docxService = docxService ?? new DocxReplacerService();
        }

        /// <summary>
        /// 📄 POST /api/core/reports/pdf
        /// Xuất báo cáo PDF nhị phân (%PDF-1.4) hoặc xem trước trang in HTML (hỗ trợ in trực tiếp từ trình duyệt).
        /// </summary>
        [HttpPost("pdf")]
        public IActionResult ExportPdf([FromBody] PdfReportRequest request, [FromQuery] bool html = false)
        {
            if (request == null)
            {
                return BadRequest(new { success = false, message = "Dữ liệu yêu cầu xuất báo cáo không hợp lệ." });
            }

            try
            {
                var safeTitle = string.IsNullOrWhiteSpace(request.Title) ? "Report" : PdfReportService.RemoveDiacritics(request.Title).Trim().Replace(" ", "_");
                var fileName = $"{safeTitle}_{DateTime.UtcNow:yyyyMMdd_HHmmss}.pdf";

                if (html)
                {
                    var htmlContent = _pdfService.GenerateHtmlPrintView(request);
                    return Content(htmlContent, "text/html; charset=utf-8");
                }

                var pdfBytes = _pdfService.GeneratePdf(request);
                return File(pdfBytes, "application/pdf", fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi xuất báo cáo PDF.");
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }

        /// <summary>
        /// 📝 POST /api/core/reports/docx
        /// Điền dữ liệu vào biểu mẫu hợp đồng / văn bản Word (.docx) chuẩn OpenXML.
        /// </summary>
        [HttpPost("docx")]
        public async Task<IActionResult> ExportDocx([FromBody] DocxReportRequest request)
        {
            if (request == null)
            {
                return BadRequest(new { success = false, message = "Dữ liệu yêu cầu xuất file Word không hợp lệ." });
            }

            try
            {
                var docxBytes = _docxService.GenerateOrFillDocx(request);
                var safeTitle = string.IsNullOrWhiteSpace(request.Title) ? "Document" : PdfReportService.RemoveDiacritics(request.Title).Trim().Replace(" ", "_");
                var fileName = $"{safeTitle}_{DateTime.UtcNow:yyyyMMdd_HHmmss}.docx";

                return File(
                    docxBytes,
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Lỗi khi điền biểu mẫu Word docx.");
                return StatusCode(500, new { success = false, message = ex.Message });
            }
        }
    }
}
