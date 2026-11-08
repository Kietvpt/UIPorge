import React, { useState, useEffect, useRef } from 'react'
import type { TableColumn } from '@/types/schema'

export interface InlineCellEditorProps {
  value: any
  column: TableColumn
  onSave: (val: any) => void
  onCancel: () => void
}

export const InlineCellEditor: React.FC<InlineCellEditorProps> = ({
  value,
  column,
  onSave,
  onCancel,
}) => {
  const [val, setVal] = useState<any>(value ?? '')
  const inputRef = useRef<any>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      if (inputRef.current.select) {
        inputRef.current.select()
      }
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSave(val)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onCancel()
    }
  }

  const handleBlur = () => {
    onSave(val)
  }

  // Render theo loại component
  if (column.componentType === 'Select' && column.options && column.options.length > 0) {
    return (
      <select
        ref={inputRef}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className="w-full h-7 px-1.5 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
      >
        {column.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  }

  if (column.componentType === 'DatePicker') {
    return (
      <input
        ref={inputRef}
        type="text"
        value={val}
        placeholder="DD/MM/YYYY"
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className="w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 font-mono text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
      />
    )
  }

  if (column.componentType === 'Number') {
    return (
      <input
        ref={inputRef}
        type="number"
        value={val}
        step={column.precision && column.precision > 0 ? Math.pow(10, -column.precision) : 1}
        onChange={(e) => setVal(e.target.value === '' ? '' : Number(e.target.value))}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className="w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 font-mono text-xs text-right border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
      />
    )
  }

  return (
    <input
      ref={inputRef}
      type="text"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      className="w-full h-7 px-2 py-0.5 rounded bg-slate-800 text-slate-100 text-xs border border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
    />
  )
}
