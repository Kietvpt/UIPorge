import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { FormFieldWrapper } from './FormFieldWrapper'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'

/**
 * ForgeTextarea: Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)
 * - Tự động bọc bởi FormFieldWrapper (nhãn mặc định bên trái 110px)
 * - Hỗ trợ tùy chỉnh số dòng hiển thị (rows)
 * - Hỗ trợ liên kết sự kiện (change, blur, focus) với Business Logic Engine
 */
export const ForgeTextarea: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const currentFeature =
    features.find((f) => String(f.id) === String(node.pageId)) ||
    features.find((f) => String(f.id) === String(activeFeatureId))
  const blFileName = currentFeature?.scriptFile

  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const rows = Number(props.rows) || 3
  const [val, setVal] = useState(props.value !== undefined ? String(props.value) : '')

  return (
    <FormFieldWrapper
      label={props.label || 'Ghi Chú'}
      showLabel={props.showLabel}
      labelPosition={props.labelPosition}
      labelWidth={props.labelWidth}
      colSpan={props.colSpan}
      required={props.required}
      error={props.validationError ? String(props.validationError) : undefined}
    >
      <textarea
        rows={rows}
        placeholder={props.placeholder || 'Nhập nội dung ghi chú...'}
        value={val}
        disabled={props.disabled}
        readOnly={isEditing || Boolean(props.readOnly)}
        style={{
          width: '100%',
          ...(visualStyle as React.CSSProperties),
        }}
        className={`w-full px-3 py-2 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${
          props.validationError
            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-200'
            : 'border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500'
        } ${props.disabled ? 'opacity-50 cursor-not-allowed bg-slate-900' : ''}`}
        onChange={(e) => {
          setVal(e.target.value)
          if (!isEditing) {
            triggerComponentEvent(node.events, 'change', props.label || 'Ghi chú', blFileName, {
              componentId: node.id,
              value: e.target.value,
            })
          }
        }}
        onFocus={() => {
          if (!isEditing) {
            triggerComponentEvent(node.events, 'focus', props.label || 'Ghi chú', blFileName, {
              componentId: node.id,
            })
          }
        }}
        onBlur={(e) => {
          if (!isEditing) {
            triggerComponentEvent(node.events, 'blur', props.label || 'Ghi chú', blFileName, {
              componentId: node.id,
              value: e.target.value,
            })
          }
        }}
      />
    </FormFieldWrapper>
  )
}
