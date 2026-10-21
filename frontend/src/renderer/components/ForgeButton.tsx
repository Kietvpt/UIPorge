import React from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'

// Button Component
export const ForgeButton: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const currentFeature =
    features.find((f) => String(f.id) === String(node.pageId)) ||
    features.find((f) => String(f.id) === String(activeFeatureId))
  const blFileName = currentFeature?.scriptFile
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
        if (isEditing) {
          // Ở chế độ thiết kế: Giữ phím Ctrl / Alt + Click để chạy thử trực tiếp sự kiện click
          if (e.ctrlKey || e.metaKey || e.altKey) {
            e.stopPropagation()
            triggerComponentEvent(node.events, 'click', props.label || 'Nút bấm', blFileName, {
              componentId: node.id,
              pageId: currentFeature?.id,
              trigger: 'click (Ctrl+Click)',
            })
          }
          // Click bình thường để chọn component trong editor
        } else {
          // Ở chế độ Xem thử (Preview): Click bình thường chạy sự kiện click
          triggerComponentEvent(node.events, 'click', props.label || 'Nút bấm', blFileName, {
            componentId: node.id,
            pageId: currentFeature?.id,
            trigger: 'click',
          })
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation()
        const hasDblClick = node.events?.some((ev) => ev.trigger === 'dblclick' || ev.trigger === 'onDoubleClick')
        if (hasDblClick) {
          triggerComponentEvent(node.events, 'dblclick', props.label || 'Nút bấm', blFileName, {
            componentId: node.id,
            pageId: currentFeature?.id,
            trigger: 'dblclick',
          })
        } else if (isEditing) {
          // Ở chế độ thiết kế: Nhấp đúp chuột vào nút có sự kiện click để kích hoạt chạy thử nhanh
          triggerComponentEvent(node.events, 'click', props.label || 'Nút bấm', blFileName, {
            componentId: node.id,
            pageId: currentFeature?.id,
            trigger: 'click (kích hoạt từ nhấp đúp test)',
          })
        }
      }}
    >
      {props.label || 'Nút bấm'}
    </button>
  )
}
