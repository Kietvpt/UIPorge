import React, { useState, useRef, useEffect, useId } from 'react'
import { Search, Loader2, Check, ChevronDown, X } from 'lucide-react'
import type { ComponentNode } from '@/types/schema'
import { useDataEngine, extractFieldValue } from '@/core/engines/dataEngine'

export interface AutocompleteOption {
  value: string | number
  label: string
  sublabel?: string
  raw?: Record<string, any>
}

interface ForgeAutocompleteProps {
  node?: ComponentNode
  isEditing?: boolean
  label?: string
  value?: string | number
  onChange?: (val: string | number, selectedItem?: Record<string, any>) => void
  options?: AutocompleteOption[]
  reference?: string // Dataset name in dataEngine
  displayField?: string
  valueField?: string
  sublabelField?: string
  placeholder?: string
  disabled?: boolean
  colSpan?: number
}

export const ForgeAutocomplete: React.FC<ForgeAutocompleteProps> = ({
  node,
  isEditing,
  label,
  value: propValue,
  onChange,
  options: propOptions,
  reference,
  displayField = 'name',
  valueField = 'code',
  sublabelField,
  placeholder,
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  const formId = String(node?.pageId || 'default')
  const nodeProps = node?.props || {}
  const bindField = (nodeProps.dataBinding as string) || (nodeProps.fieldName as string) || (node?.id ?? '')

  const engineVal = useDataEngine((s) => extractFieldValue(s, formId, bindField, undefined))
  const setFieldValue = useDataEngine((s) => s.setFieldValue)
  const applyPopulate = useDataEngine((s) => s.applyPopulate)
  const getDataset = useDataEngine((s) => s.getDataset)

  // Resolve config from node props
  const effectiveLabel = label ?? (nodeProps.label as string) ?? 'Gợi ý tự động (Autocomplete)'
  const effectiveRef = reference ?? (nodeProps.reference as string)
  const effectiveDisplay = displayField ?? (nodeProps.displayField as string) ?? 'name'
  const effectiveValueField = valueField ?? (nodeProps.valueField as string) ?? 'code'
  const effectiveSublabelField = sublabelField ?? (nodeProps.sublabelField as string)
  const effectivePlaceholder = placeholder ?? (nodeProps.placeholder as string) ?? 'Gõ để tìm kiếm...'
  const populateRule = String(nodeProps.populateRule || '')

  // Bound form value
  const boundValue = engineVal ?? propValue ?? ''

  const [inputValue, setInputValue] = useState<string>(String(boundValue))
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)

  // Sync internal input text when bound value changes externally
  useEffect(() => {
    if (boundValue !== undefined && boundValue !== null) {
      setInputValue(String(boundValue))
    }
  }, [boundValue])

  // Resolve candidate list
  const getCandidateList = (): AutocompleteOption[] => {
    if (propOptions && propOptions.length > 0) {
      return propOptions
    }
    if (effectiveRef) {
      const ds = getDataset(effectiveRef) || []
      return ds.map((row: any) => ({
        value: row[effectiveValueField] ?? row.id ?? row.code ?? '',
        label: String(row[effectiveDisplay] ?? row.name ?? row.title ?? row.code ?? ''),
        sublabel: effectiveSublabelField ? String(row[effectiveSublabelField] ?? '') : undefined,
        raw: row,
      }))
    }
    return [
      { value: 'OPT-01', label: 'Lựa chọn gợi ý 01', sublabel: 'Mục hệ thống' },
      { value: 'OPT-02', label: 'Lựa chọn gợi ý 02', sublabel: 'Mục mặc định' },
      { value: 'OPT-03', label: 'Lựa chọn gợi ý 03', sublabel: 'Mục nâng cao' },
    ]
  }

  const allCandidates = getCandidateList()

  // Filter based on user input
  const filteredOptions = allCandidates.filter((opt) => {
    if (!inputValue || inputValue.trim() === '') return true
    const search = inputValue.toLowerCase().trim()
    return (
      opt.label.toLowerCase().includes(search) ||
      String(opt.value).toLowerCase().includes(search) ||
      (opt.sublabel && opt.sublabel.toLowerCase().includes(search))
    )
  })

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  const handleSelectOption = (opt: AutocompleteOption) => {
    setInputValue(opt.label)
    setIsOpen(false)
    setHighlightedIndex(-1)

    // Trigger local onChange
    onChange?.(opt.value, opt.raw)

    // Update Two-Way Data Binding
    if (bindField) {
      setFieldValue(formId, bindField, opt.value)
    }

    // Auto-populate dependent fields
    if (opt.raw && populateRule) {
      applyPopulate(formId, populateRule, opt.raw)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true)
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      )
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
        e.preventDefault()
        handleSelectOption(filteredOptions[highlightedIndex])
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setHighlightedIndex(-1)
    }
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setInputValue('')
    if (bindField) {
      setFieldValue(formId, bindField, '')
    }
    onChange?.('')
    inputRef.current?.focus()
  }

  return (
    <div ref={containerRef} className="relative w-full text-xs">
      {/* Label */}
      {effectiveLabel && (
        <label
          htmlFor={inputId}
          className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
        >
          {effectiveLabel}
        </label>
      )}

      {/* Input container */}
      <div className="relative flex items-center">
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          disabled={disabled}
          value={inputValue}
          placeholder={effectivePlaceholder}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setInputValue(e.target.value)
            setIsOpen(true)
            setHighlightedIndex(0)
            if (bindField) {
              setFieldValue(formId, bindField, e.target.value)
            }
          }}
          onKeyDown={handleKeyDown}
          className="w-full pl-3 pr-14 py-2 bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-500 text-xs shadow-inner focus:outline-none transition-all disabled:opacity-50"
        />

        {/* Action icons */}
        <div className="absolute right-2 flex items-center gap-1 text-slate-400">
          {inputValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:text-slate-200 rounded"
              title="Xóa giá trị"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen)
              inputRef.current?.focus()
            }}
            className="p-1 hover:text-slate-200 rounded"
          >
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-blue-400' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Dropdown Suggestions Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-slate-800">
          {filteredOptions.length === 0 ? (
            <div className="p-3 text-center text-slate-500 italic">
              Không tìm thấy mục nào khớp với "{inputValue}"
            </div>
          ) : (
            filteredOptions.map((opt, idx) => {
              const isHighlighted = highlightedIndex === idx
              const isSelected = String(opt.value) === String(boundValue)

              return (
                <div
                  key={`${opt.value}-${idx}`}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  onClick={() => handleSelectOption(opt)}
                  className={`px-3 py-2 flex items-center justify-between cursor-pointer transition-colors ${
                    isHighlighted
                      ? 'bg-blue-600/25 text-blue-200'
                      : isSelected
                      ? 'bg-slate-800/80 text-white'
                      : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  <div className="min-w-0 flex-1 pr-2">
                    <div className="font-medium truncate">{opt.label}</div>
                    {(opt.sublabel || opt.value) && (
                      <div className="text-[10px] text-slate-500 font-mono truncate">
                        {opt.sublabel ? `${opt.sublabel} • ` : ''}
                        {opt.value}
                      </div>
                    )}
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-blue-400 shrink-0" />}
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}
