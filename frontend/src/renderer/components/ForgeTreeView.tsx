import React, { useState, useMemo, useEffect } from 'react'
import type { ComponentNode } from '@/types/schema'
import {
  Folder,
  FolderOpen,
  FileText,
  ChevronRight,
  ChevronDown,
  Search,
  Plus,
  Minus,
  Layers,
  Database,
  ExternalLink,
} from 'lucide-react'
import { useDataEngine } from '@/core/engines/dataEngine'
import { executeSingleEvent } from '@/core/engines/eventRunner'

export interface TreeNodeItem {
  id: string | number
  name: string
  code?: string
  parentId?: string | number | null
  children?: TreeNodeItem[]
  icon?: string
  data?: any
}

export interface ForgeTreeViewProps {
  node: ComponentNode
  isEditing?: boolean
  data?: TreeNodeItem[]
  reference?: string
  idField?: string
  labelField?: string
  parentField?: string
  onSelectNode?: (node: TreeNodeItem) => void
}

/**
 * 🌳 ForgeTreeView: Linh kiện Cây phân cấp chuẩn Doanh nghiệp (TSK-4.3)
 * Hỗ trợ cả 2 dạng dữ liệu:
 * 1. Cấu trúc phẳng có parentId (chuẩn bảng MasterData C# Core)
 * 2. Cấu trúc lồng nhau (nested children)
 * Tích hợp tìm kiếm nhanh, Mở rộng/Thu gọn toàn bộ, đồng bộ DataEngine & Event Runner.
 */
