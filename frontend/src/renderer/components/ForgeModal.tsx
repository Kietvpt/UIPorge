import React from 'react'
import type { ComponentProps } from './types'
import { X } from 'lucide-react'

export const ForgeModal: React.FC<ComponentProps> = ({ node, children }) => {
  const { props } = node
  const title = props.title || props.label || 'Hộp Thoại (Modal Dialog)'

  return (
    <div className="w-full p-4 rounded-xl border border-dashed border-blue-500/60 bg-blue-950/10">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{title}</span>
        <X className="w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" />
      </div>
      <div className="pt-3">
        {children || <p className="text-xs text-slate-400">Kéo thả các phần tử vào hộp thoại này.</p>}
      </div>
    </div>
  )
}

