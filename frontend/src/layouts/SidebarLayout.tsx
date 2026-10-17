import React from 'react'
import type { ComponentNode } from '@/types/schema'
import { ComponentRenderer } from '@/renderer/Renderer'
import { LayoutGrid, PanelRightOpen, PanelRightClose, Layers, Box } from 'lucide-react'

interface SidebarLayoutProps {
  components: ComponentNode[]
  isEditing?: boolean
  showRightPanel?: boolean
  onToggleRightPanel?: () => void
  onAddQuickComponent?: (slot: string) => void
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  components,
  isEditing = false,
  showRightPanel = false,
  onToggleRightPanel,
}) => {
  // Filter components by slot/parent or render sequentially
  const rootComponents = components.filter((c) => !c.parentId)

  return (
    <div className="flex-1 flex overflow-hidden bg-slate-950 text-slate-100">
      {/* ── Left Navbar (Sidebar) ── */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none">
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">
            UI
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wide text-white">App System</h1>
            <p className="text-[11px] text-slate-400">Sidebar Layout v1</p>
          </div>
        </div>

        {/* Navigation Links Mockup */}
        <nav className="p-3 space-y-1 text-sm font-medium">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>Modules</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
          >
            <Box className="w-4 h-4" />
            <span>Entities</span>
          </a>
        </nav>

        <div className="mt-auto p-3 border-t border-slate-800/80">
          <div className="text-xs text-slate-500 text-center">
            UIForge Runtime Frame
          </div>
        </div>
      </aside>

      {/* ── Main Canvas Content Area ── */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-950">
        {/* Top Header inside main view */}
        <header className="h-14 border-b border-slate-800 bg-slate-900/60 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-300">Workspace / Active Screen</span>
          </div>

          {/* User's requested button: Button to toggle right screen/panel */}
          {onToggleRightPanel && (
            <button
              onClick={onToggleRightPanel}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                showRightPanel
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {showRightPanel ? (
                <>
                  <PanelRightClose className="w-4 h-4" />
                  <span>Hide Inspector</span>
                </>
              ) : (
                <>
                  <PanelRightOpen className="w-4 h-4" />
                  <span>Open Inspector Panel</span>
                </>
              )}
            </button>
          )}
        </header>

        {/* Scrollable Canvas for Components */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto space-y-4">
            {rootComponents.length === 0 ? (
              <div className="border-2 border-dashed border-slate-800 rounded-2xl p-12 text-center bg-slate-900/30">
                <Box className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-slate-300 mb-1">Canvas is empty</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                  Add components from the palette on the left panel or click component quick adds.
                </p>
              </div>
            ) : (
              rootComponents.map((node) => (
                <ComponentRenderer key={node.id} node={node} isEditing={isEditing} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
