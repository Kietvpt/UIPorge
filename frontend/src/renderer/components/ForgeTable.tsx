import React, { useState, useMemo, useEffect, useRef } from 'react'
import type { ComponentProps } from './types'
import type { TableColumn } from '@/types/schema'
import { HeaderContextMenu } from './grid/HeaderContextMenu'
import { RowContextMenu } from './grid/RowContextMenu'
import { ColumnPropertiesModal } from './grid/ColumnPropertiesModal'
import { SummaryRow } from './grid/SummaryRow'
import { GridCellComponent } from './grid/GridCellComponent'
import { useGridKeyboardNavigation } from './grid/useGridKeyboardNavigation'
import {
  sortColumnsByCorePolicy,
  normalizeColumnOrders,
  calculateLeftOffsets,
  toggleColumnFreeze,
  moveColumn,
} from './grid/gridPolicyUtils'
import { useEditorStore } from '@/store/editorStore'
import { useMasterDetailStore } from '@/store/masterDetailStore'
import {
  Search,
  Plus,
  RefreshCw,
  MoreVertical,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Trash2,
  Copy,
  Pin,
  Filter,
  FileDown,
  Printer,
} from 'lucide-react'

import { useDataEngine } from '@/core/engines/dataEngine'
import { exportGridToExcel } from '@/core/engines/excelExportEngine'
import { printGridReport } from '@/core/engines/printReportEngine'
import { triggerComponentEvent, executeSingleEvent } from '@/core/engines/eventRunner'

// Mock dữ liệu mặc định trung lập khi bảng chưa được liên kết data
const DEFAULT_GENERIC_ROWS: any[] = [
  { id: 1, name: 'Bản ghi mẫu 01', status: 'Hoạt động' },
  { id: 2, name: 'Bản ghi mẫu 02', status: 'Chờ duyệt' },
]

