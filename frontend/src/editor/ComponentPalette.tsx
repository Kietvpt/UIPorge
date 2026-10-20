import React from 'react'
import { useEditorStore } from '@/store/editorStore'
import type { ComponentType, ComponentNode } from '@/types/schema'
import { Square, Type, FileText, Table as TableIcon, Box, Plus } from 'lucide-react'

interface ComponentDefinition {
  type: ComponentType
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  defaultProps: Record<string, unknown>
  defaultStyle: Record<string, string>
}

const AVAILABLE_COMPONENTS: ComponentDefinition[] = [
  {
    type: 'Button',
    name: 'Nút bấm (Button)',
    description: 'Kích hoạt hành động & sự kiện',
    icon: Square,
    defaultProps: { label: 'Nút mới', variant: 'primary', size: 'md' },
    defaultStyle: {},
  },
  {
    type: 'TextBox',
    name: 'Ô nhập liệu (TextBox)',
    description: 'Trường nhập văn bản đơn hàng',
    icon: Type,
    defaultProps: { label: 'Tên trường', placeholder: 'Nhập giá trị...', required: false },
    defaultStyle: {},
  },
  {
    type: 'Label',
    name: 'Nhãn chữ (Label)',
    description: 'Tiêu đề và văn bản mô tả',
    icon: FileText,
    defaultProps: { label: 'Tiêu đề khối' },
    defaultStyle: { fontSize: '16px', fontWeight: 'bold' },
  },
  {
    type: 'Container',
    name: 'Khoảng Trắng (Container)',
    description: 'Bố cục Flexbox hoặc CSS Grid',
    icon: Box,
    defaultProps: {
      layoutMode: 'flex',
      flexConfig: { direction: 'row', wrap: 'wrap', gap: '16px' },
    },
    defaultStyle: { padding: '16px', minHeight: '100px' },
  },
  {
    type: 'Table',
    name: 'Bảng dữ liệu (Table)',
    description: 'Bảng hiển thị danh sách nghiệp vụ',
    icon: TableIcon,
    defaultProps: {
      columns: [
        { key: 'id', title: 'Mã', width: '80px' },
        { key: 'name', title: 'Tên' },
        { key: 'status', title: 'Trạng thái' },
      ],
    },
    defaultStyle: {},
  },
]

export const ComponentPalette: React.FC = () => {
  const addComponent = useEditorStore((s) => s.addComponent)
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const selection = useEditorStore((s) => s.selection)

  const activeFeature = features.find((f) => f.id === activeFeatureId)

  const findNode = (nodes: ComponentNode[], id: string | null): ComponentNode | null => {
    if (!id) return null
    for (const node of nodes) {
      if (node.id === id) return node
      if (node.children) {
        const found = findNode(node.children, id)
        if (found) return found
      }
    }
    return null
  }

  const handleAddComponent = (def: ComponentDefinition) => {
    const selected = findNode(activeFeature?.components || [], selection.componentId)

    // Nếu chọn Container: thêm vào trong Container.
    // Nếu chọn component lá (Button, Label...): thêm cùng cấp (dùng parentId của node đó).
    let targetParentId: string | null = null
    if (selected) {
      if (selected.type === 'Container') {
        targetParentId = selected.id
      } else {
        targetParentId = selected.parentId || null
      }
    }

    const newComponent: ComponentNode = {
      id: `${def.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: def.type,
      parentId: targetParentId,
      pageId: activeFeatureId,
      props: { ...def.defaultProps },
      style: { ...def.defaultStyle },
      events: [],
      order: 1,
    }

    addComponent(newComponent, targetParentId)
  }

  return (
    <div className="w-64 border-r border-slate-800 bg-slate-900 flex flex-col h-full shrink-0 select-none">
      <div className="p-3.5 border-b border-slate-800">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Component Palette
        </h2>
        <p className="text-[11px] text-slate-500 mt-0.5">Bấm để thêm vào vị trí đang chọn</p>
      </div>

      <div className="p-3 space-y-2 overflow-y-auto flex-1">
        {AVAILABLE_COMPONENTS.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.type}
              type="button"
              onClick={() => handleAddComponent(item)}
              className="w-full text-left p-2.5 rounded-lg border border-slate-800 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/20 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200 group-hover:text-white">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500 line-clamp-1">{item.description}</div>
                </div>
              </div>
              <Plus className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
