import React from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/logic/eventRunner'
import { useEditorStore } from '@/store/editorStore'

// Label Component
export const ForgeLabel: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const currentFeature =
    features.find((f) => String(f.id) === String(node.pageId)) ||
    features.find((f) => String(f.id) === String(activeFeatureId))
  const blFileName = currentFeature?.scriptFile
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  return (
    <span
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
      className="text-sm font-medium text-slate-200 inline-block"
      onClick={(e) => {
        if (!isEditing) {
          triggerComponentEvent(node.events, 'click', props.label || 'Văn bản', blFileName, {
            componentId: node.id,
          })
        } else if (e.ctrlKey || e.metaKey || e.altKey) {
          e.stopPropagation()
          triggerComponentEvent(node.events, 'click', props.label || 'Văn bản', blFileName, {
            componentId: node.id,
          })
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation()
        triggerComponentEvent(node.events, 'dblclick', props.label || 'Văn bản', blFileName, {
          componentId: node.id,
        })
      }}
    >
      {props.label || 'Văn bản tiêu đề'}
    </span>
  )
}
