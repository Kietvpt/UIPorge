using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Text.Json;

namespace UIForge.Core.Services
{
    public class ExcelExportColumn
    {
        public string Key { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string? Align { get; set; } // left, center, right
        public string? DataType { get; set; } // string, number, date, boolean
        public double? Width { get; set; }
    }

    public class ExcelExportRequest
    {
        public string Title { get; set; } = "Danh sách dữ liệu";
        public string SheetName { get; set; } = "Sheet1";
        public List<ExcelExportColumn> Columns { get; set; } = new();
        public List<Dictionary<string, object?>> Rows { get; set; } = new();
    }

    /// <summary>
    /// 📊 ExcelExportService: Dịch vụ tạo file .xlsx chuẩn Microsoft OpenXML
    /// không phụ thuộc thư viện ngoài, tối ưu hiệu năng và tương thích 100% với Microsoft Excel, LibreOffice và Google Sheets.
    /// Kế thừa và hiện đại hóa từ tính năng ExportExcel của Core C# (TMSController.cs).
    /// </summary>
    public class ExcelExportService
    {
        /// <summary>
        /// Tạo mảng byte của file .xlsx hoàn chỉnh từ request cấu hình và danh sách dòng
        /// </summary>
        public byte[] ExportToExcel(ExcelExportRequest request)
        {
            var columns = request.Columns;
            var rows = request.Rows;
            var sheetTitle = string.IsNullOrWhiteSpace(request.Title) ? "Danh sách dữ liệu" : request.Title;
            var safeSheetName = SanitizeSheetName(request.SheetName);

            if (columns.Count == 0 && rows.Count > 0)
            {
                // Tự động suy đoán cột từ dòng đầu tiên nếu không truyền cột
                columns = rows[0].Keys.Select(k => new ExcelExportColumn
                {
                    Key = k,
                    Title = k,
                    DataType = "string",
                    Align = "left"
                }).ToList();
            }

            var colCount = Math.Max(1, columns.Count);
            var lastColLetter = GetColumnLetter(colCount - 1);

            // 1. [Content_Types].xml
            const string contentTypesXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\">\r\n" +
                "  <Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/>\r\n" +
                "  <Default Extension=\"xml\" ContentType=\"application/xml\"/>\r\n" +
                "  <Override PartName=\"/xl/workbook.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml\"/>\r\n" +
                "  <Override PartName=\"/xl/worksheets/sheet1.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml\"/>\r\n" +
                "  <Override PartName=\"/xl/styles.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml\"/>\r\n" +
                "</Types>";

            // 2. _rels/.rels
            const string rootRelsXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\r\n" +
                "  <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"xl/workbook.xml\"/>\r\n" +
                "</Relationships>";

            // 3. xl/_rels/workbook.xml.rels
            const string workbookRelsXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\r\n" +
                "  <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet\" Target=\"worksheets/sheet1.xml\"/>\r\n" +
                "  <Relationship Id=\"rId2\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\"/>\r\n" +
                "</Relationships>";

            // 4. xl/workbook.xml
            var workbookXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<workbook xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\" xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\">\r\n" +
                "  <sheets>\r\n" +
                $"    <sheet name=\"{EscapeXml(safeSheetName)}\" sheetId=\"1\" r:id=\"rId1\"/>\r\n" +
                "  </sheets>\r\n" +
                "</workbook>";

            // 5. xl/styles.xml (chuẩn OpenXML palette: fonts, fills, borders, cellXfs)
            const string stylesXml = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n" +
                "<styleSheet xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\">\r\n" +
                "  <fonts count=\"4\">\r\n" +
                "    <font><sz val=\"11\"/><color rgb=\"FF000000\"/><name val=\"Calibri\"/><family val=\"2\"/></font>\r\n" + // 0: Normal
                "    <font><b/><sz val=\"15\"/><color rgb=\"FF1E3A8A\"/><name val=\"Calibri\"/><family val=\"2\"/></font>\r\n" + // 1: Title
                "    <font><b/><sz val=\"11\"/><color rgb=\"FFFFFFFF\"/><name val=\"Calibri\"/><family val=\"2\"/></font>\r\n" + // 2: Header white
                "    <font><b/><sz val=\"11\"/><color rgb=\"FF0F172A\"/><name val=\"Calibri\"/><family val=\"2\"/></font>\r\n" + // 3: Summary bold
                "  </fonts>\r\n" +
                "  <fills count=\"4\">\r\n" +
                "    <fill><patternFill patternType=\"none\"/></fill>\r\n" + // 0: required
                "    <fill><patternFill patternType=\"gray125\"/></fill>\r\n" + // 1: required
                "    <fill><patternFill patternType=\"solid\"><fgColor rgb=\"FF0F172A\"/><bgColor indexed=\"64\"/></patternFill></fill>\r\n" + // 2: Header Dark Slate
                "    <fill><patternFill patternType=\"solid\"><fgColor rgb=\"FFF1F5F9\"/><bgColor indexed=\"64\"/></patternFill></fill>\r\n" + // 3: Total Row Light Slate
                "  </fills>\r\n" +
                "  <borders count=\"3\">\r\n" +
                "    <border><left/><right/><top/><bottom/><diagonal/></border>\r\n" + // 0: None
                "    <border><left style=\"thin\"><color rgb=\"FFCBD5E1\"/></left><right style=\"thin\"><color rgb=\"FFCBD5E1\"/></right><top style=\"thin\"><color rgb=\"FFCBD5E1\"/></top><bottom style=\"thin\"><color rgb=\"FFCBD5E1\"/></bottom><diagonal/></border>\r\n" + // 1: Thin border
                "    <border><left style=\"thin\"><color rgb=\"FFCBD5E1\"/></left><right style=\"thin\"><color rgb=\"FFCBD5E1\"/></right><top style=\"thin\"><color rgb=\"FF0F172A\"/></top><bottom style=\"double\"><color rgb=\"FF0F172A\"/></bottom><diagonal/></border>\r\n" + // 2: Total border
                "  </borders>\r\n" +
                "  <cellStyleXfs count=\"1\">\r\n" +
                "    <xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\"/>\r\n" +
                "  </cellStyleXfs>\r\n" +
                "  <cellXfs count=\"9\">\r\n" +
                "    <xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"0\" xfId=\"0\"/>\r\n" + // 0: Default
                "    <xf numFmtId=\"0\" fontId=\"1\" fillId=\"0\" borderId=\"0\" xfId=\"0\" applyFont=\"1\" applyAlignment=\"1\"><alignment horizontal=\"center\" vertical=\"center\"/></xf>\r\n" + // 1: Title
                "    <xf numFmtId=\"0\" fontId=\"2\" fillId=\"2\" borderId=\"1\" xfId=\"0\" applyFont=\"1\" applyFill=\"1\" applyBorder=\"1\" applyAlignment=\"1\"><alignment horizontal=\"center\" vertical=\"center\" wrapText=\"1\"/></xf>\r\n" + // 2: Header
                "    <xf numFmtId=\"0\" fontId=\"0\" fillId=\"0\" borderId=\"1\" xfId=\"0\" applyBorder=\"1\" applyAlignment=\"1\"><alignment horizontal=\"left\" vertical=\"center\"/></xf>\r\n" + // 3: Data Text
                "    <xf numFmtId=\"3\" fontId=\"0\" fillId=\"0\" borderId=\"1\" xfId=\"0\" applyNumberFormat=\"1\" applyBorder=\"1\" applyAlignment=\"1\"><alignment horizontal=\"right\" vertical=\"center\"/></xf>\r\n" + // 4: Data Int #,##0
                "    <xf numFmtId=\"4\" fontId=\"0\" fillId=\"0\" borderId=\"1\" xfId=\"0\" applyNumberFormat=\"1\" applyBorder=\"1\" applyAlignment=\"1\"><alignment horizontal=\"right\" vertical=\"center\"/></xf>\r\n" + // 5: Data Decimal #,##0.00
                "    <xf numFmtId=\"14\" fontId=\"0\" fillId=\"0\" borderId=\"1\" xfId=\"0\" applyNumberFormat=\"1\" applyBorder=\"1\" applyAlignment=\"1\"><alignment horizontal=\"center\" vertical=\"center\"/></xf>\r\n" + // 6: Data Date
                "    <xf numFmtId=\"0\" fontId=\"3\" fillId=\"3\" borderId=\"2\" xfId=\"0\" applyFont=\"1\" applyFill=\"1\" applyBorder=\"1\" applyAlignment=\"1\"><alignment horizontal=\"left\" vertical=\"center\"/></xf>\r\n" + // 7: Summary Text
                "    <xf numFmtId=\"3\" fontId=\"3\" fillId=\"3\" borderId=\"2\" xfId=\"0\" applyNumberFormat=\"1\" applyFont=\"1\" applyFill=\"1\" applyBorder=\"1\" applyAlignment=\"1\"><alignment horizontal=\"right\" vertical=\"center\"/></xf>\r\n" + // 8: Summary Number
                "  </cellXfs>\r\n" +
                "  <cellStyles count=\"1\">\r\n" +
                "    <cellStyle name=\"Normal\" xfId=\"0\" builtinId=\"0\"/>\r\n" +
                "  </cellStyles>\r\n" +
                "</styleSheet>";

            // 6. xl/worksheets/sheet1.xml
            var sheetXml = BuildWorksheetXml(sheetTitle, columns, rows, lastColLetter);

            using var memoryStream = new MemoryStream();
            using (var archive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
            {
                AddZipEntry(archive, "[Content_Types].xml", contentTypesXml);
                AddZipEntry(archive, "_rels/.rels", rootRelsXml);
                AddZipEntry(archive, "xl/_rels/workbook.xml.rels", workbookRelsXml);
                AddZipEntry(archive, "xl/workbook.xml", workbookXml);
                AddZipEntry(archive, "xl/styles.xml", stylesXml);
                AddZipEntry(archive, "xl/worksheets/sheet1.xml", sheetXml);
            }

            memoryStream.Seek(0, SeekOrigin.Begin);
            return memoryStream.ToArray();
        }

        private static string BuildWorksheetXml(
            string title,
            List<ExcelExportColumn> columns,
            List<Dictionary<string, object?>> rows,
            string lastColLetter)
        {
            var sb = new StringBuilder(16384);
            sb.AppendLine("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>");
            sb.AppendLine("<worksheet xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\">");

            // Độ rộng các cột
            sb.AppendLine("  <cols>");
            for (int i = 0; i < columns.Count; i++)
            {
                var col = columns[i];
                var width = col.Width.HasValue && col.Width.Value > 5
                    ? col.Width.Value / 8.0
                    : Math.Max(15.0, (col.Title?.Length ?? 10) * 1.6);
                sb.AppendLine($"    <col min=\"{i + 1}\" max=\"{i + 1}\" width=\"{width:0.0}\" customWidth=\"1\"/>");
            }
            sb.AppendLine("  </cols>");

            sb.AppendLine("  <sheetData>");

            // Dòng 1: Tiêu đề Báo cáo (merge toàn bộ cột)
            sb.AppendLine("    <row r=\"1\" ht=\"32\" customHeight=\"1\">");
            sb.AppendLine($"      <c r=\"A1\" s=\"1\" t=\"inlineStr\"><is><t>{EscapeXml(title)}</t></is></c>");
            sb.AppendLine("    </row>");

            // Dòng 2: Trống làm khoảng đệm
            sb.AppendLine("    <row r=\"2\" ht=\"10\" customHeight=\"1\"/>");

            // Dòng 3: Tiêu đề các Cột (Header)
            sb.AppendLine("    <row r=\"3\" ht=\"26\" customHeight=\"1\">");
            for (int c = 0; c < columns.Count; c++)
            {
                var colLetter = GetColumnLetter(c);
                var col = columns[c];
                sb.AppendLine($"      <c r=\"{colLetter}3\" s=\"2\" t=\"inlineStr\"><is><t>{EscapeXml(col.Title)}</t></is></c>");
            }
            sb.AppendLine("    </row>");

            // Dòng 4..N+3: Dữ liệu (Rows)
            var numericSums = new Dictionary<int, double>();
            var hasNumericCols = false;

            int currentRow = 4;
            foreach (var row in rows)
            {
                sb.AppendLine($"    <row r=\"{currentRow}\" ht=\"20\" customHeight=\"1\">");
                for (int c = 0; c < columns.Count; c++)
                {
                    var colLetter = GetColumnLetter(c);
                    var col = columns[c];
                    row.TryGetValue(col.Key, out var rawVal);

                    var dataType = (col.DataType ?? string.Empty).ToLowerInvariant();
                    var isNumeric = dataType == "number" || dataType == "decimal" || dataType == "int" || dataType == "double" || dataType == "currency";

                    if (rawVal == null || rawVal is JsonElement { ValueKind: JsonValueKind.Null or JsonValueKind.Undefined })
                    {
                        sb.AppendLine($"      <c r=\"{colLetter}{currentRow}\" s=\"3\"/>");
                        continue;
                    }

                    if (isNumeric && TryParseDouble(rawVal, out var numVal))
                    {
                        hasNumericCols = true;
                        if (!numericSums.ContainsKey(c)) numericSums[c] = 0;
                        numericSums[c] += numVal;

                        var styleId = Math.Abs(numVal % 1) > double.Epsilon ? 5 : 4;
                        sb.AppendLine($"      <c r=\"{colLetter}{currentRow}\" s=\"{styleId}\"><v>{numVal.ToString(CultureInfo.InvariantCulture)}</v></c>");
                    }
                    else if (dataType == "date" || rawVal is DateTime)
                    {
                        var dateStr = FormatDate(rawVal);
                        sb.AppendLine($"      <c r=\"{colLetter}{currentRow}\" s=\"6\" t=\"inlineStr\"><is><t>{EscapeXml(dateStr)}</t></is></c>");
                    }
                    else
                    {
                        var textVal = FormatString(rawVal);
                        sb.AppendLine($"      <c r=\"{colLetter}{currentRow}\" s=\"3\" t=\"inlineStr\"><is><t>{EscapeXml(textVal)}</t></is></c>");
                    }
                }
                sb.AppendLine("    </row>");
                currentRow++;
            }

            // Dòng N+4: Dòng Tổng Cộng (Summary Row)
            if (rows.Count > 0 && hasNumericCols)
            {
                sb.AppendLine($"    <row r=\"{currentRow}\" ht=\"24\" customHeight=\"1\">");
                for (int c = 0; c < columns.Count; c++)
                {
                    var colLetter = GetColumnLetter(c);
                    if (c == 0)
                    {
                        sb.AppendLine($"      <c r=\"{colLetter}{currentRow}\" s=\"7\" t=\"inlineStr\"><is><t>TỔNG CỘNG</t></is></c>");
                    }
                    else if (numericSums.TryGetValue(c, out var sumVal))
                    {
                        var startRow = 4;
                        var endRow = currentRow - 1;
                        sb.AppendLine($"      <c r=\"{colLetter}{currentRow}\" s=\"8\"><f>SUM({colLetter}{startRow}:{colLetter}{endRow})</f><v>{sumVal.ToString(CultureInfo.InvariantCulture)}</v></c>");
                    }
                    else
                    {
                        sb.AppendLine($"      <c r=\"{colLetter}{currentRow}\" s=\"7\"/>");
                    }
                }
                sb.AppendLine("    </row>");
            }

            sb.AppendLine("  </sheetData>");

            // MergeCells (đặt sau sheetData theo đúng XML Schema OpenXML)
            sb.AppendLine("  <mergeCells count=\"1\">");
            sb.AppendLine($"    <mergeCell ref=\"A1:{lastColLetter}1\"/>");
            sb.AppendLine("  </mergeCells>");

            sb.AppendLine("</worksheet>");
            return sb.ToString();
        }

        private static void AddZipEntry(ZipArchive archive, string entryName, string content)
        {
            var entry = archive.CreateEntry(entryName, CompressionLevel.Optimal);
            using var stream = entry.Open();
            using var writer = new StreamWriter(stream, Encoding.UTF8);
            writer.Write(content);
        }

        public static string GetColumnLetter(int colIndex)
        {
            string result = string.Empty;
            colIndex++;
            while (colIndex > 0)
            {
                int rem = (colIndex - 1) % 26;
                result = (char)('A' + rem) + result;
                colIndex = (colIndex - 1) / 26;
            }
            return result;
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

        private static string SanitizeSheetName(string? sheetName)
        {
            if (string.IsNullOrWhiteSpace(sheetName)) return "Sheet1";
            var invalidChars = new[] { '/', '\\', '?', '*', ':', '[', ']' };
            var safe = new string(sheetName.Where(c => !invalidChars.Contains(c)).ToArray()).Trim();
            if (safe.Length > 31) safe = safe.Substring(0, 31);
            return string.IsNullOrEmpty(safe) ? "Sheet1" : safe;
        }

        private static bool TryParseDouble(object? val, out double result)
        {
            result = 0;
            if (val == null) return false;

            if (val is double d) { result = d; return true; }
            if (val is int i) { result = i; return true; }
            if (val is long l) { result = l; return true; }
            if (val is decimal dec) { result = (double)dec; return true; }
            if (val is float f) { result = f; return true; }

            if (val is JsonElement je)
            {
                if (je.ValueKind == JsonValueKind.Number && je.TryGetDouble(out var jeNum))
                {
                    result = jeNum;
                    return true;
                }
                val = je.ToString();
            }

            var str = val.ToString()?.Trim().Replace(",", "");
            return double.TryParse(str, NumberStyles.Any, CultureInfo.InvariantCulture, out result);
        }

        private static string FormatDate(object? val)
        {
            if (val == null) return string.Empty;
            if (val is DateTime dt) return dt.ToString("dd/MM/yyyy");
            if (val is JsonElement je && je.TryGetDateTime(out var jeDt)) return jeDt.ToString("dd/MM/yyyy");
            if (DateTime.TryParse(val.ToString(), out var parsedDt)) return parsedDt.ToString("dd/MM/yyyy");
            return val.ToString() ?? string.Empty;
        }

        private static string FormatString(object? val)
        {
            if (val == null) return string.Empty;
            if (val is JsonElement je)
            {
                if (je.ValueKind == JsonValueKind.String) return je.GetString() ?? string.Empty;
                return je.ToString();
            }
            return val.ToString() ?? string.Empty;
        }
    }
}
