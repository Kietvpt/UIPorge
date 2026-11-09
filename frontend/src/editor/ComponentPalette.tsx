import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { useEditorStore } from '@/store/editorStore'
import type { ComponentType, ComponentNode } from '@/types/schema'
import {
  Square,
  Type,
  FileText,
  Table as TableIcon,
  Box,
  GripVertical,
  Plus,
  Hash,
  Calendar,
  CheckSquare,
  Minus,
  Layers,
  ChevronDownSquare,
  Maximize2,
  AlignLeft,
  FolderKanban,
  Tag,
} from 'lucide-react'

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
    type: 'Section',
    name: 'Khối Bố Cục (Section Card)',
    description: 'Thẻ chứa viền đổ bóng với lưới 12-cột chuẩn Core',
    icon: Layers,
    defaultProps: {
      title: 'GENERAL - FCL IMPORT',
      collapsible: true,
      boxShadow: true,
    },
    defaultStyle: { width: '100%' },
  },
  {
    type: 'RecordSelector',
    name: 'Danh Sách Lô Hàng / Record Selector',
    description: 'Thanh chọn danh sách bản ghi con dạng Tag Badges (Lô hàng: [ FCLT-26020005 ] ... [+ Tạo mới])',
    icon: Tag,
    defaultProps: {
      label: 'Lô hàng:',
      reference: 'Transaction',
      displayField: 'code',
      records: [
        { id: '1', code: 'FCLT-26020005', mblNo: 'ASHVT00002005' },
        { id: '2', code: 'FCLT-26020006', mblNo: 'ASHVT00002006' },
        { id: '3', code: 'FCLT-26020007', mblNo: 'ASHVT00002007' },
      ],
      activeId: '1',
      canAdd: true,
      colSpan: 12,
    },
    defaultStyle: { width: '100%' },
  },
  {
    type: 'Container',
    name: 'Khoảng Trắng (Container)',
    description: 'Bố cục tự do Flexbox hoặc Grid',
    icon: Box,
    defaultProps: {
      layoutMode: 'flex',
      flexConfig: { direction: 'row', wrap: 'wrap', gap: '16px', justify: 'flex-start', align: 'stretch' },
    },
    defaultStyle: { padding: '16px', minHeight: '120px' },
  },
  {
    type: 'TextBox',
    name: 'Ô Nhập Chữ (TextBox)',
    description: 'Nhập text kèm nhãn bên trái (Job No, M-BL No)',
    icon: Type,
    defaultProps: {
      label: 'Job No.',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
      placeholder: 'FCL-26020005...',
    },
    defaultStyle: {},
  },
  {
    type: 'Number',
    name: 'Ô Nhập Số (Number)',
    description: 'Nhập số tiền tệ/trọng lượng (GW, CBM, VGM)',
    icon: Hash,
    defaultProps: {
      label: 'Total GW',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
      precision: 0,
      placeholder: '1,085',
    },
    defaultStyle: {},
  },
  {
    type: 'DatePicker',
    name: 'Lịch Ngày (DatePicker)',
    description: 'Chọn ngày tháng chuẩn DD/MM/YYYY (S.Date, ETA)',
    icon: Calendar,
    defaultProps: {
      label: 'S.Date',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
    },
    defaultStyle: {},
  },
  {
    type: 'Select',
    name: 'Dropdown Lựa Chọn (Select2)',
    description: 'Menu thả xuống chọn thực thể (Vendor, Service, POL)',
    icon: ChevronDownSquare,
    defaultProps: {
      label: 'Service',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
      options: [
        { value: 'CYCY', label: 'CY/CY' },
        { value: 'CFSCFS', label: 'CFS/CFS' },
        { value: 'DOOR', label: 'DOOR TO DOOR' },
      ],
    },
    defaultStyle: {},
  },
  {
    type: 'Checkbox',
    name: 'Hộp Kiểm (Checkbox)',
    description: 'Lựa chọn đúng/sai (Active, IsJob, Surrendered)',
    icon: CheckSquare,
    defaultProps: {
      label: 'Surrendered',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 2,
    },
    defaultStyle: {},
  },
  {
    type: 'Table',
    name: 'Bảng Dữ Liệu Nâng Cao (Grid)',
    description: 'Bảng doanh nghiệp có Cột Cố Định và Dòng Tính Tổng',
    icon: TableIcon,
    defaultProps: {
      label: 'CONTAINER INFORMATION',
      columns: [
        { key: 'jobNo', title: 'Job No.', width: '130px', sticky: 'left', sortable: true },
        { key: 'pol', title: 'POL', width: '150px', sortable: true },
        { key: 'pod', title: 'POD', width: '150px', sortable: true },
        { key: 'packages', title: 'Số Kiện', width: '90px', align: 'right', aggregate: 'sum', sortable: true },
        { key: 'gw', title: 'GW (KGS)', width: '110px', align: 'right', aggregate: 'sum', sortable: true },
        { key: 'cbm', title: 'CBM', width: '100px', align: 'right', aggregate: 'sum', sortable: true },
      ],
    },
    defaultStyle: { width: '100%' },
  },
  {
    type: 'Button',
    name: 'Nút Bấm (Button)',
    description: 'Kích hoạt hành động (Lưu, In chứng từ, Duyệt)',
    icon: Square,
    defaultProps: { label: 'Lưu Dữ Liệu', variant: 'primary', size: 'md' },
    defaultStyle: {},
  },
  {
    type: 'Label',
    name: 'Nhãn Tiêu Đề (Label)',
    description: 'Tiêu đề và nội dung tĩnh phân đoạn',
    icon: FileText,
    defaultProps: { label: 'Tiêu đề khối thông tin' },
    defaultStyle: { fontSize: '14px', fontWeight: 'bold' },
  },
  {
    type: 'Divider',
    name: 'Đường Phân Cách (Divider)',
    description: 'Đường kẻ ngang ngăn chia các khu vực',
    icon: Minus,
    defaultProps: { label: 'Thông tin mở rộng' },
    defaultStyle: {},
  },
  {
    type: 'Modal',
    name: 'Hộp Thoại (Modal Dialog)',
    description: 'Cửa sổ popup nhập liệu hoặc xác nhận thao tác',
    icon: Maximize2,
    defaultProps: { title: 'Cửa Sổ Nhập Liệu Chi Tiết' },
    defaultStyle: { width: '100%' },
  },
  {
    type: 'Textarea',
    name: 'Văn Bản Dài (Textarea)',
    description: 'Ô nhập văn bản nhiều dòng (Notes, Description, Remarks)',
    icon: AlignLeft,
    defaultProps: {
      label: 'Notes',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 12,
      rows: 3,
      placeholder: 'Ghi chú đơn hàng...',
    },
    defaultStyle: {},
  },
  {
    type: 'Tabs',
    name: 'Phân Hệ Tabs (Tabs Container)',
    description: 'Thanh điều hướng chuyển đổi giữa các phân hệ nghiệp vụ',
    icon: FolderKanban,
    defaultProps: {
      tabs: [
        { id: 'main', label: 'TAB 1' },
      ],
    },
    defaultStyle: { width: '100%' },
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
      className={`relative group rounded-xl border transition-all select-none ${isDragging
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
