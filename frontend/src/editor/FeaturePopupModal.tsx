import React from 'react'
import { createPortal } from 'react-dom'
import { useNavigationEngine } from '@/core/engines/navigationEngine'
import { useEditorStore } from '@/store/editorStore'
import { ComponentRenderer } from '@/renderer/Renderer'
import {
  X,
  Maximize2,
  ExternalLink,
  Layers,
  Save,
  CheckCircle,
} from 'lucide-react'

export const FeaturePopupModal: React.FC = () => {
  const activePopup = useNavigationEngine((s) => s.activePopup)
  const closePopup = useNavigationEngine((s) => s.closePopup)
  const openFeature = useNavigationEngine((s) => s.openFeature)
  const features = useEditorStore((s) => s.features)

  if (!activePopup) return null

  const targetFeature = features.find((f) => String(f.id) === String(activePopup.featureId))
  const params = activePopup.params || {}

  const handleOpenAsTab = () => {
    openFeature(activePopup.featureId, activePopup.params, 'Tab', activePopup.title)
    closePopup()
  }

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-5xl rounded-xl border border-blue-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[92vh] relative">
        {/* ── POPUP HEADER ── */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#0b1329] border-b border-blue-600/30 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-100">{activePopup.title}</span>
                {params.id && (
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-mono">
                    ID #{params.id}
                  </span>
                )}
                <span className="px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px]">
                  FeaturePopup
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Màn hình chi tiết hiển thị dưới dạng cửa sổ nổi (Modal Popup)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOpenAsTab}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
              title="Chuyển sang mở dạng Tab đa nhiệm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Chuyển thành Tab</span>
            </button>
            <button
              type="button"
              onClick={() => closePopup()}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Đóng (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── POPUP BODY ── */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {/* Thông tin bản ghi chi tiết */}
          {params && Object.keys(params).length > 0 && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              <div className="text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Tham số dòng (Row Context):</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {Object.entries(params).map(([key, val]) => (
                  <div key={key} className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {key}
                    </span>
                    <span className="font-mono text-cyan-300 truncate block mt-0.5">
                      {String(val ?? '—')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Render các components của Feature nếu có */}
          {targetFeature && targetFeature.components.length > 0 ? (
            <div className="space-y-3">
              {targetFeature.components.map((comp) => (
                <ComponentRenderer
                  key={comp.id}
                  node={comp}
                  isEditing={false}
                  onContextMenu={() => {}}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs italic">
              Nội dung chi tiết của màn hình #{activePopup.featureId} đã được nạp thành công.
            </div>
          )}
        </div>

        {/* ── POPUP FOOTER ── */}
        <div className="px-5 py-3 bg-[#0b1329] border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500 font-mono">
            UIForge Dynamic Navigation Engine
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => closePopup()}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            >
              Đóng
            </button>
            <button
              type="button"
              onClick={() => closePopup({ saved: true })}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Xác nhận & Lưu</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