export const ForgeTreeView: React.FC<ForgeTreeViewProps> = ({
  node,
  isEditing = false,
  data: propsData,
  reference: propsReference,
  idField = 'id',
  labelField = 'name',
  parentField = 'parentId',
  onSelectNode,
}) => {
  const props = node.props || {}
  const reference = (propsReference || props.reference || props.refName || node.dataBinding?.refName || '') as string
  const datasetFromEngine = useDataEngine((s) => (reference ? s.datasets[reference] : undefined))

  // State tìm kiếm & chọn node
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedId, setSelectedId] = useState<string | number | null>(null)
  const [expandedIds, setExpandedIds] = useState<Set<string | number>>(new Set())

  // Dữ liệu thô ban đầu (props.data -> DataEngine -> default sample data)
  const rawData: any[] = useMemo(() => {
    if (propsData && Array.isArray(propsData) && propsData.length > 0) return propsData
    if (props.data && Array.isArray(props.data) && props.data.length > 0) return props.data
    if (datasetFromEngine && Array.isArray(datasetFromEngine) && datasetFromEngine.length > 0) return datasetFromEngine

    // Dữ liệu mẫu chuẩn cấu trúc MasterData phân cấp (Hệ thống cảng biển & Logistics)
    return [
      { id: '1', name: 'TỔNG CÔNG TY HÀNG HẢI VIỆT NAM', code: 'VIMC', parentId: null },
      { id: '10', name: 'Cụm Cảng Miền Bắc', code: 'NORTH_PORTS', parentId: '1' },
      { id: '101', name: 'Cảng Hải Phòng (Hoàng Diệu, Chùa Vẽ, Tân Vũ)', code: 'HPH', parentId: '10' },
      { id: '102', name: 'Cảng Quốc Tế Lạch Huyện (TC-HICT)', code: 'HICT', parentId: '10' },
      { id: '103', name: 'Cảng Quảng Ninh (Cái Lân)', code: 'CLN', parentId: '10' },
      { id: '20', name: 'Cụm Cảng Miền Trung', code: 'CENTRAL_PORTS', parentId: '1' },
      { id: '201', name: 'Cảng Đà Nẵng (Tiên Sa)', code: 'DAN', parentId: '20' },
      { id: '202', name: 'Cảng Quy Nhơn', code: 'QNH', parentId: '20' },
      { id: '30', name: 'Cụm Cảng Miền Nam', code: 'SOUTH_PORTS', parentId: '1' },
      { id: '301', name: 'Cụm Cảng Cái Mép - Thị Vải (CMIT, TCIT, TCTT)', code: 'CMTV', parentId: '30' },
      { id: '302', name: 'Cảng Sài Gòn (Hiệp Phước, Tân Thuận)', code: 'SGP', parentId: '30' },
      { id: '303', name: 'Cảng Tân Cảng Cát Lái', code: 'CTL', parentId: '30' },
      { id: '40', name: 'Đội Tàu Vận Tải Biển Quốc Tế', code: 'FLEET', parentId: '1' },
      { id: '401', name: 'Đội tàu Container Tuyến Nội Á', code: 'INTRA_ASIA', parentId: '40' },
      { id: '402', name: 'Đội tàu Hàng Rời (Bulk Carrier)', code: 'BULK_FLEET', parentId: '40' },
    ]
  }, [propsData, props.data, datasetFromEngine])

  // Chuyển đổi dữ liệu phẳng thành cây phân cấp lồng nhau (Hierarchical Tree)
  const treeRoots: TreeNodeItem[] = useMemo(() => {
    if (!Array.isArray(rawData) || rawData.length === 0) return []

    // Nếu dữ liệu đã có cấu trúc lồng nhau (node.children)
    const isAlreadyNested = rawData.some((item) => Array.isArray(item.children) && item.children.length > 0)
    if (isAlreadyNested) {
      return rawData
    }

    // Chuyển đổi từ danh sách phẳng có parentId
    const nodeMap = new Map<string | number, TreeNodeItem>()
    rawData.forEach((item) => {
      const id = item[idField] ?? item.id ?? item.code
      const name = item[labelField] ?? item.name ?? item.title ?? String(id)
      const parentId = item[parentField] ?? item.parentId ?? null
      nodeMap.set(id, {
        id,
        name,
        code: item.code,
        parentId,
        children: [],
        data: item,
      })
    })

    const roots: TreeNodeItem[] = []
    nodeMap.forEach((treeNode) => {
      if (treeNode.parentId !== null && treeNode.parentId !== undefined && nodeMap.has(treeNode.parentId)) {
        nodeMap.get(treeNode.parentId)!.children!.push(treeNode)
      } else {
        roots.push(treeNode)
      }
    })

    return roots
  }, [rawData, idField, labelField, parentField])

  // Tự động mở rộng cấp cao nhất khi khởi tạo
  useEffect(() => {
    if (treeRoots.length > 0 && expandedIds.size === 0) {
      const initial = new Set<string | number>()
      treeRoots.forEach((r) => {
        initial.add(r.id)
        if (r.children) {
          r.children.forEach((c) => initial.add(c.id))
        }
      })
      setExpandedIds(initial)
    }
  }, [treeRoots])

  const toggleExpand = (id: string | number, e: React.MouseEvent) => {
    e.stopPropagation()
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleExpandAll = () => {
    const allIds = new Set<string | number>()
    const traverse = (items: TreeNodeItem[]) => {
      items.forEach((item) => {
        allIds.add(item.id)
        if (item.children && item.children.length > 0) {
          traverse(item.children)
        }
      })
    }
    traverse(treeRoots)
    setExpandedIds(allIds)
  }

  const handleCollapseAll = () => {
    setExpandedIds(new Set())
  }

  const handleNodeClick = (treeItem: TreeNodeItem) => {
    setSelectedId(treeItem.id)

    // 1. Đồng bộ lên DataEngine
    const formId = String(node.pageId || 'default')
    const fieldName = node.dataBinding?.fieldName || node.id
    useDataEngine.getState().setFieldValue(formId, fieldName, treeItem.id)
    if (reference) {
      useDataEngine.getState().setFieldValue(formId, `${reference}_selected`, treeItem.data || treeItem)
    }

    // 2. Kích hoạt Callback ngoài
    if (onSelectNode) {
      onSelectNode(treeItem)
    }

    // 3. Kích hoạt Event Runner nếu có cấu hình sự kiện
    if (node.events && Array.isArray(node.events)) {
      const changeEvt = node.events.find((e) => e.trigger === 'change' || e.trigger === 'select' || e.trigger === 'onClick')
      if (changeEvt) {
        executeSingleEvent(changeEvt, (node.props?.label as string) || node.id, undefined, { node: treeItem, value: treeItem.id })
      }
    }
  }

  // Đệ quy kiểm tra node hoặc các con có khớp từ khóa tìm kiếm
  const matchesSearch = (item: TreeNodeItem, term: string): boolean => {
    if (!term) return true
    const lower = term.toLowerCase()
    const nameMatch = item.name.toLowerCase().includes(lower)
    const codeMatch = item.code ? item.code.toLowerCase().includes(lower) : false
    if (nameMatch || codeMatch) return true
    if (item.children && item.children.length > 0) {
      return item.children.some((c) => matchesSearch(c, term))
    }
    return false
  }

  // Đệ quy render một node trên cây
  const renderTreeNode = (item: TreeNodeItem, level = 0): React.ReactNode => {
    if (searchTerm && !matchesSearch(item, searchTerm)) {
      return null
    }

    const hasChildren = Boolean(item.children && item.children.length > 0)
    const isExpanded = expandedIds.has(item.id) || Boolean(searchTerm)
    const isSelected = selectedId === item.id

    return (
      <div key={item.id} className="select-none">
        <div
          onClick={() => handleNodeClick(item)}
          style={{ paddingLeft: `${Math.max(8, level * 18 + 8)}px` }}
          className={`group flex items-center gap-1.5 py-1.5 pr-2.5 rounded-lg text-xs cursor-pointer transition-all duration-150 ${
            isSelected
              ? 'bg-blue-600/30 text-blue-200 border border-blue-500/50 shadow-sm font-semibold'
              : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
          }`}
        >
          {/* Nút bấm Mở rộng / Thu gọn */}
          {hasChildren ? (
            <button
              type="button"
              onClick={(e) => toggleExpand(item.id, e)}
              className="w-4 h-4 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </button>
          ) : (
            <span className="w-4 h-4" />
          )}

          {/* Icon thư mục hoặc file */}
          <span className="flex-shrink-0">
            {hasChildren ? (
              isExpanded ? (
                <FolderOpen className="w-4 h-4 text-amber-400" />
              ) : (
                <Folder className="w-4 h-4 text-amber-500/80" />
              )
            ) : (
              <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
            )}
          </span>

          {/* Tiêu đề Node */}
          <span className="truncate flex-1 font-medium">{item.name}</span>

          {/* Mã Node (Code Badge) */}
          {item.code && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700/80 text-cyan-300">
              {item.code}
            </span>
          )}

          {/* Badge số lượng nhánh con */}
          {hasChildren && (
            <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
              {item.children!.length}
            </span>
          )}
        </div>

        {/* Các nhánh con (Children) */}
        {hasChildren && isExpanded && (
          <div className="relative border-l border-slate-800/80 ml-4 pl-1 mt-0.5 space-y-0.5">
            {item.children!.map((child) => renderTreeNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  const title = (props.title as string) || (node.props?.label as string) || 'Cấu Trúc Cây Phân Cấp'

  return (
    <div
      className="w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans"
      style={{
        width: node.style?.width || '100%',
        minHeight: node.style?.minHeight || '320px',
        maxHeight: node.style?.maxHeight || '560px',
      }}
    >
      {/* ── HEADER TOOLBAR ── */}
      <div className="px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">{title}</span>
          {reference && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-mono">
              {reference}
            </span>
          )}
        </div>

        {/* Nút thao tác Mở rộng / Thu gọn */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleExpandAll}
            title="Mở rộng tất cả các nhánh"
            className="p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleCollapseAll}
            title="Thu gọn tất cả các nhánh"
            className="p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── SEARCH INPUT TOOLBAR ── */}
      <div className="p-2 border-b border-slate-800/80 bg-slate-900/40">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm danh mục theo tên, mã..."
            className="w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* ── TREE BODY CONTENT ── */}
      <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {treeRoots.length > 0 ? (
          treeRoots.map((rootNode) => renderTreeNode(rootNode))
        ) : (
          <div className="py-8 text-center text-xs text-slate-500 italic">
            Chưa có dữ liệu danh mục phân cấp
          </div>
        )}
      </div>

      {/* ── STATUS FOOTER ── */}
      <div className="px-3 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
        <span className="font-mono">
          Tổng số: <strong className="text-slate-200">{rawData.length}</strong> phần tử
        </span>
        {selectedId && (
          <span className="text-emerald-400 font-mono font-medium">
            Đang chọn ID: #{String(selectedId)}
          </span>
        )}
      </div>
    </div>
  )
}
