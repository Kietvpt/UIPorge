import React, { useState, useMemo } from 'react'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useEditorStore } from '@/store/editorStore'
import { useAuthStore } from '@/store/authStore'
import { useNavigationEngine } from '@/core/engines/navigationEngine'
import { ContextMenu, MenuItem } from './ContextMenu'
import { FeatureManagerModal } from './FeatureManagerModal'
import { FeaturePropertiesModal } from './FeaturePropertiesModal'
import type { FeaturePage } from '@/types/schema'
import {
  LayoutDashboard,
  Layers,
  MoreVertical,
  Plus,
  Sliders,
  Copy,
  Trash2,
  FolderPlus,
  Ship,
  Truck,
  Folder,
  ChevronDown,
  ChevronRight,
  GripVertical,
  FileText,
  DollarSign,
  Package,
  Plane,
  XCircle,
  Menu,
} from 'lucide-react'

interface LeftNavbarProps {
  width?: number
}

// ── Icon Helper ──
const renderFeatureIcon = (iconName?: string, isGroup?: boolean, isActive?: boolean) => {
  const cls = `w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`
  const lower = (iconName || '').toLowerCase()

  if (isGroup) {
    if (lower.includes('truck') || lower.includes('shipment')) return <Truck className="w-4 h-4 shrink-0 text-amber-400" />
    if (lower.includes('price') || lower.includes('sale') || lower.includes('dollar')) return <DollarSign className="w-4 h-4 shrink-0 text-emerald-400" />
    if (lower.includes('doc')) return <FileText className="w-4 h-4 shrink-0 text-blue-400" />
    return <Folder className="w-4 h-4 shrink-0 text-amber-400" />
  }

  if (lower.includes('ship') || lower.includes('fcl') || lower.includes('lcl')) return <Ship className={cls} />
  if (lower.includes('plane') || lower.includes('air')) return <Plane className={cls} />
  if (lower.includes('pack') || lower.includes('box')) return <Package className={cls} />
  if (lower.includes('doc') || lower.includes('bill') || lower.includes('invoice')) return <FileText className={cls} />
  if (lower.includes('dash')) return <LayoutDashboard className={cls} />
  return <Layers className={cls} />
}

// ── Sortable Row Item Component ──
interface SortableFeatureItemProps {
  feature: FeaturePage
  depth: number
  hasChildren: boolean
  isCollapsed: boolean
  isActive: boolean
  childCount?: number
  isDev?: boolean
  onToggleCollapse: (e: React.MouseEvent) => void
  onSelect: () => void
  onContextMenu: (e: React.MouseEvent) => void
}

