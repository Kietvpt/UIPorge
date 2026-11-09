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
  Search,
  Sparkles,
  Paperclip,
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
      title: 'THÔNG TIN CHUNG (GENERAL)',
      collapsible: true,
      boxShadow: true,
    },
    defaultStyle: { width: '100%' },
  },
  {
    type: 'RecordSelector',
    name: 'Bộ Chọn Bản Ghi (Record Selector)',
    description: 'Thanh chọn danh sách bản ghi con dạng Tag Badges ([ REC-001 ] ... [+ Tạo mới])',
    icon: Tag,
    defaultProps: {
      label: 'Bản ghi:',
      reference: 'Records',
      displayField: 'code',
      records: [
        { id: '1', code: 'REC-001', name: 'Bản ghi mẫu 01' },
        { id: '2', code: 'REC-002', name: 'Bản ghi mẫu 02' },
        { id: '3', code: 'REC-003', name: 'Bản ghi mẫu 03' },
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
    description: 'Nhập text kèm nhãn bên trái hoặc trên',
    icon: Type,
    defaultProps: {
      label: 'Mã số (Code)',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
      placeholder: 'Nhập thông tin...',
    },
    defaultStyle: {},
  },
  {
    type: 'SearchEntry',
    name: 'Ô Tra Cứu Đa Cột (SearchEntry)',
    description: 'Ô tìm kiếm mở Modal tra cứu đa cột và tự động điền (Populate)',
    icon: Search,
    defaultProps: {
      label: 'Đối tác / Danh mục',
      showLabel: true,
      labelPosition: 'left',
      reference: 'MasterData',
      displayField: 'name',
      valueField: 'code',
      placeholder: 'Tra cứu danh mục (F1)...',
      colSpan: 4,
    },
    defaultStyle: {},
  },
  {
    type: 'Autocomplete',
    name: 'Gợi Ý Tự Động (Autocomplete)',
    description: 'Ô nhập liệu thông minh với danh sách gợi ý và tự động điền',
    icon: Sparkles,
    defaultProps: {
      label: 'Tìm kiếm gợi ý',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
      placeholder: 'Gõ để tìm kiếm...',
    },
    defaultStyle: {},
  },
  {
    type: 'Number',
    name: 'Ô Nhập Số (Number)',
    description: 'Nhập số tiền tệ, số lượng hoặc định lượng',
    icon: Hash,
    defaultProps: {
      label: 'Số lượng',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
      precision: 0,
      placeholder: '0',
    },
    defaultStyle: {},
  },
  {
    type: 'DatePicker',
    name: 'Lịch Ngày (DatePicker)',
    description: 'Chọn ngày tháng chuẩn DD/MM/YYYY',
    icon: Calendar,
    defaultProps: {
      label: 'Ngày lập',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
    },
    defaultStyle: {},
  },
  {
    type: 'Select',
    name: 'Dropdown Lựa Chọn (Select2)',
    description: 'Menu thả xuống chọn tùy chọn từ danh sách',
    icon: ChevronDownSquare,
    defaultProps: {
      label: 'Phân loại',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 4,
      options: [
        { value: 'typeA', label: 'Phân loại A' },
        { value: 'typeB', label: 'Phân loại B' },
        { value: 'typeC', label: 'Phân loại C' },
      ],
    },
    defaultStyle: {},
  },
  {
    type: 'Checkbox',
    name: 'Hộp Kiểm (Checkbox)',
    description: 'Lựa chọn kích hoạt đúng/sai (Boolean)',
    icon: CheckSquare,
    defaultProps: {
      label: 'Kích hoạt',
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
      label: 'BẢNG DỮ LIỆU',
      columns: [
        { key: 'code', title: 'Mã số', width: '130px', sticky: 'left', sortable: true },
        { key: 'name', title: 'Tên mục', width: '200px', sortable: true },
        { key: 'quantity', title: 'Số lượng', width: '100px', align: 'right', aggregate: 'sum', sortable: true },
        { key: 'price', title: 'Đơn giá', width: '120px', align: 'right', aggregate: 'sum', sortable: true },
        { key: 'amount', title: 'Thành tiền', width: '140px', align: 'right', aggregate: 'sum', sortable: true },
      ],
    },
    defaultStyle: { width: '100%' },
  },
  {
    type: 'FileUploadGrid',
    name: 'Bảng Đính Kèm Tệp (FileUploadGrid)',
    description: 'Lưới quản lý tệp đính kèm, kéo thả upload và xem trước (Preview)',
    icon: Paperclip,
    defaultProps: {
      label: 'Tài liệu & Chứng từ đính kèm',
      colSpan: 12,
      maxSizeMB: 25,
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
      label: 'Ghi chú',
      showLabel: true,
      labelPosition: 'left',
      colSpan: 12,
      rows: 3,
      placeholder: 'Ghi chú bổ sung...',
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
      {...listeners}
      {...attributes}
      onClick={() => onClick(item)}
      className={`group flex items-center gap-3 p-2.5 rounded-lg border border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 hover:border-slate-700 transition-all text-left cursor-grab active:cursor-grabbing select-none ${
        isDragging ? 'opacity-40 ring-2 ring-blue-500 shadow-xl' : ''
      }`}
    >
      <div className="p-2 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
          {item.name}
        </div>
        <div className="text-[10px] text-slate-400 truncate mt-0.5">
          {item.description}
        </div>
      </div>
      <div className="text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
        <Plus className="w-3.5 h-3.5" />
      </div>
    </div>
  )
}

interface ComponentPaletteProps {
  isEditing?: boolean
  onAddComponent?: (type: ComponentType) => void
}

export const ComponentPalette: React.FC<ComponentPaletteProps> = ({ isEditing = true, onAddComponent }) => {
  const addComponent = useEditorStore((state) => state.addComponent)
  const activeFeatureId = useEditorStore((state) => state.activeFeatureId)
  const features = useEditorStore((state) => state.features)
  const selection = useEditorStore((state) => state.selection)

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

  const handleItemClick = (def: ComponentDefinition) => {
    if (!isEditing) return

    if (onAddComponent) {
      onAddComponent(def.type)
      return
    }

    const selected = findNode(activeFeature?.components || [], selection.componentId)

    let targetParentId: string | null = null
    if (selected) {
      if (selected.type === 'Container') {
        targetParentId = selected.id
      } else {
        targetParentId = selected.parentId || null
      }
    }

    const newNode: ComponentNode = {
      id: `${def.type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      type: def.type,
      parentId: targetParentId,
      pageId: activeFeatureId,
      props: { ...def.defaultProps },
      style: { ...def.defaultStyle },
      events: [],
      order: (activeFeature?.components?.length || 0) + 1,
      children: def.type === 'Container' || def.type === 'Section' ? [] : undefined,
    }

    addComponent(newNode, targetParentId)
  }

  return (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-800 select-none">
      <div className="p-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-slate-400" />
          <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            Thư Viện Phần Tử (Palette)
          </h2>
        </div>
        <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-mono">
          {AVAILABLE_COMPONENTS.length}
        </span>
      </div>

      <div className="p-3 text-[11px] text-slate-400 bg-slate-950/40 border-b border-slate-800/80">
        Kéo thả phần tử vào Canvas hoặc bấm để thêm nhanh vào cuối trang.
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {AVAILABLE_COMPONENTS.map((item) => (
          <PaletteItem
            key={item.type}
            item={item}
            onClick={handleItemClick}
            isEditing={isEditing}
          />
        ))}
      </div>
    </div>
  )
}
