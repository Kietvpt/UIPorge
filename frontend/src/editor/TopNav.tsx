import React from 'react'
import { useEditorStore } from '@/store/editorStore'
import {
  Undo2,
  Redo2,
  Eye,
  Edit3,
  Save,
  Bell,
  Search,
  Sparkles,
  ChevronDown,
  PanelRightOpen,
  PanelRightClose,
} from 'lucide-react'

interface TopNavProps {
  isPreview: boolean
  onTogglePreview: () => void
  onSave: () => void
  isSaving?: boolean
  showRightPanel: boolean
  onToggleRightPanel: () => void
}

export const TopNav: React.FC<TopNavProps> = ({
  isPreview,
  onTogglePreview,
  onSave,
  isSaving = false,
  showRightPanel,
  onToggleRightPanel,
}) => {
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const undo = useEditorStore((s) => s.undo)
  const redo = useEditorStore((s) => s.redo)
  const historyIndex = useEditorStore((s) => s.historyIndex)
  const history = useEditorStore((s) => s.history)

  const activeFeature = features.find((f) => f.id === activeFeatureId)

  const canUndo = historyIndex > 0
  const canRedo = historyIndex < history.length - 1

  return (
    <header className="h-14 border-b border-slate-800 bg-slate-900/95 px-5 flex items-center justify-between shrink-0 select-none shadow-sm backdrop-blur-sm z-30">
      {/* ── 1. Logo & Brand & Breadcrumb ── */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-black text-white text-sm shadow-md shadow-blue-500/20">
            UF
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-wide text-white">UIForge</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-400 border border-blue-800 font-semibold">
                Enterprise
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Web App Visual Framework</p>
          </div>
        </div>

        <div className="h-5 w-[1px] bg-slate-800" />

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">Feature:</span>
          <span className="font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
            {activeFeature?.name || 'Chưa chọn feature'}
          </span>
        </div>
      </div>

      {/* ── 2. Editor Tools (Undo, Redo, Preview, Save) ── */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
          <button
            onClick={undo}
            disabled={!canUndo}
            className="p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer"
            title="Hoàn tác (Ctrl+Z)"
          >
            <Undo2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            className="p-1.5 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-all cursor-pointer"
            title="Làm lại (Ctrl+Y)"
          >
            <Redo2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={onTogglePreview}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
            isPreview
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
          }`}
        >
          {isPreview ? (
            <>
              <Edit3 className="w-3.5 h-3.5 text-amber-400" />
              <span>Chế độ Thiết Kế</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              <span>Xem Thử Trực Tiếp</span>
            </>
          )}
        </button>

        <button
          onClick={onSave}
          disabled={isSaving}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-50"
        >
          <Save className="w-3.5 h-3.5" />
          <span>{isSaving ? 'Đang lưu...' : 'Lưu Giao Diện'}</span>
        </button>
      </div>

      {/* ── 3. Account Information & Global User Actions ── */}
      <div className="flex items-center gap-3">
        {/* Toggle Inspector button */}
        {!isPreview && (
          <button
            onClick={onToggleRightPanel}
            className={`p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
              showRightPanel
                ? 'bg-blue-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
            }`}
            title={showRightPanel ? 'Ẩn bảng quản lý bên phải' : 'Mở bảng quản lý bên phải'}
          >
            {showRightPanel ? (
              <PanelRightClose className="w-4 h-4" />
            ) : (
              <PanelRightOpen className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Notifications */}
        <button
          className="relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          title="Thông báo hệ thống"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute 1 top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-900" />
        </button>

        <div className="h-5 w-[1px] bg-slate-800" />

        {/* User Account Profile */}
        <div className="flex items-center gap-3 pl-1 pr-2 py-1 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-800 transition-colors cursor-pointer">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-white text-xs shadow-sm">
              AD
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
          </div>

          <div className="text-left leading-tight hidden sm:block">
            <div className="text-xs font-semibold text-slate-100">Nguyễn Văn Admin</div>
            <div className="text-[10px] text-slate-400">System Architect</div>
          </div>

          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </div>
      </div>
    </header>
  )
}
