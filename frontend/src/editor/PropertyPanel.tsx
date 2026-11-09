import React, { useState } from 'react'
import { useEditorStore } from '@/store/editorStore'
import {
  Sliders,
  Paintbrush,
  Zap,
  Trash2,
  Box,
  Columns,
  Layers,
  Table as TableIcon,
  Plus,
  FileCode,
  PlusCircle,
  Check,
  Code,
  Play,
  Database,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronUp,
  ChevronDown,
  GripVertical,
} from 'lucide-react'
import { getFunctionsForBlFile, addFunctionToBlFile } from '@/core/engines/blRegistry'
import { executeSingleEvent } from '@/core/engines/eventRunner'
import { UnifiedEventEditor } from './events/UnifiedEventEditor'
import { parseRawCss, formatStyleToCss } from './cssParser'
import { ColumnPropertiesModal } from '@/renderer/components/grid/ColumnPropertiesModal'
import { ComponentPropertiesModal } from './ComponentPropertiesModal'
import {
  moveColumn,
  toggleColumnFreeze,
  normalizeColumnOrders,
  sortColumnsByCorePolicy,
} from '@/renderer/components/grid/gridPolicyUtils'
import type {
  LayoutMode,
  ComponentNode,
  TableColumn,
  FlexConfig,
} from '@/types/schema'
import { MOCK_ENTITY_CATALOGS } from '@/data/mockEntityCatalog'

interface PropertyPanelProps {
  width?: number
}

