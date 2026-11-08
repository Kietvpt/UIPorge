import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import {
  Eye,
  EyeOff,
  Pin,
  Sliders,
  Copy,
  Trash2,
  Filter,
  Settings,
  ChevronRight,
} from 'lucide-react'
import type { TableColumn } from '@/types/schema'

export interface HeaderContextMenuProps {
  x: number
  y: number
  column: TableColumn
  columnIndex: number
  allColumns: TableColumn[]
  isOpen: boolean
  onClose: () => void
  onToggleHide: (columnKey: string) => void
  onSetFreeze: (columnKey: string, freeze: 'left' | 'right' | 'none') => void
  onOpenProperties: (column: TableColumn) => void
  onCloneColumn: (columnKey: string) => void
  onRemoveColumn: (columnKey: string) => void
  onToggleFilter?: () => void
}

export const HeaderContextMenu: React.FC<HeaderContextMenuProps> = ({
  x,
  y,
  column,
  isOpen,
  onClose,
  onToggleHide,
  onSetFreeze,
  onOpenProperties,
  onCloneColumn,
  onRemoveColumn,
  onToggleFilter,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [showFreezeSubmenu, setShowFreezeSubmenu] = React.useState(false)

  // Đóng khi click ngoài hoặc nhấn ESC
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Điều chỉnh tọa độ x, y để menu không bị tràn màn hình
  const adjustedX = Math.min(x, window.innerWidth - 220)
  const adjustedY = Math.min(y, window.innerHeight - 340)

  return createPortal(
    <div
      ref={menuRef}
      className="fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100"
      style={{ left: adjustedX, top: adjustedY }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header Info */}
      <div className="px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase">
        <span>Cột: {column.title || column.key}</span>
        <span className="text-slate-500 font-normal">#{column.key}</span>
      </div>

      <div className="py-1">
        {/* 1. Show/Hide Header */}
        <button
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors"
          onClick={() => {
            onToggleHide(column.key)
            onClose()
          }}
        >
          {column.hidden ? (
            <>
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hiện cột này (Show header)</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5 text-amber-400" />
              <span>Ẩn cột này (Hide header)</span>
            </>
          )}
        </button>

        {/* 2. Cố định cột (Freeze) */}
        <div
          className="relative"
          onMouseEnter={() => setShowFreezeSubmenu(true)}
          onMouseLeave={() => setShowFreezeSubmenu(false)}
        >
          <button
            className="w-full flex items-center justify-between px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Pin className={`w-3.5 h-3.5 ${column.sticky ? 'text-emerald-400 fill-emerald-400' : 'text-slate-400'}`} />
              <span>Cố định cột (Freeze)</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {showFreezeSubmenu && (
            <div className="absolute left-full top-0 ml-1 min-w-[170px] rounded-lg border border-slate-700 bg-slate-900/95 p-1 shadow-xl text-xs">
              <button
                className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${column.sticky === 'left' ? 'text-emerald-400 font-semibold' : ''}`}
                onClick={() => {
                  onSetFreeze(column.key, 'left')
                  onClose()
                }}
              >
                <span>📌 Ghim bên trái (Left)</span>
                {column.sticky === 'left' && <span className="text-[10px]">✓</span>}
              </button>
              <button
                className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-emerald-600/20 ${column.sticky === 'right' ? 'text-emerald-400 font-semibold' : ''}`}
                onClick={() => {
                  onSetFreeze(column.key, 'right')
                  onClose()
                }}
              >
                <span>📌 Ghim bên phải (Right)</span>
                {column.sticky === 'right' && <span className="text-[10px]">✓</span>}
              </button>
              <button
                className="w-full flex items-center justify-between px-3 py-1.5 rounded text-left hover:bg-slate-800 text-slate-400"
                onClick={() => {
                  onSetFreeze(column.key, 'none')
                  onClose()
                }}
              >
                <span>Bỏ ghim (Unfreeze)</span>
              </button>
            </div>
          )}
        </div>

        {/* 3. Column Data Options (Ảnh 6) */}
        <button
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors font-medium text-emerald-400"
          onClick={() => {
            onOpenProperties(column)
            onClose()
          }}
        >
          <Sliders className="w-3.5 h-3.5 text-emerald-400" />
          <span>Column Data Options</span>
        </button>

        {/* 4. Clone Column */}
        <button
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-800 rounded text-left transition-colors"
          onClick={() => {
            onCloneColumn(column.key)
            onClose()
          }}
        >
          <Copy className="w-3.5 h-3.5 text-sky-400" />
          <span>Clone Column</span>
        </button>

        {/* 5. Remove Column */}
        <button
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-500/20 hover:text-rose-300 rounded text-left transition-colors text-rose-400"
          onClick={() => {
            onRemoveColumn(column.key)
            onClose()
          }}
        >
          <Trash2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Remove Column</span>
        </button>
      </div>

      <div className="border-t border-slate-800 pt-1 mt-1">
        {onToggleFilter && (
          <button
            className="w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400"
            onClick={() => {
              onToggleFilter()
              onClose()
            }}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Local</span>
          </button>
        )}
        <button
          className="w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-slate-800 rounded text-left transition-colors text-slate-400"
          onClick={() => {
            onOpenProperties(column)
            onClose()
          }}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Feature Settings</span>
        </button>
      </div>
    </div>,
    document.body
  )
}
