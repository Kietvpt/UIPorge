import React, { useState } from 'react'
import { useEditorStore } from '@/store/editorStore'
import {
  Sliders,
  Paintbrush,
  Zap,
  Trash2,
  Box,
  Columns,
  Maximize2,
  Layers,
  ArrowRightLeft,
  ArrowUpDown,
  Square,
  Type,
  FileText,
  Table as TableIcon,
  Plus,
  ChevronRight,
  Sparkles,
  FileCode,
  PlusCircle,
  Check,
  Code,
  Play,
} from 'lucide-react'
import { getFunctionsForBlFile, addFunctionToBlFile } from '@/logic/blRegistry'
import { executeSingleEvent } from '@/logic/eventRunner'
import { parseRawCss, formatStyleToCss } from './cssParser'
import type { LayoutMode, EventTrigger, EventAction, ComponentNode } from '@/types/schema'

interface PropertyPanelProps {
  width?: number
}

export const PropertyPanel: React.FC<PropertyPanelProps> = ({ width }) => {
  const [activeTab, setActiveTab] = useState<'layout' | 'children' | 'props' | 'styles' | 'events'>('layout')

  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const selection = useEditorStore((s) => s.selection)
  const selectComponent = useEditorStore((s) => s.selectComponent)
  const addComponent = useEditorStore((s) => s.addComponent)
  const updateComponentProps = useEditorStore((s) => s.updateComponentProps)
  const updateComponentStyle = useEditorStore((s) => s.updateComponentStyle)
  const updateComponentEvents = useEditorStore((s) => s.updateComponentEvents)
  const removeComponent = useEditorStore((s) => s.removeComponent)
  const distributeSiblingWidths = useEditorStore((s) => s.distributeSiblingWidths)
  const updateFeatureScriptFile = useEditorStore((s) => s.updateFeatureScriptFile)

  // Local state for adding function to BL file
  const [newBlFnInput, setNewBlFnInput] = useState('')
  // Force rerender when BL functions change
  const [blFnVer, setBlFnVer] = useState(0)

  const activeFeature = features.find((f) => f.id === activeFeatureId)

  // Find component recursively in tree
  const findNode = (nodes: any[]): any => {
    for (const node of nodes) {
      if (node.id === selection.componentId) return node
      if (node.children) {
        const found = findNode(node.children)
        if (found) return found
      }
    }
    return null
  }

  const selectedNode: ComponentNode | null = activeFeature ? findNode(activeFeature.components) : null

  if (!selectedNode) {
    const blFile = activeFeature?.scriptFile || ''
    const availableFns = getFunctionsForBlFile(blFile)

    return (
      <aside style={{ width: width ? `${width}px` : undefined }} className="w-80 border-l border-slate-800 bg-slate-900 flex flex-col h-full shrink-0 select-none overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Cấu hình Màn hình (Feature)
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">{activeFeature?.name}</p>
          </div>
          <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
            <FileCode className="w-4 h-4" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {/* File Nghiệp Vụ (BL File) Binding */}
          <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                📄 File Nghiệp Vụ (BL File)
              </label>
              <span className="text-[10px] text-amber-400 font-mono">TypeScript</span>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="customerManagement.bl.ts..."
                value={activeFeature?.scriptFile || ''}
                onChange={(e) => updateFeatureScriptFile(activeFeatureId, e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Mỗi màn hình gắn với 1 file logic. Các component trên màn hình này sẽ gọi các hàm được khai báo trong file này.
            </p>
          </div>

          {/* Danh mục hàm nghiệp vụ */}
          {blFile ? (
            <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  ⚡ Hàm Trong File ({availableFns.length})
                </label>
                <span className="text-[10px] text-emerald-400 font-mono">Exported</span>
              </div>

              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
                {availableFns.map((fn) => (
                  <span
                    key={fn}
                    className="px-2 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700 text-[11px] font-mono flex items-center gap-1 shadow-sm"
                  >
                    <span className="text-cyan-400">fn:</span>
                    <span>{fn}()</span>
                  </span>
                ))}
              </div>

              {/* Add function input */}
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                <label className="text-[10px] text-slate-400 font-medium">Thêm hàm mới vào file BL này:</label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder="Tên hàm, ví dụ: Hellowolrk1..."
                    value={newBlFnInput}
                    onChange={(e) => setNewBlFnInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        if (newBlFnInput.trim()) {
                          addFunctionToBlFile(blFile, newBlFnInput.trim())
                          setNewBlFnInput('')
                          setBlFnVer((v) => v + 1)
                        }
                      }
                    }}
                    className="flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newBlFnInput.trim()) {
                        addFunctionToBlFile(blFile, newBlFnInput.trim())
                        setNewBlFnInput('')
                        setBlFnVer((v) => v + 1)
                      }
                    }}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold cursor-pointer shrink-0 transition-colors"
                  >
                    + Thêm
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-amber-950/20 border border-amber-800/50 rounded-xl text-center text-amber-400 text-xs">
              Vui lòng nhập tên file BL ở trên để bắt đầu định nghĩa các hàm nghiệp vụ cho màn hình này.
            </div>
          )}

          <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            💡 Nhấp vào bất kỳ component nào trên Canvas để chỉnh sửa kiểu dáng CSS hoặc gắn các sự kiện gọi hàm tương ứng.
          </div>
        </div>
      </aside>
    )
  }

  const isContainer = selectedNode.type === 'Container'
  const effectiveTab = !isContainer && (activeTab === 'layout' || activeTab === 'children') ? 'props' : activeTab
  const layoutMode: LayoutMode = selectedNode.props.layoutMode || 'flex'
  const flexConfig = selectedNode.props.flexConfig || {
    direction: 'row',
    wrap: 'wrap',
    justify: 'flex-start',
    align: 'center',
    gap: '12px',
    columnsPerRow: 'auto',
  }
  const gridConfig = selectedNode.props.gridConfig || { columns: 2, gap: '16px' }
  const childrenList = selectedNode.children || []

  // Helper to get component icon
  const getComponentIcon = (type: string) => {
    switch (type) {
      case 'Container':
        return Box
      case 'Button':
        return Square
      case 'TextBox':
        return Type
      case 'Label':
        return FileText
      case 'Table':
        return TableIcon
      default:
        return Layers
    }
  }

  return (
    <aside style={{ width: width ? `${width}px` : undefined }} className="w-80 border-l border-slate-800 bg-slate-900 flex flex-col h-full shrink-0 select-none">
      {/* Header */}
      <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {selectedNode.type}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
              #{selectedNode.id.slice(-5)}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            {isContainer ? `Khoảng trắng (${childrenList.length} phần tử)` : 'Tùy biến phần tử'}
          </p>
        </div>

        <button
          onClick={() => removeComponent(selectedNode.id)}
          className="text-slate-400 hover:text-red-400 p-1.5 rounded hover:bg-slate-800 transition-colors cursor-pointer"
          title="Xóa Component này"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-medium overflow-x-auto">
        {isContainer && (
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${
              effectiveTab === 'layout'
                ? 'border-blue-500 text-blue-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            Bố cục
          </button>
        )}

        {/* Tab Thành Phần Con dành cho Container */}
        {isContainer && (
          <button
            onClick={() => setActiveTab('children')}
            className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${
              effectiveTab === 'children'
                ? 'border-blue-500 text-blue-400 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
            title="Xem và chuyển nhanh giữa các component con trong khoảng trắng này"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Phần tử ({childrenList.length})</span>
          </button>
        )}

        <button
          onClick={() => setActiveTab('styles')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${
            effectiveTab === 'styles'
              ? 'border-blue-500 text-blue-400 bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Paintbrush className="w-3.5 h-3.5" />
          CSS / Kích thước
        </button>

        <button
          onClick={() => setActiveTab('props')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${
            effectiveTab === 'props'
              ? 'border-blue-500 text-blue-400 bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          Props
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`px-3 py-2.5 flex items-center justify-center gap-1 border-b-2 shrink-0 transition-colors cursor-pointer ${
            effectiveTab === 'events'
              ? 'border-blue-500 text-blue-400 bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          Events
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {/* ── TAB 1: BỐ CỤC (FLEX / GRID CHUYÊN BIỆT CHO CONTAINER) ── */}
        {isContainer && effectiveTab === 'layout' && (
          <div className="space-y-4">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Kiểu Bố Cục (Layout Mode)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() =>
                    updateComponentProps(selectedNode.id, {
                      layoutMode: 'flex',
                    })
                  }
                  className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${
                    layoutMode === 'flex'
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
                  onClick={() =>
                    updateComponentProps(selectedNode.id, {
                      layoutMode: 'grid',
                    })
                  }
                  className={`p-2.5 rounded-lg border text-left flex items-center gap-2 cursor-pointer transition-all ${
                    layoutMode === 'grid'
                      ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-semibold shadow-sm'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <Columns className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-xs">CSS Grid</div>
                    <div className="text-[9px] text-slate-500">Chia theo lưới cột</div>
                  </div>
                </button>
              </div>
            </div>

            {/* If Flexbox */}
            {layoutMode === 'flex' && (
              <div className="space-y-3 p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <div className="text-[11px] font-bold text-slate-300">Cấu hình Flexbox</div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">
                    Hướng bố trí các phần tử bên trong:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        updateComponentProps(selectedNode.id, {
                          flexConfig: { ...flexConfig, direction: 'row' },
                        })
                      }
                      className={`p-2 rounded text-xs flex items-center justify-center gap-1.5 border cursor-pointer ${
                        flexConfig.direction === 'row'
                          ? 'bg-blue-600 text-white border-blue-500 font-bold shadow-sm'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
                      }`}
                    >
                      <ArrowRightLeft className="w-3.5 h-3.5" />
                      <span>Hàng ngang (Row)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        updateComponentProps(selectedNode.id, {
                          flexConfig: { ...flexConfig, direction: 'column' },
                        })
                      }
                      className={`p-2 rounded text-xs flex items-center justify-center gap-1.5 border cursor-pointer ${
                        flexConfig.direction === 'column'
                          ? 'bg-blue-600 text-white border-blue-500 font-bold shadow-sm'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
                      }`}
                    >
                      <ArrowUpDown className="w-3.5 h-3.5" />
                      <span>Cột dọc (Column)</span>
                    </button>
                  </div>
                </div>

                {/* Số cột trên dòng (Columns per row) - Cho phép nhập số lượng tùy ý */}
                {flexConfig.direction === 'row' && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[10px] text-slate-300 block font-bold">
                        Số ô / cột trên 1 dòng:
                      </label>
                      <span className="text-[10px] text-cyan-400 font-mono font-semibold">
                        {flexConfig.columnsPerRow && flexConfig.columnsPerRow !== 'auto'
                          ? `${flexConfig.columnsPerRow} ô/dòng`
                          : 'Tự động (Auto)'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={1}
                        max={16}
                        value={
                          flexConfig.columnsPerRow && flexConfig.columnsPerRow !== 'auto'
                            ? flexConfig.columnsPerRow
                            : ''
                        }
                        placeholder="Nhập số cột (vd: 2, 3, 4, 6...)"
                        onChange={(e) => {
                          const val = e.target.value.trim()
                          const num = parseInt(val, 10)
                          updateComponentProps(selectedNode.id, {
                            flexConfig: {
                              ...flexConfig,
                              columnsPerRow: !isNaN(num) && num > 0 ? num : 'auto',
                            },
                          })
                        }}
                        className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
                      />
                      {flexConfig.columnsPerRow && flexConfig.columnsPerRow !== 'auto' && (
                        <button
                          type="button"
                          onClick={() =>
                            updateComponentProps(selectedNode.id, {
                              flexConfig: {
                                ...flexConfig,
                                columnsPerRow: 'auto',
                              },
                            })
                          }
                          className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 text-xs border border-slate-700 cursor-pointer"
                        >
                          Xóa
                        </button>
                      )}
                    </div>

                    {/* Quick buttons */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[10px] text-slate-500">Gợi ý nhanh:</span>
                      {[2, 3, 4, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() =>
                            updateComponentProps(selectedNode.id, {
                              flexConfig: {
                                ...flexConfig,
                                columnsPerRow: num,
                              },
                            })
                          }
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border transition-colors cursor-pointer ${
                            flexConfig.columnsPerRow === num
                              ? 'bg-blue-600 text-white border-blue-500'
                              : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-750'
                          }`}
                        >
                          {num} ô
                        </button>
                      ))}
                    </div>

                    <p className="text-[10px] text-slate-500 mt-1.5 italic">
                      💡 Ví dụ nhập <strong>4</strong>: Hệ thống sẽ tự động ép đúng <strong>4 ô trên 1 dòng</strong>. Nếu bạn thêm 8 ô, 4 ô sau sẽ tự động xuống dòng thứ 2!
                    </p>
                  </div>
                )}

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Canh lề chính (Justify):</label>
                  <select
                    value={flexConfig.justify}
                    onChange={(e) =>
                      updateComponentProps(selectedNode.id, {
                        flexConfig: { ...flexConfig, justify: e.target.value as any },
                      })
                    }
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200"
                  >
                    <option value="flex-start">Bắt đầu (Start)</option>
                    <option value="center">Ở giữa (Center)</option>
                    <option value="space-between">Giãn đều hai bên (Space-Between)</option>
                    <option value="flex-end">Cuối cùng (End)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Khoảng cách giữa các mục (Gap):</label>
                  <input
                    type="text"
                    value={flexConfig.gap || '12px'}
                    onChange={(e) =>
                      updateComponentProps(selectedNode.id, {
                        flexConfig: { ...flexConfig, gap: e.target.value },
                      })
                    }
                    placeholder="12px, 16px..."
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono"
                  />
                </div>
              </div>
            )}

            {/* If CSS Grid */}
            {layoutMode === 'grid' && (
              <div className="space-y-3 p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <div className="text-[11px] font-bold text-slate-300">Cấu hình CSS Grid</div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Số cột lưới (Columns):</label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4].map((col) => (
                      <button
                        key={col}
                        type="button"
                        onClick={() =>
                          updateComponentProps(selectedNode.id, {
                            gridConfig: { ...gridConfig, columns: col },
                          })
                        }
                        className={`p-1.5 rounded text-xs font-mono font-bold border cursor-pointer ${
                          gridConfig.columns === col
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        {col} Col
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Khoảng cách ô lưới (Gap):</label>
                  <input
                    type="text"
                    value={gridConfig.gap || '16px'}
                    onChange={(e) =>
                      updateComponentProps(selectedNode.id, {
                        gridConfig: { ...gridConfig, gap: e.target.value },
                      })
                    }
                    placeholder="16px, 20px..."
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded text-slate-200 font-mono"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TAB 2: THÀNH PHẦN CON TRONG KHOẢNG TRẮNG NÀY (BẤM VÀO THÌ TRỎ ĐẾN ĐÓ) ── */}
        {isContainer && effectiveTab === 'children' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                  Phần tử bên trong khoảng trắng
                </span>
                <span className="text-[10px] text-slate-500">
                  Nhấp vào để trỏ và điều chỉnh trực tiếp component đó
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-900 font-semibold">
                {childrenList.length} items
              </span>
            </div>

            {childrenList.length === 0 ? (
              <div className="p-5 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 text-xs italic">
                Khoảng trắng này chưa có component con nào. Chuột phải lên khoảng trắng để thêm!
              </div>
            ) : (
              <div className="space-y-1.5">
                {childrenList.map((child, idx) => {
                  const Icon = getComponentIcon(child.type)
                  const sizeLabel = child.style.width || (child.style.flex ? 'Flex: 1' : 'Auto')

                  return (
                    <div
                      key={child.id}
                      onClick={() => selectComponent(child.id)}
                      className="group flex items-center justify-between p-2.5 rounded-xl border border-slate-800 bg-slate-800/50 hover:bg-slate-800 hover:border-blue-500/50 transition-all cursor-pointer"
                      title="Bấm để chọn và điều chỉnh component này"
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <div className="p-1.5 rounded-lg bg-slate-900 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/20 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="truncate text-left">
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                            {child.props.label ? String(child.props.label) : child.type}
                          </div>
                          <div className="text-[10px] text-slate-500 flex items-center gap-1.5 font-mono">
                            <span>#{child.id.slice(-4)}</span>
                            <span>•</span>
                            <span className="text-cyan-400">{sizeLabel}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeComponent(child.id)
                          }}
                          className="p-1 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Xóa component con này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ── TAB 3: CSS & KÍCH THƯỚC (TỰ ĐỘNG CHIA ĐỀU KHÔNG GIAN CÒN LẠI CHO SIBLINGS) ── */}
        {effectiveTab === 'styles' && (
          <div className="space-y-4">
            {/* Quick Sizing Presets */}
            <div className="p-3 bg-gradient-to-br from-blue-950/40 to-slate-900 rounded-xl border border-blue-900/50 space-y-2.5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <label className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider block">
                  ⚡ Chọn nhanh kích thước ô (Không đổi setting ô khác)
                </label>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    updateComponentStyle(selectedNode.id, {
                      width: '50%',
                      flex: '0 0 50%',
                      maxWidth: '50%',
                      minWidth: 0,
                    })
                  }
                  className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                    selectedNode.style.width === '50%'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  50% (Nửa hàng)
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateComponentStyle(selectedNode.id, {
                      width: '33.333%',
                      flex: '0 0 33.333%',
                      maxWidth: '33.333%',
                      minWidth: 0,
                    })
                  }
                  className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                    selectedNode.style.width === '33.333%'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  33.3% (1/3 hàng)
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateComponentStyle(selectedNode.id, {
                      width: '25%',
                      flex: '0 0 25%',
                      maxWidth: '25%',
                      minWidth: 0,
                    })
                  }
                  className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                    selectedNode.style.width === '25%'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  25% (1/4 hàng)
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateComponentStyle(selectedNode.id, {
                      width: '100%',
                      flex: '0 0 100%',
                      maxWidth: '100%',
                      minWidth: 0,
                    })
                  }
                  className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                    selectedNode.style.width === '100%'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  100% (Toàn dòng)
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateComponentStyle(selectedNode.id, {
                      flex: '1 1 0%',
                      width: undefined,
                      maxWidth: undefined,
                      minWidth: 0,
                    })
                  }
                  className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer col-span-2 ${
                    selectedNode.style.flex === '1 1 0%' && !selectedNode.style.width
                      ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  Tự co giãn chia đều (Flex: 1)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Độ rộng tùy chỉnh (Width)
                </label>
                <input
                  type="text"
                  value={selectedNode.style.width || ''}
                  placeholder="50%, 300px, 100%..."
                  onChange={(e) => {
                    const val = e.target.value
                    if (val.endsWith('%') || val.endsWith('px')) {
                      updateComponentStyle(selectedNode.id, {
                        width: val,
                        flex: `0 0 ${val}`,
                        maxWidth: val,
                        minWidth: 0,
                      })
                    } else {
                      updateComponentStyle(selectedNode.id, {
                        width: val,
                        flex: undefined,
                        maxWidth: undefined,
                      })
                    }
                  }}
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

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Padding (Đệm trong)
                </label>
                <input
                  type="text"
                  value={selectedNode.style.padding || ''}
                  placeholder="16px..."
                  onChange={(e) => updateComponentStyle(selectedNode.id, { padding: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                />
              </div>

              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Bo góc (Radius)
                </label>
                <input
                  type="text"
                  value={selectedNode.style.borderRadius || ''}
                  placeholder="8px, 12px..."
                  onChange={(e) => updateComponentStyle(selectedNode.id, { borderRadius: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Màu nền (Background Color)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedNode.style.backgroundColor || '#1e293b'}
                  onChange={(e) => updateComponentStyle(selectedNode.id, { backgroundColor: e.target.value })}
                  className="w-7 h-7 rounded border border-slate-700 cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={selectedNode.style.backgroundColor || ''}
                  placeholder="#1e293b hoặc rgb(...)"
                  onChange={(e) => updateComponentStyle(selectedNode.id, { backgroundColor: e.target.value })}
                  className="flex-1 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Màu chữ (Text Color)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedNode.style.color || '#ffffff'}
                  onChange={(e) => updateComponentStyle(selectedNode.id, { color: e.target.value })}
                  className="w-7 h-7 rounded border border-slate-700 cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={selectedNode.style.color || ''}
                  placeholder="#ffffff"
                  onChange={(e) => updateComponentStyle(selectedNode.id, { color: e.target.value })}
                  className="flex-1 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-xs"
                />
              </div>
            </div>

            {/* ── 🎨 MÃ CSS TÙY CHỈNH (CUSTOM CSS TEXTAREA) ── */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CSS Tùy Chỉnh (Custom CSS)</span>
                </label>
                <span className="text-[10px] text-cyan-400 font-mono">Áp dụng riêng</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-snug">
                Gõ mã CSS trực tiếp (ví dụ: <code className="text-cyan-300">font-weight: bold; color: red;</code>) để tạo kiểu riêng biệt cho component này.
              </p>
              <textarea
                rows={5}
                value={selectedNode.style.customCss || formatStyleToCss(selectedNode.style)}
                placeholder="font-weight: bold;&#10;color: red;&#10;box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                onChange={(e) => {
                  const raw = e.target.value
                  const parsed = parseRawCss(raw)
                  updateComponentStyle(selectedNode.id, {
                    ...parsed,
                    customCss: raw,
                  })
                }}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-[11px] leading-relaxed focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-y"
              />
            </div>
          </div>
        )}

        {/* ── TAB 4: PROPS ── */}
        {effectiveTab === 'props' && (
          <div className="space-y-3.5">
            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Tên hiển thị / Label
              </label>
              <input
                type="text"
                value={selectedNode.props.label || ''}
                onChange={(e) => updateComponentProps(selectedNode.id, { label: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100"
              />
            </div>

            {selectedNode.type === 'TextBox' && (
              <div>
                <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Placeholder
                </label>
                <input
                  type="text"
                  value={selectedNode.props.placeholder || ''}
                  onChange={(e) => updateComponentProps(selectedNode.id, { placeholder: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100"
                />
              </div>
            )}

            {selectedNode.type === 'Button' && (
              <>
                <div>
                  <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Kiểu nút (Variant)
                  </label>
                  <select
                    value={selectedNode.props.variant || 'primary'}
                    onChange={(e) => updateComponentProps(selectedNode.id, { variant: e.target.value as any })}
                    className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100"
                  >
                    <option value="primary">Primary (Xanh dương)</option>
                    <option value="secondary">Secondary (Xám đen)</option>
                    <option value="danger">Danger (Đỏ cảnh báo)</option>
                    <option value="ghost">Ghost (Viền trong suốt)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Kích thước (Size)
                  </label>
                  <select
                    value={selectedNode.props.size || 'md'}
                    onChange={(e) => updateComponentProps(selectedNode.id, { size: e.target.value as any })}
                    className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100"
                  >
                    <option value="sm">Nhỏ (Small)</option>
                    <option value="md">Vừa (Medium)</option>
                    <option value="lg">Lớn (Large)</option>
                  </select>
                </div>
              </>
            )}

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">Vô hiệu hóa (Disabled)</span>
              <input
                type="checkbox"
                checked={Boolean(selectedNode.props.disabled)}
                onChange={(e) => updateComponentProps(selectedNode.id, { disabled: e.target.checked })}
                className="rounded bg-slate-800 border-slate-700 text-blue-600 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* ── TAB 5: ĐA SỰ KIỆN (MULTI-EVENT SYSTEM) ── */}
        {effectiveTab === 'events' && (() => {
          const blFile = activeFeature?.scriptFile || ''
          const availableFns = getFunctionsForBlFile(blFile)
          const eventsList = selectedNode.events || []

          const triggerOptions = [
            { value: 'click', label: 'Bấm chuột (click)' },
            { value: 'dblclick', label: 'Nhấp đúp chuột (dblclick)' },
            { value: 'change', label: 'Thay đổi giá trị (change)' },
            { value: 'focus', label: 'Khi chọn ô (focus)' },
            { value: 'blur', label: 'Khi rời ô (blur)' },
            { value: 'mouseenter', label: 'Rê chuột vào (mouseenter)' },
            { value: 'mouseleave', label: 'Rê chuột ra (mouseleave)' },
          ]

          const handleAddEvent = () => {
            const defaultFn = availableFns[0] || 'Hellowolrk1'
            const newEvent = {
              id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
              trigger: 'click',
              handlerName: defaultFn,
              action: 'custom' as any,
            }
            updateComponentEvents(selectedNode.id, [...eventsList, newEvent])
          }

          const handleUpdateEvent = (idx: number, patch: Partial<any>) => {
            const next = eventsList.map((item, i) => (i === idx ? { ...item, ...patch } : item))
            updateComponentEvents(selectedNode.id, next)
          }

          const handleRemoveEvent = (idx: number) => {
            const next = eventsList.filter((_, i) => i !== idx)
            updateComponentEvents(selectedNode.id, next)
          }

          return (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Sự Kiện Component ({eventsList.length})
                  </h3>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    File BL: <span className="font-mono text-cyan-400">{blFile || '(chưa gắn file)'}</span>
                  </p>
                </div>
              </div>

              {/* Nút gắn thêm sự kiện */}
              <button
                type="button"
                onClick={handleAddEvent}
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ Gắn Thêm Sự Kiện</span>
              </button>

              {/* Hướng dẫn kích hoạt sự kiện */}
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/50 text-[11px] text-blue-200/90 space-y-1">
                <div className="font-semibold text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Cách kích hoạt & kiểm tra sự kiện:</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[10px] text-slate-300">
                  <li>Bấm nút <strong>▶ Chạy Thử</strong> ở từng thẻ sự kiện bên dưới.</li>
                  <li>Hoặc ở Canvas: Giữ <code className="text-cyan-300 bg-slate-800 px-1 rounded">Ctrl + Click</code> hoặc <code className="text-cyan-300 bg-slate-800 px-1 rounded">Nhấp đúp chuột</code>.</li>
                  <li>Hoặc bấm nút <strong>"Xem Thử Trực Tiếp"</strong> ở thanh trên cùng để thao tác như người dùng thật.</li>
                </ul>
              </div>

              {/* Danh sách các sự kiện đã gắn */}
              {eventsList.length > 0 ? (
                <div className="space-y-3">
                  {eventsList.map((ev, idx) => (
                    <div
                      key={ev.id || idx}
                      className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2.5 relative group/evt shadow-sm"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                        <span className="text-[11px] font-bold text-blue-400 flex items-center gap-1.5 font-mono">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>Sự kiện #{idx + 1}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveEvent(idx)}
                          className="text-slate-500 hover:text-red-400 p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                          title="Xóa sự kiện này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Input 1: Event Trigger */}
                      <div>
                        <label className="text-[10px] font-semibold text-slate-400 block mb-1">
                          1. Sự kiện kích hoạt (Event):
                        </label>
                        <select
                          value={ev.trigger || 'click'}
                          onChange={(e) => handleUpdateEvent(idx, { trigger: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 font-mono focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                          {triggerOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Input 2: Function Name */}
                      <div>
                        <label className="text-[10px] font-semibold text-slate-400 block mb-1 flex items-center justify-between">
                          <span>2. Hàm gọi thực thi (Function):</span>
                          <span className="text-[9px] text-cyan-400 font-mono">Trong file BL</span>
                        </label>
                        <div className="space-y-1.5">
                          {/* Dropdown choose from available functions */}
                          {availableFns.length > 0 && (
                            <select
                              value={ev.handlerName || availableFns[0] || ''}
                              onChange={(e) => handleUpdateEvent(idx, { handlerName: e.target.value })}
                              className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 font-mono focus:outline-none focus:border-blue-500 cursor-pointer"
                            >
                              {availableFns.map((fn) => (
                                <option key={fn} value={fn}>
                                  {fn}()
                                </option>
                              ))}
                            </select>
                          )}

                          {/* Or type custom function name */}
                          <input
                            type="text"
                            placeholder="Hoặc gõ tên hàm tùy chỉnh..."
                            value={ev.handlerName || ''}
                            onChange={(e) => handleUpdateEvent(idx, { handlerName: e.target.value })}
                            className="w-full px-2.5 py-1.5 bg-slate-900/90 border border-slate-700 rounded-lg text-xs text-cyan-300 font-mono placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                          />
                        </div>
                      </div>

                      {/* Nút Chạy Thử sự kiện ngay lập tức */}
                      <button
                        type="button"
                        onClick={() => {
                          executeSingleEvent(
                            ev,
                            selectedNode.props.label || selectedNode.type,
                            blFile,
                            {
                              componentId: selectedNode.id,
                              pageId: activeFeatureId,
                              trigger: ev.trigger,
                            }
                          )
                        }}
                        className="w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]"
                        title="Bấm để kích hoạt và chạy hàm BL này ngay lập tức"
                      >
                        <Play className="w-3.5 h-3.5 fill-emerald-400" />
                        <span>▶ Chạy Thử Sự Kiện Này</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1">
                  <p className="text-xs">Component này chưa gắn sự kiện nào.</p>
                  <p className="text-[10px] text-slate-600">
                    Bấm nút <strong>"+ Gắn Thêm Sự Kiện"</strong> ở trên để thêm sự kiện (click, dblclick, change...) và hàm tương ứng.
                  </p>
                </div>
              )}
            </div>
          )
        })()}
      </div>
    </aside>
  )
}
