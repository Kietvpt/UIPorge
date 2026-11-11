import React from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/core/engines/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine, extractFieldValue } from '@/core/engines/dataEngine'
import { FormFieldWrapper } from './FormFieldWrapper'
import { EnterpriseDatePicker } from './common/EnterpriseDatePicker'

/**
 * 📦 ForgeDatePicker: Generic Date Picker Component
 * - 100% Trung lập (Domain-Agnostic)
 * - Tích hợp EnterpriseDatePicker (Popup Lịch tương tác chuyên nghiệp)
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
  const formId = String(node.pageId || activeFeatureId || 'default')
  const fieldName = String(node.dataBinding?.fieldName || node.props.name || node.id)
  const engineVal = useDataEngine((s) => extractFieldValue(s, formId, fieldName, undefined))
  const setFieldValue = useDataEngine((s) => s.setFieldValue)

  const currentValue = engineVal !== undefined ? engineVal : (props.value ?? '')

  const handleChange = (nextVal: string) => {
    setFieldValue(formId, fieldName, nextVal)
    if (!isEditing) {
      triggerComponentEvent(node.events, 'change', props.label || 'Chọn ngày', blFileName, {
        componentId: node.id,
        fieldName,
        value: nextVal,
      })
    }
  }

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
      <EnterpriseDatePicker
        value={currentValue}
        onChange={handleChange}
        disabled={props.disabled}
        readOnly={isEditing || Boolean(props.readOnly)}
        placeholder={props.placeholder || 'DD/MM/YYYY'}
        error={props.validationError ? String(props.validationError) : undefined}
      />
    </FormFieldWrapper>
  )
}
