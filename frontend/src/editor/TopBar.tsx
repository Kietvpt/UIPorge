import React from 'react'
import { useEditorStore } from '@/store/editorStore'
import { Undo2, Redo2, Eye, Edit3, Save } from 'lucide-react'

interface TopBarProps {
  isPreview: boolean
  onTogglePreview: () => void
  onSave: () => void
  isSaving?: boolean
}

export const TopBar: React.FC<TopBarProps> = ({
  isPreview,
  onTogglePreview,
  onSave,
  isSaving = false,
}) => {
  const undo = useEditorStore((s) => s.undo)
  const redo = useEditorStore((s) => s.redo)
  const historyIndex = useEditorStore((s) => s.historyIndex)
  const history = useEditorStore((s) => s.history)

  const canUndo = historyIndex > 0
  const canRedo = historyIndex < history.length - 1

  return (
    <header className="h-12 border-b border-slate-800 bg-slate-900 px-4 flex items-center justify-between shrink-0 select-none">
      <div className="flex items-center gap-2">
        <span className="font-bold text-sm text-white">UIForge</span>
      </div>

      <div className="flex items-center gap-1">
        <button onClick={undo} disabled={!canUndo} className="p-1.5 text-slate-400 hover:text-white">
          <Undo2 className="w-3.5 h-3.5" />
        </button>
        <button onClick={redo} disabled={!canRedo} className="p-1.5 text-slate-400 hover:text-white">
          <Redo2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={onTogglePreview} className="px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300">
          {isPreview ? 'Chế độ chỉnh sửa' : 'Xem trước'}
        </button>
        <button onClick={onSave} disabled={isSaving} className="px-3.5 py-1.5 rounded text-xs bg-blue-600 text-white">
          Lưu
        </button>
      </div>
    </header>
  )
}
