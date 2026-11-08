import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { FormFieldWrapper } from './FormFieldWrapper'

/**
 * ForgeNumber: Kế thừa Number.cs từ C# Core
 * - Hỗ trợ precision (số chữ số thập phân, vd: 0, 2)
 * - Tự động format phân cách hàng nghìn (1,085 hay 25.00 trong Ảnh 4)
 * - Tích hợp FormFieldWrapper có label nằm bên trái
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

  const precision = props.precision !== undefined ? Number(props.precision) : 0
  const initialNum = props.value !== undefined ? Number(props.value) : ''
  const [val, setVal] = useState<number | string>(initialNum)

  const formatDisplay = (v: number | string) => {
    if (v === '' || isNaN(Number(v))) return ''
    const num = Number(v)
    return num.toLocaleString('en-US', {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    })
  }

  return (
    <FormFieldWrapper
      label={props.label}
      showLabel={props.showLabel ?? true}
      labelPosition={props.labelPosition || 'left'}
      labelWidth={props.labelWidth || '100px'}
      required={props.required}
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
          value={formatDisplay(val)}
          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-right text-emerald-400 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all disabled:opacity-50"
          onChange={(e) => {
            const raw = e.target.value.replace(/,/g, '')
            if (raw === '' || !isNaN(Number(raw))) {
              setVal(raw)
              if (!isEditing) {
                triggerComponentEvent(node.events, 'change', props.label || 'Ô số', blFileName, {
                  componentId: node.id,
                  value: raw === '' ? null : Number(raw),
                })
              }
            }
          }}
        />
      </div>
    </FormFieldWrapper>
  )
}

