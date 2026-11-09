import React from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/core/engines/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine, extractFieldValue } from '@/core/engines/dataEngine'
import { FormFieldWrapper } from './FormFieldWrapper'

/**
 * 📦 ForgeNumber: Generic Number Input Component
 * - 100% Trung lập (Domain-Agnostic)
 * - Two-Way Data Binding với generic DataEngine
 * - Hỗ trợ precision (số chữ số thập phân) và định dạng phân cách hàng nghìn
 */
export const ForgeNumber: React.FC<ComponentProps> = ({ node, isEditing }) => {
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

  const precision = props.precision !== undefined ? Number(props.precision) : 0
  const rawVal = engineVal !== undefined ? engineVal : props.value
  const displayNum = rawVal !== undefined && rawVal !== null && rawVal !== '' ? Number(rawVal) : 0

  const formatDisplay = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    })
  }

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
      <div className="relative w-full">
        <input
          type="text"
          disabled={props.disabled}
          readOnly={isEditing || Boolean(props.readOnly)}
          placeholder={props.placeholder || '0'}
          value={formatDisplay(displayNum)}
          className={`w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${
            hasError
              ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
              : 'border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
          }`}
          onChange={(e) => {
            const raw = e.target.value.replace(/,/g, '')
            if (raw === '' || !isNaN(Number(raw))) {
              const num = raw === '' ? 0 : Number(raw)
              setFieldValue(formId, fieldName, num)
              if (!isEditing) {
                triggerComponentEvent(node.events, 'change', props.label || 'Ô số', blFileName, {
                  componentId: node.id,
                  fieldName,
                  value: num,
                })
              }
            }
          }}
        />
      </div>
    </FormFieldWrapper>
  )
}
