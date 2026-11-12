using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace UIForge.Core.Services
{
    public class PdfReportColumn
    {
        public string Key { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public double Width { get; set; } = 80;
        public string Align { get; set; } = "left"; // left, center, right
    }

    public class PdfReportRequest
    {
        public string Title { get; set; } = "BÁO CÁO TỔNG HỢP";
        public string? Subtitle { get; set; }
        public string? Watermark { get; set; }
        public List<PdfReportColumn> Columns { get; set; } = new();
        public List<Dictionary<string, object?>> Rows { get; set; } = new();
        public List<string>? FooterSigners { get; set; }
        public string PageSize { get; set; } = "A4"; // A4, A5
    }

    /// <summary>
    /// 📄 PdfReportService: Dịch vụ xuất báo cáo PDF chuẩn %PDF-1.4 và HTML Print Template chuyên nghiệp.
    /// Kế thừa và hiện đại hóa tính năng HtmlToPdf (FileUploadController) của Core C#.
    /// 100% Native C# BCL, Zero external NuGet dependency.
    /// </summary>
    public class PdfReportService
    {
        /// <summary>
        /// Tạo mảng byte %PDF-1.4 nhị phân hoàn chỉnh chuẩn quốc tế
        /// </summary>
        public byte[] GeneratePdf(PdfReportRequest request)
        {
            var isA5 = string.Equals(request.PageSize, "A5", StringComparison.OrdinalIgnoreCase);
            var pageWidth = isA5 ? 419.53 : 595.28;
            var pageHeight = isA5 ? 595.28 : 841.89;
            var marginX = 36.0;
            var contentWidth = pageWidth - (marginX * 2);

            var columns = request.Columns;
            if (columns.Count == 0 && request.Rows.Count > 0)
            {
                columns = request.Rows[0].Keys.Select(k => new PdfReportColumn
                {
                    Key = k,
                    Title = k,
                    Width = contentWidth / Math.Max(1, request.Rows[0].Keys.Count),
                    Align = "left"
                }).ToList();
            }

            // Chuẩn hóa tỷ lệ độ rộng các cột
            var totalAssignedWidth = columns.Sum(c => c.Width);
            if (totalAssignedWidth <= 0) totalAssignedWidth = contentWidth;
            var colWidths = columns.Select(c => (c.Width / totalAssignedWidth) * contentWidth).ToList();

            // Xây dựng dòng lệnh PDF Graphics & Text (Content Stream)
            var cs = new StringBuilder(8192);

            // 1. Watermark nếu có
            if (!string.IsNullOrWhiteSpace(request.Watermark))
            {
                var wmText = EscapePdfString(RemoveDiacritics(request.Watermark.ToUpperInvariant()));
                cs.AppendLine("q");
                cs.AppendLine("0.93 0.94 0.96 rg"); // Rất mờ
                cs.AppendLine("/F2 42 Tf");
                cs.AppendLine($"1 0 0 1 {pageWidth * 0.25} {pageHeight * 0.5} cm");
                cs.AppendLine("0.7071 0.7071 -0.7071 0.7071 0 0 cm"); // Xoay 45 độ
                cs.AppendLine($"({wmText}) Tj");
                cs.AppendLine("Q");
            }

            var currentY = pageHeight - 50.0;

            // 2. Tiêu đề báo cáo (Title)
            cs.AppendLine("BT");
            cs.AppendLine("/F2 16 Tf");
            cs.AppendLine("0.06 0.22 0.54 rg"); // Xanh Navy đậm
            var titleText = EscapePdfString(RemoveDiacritics(request.Title));
            cs.AppendLine($"{marginX} {currentY} Td");
            cs.AppendLine($"({titleText}) Tj");
            cs.AppendLine("ET");

            currentY -= 18.0;

            // 3. Phụ đề (Subtitle) & Ngày xuất
            var subtitle = !string.IsNullOrWhiteSpace(request.Subtitle)
                ? request.Subtitle
                : $"Ngay xuat: {DateTime.Now:dd/MM/yyyy HH:mm}";
            cs.AppendLine("BT");
            cs.AppendLine("/F1 9 Tf");
            cs.AppendLine("0.4 0.45 0.5 rg");
            cs.AppendLine($"{marginX} {currentY} Td");
            cs.AppendLine($"({EscapePdfString(RemoveDiacritics(subtitle))}) Tj");
            cs.AppendLine("ET");

            currentY -= 20.0;

            // 4. Header Bảng (Dark Slate #0F172A)
            var headerHeight = 22.0;
            cs.AppendLine("q");
            cs.AppendLine("0.06 0.09 0.16 rg"); // #0F172A
            cs.AppendLine($"{marginX:0.0} {currentY - headerHeight:0.0} {contentWidth:0.0} {headerHeight:0.0} re f");
            cs.AppendLine("Q");

            // Text của Header (chữ trắng)
            var curX = marginX;
            for (int i = 0; i < columns.Count; i++)
            {
                var col = columns[i];
                var colW = colWidths[i];
                var headerTitle = EscapePdfString(RemoveDiacritics(col.Title));

                cs.AppendLine("BT");
                cs.AppendLine("/F2 9 Tf");
                cs.AppendLine("1 1 1 rg");
                cs.AppendLine($"{curX + 5:0.0} {currentY - headerHeight + 6:0.0} Td");
                cs.AppendLine($"({headerTitle}) Tj");
                cs.AppendLine("ET");

                curX += colW;
            }

            currentY -= headerHeight;

            // 5. Dữ liệu bảng (Rows)
            var rowHeight = 18.0;
            var rowIndex = 0;
            var maxRowsOnFirstPage = (int)((currentY - 140.0) / rowHeight);

            var displayedRows = request.Rows.Take(Math.Max(1, maxRowsOnFirstPage)).ToList();

            foreach (var row in displayedRows)
            {
                var isEven = rowIndex % 2 == 0;
                // Tô nền dòng chẵn mờ
                if (isEven)
                {
                    cs.AppendLine("q");
                    cs.AppendLine("0.97 0.98 0.99 rg");
                    cs.AppendLine($"{marginX:0.0} {currentY - rowHeight:0.0} {contentWidth:0.0} {rowHeight:0.0} re f");
                    cs.AppendLine("Q");
                }

                // Đường viền dưới ô
                cs.AppendLine("q");
                cs.AppendLine("0.88 0.91 0.94 RG");
                cs.AppendLine("0.5 w");
                cs.AppendLine($"{marginX:0.0} {currentY - rowHeight:0.0} m {marginX + contentWidth:0.0} {currentY - rowHeight:0.0} l S");
                cs.AppendLine("Q");

                curX = marginX;
                for (int i = 0; i < columns.Count; i++)
                {
                    var col = columns[i];
                    var colW = colWidths[i];
                    row.TryGetValue(col.Key, out var rawVal);
                    var cellText = EscapePdfString(RemoveDiacritics(FormatCellText(rawVal)));

                    // Cắt ngắn nếu quá dài
                    if (cellText.Length > 25 && colW < 80)
                    {
                        cellText = cellText.Substring(0, 22) + "...";
                    }

                    cs.AppendLine("BT");
                    cs.AppendLine("/F1 8.5 Tf");
                    cs.AppendLine("0.1 0.15 0.2 rg");
                    cs.AppendLine($"{curX + 4:0.0} {currentY - rowHeight + 5:0.0} Td");
                    cs.AppendLine($"({cellText}) Tj");
                    cs.AppendLine("ET");

                    curX += colW;
                }

                currentY -= rowHeight;
                rowIndex++;
            }

            // 6. Chữ ký chân trang (Signers)
            var signers = request.FooterSigners ?? new List<string> { "Nguoi lap bieu", "Ke toan truong", "Giam doc / Thu truong" };
            var signerY = Math.Max(50.0, currentY - 40.0);
            var signerColWidth = contentWidth / Math.Max(1, signers.Count);

            for (int s = 0; s < signers.Count; s++)
            {
                var signerTitle = EscapePdfString(RemoveDiacritics(signers[s]));
                var signerX = marginX + (s * signerColWidth) + (signerColWidth * 0.15);

                cs.AppendLine("BT");
                cs.AppendLine("/F2 9.5 Tf");
                cs.AppendLine("0.1 0.15 0.2 rg");
                cs.AppendLine($"{signerX:0.0} {signerY:0.0} Td");
                cs.AppendLine($"({signerTitle}) Tj");
                cs.AppendLine("ET");

                cs.AppendLine("BT");
                cs.AppendLine("/F1 8 Tf");
                cs.AppendLine("0.45 0.5 0.55 rg");
                cs.AppendLine($"{signerX + 5:0.0} {signerY - 12:0.0} Td");
                cs.AppendLine("((Ky, ho ten)) Tj");
                cs.AppendLine("ET");
            }

            // Đóng gói cấu trúc nhị phân PDF-1.4
            return BuildPdfBinary(pageWidth, pageHeight, cs.ToString());
        }

        /// <summary>
        /// Tạo bản HTML Print Preview chuẩn in ấn pixel-perfect
        /// </summary>
        public string GenerateHtmlPrintView(PdfReportRequest request)
        {
            var sb = new StringBuilder(16384);
            sb.AppendLine("<!DOCTYPE html>");
            sb.AppendLine("<html lang=\"vi\"><head><meta charset=\"UTF-8\">");
            sb.AppendLine($"<title>{HtmlEncode(request.Title)}</title>");
            sb.AppendLine("<style>");
            sb.AppendLine("@page { size: " + (request.PageSize ?? "A4") + "; margin: 15mm; }");
            sb.AppendLine("body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; margin: 0; padding: 20px; font-size: 13px; }");
            sb.AppendLine(".report-header { text-align: center; margin-bottom: 24px; border-bottom: 2px solid #0f172a; padding-bottom: 12px; }");
            sb.AppendLine(".report-title { font-size: 22px; font-weight: bold; color: #0f172a; text-transform: uppercase; margin: 0 0 6px 0; }");
            sb.AppendLine(".report-sub { font-size: 13px; color: #64748b; margin: 0; }");
            sb.AppendLine("table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }");
            sb.AppendLine("th { background-color: #0f172a; color: #ffffff; font-weight: 600; padding: 8px 10px; font-size: 12px; text-align: left; border: 1px solid #0f172a; }");
            sb.AppendLine("td { padding: 6px 10px; border: 1px solid #cbd5e1; font-size: 12px; }");
            sb.AppendLine("tr:nth-child(even) { background-color: #f8fafc; }");
            sb.AppendLine(".signers { display: flex; justify-content: space-around; margin-top: 40px; page-break-inside: avoid; }");
            sb.AppendLine(".signer-box { text-align: center; width: 30%; }");
            sb.AppendLine(".signer-title { font-weight: bold; font-size: 13px; margin-bottom: 4px; }");
            sb.AppendLine(".signer-note { font-style: italic; font-size: 11px; color: #64748b; margin-bottom: 60px; }");
            sb.AppendLine("@media print { .no-print { display: none; } }");
            sb.AppendLine("</style></head><body>");

            sb.AppendLine("<div class=\"no-print\" style=\"text-align: right; margin-bottom: 16px;\">");
            sb.AppendLine("<button onclick=\"window.print()\" style=\"background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600;\">🖨️ In Báo Cáo / Xuất PDF</button>");
            sb.AppendLine("</div>");

            sb.AppendLine("<div class=\"report-header\">");
            sb.AppendLine($"<h1 class=\"report-title\">{HtmlEncode(request.Title)}</h1>");
            if (!string.IsNullOrWhiteSpace(request.Subtitle))
            {
                sb.AppendLine($"<p class=\"report-sub\">{HtmlEncode(request.Subtitle)}</p>");
            }
            sb.AppendLine($"<p class=\"report-sub\" style=\"margin-top: 4px;\">Thời gian xuất: {DateTime.Now:dd/MM/yyyy HH:mm}</p>");
            sb.AppendLine("</div>");

            sb.AppendLine("<table><thead><tr>");
            sb.AppendLine("<th style=\"width: 40px; text-align: center;\">STT</th>");
            foreach (var col in request.Columns)
            {
                var alignStyle = col.Align?.ToLowerInvariant() switch
                {
                    "center" => "text-align: center;",
                    "right" => "text-align: right;",
                    _ => "text-align: left;"
                };
                sb.AppendLine($"<th style=\"{alignStyle}\">{HtmlEncode(col.Title)}</th>");
            }
            sb.AppendLine("</tr></thead><tbody>");

            var stt = 1;
            foreach (var row in request.Rows)
            {
                sb.AppendLine("<tr>");
                sb.AppendLine($"<td style=\"text-align: center; color: #64748b;\">{stt++}</td>");
                foreach (var col in request.Columns)
                {
                    row.TryGetValue(col.Key, out var rawVal);
                    var text = FormatCellText(rawVal);
                    var alignStyle = col.Align?.ToLowerInvariant() switch
                    {
                        "center" => "text-align: center;",
                        "right" => "text-align: right;",
                        _ => "text-align: left;"
                    };
                    sb.AppendLine($"<td style=\"{alignStyle}\">{HtmlEncode(text)}</td>");
                }
                sb.AppendLine("</tr>");
            }
            sb.AppendLine("</tbody></table>");

            var signers = request.FooterSigners ?? new List<string> { "Người lập biểu", "Kế toán trưởng", "Thủ trưởng đơn vị" };
            sb.AppendLine("<div class=\"signers\">");
            foreach (var s in signers)
            {
                sb.AppendLine("<div class=\"signer-box\">");
                sb.AppendLine($"<div class=\"signer-title\">{HtmlEncode(s)}</div>");
                sb.AppendLine("<div class=\"signer-note\">(Ký, họ tên và đóng dấu)</div>");
                sb.AppendLine("</div>");
            }
            sb.AppendLine("</div>");

            sb.AppendLine("</body></html>");
            return sb.ToString();
        }

        private static byte[] BuildPdfBinary(double width, double height, string contentStream)
        {
            var contentBytes = Encoding.ASCII.GetBytes(contentStream);
            using var ms = new MemoryStream();
            using var writer = new StreamWriter(ms, Encoding.ASCII);

            var offsets = new List<long>();

            writer.Write("%PDF-1.4\r\n%\xE2\xE3\xCF\xD3\r\n");
            writer.Flush();

            // Obj 1: Catalog
            offsets.Add(ms.Position);
            writer.Write("1 0 obj\r\n<< /Type /Catalog /Pages 2 0 R >>\r\nendobj\r\n");
            writer.Flush();

            // Obj 2: Pages
            offsets.Add(ms.Position);
            writer.Write("2 0 obj\r\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\r\nendobj\r\n");
            writer.Flush();

            // Obj 3: Page
            offsets.Add(ms.Position);
            writer.Write($"3 0 obj\r\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {width:0.00} {height:0.00}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\r\nendobj\r\n");
            writer.Flush();

            // Obj 4: Font Helvetica Normal
            offsets.Add(ms.Position);
            writer.Write("4 0 obj\r\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\r\nendobj\r\n");
            writer.Flush();

            // Obj 5: Font Helvetica Bold
            offsets.Add(ms.Position);
            writer.Write("5 0 obj\r\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\r\nendobj\r\n");
            writer.Flush();

            // Obj 6: Content Stream
            offsets.Add(ms.Position);
            writer.Write($"6 0 obj\r\n<< /Length {contentBytes.Length} >>\r\nstream\r\n");
            writer.Flush();
            ms.Write(contentBytes, 0, contentBytes.Length);
            writer.Write("\r\nendstream\r\nendobj\r\n");
            writer.Flush();

            // Xref
            var startXref = ms.Position;
            writer.Write("xref\r\n0 7\r\n0000000000 65535 f \r\n");
            foreach (var off in offsets)
            {
                writer.Write($"{off:0000000000} 00000 n \r\n");
            }

            // Trailer
            writer.Write($"trailer\r\n<< /Size 7 /Root 1 0 R >>\r\nstartxref\r\n{startXref}\r\n%%EOF\r\n");
            writer.Flush();

            return ms.ToArray();
        }

        private static string EscapePdfString(string input)
        {
            return input
                .Replace("\\", "\\\\")
                .Replace("(", "\\(")
                .Replace(")", "\\)");
        }

        private static string HtmlEncode(string? input)
        {
            if (string.IsNullOrEmpty(input)) return string.Empty;
            return System.Net.WebUtility.HtmlEncode(input);
        }

        private static string FormatCellText(object? val)
        {
            if (val == null) return string.Empty;
            if (val is DateTime dt) return dt.ToString("dd/MM/yyyy");
            if (val is JsonElement je)
            {
                if (je.ValueKind == JsonValueKind.String) return je.GetString() ?? string.Empty;
                return je.ToString();
            }
            return val.ToString() ?? string.Empty;
        }

        public static string RemoveDiacritics(string text)
        {
            if (string.IsNullOrWhiteSpace(text)) return string.Empty;
            var normalizedString = text.Normalize(NormalizationForm.FormD);
            var stringBuilder = new StringBuilder();

            foreach (var c in normalizedString)
            {
                var unicodeCategory = CharUnicodeInfo.GetUnicodeCategory(c);
                if (unicodeCategory != UnicodeCategory.NonSpacingMark)
                {
                    stringBuilder.Append(c);
                }
            }

            return stringBuilder.ToString().Normalize(NormalizationForm.FormC)
                .Replace("đ", "d")
                .Replace("Đ", "D");
        }
    }
}
