import React from 'react'
import type { ComponentProps } from './types'

export const ForgeDivider: React.FC<ComponentProps> = ({ node }) => {
  const { props, style } = node
  const { width, ...visualStyle } = style || {}

  return (
    <div
      className="w-full my-3 flex items-center gap-3"
      style={{
        width: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      <div className="flex-1 h-px bg-slate-800" />
      {props.label && (
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
          {props.label}
        </span>
      )}
      <div className="flex-1 h-px bg-slate-800" />
    </div>
  )
}

