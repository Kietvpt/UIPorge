using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace UIForge.Core.Services
{
    public class DocxReportRequest
    {
        public string Title { get; set; } = "HỢP ĐỒNG / BIÊN BẢN NGHIỆP VỤ";
        public Dictionary<string, string> Placeholders { get; set; } = new(StringComparer.OrdinalIgnoreCase);
        public List<Dictionary<string, object?>>? TableData { get; set; }
        public string? TemplateFileName { get; set; }
    }

    /// <summary>
    /// 📝 DocxReplacerService: Dịch vụ điền dữ liệu và thay thế Regex Placeholder vào file mẫu Word (.docx) chuẩn OpenXML.
    /// Kế thừa và chuẩn hóa từ DocxRegexReplacer.cs của Core C#.
    /// 100% Native .NET 8 BCL ZipArchive, Zero external NuGet dependency.
    /// </summary>
    public class DocxReplacerService
    {
        /// <summary>
        /// Điền dữ liệu vào template có sẵn hoặc tự sinh template mẫu chuẩn
        /// </summary>
        public byte[] GenerateOrFillDocx(DocxReportRequest request, byte[]? customTemplateBytes = null)
        {
            var template = customTemplateBytes != null && customTemplateBytes.Length > 0
                ? customTemplateBytes
                : GenerateDefaultDocxTemplate(request.Title);

            using var inMs = new MemoryStream(template);
            using var outMs = new MemoryStream();

            using (var inArchive = new ZipArchive(inMs, ZipArchiveMode.Read))
            using (var outArchive = new ZipArchive(outMs, ZipArchiveMode.Create, true))
            {
                foreach (var entry in inArchive.Entries)
                {
                    var newEntry = outArchive.CreateEntry(entry.FullName, CompressionLevel.Optimal);
                    using var inStream = entry.Open();
                    using var outStream = newEntry.Open();

                    // Các file XML chứa text trong Word Document
                    if (entry.FullName.Equals("word/document.xml", StringComparison.OrdinalIgnoreCase) ||
                        entry.FullName.StartsWith("word/header", StringComparison.OrdinalIgnoreCase) ||
                        entry.FullName.StartsWith("word/footer", StringComparison.OrdinalIgnoreCase))
                    {
                        using var reader = new StreamReader(inStream, Encoding.UTF8);
                        var xmlContent = reader.ReadToEnd();

                        // Thực hiện thay thế placeholders {Key} hoặc {{Key}}
                        xmlContent = ReplacePlaceholders(xmlContent, request.Placeholders);

                        // Thêm bảng nếu có TableData
                        if (entry.FullName.Equals("word/document.xml", StringComparison.OrdinalIgnoreCase) &&
                            request.TableData != null && request.TableData.Count > 0)
                        {
                            xmlContent = InjectTableXml(xmlContent, request.TableData);
                        }

                        using var writer = new StreamWriter(outStream, Encoding.UTF8);
                        writer.Write(xmlContent);
                    }
                    else
                    {
                        // Copy nguyên vẹn các file khác (styles, fonts, media, rels)
                        inStream.CopyTo(outStream);
                    }
                }
            }

            outMs.Seek(0, SeekOrigin.Begin);
            return outMs.ToArray();
        }

        private static string ReplacePlaceholders(string xml, Dictionary<string, string> placeholders)
        {
            if (string.IsNullOrEmpty(xml) || placeholders == null || placeholders.Count == 0)
            {
                return xml;
            }

            foreach (var kv in placeholders)
            {
                var escapedVal = EscapeXml(kv.Value ?? string.Empty);
                var key = kv.Key.Trim();

                // Hỗ trợ cả 2 dạng cú pháp: {Key} và {{Key}}
                var pattern1 = @"\{\{" + Regex.Escape(key) + @"\}\}";
                var pattern2 = @"\{" + Regex.Escape(key) + @"\}";

                xml = Regex.Replace(xml, pattern1, escapedVal, RegexOptions.IgnoreCase);
                xml = Regex.Replace(xml, pattern2, escapedVal, RegexOptions.IgnoreCase);
            }

            return xml;
        }

        private static string InjectTableXml(string xml, List<Dictionary<string, object?>> tableData)
        {
            if (!xml.Contains("</w:body>")) return xml;

            var sb = new StringBuilder(4096);
            sb.Append("<w:tbl><w:tblPr><w:tblW w:w=\"0\" w:type=\"auto\"/><w:tblBorders>");
            sb.Append("<w:top w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"CBD5E1\"/>");
            sb.Append("<w:bottom w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"CBD5E1\"/>");
            sb.Append("<w:insideH w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"E2E8F0\"/>");
            sb.Append("</w:tblBorders></w:tblPr>");

            var keys = tableData[0].Keys.ToList();

            // Header Row
            sb.Append("<w:tr><w:trPr><w:tblHeader/></w:trPr>");
            foreach (var k in keys)
            {
                sb.Append($"<w:tc><w:tcPr><w:shd w:val=\"clear\" w:color=\"auto\" w:fill=\"0F172A\"/></w:tcPr><w:p><w:r><w:rPr><w:b/><w:color w:val=\"FFFFFF\"/></w:rPr><w:t>{EscapeXml(k)}</w:t></w:r></w:p></w:tc>");
            }
            sb.Append("</w:tr>");

            // Data Rows
            foreach (var row in tableData)
            {
                sb.Append("<w:tr>");
                foreach (var k in keys)
                {
                    row.TryGetValue(k, out var val);
                    var strVal = EscapeXml(val?.ToString() ?? string.Empty);
                    sb.Append($"<w:tc><w:p><w:r><w:t>{strVal}</w:t></w:r></w:p></w:tc>");
                }
                sb.Append("</w:tr>");
            }
            sb.Append("</w:tbl>");

            return xml.Replace("</w:body>", sb.ToString() + "</w:body>");
        }

        private static byte[] GenerateDefaultDocxTemplate(string title)
        {
            var contentTypesXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\">\r\n" +
                "  <Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/>\r\n" +
                "  <Default Extension=\"xml\" ContentType=\"application/xml\"/>\r\n" +
                "  <Override PartName=\"/word/document.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\"/>\r\n" +
                "</Types>";

            var rootRelsXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\r\n" +
                "  <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/>\r\n" +
                "</Relationships>";

            var documentXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\r\n" +
                "  <w:body>\r\n" +
                "    <w:p><w:pPr><w:jc w:val=\"center\"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val=\"36\"/><w:color w:val=\"0F172A\"/></w:rPr><w:t>" + EscapeXml(title) + "</w:t></w:r></w:p>\r\n" +
                "    <w:p><w:pPr><w:jc w:val=\"center\"/></w:pPr><w:r><w:rPr><w:i/><w:color w:val=\"64748B\"/></w:rPr><w:t>Mã chứng từ: {JobNo} | Ngày lập: {CreatedDate}</w:t></w:r></w:p>\r\n" +
                "    <w:p><w:r><w:t></w:t></w:r></w:p>\r\n" +
                "    <w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Kính gửi: </w:t></w:r><w:r><w:t>{CustomerName}</w:t></w:r></w:p>\r\n" +
                "    <w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Địa chỉ: </w:t></w:r><w:r><w:t>{Address}</w:t></w:r></w:p>\r\n" +
                "    <w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Tổng giá trị hợp đồng: </w:t></w:r><w:r><w:rPr><w:b/><w:color w:val=\"0284C7\"/></w:rPr><w:t>{TotalAmount}</w:t></w:r></w:p>\r\n" +
                "    <w:p><w:r><w:t>Ghi chú / Điều khoản: {Notes}</w:t></w:r></w:p>\r\n" +
                "    <w:p><w:r><w:t></w:t></w:r></w:p>\r\n" +
                "    <w:sectPr><w:pgSz w:w=\"11906\" w:h=\"16838\"/></w:sectPr>\r\n" +
                "  </w:body>\r\n" +
                "</w:document>";

            using var ms = new MemoryStream();
            using (var archive = new ZipArchive(ms, ZipArchiveMode.Create, true))
            {
                AddZipEntry(archive, "[Content_Types].xml", contentTypesXml);
                AddZipEntry(archive, "_rels/.rels", rootRelsXml);
                AddZipEntry(archive, "word/document.xml", documentXml);
            }

            ms.Seek(0, SeekOrigin.Begin);
            return ms.ToArray();
        }

        private static void AddZipEntry(ZipArchive archive, string entryName, string content)
        {
            var entry = archive.CreateEntry(entryName, CompressionLevel.Optimal);
            using var stream = entry.Open();
            using var writer = new StreamWriter(stream, Encoding.UTF8);
            writer.Write(content);
        }

        public static string EscapeXml(string? input)
        {
            if (string.IsNullOrEmpty(input)) return string.Empty;
            return input
                .Replace("&", "&amp;")
                .Replace("<", "&lt;")
                .Replace(">", "&gt;")
                .Replace("\"", "&quot;")
                .Replace("'", "&apos;");
        }
    }
}
