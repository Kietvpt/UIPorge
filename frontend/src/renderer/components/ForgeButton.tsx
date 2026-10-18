import React from 'react'
import type { ComponentProps } from './types'

// Button Component
export const ForgeButton: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  // Separate flex-item layout styles from inner visual styles
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-slate-100',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    ghost: 'bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-600',
  }[props.variant || 'primary']

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  }[props.size || 'md']

  return (
    <button
      type="button"
      disabled={props.disabled}
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses} ${sizeClasses}`}
      onClick={(e) => {
        if (isEditing) e.stopPropagation()
      }}
    >
      {props.label || 'Nút bấm'}
    </button>
  )
}
