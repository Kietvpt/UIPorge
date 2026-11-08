import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { ChevronDown } from 'lucide-react'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { FormFieldWrapper } from './FormFieldWrapper'

/**
 * ForgeSelect: Kế thừa Select2.cs & Dropdown từ C# Core
 * - Dropdown chọn giá trị liên kết thực thể (Vendor, Service, Terminal...)
 * - Tích hợp FormFieldWrapper có label nằm bên trái
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

  const defaultOptions = [
    { value: 'CYCY', label: 'CY/CY' },
    { value: 'CFSCFS', label: 'CFS/CFS' },
    { value: 'DOOR', label: 'DOOR TO DOOR' },
  ]
  const options = props.options && props.options.length > 0 ? props.options : defaultOptions
  const [selectedVal, setSelectedVal] = useState(props.value || options[0]?.value || '')

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
        <select
          disabled={props.disabled}
          value={selectedVal}
          className="w-full px-3 py-1.5 pr-8 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer disabled:opacity-50"
          onChange={(e) => {
            setSelectedVal(e.target.value)
            if (!isEditing) {
              triggerComponentEvent(node.events, 'change', props.label || 'Chọn mục', blFileName, {
                componentId: node.id,
                value: e.target.value,
              })
            }
          }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </FormFieldWrapper>
  )
}

