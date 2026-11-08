import React from 'react'
import type { ComponentProps } from './types'
import { Calendar as CalendarIcon } from 'lucide-react'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useMasterDetailStore } from '@/logic/masterDetailStore'
import { FormFieldWrapper } from './FormFieldWrapper'

const DATE_FIELD_MAP: Record<string, string> = {
  fld_shipment_date: 'shipmentDate',
  fld_mbl_date: 'mblIssuedDate',
  fld_eta: 'eta',
}

/**
 * ForgeDatePicker: Kế thừa Datepicker.cs từ C# Core
 * - Tích hợp Two-Way Master-Detail Data Binding
 * - Hiển thị định dạng ngày chuẩn DD/MM/YYYY (như S.Date, ETA trong Ảnh 4)
 * - Tích hợp FormFieldWrapper với Label nằm bên trái chuẩn ERP
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

  // Master-Detail Data Binding
  const masterRecord = useMasterDetailStore((s) => s.masterRecord)
  const updateMasterField = useMasterDetailStore((s) => s.updateMasterField)
  const validationErrors = useMasterDetailStore((s) => s.validationErrors)

  const fieldKey = DATE_FIELD_MAP[node.id] || (node.dataBinding?.fieldName ? node.dataBinding.fieldName.toLowerCase() : null)
  const isBound = Boolean(fieldKey && masterRecord && masterRecord[fieldKey] !== undefined)
  const currentValue = isBound ? masterRecord[fieldKey] : (props.value ?? '')
  const fieldError = fieldKey ? (validationErrors[fieldKey] || validationErrors[node.id]) : undefined

  return (
    <FormFieldWrapper
      label={props.label}
      showLabel={props.showLabel ?? true}
      labelPosition={props.labelPosition || 'left'}
      labelWidth={props.labelWidth || '100px'}
      required={props.required}
      error={fieldError}
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
          readOnly={isEditing}
          placeholder="DD/MM/YYYY"
          value={currentValue}
          className={`w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 font-mono transition-all disabled:opacity-50 ${
            fieldError
              ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
              : 'border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          }`}
          onChange={(e) => {
            const nextVal = e.target.value
            if (isBound && fieldKey) {
              updateMasterField(fieldKey, nextVal)
            }
            if (!isEditing) {
              triggerComponentEvent(node.events, 'change', props.label || 'Chọn ngày', blFileName, {
                componentId: node.id,
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