export const ForgeTable: React.FC<ComponentProps> = ({ node }) => {
  const { props, style } = node
  const updateComponentProps = useEditorStore((state) => state.updateComponentProps)

  // Danh sách cột thô từ props
  const rawColumns: TableColumn[] = useMemo(() => {
    if (props.columns && Array.isArray(props.columns)) {
      return props.columns
    }
    return [
      { key: 'id', title: 'Mã', width: '80px', sortable: true, order: 1 },
      { key: 'name', title: 'Tên mục', width: '220px', sortable: true, editable: true, componentType: 'TextBox', order: 2 },
      { key: 'status', title: 'Trạng thái', width: '140px', sortable: true, order: 3 },
    ]
  }, [props.columns])

  // ── SẮP XẾP CỘT CHUẨN C# CORE (GridView.cs): Cột Frozen LUÔN đứng đầu, tiếp theo theo order ──
  const columns: TableColumn[] = useMemo(() => {
    return sortColumnsByCorePolicy(rawColumns)
  }, [rawColumns])

  // Danh sách các cột hiển thị (bỏ qua cột ẩn hidden)
  const visibleColumns: TableColumn[] = useMemo(() => {
    return columns.filter((col) => !col.hidden)
  }, [columns])

  // Kết nối Master-Detail Store nếu bảng này thuộc hệ sinh thái Master-Detail (Ảnh 4)
  const detailGrids = useMasterDetailStore((s) => s.detailGrids)
  const updateGridCellInStore = useMasterDetailStore((s) => s.updateGridCell)
  const addGridRowInStore = useMasterDetailStore((s) => s.addGridRow)
  const deleteGridRowInStore = useMasterDetailStore((s) => s.deleteGridRow)
  const duplicateGridRowInStore = useMasterDetailStore((s) => s.duplicateGridRow)
  const validationErrors = useMasterDetailStore((s) => s.validationErrors)

  const isMasterDetailGrid = Boolean(detailGrids && detailGrids[node.id])

  // Dữ liệu dòng (ưu tiên props.data, dataset theo Reference, hoặc fallback generic)
  const reference = (props.reference as string) || (node.dataBinding?.entityName as string)
  const datasetFromEngine = useDataEngine((s) => (reference ? s.datasets[reference] : undefined))

  const [rows, setRows] = useState<any[]>(() => {
    if (isMasterDetailGrid && detailGrids && detailGrids[node.id]) {
      return detailGrids[node.id]
    }
    if (props.data && Array.isArray(props.data)) {
      return props.data
    }
    if (datasetFromEngine && Array.isArray(datasetFromEngine)) {
      return datasetFromEngine
    }
    return DEFAULT_GENERIC_ROWS
  })

  // Đồng bộ khi props.data thay đổi từ bên ngoài
  useEffect(() => {
    if (props.data && Array.isArray(props.data) && props.data.length > 0) {
      setRows(props.data)
    }
  }, [props.data])

  // Đồng bộ khi dataset trong DataEngine thay đổi
  useEffect(() => {
    if (datasetFromEngine && Array.isArray(datasetFromEngine) && datasetFromEngine.length > 0) {
      setRows(datasetFromEngine)
    }
  }, [datasetFromEngine])

  // Dữ liệu hiển thị thời gian thực (ưu tiên MasterDetailStore -> rows -> dataset -> props.data)
  const activeRows: any[] = useMemo(() => {
    if (isMasterDetailGrid && detailGrids && detailGrids[node.id] && detailGrids[node.id].length > 0) {
      return detailGrids[node.id]
    }
    if (rows && Array.isArray(rows) && rows.length > 0) {
      return rows
    }
    if (datasetFromEngine && Array.isArray(datasetFromEngine) && datasetFromEngine.length > 0) {
      return datasetFromEngine
    }
    if (props.data && Array.isArray(props.data)) {
      return props.data
    }
    return DEFAULT_GENERIC_ROWS
  }, [isMasterDetailGrid, detailGrids, node.id, rows, datasetFromEngine, props.data])

  // Tự động query theo Reference nếu không có props.data và chưa nạp trong engine
  useEffect(() => {
    if (props.data && Array.isArray(props.data)) return
    if (datasetFromEngine && Array.isArray(datasetFromEngine) && datasetFromEngine.length > 0) return

    let isMounted = true
    if (reference) {
      const query = (props.query as string) || (props.filter as string) || ''
      useDataEngine.getState().queryEntity(reference, query).then((items) => {
        if (isMounted && items && items.length > 0) {
          setRows(items)
        }
      })
    }
    return () => {
      isMounted = false
    }
  }, [props.data, reference, props.query, props.filter, datasetFromEngine])

  // State tìm kiếm & sắp xếp
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  // State bộ lọc tại từng cột (FilterLocal từ Core cũ)
  const [showColumnFilters, setShowColumnFilters] = useState(false)
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({})

  // State Context Menu chuột phải
  const [contextMenu, setContextMenu] = useState<{
    isOpen: boolean
    x: number
    y: number
    column: TableColumn | null
    columnIndex: number
  }>({
    isOpen: false,
    x: 0,
    y: 0,
    column: null,
    columnIndex: -1,
  })

  // State Modal Thuộc Tính Cột (Column Properties)
  const [propertiesModal, setPropertiesModal] = useState<{
    isOpen: boolean
    column: TableColumn | null
  }>({
    isOpen: false,
    column: null,
  })

  // State Context Menu chuột phải trên dòng (RowContextMenu)
  const [rowContextMenu, setRowContextMenu] = useState<{
    isOpen: boolean
    x: number
    y: number
    row: any
    rowIndex: number
  }>({
    isOpen: false,
    x: 0,
    y: 0,
    row: null,
    rowIndex: -1,
  })

  // State kéo thả cột trên Header (Column Drag and Drop)
  const [draggedColKey, setDraggedColKey] = useState<string | null>(null)
  const [dragOverColKey, setDragOverColKey] = useState<string | null>(null)
  const [dropIndicator, setDropIndicator] = useState<'left' | 'right' | null>(null)

  // Độ rộng cột STT + Thao tác ghim ở đầu table
  const STT_COL_WIDTH = 55

  // ── TÍNH TOÁN LEFT OFFSETS CỘNG DỒN CHO CÁC CỘT STICKY LEFT ──
  const { offsets: leftOffsets, lastFrozenKey } = useMemo(() => {
    return calculateLeftOffsets(columns, STT_COL_WIDTH)
  }, [columns])

  // Lọc và sắp xếp dữ liệu (sử dụng activeRows thời gian thực)
  const processedRows = useMemo(() => {
    let result = [...activeRows]

    // 1. Tìm kiếm tổng quát
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase()
      result = result.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(lower)
        )
      )
    }

    // 2. Lọc theo từng cột (FilterLocal)
    if (showColumnFilters) {
      Object.entries(columnFilters).forEach(([colKey, filterVal]) => {
        if (filterVal && filterVal.trim()) {
          const lower = filterVal.toLowerCase().trim()
          result = result.filter((row) => {
            const cellVal = row[colKey]
            return cellVal !== undefined && cellVal !== null && String(cellVal).toLowerCase().includes(lower)
          })
        }
      })
    }

    // 3. Sắp xếp
    if (sortKey) {
      result.sort((a, b) => {
        const valA = a[sortKey]
        const valB = b[sortKey]
        if (valA === valB) return 0
        if (valA === undefined || valA === null) return 1
        if (valB === undefined || valB === null) return -1

        let cmp = 0
        if (typeof valA === 'number' && typeof valB === 'number') {
          cmp = valA - valB
        } else {
          cmp = String(valA).localeCompare(String(valB))
        }
        return sortOrder === 'asc' ? cmp : -cmp
      })
    }

    return result
  }, [activeRows, searchTerm, showColumnFilters, columnFilters, sortKey, sortOrder])

  // Cập nhật và lưu bền vững danh sách dòng
  const commitRows = (nextRows: any[]) => {
    setRows(nextRows)
    updateComponentProps(node.id, { data: nextRows })
  }

  // Cập nhật và lưu bền vững danh sách cột (chuẩn hóa order & frozen lên đầu)
  const commitColumns = (updated: TableColumn[]) => {
    const normalized = normalizeColumnOrders(updated)
    updateComponentProps(node.id, { columns: normalized })
  }

  // Sửa giá trị cell trực tiếp (khớp theo rowId để tránh lỗi khi sắp xếp hoặc tìm kiếm)
  const handleCellChange = (rowId: any, colKey: string, newVal: any) => {
    if (isMasterDetailGrid) {
      updateGridCellInStore(node.id, rowId, colKey, newVal)
    }

    const currentList = (isMasterDetailGrid && detailGrids && detailGrids[node.id])
      ? detailGrids[node.id]
      : activeRows

    const updated = currentList.map((r: any, i: number) => {
      const match = (r.id !== undefined && r.id === rowId) || (r.id === undefined && i === rowId)
      return match ? { ...r, [colKey]: newVal } : r
    })
    commitRows(updated)

    if (reference) {
      useDataEngine.getState().registerDataset(reference, updated)
    }
  }

  // ⚡ Thao tác khi người dùng click vào nút hoặc link trong một ô của bảng (chuẩn Core Event Delegation)
  const handleCellAction = (actionKey: string, r: any, col?: TableColumn) => {
    const features = useEditorStore.getState().features
    const currentFeature = features.find((f) => String(f.id) === String(node.pageId))
    const blFileName = currentFeature?.scriptFile
    const actionName = col?.action || actionKey

    // 1. Kích hoạt sự kiện cấu hình trên cột (col.events hoặc fallback col.action) qua Event Runner
    let executedColEvent = false
    if (col?.events) {
      const colEvs = Array.isArray(col.events)
        ? col.events
        : typeof col.events === 'string'
          ? (() => {
              try {
                return JSON.parse(col.events)
              } catch {
                return []
              }
            })()
          : []

      colEvs.forEach((ev: any) => {
        executedColEvent = true
        executeSingleEvent(
          ev,
          col.title || col.key,
          blFileName,
          { row: r, col, column: col, action: ev.action || ev.handlerName || actionName, value: r[col?.key || ''] }
        )
      })
    }

    if (!executedColEvent && actionName) {
      executeSingleEvent(
        { id: `col_act_${col?.key || actionKey}`, trigger: 'actionClick', action: actionName, handlerName: actionName },
        node.props.label || 'Bảng dữ liệu',
        blFileName,
        { row: r, col, column: col, action: actionName, value: r[col?.key || ''] }
      )
    }

    // 2. Kích hoạt các sự kiện trigger = 'actionClick' được gắn trên Table node
    if (node.events && node.events.length > 0) {
      triggerComponentEvent(node.events, 'actionClick', node.props.label || 'Bảng dữ liệu', blFileName, {
        action: actionName,
        row: r,
        col,
        column: col,
        colKey: col?.key,
        value: r[col?.key || ''],
      })
    }
  }

  // ⚡ Quản lý hàng được chọn & Bảng (Hỗ trợ bàn phím điều hướng & phím tắt F1..F4 chuẩn Core GridView.cs)
  const [selectedRowId, setSelectedRowId] = useState<any>(null)
  const [selectedRowIds, setSelectedRowIds] = useState<Set<any>>(new Set())
  const tableRef = useRef<HTMLDivElement>(null)

  // 🔔 Toast thông báo phản hồi tức thì cho người dùng khi nhấn phím tắt hoặc thao tác lưới
  const showTableToast = (title: string, message: string, type: 'success' | 'warning' | 'info' = 'info') => {
    const notif = document.createElement('div')
    const borderClass =
      type === 'success'
        ? 'border-emerald-500 shadow-emerald-500/30'
        : type === 'warning'
        ? 'border-amber-500 shadow-amber-500/30'
        : 'border-blue-500 shadow-blue-500/30'
    const icon = type === 'success' ? '⚡' : type === 'warning' ? '⚠️' : 'ℹ️'
    const iconBg =
      type === 'success'
        ? 'bg-emerald-600/25 text-emerald-400'
        : type === 'warning'
        ? 'bg-amber-600/25 text-amber-400'
        : 'bg-blue-600/20 text-blue-400'

    notif.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${borderClass} text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md pointer-events-none`
    notif.innerHTML = `
      <div class="w-8 h-8 rounded-xl ${iconBg} flex items-center justify-center font-bold text-base flex-shrink-0">
        ${icon}
      </div>
      <div class="min-w-0">
        <div class="font-bold text-slate-100 flex items-center gap-1.5 flex-wrap">
          <span>${title}</span>
        </div>
        <div class="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-mono">${message}</div>
      </div>
    `
    document.body.appendChild(notif)
    setTimeout(() => {
      notif.classList.add('opacity-0', 'transition-opacity', 'duration-300')
      setTimeout(() => notif.remove(), 300)
    }, 3800)
  }

  // 🔘 Phím tắt F1: Chọn tất cả các dòng / Bỏ chọn tất cả dòng (C# Core GridView.cs:1924)
  const handleF1 = () => {
    if (selectedRowIds.size === processedRows.length && processedRows.length > 0) {
      setSelectedRowIds(new Set())
      showTableToast('F1 (Toggle All)', 'Đã bỏ chọn tất cả các dòng', 'info')
    } else {
      const allIds = new Set(processedRows.map((r, i) => r.id ?? r.Id ?? i))
      setSelectedRowIds(allIds)
      if (processedRows.length > 0) {
        setSelectedRowId(processedRows[0].id ?? processedRows[0].Id ?? 0)
      }
      showTableToast('F1 (Toggle All)', `Đã chọn tất cả ${allIds.size} dòng trong bảng`, 'success')
    }
  }

  // 🔘 Phím tắt F2: Lọc nhanh theo giá trị ô đang chọn (C# Core GridView.cs:1540)
  const handleF2 = () => {
    let targetColKey = focusedCell?.colKey
    let targetRowIdx = focusedCell?.rowIndex ?? 0

    if (!targetColKey && visibleColumns.length > 0) {
      targetColKey = visibleColumns[0].key
    }

    const row = processedRows[targetRowIdx]
    const val = row && targetColKey ? row[targetColKey] : null

    if (val !== undefined && val !== null && String(val).trim() !== '' && String(val) !== '—') {
      setColumnFilters((prev) => ({ ...prev, [targetColKey!]: String(val) }))
      setShowColumnFilters(true)
      const colTitle = visibleColumns.find((c) => c.key === targetColKey)?.title || targetColKey
      showTableToast('F2 (Lọc theo ô)', `Đã lọc cột [${colTitle}] với giá trị "${val}"`, 'success')
    } else {
      setShowColumnFilters(true)
      showTableToast('F2 (Lọc theo ô)', 'Vui lòng chọn hoặc click vào một ô có dữ liệu để lọc nhanh', 'warning')
    }
  }

  // 🔘 Phím tắt F3: Tính tổng nhanh số liệu các cột số (C# Core GridView.cs:1901-1922)
  const handleF3 = () => {
    const targetRows = selectedRowIds.size > 0
      ? processedRows.filter((r, i) => selectedRowIds.has(r.id ?? r.Id ?? i))
      : processedRows

    if (targetRows.length === 0) {
      showTableToast('F3 (Tính tổng nhanh)', 'Không có bản ghi nào để tính toán', 'warning')
      return
    }

    const numberCols = visibleColumns.filter((c) =>
      c.componentType === 'Number' ||
      c.precision !== undefined ||
      ['totalgw', 'totalcbm', 'totalvgm', 'gw', 'cbm', 'vgm', 'packages', 'amount'].some((k) =>
        c.key.toLowerCase().includes(k)
      )
    )

    if (numberCols.length === 0) {
      showTableToast('F3 (Tính tổng nhanh)', 'Bảng hiện tại không có cột số liệu nào (GW, CBM, VGM, v.v.)', 'warning')
      return
    }

    const sumStrings = numberCols.map((c) => {
      const total = targetRows.reduce((acc, r) => {
        const v = Number(r[c.key])
        return acc + (isNaN(v) ? 0 : v)
      }, 0)
      const formatted = total % 1 !== 0
        ? total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        : total.toLocaleString('en-US')
      return `${c.title || c.key}: ${formatted}${c.summarySuffix ? ` ${c.summarySuffix}` : ''}`
    })

    showTableToast(
      `F3 (Tổng ${targetRows.length} dòng)`,
      sumStrings.join(' | '),
      'success'
    )
  }

  // 🔘 Phím tắt F4: Thêm dòng mới vào bảng và focus ngay ô đầu tiên (C# Core GridView.cs:1689)
  const handleF4 = () => {
    handleAddRow()
    const newRowIdx = processedRows.length
    showTableToast('F4 (Thêm dòng)', `Đã thêm dòng mới số #${newRowIdx + 1}`, 'success')
    setTimeout(() => {
      focusCell(newRowIdx, 0)
    }, 60)
  }

  // 📊 Xuất dữ liệu Grid ra file Excel (Core C# ButtonExcel.cs & ExcelExt.cs)
  const handleExportExcel = () => {
    try {
      exportGridToExcel({
        fileName: props.label ? String(props.label).replace(/\s+/g, '_') : 'Du_Lieu_Bang',
        sheetName: props.label ? String(props.label).slice(0, 30) : 'Sheet1',
        columns: visibleColumns,
        rows: processedRows,
        includeSummary: true,
      })
      showTableToast('Xuất Excel', `Đã xuất ${processedRows.length} dòng dữ liệu ra file Excel thành công`, 'success')
    } catch (err: any) {
      showTableToast('Lỗi xuất Excel', err?.message || 'Không thể tạo file Excel', 'warning')
    }
  }

  // 🖨️ In ấn và Xuất báo cáo PDF trực tiếp (Core C# ButtonPdf.cs & PdfReport.cs)
  const handlePrintReport = () => {
    try {
      // Tính toán dòng tổng cộng cho các cột có aggregate: 'sum' | 'count' | 'avg'
      const summaryRowObj: Record<string, any> = {}
      visibleColumns.forEach((c) => {
        if (c.aggregate === 'sum') {
          const sum = processedRows.reduce((acc, r) => acc + (Number(r[c.key]) || 0), 0)
          summaryRowObj[c.key] = sum
        } else if (c.aggregate === 'count') {
          summaryRowObj[c.key] = processedRows.length
        }
      })

      printGridReport({
        title: props.label ? String(props.label) : 'Báo Cáo Bảng Dữ Liệu',
        subtitle: `Dữ liệu trích xuất từ phân hệ UIForge - ${processedRows.length} bản ghi`,
        columns: visibleColumns,
        rows: processedRows,
        summaryRow: Object.keys(summaryRowObj).length > 0 ? summaryRowObj : undefined,
        metadata: {
          'Thời điểm xuất': new Date().toLocaleString('vi-VN'),
          'Số lượng dòng': `${processedRows.length} dòng`,
          'Bộ lọc áp dụng': searchTerm ? `Tìm kiếm: "${searchTerm}"` : 'Tất cả dữ liệu',
        },
      })
      showTableToast('In Báo Cáo', 'Đã mở cửa sổ in ấn và xuất PDF báo cáo thành công', 'info')
    } catch (err: any) {
      showTableToast('Lỗi In Báo Cáo', err?.message || 'Không thể tạo bản in báo cáo', 'warning')
    }
  }

  // ⌨️ Kích hoạt Hook Điều hướng Bàn phím & Phím tắt ERP chuẩn Desktop (Core C# GridView.cs & GridViewItem.cs)
  const {
    focusedCell,
    setFocusedCell,
    focusCell,
    handleTableContainerKeyDown,
    handleCellKeyDown,
  } = useGridKeyboardNavigation({
    tableRef,
    rows: processedRows,
    visibleColumns,
    selectedRowId,
    setSelectedRowId,
    selectedRowIds,
    setSelectedRowIds,
    onRowDoubleClick: (row, rowIdx) => handleRowDoubleClick(row, rowIdx),
    onAddRow: handleF4,
    onDeleteRow: (idx) => handleDeleteRow(idx),
    onDuplicateRow: (idx) => handleDuplicateRow(idx),
    onToggleAll: handleF1,
    onFilterByCell: handleF2,
    onQuickSum: handleF3,
    onToggleColumnFilters: () => setShowColumnFilters((prev) => !prev),
  })

  const handleRowClick = (r: any, rowIdx: number, e?: React.MouseEvent) => {
    const rowId = r.id ?? r.Id ?? rowIdx
    setSelectedRowId(rowId)

    // Xử lý chọn nhiều dòng (Multi-selection) bằng Ctrl hoặc Shift chuẩn desktop
    if (e?.ctrlKey || e?.metaKey) {
      setSelectedRowIds((prev) => {
        const next = new Set(prev)
        if (next.has(rowId)) next.delete(rowId)
        else next.add(rowId)
        return next
      })
    } else if (e?.shiftKey && selectedRowId !== null) {
      const startIdx = processedRows.findIndex((row, i) => (row.id ?? row.Id ?? i) === selectedRowId)
      if (startIdx !== -1) {
        const min = Math.min(startIdx, rowIdx)
        const max = Math.max(startIdx, rowIdx)
        const rangeIds = new Set<any>()
        for (let i = min; i <= max; i++) {
          rangeIds.add(processedRows[i].id ?? processedRows[i].Id ?? i)
        }
        setSelectedRowIds(rangeIds)
      }
    } else {
      setSelectedRowIds(new Set([rowId]))
    }

    const features = useEditorStore.getState().features
    const currentFeature = features.find((f) => String(f.id) === String(node.pageId))
    const blFileName = currentFeature?.scriptFile

    if (reference) {
      useDataEngine.getState().setSelectedRecord(reference, r)
    }

    // Kích hoạt sự kiện 'rowClick' hoặc 'click' trên Table node
    if (node.events && node.events.length > 0) {
      triggerComponentEvent(node.events, 'rowClick', node.props.label || 'Bảng dữ liệu', blFileName, {
        row: r,
        rowIndex: rowIdx,
        action: 'rowClick',
      })
      triggerComponentEvent(node.events, 'click', node.props.label || 'Bảng dữ liệu', blFileName, {
        row: r,
        rowIndex: rowIdx,
        action: 'click',
      })
      triggerComponentEvent(node.events, 'select', node.props.label || 'Bảng dữ liệu', blFileName, {
        row: r,
        rowIndex: rowIdx,
        action: 'select',
      })
    }
  }

  // ⚡ Thao tác khi người dùng nhấp đúp chuột (Double Click) vào một dòng trên bảng
  const handleRowDoubleClick = (r: any, rowIdx: number) => {
    const features = useEditorStore.getState().features
    const currentFeature = features.find((f) => String(f.id) === String(node.pageId))
    const blFileName = currentFeature?.scriptFile

    if (node.events && node.events.length > 0) {
      triggerComponentEvent(node.events, 'dblclick', node.props.label || 'Bảng dữ liệu', blFileName, {
        row: r,
        rowIndex: rowIdx,
        id: r.id ?? r.Id,
        action: 'dblclick',
      })
    }
  }

  // Thêm dòng mới
  const handleAddRow = () => {
    if (isMasterDetailGrid) {
      addGridRowInStore(node.id)
    }
    const currentList = (isMasterDetailGrid && detailGrids && detailGrids[node.id])
      ? detailGrids[node.id]
      : activeRows

    const newId = currentList.length > 0 ? Math.max(...currentList.map((r: any) => Number(r.id) || 0)) + 1 : 1
    const newRow: any = { id: newId }
    columns.forEach((col) => {
      if (col.componentType === 'Number') newRow[col.key] = 0
      else if (col.componentType === 'Checkbox') newRow[col.key] = false
      else if (col.componentType === 'DatePicker') newRow[col.key] = '08/11/2026'
      else newRow[col.key] = ''
    })
    const updated = [...currentList, newRow]
    commitRows(updated)
    if (reference) {
      useDataEngine.getState().registerDataset(reference, updated)
    }
  }

  // Nhân bản dòng
  const handleDuplicateRow = (rowIdx: number) => {
    if (isMasterDetailGrid) {
      duplicateGridRowInStore(node.id, rowIdx)
    }
    const currentList = (isMasterDetailGrid && detailGrids && detailGrids[node.id])
      ? detailGrids[node.id]
      : activeRows

    const target = currentList[rowIdx]
    const newId = Math.max(...currentList.map((r: any) => Number(r.id) || 0)) + 1
    const cloned = { ...target, id: newId }
    const updated = [...currentList]
    updated.splice(rowIdx + 1, 0, cloned)
    commitRows(updated)
    if (reference) {
      useDataEngine.getState().registerDataset(reference, updated)
    }
  }

  // Xóa dòng
  const handleDeleteRow = (rowIdx: number) => {
    if (isMasterDetailGrid) {
      deleteGridRowInStore(node.id, rowIdx)
    }
    const currentList = (isMasterDetailGrid && detailGrids && detailGrids[node.id])
      ? detailGrids[node.id]
      : activeRows

    if (currentList.length <= 1) {
      if (!confirm('Bạn có chắc muốn xóa dòng cuối cùng này không?')) return
    }
    const updated = currentList.filter((_: any, idx: number) => idx !== rowIdx)
    commitRows(updated)
    if (reference) {
      useDataEngine.getState().registerDataset(reference, updated)
    }
  }

  // Xử lý chuột phải vào Dòng mở Menu tác vụ
  const handleRowContextMenu = (
    e: React.MouseEvent,
    row: any,
    rowIdx: number
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setRowContextMenu({
      isOpen: true,
      x: e.clientX,
      y: e.clientY,
      row,
      rowIndex: rowIdx,
    })
  }

  // Chèn dòng mới bên dưới
  const handleInsertRowBelow = (rowIdx: number) => {
    const currentList = (isMasterDetailGrid && detailGrids && detailGrids[node.id])
      ? detailGrids[node.id]
      : activeRows

    const newId = currentList.length > 0 ? Math.max(...currentList.map((r: any) => Number(r.id) || 0)) + 1 : 1
    const newRow: any = { id: newId }
    columns.forEach((col) => {
      if (col.componentType === 'Number') newRow[col.key] = 0
      else if (col.componentType === 'Checkbox') newRow[col.key] = false
      else if (col.componentType === 'DatePicker') newRow[col.key] = ''
      else newRow[col.key] = ''
    })
    const updated = [...currentList]
    updated.splice(rowIdx + 1, 0, newRow)
    commitRows(updated)
    if (reference) {
      useDataEngine.getState().registerDataset(reference, updated)
    }
  }

  // Chuyển dòng lên trên
  const handleMoveRowUp = (rowIdx: number) => {
    if (rowIdx <= 0) return
    const currentList = (isMasterDetailGrid && detailGrids && detailGrids[node.id])
      ? detailGrids[node.id]
      : activeRows

    const updated = [...currentList]
    const [moved] = updated.splice(rowIdx, 1)
    updated.splice(rowIdx - 1, 0, moved)
    commitRows(updated)
    if (reference) {
      useDataEngine.getState().registerDataset(reference, updated)
    }
  }

  // Chuyển dòng xuống dưới
  const handleMoveRowDown = (rowIdx: number) => {
    const currentList = (isMasterDetailGrid && detailGrids && detailGrids[node.id])
      ? detailGrids[node.id]
      : activeRows

    if (rowIdx >= currentList.length - 1) return
    const updated = [...currentList]
    const [moved] = updated.splice(rowIdx, 1)
    updated.splice(rowIdx + 1, 0, moved)
    commitRows(updated)
    if (reference) {
      useDataEngine.getState().registerDataset(reference, updated)
    }
  }

  // Xử lý kéo thả cột (Drag & Drop Reorder Columns)
  const handleColDragStart = (e: React.DragEvent, colKey: string) => {
    setDraggedColKey(colKey)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', colKey)
  }

  const handleColDragOver = (e: React.DragEvent, colKey: string) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (draggedColKey === colKey) return

    const rect = e.currentTarget.getBoundingClientRect()
    const isLeftSide = e.clientX < rect.left + rect.width / 2

    setDragOverColKey(colKey)
    setDropIndicator(isLeftSide ? 'left' : 'right')
  }

  const handleColDragLeave = (e: React.DragEvent) => {
    const related = e.relatedTarget as HTMLElement
    if (!e.currentTarget.contains(related)) {
      setDragOverColKey(null)
      setDropIndicator(null)
    }
  }

  const handleColDrop = (e: React.DragEvent, targetColKey: string) => {
    e.preventDefault()
    if (!draggedColKey || draggedColKey === targetColKey) {
      setDraggedColKey(null)
      setDragOverColKey(null)
      setDropIndicator(null)
      return
    }

    const fromIdx = columns.findIndex((c) => c.key === draggedColKey)
    let toIdx = columns.findIndex((c) => c.key === targetColKey)

    if (fromIdx === -1 || toIdx === -1) {
      setDraggedColKey(null)
      setDragOverColKey(null)
      setDropIndicator(null)
      return
    }

    if (dropIndicator === 'right' && fromIdx > toIdx) {
      toIdx = toIdx + 1
    } else if (dropIndicator === 'left' && fromIdx < toIdx) {
      toIdx = toIdx - 1
    }

    toIdx = Math.max(0, Math.min(columns.length - 1, toIdx))

    const reordered = moveColumn(columns, fromIdx, toIdx)
    commitColumns(reordered)

    setDraggedColKey(null)
    setDragOverColKey(null)
    setDropIndicator(null)
  }

  const handleColDragEnd = () => {
    setDraggedColKey(null)
    setDragOverColKey(null)
    setDropIndicator(null)
  }

  // Xử lý Click Header để sắp xếp
  const handleHeaderClick = (col: TableColumn) => {
    if (!col.sortable) return
    if (sortKey === col.key) {
      if (sortOrder === 'asc') {
        setSortOrder('desc')
      } else {
        setSortKey(null)
      }
    } else {
      setSortKey(col.key)
      setSortOrder('asc')
    }
  }

  // Xử lý chuột phải vào Header mở Context Menu
  const handleHeaderContextMenu = (
    e: React.MouseEvent,
    col: TableColumn,
    idx: number
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setContextMenu({
      isOpen: true,
      x: e.clientX,
      y: e.clientY,
      column: col,
      columnIndex: idx,
    })
  }

  // Toggle ẩn/hiện cột
  const handleToggleHide = (columnKey: string) => {
    const updated = columns.map((col) =>
      col.key === columnKey ? { ...col, hidden: !col.hidden } : col
    )
    commitColumns(updated)
  }

  // Cố định cột (Freeze) -> Sử dụng toggleColumnFreeze để tự động đưa lên đầu table
  const handleSetFreeze = (columnKey: string) => {
    const updated = toggleColumnFreeze(columns, columnKey)
    commitColumns(updated)
  }

  // Mở modal thuộc tính cột (Ảnh 6 & Ảnh Properties Core cũ)
  const handleOpenProperties = (col: TableColumn) => {
    setPropertiesModal({
      isOpen: true,
      column: col,
    })
  }

  // Nhân bản cột (Clone Column)
  const handleCloneColumn = (columnKey: string) => {
    const targetIdx = columns.findIndex((c) => c.key === columnKey)
    if (targetIdx === -1) return
    const target = columns[targetIdx]
    const cloned: TableColumn = {
      ...target,
      key: `${target.key}_copy`,
      title: `${target.title} (Bản sao)`,
      order: ((target as any).order ?? targetIdx) + 1,
    }
    const updated = [...columns]
    updated.splice(targetIdx + 1, 0, cloned)
    commitColumns(updated)
  }

  // Xóa cột khỏi bảng
  const handleRemoveColumn = (columnKey: string) => {
    if (columns.length <= 1) {
      alert('Bảng phải có ít nhất 1 cột!')
      return
    }
    const updated = columns.filter((c) => c.key !== columnKey)
    commitColumns(updated)
  }

  // Lưu thuộc tính cột từ Modal
  const handleSaveProperties = (updatedColumn: TableColumn) => {
    const updated = columns.map((col) =>
      col.key === updatedColumn.key ? updatedColumn : col
    )
    commitColumns(updated)
  }

  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } =
    style || {}

  return (
    <div
      className="w-full flex flex-col rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl overflow-hidden text-slate-200 relative"
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      {/* ── TOOLBAR BẢNG CHUẨN ERP (Ảnh 4) ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs">
        {/* Tiêu đề & Đếm số bản ghi */}
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
            <span>{props.label || 'BẢNG DỮ LIỆU'}</span>
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/20">
            {processedRows.length} bản ghi
          </span>
        </div>

        {/* Search, FilterLocal & Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Ô tìm kiếm */}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 absolute left-2.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Tìm kiếm trong bảng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-7 w-44 rounded-md border border-slate-700 bg-slate-800/80 pl-8 pr-2.5 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500 transition-all focus:w-56"
            />
          </div>

          {/* Nút bật/tắt bộ lọc từng cột (FilterLocal) */}
          <button
            type="button"
            onClick={() => setShowColumnFilters((prev) => !prev)}
            title="Bật/Tắt dòng lọc nhanh tại từng cột (FilterLocal)"
            className={`flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${showColumnFilters
              ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
              : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span className="text-[11px] hidden sm:inline">Lọc Cột</span>
          </button>

          {/* Nút thêm dòng nhanh */}
          <button
            type="button"
            onClick={handleAddRow}
            title="Thêm dòng mới vào bảng"
            className="flex items-center gap-1 h-7 px-2.5 rounded-md border border-emerald-600/40 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="text-[11px]">Thêm dòng</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSearchTerm('')
              setColumnFilters({})
            }}
            title="Làm mới bộ lọc"
            className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* Nút Xuất Excel chuẩn Core C# ButtonExcel.cs & ExcelExt.cs */}
          <button
            type="button"
            onClick={handleExportExcel}
            title="Xuất toàn bộ dữ liệu bảng ra file Excel (.xls)"
            className="flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">Xuất Excel</span>
          </button>

          {/* Nút In Báo Cáo / PDF chuẩn Core C# ButtonPdf.cs & PdfReport.cs */}
          <button
            type="button"
            onClick={handlePrintReport}
            title="In báo cáo / Xuất PDF trực tiếp dữ liệu bảng"
            className="flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-slate-700 bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-slate-800/90 transition-all text-xs font-medium cursor-pointer shadow-sm active:scale-95"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">In / PDF</span>
          </button>

          {/* Phím tắt F1..F6 chuẩn ERP (Ảnh 4 & C# Core GridView.cs) */}
          <div className="hidden xl:flex items-center gap-1 pl-1 border-l border-slate-800 text-[10px] font-mono text-slate-400">
            <button
              type="button"
              onClick={handleF1}
              title="F1: Chọn tất cả / Bỏ chọn tất cả dòng (Toggle All)"
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95"
            >
              F1
            </button>
            <button
              type="button"
              onClick={handleF2}
              title="F2: Lọc nhanh theo giá trị ô đang chọn (Filter by Cell)"
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95"
            >
              F2
            </button>
            <button
              type="button"
              onClick={handleF3}
              title="F3: Tính tổng nhanh số liệu (GW, CBM, VGM) các dòng chọn"
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95"
            >
              F3
            </button>
            <button
              type="button"
              onClick={handleF4}
              title="F4: Thêm dòng mới vào bảng (Add Row)"
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95"
            >
              F4
            </button>
            <button
              type="button"
              onClick={() => setShowColumnFilters((prev) => !prev)}
              title="F6: Bật / Tắt bộ lọc từng cột (Toggle Column Filters)"
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-emerald-600/30 text-slate-300 hover:text-emerald-300 border border-slate-700/80 hover:border-emerald-500/60 transition-all font-bold cursor-pointer shadow-sm active:scale-95"
            >
              F6
            </button>
          </div>
        </div>
      </div>

      {/* ── NỘI DUNG LƯỚI BẢNG (TABLE CANVAS) ── */}
      <div
        ref={tableRef}
        tabIndex={0}
        onKeyDown={handleTableContainerKeyDown}
        className="w-full overflow-x-auto select-none relative focus:outline-none"
      >
        <table className="w-full text-left text-xs border-collapse">
          {/* THEAD */}
          <thead className="bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase">
            <tr>
              {/* Cột STT + Thao tác ghim cố định ở đầu table (Left: 0, z-30, bg đặc) */}
              <th
                onClick={handleF1}
                className="px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)] cursor-pointer hover:bg-slate-800 transition-colors select-none"
                style={{ width: `${STT_COL_WIDTH}px`, minWidth: `${STT_COL_WIDTH}px` }}
                title="Click hoặc nhấn F1 để Chọn tất cả / Bỏ chọn dòng"
              >
                <span className="flex items-center justify-center gap-1">
                  <input
                    type="checkbox"
                    readOnly
                    checked={processedRows.length > 0 && selectedRowIds.size === processedRows.length}
                    className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-emerald-500 cursor-pointer pointer-events-none"
                  />
                </span>
              </th>

              {/* Các cột dữ liệu (Các cột Frozen đã được đưa lên đầu table) */}
              {visibleColumns.map((col, idx) => {
                const isFrozen = Boolean(col.frozen || col.sticky === 'left')
                const leftOffset = isFrozen && leftOffsets[col.key] !== undefined ? leftOffsets[col.key] : undefined
                const isLastFrozen = col.key === lastFrozenKey

                const isBeingDragged = draggedColKey === col.key
                const isDragOver = dragOverColKey === col.key

                let dropIndicatorClass = ''
                if (isDragOver && dropIndicator === 'left') {
                  dropIndicatorClass = 'border-l-4 border-l-emerald-400 bg-emerald-500/20'
                } else if (isDragOver && dropIndicator === 'right') {
                  dropIndicatorClass = 'border-r-4 border-r-emerald-400 bg-emerald-500/20'
                }

                const alignClass =
                  col.align === 'right'
                    ? 'text-right'
                    : col.align === 'center'
                      ? 'text-center'
                      : 'text-left'

                return (
                  <th
                    key={col.key}
                    draggable={true}
                    onDragStart={(e) => handleColDragStart(e, col.key)}
                    onDragOver={(e) => handleColDragOver(e, col.key)}
                    onDragLeave={handleColDragLeave}
                    onDrop={(e) => handleColDrop(e, col.key)}
                    onDragEnd={handleColDragEnd}
                    onContextMenu={(e) => handleHeaderContextMenu(e, col, idx)}
                    onClick={() => handleHeaderClick(col)}
                    className={`group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${alignClass} ${isFrozen
                      ? `sticky z-20 bg-[#0b1329] ${isLastFrozen ? 'border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]' : 'border-r border-slate-800/90'}`
                      : 'border-r border-slate-800/90'
                      } ${isBeingDragged ? 'opacity-30 bg-slate-800/80' : ''} ${dropIndicatorClass}`}
                    style={{
                      width: col.width,
                      minWidth: col.minWidth || col.width || '100px',
                      maxWidth: col.maxWidth,
                      left: leftOffset !== undefined ? `${leftOffset}px` : undefined,
                    }}
                    title={`Kéo thả để di chuyển đổi thứ tự cột. Click để sắp xếp. Chuột phải để mở menu (Order: ${col.order ?? idx + 1})`}
                  >
                    <div className={`flex items-center gap-1.5 ${col.align === 'right' ? 'justify-end' : col.align === 'center' ? 'justify-center' : 'justify-between'}`}>
                      <div className="flex items-center gap-1 truncate">
                        {isFrozen && <Pin className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400 flex-shrink-0" />}
                        <span className="truncate">{col.title || col.key}</span>
                        {col.order && (
                          <span className="text-[9px] font-mono text-slate-500 font-normal">#{col.order}</span>
                        )}
                      </div>

                      {/* Icon sắp xếp */}
                      {col.sortable && (
                        <div className="flex items-center opacity-60 group-hover:opacity-100 transition-opacity">
                          {sortKey === col.key ? (
                            sortOrder === 'asc' ? (
                              <ArrowUp className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <ArrowDown className="w-3 h-3 text-emerald-400" />
                            )
                          ) : (
                            <ArrowUpDown className="w-2.5 h-2.5 text-slate-500" />
                          )}
                        </div>
                      )}
                    </div>
                  </th>
                )
              })}
            </tr>

            {/* DÒNG LỌC TẠI TỪNG CỘT (FilterLocal Core Cũ) */}
            {showColumnFilters && (
              <tr className="bg-[#080d1a] border-b border-slate-800">
                <th className="px-2 py-1 sticky left-0 z-30 bg-[#080d1a] border-r border-slate-800 text-center text-slate-500 font-mono text-[10px]">
                  🔍
                </th>
                {visibleColumns.map((col) => {
                  const isFrozen = Boolean(col.frozen || col.sticky === 'left')
                  const leftOffset = isFrozen && leftOffsets[col.key] !== undefined ? leftOffsets[col.key] : undefined
                  const isLastFrozen = col.key === lastFrozenKey

                  return (
                    <th
                      key={`filter_${col.key}`}
                      className={`px-1.5 py-1 border-r border-slate-800 ${isFrozen ? `sticky z-20 bg-[#080d1a] ${isLastFrozen ? 'border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]' : ''}` : ''
                        }`}
                      style={{
                        left: leftOffset !== undefined ? `${leftOffset}px` : undefined,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Lọc..."
                        value={columnFilters[col.key] || ''}
                        onChange={(e) => setColumnFilters((prev) => ({ ...prev, [col.key]: e.target.value }))}
                        className="w-full h-6 px-1.5 rounded bg-slate-900 border border-slate-700 text-slate-100 text-[11px] focus:border-emerald-500 focus:outline-none"
                      />
                    </th>
                  )
                })}
              </tr>
            )}
          </thead>

          {/* TBODY: MỖI Ô LÀ MỘT COMPONENT THỰC THỤ */}
          <tbody className="divide-y divide-slate-800/70 text-slate-300">
            {processedRows.length === 0 ? (
              <tr>
                <td
                  colSpan={visibleColumns.length + 1}
                  className="px-6 py-8 text-center text-slate-500 italic"
                >
                  Không tìm thấy bản ghi nào. Bấm nút "+ Thêm dòng" để nhập dữ liệu.
                </td>
              </tr>
            ) : (
              processedRows.map((row, rowIdx) => (
                <tr
                  key={row.id || rowIdx}
                  data-row-index={rowIdx}
                  onClick={(e) => handleRowClick(row, rowIdx, e)}
                  onDoubleClick={() => handleRowDoubleClick(row, rowIdx)}
                  onContextMenu={(e) => handleRowContextMenu(e, row, rowIdx)}
                  className={`transition-colors group cursor-pointer ${
                    selectedRowId === (row.id ?? row.Id ?? rowIdx) || selectedRowIds.has(row.id ?? row.Id ?? rowIdx)
                      ? 'bg-blue-600/25 hover:bg-blue-600/35 border-l-2 border-l-blue-400'
                      : 'hover:bg-slate-800/40'
                  }`}
                >
                  {/* Cột STT ghim cố định ở đầu (Left: 0, z-20, bg đặc #0f172a, click chọn dòng) */}
                  <td
                    onClick={(e) => {
                      e.stopPropagation()
                      const rowId = row.id ?? row.Id ?? rowIdx
                      setSelectedRowIds((prev) => {
                        const next = new Set(prev)
                        if (next.has(rowId)) next.delete(rowId)
                        else next.add(rowId)
                        return next
                      })
                      setSelectedRowId(rowId)
                    }}
                    className={`px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] text-slate-400 select-none cursor-pointer ${
                      selectedRowIds.has(row.id ?? row.Id ?? rowIdx)
                        ? 'bg-blue-900/60 text-blue-200 font-bold'
                        : 'bg-[#0f172a] group-hover:bg-slate-800/90'
                    }`}
                    style={{ width: `${STT_COL_WIDTH}px`, minWidth: `${STT_COL_WIDTH}px` }}
                    title="Click chọn dòng | Chuột phải mở menu thao tác"
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      {selectedRowIds.has(row.id ?? row.Id ?? rowIdx) ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      ) : null}
                      <span>{rowIdx + 1}</span>
                    </span>
                  </td>

                  {/* Render Từng Ô (Mỗi Ô Là Một Interactive Grid Component) */}
                  {visibleColumns.map((col, colIdx) => {
                    const isFrozen = Boolean(col.frozen || col.sticky === 'left')
                    const leftOffset = isFrozen && leftOffsets[col.key] !== undefined ? leftOffsets[col.key] : undefined
                    const isLastFrozen = col.key === lastFrozenKey
                    const cellVal = row[col.key]

                    const alignClass =
                      col.align === 'right'
                        ? 'text-right'
                        : col.align === 'center'
                          ? 'text-center'
                          : 'text-left'

                    const cellError = validationErrors[`${node.id}_${row.id}_${col.key}`]

                    return (
                      <td
                        key={col.key}
                        className={`px-2 py-1 whitespace-nowrap transition-colors ${alignClass} ${isFrozen
                          ? `sticky z-10 bg-[#0f172a] group-hover:bg-slate-800/90 ${isLastFrozen ? 'border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]' : 'border-r border-slate-800/60'}`
                          : 'border-r border-slate-800/60'
                          }`}
                        style={{
                          width: col.width,
                          minWidth: col.minWidth || col.width || '100px',
                          maxWidth: col.maxWidth,
                          left: leftOffset !== undefined ? `${leftOffset}px` : undefined,
                        }}
                      >
                        <GridCellComponent
                          column={col}
                          value={cellVal}
                          row={row}
                          rowIndex={rowIdx}
                          columnIndex={colIdx}
                          error={cellError}
                          onChange={(newVal) => handleCellChange(row.id ?? rowIdx, col.key, newVal)}
                          onActionClick={(actionKey) => handleCellAction(actionKey, row, col)}
                          onKeyDown={handleCellKeyDown}
                          onFocus={(rIdx, cIdx, cKey) => {
                            setSelectedRowId(row.id ?? row.Id ?? rIdx)
                            setFocusedCell({ rowIndex: rIdx, colIndex: cIdx, colKey: cKey })
                          }}
                        />
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>

          {/* TFOOT: HÀNG TỔNG CỘNG CHÂN BẢNG (Chuẩn Ảnh 4) */}
          <tfoot>
            <SummaryRow
              columns={visibleColumns}
              data={processedRows}
              showRowNumber={true}
              rowNumberWidth={STT_COL_WIDTH}
              leftOffsets={leftOffsets}
            />
          </tfoot>
        </table>
      </div>

      {/* ── CONTEXT MENU HEADER (PORTAL VÀO BODY - KHÔNG BAO GIỜ BỊ ĐÈ LÊN) ── */}
      {contextMenu.isOpen && contextMenu.column && (
        <HeaderContextMenu
          isOpen={contextMenu.isOpen}
          x={contextMenu.x}
          y={contextMenu.y}
          column={contextMenu.column}
          columnIndex={contextMenu.columnIndex}
          allColumns={columns}
          onClose={() => setContextMenu((prev) => ({ ...prev, isOpen: false }))}
          onToggleHide={handleToggleHide}
          onSetFreeze={handleSetFreeze}
          onOpenProperties={handleOpenProperties}
          onCloneColumn={handleCloneColumn}
          onRemoveColumn={handleRemoveColumn}
          onToggleFilter={() => setShowColumnFilters((prev) => !prev)}
        />
      )}

      {/* ── MODAL CẤU HÌNH THUỘC TÍNH CỘT (PORTAL VÀO BODY Z-[999999]) ── */}
      {propertiesModal.isOpen && propertiesModal.column && (
        <ColumnPropertiesModal
          isOpen={propertiesModal.isOpen}
          column={propertiesModal.column}
          onClose={() => setPropertiesModal({ isOpen: false, column: null })}
          onSave={handleSaveProperties}
        />
      )}

      {/* ── CONTEXT MENU THAO TÁC DÒNG (PORTAL VÀO BODY Z-[999998]) ── */}
      {rowContextMenu.isOpen && rowContextMenu.row && (
        <RowContextMenu
          isOpen={rowContextMenu.isOpen}
          x={rowContextMenu.x}
          y={rowContextMenu.y}
          row={rowContextMenu.row}
          rowIndex={rowContextMenu.rowIndex}
          totalRows={rows.length}
          onClose={() => setRowContextMenu((prev) => ({ ...prev, isOpen: false, row: null }))}
          onDuplicateRow={handleDuplicateRow}
          onDeleteRow={handleDeleteRow}
          onInsertRowBelow={handleInsertRowBelow}
          onMoveRowUp={handleMoveRowUp}
          onMoveRowDown={handleMoveRowDown}
        />
      )}
    </div>
  )
}
