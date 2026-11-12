import React, { useState, useRef, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Search, X, Check, Loader2, Plus, Save } from 'lucide-react'
import type { DropdownColumnConfig, SelectOption } from '@/types/schema'
import { useDataEngine } from '@/core/engines/dataEngine'
import { interpolateFormatData, lookupFieldValue } from '@/core/utils/formatDataInterpolator'
import { openPopup } from '@/core/engines/navigationEngine'

export interface EnterpriseSelectProps {
  value?: any
  onChange: (value: any, selectedItem?: any) => void
  options?: SelectOption[]
  items?: Record<string, any>[]
  reference?: string
  refClass?: string
  canQuickAdd?: boolean
  dataSource?: string
  idField?: string
  selectField?: string
  dropdownColumns?: DropdownColumnConfig[]
  formatData?: string
  populateField?: string
  formId?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  isGridCell?: boolean
  error?: string
  className?: string
  onKeyDown?: (e: React.KeyboardEvent) => void
  onFocus?: () => void
  onBlur?: () => void
  onQuickAdd?: () => void
}

export const EnterpriseSelect: React.FC<EnterpriseSelectProps> = ({
  value,
  onChange,
  options,
  items: directItems,
  reference,
  refClass,
  canQuickAdd = true,
  dataSource,
  idField = 'id',
  selectField = 'name',
  dropdownColumns,
  formatData,
  populateField,
  formId,
  placeholder = '— Chọn —',
  disabled = false,
  readOnly = false,
  isGridCell = false,
  error,
  className = '',
  onKeyDown,
  onFocus,
  onBlur,
  onQuickAdd,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [rawRecords, setRawRecords] = useState<Record<string, any>[]>([])

  // ── QUICK ADD MODAL STATES ──
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false)
  const [quickAddCode, setQuickAddCode] = useState('')
  const [quickAddName, setQuickAddName] = useState('')
  const [quickAddDescription, setQuickAddDescription] = useState('')
  const [isSubmittingQuickAdd, setIsSubmittingQuickAdd] = useState(false)

  const triggerRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const queryEntity = useDataEngine((s) => s.queryEntity)
  const getDataset = useDataEngine((s) => s.getDataset)
  const applyPopulate = useDataEngine((s) => s.applyPopulate)
  const datasetLen = useDataEngine((s) => (reference ? s.getDataset(reference).length : 0))

  // ── MỞ DIALOG HOẶC POPUP TẠO NHANH BẢN GHI (RefClass / Quick Add) ──
  const handleOpenQuickAdd = () => {
    if (onQuickAdd) {
      onQuickAdd()
      setIsOpen(false)
      return
    }
    if (refClass) {
      openPopup(refClass, {}, `Tạo mới ${reference || refClass}`)
      setIsOpen(false)
      return
    }
    const cleanSearch = searchTerm.trim()
    setQuickAddCode(cleanSearch ? cleanSearch.toUpperCase().replace(/\s+/g, '_') : '')
    setQuickAddName(cleanSearch)
    setQuickAddDescription('')
    setIsQuickAddOpen(true)
  }

  // ── LƯU BẢN GHI MỚI VÀ CHỌN NGAY VÀO SELECT ──
  const handleSaveQuickAdd = async () => {
    if (!quickAddCode.trim() || !quickAddName.trim()) return
    const cleanRef = (reference || '').trim()
    if (!cleanRef) return

    setIsSubmittingQuickAdd(true)
    try {
      const payload: Record<string, any> = {
        code: quickAddCode.trim(),
        name: quickAddName.trim(),
        fullName: quickAddName.trim(),
        description: quickAddDescription.trim(),
        active: true,
      }

      const res = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(cleanRef)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        const createdItem = await res.json()
        const newRecord = {
          ...payload,
          ...createdItem,
          id: createdItem.id ?? createdItem.Id ?? Date.now(),
        }

        // Tải lại dataset từ API và cập nhật local state
        const freshData = await queryEntity(cleanRef, dataSource)
        if (Array.isArray(freshData) && freshData.length > 0) {
          setRawRecords(freshData)
        } else {
          setRawRecords((prev) => [newRecord, ...prev])
        }

        // Chọn ngay bản ghi vừa tạo
        handleSelectRecord(newRecord)
        setIsQuickAddOpen(false)
        setIsOpen(false)
      } else {
        alert('Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.')
      }
    } catch (err) {
      console.error('[EnterpriseSelect] Lỗi tạo nhanh bản ghi:', err)
      // Fallback lưu local nếu offline
      const newRecord = {
        id: `mock-${Date.now()}`,
        code: quickAddCode.trim(),
        name: quickAddName.trim(),
        fullName: quickAddName.trim(),
        description: quickAddDescription.trim(),
        active: true,
      }
      setRawRecords((prev) => [newRecord, ...prev])
      handleSelectRecord(newRecord)
      setIsQuickAddOpen(false)
      setIsOpen(false)
    } finally {
      setIsSubmittingQuickAdd(false)
    }
  }

  // ── 1. TẢI DỮ LIỆU ĐỘNG TỪ REFERENCE / DATAENGINE ──
  useEffect(() => {
    let isMounted = true
    const cleanRef = (reference || '').trim()

    if (directItems && Array.isArray(directItems) && directItems.length > 0) {
      setRawRecords(directItems)
      return
    }

    // Ưu tiên Reference (truy vấn DB/API động) hơn options tĩnh mẫu
    if (cleanRef) {
      setIsLoading(true)
      queryEntity(cleanRef, dataSource)
        .then((data) => {
          if (isMounted) {
            if (Array.isArray(data) && data.length > 0) {
              setRawRecords(data)
            } else {
              setRawRecords([])
            }
          }
        })
        .catch(() => {
          if (isMounted) {
            const local = getDataset(cleanRef)
            setRawRecords(Array.isArray(local) ? local : [])
          }
        })
        .finally(() => {
          if (isMounted) setIsLoading(false)
        })
    } else if (options && Array.isArray(options) && options.length > 0) {
      const converted = options.map((opt) => {
        if (opt.rawItem && typeof opt.rawItem === 'object') return opt.rawItem
        return {
          [idField]: opt.value,
          [selectField]: opt.label,
          id: opt.value,
          name: opt.label,
          fullName: opt.label,
        }
      })
      setRawRecords(converted)
    } else {
      setRawRecords([])
    }

    return () => {
      isMounted = false
    }
  }, [reference, dataSource, directItems, options, idField, selectField, queryEntity, getDataset, datasetLen])

  // ── 2. XÁC ĐỊNH DANH SÁCH CỘT HIỂN THỊ TRONG DROPDOWN (COLUMNS) ──
  const effectiveColumns: DropdownColumnConfig[] = useMemo(() => {
    if (dropdownColumns && dropdownColumns.length > 0) {
      return dropdownColumns
    }

    // Nếu chưa cấu hình, tự động suy luận từ dữ liệu
    if (rawRecords.length > 0) {
      const sample = rawRecords[0]
      const keys = Object.keys(sample)

      // Các trường ưu tiên thường gặp
      const priorityKeys = [
        'code', 'id', 'name', 'fullName', 'title',
        'address', 'taxCode', 'phone', 'email', 'status',
        'shortName', 'portCode', 'portName', 'carrierName'
      ]

      const matchedPriority = priorityKeys.filter((pk) =>
        keys.some((k) => k.toLowerCase() === pk.toLowerCase())
      )

      if (matchedPriority.length > 0) {
        return matchedPriority.slice(0, 3).map((k) => {
          const exactKey = keys.find((key) => key.toLowerCase() === k.toLowerCase()) || k
          return {
            key: exactKey,
            title: exactKey.charAt(0).toUpperCase() + exactKey.slice(1),
            width: exactKey.toLowerCase().includes('name') ? '60%' : '40%',
            align: 'left' as const,
          }
        })
      }

      // Lấy 2 keys đầu tiên không phải object/mảng
      const simpleKeys = keys.filter(
        (k) => typeof sample[k] !== 'object' && !k.startsWith('_')
      ).slice(0, 2)

      if (simpleKeys.length > 0) {
        return simpleKeys.map((k) => ({
          key: k,
          title: k.charAt(0).toUpperCase() + k.slice(1),
          width: '50%',
          align: 'left' as const,
        }))
      }
    }

    // Mặc định fallback
    return [
      { key: idField, title: 'Mã', width: '35%', align: 'left' },
      { key: selectField, title: 'Tên', width: '65%', align: 'left' },
    ]
  }, [dropdownColumns, rawRecords, idField, selectField])

  // ── 3. TÌM BẢN GHI ĐƯỢC CHỌN HIỆN TẠI ĐỂ HIỂN THỊ TEXT ──
  const selectedRecord = useMemo(() => {
    if (value === undefined || value === null || value === '') return null
    return (
      rawRecords.find((item) => {
        const itemVal = lookupFieldValue(item, idField) ?? item.id ?? item.Id ?? item.code ?? item.Code
        return itemVal !== undefined && String(itemVal) === String(value)
      }) || null
    )
  }, [value, rawRecords, idField])

  // Chuỗi text hiển thị trong ô trigger
  const displayText = useMemo(() => {
    if (selectedRecord) {
      return interpolateFormatData(formatData, selectedRecord, String(value ?? ''))
    }
    if (value !== undefined && value !== null && value !== '') {
      return String(value)
    }
    return ''
  }, [selectedRecord, formatData, value])

  // ── 4. TỌA ĐỘ VÀ POPUP PORTAL POSITIONING ──
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number; width: number; openUpwards: boolean }>({
    top: 0,
    left: 0,
    width: 320,
    openUpwards: false,
  })

  const updatePosition = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const popoverHeight = 300
    const minPopoverWidth = 360
    const width = Math.max(rect.width, minPopoverWidth)

    const spaceBelow = window.innerHeight - rect.bottom
    const openUpwards = spaceBelow < popoverHeight && rect.top > popoverHeight

    let top = openUpwards ? rect.top - popoverHeight - 4 : rect.bottom + 4
    let left = rect.left

    // Chống tràn màn hình bên phải
    if (left + width > window.innerWidth - 12) {
      left = Math.max(12, window.innerWidth - width - 12)
    }

    setPopoverPos({ top, left, width, openUpwards })
  }

  const handleOpen = () => {
    if (disabled || readOnly) return
    updatePosition()
    setIsOpen(true)
    setSearchTerm('')
    setActiveIndex(0)
  }

  // Tự động focus vào ô tìm kiếm khi mở popover
  useEffect(() => {
    if (isOpen) {
      updatePosition()
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
    }
  }, [isOpen])

  // Đóng popover khi click ngoài hoặc resize cửa sổ
  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        triggerRef.current?.contains(target) ||
        popoverRef.current?.contains(target)
      ) {
        return
      }
      setIsOpen(false)
      if (onBlur) onBlur()
    }

    const handleWindowResize = () => {
      updatePosition()
    }

    window.addEventListener('mousedown', handlePointerDown)
    window.addEventListener('scroll', handleWindowResize, true)
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('scroll', handleWindowResize, true)
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [isOpen, onBlur])

  // ── 5. BỘ LỌC ĐA CỘT REALTIME THEO TỪ KHÓA TÌM KIẾM ──
  const filteredRecords = useMemo(() => {
    if (!searchTerm.trim()) return rawRecords
    const lower = searchTerm.toLowerCase().trim()

    return rawRecords.filter((item) => {
      // Tìm trên các cột trong dropdownColumns
      const matchCol = effectiveColumns.some((col) => {
        const val = lookupFieldValue(item, col.key)
        return val !== undefined && val !== null && String(val).toLowerCase().includes(lower)
      })
      if (matchCol) return true

      // Tìm thêm trên các trường phổ biến
      return ['id', 'code', 'name', 'fullName', 'title', 'address'].some((prop) => {
        const val = lookupFieldValue(item, prop)
        return val !== undefined && val !== null && String(val).toLowerCase().includes(lower)
      })
    })
  }, [rawRecords, searchTerm, effectiveColumns])

  // Cuộn dòng active vào viewport
  useEffect(() => {
    if (listRef.current && filteredRecords.length > 0) {
      const activeEl = listRef.current.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [activeIndex, filteredRecords])

  // ── 6. XỬ LÝ CHỌN BẢN GHI (SELECT ROW) ──
  const handleSelectRecord = (record: Record<string, any>) => {
    const selectedVal = lookupFieldValue(record, idField) ?? record.id ?? record.Id ?? record.code ?? record.Code
    onChange(selectedVal, record)

    // Tự động Populate các trường nếu có cấu hình
    if (populateField && formId) {
      applyPopulate(formId, populateField, record)
    }

    setIsOpen(false)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange('', null)
  }

  // ── 7. XỬ LÝ PHÍM TẮT KEYBOARD NAVIGATION ──
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev < filteredRecords.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredRecords.length > 0 && activeIndex >= 0 && activeIndex < filteredRecords.length) {
        handleSelectRecord(filteredRecords[activeIndex])
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'F4' || (e.altKey && e.key === 'ArrowDown')) {
      e.preventDefault()
      handleOpen()
      return
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  // Border & styling
  const errorBorderClass = error
    ? 'border-red-500/90 bg-red-950/40 text-red-100 ring-1 ring-red-500/70'
    : 'border-slate-700/70 hover:border-emerald-500/70 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400/40'

  return (
    <>
      {/* ── TRIGGER INPUT ELEMENT ── */}
      <div
        ref={triggerRef}
        tabIndex={disabled ? -1 : 0}
        onClick={handleOpen}
        onKeyDown={handleTriggerKeyDown}
        onFocus={onFocus}
        className={`relative flex items-center justify-between transition-all select-none cursor-pointer ${
          isGridCell
            ? `w-full h-7 px-2 text-xs rounded bg-slate-900/80 hover:bg-slate-900 text-slate-100 border ${errorBorderClass}`
            : `w-full min-h-[34px] px-3 py-1.5 text-xs rounded-lg bg-slate-900/90 text-slate-100 border ${errorBorderClass} shadow-sm`
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      >
        <div className="flex-1 truncate mr-1.5">
          {displayText ? (
            <span className="font-medium text-slate-100 truncate block">{displayText}</span>
          ) : (
            <span className="text-slate-500 truncate block italic">{placeholder}</span>
          )}
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {Boolean(displayText) && !disabled && !readOnly && (
            <button
              type="button"
              tabIndex={-1}
              onClick={handleClear}
              className="p-0.5 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
              title="Xóa lựa chọn"
            >
              <X className="w-3 h-3" />
            </button>
          )}
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-emerald-400' : ''
            }`}
          />
        </div>
      </div>

      {/* ── MULTI-COLUMN DROPDOWN TABLE POPOVER (PORTAL) ── */}
      {isOpen &&
        createPortal(
          <div
            ref={popoverRef}
            style={{
              position: 'fixed',
              top: `${popoverPos.top}px`,
              left: `${popoverPos.left}px`,
              width: `${popoverPos.width}px`,
              zIndex: 99999,
            }}
            className="flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 text-xs font-sans ring-1 ring-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Header Toolbar: Ô tìm kiếm nhanh đa cột */}
            <div className="p-2 border-b border-slate-800/90 bg-slate-950/60 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setActiveIndex(0)
                  }}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Tìm kiếm theo mã, tên, địa chỉ..."
                  className="w-full h-8 pl-8 pr-7 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded text-slate-400 hover:text-slate-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Nút Tạo nhanh RefClass / Reference */}
              {canQuickAdd && (reference || refClass) && (
                <button
                  type="button"
                  onClick={handleOpenQuickAdd}
                  title={`Tạo nhanh bản ghi mới cho ${reference || 'danh mục'}`}
                  className="flex items-center gap-1 h-8 px-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium transition-all shrink-0 cursor-pointer shadow-sm active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tạo nhanh</span>
                </button>
              )}

              {isLoading && (
                <div className="flex items-center text-emerald-400 text-[11px] gap-1 px-1">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span>Đang tải...</span>
                </div>
              )}
            </div>

            {/* 2. Table Column Headers */}
            <div className="flex items-center bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 px-3 py-1.5 select-none">
              {effectiveColumns.map((col, idx) => (
                <div
                  key={col.key || idx}
                  style={{ width: col.width || `${100 / effectiveColumns.length}%` }}
                  className={`px-1.5 truncate ${
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                  }`}
                >
                  {col.title}
                </div>
              ))}
              <div className="w-6 flex-shrink-0" />
            </div>

            {/* 3. Table Rows Body */}
            <div
              ref={listRef}
              className="max-h-[220px] overflow-y-auto divide-y divide-slate-800/40 select-none"
            >
              {filteredRecords.length === 0 ? (
                <div className="py-6 px-4 text-center text-slate-500 flex flex-col items-center justify-center gap-2">
                  <Search className="w-5 h-5 text-slate-600 opacity-60" />
                  <span>{isLoading ? 'Đang truy vấn dữ liệu...' : 'Không tìm thấy kết quả phù hợp'}</span>
                  {canQuickAdd && (reference || refClass) && (
                    <button
                      type="button"
                      onClick={handleOpenQuickAdd}
                      className="mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-950 transition-all cursor-pointer active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm nhanh "{searchTerm || reference}"</span>
                    </button>
                  )}
                </div>
              ) : (
                filteredRecords.map((item, idx) => {
                  const itemVal = lookupFieldValue(item, idField) ?? item.id ?? item.Id ?? item.code ?? item.Code
                  const isSelected = itemVal !== undefined && String(itemVal) === String(value)
                  const isActive = idx === activeIndex

                  return (
                    <div
                      key={itemVal ?? idx}
                      data-index={idx}
                      onClick={() => handleSelectRecord(item)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`flex items-center px-3 py-1.5 cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-emerald-950/60 text-emerald-200 font-medium'
                          : isActive
                          ? 'bg-slate-800/70 text-slate-100'
                          : 'text-slate-300 hover:bg-slate-800/40'
                      }`}
                    >
                      {effectiveColumns.map((col, cIdx) => {
                        const rawCell = lookupFieldValue(item, col.key)
                        const cellVal = rawCell !== undefined && rawCell !== null ? String(rawCell) : '—'
                        return (
                          <div
                            key={col.key || cIdx}
                            style={{ width: col.width || `${100 / effectiveColumns.length}%` }}
                            className={`px-1.5 truncate ${
                              col.align === 'right'
                                ? 'text-right font-mono'
                                : col.align === 'center'
                                ? 'text-center'
                                : 'text-left'
                            }`}
                          >
                            {cellVal}
                          </div>
                        )
                      })}

                      {/* Icon đánh dấu đã chọn */}
                      <div className="w-6 flex items-center justify-center flex-shrink-0">
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* 4. Footer Information & Keyboard Hints */}
            <div className="px-3 py-1.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
              <div>
                <span>{filteredRecords.length} / {rawRecords.length} bản ghi</span>
                {reference && (
                  <span className="ml-2 font-mono text-[9px] text-slate-400 bg-slate-800/60 px-1 py-0.5 rounded">
                    ref: {reference}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <span>[↑/↓] Di chuyển</span>
                <span>•</span>
                <span>[Enter] Chọn</span>
                <span>•</span>
                <span>[Esc] Đóng</span>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* ── MODAL TẠO NHANH BẢN GHI (QUICK ADD MODAL) ── */}
      {isQuickAddOpen &&
        createPortal(
          <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100">
            <div
              className="w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">
                      Tạo nhanh danh mục: {reference || 'Bản ghi mới'}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Thêm mới vào cơ sở dữ liệu và tự động chọn vào ô này
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsQuickAddOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Mã số (Code) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={quickAddCode}
                    onChange={(e) => setQuickAddCode(e.target.value)}
                    placeholder="VD: SITC, V-001..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Tên hiển thị (Name) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={quickAddName}
                    onChange={(e) => setQuickAddName(e.target.value)}
                    placeholder="VD: CÔNG TY CỔ PHẦN..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Ghi chú / Mô tả (Description)
                  </label>
                  <textarea
                    rows={2}
                    value={quickAddDescription}
                    onChange={(e) => setQuickAddDescription(e.target.value)}
                    placeholder="Thông tin bổ sung..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsQuickAddOpen(false)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  disabled={isSubmittingQuickAdd || !quickAddCode.trim() || !quickAddName.trim()}
                  onClick={handleSaveQuickAdd}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmittingQuickAdd ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Save className="w-3.5 h-3.5" />
                  )}
                  <span>Lưu & Chọn ngay</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

