import React from 'react'
import type { ComponentProps } from './types'
import { ChevronDown } from 'lucide-react'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useMasterDetailStore } from '@/logic/masterDetailStore'
import { getCascadedOptions } from '@/logic/cascadingEngine'
import { FormFieldWrapper } from './FormFieldWrapper'

const SELECT_FIELD_MAP: Record<string, string> = {
  fld_mbl_type: 'mblType',
  fld_vendor: 'vendor',
  fld_pol: 'pol',
  fld_pod: 'pod',
  fld_service: 'service',
  fld_pterm: 'pTerm',
  fld_ptype: 'pType',
}

/**
 * ForgeSelect: Kế thừa Select2.cs & Dropdown từ C# Core
 * - Tích hợp Two-Way Master-Detail Data Binding
 * - Hỗ trợ Cascading Dropdown động (POL -> POD theo tuyến vận chuyển)
 * - Tích hợp FormFieldWrapper có label nằm bên trái chuẩn ERP
 */
export const ForgeSelect: React.FC<ComponentProps> = ({ node, isEditing }) => {
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

  const fieldKey = SELECT_FIELD_MAP[node.id] || (node.dataBinding?.fieldName ? node.dataBinding.fieldName.toLowerCase() : null)
  const isBound = Boolean(fieldKey && masterRecord && masterRecord[fieldKey] !== undefined)
  const currentValue = isBound ? masterRecord[fieldKey] : (props.value ?? '')
  const fieldError = fieldKey ? (validationErrors[fieldKey] || validationErrors[node.id]) : undefined

  // Tính toán danh sách options (hỗ trợ Cascading động nếu là POD)
  let options = props.options && props.options.length > 0 ? props.options : []
  if (fieldKey === 'pod' || node.id === 'fld_pod') {
    const cascaded = getCascadedOptions('pol', masterRecord.pol, 'pod')
    if (cascaded && cascaded.length > 0) {
      options = cascaded
    }
  }

  // Đảm bảo option cho Vendor luôn có giá trị được populate
  if (fieldKey === 'vendor' && currentValue) {
    const exists = options.some((opt) => opt.value === currentValue)
    if (!exists) {
      options = [
        ...options,
        { value: currentValue, label: `${currentValue} (Tự động điền theo hãng tàu)` },
      ]
    }
  }

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
      <div className="relative w-full">
        <select
          disabled={props.disabled}
          value={currentValue}
          className={`w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 transition-all appearance-none cursor-pointer disabled:opacity-50 ${
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
              triggerComponentEvent(node.events, 'change', props.label || 'Chọn mục', blFileName, {
                componentId: node.id,
                value: nextVal,
              })
            }
          }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100 py-1">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </FormFieldWrapper>
  )
}
