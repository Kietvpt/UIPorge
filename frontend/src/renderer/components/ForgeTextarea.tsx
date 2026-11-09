import React from 'react'
import type { ComponentProps } from './types'
import { FormFieldWrapper } from './FormFieldWrapper'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine, extractFieldValue } from '@/core/engines/dataEngine'

/**
 * 📦 ForgeTextarea: Generic Multi-line Textarea Component
 * - 100% Trung lập (Domain-Agnostic)
 * - Two-Way Data Binding với generic DataEngine
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

  // Lấy giá trị qua Generic DataEngine
  const formId = String(node.parentId || activeFeatureId || 'defaultForm')
  const fieldName = String(node.dataBinding?.fieldName || node.props.name || node.id)
  const engineVal = useDataEngine((s) => extractFieldValue(s, formId, fieldName, undefined))
  const setFieldValue = useDataEngine((s) => s.setFieldValue)

  const currentValue = engineVal !== undefined ? engineVal : (props.value !== undefined ? String(props.value) : '')
  const rows = Number(props.rows) || 2
  const hasError = Boolean(props.validationError)

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
        placeholder={props.placeholder || 'Nhập nội dung...'}
        value={currentValue}
        disabled={props.disabled}
        readOnly={isEditing || Boolean(props.readOnly)}
        style={{
          width: '100%',
          ...(visualStyle as React.CSSProperties),
        }}
        className={`w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${
          hasError
            ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
            : 'border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500'
        } ${props.disabled ? 'opacity-50 cursor-not-allowed bg-slate-900' : ''}`}
        onChange={(e) => {
          const nextVal = e.target.value
          setFieldValue(formId, fieldName, nextVal)
          if (!isEditing) {
            triggerComponentEvent(node.events, 'change', props.label || 'Văn bản', blFileName, {
              componentId: node.id,
              fieldName,
              value: nextVal,
            })
          }
        }}
        onFocus={() => {
          if (!isEditing) {
            triggerComponentEvent(node.events, 'focus', props.label || 'Văn bản', blFileName, {
              componentId: node.id,
              fieldName,
            })
          }
        }}
        onBlur={(e) => {
          if (!isEditing) {
            triggerComponentEvent(node.events, 'blur', props.label || 'Văn bản', blFileName, {
              componentId: node.id,
              fieldName,
              value: e.target.value,
            })
          }
        }}
      />
    </FormFieldWrapper>
  )
}
