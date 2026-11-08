import React, { useState } from 'react'
import type { ComponentNode, FlexConfig } from '@/types/schema'
import { Plus } from 'lucide-react'
import { useEditorStore } from '@/store/editorStore'

export interface ForgeTabStackProps {
  parentId: string | null
  order: number
  tabNodes: ComponentNode[]
  isEditing?: boolean
  parentFlexConfig?: FlexConfig
  onContextMenu?: (e: React.MouseEvent, node: ComponentNode) => void
  renderChild?: (child: ComponentNode, flexConfig?: FlexConfig) => React.ReactNode
}

/**
 * 📑 ForgeTabStack: Cơ chế gom nhóm Tab từ các Container con có cùng Order
 * Kiến trúc chuẩn C# Core từ Master:
 * - Mỗi Tab là 1 Container độc lập có thuộc tính `tab = true` (hoặc `isTab = true`).
 * - Các Container có cùng `order` trong cùng container cha sẽ tự động stack thành thanh Tab (như Ảnh 4).
 * - Nhấp vào tab nào sẽ hiển thị nội dung của Container đó.
 * - Nút "+ Thêm Tab" sẽ tạo ra 1 Container anh em mới có cùng order và `tab = true`.
 */
export const ForgeTabStack: React.FC<ForgeTabStackProps> = ({
  parentId,
  order,
  tabNodes,
  isEditing,
  parentFlexConfig,
  renderChild,
}) => {
  const addComponent = useEditorStore((s) => s.addComponent)
  const selectComponent = useEditorStore((s) => s.selectComponent)

  const [activeId, setActiveId] = useState<string>(tabNodes[0]?.id || '')

  // Đảm bảo activeId luôn hợp lệ nếu có tab bị xóa
  const activeNode = tabNodes.find((n) => n.id === activeId) || tabNodes[0]
  const currentActiveId = activeNode?.id || ''

  const handleAddTab = (e: React.MouseEvent) => {
    e.stopPropagation()
    const pageId = tabNodes[0]?.pageId || '2'
    const newId = `tab_${Date.now().toString(36)}`
    const newTabContainer: ComponentNode = {
      id: newId,
      type: 'Container',
      parentId,
      pageId,
      order, // Cùng order để tự động stack vào nhóm này
      props: {
        tab: true,
        isTab: true,
        label: `TAB MỚI ${tabNodes.length + 1}`,
        layoutMode: 'flex',
        flexConfig: {
          direction: 'column',
          wrap: 'wrap',
          justify: 'flex-start',
          align: 'stretch',
          gap: '12px',
        },
      },
      style: {
        width: '100%',
      },
      events: [],
      children: [],
    }

    addComponent(newTabContainer, parentId)
    setActiveId(newId)
    selectComponent(newId)
  }

  return (
    <div
      style={{ width: '100%' }}
      className="w-full flex flex-col my-1 box-border rounded-xl border border-emerald-900/60 bg-slate-900/30 overflow-hidden shadow-md"
    >
      {/* ── THANH TAB HEADER (CHUẨN ERP ẢNH 4) ── */}
      <div className="flex items-center gap-1 border-b border-emerald-800/60 bg-emerald-950/25 px-2 pt-1 select-none overflow-x-auto no-scrollbar">
        {tabNodes.map((tabNode) => {
          const isActive = tabNode.id === currentActiveId
          const label = tabNode.props.label || tabNode.props.title || `Tab #${tabNode.id.slice(-4)}`
          const badge = tabNode.props.badge

          return (
            <button
              key={tabNode.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setActiveId(tabNode.id)
                if (isEditing) {
                  selectComponent(tabNode.id)
                }
              }}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer border-t border-x ${
                isActive
                  ? 'bg-slate-900 text-emerald-400 border-emerald-600/80 shadow-sm'
                  : 'bg-emerald-950/40 text-slate-400 border-transparent hover:text-slate-200 hover:bg-emerald-900/30'
              }`}
            >
              <span>{label}</span>
              {badge !== undefined && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] text-white font-mono bg-amber-600">
                  {String(badge)}
                </span>
              )}
            </button>
          )
        })}

        {isEditing && (
          <button
            type="button"
            onClick={handleAddTab}
            className="px-2.5 py-1 text-slate-400 hover:text-emerald-400 hover:bg-emerald-900/30 rounded text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-1"
            title="Thêm Tab mới vào nhóm này (cùng Order)"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Thêm Tab</span>
          </button>
        )}
      </div>

      {/* ── THÂN TAB (HIỂN THỊ NỘI DUNG CONTAINER ĐANG ACTIVE) ── */}
      <div className="p-3 bg-slate-950/40 min-h-[120px] flex flex-col gap-3">
        {activeNode && renderChild ? (
          renderChild(activeNode, parentFlexConfig)
        ) : (
          <div className="text-center py-6 text-xs text-slate-500 italic select-none">
            Chưa có nội dung cho tab này.
          </div>
        )}
      </div>
    </div>
  )
}
