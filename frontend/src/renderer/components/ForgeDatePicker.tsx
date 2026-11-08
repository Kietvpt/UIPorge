import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { Calendar as CalendarIcon } from 'lucide-react'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { FormFieldWrapper } from './FormFieldWrapper'

/**
 * ForgeDatePicker: Kế thừa Datepicker.cs từ C# Core
 * - Hiển thị định dạng ngày chuẩn DD/MM/YYYY (như S.Date, ETA trong Ảnh 4)
 * - Tích hợp icon Calendar và bộ chọn native / picker
 * - Bọc bởi FormFieldWrapper với Label nằm bên trái
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

  const [dateVal, setDateVal] = useState(props.value || '')

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
      <div className="relative w-full flex items-center">
        <input
          type="date"
          disabled={props.disabled}
          readOnly={isEditing}
          value={dateVal}
          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 [color-scheme:dark]"
          onChange={(e) => {
            setDateVal(e.target.value)
            if (!isEditing) {
              triggerComponentEvent(node.events, 'change', props.label || 'Chọn ngày', blFileName, {
                componentId: node.id,
                value: e.target.value,
              })
            }
          }}
        />
        <CalendarIcon className="w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" />
      </div>
    </FormFieldWrapper>
  )
}

