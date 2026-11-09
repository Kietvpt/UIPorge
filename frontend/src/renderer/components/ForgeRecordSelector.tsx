import React, { useState, useEffect } from 'react'
import { Plus, Tag } from 'lucide-react'
import { useDataEngine } from '@/core/engines/dataEngine'

export interface RecordItem {
  id: string | number
  code?: string
  name?: string
  [key: string]: any
}

export interface ForgeRecordSelectorProps {
  label?: string
  reference?: string
  displayField?: string
  records?: RecordItem[]
  activeId?: string | number
  canAdd?: boolean
  onSelectRecord?: (record: RecordItem) => void
  onAddNew?: () => void
  className?: string
  style?: React.CSSProperties
}

export const ForgeRecordSelector: React.FC<ForgeRecordSelectorProps> = ({
  label = 'Bản ghi:',
  reference = 'Records',
  displayField = 'code',
  records: propsRecords,
  activeId: propsActiveId,
  canAdd = true,
  onSelectRecord,
  onAddNew,
  className = '',
  style = {},
}) => {
  const dataEngine = useDataEngine()

  // Default generic records if none provided
  const defaultItems: RecordItem[] = [
    { id: '1', code: 'REC-001', name: 'Bản ghi mẫu 01' },
    { id: '2', code: 'REC-002', name: 'Bản ghi mẫu 02' },
    { id: '3', code: 'REC-003', name: 'Bản ghi mẫu 03' },
  ]

  const [items, setItems] = useState<RecordItem[]>(propsRecords || defaultItems)
  const [selectedId, setSelectedId] = useState<string | number>(propsActiveId || defaultItems[0]?.id || '')

  useEffect(() => {
    if (propsRecords && propsRecords.length > 0) {
      setItems(propsRecords)
    }
  }, [propsRecords])

  useEffect(() => {
    if (propsActiveId !== undefined) {
      setSelectedId(propsActiveId)
    }
  }, [propsActiveId])

  const handleSelect = (item: RecordItem) => {
    setSelectedId(item.id)
    if (onSelectRecord) {
      onSelectRecord(item)
    } else {
      // Tự động đồng bộ vào form dataEngine nếu có
      dataEngine.setFormRecord('default', item)
    }
  }

  const handleAdd = () => {
    const nextIndex = items.length + 1
    const newCode = `REC-${String(nextIndex).padStart(3, '0')}`
    const newItem: RecordItem = {
      id: String(Date.now()),
      code: newCode,
      name: `Bản ghi mới ${nextIndex}`,
    }
    const updated = [...items, newItem]
    setItems(updated)
    setSelectedId(newItem.id)

    if (onAddNew) {
      onAddNew()
    } else {
      dataEngine.setFormRecord('default', newItem)
    }
  }

  return (
    <div
      className={`flex items-center flex-wrap gap-2.5 px-3 py-2 bg-[#091122]/90 border border-slate-800/80 rounded-lg text-xs ${className}`}
      style={style}
    >
      {/* Label (VD: "Lô hàng:") */}
      {label && (
        <div className="flex items-center gap-1.5 font-semibold text-slate-300 pr-1 select-none">
          <Tag className="w-3.5 h-3.5 text-blue-400" />
          <span>{label}</span>
        </div>
      )}

      {/* Badges danh sách các lô hàng / bản ghi con */}
      <div className="flex items-center flex-wrap gap-2">
        {items.map((item) => {
          const isSelected = String(item.id) === String(selectedId)
          const text = item[displayField] || item.code || item.name || item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item)}
              className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white border border-blue-400 shadow-md shadow-blue-900/40 ring-1 ring-blue-400/50'
                  : 'bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-700/80'
              }`}
            >
              <span>{text}</span>
            </button>
          )
        })}

        {/* Nút [+ Tạo mới] (Khung xanh ngọc như ảnh mẫu của Master) */}
        {canAdd && (
          <button
            type="button"
            onClick={handleAdd}
            className="flex items-center gap-1 px-3 py-1 rounded text-xs font-medium border border-emerald-500/70 bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all cursor-pointer shadow-sm"
            title="Thêm bản ghi mới"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tạo mới</span>
          </button>
        )}
      </div>
    </div>
  )
}

