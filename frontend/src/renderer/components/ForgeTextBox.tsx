import React from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useMasterDetailStore } from '@/logic/masterDetailStore'
import { FormFieldWrapper } from './FormFieldWrapper'

const FIELD_MAP: Record<string, string> = {
  fld_job_no: 'jobNo',
  fld_mbl_no: 'mblNo',
  fld_lines: 'sLines',
  fld_agent: 'agent',
  fld_opic: 'opic',
  fld_commodity: 'commodity',
  fld_po_no: 'poNo',
}

// TextBox Component
// Tích hợp FormFieldWrapper & Two-Way Master-Detail Data Binding
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

  // Master-Detail Data Binding
  const masterRecord = useMasterDetailStore((s) => s.masterRecord)
  const updateMasterField = useMasterDetailStore((s) => s.updateMasterField)
  const validationErrors = useMasterDetailStore((s) => s.validationErrors)
  const jobs = useMasterDetailStore((s) => s.jobs)
  const selectJob = useMasterDetailStore((s) => s.selectJob)
  const createNewJob = useMasterDetailStore((s) => s.createNewJob)

  const fieldKey = FIELD_MAP[node.id] || (node.dataBinding?.fieldName ? node.dataBinding.fieldName.toLowerCase() : null)
  const isBound = Boolean(fieldKey && masterRecord && masterRecord[fieldKey] !== undefined)
  const displayVal = isBound ? masterRecord[fieldKey] : (props.value ?? '')
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
      <div className="w-full flex flex-col gap-1">
        <input
          type="text"
          disabled={props.disabled}
          readOnly={isEditing}
          placeholder={props.placeholder || 'Nhập dữ liệu...'}
          value={displayVal}
          className={`w-full px-3 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 ${
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
              triggerComponentEvent(node.events, 'change', props.label || 'Ô nhập liệu', blFileName, {
                componentId: node.id,
                value: nextVal,
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

        {/* Thanh chọn nhanh Job No chuẩn Master-Detail (Ảnh 4) */}
        {node.id === 'fld_job_no' && (
          <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
            <span className="text-[10px] text-slate-500 font-mono">Lô hàng:</span>
            {jobs.map((j) => (
              <button
                key={j}
                type="button"
                onClick={() => selectJob(j)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer ${
                  displayVal === j
                    ? 'bg-blue-600/30 text-blue-300 border border-blue-500/60 font-bold shadow-sm shadow-blue-500/20'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-400 border border-slate-700/50'
                }`}
                title={`Nhấp để chuyển sang Lô hàng ${j} (Tự động đồng bộ 3 bảng bên dưới)`}
              >
                {j}
              </button>
            ))}
            <button
              type="button"
              onClick={() => createNewJob()}
              className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-600/25 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/50 transition-colors cursor-pointer"
              title="Khởi tạo một Lô hàng FCL Import mới"
            >
              + Tạo mới
            </button>
          </div>
        )}
      </div>
    </FormFieldWrapper>
  )
}
