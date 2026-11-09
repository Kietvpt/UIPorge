import React, { useState, useEffect, useMemo, useRef } from 'react'
import type { TableColumn } from '@/types/schema'
import { useDataEngine } from '@/core/engines/dataEngine'
import { Search, X, Check, Database } from 'lucide-react'

export interface ForgeSearchModalProps {
  isOpen: boolean
  title?: string
  entityName: string
  columns?: TableColumn[]
  searchFields?: string[]
  onSelect: (item: any) => void
  onClose: () => void
}

/**
 * 🔍 FORGE SEARCH MODAL (Kế thừa SearchEntry.cs & AdvancedSearch.cs từ Core C#)
 * - Tra cứu đa cột thời gian thực trên bất kỳ Entity nào của DataEngine / Backend.
 * - Hỗ trợ điều hướng bằng bàn phím (ArrowUp/Down, Enter chọn, Escape đóng).
 * - Tự động trích xuất metadata cột nếu không được truyền vào thủ công.
 */
export const ForgeSearchModal: React.FC<ForgeSearchModalProps> = ({
  isOpen,
  title,
  entityName,
  columns: customColumns,
  searchFields,
  onSelect,
  onClose,
}) => {
  const dataEngine = useDataEngine()
  const datasetFromEngine = useDataEngine((s) => s.datasets[entityName])
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // 1. Tải dữ liệu từ DataEngine hoặc API
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('')
      setSelectedIndex(0)
      return
    }

    if (Array.isArray(datasetFromEngine) && datasetFromEngine.length > 0) {
      setItems(datasetFromEngine)
    } else {
      setLoading(true)
      dataEngine
        .queryEntity(entityName)
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setItems(data)
          } else {
            // Fallback sang getDataset
            setItems(dataEngine.getDataset(entityName) || [])
          }
        })
        .finally(() => setLoading(false))
    }

    // Tự động focus vào ô tìm kiếm khi mở Modal
    setTimeout(() => {
      searchInputRef.current?.focus()
      searchInputRef.current?.select()
    }, 80)
  }, [isOpen, entityName, datasetFromEngine])

  // 2. Xác định danh sách cột hiển thị (Tự động sinh từ dữ liệu nếu không truyền customColumns)
  const resolvedColumns: TableColumn[] = useMemo(() => {
    if (customColumns && customColumns.length > 0) return customColumns

    if (items.length > 0) {
      const sample = items[0]
      const ignoredKeys = ['_id', '__v', 'createdat', 'updatedat', 'password']
      return Object.keys(sample)
        .filter((k) => !ignoredKeys.includes(k.toLowerCase()) && typeof sample[k] !== 'object')
        .slice(0, 6)
        .map((k) => ({
          key: k,
          title: k.charAt(0).toUpperCase() + k.slice(1).replace(/([A-Z])/g, ' $1'),
          width: '140px',
          sortable: true,
        }))
    }

    return [
      { key: 'code', title: 'Mã số', width: '120px', sortable: true },
      { key: 'name', title: 'Tên / Tiêu đề', width: '220px', sortable: true },
      { key: 'status', title: 'Trạng thái', width: '120px', sortable: true },
    ]
  }, [customColumns, items])

  // 3. Lọc dữ liệu theo từ khóa tìm kiếm đa cột
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items

    const term = searchTerm.toLowerCase().trim()
    return items.filter((item) => {
      if (searchFields && searchFields.length > 0) {
        return searchFields.some((f) => {
          const v = item[f]
          return v !== undefined && v !== null && String(v).toLowerCase().includes(term)
        })
      }
      return Object.values(item).some(
        (val) => val !== undefined && val !== null && String(val).toLowerCase().includes(term)
      )
    })
  }, [items, searchTerm, searchFields])

  // Đảm bảo selectedIndex luôn nằm trong phạm vi danh sách lọc
  useEffect(() => {
    if (selectedIndex >= filteredItems.length) {
      setSelectedIndex(Math.max(0, filteredItems.length - 1))
    }
  }, [filteredItems.length])

  // 4. Bàn phím điều hướng (ArrowUp/Down, Enter chọn, Escape đóng)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredItems[selectedIndex]) {
        onSelect(filteredItems[selectedIndex])
        onClose()
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }

  if (!isOpen) return null

  const modalTitle = title || `Tra cứu danh mục: ${entityName}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm animate-in fade-in duration-150 p-4"
      onKeyDown={handleKeyDown}
    >
      <div className="w-full max-w-3xl bg-[#0b1120] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header Modal */}
        <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">{modalTitle}</h3>
              <p className="text-[11px] text-slate-400 font-mono">
                {filteredItems.length} kết quả (Dùng phím ↑ ↓ để chọn, Enter để xác nhận)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Thanh Tìm Kiếm Đa Cột */}
        <div className="p-3 border-b border-slate-800/80 bg-slate-900/50">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setSelectedIndex(0)
              }}
              placeholder={`Gõ từ khóa tìm kiếm theo bất kỳ cột nào trong ${entityName}...`}
              className="w-full h-9 pl-9 pr-4 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            />
          </div>
        </div>

        {/* Nội dung bảng tra cứu */}
        <div className="flex-1 overflow-auto p-3">
          {loading ? (
            <div className="p-8 text-center text-slate-400 text-xs italic">
              Đang tải dữ liệu từ máy chủ...
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs italic">
              Không tìm thấy bản ghi nào khớp với từ khóa "{searchTerm}".
            </div>
          ) : (
            <div className="border border-slate-800 rounded-xl overflow-hidden shadow-inner">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-[#0f172a] text-slate-300 font-semibold uppercase text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="px-3 py-2 text-center w-12 text-slate-400">#</th>
                    {resolvedColumns.map((col) => (
                      <th
                        key={col.key}
                        className="px-3 py-2 border-r border-slate-800/80 whitespace-nowrap"
                        style={{ width: col.width }}
                      >
                        {col.title || col.key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex
                    return (
                      <tr
                        key={item.id ?? item.Id ?? idx}
                        onClick={() => setSelectedIndex(idx)}
                        onDoubleClick={() => {
                          onSelect(item)
                          onClose()
                        }}
                        className={`transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600/30 text-blue-100 border-l-2 border-l-blue-400'
                            : 'hover:bg-slate-800/40 text-slate-300'
                        }`}
                      >
                        <td className="px-3 py-2 text-center text-[11px] text-slate-400">
                          {idx + 1}
                        </td>
                        {resolvedColumns.map((col) => {
                          const val = item[col.key]
                          return (
                            <td
                              key={col.key}
                              className="px-3 py-2 border-r border-slate-800/50 whitespace-nowrap text-xs truncate max-w-[200px]"
                            >
                              {val !== undefined && val !== null ? String(val) : '—'}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 border-t border-slate-800 flex items-center justify-between bg-slate-900/90 text-xs">
          <span className="text-slate-400 text-[11px]">
            Nhấp đúp chuột hoặc nhấn <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] text-slate-300">Enter</kbd> để chọn
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors font-medium cursor-pointer"
            >
              Hủy bỏ (Esc)
            </button>
            <button
              type="button"
              disabled={filteredItems.length === 0}
              onClick={() => {
                if (filteredItems[selectedIndex]) {
                  onSelect(filteredItems[selectedIndex])
                  onClose()
                }
              }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold shadow-md shadow-blue-900/40 transition-all cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Chọn bản ghi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

