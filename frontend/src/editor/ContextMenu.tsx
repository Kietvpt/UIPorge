import React, { useEffect, useRef } from 'react'

export interface MenuItem {
  label: string
  icon?: React.ComponentType<{ className?: string }>
  onClick: () => void
  danger?: boolean
  divider?: boolean
}

interface ContextMenuProps {
  x: number
  y: number
  items: MenuItem[]
  onClose: () => void
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, items, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  // Prevent overflowing window viewport
  const adjustedX = Math.min(x, window.innerWidth - 220)
  const adjustedY = Math.min(y, window.innerHeight - (items.length * 36 + 20))

  return (
    <div
      ref={menuRef}
      style={{ top: `${adjustedY}px`, left: `${adjustedX}px` }}
      className="fixed z-50 w-56 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-1.5 backdrop-blur-md text-slate-200 select-none animate-in fade-in zoom-in-95 duration-100"
    >
      {items.map((item, idx) => {
        if (item.divider) {
          return <div key={idx} className="my-1 border-t border-slate-800" />
        }
        const Icon = item.icon
        return (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              item.onClick()
              onClose()
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors cursor-pointer text-left ${
              item.danger
                ? 'text-red-400 hover:bg-red-500/20 hover:text-red-300'
                : 'hover:bg-blue-600 hover:text-white'
            }`}
          >
            {Icon && <Icon className="w-4 h-4 shrink-0 opacity-80" />}
            <span className="font-medium truncate">{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
