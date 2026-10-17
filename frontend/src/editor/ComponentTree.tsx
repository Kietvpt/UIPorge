import React from 'react'
import { useEditorStore } from '@/store/editorStore'
import { Trash2, Box } from 'lucide-react'

export const ComponentTree: React.FC = () => {
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const selection = useEditorStore((s) => s.selection)
  const selectComponent = useEditorStore((s) => s.selectComponent)
  const removeComponent = useEditorStore((s) => s.removeComponent)

  const activeFeature = features.find((f) => f.id === activeFeatureId)

  if (!activeFeature || activeFeature.components.length === 0) {
    return (
      <div className="p-4 text-center text-xs text-slate-500 italic">
        Chưa có component nào được thêm vào feature này.
      </div>
    )
  }

  const renderNodes = (nodes: any[], depth = 0) => {
    return nodes.map((c) => {
      const isSelected = selection.componentId === c.id
      return (
        <div key={c.id} className="space-y-1">
          <div
            onClick={() => selectComponent(c.id)}
            style={{ paddingLeft: `${depth * 14 + 10}px` }}
            className={`flex items-center justify-between pr-2.5 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
              isSelected
                ? 'bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/40'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 truncate">
              <Box className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="truncate">{c.props.label ? String(c.props.label) : c.type}</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider shrink-0">
                ({c.type})
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                removeComponent(c.id)
              }}
              className="text-slate-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
              title="Xóa component"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
          {c.children && c.children.length > 0 && (
            <div className="border-l border-slate-800/80 ml-3">
              {renderNodes(c.children, depth + 1)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <div className="p-2 space-y-1 overflow-y-auto max-h-60 select-none">
      {renderNodes(activeFeature.components)}
    </div>
  )
}
