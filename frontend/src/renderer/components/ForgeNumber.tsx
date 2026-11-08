import React from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useMasterDetailStore } from '@/logic/masterDetailStore'
import { FormFieldWrapper } from './FormFieldWrapper'

const NUMBER_FIELD_MAP: Record<string, string> = {
  fld_tpackages: 'tPackages',
  fld_total_gw: 'totalGw',
  fld_total_cbm: 'totalCbm',
  fld_total_vgm: 'totalVgm',
}

/**
 * ForgeNumber: Kế thừa Number.cs từ C# Core
 * - Tích hợp Two-Way Master-Detail Data Binding & Reactive Summary Sync
 * - Tự động đồng bộ với tổng số lượng, GW, CBM, VGM từ bảng CONTAINER INFORMATION
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

  // Master-Detail Data Binding
  const masterRecord = useMasterDetailStore((s) => s.masterRecord)
  const updateMasterField = useMasterDetailStore((s) => s.updateMasterField)
  const validationErrors = useMasterDetailStore((s) => s.validationErrors)

  const fieldKey = NUMBER_FIELD_MAP[node.id] || (node.dataBinding?.fieldName ? node.dataBinding.fieldName.toLowerCase() : null)
  const isBound = Boolean(fieldKey && masterRecord && masterRecord[fieldKey] !== undefined)
  const precision = props.precision !== undefined ? Number(props.precision) : 0

  const rawVal = isBound ? masterRecord[fieldKey] : props.value
  const displayNum = rawVal !== undefined && rawVal !== null && rawVal !== '' ? Number(rawVal) : 0

  const formatDisplay = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    })
  }

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
      <div className="relative w-full">
        <input
          type="text"
          disabled={props.disabled}
          readOnly={isEditing}
          placeholder={props.placeholder || '0'}
          value={formatDisplay(displayNum)}
          className={`w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 transition-all disabled:opacity-50 ${
            fieldError
              ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
              : 'border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
          }`}
          onChange={(e) => {
            const raw = e.target.value.replace(/,/g, '')
            if (raw === '' || !isNaN(Number(raw))) {
              const num = raw === '' ? 0 : Number(raw)
              if (isBound && fieldKey) {
                updateMasterField(fieldKey, num)
              }
              if (!isEditing) {
                triggerComponentEvent(node.events, 'change', props.label || 'Ô số', blFileName, {
                  componentId: node.id,
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
