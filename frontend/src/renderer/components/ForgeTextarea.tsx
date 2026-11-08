import React from 'react'
import type { ComponentProps } from './types'
import { FormFieldWrapper } from './FormFieldWrapper'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useMasterDetailStore } from '@/logic/masterDetailStore'

const TEXTAREA_FIELD_MAP: Record<string, string> = {
  fld_notes: 'notes',
}

/**
 * ForgeTextarea: Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)
 * - Tích hợp Two-Way Master-Detail Data Binding
 * - Tự động bọc bởi FormFieldWrapper (nhãn mặc định bên trái 110px)
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

  // Master-Detail Data Binding
  const masterRecord = useMasterDetailStore((s) => s.masterRecord)
  const updateMasterField = useMasterDetailStore((s) => s.updateMasterField)
  const validationErrors = useMasterDetailStore((s) => s.validationErrors)

  const fieldKey = TEXTAREA_FIELD_MAP[node.id] || (node.dataBinding?.fieldName ? node.dataBinding.fieldName.toLowerCase() : null)
  const isBound = Boolean(fieldKey && masterRecord && masterRecord[fieldKey] !== undefined)
  const currentValue = isBound ? masterRecord[fieldKey] : (props.value !== undefined ? String(props.value) : '')
  const rows = Number(props.rows) || 2
  const fieldError = fieldKey ? (validationErrors[fieldKey] || validationErrors[node.id]) : undefined

  return (
    <FormFieldWrapper
      label={props.label || 'Ghi Chú'}
      showLabel={props.showLabel}
      labelPosition={props.labelPosition}
      labelWidth={props.labelWidth}
      colSpan={props.colSpan}
      required={props.required}
      error={fieldError}
    >
      <textarea
        rows={rows}
        placeholder={props.placeholder || 'Nhập nội dung ghi chú...'}
        value={currentValue}
        disabled={props.disabled}
        readOnly={isEditing || Boolean(props.readOnly)}
        style={{
          width: '100%',
          ...(visualStyle as React.CSSProperties),
        }}
        className={`w-full px-3 py-1.5 bg-slate-950 border rounded-lg text-xs font-mono transition-colors resize-y ${
          fieldError
            ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
            : 'border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 placeholder-slate-500'
        } ${props.disabled ? 'opacity-50 cursor-not-allowed bg-slate-900' : ''}`}
        onChange={(e) => {
          const nextVal = e.target.value
          if (isBound && fieldKey) {
            updateMasterField(fieldKey, nextVal)
          }
          if (!isEditing) {
            triggerComponentEvent(node.events, 'change', props.label || 'Ghi chú', blFileName, {
              componentId: node.id,
              value: nextVal,
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
