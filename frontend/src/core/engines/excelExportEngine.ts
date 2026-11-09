import type { TableColumn } from '@/types/schema'

export interface ExportGridOptions {
  fileName?: string
  sheetName?: string
  columns: TableColumn[]
  rows: any[]
  includeSummary?: boolean
}

/**
 * 📊 EXCEL EXPORT ENGINE (Kế thừa ExcelExt.cs & ButtonExcel.cs từ Core C#)
 * - 100% Generic & Domain-Agnostic: Tương thích với bất kỳ bảng dữ liệu nào.
 * - Xuất file Excel chuẩn hỗ trợ tiếng Việt đầy đủ (UTF-8 with BOM).
 * - Tự động định dạng căn lề, kiểu dữ liệu (Số, Ngày, Văn bản).
 * - Tự động tính toán hàng tổng cộng (Summary Row) nếu có cấu hình aggregate.
 */
export function exportGridToExcel({
  fileName = 'Du_Lieu_Bang',
  sheetName = 'Sheet1',
  columns,
  rows,
  includeSummary = true,
}: ExportGridOptions) {
  // Lọc các cột hiển thị (bỏ qua các cột bị ẩn)
  const exportCols = columns.filter((c) => !c.hidden)

  // 1. Xây dựng Header XML / HTML
  let headerHtml = '<tr>'
  headerHtml += '<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:center;padding:8px 12px;font-size:11pt;">STT</th>'
  for (const col of exportCols) {
    const align = col.align || 'left'
    headerHtml += `<th style="background-color:#1e293b;color:#f8fafc;font-weight:bold;border:1px solid #475569;text-align:${align};padding:8px 12px;font-size:11pt;">${col.title || col.key}</th>`
  }
  headerHtml += '</tr>'

  // 2. Xây dựng Data Rows
  let bodyHtml = ''
  rows.forEach((row, rowIdx) => {
    const bgColor = rowIdx % 2 === 0 ? '#ffffff' : '#f8fafc'
    bodyHtml += `<tr style="background-color:${bgColor};">`
    bodyHtml += `<td style="border:1px solid #cbd5e1;text-align:center;padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${rowIdx + 1}</td>`

    for (const col of exportCols) {
      const val = row[col.key]
      const align = col.align || 'left'
      let formatted = val !== undefined && val !== null ? String(val) : ''

      // Định dạng số nếu là kiểu số
      if (typeof val === 'number') {
        formatted = val.toLocaleString('vi-VN')
      }

      bodyHtml += `<td style="border:1px solid #cbd5e1;text-align:${align};padding:6px 10px;font-family:Arial,sans-serif;font-size:10pt;">${escapeHtml(formatted)}</td>`
    }
    bodyHtml += '</tr>'
  })

  // 3. Xây dựng Summary Footer Row nếu có
  let footerHtml = ''
  const hasAggregates = exportCols.some((c) => c.aggregate)
  if (includeSummary && hasAggregates && rows.length > 0) {
    footerHtml += '<tr style="background-color:#0f172a;color:#f8fafc;font-weight:bold;">'
    footerHtml += '<td style="border:1px solid #334155;text-align:center;padding:8px 10px;font-weight:bold;">TỔNG</td>'

    for (const col of exportCols) {
      const align = col.align || 'left'
      if (col.aggregate === 'sum') {
        const sum = rows.reduce((acc, r) => {
          const num = Number(r[col.key])
          return acc + (isNaN(num) ? 0 : num)
        }, 0)
        const formattedSum = sum % 1 !== 0
          ? sum.toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          : sum.toLocaleString('vi-VN')
        footerHtml += `<td style="border:1px solid #334155;text-align:${align};padding:8px 10px;font-weight:bold;">${formattedSum}${col.summarySuffix ? ` ${col.summarySuffix}` : ''}</td>`
      } else if (col.aggregate === 'count') {
        footerHtml += `<td style="border:1px solid #334155;text-align:${align};padding:8px 10px;font-weight:bold;">${rows.length}</td>`
      } else if (col.aggregate === 'avg') {
        const sum = rows.reduce((acc, r) => {
          const num = Number(r[col.key])
          return acc + (isNaN(num) ? 0 : num)
        }, 0)
        const avg = rows.length > 0 ? (sum / rows.length).toFixed(2) : '0'
        footerHtml += `<td style="border:1px solid #334155;text-align:${align};padding:8px 10px;font-weight:bold;">${avg}</td>`
      } else {
        footerHtml += '<td style="border:1px solid #334155;"></td>'
      }
    }
    footerHtml += '</tr>'
  }

  // 4. Mẫu template Excel HTML XML chuẩn Microsoft Office
  const template = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>${escapeHtml(sheetName)}</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayGridlines/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          table { border-collapse: collapse; width: 100%; font-family: Arial, Helvetica, sans-serif; }
          th, td { mso-number-format:"\\@"; }
          .num { mso-number-format:"\\#,##0"; }
          .date { mso-number-format:"dd\\/mm\\/yyyy"; }
        </style>
      </head>
      <body>
        <table>
          <thead>${headerHtml}</thead>
          <tbody>${bodyHtml}</tbody>
          <tfoot>${footerHtml}</tfoot>
        </table>
      </body>
    </html>
  `.trim()

  // 5. Tải file về máy người dùng với UTF-8 BOM
  const blob = new Blob(['\ufeff', template], {
    type: 'application/vnd.ms-excel;charset=utf-8',
  })

  const cleanFileName = (fileName.endsWith('.xls') || fileName.endsWith('.xlsx'))
    ? fileName
    : `${fileName}_${new Date().toISOString().slice(0, 10)}.xls`

  const downloadUrl = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = downloadUrl
  a.download = cleanFileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(downloadUrl)
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

