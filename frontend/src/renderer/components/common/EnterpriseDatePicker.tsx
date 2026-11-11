import React, { useState, useEffect, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Clock, Check } from 'lucide-react'

export interface EnterpriseDatePickerProps {
  value?: string | null
  onChange: (val: string) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  className?: string
  inputClassName?: string
  format?: string // Default 'DD/MM/YYYY'
  error?: string
  title?: string
  tabIndex?: number
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  autoFocus?: boolean
  /** Compact mode for tight grid cells */
  isGridCell?: boolean
}

// ── UTILITIES: PARSE & FORMAT NGÀY THÁNG CHUẨN ERP (DD/MM/YYYY) ──
export function parseDateString(val?: string | null): { year: number; month: number; day: number } | null {
  if (!val || typeof val !== 'string' || !val.trim()) return null

  const s = val.trim()

  // 1. Khớp định dạng DD/MM/YYYY hoặc DD-MM-YYYY
  const dmyMatch = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/)
  if (dmyMatch) {
    const day = parseInt(dmyMatch[1], 10)
    const month = parseInt(dmyMatch[2], 10) - 1
    const year = parseInt(dmyMatch[3], 10)
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      return { year, month, day }
    }
  }

  // 2. Khớp định dạng ISO YYYY-MM-DD
  const isoMatch = s.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/)
  if (isoMatch) {
    const year = parseInt(isoMatch[1], 10)
    const month = parseInt(isoMatch[2], 10) - 1
    const day = parseInt(isoMatch[3], 10)
    if (month >= 0 && month <= 11 && day >= 1 && day <= 31) {
      return { year, month, day }
    }
  }

  // 3. Fallback sang Date.parse
  const d = new Date(val)
  if (!isNaN(d.getTime())) {
    return { year: d.getFullYear(), month: d.getMonth(), day: d.getDate() }
  }

  return null
}

export function formatDateString(year: number, month: number, day: number): string {
  const dd = String(day).padStart(2, '0')
  const mm = String(month + 1).padStart(2, '0')
  return `${dd}/${mm}/${year}`
}

const MONTH_NAMES = [
  'Tháng 01', 'Tháng 02', 'Tháng 03', 'Tháng 04',
  'Tháng 05', 'Tháng 06', 'Tháng 07', 'Tháng 08',
  'Tháng 09', 'Tháng 10', 'Tháng 11', 'Tháng 12',
]

const WEEKDAY_NAMES = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

