import type { TableColumn } from '@/types/schema'

/**
 * 📋 Phân tích dữ liệu Clipboard từ Excel / Google Sheets dạng TSV (Tab-Separated Values).
 * - Tách các dòng theo \r\n hoặc \n.
 * - Bỏ dòng trống cuối cùng (thường do Excel tự động thêm vào).
 * - Tách từng ô theo \t.
 * - Xử lý trường hợp ô có chứa dấu nháy kép bọc quanh.
 */
export function parseClipboardMatrix(rawText: string): string[][] {
  if (!rawText || typeof rawText !== 'string') return []

  const normalized = rawText.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const lines = normalized.split('\n')

  // Bỏ dòng trống cuối cùng nếu có
  if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
    lines.pop()
  }

  if (lines.length === 0) return []

  return lines.map((line) => {
    const rawCells = line.split('\t')
    return rawCells.map((cell) => {
      let trimmed = cell.trim()
      // Bóc tách dấu nháy kép nếu có (chuẩn RFC 4180 cho CSV/TSV)
      if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) {
        trimmed = trimmed.slice(1, -1).replace(/""/g, '"').trim()
      }
      return trimmed
    })
  })
}

/**
 * 🔄 Ép kiểu dữ liệu ô dán từ Excel theo đúng định nghĩa cột của Grid (Type Coercion).
 */
export function coercePastedCellValue(rawValue: string, column: TableColumn): any {
  if (rawValue === undefined || rawValue === null) return ''

  const str = String(rawValue).trim()

  // 1. Cột Số (Number / Currency / Precision)
  const isNumberCol =
    column.componentType === 'Number' ||
    column.format === 'number' ||
    column.format === 'currency_vnd' ||
    column.format === 'currency_usd' ||
    (column as any).dataType === 'number' ||
    column.precision !== undefined ||
    ['totalgw', 'totalcbm', 'totalvgm', 'gw', 'cbm', 'vgm', 'packages', 'amount', 'price', 'quantity'].some(
      (k) => column.key.toLowerCase().includes(k)
    )

  if (isNumberCol) {
    if (!str) return 0
    // Xóa dấu phẩy phân cách hàng nghìn (ví dụ: "1,250.50" -> "1250.50") và các ký tự tiền tệ
    const cleaned = str.replace(/[,\s$₫€]/g, '').trim()
    const num = Number(cleaned)
    if (!isNaN(num)) {
      if (column.precision !== undefined && column.precision >= 0) {
        return Number(num.toFixed(column.precision))
      }
      return num
    }
    return 0
  }

  // 2. Cột Checkbox (Boolean)
  if (column.componentType === 'Checkbox' || (column as any).dataType === 'boolean') {
    const lower = str.toLowerCase()
    return (
      lower === 'true' ||
      lower === '1' ||
      lower === 'yes' ||
      lower === 'y' ||
      lower === 'x' ||
      lower === 'v' ||
      lower === 'có' ||
      lower === 'checked' ||
      lower === 'đúng'
    )
  }

  // 3. Cột DatePicker (Ngày tháng)
  if (column.componentType === 'DatePicker' || column.format === 'date_dmy' || (column as any).dataType === 'date') {
    if (!str) return ''
    // Chuẩn hóa định dạng YYYY-MM-DD sang DD/MM/YYYY nếu cần
    const isoMatch = str.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/)
    if (isoMatch) {
      const yyyy = isoMatch[1]
      const mm = String(isoMatch[2]).padStart(2, '0')
      const dd = String(isoMatch[3]).padStart(2, '0')
      return `${dd}/${mm}/${yyyy}`
    }
    return str
  }

  // 4. Cột chuỗi ký tự / Dropdown / Khác
  return str
}

export interface ApplyExcelPasteOptions {
  currentRows: any[]
  visibleColumns: TableColumn[]
  allColumns: TableColumn[]
  clipMatrix: string[][]
  startRowIndex: number
  startColIndex: number
}

export interface ApplyExcelPasteResult {
  updatedRows: any[]
  pastedRowCount: number
  pastedColCount: number
  newRowsCreated: number
}

/**
 * ⚡ Thực hiện gán dữ liệu vùng dán Excel vào danh sách dòng của Table.
 * - Nếu vùng dán vượt quá số dòng hiện tại, tự động tạo mới các dòng kế tiếp.
 * - Áp dụng Type Coercion tự động cho từng ô.
 * - Bỏ qua các cột bị vô hiệu hóa (disabled / editable: false / componentType: 'Label').
 */
export function applyExcelPaste({
  currentRows,
  visibleColumns,
  allColumns,
  clipMatrix,
  startRowIndex,
  startColIndex,
}: ApplyExcelPasteOptions): ApplyExcelPasteResult {
  if (!clipMatrix || clipMatrix.length === 0) {
    return { updatedRows: currentRows, pastedRowCount: 0, pastedColCount: 0, newRowsCreated: 0 }
  }

  const resultRows = [...currentRows.map((r) => ({ ...r }))]
  const totalPasteRows = clipMatrix.length
  let maxPasteCols = 0
  let newRowsCreated = 0

  const safeStartRow = Math.max(0, startRowIndex)
  const safeStartCol = Math.max(0, startColIndex)

  // Hàm tạo dòng mới chuẩn với ID tăng tiến
  const createDefaultRow = (newId: number): any => {
    const newRow: any = { id: newId }
    allColumns.forEach((col) => {
      if (col.componentType === 'Number' || (col as any).dataType === 'number') newRow[col.key] = 0
      else if (col.componentType === 'Checkbox' || (col as any).dataType === 'boolean') newRow[col.key] = false
      else if (col.componentType === 'DatePicker' || (col as any).dataType === 'date') newRow[col.key] = ''
      else newRow[col.key] = ''
    })
    return newRow
  }

  // Duyệt qua từng dòng của dữ liệu clipboard
  for (let rIdx = 0; rIdx < totalPasteRows; rIdx++) {
    const targetRowIdx = safeStartRow + rIdx
    const pastedRowCells = clipMatrix[rIdx]
    if (pastedRowCells.length > maxPasteCols) {
      maxPasteCols = pastedRowCells.length
    }

    // Nếu dòng dán vượt quá số dòng hiện tại -> Tự động sinh dòng mới
    if (targetRowIdx >= resultRows.length) {
      const highestId = resultRows.length > 0
        ? Math.max(...resultRows.map((r: any) => Number(r.id) || 0))
        : 0
      const newRow = createDefaultRow(highestId + 1)
      resultRows.push(newRow)
      newRowsCreated++
    }

    const targetRow = resultRows[targetRowIdx]

    // Duyệt qua từng cột của dòng dán
    for (let cIdx = 0; cIdx < pastedRowCells.length; cIdx++) {
      const targetColIdx = safeStartCol + cIdx
      if (targetColIdx >= visibleColumns.length) {
        // Vượt quá số lượng cột hiển thị của bảng
        break
      }

      const targetCol = visibleColumns[targetColIdx]

      // Bỏ qua cột không cho phép sửa (read-only, disabled, label)
      const isEditable =
        (targetCol.editable ?? true) &&
        !targetCol.disabled &&
        targetCol.componentType !== 'Label'

      if (!isEditable) {
        continue
      }

      const rawCellVal = pastedRowCells[cIdx]
      const coercedVal = coercePastedCellValue(rawCellVal, targetCol)
      targetRow[targetCol.key] = coercedVal
    }
  }

  return {
    updatedRows: resultRows,
    pastedRowCount: totalPasteRows,
    pastedColCount: maxPasteCols,
    newRowsCreated,
  }
}
