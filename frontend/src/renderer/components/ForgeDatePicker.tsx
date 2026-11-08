import React from 'react'
import type { ComponentProps } from './types'
import { Calendar as CalendarIcon } from 'lucide-react'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine } from '@/core/engines/dataEngine'
import { FormFieldWrapper } from './FormFieldWrapper'

/**
 * 📦 ForgeDatePicker: Generic Date Picker Component
 * - 100% Trung lập (Domain-Agnostic)
 * - Two-Way Data Binding với generic DataEngine
 */
export const ForgeDatePicker: React.FC<ComponentProps> = ({ node, isEditing }) => {
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
  const engineVal = useDataEngine((s) => s.getFieldValue(formId, fieldName, undefined))
  const setFieldValue = useDataEngine((s) => s.setFieldValue)

  const currentValue = engineVal !== undefined ? engineVal : (props.value ?? '')
  const hasError = Boolean(props.validationError)

  return (
    <FormFieldWrapper
      label={props.label}
      showLabel={props.showLabel ?? true}
      labelPosition={props.labelPosition || 'left'}
      labelWidth={props.labelWidth || '100px'}
      required={props.required}
      error={props.validationError ? String(props.validationError) : undefined}
      colSpan={props.colSpan}
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      <div className="relative w-full flex items-center">
        <input
          type="text"
          disabled={props.disabled}
          readOnly={isEditing || Boolean(props.readOnly)}
          placeholder="DD/MM/YYYY"
          value={currentValue}
          className={`w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${
            hasError
              ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
              : 'border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          }`}
          onChange={(e) => {
            const nextVal = e.target.value
            setFieldValue(formId, fieldName, nextVal)
            if (!isEditing) {
              triggerComponentEvent(node.events, 'change', props.label || 'Chọn ngày', blFileName, {
                componentId: node.id,
                fieldName,
                value: nextVal,
              })
            }
          }}
        />
        <CalendarIcon className="w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" />
      </div>
    </FormFieldWrapper>
  )
}
