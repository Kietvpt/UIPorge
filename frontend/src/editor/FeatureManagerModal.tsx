import React, { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  Layers,
  Search,
  Plus,
  Sliders,
  Copy,
  Trash2,
  X,
  ChevronDown,
  ChevronRight,
  Folder,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Edit,
} from 'lucide-react'
import { useEditorStore } from '@/store/editorStore'
import { deletePage } from '@/api/pagesApi'
import type { FeaturePage } from '@/types/schema'

interface FeatureManagerModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export const FeatureManagerModal: React.FC<FeatureManagerModalProps> = ({
  isOpen: propIsOpen,
  onClose: propOnClose,
}) => {
  const storeIsOpen = useEditorStore((s) => s.isFeatureManagerOpen)
  const closeStoreModal = useEditorStore((s) => s.closeFeatureManager)
  const features = useEditorStore((s) => s.features)
  const addFeature = useEditorStore((s) => s.addFeature)
  const deleteFeature = useEditorStore((s) => s.deleteFeature)
  const cloneFeature = useEditorStore((s) => s.cloneFeature)
  const toggleFeatureActive = useEditorStore((s) => s.toggleFeatureActive)
  const openFeatureProperties = useEditorStore((s) => s.openFeatureProperties)
  const updateFeatureProperties = useEditorStore((s) => s.updateFeatureProperties)

  const isOpen = propIsOpen !== undefined ? propIsOpen : storeIsOpen

  const handleClose = () => {
    if (propOnClose) propOnClose()
    closeStoreModal()
  }

  // Filter & Search states
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'group'>('all')
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({})

  // Add Feature Modal sub-state
  const [isAdding, setIsAdding] = useState(false)
  const [newName, setNewName] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newParentId, setNewParentId] = useState<string>('')
  const [newIsGroup, setNewIsGroup] = useState(false)
  const [newIcon, setNewIcon] = useState('Layers')

  const toggleGroupCollapse = (id: string) => {
    setCollapsedGroups((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Hierarchical list calculation
  interface FlatFeatureItem {
    feature: FeaturePage
    depth: number
    hasChildren: boolean
    isCollapsed: boolean
  }

  const hierarchicalFeatures = useMemo(() => {
    const result: FlatFeatureItem[] = []

    // Group features by parentId
    const parentMap = new Map<string | null, FeaturePage[]>()
    for (const f of features) {
      const pid = f.parentId || null
      if (!parentMap.has(pid)) parentMap.set(pid, [])
      parentMap.get(pid)!.push(f)
    }

    // Sort by order ascending
    for (const list of parentMap.values()) {
      list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    }

    const traverse = (parentId: string | null, depth = 0) => {
      const children = parentMap.get(parentId) || []
      for (const item of children) {
        const itemChildren = parentMap.get(item.id) || []
        const hasChildren = itemChildren.length > 0
        const isCollapsed = Boolean(collapsedGroups[item.id])

        // Filter condition
        const matchSearch =
          !searchTerm.trim() ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.code && item.code.toLowerCase().includes(searchTerm.toLowerCase())) ||
          item.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.entityName && item.entityName.toLowerCase().includes(searchTerm.toLowerCase()))

        let matchStatus = true
        if (statusFilter === 'active') matchStatus = item.active !== false
        else if (statusFilter === 'inactive') matchStatus = item.active === false
        else if (statusFilter === 'group') matchStatus = Boolean(item.isGroup)

        if (matchSearch && matchStatus) {
          result.push({
            feature: item,
            depth,
            hasChildren,
            isCollapsed,
          })
        }

        if (hasChildren && !isCollapsed) {
          traverse(item.id, depth + 1)
        }
      }
    }

    // Traverse from root items (parentId is null or parentId not in features)
    const validIds = new Set(features.map((f) => f.id))
    const rootItems = features.filter((f) => !f.parentId || !validIds.has(f.parentId))
    rootItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

    for (const root of rootItems) {
      const rootChildren = parentMap.get(root.id) || []
      const hasChildren = rootChildren.length > 0
      const isCollapsed = Boolean(collapsedGroups[root.id])

      const matchSearch =
        !searchTerm.trim() ||
        root.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (root.title && root.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (root.code && root.code.toLowerCase().includes(searchTerm.toLowerCase())) ||
        root.route.toLowerCase().includes(searchTerm.toLowerCase())

      let matchStatus = true
      if (statusFilter === 'active') matchStatus = root.active !== false
      else if (statusFilter === 'inactive') matchStatus = root.active === false
      else if (statusFilter === 'group') matchStatus = Boolean(root.isGroup)

      if (matchSearch && matchStatus) {
        result.push({
          feature: root,
          depth: 0,
          hasChildren,
          isCollapsed,
        })
      }

      if (hasChildren && !isCollapsed) {
        traverse(root.id, 1)
      }
    }

    return result
  }, [features, collapsedGroups, searchTerm, statusFilter])

  // Handle Add Feature Submit
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim()) return

    const newId = addFeature(newName.trim(), newIcon, newParentId || null, newIsGroup)
    if (newTitle.trim()) {
      updateFeatureProperties(newId, { title: newTitle.trim() })
    }

    setIsAdding(false)
    setNewName('')
    setNewTitle('')
    setNewParentId('')
    setNewIsGroup(false)
  }

  // Handle Order adjustment
  const handleShiftOrder = (feat: FeaturePage, delta: number) => {
    const currOrder = feat.order ?? 0
    const nextOrder = Math.max(0, currOrder + delta)
    updateFeatureProperties(feat.id, { order: nextOrder })
  }

  // Handle Delete
  const handleDelete = async (feat: FeaturePage) => {
    if (confirm(`Bạn có chắc chắn muốn xóa Feature "${feat.title || feat.name}"?`)) {
      try {
        await deletePage(feat.id)
      } catch {}
      deleteFeature(feat.id)
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none">
      <div className="w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative">
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080e1a] border-b border-blue-600/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base text-white tracking-wide flex items-center gap-2">
                Quản lý Tính năng & Menu (Feature Manager)
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800/60 font-mono">
                  {features.length} features
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Quản lý phân tầng cây Menu, trạng thái hiển thị và thông tin cấu hình toàn hệ thống
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>+ Thêm Feature mới</span>
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-slate-800 bg-[#090f1e]">
          <div className="relative flex-1 min-w-[280px] max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo Tên, Tiêu đề, Mã, Route, Entity..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-800/90 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Lọc:</span>
            {(['all', 'active', 'inactive', 'group'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setStatusFilter(mode)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  statusFilter === mode
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/70 text-slate-400 hover:text-slate-200'
                }`}
              >
                {mode === 'all' && 'Tất cả'}
                {mode === 'active' && 'Đang hoạt động'}
                {mode === 'inactive' && 'Ngưng hoạt động'}
                {mode === 'group' && 'Nhóm cha'}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Hierarchical Table */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 shadow-inner">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#080e1b] border-b border-slate-800 text-slate-400 font-semibold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Cấu trúc Menu / Tên Feature</th>
                    <th className="py-3 px-3">Mã (Code)</th>
                    <th className="py-3 px-3">Đường dẫn (Route)</th>
                    <th className="py-3 px-3">Cấp cha</th>
                    <th className="py-3 px-3 text-center">Thứ tự</th>
                    <th className="py-3 px-3 text-center">Loại</th>
                    <th className="py-3 px-3 text-center">Hiển thị Leftbar</th>
                    <th className="py-3 px-3 text-center">Trạng thái</th>
                    <th className="py-3 px-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {hierarchicalFeatures.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="py-10 text-center text-slate-500">
                        Không tìm thấy Feature nào phù hợp
                      </td>
                    </tr>
                  ) : (
                    hierarchicalFeatures.map(({ feature: feat, depth, hasChildren, isCollapsed }) => {
                      const isActive = feat.active !== false
                      const isGroupItem = Boolean(feat.isGroup)

                      return (
                        <tr
                          key={feat.id}
                          onDoubleClick={() => openFeatureProperties(feat.id)}
                          className="hover:bg-blue-600/10 cursor-pointer transition-colors group"
                          title="Nhấp đúp chuột để mở thuộc tính Feature"
                        >
                          <td className="py-2.5 px-4">
                            <div
                              className="flex items-center gap-2"
                              style={{ paddingLeft: `${depth * 24}px` }}
                            >
                              {hasChildren ? (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleGroupCollapse(feat.id)
                                  }}
                                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer"
                                >
                                  {isCollapsed ? (
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  ) : (
                                    <ChevronDown className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              ) : (
                                <span className="w-5" />
                              )}

                              <div
                                className={`p-1.5 rounded-lg shrink-0 ${
                                  isGroupItem
                                    ? 'bg-amber-500/20 text-amber-400'
                                    : 'bg-slate-800 text-slate-400 group-hover:text-blue-400'
                                }`}
                              >
                                {isGroupItem ? (
                                  <Folder className="w-4 h-4" />
                                ) : (
                                  <Layers className="w-4 h-4" />
                                )}
                              </div>

                              <div className="truncate">
                                <span className="font-bold text-slate-200 group-hover:text-white text-xs block">
                                  {feat.title || feat.name}
                                </span>
                                {feat.title && feat.title !== feat.name && (
                                  <span className="text-[10px] text-slate-500 block truncate">
                                    {feat.name}
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>

                          <td className="py-2.5 px-3 font-mono text-[11px] text-amber-300">
                            {feat.code ? `#${feat.code}` : '-'}
                          </td>

                          <td className="py-2.5 px-3 font-mono text-[11px] text-slate-400">
                            {feat.route}
                          </td>

                          <td className="py-2.5 px-3">
                            <select
                              value={feat.parentId || ''}
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => {
                                e.stopPropagation()
                                const newPid = e.target.value.trim() ? e.target.value.trim() : null
                                updateFeatureProperties(feat.id, { parentId: newPid })
                              }}
                              className="px-2 py-1 bg-slate-800/90 border border-slate-700/80 rounded text-[11px] text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer max-w-[130px] truncate"
                              title="Thay đổi Cấp cha (Chọn 'Gốc' để xóa cấp cha)"
                            >
                              <option value="">-- Gốc (Không cha) --</option>
                              {features
                                .filter((f) => f.id !== feat.id && f.isGroup)
                                .map((grp) => (
                                  <option key={grp.id} value={grp.id}>
                                    📁 {grp.title || grp.name}
                                  </option>
                                ))}
                              {features
                                .filter((f) => f.id !== feat.id && !f.isGroup)
                                .map((scr) => (
                                  <option key={scr.id} value={scr.id}>
                                    📄 {scr.title || scr.name}
                                  </option>
                                ))}
                            </select>
                          </td>

                          <td className="py-2.5 px-3 text-center">
                            <div className="flex items-center justify-center gap-1">
                              <span className="font-mono text-xs w-6">{feat.order ?? 0}</span>
                              <div className="flex flex-col opacity-60 group-hover:opacity-100">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleShiftOrder(feat, -1)
                                  }}
                                  className="p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                                  title="Giảm thứ tự (Lên trên)"
                                >
                                  <ArrowUp className="w-3 h-3" />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleShiftOrder(feat, 1)
                                  }}
                                  className="p-0.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                                  title="Tăng thứ tự (Xuống dưới)"
                                >
                                  <ArrowDown className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </td>

                          <td className="py-2.5 px-3 text-center">
                            {isGroupItem ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60">
                                Nhóm Menu
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60">
                                Màn hình
                              </span>
                            )}
                          </td>

                          {/* Cột Hiển thị Leftbar (isMenu) - Cho phép bật/tắt nhanh màn hình mở theo điều kiện */}
                          <td className="py-2.5 px-3 text-center">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                const newIsMenu = feat.isMenu !== undefined ? !feat.isMenu : false
                                updateFeatureProperties(feat.id, { isMenu: newIsMenu })
                              }}
                              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${
                                feat.isMenu !== false
                                  ? 'bg-blue-950/80 text-blue-300 border border-blue-800/60 hover:bg-blue-900/60'
                                  : 'bg-amber-950/80 text-amber-300 border border-amber-800/60 hover:bg-amber-900/60'
                              }`}
                              title={
                                feat.isMenu !== false
                                  ? 'Bấm để ẩn khỏi Leftbar (dành cho màn hình mở có điều kiện)'
                                  : 'Bấm để hiển thị lên Leftbar'
                              }
                            >
                              {feat.isMenu !== false ? (
                                <>
                                  <Eye className="w-3 h-3 text-blue-400" />
                                  <span>Menu Leftbar</span>
                                </>
                              ) : (
                                <>
                                  <EyeOff className="w-3 h-3 text-amber-400" />
                                  <span>Ẩn / Mở ĐK</span>
                                </>
                              )}
                            </button>
                          </td>

                          <td className="py-2.5 px-3 text-center">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleFeatureActive(feat.id)
                              }}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center justify-center gap-1 mx-auto transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 hover:bg-emerald-900'
                                  : 'bg-red-950/80 text-red-400 border border-red-800/60 hover:bg-red-900'
                              }`}
                              title={isActive ? 'Bấm để ngưng kích hoạt' : 'Bấm để kích hoạt lại'}
                            >
                              {isActive ? (
                                <>
                                  <CheckCircle2 className="w-3 h-3" />
                                  <span>Hoạt động</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-3 h-3" />
                                  <span>Đã tắt</span>
                                </>
                              )}
                            </button>
                          </td>

                          <td className="py-2.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  openFeatureProperties(feat.id)
                                }}
                                className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30 transition-all cursor-pointer"
                                title="Thuộc tính Feature (Feature Properties Modal)"
                              >
                                <Sliders className="w-3.5 h-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  cloneFeature(feat.id)
                                }}
                                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all cursor-pointer"
                                title="Nhân bản Feature này"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleDelete(feat)
                                }}
                                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/20 hover:text-red-300 border border-slate-700 transition-all cursor-pointer"
                                title="Xóa Feature này"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add Feature Modal Popup */}
        {isAdding && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <form
              onSubmit={handleAddSubmit}
              className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-blue-400" /> Thêm Feature Mới
                </h3>
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Tên Feature:</label>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="Ví dụ: SHIPMENTS, FCL Import..."
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Tiêu đề (Menu Label):</label>
                  <input
                    type="text"
                    placeholder="Để trống sẽ lấy theo Tên Feature"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Cấp cha (Thư mục nhóm):</label>
                  <select
                    value={newParentId}
                    onChange={(e) => setNewParentId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">-- Cấp gốc (Không có cha) --</option>
                    {features
                      .filter((f) => f.isGroup)
                      .map((grp) => (
                        <option key={grp.id} value={grp.id}>
                          📁 {grp.title || grp.name}
                        </option>
                      ))}
                    {features
                      .filter((f) => !f.isGroup)
                      .map((scr) => (
                        <option key={scr.id} value={scr.id}>
                          📄 {scr.title || scr.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="text-slate-300 font-semibold">Tạo dạng Thư mục Nhóm cha:</label>
                  <input
                    type="checkbox"
                    checked={newIsGroup}
                    onChange={(e) => setNewIsGroup(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0 accent-blue-600 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer"
                >
                  Tạo Mới
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}
