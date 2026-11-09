import type { TableColumn } from '@/types/schema'

export interface PrintReportOptions {
  title: string
  subtitle?: string
  columns: TableColumn[]
  rows: Record<string, any>[]
  summaryRow?: Record<string, any>
  companyName?: string
  metadata?: Record<string, string>
  showSignatures?: boolean
}

/**
 * 🖨️ In ấn và Xuất báo cáo PDF trực tiếp từ trình duyệt chuẩn ERP (Kế thừa từ ButtonPdf.cs & PdfReport.cs)
 * 100% Client-side, không phụ thuộc thư viện nặng ngoài, hỗ trợ font Unicode tiếng Việt hoàn hảo.
 */
export function printGridReport(options: PrintReportOptions) {
  const {
    title,
    subtitle,
    columns,
    rows,
    summaryRow,
    companyName = 'HỆ THỐNG QUẢN TRỊ DOANH NGHIỆP ERP',
    metadata = {},
    showSignatures = true,
  } = options

  // Lọc các cột hiển thị (không ẩn)
  const visibleCols = columns.filter((c) => !c.hidden)

  // Tạo cửa sổ in ấn
  const printWindow = window.open('', '_blank', 'width=1100,height=850')
  if (!printWindow) {
    alert('Trình duyệt đang chặn mở Popup. Vui lòng cho phép mở popup để xem bản in.')
    return
  }

  const now = new Date()
  const dateStr = `Ngày in: ${now.toLocaleDateString('vi-VN')} lúc ${now.toLocaleTimeString('vi-VN')}`

  const metadataHtml = Object.entries(metadata)
    .map(
      ([key, val]) =>
        `<div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <strong style="color: #475569;">${escapeHtml(key)}:</strong>
          <span>${escapeHtml(String(val))}</span>
        </div>`
    )
    .join('')

  const headersHtml = visibleCols
    .map((col) => {
      const align = col.align || 'left'
      return `<th style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #f1f5f9; text-align: ${align}; font-size: 11px; text-transform: uppercase;">
        ${escapeHtml(col.title || col.key)}
      </th>`
    })
    .join('')

  const rowsHtml = rows
    .map((row, rIdx) => {
      const bg = rIdx % 2 === 0 ? '#ffffff' : '#f8fafc'
      const cellsHtml = visibleCols
        .map((col) => {
          const val = row[col.key] ?? ''
          const align = col.align || (typeof val === 'number' ? 'right' : 'left')
          let formattedVal = val
          if (typeof val === 'number') {
            formattedVal = val.toLocaleString('vi-VN')
          }
          return `<td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: ${align}; font-size: 11px;">
            ${escapeHtml(String(formattedVal))}
          </td>`
        })
        .join('')

      return `<tr style="background-color: ${bg};">${cellsHtml}</tr>`
    })
    .join('')

  // Hàng tổng cộng nếu có
  let summaryHtml = ''
  if (summaryRow) {
    const summaryCells = visibleCols
      .map((col, idx) => {
        const val = summaryRow[col.key] ?? (idx === 0 ? 'TỔNG CỘNG' : '')
        const align = col.align || 'left'
        let formattedVal = val
        if (typeof val === 'number') {
          formattedVal = val.toLocaleString('vi-VN')
        }
        return `<td style="padding: 8px 10px; border: 1px solid #cbd5e1; background-color: #e2e8f0; font-weight: bold; text-align: ${align}; font-size: 11px;">
          ${escapeHtml(String(formattedVal))}
        </td>`
      })
      .join('')

    summaryHtml = `<tfoot><tr>${summaryCells}</tr></tfoot>`
  }

  const signBlockHtml = showSignatures
    ? `
      <div style="margin-top: 40px; display: flex; justify-content: space-between; text-align: center; font-size: 12px; page-break-inside: avoid;">
        <div style="flex: 1;">
          <strong>Người Lập Biểu</strong><br/>
          <span style="font-size: 10px; color: #64748b;">(Ký, ghi rõ họ tên)</span>
          <div style="height: 60px;"></div>
        </div>
        <div style="flex: 1;">
          <strong>Kế Toán Trưởng</strong><br/>
          <span style="font-size: 10px; color: #64748b;">(Ký, ghi rõ họ tên)</span>
          <div style="height: 60px;"></div>
        </div>
        <div style="flex: 1;">
          <strong>Thủ Trưởng Đơn Vị</strong><br/>
          <span style="font-size: 10px; color: #64748b;">(Ký, đóng dấu)</span>
          <div style="height: 60px;"></div>
        </div>
      </div>
    `
    : ''

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>${escapeHtml(title)} - UIForge Report</title>
      <style>
        @page {
          size: A4 landscape;
          margin: 12mm 15mm;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          color: #0f172a;
          margin: 0;
          padding: 20px;
          background: #ffffff;
        }
        .header {
          border-bottom: 2px solid #0284c7;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
        }
        @media print {
          body {
            padding: 0;
          }
          button {
            display: none !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #0284c7; letter-spacing: 0.5px;">
              ${escapeHtml(companyName)}
            </div>
            <h1 style="margin: 6px 0 2px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
              ${escapeHtml(title)}
            </h1>
            ${subtitle ? `<div style="font-size: 12px; color: #475569;">${escapeHtml(subtitle)}</div>` : ''}
          </div>
          <div style="text-align: right; font-size: 10px; color: #64748b;">
            <div>${escapeHtml(dateStr)}</div>
            <div>Tổng số bản ghi: <strong>${rows.length}</strong></div>
          </div>
        </div>
        ${metadataHtml ? `<div style="margin-top: 10px; font-size: 11px; background: #f8fafc; padding: 8px 12px; border-radius: 6px;">${metadataHtml}</div>` : ''}
      </div>

      <table>
        <thead>
          <tr>${headersHtml}</tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
        ${summaryHtml}
      </table>

      ${signBlockHtml}

      <div style="margin-top: 24px; text-align: center;">
        <button onclick="window.print()" style="padding: 8px 24px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
          In Báo Cáo / Lưu PDF
        </button>
      </div>

      <script>
        window.onload = function() {
          // Tự động mở hộp thoại in sau khi render
          setTimeout(function() {
            window.print();
          }, 300);
        };
      </script>
    </body>
    </html>
  `

  printWindow.document.open()
  printWindow.document.write(fullHtml)
  printWindow.document.close()
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

