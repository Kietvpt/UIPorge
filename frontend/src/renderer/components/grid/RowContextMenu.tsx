import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import {
  Copy,
  Trash2,
  PlusCircle,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'

export interface RowContextMenuProps {
  x: number
  y: number
  row: any
  rowIndex: number
  totalRows: number
  isOpen: boolean
  onClose: () => void
  onDuplicateRow: (rowIndex: number) => void
  onDeleteRow: (rowIndex: number) => void
  onInsertRowBelow: (rowIndex: number) => void
  onMoveRowUp?: (rowIndex: number) => void
  onMoveRowDown?: (rowIndex: number) => void
}

export const RowContextMenu: React.FC<RowContextMenuProps> = ({
  x,
  y,
  row,
  rowIndex,
  totalRows,
  isOpen,
  onClose,
  onDuplicateRow,
  onDeleteRow,
  onInsertRowBelow,
  onMoveRowUp,
  onMoveRowDown,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)

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
  const adjustedY = Math.min(y, window.innerHeight - 260)

  return createPortal(
    <div
      ref={menuRef}
      className="fixed z-[999998] min-w-[210px] rounded-lg border border-slate-700/80 bg-slate-900/95 p-1 text-xs text-slate-200 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-100"
      style={{ left: adjustedX, top: adjustedY }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Row Header Info */}
      <div className="px-3 py-1.5 border-b border-slate-800 text-[10px] font-semibold text-emerald-400 tracking-wider flex items-center justify-between uppercase">
        <span>Thao Tác Dòng #{rowIndex + 1}</span>
        <span className="text-slate-500 font-mono">ID: {row?.id ?? rowIndex + 1}</span>
      </div>

      <div className="py-1">
        {/* 1. Duplicate Row */}
        <button
          type="button"
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer"
          onClick={() => {
            onDuplicateRow(rowIndex)
            onClose()
          }}
        >
          <Copy className="w-3.5 h-3.5 text-sky-400" />
          <span>Sao chép dòng (Duplicate)</span>
        </button>

        {/* 2. Insert Row Below */}
        <button
          type="button"
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors cursor-pointer"
          onClick={() => {
            onInsertRowBelow(rowIndex)
            onClose()
          }}
        >
          <PlusCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Chèn dòng mới bên dưới</span>
        </button>

        {/* 3. Move Row Up / Down if handlers provided */}
        {onMoveRowUp && (
          <button
            type="button"
            disabled={rowIndex === 0}
            className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
            onClick={() => {
              onMoveRowUp(rowIndex)
              onClose()
            }}
          >
            <ArrowUp className="w-3.5 h-3.5 text-slate-400" />
            <span>Chuyển dòng lên trên</span>
          </button>
        )}

        {onMoveRowDown && (
          <button
            type="button"
            disabled={rowIndex >= totalRows - 1}
            className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-emerald-600/20 hover:text-emerald-300 rounded text-left transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
            onClick={() => {
              onMoveRowDown(rowIndex)
              onClose()
            }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
            <span>Chuyển dòng xuống dưới</span>
          </button>
        )}

        <div className="my-1 border-t border-slate-800" />

        {/* 4. Delete Row */}
        <button
          type="button"
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-rose-600/20 hover:text-rose-300 text-rose-400 rounded text-left transition-colors cursor-pointer"
          onClick={() => {
            onDeleteRow(rowIndex)
            onClose()
          }}
        >
          <Trash2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Xóa dòng này (Delete)</span>
        </button>
      </div>
    </div>,
    document.body
  )
}
