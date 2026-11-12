import { useState, useCallback, useEffect, RefObject } from 'react'
import type { TableColumn } from '@/types/schema'

export interface FocusedCellCoord {
  rowIndex: number
  colIndex: number
  colKey: string
}

export interface UseGridKeyboardNavigationProps {
  tableRef: RefObject<HTMLElement>
  rows: any[]
  visibleColumns: TableColumn[]
  selectedRowId: any
  setSelectedRowId: (id: any) => void
  selectedRowIds: Set<any>
  setSelectedRowIds: React.Dispatch<React.SetStateAction<Set<any>>>
  onRowDoubleClick?: (row: any, rowIndex: number) => void
  onAddRow?: () => void
  onDeleteRow?: (rowIndex: number) => void
  onDuplicateRow?: (rowIndex: number) => void
  onToggleAll?: () => void
  onFilterByCell?: () => void
  onQuickSum?: () => void
  onToggleColumnFilters?: () => void
  isEditableTable?: boolean
  onPasteExcel?: (clipText: string, startRowIndex: number, startColIndex: number) => void
}

/**
 * ⌨️ HOOK ĐIỀU HƯỚNG BÀN PHÍM CHUẨN ERP & DESKTOP (GridView.cs & GridViewItem.cs)
 * - Mũi tên Up/Down/Left/Right: Di chuyển focus giữa các ô hoặc giữa các dòng
 * - Enter / Shift+Enter: Nhảy xuống/lên ô cùng cột, tự động thêm dòng mới ở dòng cuối
 * - Tab / Shift+Tab: Di chuyển ngang qua các ô cho phép sửa, tự động xuống dòng kế
 * - F1..F6: Phím tắt chức năng ERP (ToggleAll, Filter, Sum, Add, Filters)
 */
