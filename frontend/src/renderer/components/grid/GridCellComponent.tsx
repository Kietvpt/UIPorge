import React from 'react'
import type { TableColumn } from '@/types/schema'
import { ExternalLink } from 'lucide-react'
import { useDataEngine } from '@/core/engines/dataEngine'
import { EnterpriseDatePicker } from '../common/EnterpriseDatePicker'

export interface GridCellComponentProps {
  column: TableColumn
  value: any
  row: any
  rowIndex: number
  columnIndex?: number
  error?: string
  isFocused?: boolean
  isEditing?: boolean
  isSelected?: boolean
  onChange: (newValue: any) => void
  onActionClick?: (actionName: string, row: any) => void
  onKeyDown?: (e: React.KeyboardEvent, rowIndex: number, columnIndex: number, colKey: string) => void
  onFocus?: (rowIndex: number, columnIndex: number, colKey: string) => void
}

const GridCellComponentBase: React.FC<GridCellComponentProps> = ({
  column,
  value,
  row,
  rowIndex,
  columnIndex = 0,
  error,
  isFocused = false,
  isEditing = false,
  isSelected = false,
  onChange,
  onActionClick,
  onKeyDown,
  onFocus,
}) => {
  // Mặc định mọi cột đều có thể chỉnh sửa trừ khi được đánh dấu editable: false, disabled: true hoặc componentType: 'Label'
  const isEditable = (column.editable ?? true) && !column.disabled && column.componentType !== 'Label'

  // Chuẩn hóa giá trị hiển thị: nếu giá trị là '—' hoặc '-' thì khi nhập liệu để trống cho user gõ trực tiếp
  const displayValue = value === '—' || value === '-' ? '' : (value ?? '')

  // Lớp CSS báo lỗi viền đỏ khi có vi phạm Validation (ISO 6346, Required, Date Sequence) hoặc viền active khi focus
  const focusBorderClass = isFocused
    ? 'border-emerald-400 ring-2 ring-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.3)]'
    : 'border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40'

  const errorBorderClass = error
    ? 'border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50'
    : focusBorderClass

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e, rowIndex, columnIndex, column.key)
    }
  }

  const handleFocus = () => {
    if (onFocus) {
      onFocus(rowIndex, columnIndex, column.key)
    }
  }

  const cellDataProps = {
    'data-grid-cell': `${rowIndex}_${columnIndex}`,
    'data-grid-row': rowIndex,
    'data-grid-col': columnIndex,
    'data-grid-colkey': column.key,
  }

  // ── 1. CHECKBOX COMPONENT ──
  if (column.componentType === 'Checkbox') {
    return (
      <div className="w-full flex items-center justify-center py-1" {...cellDataProps}>
        <input
          type="checkbox"
          checked={Boolean(value)}
          disabled={column.disabled || !isEditable}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onChange(e.target.checked)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          {...cellDataProps}
          className={`w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${isFocused ? 'ring-2 ring-emerald-400' : ''}`}
        />
      </div>
    )
  }

  // ── 2. BUTTON COMPONENT ──
  if (column.componentType === 'Button') {
    const buttonText = column.formatCell || column.title || value || 'Action'
    return (
      <div className="w-full flex items-center justify-center py-0.5" {...cellDataProps}>
        <button
          type="button"
          disabled={column.disabled}
          onClick={(e) => {
            e.stopPropagation()
            if (onActionClick) onActionClick(column.key, row)
          }}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          {...cellDataProps}
          className={`px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20 ${isFocused ? 'ring-2 ring-emerald-400 border-emerald-400' : ''}`}
        >
          {buttonText}
        </button>
      </div>
    )
  }

  // ── 3. LINK COMPONENT ──
  if (column.componentType === 'Link') {
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onActionClick && onActionClick(column.key, row)
        }}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        {...cellDataProps}
        className={`text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate ${isFocused ? 'ring-2 ring-emerald-400/80 rounded px-1' : ''}`}
      >
        <span className="truncate">{value || '—'}</span>
        <ExternalLink className="w-3 h-3 flex-shrink-0" />
      </a>
    )
  }

  // ── 4. NẾU KHÔNG CHO PHÉP SỬA HOẶC LÀ LABEL THUẦN (READONLY CELL) ──
  if (!isEditable) {
    if (column.precision !== undefined && typeof value === 'number') {
      const formatted = column.precision > 0
        ? value.toLocaleString('en-US', { minimumFractionDigits: column.precision, maximumFractionDigits: column.precision })
        : value.toLocaleString('en-US')
      return (
        <span
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          {...cellDataProps}
          className={`font-mono text-slate-200 outline-none rounded px-1 ${isFocused ? 'ring-2 ring-emerald-400/80 bg-emerald-950/30' : 'focus:ring-1 focus:ring-emerald-400/50'}`}
        >
          {formatted}{column.summarySuffix ? ` ${column.summarySuffix}` : ''}
        </span>
      )
    }

    if (column.formatCell && value !== undefined && value !== null) {
      let formatted = column.formatCell.replace('{0}', String(value))
      if (typeof row === 'object' && row !== null) {
        Object.keys(row).forEach((k) => {
          formatted = formatted.replace(new RegExp(`\\{${k}\\}`, 'gi'), String(row[k] ?? ''))
        })
      }
      return (
        <span
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          {...cellDataProps}
          className={`truncate text-slate-200 outline-none rounded px-1 ${isFocused ? 'ring-2 ring-emerald-400/80 bg-emerald-950/30' : 'focus:ring-1 focus:ring-emerald-400/50'}`}
        >
          {formatted}
        </span>
      )
    }

    return (
      <span
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        {...cellDataProps}
        className={`truncate text-slate-200 outline-none rounded px-1 ${isFocused ? 'ring-2 ring-emerald-400/80 bg-emerald-950/30' : 'focus:ring-1 focus:ring-emerald-400/50'}`}
      >
        {value !== undefined && value !== null ? String(value) : '—'}
      </span>
    )
  }

  // ── 5. SELECT / DROPDOWN COMPONENT (EDITABLE) ──
  if (column.componentType === 'Select' || (column.componentType as string) === 'Dropdown') {
    let options = column.options || []
    const refTarget = (column as any).reference || (column as any).refName
    if (options.length === 0 && refTarget) {
      const refDataset = useDataEngine.getState().getDataset(refTarget)
      if (Array.isArray(refDataset) && refDataset.length > 0) {
        const valKey = (column as any).valueField || (column as any).idField || 'code' || 'id'
        const labelKey = (column as any).displayField || (column as any).selectField || 'name' || 'code'
        options = refDataset.map((item: any) => ({
          value: String(item[valKey] ?? item.code ?? item.id ?? ''),
          label: String(item[labelKey] ?? item.name ?? item[valKey] ?? ''),
        }))
      }
    }

    return (
      <select
        value={value ?? ''}
        disabled={column.disabled}
        title={error || undefined}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        {...cellDataProps}
        className={`w-full h-7 px-2 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${errorBorderClass} focus:outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <option value="">— Chọn —</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100">
            {opt.label}
          </option>
        ))}
      </select>
    )
  }

  // ── 6. DATEPICKER COMPONENT (EDITABLE) ──
  if (column.componentType === 'DatePicker' || (column.componentType as string) === 'Datepicker') {
    return (
      <div className="w-full" title={error || undefined} {...cellDataProps}>
        <EnterpriseDatePicker
          isGridCell={true}
          value={displayValue}
          disabled={column.disabled}
          placeholder="DD/MM/YYYY"
          error={error || undefined}
          onChange={(newDate) => onChange(newDate)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
      </div>
    )
  }

  // ── 7. NUMBER COMPONENT (EDITABLE) ──
  if (column.componentType === 'Number') {
    return (
      <input
        type="number"
        value={displayValue}
        placeholder="0"
        disabled={column.disabled}
        title={error || undefined}
        step={column.precision && column.precision > 0 ? Math.pow(10, -column.precision) : 1}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          const raw = e.target.value
          onChange(raw === '' ? '' : Number(raw))
        }}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        {...cellDataProps}
        className={`w-full h-7 px-2.5 py-0.5 text-right font-mono text-xs rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 border ${errorBorderClass} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`}
      />
    )
  }

  // ── 8. TEXTAREA COMPONENT (EDITABLE) ──
  if (column.componentType === 'Textarea') {
    return (
      <textarea
        value={displayValue}
        placeholder={column.title ? `Nhập ${column.title}...` : 'Nhập...'}
        disabled={column.disabled}
        title={error || undefined}
        rows={1}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          const val = column.upperCase ? e.target.value.toUpperCase() : e.target.value
          onChange(val)
        }}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        {...cellDataProps}
        className={`w-full py-1 px-2.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${errorBorderClass} focus:outline-none transition-all resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`}
      />
    )
  }

  // ── 9. TEXTBOX / INPUT MẶC ĐỊNH (EDITABLE) ──
  const alignClass =
    column.align === 'right'
      ? 'text-right'
      : column.align === 'center'
      ? 'text-center'
      : 'text-left'

  return (
    <input
      type="text"
      value={displayValue}
      placeholder={column.title ? `Nhập ${column.title}...` : 'Nhập dữ liệu...'}
      disabled={column.disabled}
      title={error || undefined}
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => {
        const val = column.upperCase ? e.target.value.toUpperCase() : e.target.value
        onChange(val)
      }}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      {...cellDataProps}
      className={`w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${errorBorderClass} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${alignClass} ${column.cssClass || ''}`}
    />
  )
}

/**
 * ⚡ Tối ưu hóa hiệu năng render runtime cho GridCell (TSK-3.5):
 * Chỉ re-render ô khi giá trị, trạng thái focus/editing/selection, cấu hình cột
 * hoặc các trường trong row được tham chiếu bởi formatCell thay đổi.
 * Đạt chuẩn 60fps mượt mà cho bảng 1.000+ dòng.
 */
export function areGridCellPropsEqual(
  prevProps: Readonly<GridCellComponentProps>,
  nextProps: Readonly<GridCellComponentProps>
): boolean {
  // 1. Kiểm tra giá trị cell
  if (prevProps.value !== nextProps.value) return false

  // 2. Kiểm tra thông báo lỗi validation
  if (prevProps.error !== nextProps.error) return false

  // 3. Kiểm tra tọa độ hàng & cột
  if (prevProps.rowIndex !== nextProps.rowIndex || prevProps.columnIndex !== nextProps.columnIndex) {
    return false
  }

  // 4. Kiểm tra trạng thái focus, editing, selection
  if (
    Boolean(prevProps.isFocused) !== Boolean(nextProps.isFocused) ||
    Boolean(prevProps.isEditing) !== Boolean(nextProps.isEditing) ||
    Boolean(prevProps.isSelected) !== Boolean(nextProps.isSelected)
  ) {
    return false
  }

  // 5. So sánh cấu hình cột (Column Metadata)
  const prevCol = prevProps.column
  const nextCol = nextProps.column
  if (prevCol !== nextCol) {
    if (
      prevCol.key !== nextCol.key ||
      prevCol.title !== nextCol.title ||
      prevCol.componentType !== nextCol.componentType ||
      prevCol.editable !== nextCol.editable ||
      prevCol.disabled !== nextCol.disabled ||
      prevCol.precision !== nextCol.precision ||
      prevCol.align !== nextCol.align ||
      prevCol.formatCell !== nextCol.formatCell ||
      prevCol.cssClass !== nextCol.cssClass ||
      prevCol.summarySuffix !== nextCol.summarySuffix ||
      prevCol.upperCase !== nextCol.upperCase ||
      prevCol.options !== nextCol.options ||
      (prevCol as any).reference !== (nextCol as any).reference ||
      (prevCol as any).refName !== (nextCol as any).refName
    ) {
      return false
    }
  }

  // 6. Kiểm tra danh tính dòng (Row Identity)
  const prevId = prevProps.row?.id ?? prevProps.row?.Id ?? prevProps.row?.ID
  const nextId = nextProps.row?.id ?? nextProps.row?.Id ?? nextProps.row?.ID
  if (prevId !== undefined && nextId !== undefined && prevId !== nextId) {
    return false
  }

  // 7. Kiểm tra các trường dữ liệu dòng liên đới khi cột có formatCell (ví dụ: "{0} ({Code})")
  if (nextCol.formatCell && typeof nextCol.formatCell === 'string') {
    const tokens = nextCol.formatCell.match(/\{([a-zA-Z0-9_]+)\}/g)
    if (tokens) {
      for (const token of tokens) {
        const fieldName = token.slice(1, -1)
        if (fieldName === '0') continue
        if (prevProps.row?.[fieldName] !== nextProps.row?.[fieldName]) {
          return false
        }
      }
    }
  }

  // 8. Đối với Button hoặc Link (truyền cả row vào action handler), nếu row object thay đổi thì re-render
  if (nextCol.componentType === 'Button' || nextCol.componentType === 'Link') {
    if (prevProps.row !== nextProps.row) {
      return false
    }
  }

  return true
}

export const GridCellComponent = React.memo(GridCellComponentBase, areGridCellPropsEqual)
