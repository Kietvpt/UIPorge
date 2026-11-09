import React from 'react'
import { useNavigationEngine } from '@/core/engines/navigationEngine'
import { useEditorStore } from '@/store/editorStore'
import {
  Layers,
  X,
  FileText,
  Ship,
  Box,
  Plus,
} from 'lucide-react'

export const WorkspaceTabBar: React.FC = () => {
  const openTabs = useNavigationEngine((s) => s.openTabs)
  const activeTabId = useNavigationEngine((s) => s.activeTabId)
  const setActiveTab = useNavigationEngine((s) => s.setActiveTab)
  const closeTab = useNavigationEngine((s) => s.closeTab)
  const setActiveFeature = useEditorStore((s) => s.setActiveFeature)

  if (openTabs.length === 0) return null

  const handleSelectTab = (tabId: string, featureId: string) => {
    setActiveTab(tabId)
    const tab = openTabs.find((t) => t.id === tabId)
    setActiveFeature(featureId, tab?.params?.id ?? null)
  }

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation()
    closeTab(tabId)
    // Cập nhật lại active feature theo tab kế tiếp
    setTimeout(() => {
      const nextActiveTab = useNavigationEngine.getState().openTabs.find(
        (t) => t.id === useNavigationEngine.getState().activeTabId
      )
      if (nextActiveTab) {
        setActiveFeature(nextActiveTab.featureId, nextActiveTab.params?.id ?? null)
      }
    }, 50)
  }

  return (
    <div className="h-9 bg-[#0b1120] border-b border-slate-800/80 px-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 select-none z-20">
      {openTabs.map((tab) => {
        const isActive = tab.id === activeTabId
        return (
          <div
            key={tab.id}
            onClick={() => handleSelectTab(tab.id, tab.featureId)}
            className={`group h-7 px-3 rounded-t-md text-xs font-medium flex items-center gap-2 cursor-pointer transition-all border-t border-x ${
              isActive
                ? 'bg-slate-900 border-slate-700 text-blue-400 font-semibold shadow-sm shadow-blue-500/10'
                : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
            title={tab.title}
          >
            <Layers className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
            <span className="truncate max-w-[180px]">{tab.title}</span>

            {/* Nút đóng tab (chỉ hiện khi có nhiều hơn 1 tab) */}
            {openTabs.length > 1 && (
              <button
                type="button"
                onClick={(e) => handleCloseTab(e, tab.id)}
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
  )
}

