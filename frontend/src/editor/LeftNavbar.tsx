import React, { useState } from 'react'
import { useEditorStore } from '@/store/editorStore'
import { ContextMenu, MenuItem } from './ContextMenu'
import {
  LayoutDashboard,
  Layers,
  Plus,
  Box,
  FileCode,
  Settings,
  MoreVertical,
  Trash2,
  Edit2,
  FolderPlus,
} from 'lucide-react'

export const LeftNavbar: React.FC = () => {
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const setActiveFeature = useEditorStore((s) => s.setActiveFeature)
  const addFeature = useEditorStore((s) => s.addFeature)
  const renameFeature = useEditorStore((s) => s.renameFeature)
  const deleteFeature = useEditorStore((s) => s.deleteFeature)

  // Context Menu State
  const [contextMenu, setContextMenu] = useState<{
    x: number
    y: number
    featureId?: string
  } | null>(null)

  // Modal / Prompt State for Adding / Renaming Feature
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newFeatureName, setNewFeatureName] = useState('')
  const [editingFeature, setEditingFeature] = useState<{ id: string; name: string } | null>(null)

  // Handle right-click on the sidebar background
  const handleSidebarContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
    })
  }

  // Handle right-click on a specific feature item
  const handleItemContextMenu = (e: React.MouseEvent, featureId: string) => {
    e.preventDefault()
    e.stopPropagation()
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      featureId,
    })
  }

  const handleOpenAddModal = () => {
    setNewFeatureName('')
    setIsAddModalOpen(true)
  }

  const handleConfirmAddFeature = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newFeatureName.trim()) return
    addFeature(newFeatureName.trim())
    setIsAddModalOpen(false)
    setNewFeatureName('')
  }

  const handleConfirmRename = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingFeature || !editingFeature.name.trim()) return
    renameFeature(editingFeature.id, editingFeature.name.trim())
    setEditingFeature(null)
  }

  // Context Menu Items
  const menuItems: MenuItem[] = contextMenu?.featureId
    ? [
        {
          label: '➕ Thêm Feature mới',
          icon: FolderPlus,
          onClick: handleOpenAddModal,
        },
        {
          divider: true,
          label: '',
          onClick: () => {},
        },
        {
          label: '✏️ Đổi tên Feature này',
          icon: Edit2,
          onClick: () => {
            const target = features.find((f) => f.id === contextMenu.featureId)
            if (target) setEditingFeature({ id: target.id, name: target.name })
          },
        },
        {
          label: '🗑️ Xóa Feature này',
          icon: Trash2,
          danger: true,
          onClick: () => {
            if (confirm('Bạn có chắc chắn muốn xóa Feature này?')) {
              deleteFeature(contextMenu.featureId!)
            }
          },
        },
      ]
    : [
        {
          label: '➕ Thêm Feature mới (Màn hình mới)',
          icon: FolderPlus,
          onClick: handleOpenAddModal,
        },
      ]

  return (
    <>
      <aside
        onContextMenu={handleSidebarContextMenu}
        className="w-64 border-r border-slate-800 bg-slate-900/90 flex flex-col shrink-0 select-none relative"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Danh mục Features
            </h2>
            <p className="text-[10px] text-slate-500 mt-0.5">
              💡 Chuột phải để thêm feature mới
            </p>
          </div>
          <button
            onClick={handleOpenAddModal}
            className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            title="Thêm Feature mới"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Feature List */}
        <nav className="p-3 space-y-1.5 overflow-y-auto flex-1">
          {features.map((feature, idx) => {
            const isActive = feature.id === activeFeatureId
            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                onContextMenu={(e) => handleItemContextMenu(e, feature.id)}
                className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div
                    className={`p-1.5 rounded-lg shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-blue-400'
                    }`}
                  >
                    {idx === 0 ? <LayoutDashboard className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
                  </div>
                  <span className="truncate">{feature.name}</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleItemContextMenu(e, feature.id)}
                  className={`opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Tùy chọn Feature"
                >
                  <MoreVertical className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/40 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Tổng số: {features.length} features</span>
          <span className="text-[10px] text-slate-500 font-mono">v1.0</span>
        </div>
      </aside>

      {/* Floating Right-Click ContextMenu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          items={menuItems}
          onClose={() => setContextMenu(null)}
        />
      )}

      {/* Modal: Thêm Feature Mới */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <form
            onSubmit={handleConfirmAddFeature}
            className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-2.5 text-slate-100">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400">
                <FolderPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Thêm Feature (Màn hình mới)</h3>
                <p className="text-xs text-slate-400">Tạo một phân hệ giao diện trong phần mềm</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Tên Feature / Màn hình:
              </label>
              <input
                type="text"
                autoFocus
                placeholder="Ví dụ: Quản lý Khách Hàng, Báo Cáo Doanh Thu..."
                value={newFeatureName}
                onChange={(e) => setNewFeatureName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 cursor-pointer"
              >
                Tạo Màn Hình
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Modal: Đổi tên Feature */}
      {editingFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <form
            onSubmit={handleConfirmRename}
            className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <h3 className="text-sm font-bold text-slate-100">Đổi tên Feature</h3>
            <input
              type="text"
              autoFocus
              value={editingFeature.name}
              onChange={(e) => setEditingFeature({ ...editingFeature, name: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setEditingFeature(null)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white cursor-pointer"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
