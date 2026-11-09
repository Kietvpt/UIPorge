import React, { useState, useMemo, useEffect } from 'react'
import type { ComponentProps } from './types'
import type { TableColumn } from '@/types/schema'
import { HeaderContextMenu } from './grid/HeaderContextMenu'
import { RowContextMenu } from './grid/RowContextMenu'
import { ColumnPropertiesModal } from './grid/ColumnPropertiesModal'
import { SummaryRow } from './grid/SummaryRow'
import { GridCellComponent } from './grid/GridCellComponent'
import {
  sortColumnsByCorePolicy,
  normalizeColumnOrders,
  calculateLeftOffsets,
  toggleColumnFreeze,
  moveColumn,
} from './grid/gridPolicyUtils'
import { useEditorStore } from '@/store/editorStore'
import { useMasterDetailStore } from '@/logic/masterDetailStore'
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
} from 'lucide-react'

import { useDataEngine } from '@/core/engines/dataEngine'
import { useNavigationEngine } from '@/core/engines/navigationEngine'

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
    if (props.data && Array.isArray(props.data)) {
      return props.data
    }
    if (datasetFromEngine && Array.isArray(datasetFromEngine)) {
      return datasetFromEngine
    }
    return DEFAULT_GENERIC_ROWS
  })

  // Dữ liệu hiển thị thời gian thực
  const activeRows = (props.data && Array.isArray(props.data)) ? props.data : (datasetFromEngine && Array.isArray(datasetFromEngine)) ? datasetFromEngine : rows

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

  // Điều hướng Master-Detail (FeatureTab / FeaturePopup)
  const detailFeatureId = (props.detailFeatureId as string) || '2'
  const handleOpenDetailTab = (targetRow: any) => {
    const title = targetRow.jobNo ? `Lô ${targetRow.jobNo}` : `Chi tiết #${targetRow.id}`
    useNavigationEngine.getState().openFeature(detailFeatureId, { id: targetRow.id, ...targetRow }, 'Tab', title)
  }

  const handleOpenDetailPopup = (targetRow: any) => {
    const title = targetRow.jobNo ? `Chi Tiết Lô Hàng: ${targetRow.jobNo}` : `Chi Tiết Bản Ghi #${targetRow.id}`
    useNavigationEngine.getState().openFeature(detailFeatureId, { id: targetRow.id, ...targetRow }, 'Popup', title)
  }

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
    } else {
      const updated = rows.map((r, i) => {
        const match = (r.id !== undefined && r.id === rowId) || (r.id === undefined && i === rowId)
        return match ? { ...r, [colKey]: newVal } : r
      })
      commitRows(updated)
    }
  }

  // Thêm dòng mới
  const handleAddRow = () => {
    if (isMasterDetailGrid) {
      addGridRowInStore(node.id)
    } else {
      const newId = rows.length > 0 ? Math.max(...rows.map((r) => Number(r.id) || 0)) + 1 : 1
      const newRow: any = { id: newId }
      columns.forEach((col) => {
        if (col.componentType === 'Number') newRow[col.key] = 0
        else if (col.componentType === 'Checkbox') newRow[col.key] = false
        else if (col.componentType === 'DatePicker') newRow[col.key] = '08/11/2026'
        else newRow[col.key] = ''
      })
      commitRows([...rows, newRow])
    }
  }

  // Nhân bản dòng
  const handleDuplicateRow = (rowIdx: number) => {
    if (isMasterDetailGrid) {
      duplicateGridRowInStore(node.id, rowIdx)
    } else {
      const target = rows[rowIdx]
      const newId = Math.max(...rows.map((r) => Number(r.id) || 0)) + 1
      const cloned = { ...target, id: newId }
      const updated = [...rows]
      updated.splice(rowIdx + 1, 0, cloned)
      commitRows(updated)
    }
  }

  // Xóa dòng
  const handleDeleteRow = (rowIdx: number) => {
    if (isMasterDetailGrid) {
      deleteGridRowInStore(node.id, rowIdx)
    } else {
      if (rows.length <= 1) {
        if (!confirm('Bạn có chắc muốn xóa dòng cuối cùng này không?')) return
      }
      const updated = rows.filter((_, idx) => idx !== rowIdx)
      commitRows(updated)
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
    const newId = rows.length > 0 ? Math.max(...rows.map((r) => Number(r.id) || 0)) + 1 : 1
    const newRow: any = { id: newId }
    columns.forEach((col) => {
      if (col.componentType === 'Number') newRow[col.key] = 0
      else if (col.componentType === 'Checkbox') newRow[col.key] = false
      else if (col.componentType === 'DatePicker') newRow[col.key] = ''
      else newRow[col.key] = ''
    })
    const updated = [...rows]
    updated.splice(rowIdx + 1, 0, newRow)
    commitRows(updated)
  }

  // Chuyển dòng lên trên
  const handleMoveRowUp = (rowIdx: number) => {
    if (rowIdx <= 0) return
    const updated = [...rows]
    const [moved] = updated.splice(rowIdx, 1)
    updated.splice(rowIdx - 1, 0, moved)
    commitRows(updated)
  }

  // Chuyển dòng xuống dưới
  const handleMoveRowDown = (rowIdx: number) => {
    if (rowIdx >= rows.length - 1) return
    const updated = [...rows]
    const [moved] = updated.splice(rowIdx, 1)
    updated.splice(rowIdx + 1, 0, moved)
    commitRows(updated)
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

  const visibleColumns = columns.filter((col) => !col.hidden)

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
            className={`flex items-center gap-1 h-7 px-2 rounded-md border text-xs font-medium transition-colors ${
              showColumnFilters
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

          {/* Phím tắt F1..F4 chuẩn ERP (Ảnh 4) */}
          <div className="hidden xl:flex items-center gap-1 pl-1 border-l border-slate-800 text-[10px] font-mono text-slate-400">
            <span className="px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400">F1</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400">F2</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400">F3</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800/60 border border-slate-700 cursor-pointer hover:text-emerald-400">F4</span>
          </div>
        </div>
      </div>

      {/* ── NỘI DUNG LƯỚI BẢNG (TABLE CANVAS) ── */}
      <div className="w-full overflow-x-auto select-none relative">
        <table className="w-full text-left text-xs border-collapse">
          {/* THEAD */}
          <thead className="bg-[#0b1329] text-slate-300 font-semibold tracking-wider border-b border-emerald-500/40 uppercase">
            <tr>
              {/* Cột STT + Thao tác ghim cố định ở đầu table (Left: 0, z-30, bg đặc) */}
              <th
                className="px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-30 bg-[#0b1329] border-r border-slate-800/90 shadow-[2px_0_5px_rgba(0,0,0,0.3)]"
                style={{ width: `${STT_COL_WIDTH}px`, minWidth: `${STT_COL_WIDTH}px` }}
              >
                #
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
                    className={`group px-3 py-2.5 cursor-grab active:cursor-grabbing select-none transition-all hover:bg-slate-800/60 ${alignClass} ${
                      isFrozen
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
                      className={`px-1.5 py-1 border-r border-slate-800 ${
                        isFrozen ? `sticky z-20 bg-[#080d1a] ${isLastFrozen ? 'border-r-2 border-emerald-500/60 shadow-[4px_0_12px_rgba(0,0,0,0.6)]' : ''}` : ''
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
                  onContextMenu={(e) => handleRowContextMenu(e, row, rowIdx)}
                  onDoubleClick={() => handleOpenDetailTab(row)}
                  className="hover:bg-slate-800/40 transition-colors group cursor-pointer"
                  title="Nhấp đúp chuột để mở chi tiết; Chuột phải để mở menu tác vụ"
                >
                  {/* Cột STT ghim cố định ở đầu (Left: 0, z-20, bg đặc #0f172a) */}
                  <td
                    className="px-2 py-1 text-center font-mono text-[11px] sticky left-0 z-20 bg-[#0f172a] border-r border-slate-800 shadow-[2px_0_5px_rgba(0,0,0,0.3)] group-hover:bg-slate-800/90 text-slate-400 select-none"
                    style={{ width: `${STT_COL_WIDTH}px`, minWidth: `${STT_COL_WIDTH}px` }}
                    title="Chuột phải để mở menu thao tác: Sao chép dòng, Xóa dòng, Chèn dòng..."
                  >
                    <span>{rowIdx + 1}</span>
                  </td>

                  {/* Render Từng Ô (Mỗi Ô Là Một Interactive Grid Component) */}
                  {visibleColumns.map((col) => {
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

                    const cellError =
                      validationErrors[`${node.id}_${row.id}_${col.key}`] ||
                      (col.key === 'containerNo' ? validationErrors[`${node.id}_${row.id}_containerNo`] : undefined) ||
                      ((col.key === 'etd' || col.key === 'eta') ? validationErrors[`${node.id}_${row.id}_etd_eta`] : undefined)

                    return (
                      <td
                        key={col.key}
                        className={`px-2 py-1 whitespace-nowrap transition-colors ${alignClass} ${
                          isFrozen
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
                          error={cellError}
                          onChange={(newVal) => handleCellChange(row.id ?? rowIdx, col.key, newVal)}
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
          onOpenDetailTab={handleOpenDetailTab}
          onOpenDetailPopup={handleOpenDetailPopup}
        />
      )}
    </div>
  )
}