export const PropertyPanel: React.FC<PropertyPanelProps> = ({ width }) => {
  const [activeTab, setActiveTab] = useState<
    'layout' | 'children' | 'props' | 'styles' | 'events' | 'data' | 'validation' | 'permissions'
  >('layout')
  const [selectedColumnIndex, setSelectedColumnIndex] = useState<number | null>(null)
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false)
  const [isComponentModalOpen, setIsComponentModalOpen] = useState(false)
  const [listDragIdx, setListDragIdx] = useState<number | null>(null)
  const [listDragOverIdx, setListDragOverIdx] = useState<number | null>(null)

  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const selection = useEditorStore((s) => s.selection)
  const selectComponent = useEditorStore((s) => s.selectComponent)
  const addComponent = useEditorStore((s) => s.addComponent)
  const updateComponentProps = useEditorStore((s) => s.updateComponentProps)
  const updateComponentStyle = useEditorStore((s) => s.updateComponentStyle)
  const updateComponentEvents = useEditorStore((s) => s.updateComponentEvents)
  const updateComponentDataBinding = useEditorStore((s) => s.updateComponentDataBinding)
  const updateComponentValidation = useEditorStore((s) => s.updateComponentValidation)
  const updateComponentPermissions = useEditorStore((s) => s.updateComponentPermissions)
  const updateComponentOrder = useEditorStore((s) => s.updateComponentOrder)
  const removeComponent = useEditorStore((s) => s.removeComponent)
  const distributeSiblingWidths = useEditorStore((s) => s.distributeSiblingWidths)
  const updateFeatureScriptFile = useEditorStore((s) => s.updateFeatureScriptFile)

  // Local state for adding function to BL file
  const [newBlFnInput, setNewBlFnInput] = useState('')
  const [blFnVer, setBlFnVer] = useState(0)

  const activeFeature = features.find((f) => f.id === activeFeatureId)

  // Find component recursively in tree
  const findNodeById = (nodes: any[], targetId: string | null): any => {
    if (!targetId) return null
    for (const node of nodes) {
      if (node.id === targetId) return node
      if (node.children) {
        const found = findNodeById(node.children, targetId)
        if (found) return found
      }
    }
    return null
  }

  const selectedNode: ComponentNode | null = selection.componentId && activeFeature
    ? findNodeById(activeFeature.components, selection.componentId)
    : null

  const parentNode = selectedNode?.parentId && activeFeature
    ? findNodeById(activeFeature.components, selectedNode.parentId)
    : null

  const parentTabContainer = parentNode && (parentNode.props?.isTab || parentNode.props?.tab || parentNode.type === 'Tabs')
    ? parentNode
    : null

  // Trạng thái khi chưa chọn component nào (Xem và cấu hình Feature / Trang)
  if (!selectedNode) {
    const rootComponents = activeFeature
      ? activeFeature.components.filter((c) => !c.parentId)
      : []

    return (
      <aside
        style={{ width: width ? `${width}px` : '380px' }}
        className="shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden"
      >
        <div className="p-3.5 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur">
          <div className="flex items-center gap-2 min-w-0">
            <span className="p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase">
              Feature
            </span>
            <div className="min-w-0">
              <h2 className="text-xs font-bold text-slate-200 truncate">
                {activeFeature?.name || 'Trang'}
              </h2>
              <span className="text-[10px] text-cyan-400 font-mono">{activeFeature?.route}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {activeFeature && (
            <>
              {/* ── THÔNG TIN CƠ BẢN TRANG ── */}
              <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Đường dẫn (Route)
                  </span>
                  <span className="text-cyan-400 font-mono text-[11px] font-semibold">
                    {activeFeature.route}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    File Nghiệp Vụ (.bl.ts)
                  </span>
                  <input
                    type="text"
                    value={activeFeature.scriptFile || ''}
                    placeholder="feature.bl.ts..."
                    onChange={(e) => updateFeatureScriptFile(activeFeature.id, e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* ── DANH SÁCH PHẦN TỬ CỦA TRANG & ĐIỀU CHỈNH ORDER (ẢNH 2 CỦA MASTER) ── */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <div>
                    <label className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      <span>Phần Tử Trang ({rootComponents.length})</span>
                    </label>
                    <p className="text-[10px] text-slate-500">
                      Chỉnh Order (từ nhỏ đến lớn). Cùng Order & tab=true sẽ Stack lại!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const newId = `box_${Date.now().toString(36)}`
                      addComponent(
                        {
                          id: newId,
                          type: 'Container',
                          parentId: null,
                          pageId: activeFeature.id,
                          order: rootComponents.length + 1,
                          props: {
                            layoutMode: 'flex',
                            flexConfig: { direction: 'column', gap: '12px', wrap: 'wrap' },
                          },
                          style: { width: '100%', minHeight: '120px' },
                          events: [],
                          children: [],
                        },
                        null
                      )
                    }}
                    className="px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    <span>+ Container</span>
                  </button>
                </div>

                {rootComponents.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40">
                    Trang chưa có phần tử nào. Chuột phải vào màn hình hoặc bấm "+ Container" để thêm mới.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {[...rootComponents]
                      .sort((a, b) => (a.order ?? 1) - (b.order ?? 1))
                      .map((c, idx) => {
                        const isTab = Boolean(c.props?.tab || c.props?.isTab || c.type === 'Tabs')
                        return (
                          <div
                            key={c.id}
                            onClick={() => selectComponent(c.id)}
                            className="p-2.5 rounded-xl border bg-slate-950/80 border-slate-800 hover:border-blue-500/60 flex items-center justify-between gap-2 cursor-pointer transition-all hover:bg-slate-900/60"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                                #{idx + 1}
                              </span>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-xs font-bold text-slate-200 truncate max-w-[130px]">
                                    {c.props.label || c.props.title || c.type}
                                  </span>
                                  <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono">
                                    {c.type}
                                  </span>
                                  {isTab && (
                                    <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase">
                                      TAB
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono">#{c.id}</span>
                              </div>
                            </div>

                            {/* Order Input & Remove */}
                            <div className="flex items-center gap-2 shrink-0">
                              <div className="flex items-center gap-1" title="Thứ tự ưu tiên sắp xếp (từ nhỏ đến lớn)">
                                <span className="text-[10px] text-slate-400 font-semibold">Order:</span>
                                <input
                                  type="number"
                                  value={Number(c.order ?? c.props.order ?? (idx + 1))}
                                  onClick={(e) => e.stopPropagation()}
                                  onChange={(e) => {
                                    const newOrder = Number(e.target.value)
                                    updateComponentOrder(c.id, newOrder)
                                  }}
                                  className="w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                                />
                              </div>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeComponent(c.id)
                                }}
                                className="p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer"
                                title="Xóa phần tử này"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </aside>
    )
  }

  const isContainer =
    selectedNode.type === 'Container' ||
    selectedNode.type === 'Section' ||
    selectedNode.type === 'Tabs'
  const effectiveTab = !isContainer && (activeTab === 'layout' || activeTab === 'children') ? 'props' : activeTab
  const layoutMode: LayoutMode = selectedNode.props.layoutMode || 'flex'
  const flexConfig: FlexConfig = (selectedNode.props.flexConfig as FlexConfig) || {
    direction: 'row',
    wrap: 'wrap',
    justify: 'flex-start',
    align: 'center',
    gap: '12px',
    columnsPerRow: 'auto',
  }
  const gridConfig = selectedNode.props.gridConfig || { columns: 2, gap: '16px' }
  const childrenList = selectedNode.children || []

  return (
    <aside
      style={{ width: width ? `${width}px` : '380px' }}
      className="shrink-0 bg-slate-900 border-l border-slate-800 flex flex-col h-full z-10 transition-all select-none overflow-hidden"
    >
      {/* Header */}
      <div className="p-3 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90 backdrop-blur">
        <div className="flex items-center gap-2 min-w-0">
          <span className="p-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-xs font-bold uppercase">
            {selectedNode.type}
          </span>
          <div className="min-w-0">
            <h2 className="text-xs font-bold text-slate-200 truncate">
              {selectedNode.props.label || selectedNode.type}
            </h2>
            <span className="text-[10px] text-slate-500 font-mono">#{selectedNode.id}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsComponentModalOpen(true)}
            className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer"
            title="Mở Component properties modal (Chuẩn C# Core)"
          >
            <Sliders className="w-4 h-4 text-emerald-400" />
          </button>
          <button
            type="button"
            onClick={() => removeComponent(selectedNode.id)}
            className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors cursor-pointer"
            title="Xóa component này"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center border-b border-slate-800 bg-slate-950/60 overflow-x-auto text-xs shrink-0 no-scrollbar">
        {isContainer && (
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'layout'
              ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
          >
            <Columns className="w-3.5 h-3.5" />
            Bố cục
          </button>
        )}

        {isContainer && (
          <button
            onClick={() => setActiveTab('children')}
            className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'children'
              ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
              : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Phần tử ({childrenList.length})</span>
          </button>
        )}

        <button
          onClick={() => setActiveTab('props')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'props'
            ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
            : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          Props
        </button>

        <button
          onClick={() => setActiveTab('styles')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'styles'
            ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
            : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
        >
          <Paintbrush className="w-3.5 h-3.5" />
          CSS
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'events'
            ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
            : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
        >
          <Zap className="w-3.5 h-3.5" />
          Events
        </button>

        <button
          onClick={() => setActiveTab('data')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'data'
            ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
            : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          title="Liên kết dữ liệu thực thể (Data Binding) - Tương đương DataSource trong Core cũ"
        >
          <Database className="w-3.5 h-3.5" />
          Data
        </button>

        <button
          onClick={() => setActiveTab('validation')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'validation'
            ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
            : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          title="Quy tắc kiểm tra hợp lệ dữ liệu (Validation Rules)"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Validation
        </button>

        <button
          onClick={() => setActiveTab('permissions')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${effectiveTab === 'permissions'
            ? 'border-blue-500 text-blue-400 bg-slate-800/40 font-bold'
            : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          title="Phân quyền hiển thị và thao tác theo vai trò (SecurityBL.cs & PolicyEditorBL.cs)"
        >
          <Lock className="w-3.5 h-3.5" />
          Quyền hạn
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {/* ── TAB 1: BỐ CỤC (LAYOUT MODE CHO CONTAINER) ── */}
        {isContainer && effectiveTab === 'layout' && (
          <div className="space-y-4">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Kiểu Bố Cục (Layout Mode)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => updateComponentProps(selectedNode.id, { layoutMode: 'flex' })}
                  className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${layoutMode === 'flex'
                    ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                >
                  <Box className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-xs">Flexbox</div>
                    <div className="text-[9px] text-slate-500">Canh hàng/cột linh hoạt</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => updateComponentProps(selectedNode.id, { layoutMode: 'grid' })}
                  className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${layoutMode === 'grid'
                    ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                    }`}
                >
                  <Columns className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-xs">CSS Grid</div>
                    <div className="text-[9px] text-slate-500">Chia cột đều nhau</div>
                  </div>
                </button>
              </div>

              {/* ── CẤU HÌNH CHI TIẾT FLEXBOX ── */}
              {layoutMode === 'flex' && (
                <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Hướng Bố Cục
                      </label>
                      <select
                        value={flexConfig.direction || 'row'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, direction: e.target.value as any },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value="row">Hàng ngang (Row)</option>
                        <option value="column">Cột dọc (Column)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Tổng Số Cột Lưới / Dòng
                      </label>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          min="1"
                          max="48"
                          value={typeof flexConfig.columnsPerRow === 'number' ? flexConfig.columnsPerRow : (gridConfig.columns || 12)}
                          onChange={(e) => {
                            const val = Math.max(1, Number(e.target.value) || 12)
                            updateComponentProps(selectedNode.id, {
                              flexConfig: { ...flexConfig, columnsPerRow: val },
                              gridConfig: { ...gridConfig, columns: val },
                            })
                          }}
                          className="w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs text-center font-bold"
                          title="Nhập số cột tổng của lưới (Ví dụ: 12)"
                        />
                        <select
                          value={String(flexConfig.columnsPerRow || '12')}
                          onChange={(e) => {
                            const val = e.target.value === 'auto' ? 'auto' : Number(e.target.value)
                            updateComponentProps(selectedNode.id, {
                              flexConfig: {
                                ...flexConfig,
                                columnsPerRow: val,
                                wrap: val !== 'auto' ? 'wrap' : flexConfig.wrap,
                              },
                              gridConfig: {
                                ...gridConfig,
                                columns: val === 'auto' ? 12 : val,
                              },
                            })
                          }}
                          className="flex-1 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs focus:outline-none focus:border-cyan-500 font-bold"
                        >
                          <option value="12">12 Cột (Chuẩn ERP)</option>
                          <option value="24">24 Cột (Mịn hơn)</option>
                          <option value="6">6 Cột</option>
                          <option value="4">4 Cột</option>
                          <option value="3">3 Cột</option>
                          <option value="2">2 Cột</option>
                          <option value="1">1 Cột (Full 100%)</option>
                          <option value="auto">Tự động (Auto)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* CĂN LỀ NGANG (JUSTIFY) & CĂN LỀ DỌC (ALIGN) */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Căn Lề Ngang (Justify)
                      </label>
                      <select
                        value={flexConfig.justify || 'flex-start'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, justify: e.target.value },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500 font-medium"
                      >
                        <option value="flex-start">← Trái (flex-start)</option>
                        <option value="center">↔ Vào giữa (center)</option>
                        <option value="flex-end">→ Phải (flex-end)</option>
                        <option value="space-between">⇥ Dãn 2 đầu (space-between)</option>
                        <option value="space-around">⇹ Dãn phân bổ (space-around)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Căn Lề Dọc (Align)
                      </label>
                      <select
                        value={flexConfig.align || 'center'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, align: e.target.value },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500 font-medium"
                      >
                        <option value="center">↕ Vào giữa (center)</option>
                        <option value="flex-start">↑ Đỉnh / Trên (flex-start)</option>
                        <option value="flex-end">↓ Đáy / Dưới (flex-end)</option>
                        <option value="stretch">↕ Kéo giãn (stretch)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Khoảng Cách (Gap)
                      </label>
                      <select
                        value={flexConfig.gap || '12px'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, gap: e.target.value },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value="4px">4px (Nhỏ)</option>
                        <option value="8px">8px (Vừa)</option>
                        <option value="12px">12px (Chuẩn)</option>
                        <option value="16px">16px (Rộng)</option>
                        <option value="24px">24px (Rất rộng)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Xuống Dòng (Wrap)
                      </label>
                      <select
                        value={flexConfig.wrap || 'wrap'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, wrap: e.target.value as any },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value="wrap">Cho phép rớt dòng (wrap)</option>
                        <option value="nowrap">Cố định 1 hàng (nowrap)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ── CẤU HÌNH CHI TIẾT CSS GRID (CHIA CỘT LƯỚI ĐỀU NHAU) ── */}
              {layoutMode === 'grid' && (
                <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 mt-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Tổng Số Cột Lưới
                      </label>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          min="1"
                          max="48"
                          value={gridConfig.columns || 12}
                          onChange={(e) => {
                            const val = Math.max(1, Number(e.target.value) || 12)
                            updateComponentProps(selectedNode.id, {
                              gridConfig: { ...gridConfig, columns: val },
                              flexConfig: { ...flexConfig, columnsPerRow: val },
                            })
                          }}
                          className="w-14 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs text-center font-bold"
                          title="Nhập số cột lưới (Ví dụ: 12)"
                        />
                        <select
                          value={String(gridConfig.columns || 12)}
                          onChange={(e) => {
                            const val = Number(e.target.value)
                            updateComponentProps(selectedNode.id, {
                              gridConfig: { ...gridConfig, columns: val },
                              flexConfig: { ...flexConfig, columnsPerRow: val },
                            })
                          }}
                          className="flex-1 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-mono text-xs focus:outline-none focus:border-emerald-500 font-bold"
                        >
                          <option value="12">12 Cột (Chuẩn ERP)</option>
                          <option value="24">24 Cột (Mịn hơn)</option>
                          <option value="6">6 Cột</option>
                          <option value="4">4 Cột</option>
                          <option value="3">3 Cột</option>
                          <option value="2">2 Cột</option>
                          <option value="1">1 Cột (Full 100%)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Khoảng Cách (Gap)
                      </label>
                      <select
                        value={flexConfig.gap || gridConfig.gap || '12px'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, gap: e.target.value },
                            gridConfig: { ...gridConfig, gap: e.target.value },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      >
                        <option value="4px">4px (Nhỏ)</option>
                        <option value="8px">8px (Vừa)</option>
                        <option value="12px">12px (Chuẩn)</option>
                        <option value="16px">16px (Rộng)</option>
                        <option value="24px">24px (Rất rộng)</option>
                      </select>
                    </div>
                  </div>

                  {/* CĂN LỀ NGANG (JUSTIFY) & CĂN LỀ DỌC (ALIGN) */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Căn Lề Ngang (Justify)
                      </label>
                      <select
                        value={flexConfig.justify || 'flex-start'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, justify: e.target.value },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-medium"
                      >
                        <option value="flex-start">← Trái (flex-start)</option>
                        <option value="center">↔ Vào giữa (center)</option>
                        <option value="flex-end">→ Phải (flex-end)</option>
                        <option value="space-between">⇥ Dãn 2 đầu (space-between)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Căn Lề Dọc (Align)
                      </label>
                      <select
                        value={flexConfig.align || 'center'}
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            flexConfig: { ...flexConfig, align: e.target.value },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500 font-medium"
                      >
                        <option value="center">↕ Vào giữa (center)</option>
                        <option value="flex-start">↑ Trên (flex-start)</option>
                        <option value="flex-end">↓ Dưới (flex-end)</option>
                        <option value="stretch">↕ Kéo giãn (stretch)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── CẤU HÌNH PHÂN HỆ TAB (isTab = true - KẾ THỪA C# CORE ComponentGroup.IsTab) ── */}
            <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    Chế Độ Tab (isTab = true)
                  </label>
                  <p className="text-[10px] text-slate-500">
                    Biến Container thành thanh điều hướng Tab chuẩn ERP
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={Boolean(
                    selectedNode.props.isTab ||
                    selectedNode.props.tab ||
                    selectedNode.type === 'Tabs'
                  )}
                  onChange={(e) => {
                    const checked = e.target.checked
                    const currentTabs = (selectedNode.props.tabs as any[]) || [
                      { id: 'main', label: 'MAIN INFORMATION' },
                    ]
                    updateComponentProps(selectedNode.id, {
                      isTab: checked,
                      tab: checked,
                      tabs: checked ? currentTabs : selectedNode.props.tabs,
                      activeTabId: checked
                        ? selectedNode.props.activeTabId || currentTabs[0]?.id
                        : undefined,
                    })
                  }}
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                />
              </div>

              {Boolean(
                selectedNode.props.isTab ||
                selectedNode.props.tab ||
                selectedNode.type === 'Tabs'
              ) && (
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <div>
                    <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                      Tên Nhãn Tab (Hiển Thị Trên Thanh Tab)
                    </label>
                    <input
                      type="text"
                      value={selectedNode.props.label || ''}
                      placeholder="e.g. MAIN INFORMATION, MASTER COST..."
                      onChange={(e) => updateComponentProps(selectedNode.id, { label: e.target.value })}
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-emerald-400 font-bold text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Thứ Tự (Order)
                      </label>
                      <input
                        type="number"
                        value={Number(selectedNode.order ?? selectedNode.props.order ?? 1)}
                        onChange={(e) => {
                          const newOrder = Number(e.target.value)
                          updateComponentOrder(selectedNode.id, newOrder)
                        }}
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs focus:outline-none focus:border-amber-500 font-bold"
                      />
                      <span className="text-[9px] text-slate-500 block mt-0.5">
                        Cùng Order sẽ Stack thành thanh Tab
                      </span>
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                        Huy Hiệu (Badge)
                      </label>
                      <input
                        type="text"
                        value={selectedNode.props.badge !== undefined ? String(selectedNode.props.badge) : ''}
                        placeholder="e.g. 2, NEW..."
                        onChange={(e) =>
                          updateComponentProps(selectedNode.id, {
                            badge: e.target.value || undefined,
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                      <span className="text-[9px] text-slate-500 block mt-0.5">
                        Số lượng / nhãn nhỏ
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── TAB 1.5: PHẦN TỬ CON (DANH SÁCH CHILDREN & SẮP XẾP ORDER - ẢNH 1) ── */}
        {isContainer && effectiveTab === 'children' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div>
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                  Danh Sách Phần Tử Con ({childrenList.length})
                </label>
                <p className="text-[10px] text-slate-500">
                  Sắp xếp ưu tiên theo trường Thứ tự (Order) từ nhỏ đến lớn
                </p>
              </div>
            </div>

            {childrenList.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl bg-slate-950/40">
                Chưa có phần tử con nào bên trong Container này. Chuột phải vào màn hình hoặc kéo thả để thêm mới.
              </div>
            ) : (
              <div className="space-y-2">
                {[...childrenList]
                  .sort((a, b) => (a.order ?? 1) - (b.order ?? 1))
                  .map((child, idx) => {
                    const isSelected = selection.componentId === child.id
                    const isChildTab = Boolean(child.props?.tab || child.props?.isTab || child.type === 'Tabs')
                    return (
                      <div
                        key={child.id}
                        onClick={() => selectComponent(child.id)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 shadow-sm'
                            : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                            #{idx + 1}
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-bold text-slate-200 truncate max-w-[140px]">
                                {child.props.label || child.props.title || child.type}
                              </span>
                              <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 uppercase font-mono">
                                {child.type}
                              </span>
                              {isChildTab && (
                                <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase">
                                  TAB
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono">#{child.id}</span>
                          </div>
                        </div>

                        {/* Order input & Actions */}
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="flex items-center gap-1" title="Thứ tự ưu tiên sắp xếp (từ nhỏ đến lớn)">
                            <span className="text-[10px] text-slate-400 font-semibold">Order:</span>
                            <input
                              type="number"
                              value={child.order ?? (idx + 1)}
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => {
                                const newOrder = Number(e.target.value)
                                updateComponentOrder(child.id, newOrder)
                              }}
                              className="w-14 px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs text-center focus:outline-none focus:border-amber-500 font-bold"
                            />
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeComponent(child.id)
                            }}
                            className="p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors cursor-pointer"
                            title="Xóa phần tử này"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )
                  })}
              </div>
            )}
          </div>
        )}

        {/* ── TAB 2: PROPS (THUỘC TÍNH NÂNG CAO & GRIDPOLICY INSPECTOR) ── */}
        {effectiveTab === 'props' && (
          <div className="space-y-4">
            {/* Thứ Tự & Số Cột Chiếm Dụng (Order & ColSpan) */}
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
              <label className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                Thứ Tự & Bố Cục (Order & Sắp Xếp)
              </label>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                    Thứ Tự (Order)
                  </label>
                  <input
                    type="number"
                    value={Number(selectedNode.order ?? selectedNode.props.order ?? 1)}
                    onChange={(e) => {
                      const newOrder = Number(e.target.value)
                      updateComponentOrder(selectedNode.id, newOrder)
                    }}
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-amber-400 font-mono text-xs focus:outline-none focus:border-amber-500 font-bold"
                  />
                  <span className="text-[9px] text-slate-500 block mt-0.5">
                    Sắp xếp nhỏ đến lớn. Cùng Order sẽ stack lại.
                  </span>
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                    Số Cột Chiếm Dụng (ColSpan)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="1"
                      max="48"
                      value={Number(selectedNode.props.colSpan || 4)}
                      onChange={(e) => {
                        const val = Math.max(1, Number(e.target.value) || 1)
                        updateComponentProps(selectedNode.id, { colSpan: val })
                      }}
                      className="w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                      title="Nhập số cột tùy ý (Ví dụ: 4 cho 1/3 dòng, 8 cho 2/3 dòng)"
                    />
                    <select
                      value={selectedNode.props.colSpan || 4}
                      onChange={(e) => updateComponentProps(selectedNode.id, { colSpan: Number(e.target.value) })}
                      className="flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value={1}>1 Cột (8.3%)</option>
                      <option value={2}>2 Cột (16.6%)</option>
                      <option value={3}>3 Cột (25%)</option>
                      <option value={4}>4 Cột (33.3% - 1/3 dòng)</option>
                      <option value={6}>6 Cột (50% - 1/2 dòng)</option>
                      <option value={8}>8 Cột (66.6% - 2/3 dòng)</option>
                      <option value={9}>9 Cột (75% dòng)</option>
                      <option value={12}>12 Cột (100% full dòng)</option>
                    </select>
                  </div>
                  <span className="text-[9px] text-cyan-400 block mt-1 font-mono font-medium">
                    Chiếm {selectedNode.props.colSpan || 4}/12 cột ({Math.round(((Number(selectedNode.props.colSpan) || 4) / 12) * 100)}% dòng)
                  </span>
                </div>
              </div>
            </div>
            {/* Kích hoạt chế độ Tab cho Container */}
            {isContainer && (
              <div className="p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Thuộc Tính Tab (tab = true)
                    </label>
                    <p className="text-[10px] text-slate-500">
                      Cùng Order với Container khác sẽ tự động Stack thành thanh Tab
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={Boolean(
                      selectedNode.props.tab ||
                        selectedNode.props.isTab ||
                        selectedNode.type === 'Tabs'
                    )}
                    onChange={(e) => {
                      const checked = e.target.checked
                      updateComponentProps(selectedNode.id, {
                        tab: checked,
                        isTab: checked,
                      })
                    }}
                    className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Phân hệ Tab chứa component này */}
            {parentTabContainer && (
              <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5">
                <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Thuộc Tab Phân Hệ (Container Cha)
                </label>
                <select
                  value={
                    selectedNode.props.tabId ||
                    ((parentTabContainer.props.tabs as any[])?.[0]?.id) ||
                    'main'
                  }
                  onChange={(e) => updateComponentProps(selectedNode.id, { tabId: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-medium"
                >
                  {(((parentTabContainer.props.tabs as any[]) || [])).map((t: any) => (
                    <option key={t.id} value={t.id}>
                      {t.label} ({t.id})
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-slate-400 mt-1">
                  Component này chỉ hiển thị khi người dùng chọn tab này trên Canvas.
                </p>
              </div>
            )}
            {/* Nhãn & Vị trí hiển thị (Left Label Standard) */}
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Nhãn Hiển Thị (Label)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400">Hiển thị nhãn</span>
                  <input
                    type="checkbox"
                    checked={selectedNode.props.showLabel ?? true}
                    onChange={(e) => updateComponentProps(selectedNode.id, { showLabel: e.target.checked })}
                    className="rounded bg-slate-800 border-slate-700 text-blue-600"
                  />
                </div>
              </div>
              <input
                type="text"
                value={selectedNode.props.label || ''}
                placeholder="Nhập tên nhãn (ví dụ: Job No., S. Lines...)"
                onChange={(e) => updateComponentProps(selectedNode.id, { label: e.target.value })}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500"
              />

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
                <div>
                  <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                    Vị Trí Nhãn
                  </label>
                  <select
                    value={selectedNode.props.labelPosition || 'left'}
                    onChange={(e) => updateComponentProps(selectedNode.id, { labelPosition: e.target.value as any })}
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs"
                  >
                    <option value="left">Bên Trái (Chuẩn ERP)</option>
                    <option value="top">Phía Trên (Top)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                    Số Cột Chiếm Dụng (ColSpan)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="1"
                      max="48"
                      value={Number(selectedNode.props.colSpan || 4)}
                      onChange={(e) => {
                        const val = Math.max(1, Number(e.target.value) || 1)
                        updateComponentProps(selectedNode.id, { colSpan: val })
                      }}
                      className="w-14 px-2 py-1.5 bg-slate-900 border border-slate-700 rounded text-blue-400 font-mono text-xs text-center font-bold"
                    />
                    <select
                      value={selectedNode.props.colSpan || 4}
                      onChange={(e) => updateComponentProps(selectedNode.id, { colSpan: Number(e.target.value) })}
                      className="flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs"
                    >
                      {[1, 2, 3, 4, 6, 8, 9, 12].map((n) => (
                        <option key={n} value={n}>
                          {n} Cột ({Math.round((n / 12) * 100)}%)
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-[9px] text-cyan-400 block mt-1 font-mono font-medium">
                    Chiếm {selectedNode.props.colSpan || 4}/12 cột ({Math.round(((Number(selectedNode.props.colSpan) || 4) / 12) * 100)}% dòng)
                  </span>
                </div>
              </div>
            </div>

            {/* Các trường đặc thù theo từng component */}
            {selectedNode.type === 'TextBox' && (
              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Placeholder Gợi Ý
                </label>
                <input
                  type="text"
                  value={selectedNode.props.placeholder || ''}
                  onChange={(e) => updateComponentProps(selectedNode.id, { placeholder: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                />
              </div>
            )}

            {selectedNode.type === 'Textarea' && (
              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Số Dòng Hiển Thị (Rows)
                </label>
                <input
                  type="number"
                  min={2}
                  max={20}
                  value={selectedNode.props.rows || 3}
                  onChange={(e) => updateComponentProps(selectedNode.id, { rows: Number(e.target.value) })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                />
              </div>
            )}

            {selectedNode.type === 'Number' && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-semibold text-slate-400 uppercase block mb-1">
                    Số Chữ Số Thập Phân (Precision)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={6}
                    value={selectedNode.props.precision !== undefined ? selectedNode.props.precision : 2}
                    onChange={(e) => updateComponentProps(selectedNode.id, { precision: Number(e.target.value) })}
                    className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100"
                  />
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <input
                    type="checkbox"
                    checked={selectedNode.props.thousandsSeparator ?? true}
                    onChange={(e) => updateComponentProps(selectedNode.id, { thousandsSeparator: e.target.checked })}
                    className="rounded bg-slate-800 border-slate-700 text-blue-600"
                  />
                  <span className="text-[10px] text-slate-300">Phân cách hàng nghìn</span>
                </div>
              </div>
            )}

            {/* ── BẢNG DỮ LIỆU: GRIDPOLICY COLUMNS INSPECTOR (ẢNH 3, 5 & 6) ── */}
            {selectedNode.type === 'Table' && (() => {
              const rawCols = (selectedNode.props.columns as TableColumn[]) || []
              const selectedCol = selectedColumnIndex !== null ? rawCols[selectedColumnIndex] : null

              const updateColumn = (idx: number, patch: Partial<TableColumn>) => {
                const updated = rawCols.map((c, i) => (i === idx ? { ...c, ...patch } : c))
                updateComponentProps(selectedNode.id, { columns: updated })
              }

              const handleMoveColumn = (fromIdx: number, toIdx: number) => {
                if (toIdx < 0 || toIdx >= rawCols.length) return
                const reordered = moveColumn(rawCols, fromIdx, toIdx)
                updateComponentProps(selectedNode.id, { columns: reordered })
                setSelectedColumnIndex(toIdx)
              }

              const handleToggleFreeze = (columnKey: string) => {
                const reordered = toggleColumnFreeze(rawCols, columnKey)
                updateComponentProps(selectedNode.id, { columns: reordered })
                const newIdx = reordered.findIndex((c) => c.key === columnKey)
                if (newIdx !== -1) setSelectedColumnIndex(newIdx)
              }

              const handleOrderChange = (fromIdx: number, newOrder: number) => {
                const targetIdx = Math.max(0, Math.min(rawCols.length - 1, newOrder - 1))
                if (targetIdx !== fromIdx) {
                  const reordered = moveColumn(rawCols, fromIdx, targetIdx)
                  updateComponentProps(selectedNode.id, { columns: reordered })
                  setSelectedColumnIndex(targetIdx)
                }
              }

              const addColumn = () => {
                const newCol: TableColumn = {
                  key: `col_${Date.now().toString().slice(-4)}`,
                  title: 'Cột Mới',
                  width: '120px',
                  align: 'left',
                  componentType: 'TextBox',
                  editable: true,
                  sortable: true,
                  order: rawCols.length + 1,
                }
                const updated = normalizeColumnOrders([...rawCols, newCol])
                updateComponentProps(selectedNode.id, { columns: updated })
                setSelectedColumnIndex(updated.length - 1)
              }

              const removeColumn = (idx: number) => {
                const filtered = rawCols.filter((_, i) => i !== idx)
                const updated = normalizeColumnOrders(filtered)
                updateComponentProps(selectedNode.id, { columns: updated })
                if (selectedColumnIndex === idx) setSelectedColumnIndex(null)
                else if (selectedColumnIndex !== null && selectedColumnIndex > idx) setSelectedColumnIndex(selectedColumnIndex - 1)
              }

              return (
                <div className="space-y-3 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <TableIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Quản Lý Cột (GridPolicy Model)</span>
                    </label>
                    <button
                      type="button"
                      onClick={addColumn}
                      className="px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 rounded text-[10px] font-bold flex items-center gap-1 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Thêm Cột</span>
                    </button>
                  </div>

                  {/* Danh sách cột kiểu tóm tắt giống Ảnh 3 */}
                  <div className="max-h-48 overflow-y-auto border border-slate-800 rounded-lg divide-y divide-slate-800 bg-slate-950">
                    {rawCols.map((col, idx) => {
                      const isSelected = selectedColumnIndex === idx
                      const isFrozen = Boolean(col.frozen || col.sticky === 'left')
                      const isBeingDragged = listDragIdx === idx
                      const isDragOver = listDragOverIdx === idx

                      return (
                        <div
                          key={col.key || idx}
                          draggable={true}
                          onDragStart={() => setListDragIdx(idx)}
                          onDragOver={(e) => {
                            e.preventDefault()
                            if (listDragIdx === null || listDragIdx === idx) return
                            setListDragOverIdx(idx)
                          }}
                          onDragLeave={() => setListDragOverIdx(null)}
                          onDrop={() => {
                            if (listDragIdx !== null && listDragIdx !== idx) {
                              handleMoveColumn(listDragIdx, idx)
                            }
                            setListDragIdx(null)
                            setListDragOverIdx(null)
                          }}
                          onDragEnd={() => {
                            setListDragIdx(null)
                            setListDragOverIdx(null)
                          }}
                          onClick={() => setSelectedColumnIndex(idx)}
                          className={`p-2 flex items-center justify-between cursor-pointer transition-all ${
                            isBeingDragged ? 'opacity-30 bg-slate-800' : ''
                          } ${
                            isDragOver ? 'border-t-2 border-t-emerald-400 bg-emerald-500/10' : ''
                          } ${
                            isSelected ? 'bg-blue-600/20 text-blue-200' : 'hover:bg-slate-900 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 min-w-0">
                            {/* Icon kéo thả (Drag Handle) */}
                            <GripVertical className="w-3.5 h-3.5 text-slate-500 hover:text-emerald-400 cursor-grab active:cursor-grabbing flex-shrink-0" />

                            {/* Nút điều hướng thứ tự cột (Move Up / Down) */}
                            <div className="flex flex-col gap-0.5 -ml-0.5 mr-0.5">
                              <button
                                type="button"
                                disabled={idx === 0}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleMoveColumn(idx, idx - 1)
                                }}
                                title="Đẩy cột lên trước (Order giảm dần)"
                                className="p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500"
                              >
                                <ChevronUp className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                disabled={idx === rawCols.length - 1}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleMoveColumn(idx, idx + 1)
                                }}
                                title="Hạ cột xuống sau (Order tăng dần)"
                                className="p-0.5 rounded text-slate-500 hover:text-cyan-400 hover:bg-slate-800 disabled:opacity-20 disabled:hover:text-slate-500"
                              >
                                <ChevronDown className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="text-[10px] font-mono text-slate-500 font-bold min-w-[22px]">
                              #{col.order ?? idx + 1}
                            </span>
                            <span className="font-bold truncate text-xs">{col.title}</span>
                            <span className="text-[10px] text-cyan-400 font-mono">[{col.key}]</span>
                            {isFrozen && (
                              <span className="px-1 py-0.2 bg-amber-500/20 text-amber-300 rounded text-[9px] font-semibold border border-amber-500/30">
                                📌 Ghim
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-500 font-mono">{col.width || 'auto'}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeColumn(idx)
                              }}
                              className="text-slate-500 hover:text-red-400 p-0.5"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Chi tiết cài đặt thuộc tính cột đang chọn (Tương ứng Ảnh 6) */}
                  {selectedCol && selectedColumnIndex !== null && (
                    <div className="p-3 bg-slate-950 border border-cyan-800/40 rounded-xl space-y-3">
                      <div className="text-[11px] font-bold text-cyan-300 flex items-center justify-between">
                        <span>Chi Tiết Thuộc Tính Cột: {selectedCol.title}</span>
                        <span className="text-[10px] font-mono text-slate-500">Index: {selectedColumnIndex}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsColumnModalOpen(true)}
                        className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold transition-colors"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Mở Modal Cấu Hình Đầy Đủ (Chuẩn Ảnh 6)</span>
                      </button>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="text-[10px] font-semibold text-amber-400 block mb-1">
                            Thứ Tự (Order)
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={rawCols.length}
                            value={selectedCol.order ?? (selectedColumnIndex + 1)}
                            onChange={(e) => {
                              const newOrder = parseInt(e.target.value, 10)
                              if (!isNaN(newOrder)) {
                                handleOrderChange(selectedColumnIndex, newOrder)
                              }
                            }}
                            className="w-full px-2.5 py-1.5 bg-slate-900 border border-amber-600/40 rounded text-amber-400 font-mono text-xs font-bold focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-slate-400 block mb-1">
                            Field Name (Trường DB)
                          </label>
                          <input
                            type="text"
                            value={selectedCol.key}
                            onChange={(e) => updateColumn(selectedColumnIndex, { key: e.target.value })}
                            className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-cyan-400 font-mono text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-slate-400 block mb-1">
                            Short Desc (Tên Tiêu Đề)
                          </label>
                          <input
                            type="text"
                            value={selectedCol.title}
                            onChange={(e) => updateColumn(selectedColumnIndex, { title: e.target.value })}
                            className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] font-semibold text-slate-400 block mb-1">
                            Component Kiểu Ô
                          </label>
                          <select
                            value={selectedCol.componentType || 'TextBox'}
                            onChange={(e) => updateColumn(selectedColumnIndex, { componentType: e.target.value as any })}
                            className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs"
                          >
                            <option value="TextBox">Input (Văn bản)</option>
                            <option value="Number">Number (Số / Cân nặng)</option>
                            <option value="DatePicker">Datepicker (Lịch ngày)</option>
                            <option value="Select">Dropdown (Lựa chọn)</option>
                            <option value="Checkbox">Checkbox (Hộp kiểm)</option>
                            <option value="Button">Button (Thao tác)</option>
                            <option value="Label">Label (Nhãn thuần)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-slate-400 block mb-1">
                            Độ Rộng (Width)
                          </label>
                          <input
                            type="text"
                            value={selectedCol.width || ''}
                            placeholder="144px, 120px..."
                            onChange={(e) => updateColumn(selectedColumnIndex, { width: e.target.value })}
                            className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] font-semibold text-slate-400 block mb-1">
                            Căn Lề (Align)
                          </label>
                          <select
                            value={selectedCol.align || 'left'}
                            onChange={(e) => updateColumn(selectedColumnIndex, { align: e.target.value as any })}
                            className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs"
                          >
                            <option value="left">Căn Trái</option>
                            <option value="center">Căn Giữa</option>
                            <option value="right">Căn Phải (Số liệu)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-slate-400 block mb-1">
                            Tính Tổng (Summary)
                          </label>
                          <select
                            value={selectedCol.aggregate || 'none'}
                            onChange={(e) => updateColumn(selectedColumnIndex, { aggregate: e.target.value as any })}
                            className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-100 text-xs"
                          >
                            <option value="none">Không tính tổng</option>
                            <option value="sum">Tổng cộng (Sum)</option>
                            <option value="avg">Trung bình (Avg)</option>
                            <option value="count">Đếm số dòng (Count)</option>
                          </select>
                        </div>
                      </div>

                      {/* Các cờ điều khiển: Frozen, Editable, Sortable */}
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
                        <label className="flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={Boolean(selectedCol.frozen || selectedCol.sticky === 'left')}
                            onChange={() => handleToggleFreeze(selectedCol.key)}
                            className="rounded bg-slate-800 border-slate-700 text-amber-500"
                          />
                          <span className="font-semibold text-amber-400">Cố định (Frozen)</span>
                        </label>
                        <label className="flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCol.editable ?? true}
                            onChange={(e) => updateColumn(selectedColumnIndex, { editable: e.target.checked })}
                            className="rounded bg-slate-800 border-slate-700 text-blue-500"
                          />
                          <span>Cho phép sửa</span>
                        </label>
                        <label className="flex items-center gap-1.5 text-[10px] text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCol.sortable ?? true}
                            onChange={(e) => updateColumn(selectedColumnIndex, { sortable: e.target.checked })}
                            className="rounded bg-slate-800 border-slate-700 text-emerald-500"
                          />
                          <span>Sắp xếp</span>
                        </label>
                      </div>

                      {/* Sự kiện gắn trên cột (Quick Event Info) */}
                      <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span>Sự Kiện Cột ({Array.isArray(selectedCol.events) ? selectedCol.events.length : selectedCol.action ? 1 : 0})</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsColumnModalOpen(true)}
                            className="text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer flex items-center gap-0.5"
                          >
                            <span>Cấu hình chi tiết</span>
                            <span>&rarr;</span>
                          </button>
                        </div>
                        <div className="text-[11px] text-slate-300 font-mono">
                          {Array.isArray(selectedCol.events) && selectedCol.events.length > 0 ? (
                            <span className="text-emerald-300">
                              {selectedCol.events.map((e) => `${e.trigger} ➔ ${e.handlerName || e.action}()`).join(', ')}
                            </span>
                          ) : selectedCol.action ? (
                            <span className="text-emerald-300">click ➔ {selectedCol.action}()</span>
                          ) : (
                            <span className="text-slate-500 italic">Chưa gắn sự kiện</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {isColumnModalOpen && selectedCol && selectedColumnIndex !== null && (
                    <ColumnPropertiesModal
                      isOpen={isColumnModalOpen}
                      column={selectedCol}
                      onClose={() => setIsColumnModalOpen(false)}
                      onSave={(updated) => {
                        const updatedCols = rawCols.map((c, i) => (i === selectedColumnIndex ? updated : c))
                        const normalized = normalizeColumnOrders(updatedCols)
                        updateComponentProps(selectedNode.id, { columns: normalized })
                        const newIdx = normalized.findIndex((c) => c.key === updated.key)
                        if (newIdx !== -1) setSelectedColumnIndex(newIdx)
                      }}
                    />
                  )}
                </div>
              )
            })()}

            {/* Trạng thái chung: Disabled, Required, Readonly */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Bắt buộc nhập (Required)</span>
                <input
                  type="checkbox"
                  checked={Boolean(selectedNode.props.required)}
                  onChange={(e) => updateComponentProps(selectedNode.id, { required: e.target.checked })}
                  className="rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Vô hiệu hóa (Disabled)</span>
                <input
                  type="checkbox"
                  checked={Boolean(selectedNode.props.disabled)}
                  onChange={(e) => updateComponentProps(selectedNode.id, { disabled: e.target.checked })}
                  className="rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: STYLES / CSS TÙY BIẾN ── */}
        {effectiveTab === 'styles' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Độ rộng (Width)
                </label>
                <input
                  type="text"
                  value={selectedNode.style.width || ''}
                  placeholder="100%, 250px..."
                  onChange={(e) => updateComponentStyle(selectedNode.id, { width: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Chiều cao (Height)
                </label>
                <input
                  type="text"
                  value={selectedNode.style.height || selectedNode.style.minHeight || ''}
                  placeholder="auto, 120px..."
                  onChange={(e) =>
                    updateComponentStyle(selectedNode.id, {
                      height: e.target.value,
                      minHeight: e.target.value,
                    })
                  }
                  className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                />
              </div>
            </div>

            {/* Custom CSS Textarea */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CSS Tùy Chỉnh (Custom CSS)</span>
                </label>
                <span className="text-[10px] text-cyan-400 font-mono">Trực tiếp</span>
              </div>
              <textarea
                rows={5}
                value={selectedNode.style.customCss || formatStyleToCss(selectedNode.style)}
                placeholder="border-radius: 8px;&#10;box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                onChange={(e) => {
                  const raw = e.target.value
                  const parsed = parseRawCss(raw)
                  updateComponentStyle(selectedNode.id, {
                    ...parsed,
                    customCss: raw,
                  })
                  // Tự động đồng bộ sang flexConfig nếu có justify-content hoặc align-items:
                  if (parsed.justifyContent || parsed.alignItems) {
                    const currentFlex = (selectedNode.props.flexConfig as any) || {}
                    updateComponentProps(selectedNode.id, {
                      flexConfig: {
                        ...currentFlex,
                        ...(parsed.justifyContent ? { justify: parsed.justifyContent } : {}),
                        ...(parsed.alignItems ? { align: parsed.alignItems } : {}),
                      },
                    })
                  }
                }}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
              />
            </div>
          </div>
        )}

        {/* ── TAB 4: EVENTS (ĐA SỰ KIỆN & TEST RUNNER) ── */}
        {effectiveTab === 'events' && (
          <UnifiedEventEditor
            events={selectedNode.events || []}
            onChange={(newEvents) => updateComponentEvents(selectedNode.id, newEvents)}
            scriptFile={activeFeature?.scriptFile || 'transactionList.bl.ts'}
            componentName={selectedNode.props.label || selectedNode.type}
            componentId={selectedNode.id}
            contextExtra={{
              pageId: activeFeatureId,
              nodeId: selectedNode.id,
              type: selectedNode.type,
            }}
          />
        )}

        {/* ── TAB 5: DATA BINDING (LIÊN KẾT THỰC THỂ) ── */}
        {effectiveTab === 'data' && (() => {
          const binding = selectedNode.dataBinding || {}
          const selectedEntity = MOCK_ENTITY_CATALOGS.find((e) => e.name === binding.entityName)
          const availableFields = selectedEntity ? selectedEntity.fields : []

          return (
            <div className="space-y-4">
              <div className="p-3 bg-blue-950/20 border border-blue-800/40 rounded-xl space-y-1">
                <div className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span>Liên Kết Dữ Liệu Thực Thể (Data Binding)</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Liên kết component này với một trường dữ liệu trong thực thể nghiệp vụ (Entity Catalog). Dữ liệu sẽ tự động được tải và lưu trữ đồng bộ.
                </p>
              </div>

              {/* Chọn Thực Thể (Entity) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Thực Thể Dữ Liệu (Entity)
                </label>
                <select
                  value={binding.entityName || ''}
                  onChange={(e) => {
                    const entName = e.target.value
                    const ent = MOCK_ENTITY_CATALOGS.find((x) => x.name === entName)
                    const firstField = ent?.fields[0]?.name || ''
                    updateComponentDataBinding(selectedNode.id, {
                      entityName: entName,
                      fieldName: firstField,
                    })
                  }}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="">-- Chọn Thực Thể --</option>
                  {MOCK_ENTITY_CATALOGS.map((ent) => (
                    <option key={ent.id} value={ent.name}>
                      {ent.displayName} ({ent.name})
                    </option>
                  ))}
                </select>
              </div>

              {/* Chọn Trường Dữ Liệu (Field) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Trường Dữ Liệu (Field Name)
                </label>
                <select
                  disabled={!selectedEntity}
                  value={binding.fieldName || ''}
                  onChange={(e) => updateComponentDataBinding(selectedNode.id, { fieldName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:outline-none focus:border-blue-500 disabled:opacity-50 cursor-pointer"
                >
                  <option value="">-- Chọn Trường Dữ Liệu --</option>
                  {availableFields.map((f) => (
                    <option key={f.name} value={f.name}>
                      {f.displayName} ({f.name}) [{f.dataType}]
                    </option>
                  ))}
                </select>
              </div>

              {/* Bộ Định Dạng Dữ Liệu (Formatter) */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Định Dạng Dữ Liệu (Formatter)
                </label>
                <select
                  value={binding.formatter || ''}
                  onChange={(e) => updateComponentDataBinding(selectedNode.id, { formatter: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  <option value="">Mặc định (Không định dạng)</option>
                  <option value="currency_vnd">Tiền tệ VND (₫ 1,000,000)</option>
                  <option value="currency_usd">Tiền tệ USD ($ 1,000.00)</option>
                  <option value="date_ddmmyyyy">Ngày tháng (DD/MM/YYYY)</option>
                  <option value="number_commas">Phân cách hàng nghìn (1,000,000)</option>
                  <option value="uppercase">Chữ hoa (UPPERCASE)</option>
                </select>
              </div>

              {/* Binding 2 Chiều (Two-Way Binding) */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-300 block font-semibold">Đồng bộ 2 chiều (Two-Way)</span>
                  <span className="text-[10px] text-slate-500">Tự động cập nhật model khi người dùng gõ</span>
                </div>
                <input
                  type="checkbox"
                  checked={binding.twoWay ?? true}
                  onChange={(e) => updateComponentDataBinding(selectedNode.id, { twoWay: e.target.checked })}
                  className="rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
                />
              </div>
            </div>
          )
        })()}

        {/* ── TAB 6: VALIDATION (QUY TẮC XÁC THỰC) ── */}
        {effectiveTab === 'validation' && (() => {
          const val = selectedNode.validation || {}

          return (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1">
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Quy Tắc Xác Thực Dữ Liệu (Validation Rules)</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Thiết lập các điều kiện kiểm tra hợp lệ cho ô nhập liệu. Hệ thống sẽ tự động hiển thị thông báo lỗi khi không thỏa mãn.
                </p>
              </div>

              {/* Bắt buộc nhập */}
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-200 font-bold">Bắt buộc nhập (Required)</span>
                  <input
                    type="checkbox"
                    checked={Boolean(val.required)}
                    onChange={(e) => updateComponentValidation(selectedNode.id, { required: e.target.checked })}
                    className="rounded bg-slate-800 border-slate-700 text-red-500 cursor-pointer"
                  />
                </div>
                {val.required && (
                  <input
                    type="text"
                    placeholder="Thông báo lỗi khi để trống (ví dụ: Trường này là bắt buộc)..."
                    value={val.requiredMessage || ''}
                    onChange={(e) => updateComponentValidation(selectedNode.id, { requiredMessage: e.target.value })}
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                )}
              </div>

              {/* Độ dài ký tự */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Độ dài tối thiểu (Min)
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="0"
                    value={val.minLength !== undefined ? val.minLength : ''}
                    onChange={(e) =>
                      updateComponentValidation(selectedNode.id, {
                        minLength: e.target.value === '' ? undefined : Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Độ dài tối đa (Max)
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="255"
                    value={val.maxLength !== undefined ? val.maxLength : ''}
                    onChange={(e) =>
                      updateComponentValidation(selectedNode.id, {
                        maxLength: e.target.value === '' ? undefined : Number(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Regex Pattern */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Mẫu Kiểm Tra Regex (Pattern)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: ^[A-Z0-9]{8,18}$ (Mã Bill MBL)"
                  value={val.pattern || ''}
                  onChange={(e) => updateComponentValidation(selectedNode.id, { pattern: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Thông báo lỗi khi không khớp mẫu Regex..."
                  value={val.patternMessage || ''}
                  onChange={(e) => updateComponentValidation(selectedNode.id, { patternMessage: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Custom Validator Function */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Hàm Xác Thực Nghiệp Vụ Tùy Biến (Custom BL)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: CheckMBL, validateTaxCode..."
                  value={val.customValidator || ''}
                  onChange={(e) => updateComponentValidation(selectedNode.id, { customValidator: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <p className="text-[10px] text-slate-500">
                  Tên hàm trong file logic (BL) sẽ được gọi để thẩm định dữ liệu nâng cao.
                </p>
              </div>
            </div>
          )
        })()}

        {/* ── TAB 7: PHÂN QUYỀN MỊN (FIELD-LEVEL RBAC - KẾ THỪA SECURITYBL & POLICYEDITORBL) ── */}
        {effectiveTab === 'permissions' && (() => {
          const perms = selectedNode.permissions || {}
          const standardRoles = ['Admin', 'Dev', 'User', 'Manager', 'Staff', 'Customer']
          const allowedList = perms.allowedRoles || []
          const readOnlyList = perms.readOnlyRoles || []

          const toggleAllowedRole = (role: string) => {
            const next = allowedList.includes(role)
              ? allowedList.filter((r) => r !== role)
              : [...allowedList, role]
            updateComponentPermissions(selectedNode.id, { allowedRoles: next })
          }

          const toggleReadOnlyRole = (role: string) => {
            const next = readOnlyList.includes(role)
              ? readOnlyList.filter((r) => r !== role)
              : [...readOnlyList, role]
            updateComponentPermissions(selectedNode.id, { readOnlyRoles: next })
          }

          return (
            <div className="space-y-4">
              <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Phân Quyền Trường Dữ Liệu (Field-Level RBAC)</span>
                </div>
                <p className="text-[11px] text-amber-200/80 leading-relaxed">
                  Kế thừa trực tiếp từ <code>SecurityBL.cs</code> &amp; <code>PolicyEditorBL.cs</code> của C# Core. Giới hạn hiển thị hoặc quyền thao tác cho từng vai trò trên giao diện.
                </p>
              </div>

              {/* Vai trò được phép xem & thao tác (allowedRoles) */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Vai Trò Được Phép Truy Cập (Allowed Roles)
                </label>
                <p className="text-[10px] text-slate-500">
                  Để trống = Tất cả mọi vai trò đều được truy cập.
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {standardRoles.map((role) => {
                    const isChecked = allowedList.includes(role)
                    return (
                      <button
                        key={role}
                        type="button"
                        onClick={() => toggleAllowedRole(role)}
                        className={`px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${isChecked
                          ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                          }`}
                      >
                        <span>{role}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Vai trò chỉ đọc (readOnlyRoles) */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Vai Trò Chỉ Đọc (Read-Only Roles)
                </label>
                <p className="text-[10px] text-slate-500">
                  Những vai trò này vẫn nhìn thấy component nhưng không thể sửa đổi hoặc click.
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {standardRoles.map((role) => {
                    const isChecked = readOnlyList.includes(role)
                    return (
                      <button
                        key={role}
                        type="button"
                        onClick={() => toggleReadOnlyRole(role)}
                        className={`px-2.5 py-1.5 rounded-lg border text-left text-xs font-medium flex items-center justify-between transition-colors ${isChecked
                          ? 'bg-amber-600/20 border-amber-500 text-amber-300'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                          }`}
                      >
                        <span>{role}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Hành vi khi không có quyền (deniedBehavior) */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Hành Vi Khi Không Có Quyền (Denied Behavior)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => updateComponentPermissions(selectedNode.id, { deniedBehavior: 'hide' })}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${(perms.deniedBehavior || 'hide') === 'hide'
                      ? 'bg-blue-600/20 border-blue-500 text-blue-200'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                  >
                    <div className="font-bold mb-0.5">Ẩn Hoàn Toàn</div>
                    <div className="text-[10px] text-slate-400">Không hiển thị trên màn hình</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateComponentPermissions(selectedNode.id, { deniedBehavior: 'disable' })}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-colors ${perms.deniedBehavior === 'disable'
                      ? 'bg-blue-600/20 border-blue-500 text-blue-200'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                  >
                    <div className="font-bold mb-0.5">Khóa Mờ (Disable)</div>
                    <div className="text-[10px] text-slate-400">Hiển thị xám chỉ đọc</div>
                  </button>
                </div>
              </div>
            </div>
          )
        })()}
      </div>

      {/* ── MODAL CẤU HÌNH COMPONENT PROPERTIES CHUẨN C# CORE (ẢNH MODAL CỦA MASTER) ── */}
      {isComponentModalOpen && selectedNode && (
        <ComponentPropertiesModal
          isOpen={isComponentModalOpen}
          node={selectedNode}
          onClose={() => setIsComponentModalOpen(false)}
          onSave={(nodeId, updatedProps, updatedBinding) => {
            updateComponentProps(nodeId, updatedProps)
            if (updatedBinding) {
              updateComponentDataBinding(nodeId, updatedBinding)
            }
          }}
        />
      )}
    </aside>
  )
}