export const EnterpriseDatePicker: React.FC<EnterpriseDatePickerProps> = ({
  value,
  onChange,
  placeholder = 'DD/MM/YYYY',
  disabled = false,
  readOnly = false,
  className = '',
  inputClassName = '',
  error,
  title,
  tabIndex,
  onKeyDown,
  onFocus,
  onBlur,
  autoFocus = false,
  isGridCell = false,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [inputText, setInputText] = useState(() => {
    const parsed = parseDateString(value)
    return parsed ? formatDateString(parsed.year, parsed.month, parsed.day) : (value || '')
  })

  // Ngày được chọn thực tế
  const selectedDate = useMemo(() => parseDateString(value), [value])

  // Trạng thái tháng/năm đang xem trên lịch
  const today = useMemo(() => {
    const n = new Date()
    return { year: n.getFullYear(), month: n.getMonth(), day: n.getDate() }
  }, [])

  const [viewYear, setViewYear] = useState<number>(selectedDate?.year || today.year)
  const [viewMonth, setViewMonth] = useState<number>(selectedDate?.month ?? today.month)

  // Tọa độ vị trí hiển thị Popover
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number; openUpwards: boolean }>({
    top: 0,
    left: 0,
    openUpwards: false,
  })

  // Đồng bộ text trong input khi prop value thay đổi
  useEffect(() => {
    const parsed = parseDateString(value)
    if (parsed) {
      setInputText(formatDateString(parsed.year, parsed.month, parsed.day))
      setViewYear(parsed.year)
      setViewMonth(parsed.month)
    } else {
      setInputText(value || '')
    }
  }, [value])

  // Tính toán vị trí khi mở popup
  const updatePosition = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const popoverHeight = 310
    const popoverWidth = 280

    const spaceBelow = window.innerHeight - rect.bottom
    const openUpwards = spaceBelow < popoverHeight && rect.top > popoverHeight

    let top = openUpwards ? rect.top - popoverHeight - 4 : rect.bottom + 4
    let left = rect.left

    // Chống tràn màn hình bên phải
    if (left + popoverWidth > window.innerWidth - 10) {
      left = Math.max(10, window.innerWidth - popoverWidth - 10)
    }

    setPopoverPos({ top, left, openUpwards })
  }

  const handleOpen = () => {
    if (disabled || readOnly) return
    updatePosition()
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  // Đóng khi click ra ngoài hoặc cuộn
  useEffect(() => {
    if (!isOpen) return

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        popoverRef.current &&
        !popoverRef.current.contains(target)
      ) {
        handleClose()
      }
    }

    const handleScrollOrResize = () => {
      if (isOpen) updatePosition()
    }

    document.addEventListener('mousedown', handleOutsideClick, true)
    window.addEventListener('resize', handleScrollOrResize, true)
    window.addEventListener('scroll', handleScrollOrResize, true)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick, true)
      window.removeEventListener('resize', handleScrollOrResize, true)
      window.removeEventListener('scroll', handleScrollOrResize, true)
    }
  }, [isOpen])

  // Xử lý chuyển tháng
  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  // Chọn một ngày cụ thể
  const handleSelectDay = (day: number, monthOffset: number = 0) => {
    let targetYear = viewYear
    let targetMonth = viewMonth + monthOffset

    if (targetMonth < 0) {
      targetMonth = 11
      targetYear -= 1
    } else if (targetMonth > 11) {
      targetMonth = 0
      targetYear += 1
    }

    const formatted = formatDateString(targetYear, targetMonth, day)
    setInputText(formatted)
    onChange(formatted)
    handleClose()
    inputRef.current?.focus()
  }

  // Nút chọn "Hôm nay"
  const handleSelectToday = (e: React.MouseEvent) => {
    e.stopPropagation()
    const formatted = formatDateString(today.year, today.month, today.day)
    setInputText(formatted)
    setViewYear(today.year)
    setViewMonth(today.month)
    onChange(formatted)
    handleClose()
    inputRef.current?.focus()
  }

  // Nút xóa giá trị
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setInputText('')
    onChange('')
    handleClose()
    inputRef.current?.focus()
  }

  // Xử lý gõ phím trực tiếp vào ô input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setInputText(text)

    const parsed = parseDateString(text)
    if (parsed) {
      const formatted = formatDateString(parsed.year, parsed.month, parsed.day)
      onChange(formatted)
      setViewYear(parsed.year)
      setViewMonth(parsed.month)
    } else if (text === '') {
      onChange('')
    }
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      if (isOpen) {
        e.stopPropagation()
        handleClose()
      }
    } else if (e.key === 'Enter') {
      const parsed = parseDateString(inputText)
      if (parsed) {
        const formatted = formatDateString(parsed.year, parsed.month, parsed.day)
        setInputText(formatted)
        onChange(formatted)
      }
      if (isOpen) handleClose()
    } else if (e.key === 'F4' || (e.altKey && e.key === 'ArrowDown')) {
      e.preventDefault()
      e.stopPropagation()
      if (isOpen) handleClose()
      else handleOpen()
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  // Sinh ma trận các ngày trong tháng (bắt đầu từ Thứ Hai)
  const calendarDays = useMemo(() => {
    const firstDayOfWeek = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7
    const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate()

    const cells: { day: number; monthOffset: number; isCurrentMonth: boolean }[] = []

    // Các ngày của tháng trước
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      cells.push({
        day: daysInPrevMonth - i,
        monthOffset: -1,
        isCurrentMonth: false,
      })
    }

    // Các ngày của tháng hiện tại
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      cells.push({
        day,
        monthOffset: 0,
        isCurrentMonth: true,
      })
    }

    // Các ngày của tháng sau để đủ 35 hoặc 42 ô
    const totalCells = cells.length <= 35 ? 35 : 42
    const remaining = totalCells - cells.length
    for (let day = 1; day <= remaining; day++) {
      cells.push({
        day,
        monthOffset: 1,
        isCurrentMonth: false,
      })
    }

    return cells
  }, [viewYear, viewMonth])

  // Render Popover lịch qua React Portal
  const renderCalendarPortal = () => {
    if (!isOpen) return null

    return createPortal(
      <div
        ref={popoverRef}
        style={{
          position: 'fixed',
          top: `${popoverPos.top}px`,
          left: `${popoverPos.left}px`,
          zIndex: 99999,
          width: '280px',
        }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-3 text-slate-100 text-xs animate-in fade-in zoom-in-95 duration-100 select-none backdrop-blur-md"
      >
        {/* Header: Chọn Tháng & Năm */}
        <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800">
          <button
            type="button"
            onClick={handlePrevMonth}
            title="Tháng trước"
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 font-bold">
            <select
              value={viewMonth}
              onChange={(e) => setViewMonth(parseInt(e.target.value, 10))}
              className="bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500"
            >
              {MONTH_NAMES.map((name, idx) => (
                <option key={idx} value={idx}>
                  {name}
                </option>
              ))}
            </select>

            <select
              value={viewYear}
              onChange={(e) => setViewYear(parseInt(e.target.value, 10))}
              className="bg-slate-800/80 border border-slate-700/80 rounded px-1.5 py-0.5 text-xs text-slate-200 cursor-pointer focus:outline-none focus:border-emerald-500 font-mono"
            >
              {Array.from({ length: 41 }, (_, i) => viewYear - 20 + i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleNextMonth}
            title="Tháng sau"
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Thứ trong tuần */}
        <div className="grid grid-cols-7 gap-1 text-center font-semibold text-[11px] text-slate-400 mb-1">
          {WEEKDAY_NAMES.map((w, idx) => (
            <div key={idx} className={idx >= 5 ? 'text-amber-400/80' : ''}>
              {w}
            </div>
          ))}
        </div>

        {/* Lưới ngày */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {calendarDays.map((cell, idx) => {
            const isSelected =
              selectedDate &&
              cell.isCurrentMonth &&
              selectedDate.year === viewYear &&
              selectedDate.month === viewMonth &&
              selectedDate.day === cell.day

            const isToday =
              cell.isCurrentMonth &&
              today.year === viewYear &&
              today.month === viewMonth &&
              today.day === cell.day

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectDay(cell.day, cell.monthOffset)}
                className={`h-7 w-7 mx-auto flex items-center justify-center rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20 scale-105'
                    : isToday
                    ? 'border border-emerald-400 text-emerald-300 font-bold bg-emerald-500/10 hover:bg-emerald-500/20'
                    : cell.isCurrentMonth
                    ? 'text-slate-200 hover:bg-slate-800 hover:text-white'
                    : 'text-slate-600 hover:bg-slate-800/40'
                }`}
              >
                {cell.day}
              </button>
            )
          })}
        </div>

        {/* Footer: Hôm nay & Xóa */}
        <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-800 text-[11px]">
          <button
            type="button"
            onClick={handleSelectToday}
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors cursor-pointer"
          >
            <Clock className="w-3 h-3" />
            <span>Hôm nay</span>
          </button>

          {inputText && (
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center gap-1 text-rose-400 hover:text-rose-300 font-medium px-2 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
              <span>Xóa</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-200 px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>,
      document.body
    )
  }

  // Kiểu dáng ô bảng GridView (nhỏ gọn h-7) vs Ô form FormField (h-8)
  const baseWrapperClass = isGridCell
    ? 'relative flex items-center w-full h-7'
    : 'relative flex items-center w-full'

  const baseInputClass = isGridCell
    ? `w-full h-7 pl-2 pr-6 py-0.5 rounded bg-slate-900/80 hover:bg-slate-900 focus:bg-slate-950 text-slate-100 font-mono text-xs border ${
        error
          ? 'border-red-500/90 text-red-200'
          : 'border-slate-700/80 focus:border-emerald-500'
      } focus:outline-none transition-all placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed ${inputClassName}`
    : `w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${
        error
          ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
          : 'border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
      } ${inputClassName}`

  return (
    <div ref={triggerRef} className={`${baseWrapperClass} ${className}`}>
      <input
        ref={inputRef}
        type="text"
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        title={error || title}
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={(e) => {
          e.stopPropagation()
          if (!isOpen) handleOpen()
        }}
        className={baseInputClass}
      />

      <button
        type="button"
        tabIndex={-1}
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation()
          if (isOpen) handleClose()
          else handleOpen()
        }}
        className={`absolute right-1.5 p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <CalendarIcon className="w-3.5 h-3.5" />
      </button>

      {renderCalendarPortal()}
    </div>
  )
}