export function useGridKeyboardNavigation({
  tableRef,
  rows,
  visibleColumns,
  selectedRowId,
  setSelectedRowId,
  selectedRowIds,
  setSelectedRowIds,
  onRowDoubleClick,
  onAddRow,
  onDeleteRow,
  onDuplicateRow,
  onToggleAll,
  onFilterByCell,
  onQuickSum,
  onToggleColumnFilters,
  isEditableTable = true,
  onPasteExcel,
}: UseGridKeyboardNavigationProps) {
  const [focusedCell, setFocusedCell] = useState<FocusedCellCoord | null>(null)

  // 🎯 Focus vào một ô cụ thể theo (rowIndex, colIndex) và tự động bôi đen text
  const focusCell = useCallback(
    (rowIndex: number, colIndex: number) => {
      if (rowIndex < 0 || rowIndex >= rows.length) return
      if (colIndex < 0 || colIndex >= visibleColumns.length) return

      const targetCol = visibleColumns[colIndex]
      const targetRow = rows[rowIndex]
      const rowId = targetRow?.id ?? targetRow?.Id ?? rowIndex

      setSelectedRowId(rowId)
      setFocusedCell({ rowIndex, colIndex, colKey: targetCol.key })

      if (tableRef.current) {
        const cellSelector = `[data-grid-cell="${rowIndex}_${colIndex}"]`
        const cellElem = tableRef.current.querySelector<HTMLElement>(cellSelector)
        if (cellElem) {
          cellElem.scrollIntoView({ block: 'nearest', inline: 'nearest' })
          const input =
            cellElem.tagName === 'INPUT' ||
            cellElem.tagName === 'SELECT' ||
            cellElem.tagName === 'TEXTAREA' ||
            cellElem.tagName === 'BUTTON'
              ? cellElem
              : cellElem.querySelector<HTMLElement>('input, select, textarea, button') || cellElem

          input.focus()
          if (input instanceof HTMLInputElement && (input.type === 'text' || input.type === 'number')) {
            input.select()
          }
        }
      }
    },
    [rows, visibleColumns, tableRef, setSelectedRowId]
  )

  // 🎯 Scroll dòng vào tầm nhìn khi duyệt bằng mũi tên
  const scrollToRow = useCallback(
    (rowIndex: number) => {
      if (!tableRef.current) return
      const rowElem = tableRef.current.querySelector<HTMLElement>(`[data-row-index="${rowIndex}"]`)
      if (rowElem) {
        rowElem.scrollIntoView({ block: 'nearest' })
      }
    },
    [tableRef]
  )

  // ⌨️ Xử lý phím tắt trên toàn bộ vùng chứa bảng (khi focus bảng hoặc chọn dòng)
  const handleTableContainerKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // 1. Phím chức năng F1..F6
      if (e.key === 'F1') {
        e.preventDefault()
        e.stopPropagation()
        onToggleAll?.()
        return
      }
      if (e.key === 'F2') {
        e.preventDefault()
        e.stopPropagation()
        onFilterByCell?.()
        return
      }
      if (e.key === 'F3') {
        e.preventDefault()
        e.stopPropagation()
        onQuickSum?.()
        return
      }
      if (e.key === 'F4') {
        e.preventDefault()
        e.stopPropagation()
        onAddRow?.()
        return
      }
      if (e.key === 'F6') {
        e.preventDefault()
        e.stopPropagation()
        onToggleColumnFilters?.()
        return
      }

      // 2. Mũi tên xuống (ArrowDown) -> Duyệt dòng xuống
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const currentIdx = rows.findIndex((r, i) => (r.id ?? r.Id ?? i) === selectedRowId)
        const nextIdx = currentIdx < rows.length - 1 ? currentIdx + 1 : currentIdx
        if (nextIdx >= 0 && nextIdx !== currentIdx) {
          const nextRow = rows[nextIdx]
          setSelectedRowId(nextRow.id ?? nextRow.Id ?? nextIdx)
          setSelectedRowIds(new Set([nextRow.id ?? nextRow.Id ?? nextIdx]))
          scrollToRow(nextIdx)
        }
        return
      }

      // 3. Mũi tên lên (ArrowUp) -> Duyệt dòng lên
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        const currentIdx = rows.findIndex((r, i) => (r.id ?? r.Id ?? i) === selectedRowId)
        const prevIdx = currentIdx > 0 ? currentIdx - 1 : 0
        if (prevIdx >= 0 && prevIdx !== currentIdx) {
          const prevRow = rows[prevIdx]
          setSelectedRowId(prevRow.id ?? prevRow.Id ?? prevIdx)
          setSelectedRowIds(new Set([prevRow.id ?? prevRow.Id ?? prevIdx]))
          scrollToRow(prevIdx)
        }
        return
      }

      // 4. Enter -> Mở chi tiết dòng đang chọn
      if (e.key === 'Enter') {
        e.preventDefault()
        const currentIdx = rows.findIndex((r, i) => (r.id ?? r.Id ?? i) === selectedRowId)
        if (currentIdx >= 0 && onRowDoubleClick) {
          onRowDoubleClick(rows[currentIdx], currentIdx)
        }
        return
      }

      // 5. Delete -> Xóa dòng đang chọn
      if (e.key === 'Delete') {
        const currentIdx = rows.findIndex((r, i) => (r.id ?? r.Id ?? i) === selectedRowId)
        if (currentIdx >= 0 && onDeleteRow) {
          e.preventDefault()
          onDeleteRow(currentIdx)
        }
        return
      }

      // 6. Ctrl + D -> Nhân bản dòng đang chọn
      if ((e.ctrlKey || e.metaKey) && (e.key === 'd' || e.key === 'D')) {
        e.preventDefault()
        const currentIdx = rows.findIndex((r, i) => (r.id ?? r.Id ?? i) === selectedRowId)
        if (currentIdx >= 0 && onDuplicateRow) {
          onDuplicateRow(currentIdx)
        }
        return
      }

      // 7. Ctrl + V -> Dán từ Clipboard nếu bảng đang focus chọn dòng/container mà không trong ô input
      if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
        const target = e.target as HTMLElement
        const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')
        if (!isInput && onPasteExcel && typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.readText === 'function') {
          e.preventDefault()
          navigator.clipboard
            .readText()
            .then((clipText) => {
              if (clipText) {
                const startRow = focusedCell
                  ? focusedCell.rowIndex
                  : selectedRowId !== null
                  ? Math.max(0, rows.findIndex((r, i) => (r.id ?? r.Id ?? i) === selectedRowId))
                  : 0
                const startCol = focusedCell ? focusedCell.colIndex : 0
                onPasteExcel(clipText, startRow, startCol)
              }
            })
            .catch(() => {})
        }
      }
    },
    [
      rows,
      selectedRowId,
      setSelectedRowId,
      setSelectedRowIds,
      scrollToRow,
      onToggleAll,
      onFilterByCell,
      onQuickSum,
      onAddRow,
      onToggleColumnFilters,
      onRowDoubleClick,
      onDeleteRow,
      onDuplicateRow,
      focusedCell,
      onPasteExcel,
    ]
  )

  // ⌨️ Xử lý phím khi đang nhập liệu bên trong một ô (Cell KeyDown)
  const handleCellKeyDown = useCallback(
    (e: React.KeyboardEvent, rowIndex: number, colIndex: number, colKey: string) => {
      // 1. Phím tắt F1..F6
      if (e.key === 'F1') {
        e.preventDefault()
        e.stopPropagation()
        onToggleAll?.()
        return
      }
      if (e.key === 'F2') {
        e.preventDefault()
        e.stopPropagation()
        onFilterByCell?.()
        return
      }
      if (e.key === 'F3') {
        e.preventDefault()
        e.stopPropagation()
        onQuickSum?.()
        return
      }
      if (e.key === 'F4') {
        e.preventDefault()
        e.stopPropagation()
        onAddRow?.()
        return
      }
      if (e.key === 'F6') {
        e.preventDefault()
        e.stopPropagation()
        onToggleColumnFilters?.()
        return
      }

      // 2. Mũi tên xuống (ArrowDown) -> Ô cùng cột ở dòng dưới
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (rowIndex < rows.length - 1) {
          focusCell(rowIndex + 1, colIndex)
        }
        return
      }

      // 3. Mũi tên lên (ArrowUp) -> Ô cùng cột ở dòng trên
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (rowIndex > 0) {
          focusCell(rowIndex - 1, colIndex)
        }
        return
      }

      // 4. Mũi tên trái (ArrowLeft) -> Sang ô bên trái nếu con trỏ ở đầu text hoặc là dropdown/checkbox
      if (e.key === 'ArrowLeft') {
        const target = e.target as HTMLInputElement
        const isAtStart = target && target.selectionStart === 0 && target.selectionEnd === 0
        const isAllSelected = target && target.selectionStart === 0 && target.selectionEnd === target.value?.length
        const isNonTextInput = !target || target.tagName === 'SELECT' || target.type === 'checkbox' || target.tagName === 'BUTTON'

        if (isAtStart || isAllSelected || isNonTextInput) {
          if (colIndex > 0) {
            e.preventDefault()
            focusCell(rowIndex, colIndex - 1)
          }
        }
        return
      }

      // 5. Mũi tên phải (ArrowRight) -> Sang ô bên phải nếu con trỏ ở cuối text hoặc là dropdown/checkbox
      if (e.key === 'ArrowRight') {
        const target = e.target as HTMLInputElement
        const isAtEnd = target && target.selectionStart === target.value?.length
        const isAllSelected = target && target.selectionStart === 0 && target.selectionEnd === target.value?.length
        const isNonTextInput = !target || target.tagName === 'SELECT' || target.type === 'checkbox' || target.tagName === 'BUTTON'

        if (isAtEnd || isAllSelected || isNonTextInput) {
          if (colIndex < visibleColumns.length - 1) {
            e.preventDefault()
            focusCell(rowIndex, colIndex + 1)
          }
        }
        return
      }

      // 6. Tab & Shift + Tab -> Di chuyển tuần tự và tự động xuống dòng
      if (e.key === 'Tab') {
        e.preventDefault()
        if (e.shiftKey) {
          if (colIndex > 0) {
            focusCell(rowIndex, colIndex - 1)
          } else if (rowIndex > 0) {
            focusCell(rowIndex - 1, visibleColumns.length - 1)
          }
        } else {
          if (colIndex < visibleColumns.length - 1) {
            focusCell(rowIndex, colIndex + 1)
          } else if (rowIndex < rows.length - 1) {
            focusCell(rowIndex + 1, 0)
          } else if (onAddRow) {
            onAddRow()
            setTimeout(() => {
              focusCell(rows.length, 0)
            }, 60)
          }
        }
        return
      }

      // 7. Enter / Shift + Enter -> Nhảy xuống/lên ô cùng cột, hoặc tự thêm dòng mới ở cuối
      if (e.key === 'Enter') {
        e.preventDefault()
        if (e.shiftKey) {
          if (rowIndex > 0) {
            focusCell(rowIndex - 1, colIndex)
          }
          return
        }

        if (rowIndex < rows.length - 1) {
          focusCell(rowIndex + 1, colIndex)
        } else if (onAddRow) {
          onAddRow()
          setTimeout(() => {
            focusCell(rows.length, colIndex)
          }, 60)
        }
        return
      }

      // 8. Escape -> Hủy focus
      if (e.key === 'Escape') {
        e.preventDefault()
        const target = e.target as HTMLElement
        target?.blur()
        return
      }
    },
    [rows, visibleColumns, focusCell, onToggleAll, onFilterByCell, onQuickSum, onAddRow, onToggleColumnFilters]
  )

  // 📋 Bắt sự kiện Paste (Ctrl+V) tại bất kỳ vị trí nào trên vùng bảng
  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      const clipText = e.clipboardData?.getData('text/plain')
      if (!clipText || !onPasteExcel) return

      const isMultiCell = clipText.includes('\t') || clipText.includes('\n')
      const target = e.target as HTMLElement
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')

      // Nếu đang nhập liệu trong ô văn bản đơn lẻ và dữ liệu dán không phải là nhiều ô Excel -> Cho phép dán text mặc định
      if (isInput && !isMultiCell) {
        return
      }

      // Ngược lại, dữ liệu chứa nhiều dòng/cột từ Excel hoặc focus ở ngoài input -> Chặn mặc định và dán vào lưới
      e.preventDefault()
      e.stopPropagation()

      const startRow = focusedCell
        ? focusedCell.rowIndex
        : selectedRowId !== null
        ? Math.max(0, rows.findIndex((r, i) => (r.id ?? r.Id ?? i) === selectedRowId))
        : 0

      const startCol = focusedCell ? focusedCell.colIndex : 0

      onPasteExcel(clipText, startRow, startCol)
    },
    [focusedCell, selectedRowId, rows, onPasteExcel]
  )

  return {
    focusedCell,
    setFocusedCell,
    focusCell,
    scrollToRow,
    handleTableContainerKeyDown,
    handleCellKeyDown,
    handlePaste,
  }
}

