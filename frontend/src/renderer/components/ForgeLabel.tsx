import React from 'react'
import type { ComponentProps } from './types'

// Label Component
export const ForgeLabel: React.FC<ComponentProps> = ({ node }) => {
  const { props, style } = node
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  return (
    <span
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
      className="text-sm font-medium text-slate-200 inline-block"
    >
      {props.label || 'Văn bản tiêu đề'}
    </span>
  )
}
