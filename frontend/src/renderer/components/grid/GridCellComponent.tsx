import React from 'react'
import type { TableColumn } from '@/types/schema'
import { Calendar, ExternalLink } from 'lucide-react'

export interface GridCellComponentProps {
  column: TableColumn
  value: any
  row: any
  rowIndex: number
  error?: string
  onChange: (newValue: any) => void
  onActionClick?: (actionName: string, row: any) => void
}

export const GridCellComponent: React.FC<GridCellComponentProps> = ({
  column,
  value,
  row,
  rowIndex,
  error,
  onChange,
  onActionClick,
}) => {
  // Mặc định mọi cột đều có thể chỉnh sửa trừ khi được đánh dấu editable: false, disabled: true hoặc componentType: 'Label'
  const isEditable = (column.editable ?? true) && !column.disabled && column.componentType !== 'Label'

  // Chuẩn hóa giá trị hiển thị: nếu giá trị là '—' hoặc '-' thì khi nhập liệu để trống cho user gõ trực tiếp
  const displayValue = value === '—' || value === '-' ? '' : (value ?? '')

  // Lớp CSS báo lỗi viền đỏ khi có vi phạm Validation (ISO 6346, Required, Date Sequence)
  const errorBorderClass = error
    ? 'border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70 focus:border-red-400 focus:ring-red-400 placeholder:text-red-400/50'
    : 'border-slate-700/70 hover:border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40'

  // ── 1. CHECKBOX COMPONENT ──
  if (column.componentType === 'Checkbox') {
    return (
      <div className="w-full flex items-center justify-center py-1">
        <input
          type="checkbox"
          checked={Boolean(value)}
          disabled={column.disabled || !isEditable}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    )
  }

  // ── 2. BUTTON COMPONENT ──
  if (column.componentType === 'Button') {
    const buttonText = column.formatCell || column.title || value || 'Action'
    return (
      <div className="w-full flex items-center justify-center py-0.5">
        <button
          type="button"
          disabled={column.disabled}
          onClick={(e) => {
            e.stopPropagation()
            if (onActionClick) onActionClick(column.key, row)
          }}
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
        <span className="font-mono text-slate-200">
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
      return <span className="truncate text-slate-200">{formatted}</span>
    }

    return <span className="truncate text-slate-200">{value !== undefined && value !== null ? String(value) : '—'}</span>
  }

  // ── 5. SELECT / DROPDOWN COMPONENT (EDITABLE) ──
  if (column.componentType === 'Select' || (column.componentType as string) === 'Dropdown') {
    // Tùy biến options theo từng trường nếu chưa có
    let options = column.options || []
    if (options.length === 0) {
      if (column.key === 'packageType') {
        options = [
          { value: 'PALLETS', label: 'PALLETS' },
          { value: 'CARTONS', label: 'CARTONS' },
          { value: 'BAGS', label: 'BAGS' },
          { value: 'BOXES', label: 'BOXES' },
        ]
      } else if (column.key === 'size') {
        options = [
          { value: '20GP', label: '20GP' },
          { value: '40GP', label: '40GP' },
          { value: '40HC', label: '40HC' },
          { value: '45HC', label: '45HC' },
        ]
      } else if (column.key === 'shipmentType') {
        options = [
          { value: 'NOMINATED', label: 'NOMINATED' },
          { value: 'FREEHAND', label: 'FREEHAND' },
        ]
      } else if (column.key === 'pod') {
        options = [
          { value: 'VNSGN', label: 'HO CHI MINH / VNSGN' },
          { value: 'VNDAD', label: 'DA NANG / VNDAD' },
          { value: 'VNHPH', label: 'HAI PHONG / VNHPH' },
          { value: 'SGSIN', label: 'SINGAPORE / SGSIN' },
          { value: 'KRPUS', label: 'BUSAN / KRPUS' },
          { value: 'CNSGH', label: 'SHANGHAI / CNSGH' },
        ]
      } else if (column.key === 'pol') {
        options = [
          { value: 'CNSGH', label: 'SHANGHAI / CNSGH' },
          { value: 'KRPUS', label: 'BUSAN / KRPUS' },
          { value: 'SGSIN', label: 'SINGAPORE / SGSIN' },
          { value: 'VNSGN', label: 'HO CHI MINH / VNSGN' },
          { value: 'VNDAD', label: 'DA NANG / VNDAD' },
          { value: 'VNHPH', label: 'HAI PHONG / VNHPH' },
        ]
      }
    }

    return (
      <select
        value={value ?? ''}
        disabled={column.disabled}
        title={error || undefined}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => onChange(e.target.value)}
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
      <div className="relative flex items-center w-full" title={error || undefined}>
        <input
          type="text"
          value={displayValue}
          placeholder="DD/MM/YYYY"
          disabled={column.disabled}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onChange(e.target.value)}
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
      className={`w-full h-7 px-2.5 py-0.5 rounded bg-slate-900/70 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 text-xs border ${errorBorderClass} focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${alignClass} ${column.cssClass || ''}`}
    />
  )
}
