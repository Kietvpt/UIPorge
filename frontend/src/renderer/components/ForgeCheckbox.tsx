import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { FormFieldWrapper } from './FormFieldWrapper'

/**
 * ForgeCheckbox: Hộp kiểm boolean
 * - Tích hợp FormFieldWrapper có label nằm bên trái
 */
export const ForgeCheckbox: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const currentFeature =
    features.find((f) => String(f.id) === String(node.pageId)) ||
    features.find((f) => String(f.id) === String(activeFeatureId))
  const blFileName = currentFeature?.scriptFile
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const [checked, setChecked] = useState(Boolean(props.value))

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
      <div className="flex items-center h-8">
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={checked}
          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-900 border-slate-700 cursor-pointer disabled:opacity-50"
          onChange={(e) => {
            setChecked(e.target.checked)
            if (!isEditing) {
              triggerComponentEvent(node.events, 'change', props.label || 'Hộp kiểm', blFileName, {
                componentId: node.id,
                value: e.target.checked,
              })
            }
          }}
        />
        {props.placeholder && (
          <span className="ml-2 text-xs text-slate-400 select-none">{props.placeholder}</span>
        )}
      </div>
    </FormFieldWrapper>
  )
}

