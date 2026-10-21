import React from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'

// TextBox Component
// Inner wrapper always maintains width: 100% and maxWidth: 100% so input fills the outer flex item cleanly
export const ForgeTextBox: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const currentFeature =
    features.find((f) => String(f.id) === String(node.pageId)) ||
    features.find((f) => String(f.id) === String(activeFeatureId))
  const blFileName = currentFeature?.scriptFile
  // Separate flex-item layout styles from inner visual styles
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  return (
    <div
      className="flex flex-col gap-1.5 w-full"
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      {props.label && (
        <label className="text-xs font-semibold text-slate-300">
          {props.label} {props.required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        type="text"
        disabled={props.disabled}
        readOnly={isEditing}
        placeholder={props.placeholder || 'Nhập dữ liệu...'}
        defaultValue={props.value}
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50"
        onChange={(e) => {
          if (!isEditing) {
            triggerComponentEvent(node.events, 'change', props.label || 'Ô nhập liệu', blFileName, {
              componentId: node.id,
              value: e.target.value,
            })
          }
        }}
        onFocus={() => {
          if (!isEditing) {
            triggerComponentEvent(node.events, 'focus', props.label || 'Ô nhập liệu', blFileName, {
              componentId: node.id,
            })
          }
        }}
        onBlur={(e) => {
          if (!isEditing) {
            triggerComponentEvent(node.events, 'blur', props.label || 'Ô nhập liệu', blFileName, {
              componentId: node.id,
              value: e.target.value,
            })
          }
        }}
      />
    </div>
  )
}
