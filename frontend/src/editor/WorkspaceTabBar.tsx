import React, { useState } from 'react'
import { useNavigationEngine, ActiveTab } from '@/core/engines/navigationEngine'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine } from '@/core/engines/dataEngine'
import {
  Layers,
  X,
  AlertTriangle,
} from 'lucide-react'

export const WorkspaceTabBar: React.FC = () => {
  const openTabs = useNavigationEngine((s) => s.openTabs)
  const activeTabId = useNavigationEngine((s) => s.activeTabId)
  const setActiveTab = useNavigationEngine((s) => s.setActiveTab)
  const closeTab = useNavigationEngine((s) => s.closeTab)
  const setActiveFeature = useEditorStore((s) => s.setActiveFeature)
  const isFormDirty = useDataEngine((s) => s.isFormDirty)
  const markFormClean = useDataEngine((s) => s.markFormClean)

  // Quản lý Modal xác nhận khi đóng tab có dữ liệu chưa lưu (Dirty Tracking Guard)
  const [tabToClose, setTabToClose] = useState<ActiveTab | null>(null)

  if (openTabs.length === 0) return null

  const handleSelectTab = (tabId: string, featureId: string) => {
    setActiveTab(tabId)
    const tab = openTabs.find((t) => t.id === tabId)
    setActiveFeature(featureId, tab?.params?.id ?? null)
  }

  const executeCloseTab = (tabId: string) => {
    closeTab(tabId)
    setTimeout(() => {
      const nextActiveTab = useNavigationEngine.getState().openTabs.find(
        (t) => t.id === useNavigationEngine.getState().activeTabId
      )
      if (nextActiveTab) {
        setActiveFeature(nextActiveTab.featureId, nextActiveTab.params?.id ?? null)
      }
    }, 50)
  }

  const handleCloseTabClick = (e: React.MouseEvent, tab: ActiveTab) => {
    e.stopPropagation()

    // Kiểm tra tab có dữ liệu chưa lưu không
    const dirty = tab.isDirty || (tab.featureId ? isFormDirty(tab.featureId) : false)
    if (dirty) {
      setTabToClose(tab)
      return
    }

    executeCloseTab(tab.id)
  }

  const handleConfirmCloseWithoutSaving = () => {
    if (!tabToClose) return
    if (tabToClose.featureId) {
      markFormClean(tabToClose.featureId)
    }
    executeCloseTab(tabToClose.id)
    setTabToClose(null)
  }

  return (
    <>
      <div className="h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20">
        {openTabs.map((tab) => {
          const isActive = tab.id === activeTabId
          const dirty = tab.isDirty || (tab.featureId ? isFormDirty(tab.featureId) : false)

          return (
            <div
              key={tab.id}
              onClick={() => handleSelectTab(tab.id, tab.featureId)}
              className={`group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${
                isActive
                  ? 'bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10'
                  : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
              title={dirty ? `${tab.title} (Có dữ liệu chưa lưu)` : tab.title}
            >
              <Layers className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
              <span className="truncate max-w-[180px]">{tab.title}</span>

              {/* Chỉ báo trạng thái thay đổi chưa lưu (Dirty Indicator ●) */}
              {dirty && (
                <span
                  className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/80 animate-pulse ml-0.5 shrink-0"
                  title="Có dữ liệu chưa lưu (Dirty)"
                />
              )}

              {/* Nút đóng tab (chỉ hiện khi có nhiều hơn 1 tab) */}
              {openTabs.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => handleCloseTabClick(e, tab)}
                  className="w-4 h-4 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors ml-1 cursor-pointer"
                  title="Đóng tab này"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          )
        })}
      </div>

      {/* ── MODAL XÁC NHẬN KHI ĐÓNG TAB CÓ DỮ LIỆU CHƯA LƯU (DIRTY GUARD) ── */}
      {tabToClose && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 p-4">
          <div className="w-full max-w-md bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-100">
                  Dữ liệu chưa được lưu!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tab <span className="font-semibold text-amber-300">"{tabToClose.title}"</span> có các thay đổi chưa được lưu vào cơ sở dữ liệu. Bạn có chắc chắn muốn đóng tab này không?
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setTabToClose(null)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all cursor-pointer border border-slate-700"
              >
                Tiếp tục chỉnh sửa
              </button>
              <button
                type="button"
                onClick={handleConfirmCloseWithoutSaving}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-md shadow-rose-900/40 border border-rose-400"
              >
                Đóng không lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
