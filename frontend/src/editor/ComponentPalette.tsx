import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { useEditorStore } from '@/store/editorStore'
import type { ComponentType, ComponentNode } from '@/types/schema'
import { Square, Type, FileText, Table as TableIcon, Box, GripVertical, Plus } from 'lucide-react'

export interface ComponentDefinition {
  type: ComponentType
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  defaultProps: Record<string, unknown>
  defaultStyle: Record<string, string>
}

export const AVAILABLE_COMPONENTS: ComponentDefinition[] = [
  {
    type: 'Container',
    name: 'Khoảng Trắng (Container)',
    description: 'Bố cục linh hoạt Flexbox hoặc Grid',
    icon: Box,
    defaultProps: {
      layoutMode: 'flex',
      flexConfig: { direction: 'row', wrap: 'wrap', gap: '16px', justify: 'flex-start', align: 'stretch' },
    },
    defaultStyle: { padding: '16px', minHeight: '120px' },
  },
  {
    type: 'Button',
    name: 'Nút bấm (Button)',
    description: 'Kích hoạt hành động & sự kiện click',
    icon: Square,
    defaultProps: { label: 'Nút bấm', variant: 'primary', size: 'md' },
    defaultStyle: {},
  },
  {
    type: 'TextBox',
    name: 'Ô nhập liệu (TextBox)',
    description: 'Nhập thông tin văn bản người dùng',
    icon: Type,
    defaultProps: { label: 'Tên trường', placeholder: 'Nhập giá trị...' },
    defaultStyle: {},
  },
  {
    type: 'Label',
    name: 'Nhãn chữ (Label)',
    description: 'Tiêu đề và nội dung tĩnh',
    icon: FileText,
    defaultProps: { label: 'Tiêu đề khối' },
    defaultStyle: { fontSize: '16px', fontWeight: 'bold' },
  },
  {
    type: 'Table',
    name: 'Bảng dữ liệu (Table)',
    description: 'Bảng danh sách bản ghi nghiệp vụ',
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

interface PaletteItemProps {
  item: ComponentDefinition
  onClick: (def: ComponentDefinition) => void
  isEditing: boolean
}

const PaletteItem: React.FC<PaletteItemProps> = ({ item, onClick, isEditing }) => {
  const Icon = item.icon

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette-${item.type}`,
    disabled: !isEditing,
    data: {
      isPaletteItem: true,
      type: item.type,
      name: item.name,
      defaultProps: item.defaultProps,
      defaultStyle: item.defaultStyle,
    },
  })

  return (
    <div
      ref={setNodeRef}
      className={`relative group rounded-xl border transition-all select-none ${
        isDragging
          ? 'opacity-40 border-blue-500 bg-blue-950/30'
          : 'border-slate-800 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-700'
      }`}
    >
      <div className="flex items-center justify-between p-2.5">
        {/* Click area */}
        <button
          type="button"
          onClick={() => onClick(item)}
          className="flex-1 flex items-center gap-2.5 text-left cursor-pointer"
          title="Bấm để thêm vào vị trí đang chọn"
        >
          <div className="p-2 rounded-lg bg-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/20 transition-colors shrink-0">
            <Icon className="w-4 h-4" />
          </div>
          <div className="truncate">
            <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
              {item.name}
            </div>
            <div className="text-[10px] text-slate-400 truncate mt-0.5">
              {item.description}
            </div>
          </div>
        </button>

        {/* Drag handle */}
        {isEditing && (
          <div
            {...attributes}
            {...listeners}
            className="p-1.5 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-slate-700/50 cursor-grab active:cursor-grabbing transition-colors ml-1"
            title="Kéo & thả vào giao diện"
          >
            <GripVertical className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  )
}

interface ComponentPaletteProps {
  isEditing?: boolean
}

export const ComponentPalette: React.FC<ComponentPaletteProps> = ({ isEditing = true }) => {
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
    // Nếu chọn component lá (Button, Label...): thêm cùng cấp.
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
    <div className="flex flex-col h-full select-none">
      <div className="p-3 border-b border-slate-800 bg-slate-900/60">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
          <span>Thành phần giao diện</span>
          <span className="text-[10px] text-blue-400 font-normal">Kéo hoặc Click</span>
        </h2>
        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
          ✋ Kéo thả trực tiếp vào màn hình hoặc 🖱️ bấm để thêm nhanh vào khối đang chọn.
        </p>
      </div>

      <div className="p-3 space-y-2 overflow-y-auto flex-1">
        {AVAILABLE_COMPONENTS.map((item) => (
          <PaletteItem
            key={item.type}
            item={item}
            onClick={handleAddComponent}
            isEditing={isEditing}
          />
        ))}
      </div>
    </div>
  )
}
