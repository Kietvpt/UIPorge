import React from 'react'
import type { TableColumn } from '@/types/schema'
import { Calendar, ExternalLink } from 'lucide-react'
import { useDataEngine } from '@/core/engines/dataEngine'

export interface GridCellComponentProps {
  column: TableColumn
  value: any
  row: any
  rowIndex: number
  columnIndex?: number
  error?: string
  onChange: (newValue: any) => void
  onActionClick?: (actionName: string, row: any) => void
  onKeyDown?: (e: React.KeyboardEvent, rowIndex: number, columnIndex: number, colKey: string) => void
  onFocus?: (rowIndex: number, columnIndex: number, colKey: string) => void
}

export const GridCellComponent: React.FC<GridCellComponentProps> = ({
  column,
  value,
  row,
  rowIndex,
  columnIndex = 0,
  error,
  onChange,
  onActionClick,
  onKeyDown,
  onFocus,
}) => {
  // Mặc định mọi cột đều có thể chỉnh sửa trừ khi được đánh dấu editable: false, disabled: true hoặc componentType: 'Label'
  const isEditable = (column.editable ?? true) && !column.disabled && column.componentType !== 'Label'

  // Chuẩn hóa giá trị hiển thị: nếu giá trị là '—' hoặc '-' thì khi nhập liệu để trống cho user gõ trực tiếp
  const displayValue = value === '—' || value === '-' ? '' : (value ?? '')

  // Lớp CSS báo lỗi viền đỏ khi có vi phạm Validation (ISO 6346, Required, Date Sequence)
  const errorBorderClass = error
    ? 'border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50'
    : 'border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40'

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
          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
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
          className="px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 hover:text-white border border-blue-500/40 text-[11px] font-semibold transition-colors disabled:opacity-50 cursor-pointer shadow-sm hover:shadow-blue-500/20"
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
        className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium truncate"
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
          className="font-mono text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1"
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
          className="truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1"
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
        className="truncate text-slate-200 outline-none focus:ring-1 focus:ring-emerald-400/50 rounded px-1"
      >
        {value !== undefined && value !== null ? String(value) : '—'}
      </span>
    )
  }

  // ── 5. SELECT / DROPDOWN COMPONENT (EDITABLE) ──
  if (column.componentType === 'Select' || (column.componentType as string) === 'Dropdown') {
    // 100% Generic & Domain-Agnostic:
    // 1. Ưu tiên options được cấu hình trong Column Metadata (column.options)
    // 2. Tra cứu động từ DataEngine nếu cột có cấu hình reference (dataset liên kết)
    let options = column.options || []
    if (options.length === 0 && (column as any).reference) {
      const refDataset = useDataEngine.getState().getDataset((column as any).reference)
      if (Array.isArray(refDataset) && refDataset.length > 0) {
        const valKey = (column as any).valueField || 'code' || 'id'
        const labelKey = (column as any).displayField || 'name' || 'code'
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
      <div className="relative flex items-center w-full" title={error || undefined} {...cellDataProps}>
        <input
          type="text"
          value={displayValue}
          placeholder="DD/MM/YYYY"
          disabled={column.disabled}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          {...cellDataProps}
          className={`w-full h-7 pl-2.5 pr-7 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${errorBorderClass} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed`}
        />
        <Calendar className="w-3.5 h-3.5 text-emerald-400 absolute right-2 pointer-events-none" />
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
