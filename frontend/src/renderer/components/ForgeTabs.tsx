import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { Plus } from 'lucide-react'
import { useEditorStore } from '@/store/editorStore'

export interface TabItem {
  id: string
  label: string
  badge?: string | number
  badgeColor?: string
}

/**
 * ForgeTabs: Thanh điều hướng Tab chuẩn ERP 
 */
export const ForgeTabs: React.FC<ComponentProps> = ({ node, isEditing, children }) => {
  const { props, style } = node
  const updateComponentProps = useEditorStore((s) => s.updateComponentProps)
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const defaultTabs: TabItem[] = [
    { id: 'main', label: 'TAB 1' },
  ]

  const tabs: TabItem[] = (props.tabs as TabItem[]) || defaultTabs
  const [activeTabId, setActiveTabId] = useState<string>(
    (props.activeTabId as string) || tabs[0]?.id || 'main'
  )

  const currentTab = (props.activeTabId as string) || activeTabId || tabs[0]?.id || 'main'

  return (
    <div
      className="w-full flex flex-col"
      style={{
        width: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      {/* Tab Navigation Header Bar */}
      <div className="flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/20 px-2 pt-1 select-none overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === currentTab
          return (
            <button
              key={tab.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveTabId(tab.id)
                updateComponentProps(node.id, { activeTabId: tab.id })
              }}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${isActive
                ? 'bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm'
                : 'bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30'
                }`}
            >
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono ${tab.badgeColor || 'bg-amber-600'}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          )
        })}

        {isEditing && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              const newId = `tab_${Date.now().toString(36)}`
              const updatedTabs = [...tabs, { id: newId, label: `Tab Mới ${tabs.length + 1}` }]
              updateComponentProps(node.id, { tabs: updatedTabs, activeTabId: newId })
              setActiveTabId(newId)
            }}
            className="px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            title="Thêm Tab mới"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Thêm Tab</span>
          </button>
        )}
      </div>

      {/* Tab Content Body */}
      <div className="p-3 bg-slate-900/30 rounded-b-xl border-x border-b border-slate-800 min-h-[120px] flex flex-col gap-3">
        {children}
      </div>
    </div>
  )
}
