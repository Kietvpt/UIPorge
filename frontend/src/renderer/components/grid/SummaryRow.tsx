import React from 'react'
import type { TableColumn } from '@/types/schema'

export interface SummaryRowProps {
  columns: TableColumn[]
  data: any[]
  showRowNumber?: boolean
  rowNumberWidth?: number
  leftOffsets?: Record<string, number>
}

export const SummaryRow: React.FC<SummaryRowProps> = ({
  columns,
  data,
  showRowNumber = true,
  rowNumberWidth = 55,
  leftOffsets = {},
}) => {
  // Kiểm tra xem có bất kỳ cột nào có cấu hình aggregate không
  const hasAnySummary = columns.some((col) => col.aggregate && col.aggregate !== 'none')

  if (!hasAnySummary) return null

  const calculateSummary = (col: TableColumn) => {
    if (!col.aggregate || col.aggregate === 'none') return null

    const values = data
      .map((row) => row[col.key])
      .filter((v) => v !== undefined && v !== null && v !== '')

    if (col.aggregate === 'count') {
      const count = values.length
      return `${col.summaryPrefix || ''}${count}${col.summarySuffix || ' dòng'}`
    }

    // Với sum, avg, min, max: chuyển đổi sang số thực
    const numValues = values
      .map((v) => {
        if (typeof v === 'number') return v
        const parsed = parseFloat(String(v).replace(/,/g, ''))
        return isNaN(parsed) ? 0 : parsed
      })

    if (numValues.length === 0) return '—'

    let result = 0
    if (col.aggregate === 'sum') {
      result = numValues.reduce((acc, curr) => acc + curr, 0)
    } else if (col.aggregate === 'avg') {
      result = numValues.reduce((acc, curr) => acc + curr, 0) / numValues.length
    } else if (col.aggregate === 'min') {
      result = Math.min(...numValues)
    } else if (col.aggregate === 'max') {
      result = Math.max(...numValues)
    }

    const precision = col.precision ?? (col.format === 'number_thousands' ? 0 : 2)
    const formattedNum = precision > 0 
      ? result.toLocaleString('en-US', { minimumFractionDigits: precision, maximumFractionDigits: precision })
      : result.toLocaleString('en-US')

    return `${col.summaryPrefix || ''}${formattedNum}${col.summarySuffix || ''}`
  }

  return (
    <tr className="border-t-2 border-emerald-500/50 bg-slate-900/95 font-bold text-xs text-emerald-400 select-none shadow-inner">
      {/* Cột STT / Checkbox / Edit header */}
      {showRowNumber && (
        <td
          className="px-2 py-2.5 text-center text-slate-400 font-mono text-[11px] sticky left-0 z-20 bg-slate-900 border-r border-slate-800"
          style={{ width: `${rowNumberWidth}px`, minWidth: `${rowNumberWidth}px` }}
        >
          Σ
        </td>
      )}

      {columns
        .filter((col) => !col.hidden)
        .map((col, idx) => {
          const summaryValue = calculateSummary(col)
          const isFirstCol = idx === 0
          const isSticky = col.sticky === 'left' || Boolean((col as any).frozen)
          const leftOffset = isSticky && leftOffsets[col.key] !== undefined ? leftOffsets[col.key] : undefined

          // Canh lề
          const alignClass =
            col.align === 'right'
              ? 'text-right'
              : col.align === 'center'
              ? 'text-center'
              : 'text-left'

          return (
            <td
              key={col.key}
              className={`px-3 py-2.5 border-r border-slate-800/80 whitespace-nowrap ${alignClass} ${
                isSticky ? 'sticky z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]' : ''
              }`}
              style={{
                width: col.width,
                minWidth: col.minWidth || col.width || '100px',
                maxWidth: col.maxWidth,
                left: leftOffset !== undefined ? `${leftOffset}px` : undefined,
              }}
            >
              {isFirstCol && !summaryValue ? (
                <span className="text-[11px] text-slate-300 font-bold uppercase tracking-wider">
                  TỔNG CỘNG:
                </span>
              ) : summaryValue ? (
                <span className="font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  {summaryValue}
                </span>
              ) : (
                '—'
              )}
            </td>
          )
        })}
    </tr>
  )
}