const SortableFeatureItem: React.FC<SortableFeatureItemProps> = ({
  feature,
  depth,
  hasChildren,
  isCollapsed,
  isActive,
  childCount = 0,
  isDev = true,
  onToggleCollapse,
  onSelect,
  onContextMenu,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: feature.id,
    disabled: !isDev,
  })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.35 : 1,
    paddingLeft: `${Math.max(8, depth * 18 + 8)}px`,
  }

  const isGroup = Boolean(feature.isGroup)
  const displayBadge = feature.badge ?? (isGroup && childCount > 0 ? childCount : null)

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={onSelect}
      onContextMenu={isDev ? onContextMenu : (e) => e.preventDefault()}
      className={`group relative flex items-center justify-between pr-2 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all select-none ${
        isActive
          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-500'
          : isGroup
          ? 'bg-slate-800/40 hover:bg-slate-800/80 text-slate-200 border border-slate-700/30'
          : 'text-slate-300 hover:bg-slate-800/70 hover:text-white border border-transparent'
      }`}
    >
      <div className="flex items-center gap-2 truncate flex-1 min-w-0">
        {/* Drag Handle (Chỉ dành cho Dev) */}
        {isDev && (
          <button
            type="button"
            {...attributes}
            {...listeners}
            onClick={(e) => e.stopPropagation()}
            className="opacity-0 group-hover:opacity-100 p-0.5 -ml-1 text-slate-500 hover:text-slate-300 cursor-grab active:cursor-grabbing transition-opacity shrink-0"
            title="Kéo để di chuyển vị trí hoặc kéo vào nhóm cha"
          >
            <GripVertical className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Expand / Collapse Chevron for Groups */}
        {hasChildren ? (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="p-0.5 rounded hover:bg-black/20 text-slate-400 hover:text-white transition-colors shrink-0"
          >
            {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        ) : (
          <span className="w-4 shrink-0" />
        )}

        {/* Icon */}
        <div
          className={`p-1 rounded-lg shrink-0 ${
            isActive
              ? 'bg-white/20 text-white'
              : isGroup
              ? 'bg-amber-500/10'
              : 'bg-slate-800 text-slate-400'
          }`}
        >
          {renderFeatureIcon(feature.icon, isGroup, isActive)}
        </div>

        {/* Name / Title */}
        <span
          className={`truncate ${
            isGroup ? 'font-bold uppercase tracking-wider text-[11px] text-slate-100' : 'font-medium'
          }`}
        >
          {feature.title || feature.name}
        </span>
      </div>

      {/* Right side items: Badge and More button */}
      <div className="flex items-center gap-1.5 shrink-0 pl-1">
        {displayBadge !== null && (
          <span
            className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              isActive
                ? 'bg-white text-blue-700'
                : 'bg-amber-500 text-slate-950 shadow-sm'
            }`}
          >
            {displayBadge}
          </span>
        )}

        {/* Nút tùy chọn feature (Chỉ dành cho Dev) */}
        {isDev && (
          <button
            type="button"
            onClick={onContextMenu}
            className={`opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-black/20 transition-opacity ${
              isActive ? 'text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Tùy chọn Feature"
          >
            <MoreVertical className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}

// ── Main LeftNavbar Component ──
export const LeftNavbar: React.FC<LeftNavbarProps> = ({ width }) => {
  const user = useAuthStore((s) => s.user)
  const isDev = user?.role === 'Dev'
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const setActiveFeature = useEditorStore((s) => s.setActiveFeature)
  const addFeature = useEditorStore((s) => s.addFeature)
  const cloneFeature = useEditorStore((s) => s.cloneFeature)
  const toggleFeatureActive = useEditorStore((s) => s.toggleFeatureActive)
  const openFeatureManager = useEditorStore((s) => s.openFeatureManager)
  const openFeatureProperties = useEditorStore((s) => s.openFeatureProperties)
  const reorderFeatures = useEditorStore((s) => s.reorderFeatures)

  // Chỉ hiển thị các Feature có active !== false và isMenu !== false (chuẩn menu hệ thống)
  // và loại trừ các màn hình chi tiết (hidden/isDetail) trừ khi là trang đang mở
  const visibleFeatures = useMemo(() => {
    return features.filter((f) => {
      if (f.active === false) return false
      if (f.isMenu === false) return false
      if (f.hidden || f.isDetail) return f.id === activeFeatureId
      return true
    })
  }, [features, activeFeatureId])

  // Trạng thái đóng/mở của các nhóm cha
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({})

  // Context Menu State
  const [contextMenu, setContextMenu] = useState<{
    x: number
    y: number
    featureId?: string
  } | null>(null)

  // Modal thêm mới Feature nhanh
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newFeatureName, setNewFeatureName] = useState('')
  const [newFeatureParentId, setNewFeatureParentId] = useState<string>('')
  const [newFeatureIsGroup, setNewFeatureIsGroup] = useState(false)

  // DnD Dragging item state for DragOverlay
  const [activeDragId, setActiveDragId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  )

  const toggleGroup = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setCollapsedGroups((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Cấu trúc phân tầng cây Feature hiển thị trên Leftbar
  interface DisplayTreeNode {
    feature: FeaturePage
    depth: number
    hasChildren: boolean
    isCollapsed: boolean
    childCount: number
  }

  const { treeNodes, visibleNodeIds } = useMemo(() => {
    const parentMap = new Map<string | null, FeaturePage[]>()
    for (const f of visibleFeatures) {
      const pid = f.parentId || null
      if (!parentMap.has(pid)) parentMap.set(pid, [])
      parentMap.get(pid)!.push(f)
    }

    // Sắp xếp theo order
    for (const list of parentMap.values()) {
      list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    }

    const nodes: DisplayTreeNode[] = []
    const ids: string[] = []

    const traverse = (parentId: string | null, depth = 0) => {
      const children = parentMap.get(parentId) || []
      for (const item of children) {
        const itemChildren = parentMap.get(item.id) || []
        const hasChildren = itemChildren.length > 0
        const isCollapsed = Boolean(collapsedGroups[item.id])

        nodes.push({
          feature: item,
          depth,
          hasChildren,
          isCollapsed,
          childCount: itemChildren.length,
        })
        ids.push(item.id)

        if (hasChildren && !isCollapsed) {
          traverse(item.id, depth + 1)
        }
      }
    }

    // Các mục ở cấp gốc (parentId is null hoặc không có trong danh sách visible)
    const validIds = new Set(visibleFeatures.map((f) => f.id))
    const rootItems = visibleFeatures.filter((f) => !f.parentId || !validIds.has(f.parentId))
    rootItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

    for (const root of rootItems) {
      const rootChildren = parentMap.get(root.id) || []
      const hasChildren = rootChildren.length > 0
      const isCollapsed = Boolean(collapsedGroups[root.id])

      nodes.push({
        feature: root,
        depth: 0,
        hasChildren,
        isCollapsed,
        childCount: rootChildren.length,
      })
      ids.push(root.id)

      if (hasChildren && !isCollapsed) {
        traverse(root.id, 1)
      }
    }

    return { treeNodes: nodes, visibleNodeIds: ids }
  }, [visibleFeatures, collapsedGroups])

  // Context Menu handlers (Chỉ cho phép tài khoản Dev)
  const handleSidebarContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isDev) return
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleItemContextMenu = (e: React.MouseEvent, featureId: string) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDev) return
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      featureId,
    })
  }

  const handleOpenAddModal = (defaultParentId = '') => {
    setNewFeatureName('')
    setNewFeatureParentId(defaultParentId)
    setNewFeatureIsGroup(false)
    setIsAddModalOpen(true)
  }

  const handleConfirmAddFeature = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newFeatureName.trim()) return

    const newId = addFeature(
      newFeatureName.trim(),
      newFeatureIsGroup ? 'Folder' : 'Layers',
      newFeatureParentId || null,
      newFeatureIsGroup
    )
    setIsAddModalOpen(false)
    setNewFeatureName('')
    if (!newFeatureIsGroup) {
      setActiveFeature(newId, null)
      useNavigationEngine.getState().openFeature(newId, {}, 'Tab', newFeatureName.trim())
    }
  }

  // Xây dựng 5 Items Context Menu CHUẨN XÁC theo Hình 2
  const menuItems: MenuItem[] = useMemo(() => {
    const targetFeat = contextMenu?.featureId
      ? features.find((f) => f.id === contextMenu.featureId)
      : null

    if (targetFeat) {
      return [
        {
          label: '➕ New feature',
          icon: Plus,
          onClick: () => handleOpenAddModal(targetFeat.isGroup ? targetFeat.id : targetFeat.parentId || ''),
        },
        {
          divider: true,
          label: '',
          onClick: () => {},
        },
        {
          label: '🗙 Deactivate this feature',
          icon: XCircle,
          danger: true,
          onClick: () => {
            toggleFeatureActive(targetFeat.id)
          },
        },
        {
          label: '❐ Clone this feature',
          icon: Copy,
          onClick: () => {
            cloneFeature(targetFeat.id)
          },
        },
        {
          divider: true,
          label: '',
          onClick: () => {},
        },
        {
          label: '☰ Manage features',
          icon: Menu,
          onClick: () => openFeatureManager(),
        },
        {
          label: '🔧 Properties',
          icon: Sliders,
          onClick: () => openFeatureProperties(targetFeat.id),
        },
      ]
    }

    return [
      {
        label: '➕ New feature',
        icon: Plus,
        onClick: () => handleOpenAddModal(''),
      },
      {
        divider: true,
        label: '',
        onClick: () => {},
      },
      {
        label: '☰ Manage features',
        icon: Menu,
        onClick: () => openFeatureManager(),
      },
      {
        label: '🔧 Properties',
        icon: Sliders,
        onClick: () => openFeatureProperties(activeFeatureId),
      },
    ]
  }, [contextMenu, features, activeFeatureId, cloneFeature, toggleFeatureActive, openFeatureManager, openFeatureProperties])

  // DnD Handlers
  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragId(String(event.active.id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveDragId(null)
    if (!over || active.id === over.id) return

    const activeId = String(active.id)
    const overId = String(over.id)

    const activeFeat = features.find((f) => f.id === activeId)
    const overFeat = features.find((f) => f.id === overId)
    if (!activeFeat || !overFeat) return

    // Kéo thả đè vào nhóm cha: tự động gán parentId = overFeat.id
    if (overFeat.isGroup && activeFeat.id !== overFeat.id) {
      const groupChildren = features.filter((f) => f.parentId === overFeat.id)
      const nextOrder = groupChildren.length > 0 ? Math.max(...groupChildren.map((c) => c.order ?? 0)) + 1 : 1
      reorderFeatures([
        { id: activeFeat.id, parentId: overFeat.id, order: nextOrder, isGroup: activeFeat.isGroup },
      ])
      // Tự động mở nhóm ra nếu đang đóng
      setCollapsedGroups((prev) => ({ ...prev, [overFeat.id]: false }))
      return
    }

    // Đổi thứ tự cùng cấp hoặc giữa các anh chị em
    const targetParentId = overFeat.parentId || null
    const siblings = features.filter((f) => (f.parentId || null) === targetParentId)
    siblings.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

    const oldIndex = siblings.findIndex((f) => f.id === activeId)
    const newIndex = siblings.findIndex((f) => f.id === overId)

    if (oldIndex !== -1 && newIndex !== -1) {
      const reordered = [...siblings]
      const [moved] = reordered.splice(oldIndex, 1)
      reordered.splice(newIndex, 0, moved)

      const updates = reordered.map((item, idx) => ({
        id: item.id,
        parentId: targetParentId,
        order: idx + 1,
        isGroup: item.isGroup,
      }))
      reorderFeatures(updates)
    } else {
      // Chuyển sang nhánh mới cạnh overFeat
      const newSiblings = [...siblings.filter((f) => f.id !== activeId)]
      const insertIdx = newSiblings.findIndex((f) => f.id === overId)
      if (insertIdx !== -1) {
        newSiblings.splice(insertIdx, 0, { ...activeFeat, parentId: targetParentId })
      } else {
        newSiblings.push({ ...activeFeat, parentId: targetParentId })
      }
      const updates = newSiblings.map((item, idx) => ({
        id: item.id,
        parentId: targetParentId,
        order: idx + 1,
        isGroup: item.id === activeId ? activeFeat.isGroup : item.isGroup,
      }))
      reorderFeatures(updates)
    }
  }

  const activeDraggingFeature = activeDragId ? features.find((f) => f.id === activeDragId) : null

  return (
    <>
      <aside
        onContextMenu={handleSidebarContextMenu}
        style={{ width: width ? `${width}px` : undefined }}
        className="w-64 border-r border-slate-800 bg-[#090e1a] flex flex-col shrink-0 select-none relative"
      >
        {/* ── DANH SÁCH MENU CÂY PHÂN TẦNG VÀ KÉO THẢ DND ── */}
        <nav className="p-2 space-y-1 overflow-y-auto flex-1">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={visibleNodeIds} strategy={verticalListSortingStrategy}>
              {treeNodes.map(({ feature, depth, hasChildren, isCollapsed, childCount }) => {
                const isActive = feature.id === activeFeatureId

                return (
                  <SortableFeatureItem
                    key={feature.id}
                    feature={feature}
                    depth={depth}
                    hasChildren={hasChildren}
                    isCollapsed={isCollapsed}
                    isActive={isActive}
                    childCount={childCount}
                    isDev={isDev}
                    onToggleCollapse={(e) => toggleGroup(feature.id, e)}
                    onSelect={() => {
                      if (feature.isGroup) {
                        // Nhấn vào nhóm cha: đảo trạng thái đóng/mở
                        setCollapsedGroups((prev) => ({ ...prev, [feature.id]: !prev[feature.id] }))
                      } else {
                        // Nhấn vào màn hình con: chuyển trang và mở tab
                        setActiveFeature(feature.id, null)
                        useNavigationEngine
                          .getState()
                          .openFeature(feature.id, {}, 'Tab', feature.title || feature.name)
                      }
                    }}
                    onContextMenu={(e) => handleItemContextMenu(e, feature.id)}
                  />
                )
              })}
            </SortableContext>

            {/* Drag Overlay hiển thị thẻ card khi đang kéo */}
            <DragOverlay>
              {activeDraggingFeature ? (
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white shadow-2xl border border-blue-400 text-xs font-bold opacity-90">
                  <GripVertical className="w-3.5 h-3.5" />
                  <span>{activeDraggingFeature.title || activeDraggingFeature.name}</span>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-800 bg-[#080d17] text-[11px] text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{visibleFeatures.length} hiển thị / {features.length}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Core C# v2.5</span>
        </div>
      </aside>

      {/* Floating Right-Click ContextMenu (Chỉ cho Dev) */}
      {isDev && contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          items={menuItems}
          onClose={() => setContextMenu(null)}
        />
      )}

      {/* Modal Thêm Feature Mới (Chỉ cho Dev) */}
      {isDev && isAddModalOpen && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <form
            onSubmit={handleConfirmAddFeature}
            className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-2.5 text-slate-100">
              <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400">
                <FolderPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Thêm Feature mới</h3>
                <p className="text-xs text-slate-400">Tạo màn hình hoặc nhóm thư mục menu mới</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Tên Feature / Màn hình:
                </label>
                <input
                  type="text"
                  autoFocus
                  required
                  placeholder="Ví dụ: SHIPMENTS, FCL Import..."
                  value={newFeatureName}
                  onChange={(e) => setNewFeatureName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Cấp cha (Thư mục nhóm):
                </label>
                <select
                  value={newFeatureParentId}
                  onChange={(e) => setNewFeatureParentId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                >
                  <option value="">-- Cấp gốc (Không có cha) --</option>
                  {features
                    .filter((f) => f.isGroup)
                    .map((grp) => (
                      <option key={grp.id} value={grp.id}>
                        📁 {grp.title || grp.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="text-xs font-semibold text-slate-300">
                  Tạo dạng Thư mục Nhóm cha:
                </label>
                <input
                  type="checkbox"
                  checked={newFeatureIsGroup}
                  onChange={(e) => setNewFeatureIsGroup(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0 accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer"
              >
                Tạo Feature
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── MOUNT CÁC MODAL QUẢN LÝ TÍNH NĂNG VÀ THUỘC TÍNH (CHỈ CHO DEV) ── */}
      {isDev && <FeatureManagerModal />}
      {isDev && <FeaturePropertiesModal />}
    </>
  )
}
