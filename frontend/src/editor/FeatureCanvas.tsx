import React, { useState } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { useEditorStore } from '@/store/editorStore'
import { ComponentRenderer } from '@/renderer/Renderer'
import { DraggableComponent } from './DraggableComponent'
import { ContextMenu, MenuItem } from './ContextMenu'
import type { ComponentNode, ComponentType } from '@/types/schema'
import {
  Box,
  Columns,
  Square,
  Type,
  FileText,
  Table as TableIcon,
  ArrowRightLeft,
  ArrowUpDown,
  Trash2,
  FileCode,
  Lock,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

interface FeatureCanvasProps {
  isEditing: boolean
  activeId?: string | null
  overId?: string | null
}

export const FeatureCanvas: React.FC<FeatureCanvasProps> = ({
  isEditing,
  activeId,
  overId,
}) => {
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const addComponent = useEditorStore((s) => s.addComponent)
  const selectComponent = useEditorStore((s) => s.selectComponent)
  const removeComponent = useEditorStore((s) => s.removeComponent)
  const updateComponentProps = useEditorStore((s) => s.updateComponentProps)
  const updateFeatureLayout = useEditorStore((s) => s.updateFeatureLayout)
  const updateFeatureScriptFile = useEditorStore((s) => s.updateFeatureScriptFile)

  const activeFeature = features.find((f) => f.id === activeFeatureId)
  const rootLayout = activeFeature?.layoutConfig || {
    direction: 'column',
    gap: '16px',
    wrap: 'wrap',
  }

  // Canvas root droppable target
  const { setNodeRef: setCanvasRootRef, isOver: isCanvasRootOver } = useDroppable({
    id: 'canvas-root',
    disabled: !isEditing,
  })

  // State for BL File binding input
  const [blInputName, setBlInputName] = useState('')

  // Check if Feature is bound to a BL file
  const isBlBound = Boolean(activeFeature?.scriptFile && activeFeature.scriptFile.trim().length > 0)

  // Context menu state
  const [contextMenu, setContextMenu] = useState<{
    x: number
    y: number
    targetContainerId?: string | null
    selectedNode?: ComponentNode | null
  } | null>(null)

  // Quick factory to create a component
  const createNewComponent = (
    type: ComponentType,
    customProps: Record<string, unknown> = {},
    customStyle: Record<string, any> = {}
  ): ComponentNode => {
    const id = `${type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
    return {
      id,
      type,
      parentId: null,
      pageId: activeFeatureId,
      props: {
        label:
          type === 'Button'
            ? 'Nút mới'
            : type === 'Label'
            ? 'Tiêu đề khối'
            : undefined,
        variant: type === 'Button' ? 'primary' : undefined,
        size: type === 'Button' ? 'md' : undefined,
        placeholder: type === 'TextBox' ? 'Nhập nội dung...' : undefined,
        ...customProps,
      },
      style: {
        ...customStyle,
      },
      events: [],
      order: (activeFeature?.components.length || 0) + 1,
    }
  }

  // Handle right-click on the canvas background
  const handleCanvasContextMenu = (e: React.MouseEvent) => {
    if (!isEditing || !isBlBound) return
    e.preventDefault()
    selectComponent(null)
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      targetContainerId: null,
      selectedNode: null,
    })
  }

  // Handle right-click on a specific component (e.g. Container)
  const handleComponentContextMenu = (e: React.MouseEvent, node: ComponentNode) => {
    if (!isEditing) return
    e.preventDefault()
    e.stopPropagation()
    selectComponent(node.id)
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      targetContainerId: node.type === 'Container' ? node.id : node.parentId,
      selectedNode: node,
    })
  }

  // Menu items builder
  const buildMenuItems = (): MenuItem[] => {
    if (!contextMenu) return []
    const { targetContainerId, selectedNode } = contextMenu

    // 1. Right click on a Container (Khoảng Trắng)
    if (selectedNode && selectedNode.type === 'Container') {
      const isGrid = selectedNode.props.layoutMode === 'grid'
      const isRow = selectedNode.props.flexConfig?.direction === 'row'

      return [
        {
          label: '📦 Thêm Khoảng Trắng con (Bố cục Flexbox)',
          icon: Box,
          onClick: () => {
            const childContainer = createNewComponent(
              'Container',
              {
                layoutMode: 'flex',
                flexConfig: {
                  direction: 'column',
                  wrap: 'wrap',
                  justify: 'flex-start',
                  align: 'stretch',
                  gap: '12px',
                },
              },
              {
                flex: isRow ? '1' : undefined,
                width: isRow ? undefined : '100%',
                minHeight: '120px',
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                padding: '16px',
                borderRadius: '10px',
                border: '1px dashed #64748b',
              }
            )
            addComponent(childContainer, targetContainerId)
          },
        },
        {
          label: '📐 Thêm Khoảng Trắng con (Bố cục Grid)',
          icon: Columns,
          onClick: () => {
            const childContainer = createNewComponent(
              'Container',
              {
                layoutMode: 'grid',
                gridConfig: { columns: 2, gap: '12px' },
              },
              {
                flex: isRow ? '1' : undefined,
                width: isRow ? undefined : '100%',
                minHeight: '120px',
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                padding: '16px',
                borderRadius: '10px',
                border: '1px dashed #64748b',
              }
            )
            addComponent(childContainer, targetContainerId)
          },
        },
        {
          divider: true,
          label: '',
          onClick: () => {},
        },
        {
          label: '➕ Thêm Nút vào khoảng trắng này',
          icon: Square,
          onClick: () => addComponent(createNewComponent('Button'), targetContainerId),
        },
        {
          label: '➕ Thêm TextBox vào khoảng trắng này',
          icon: Type,
          onClick: () => addComponent(createNewComponent('TextBox'), targetContainerId),
        },
        {
          label: '➕ Thêm Nhãn chữ vào khoảng trắng này',
          icon: FileText,
          onClick: () => addComponent(createNewComponent('Label'), targetContainerId),
        },
        {
          label: '➕ Thêm Bảng dữ liệu',
          icon: TableIcon,
          onClick: () => addComponent(createNewComponent('Table'), targetContainerId),
        },
        {
          divider: true,
          label: '',
          onClick: () => {},
        },
        {
          label: isRow
            ? '↕ Đổi hướng: Xếp dọc (Column)'
            : '↔ Đổi hướng: Nằm song song (Row)',
          icon: isRow ? ArrowUpDown : ArrowRightLeft,
          onClick: () => {
            updateComponentProps(selectedNode.id, {
              flexConfig: {
                ...(selectedNode.props.flexConfig || { wrap: 'wrap', justify: 'flex-start', align: 'center', gap: '12px' }),
                direction: isRow ? 'column' : 'row',
              },
            })
          },
        },
        {
          label: isGrid ? '🔄 Đổi sang bố cục Flexbox' : '🔄 Đổi sang bố cục Grid (Lưới)',
          icon: Columns,
          onClick: () => {
            if (isGrid) {
              updateComponentProps(selectedNode.id, {
                layoutMode: 'flex',
                flexConfig: { direction: 'row', wrap: 'wrap', justify: 'flex-start', align: 'center', gap: '12px' },
              })
            } else {
              updateComponentProps(selectedNode.id, {
                layoutMode: 'grid',
                gridConfig: { columns: 2, gap: '16px' },
              })
            }
          },
        },
        {
          label: '🗑️ Xóa khoảng trắng này',
          icon: Trash2,
          danger: true,
          onClick: () => removeComponent(selectedNode.id),
        },
      ]
    }

    // 2. Default Canvas Context Menu
    const isRootRow = rootLayout.direction === 'row'
    return [
      {
        label: isRootRow
          ? '📦 Thêm Khoảng Trắng (Tự chia đôi song song)'
          : '📦 Thêm Khoảng Trắng (Bố cục Flexbox)',
        icon: Box,
        onClick: () => {
          const container = createNewComponent(
            'Container',
            {
              layoutMode: 'flex',
              flexConfig: {
                direction: 'row',
                wrap: 'wrap',
                justify: 'flex-start',
                align: 'center',
                gap: '16px',
              },
            },
            {
              flex: isRootRow ? '1' : undefined,
              width: isRootRow ? undefined : '100%',
              minHeight: '130px',
              backgroundColor: '#1e293b',
              padding: '16px',
              borderRadius: '12px',
              border: '1px dashed #475569',
            }
          )
          addComponent(container, null)
        },
      },
      {
        label: '📐 Thêm Khoảng Trắng (Bố cục Grid 2 Cột)',
        icon: Columns,
        onClick: () => {
          const container = createNewComponent(
            'Container',
            {
              layoutMode: 'grid',
              gridConfig: {
                columns: 2,
                gap: '16px',
              },
            },
            {
              flex: isRootRow ? '1' : undefined,
              width: isRootRow ? undefined : '100%',
              minHeight: '140px',
              backgroundColor: '#1e293b',
              padding: '16px',
              borderRadius: '12px',
              border: '1px dashed #475569',
            }
          )
          addComponent(container, null)
        },
      },
      {
        divider: true,
        label: '',
        onClick: () => {},
      },
      {
        label: '🔘 Thêm Nút bấm (Button)',
        icon: Square,
        onClick: () => addComponent(createNewComponent('Button'), null),
      },
      {
        label: '📝 Thêm Hộp nhập liệu (TextBox)',
        icon: Type,
        onClick: () => addComponent(createNewComponent('TextBox'), null),
      },
      {
        label: '🏷️ Thêm Nhãn chữ (Label)',
        icon: FileText,
        onClick: () => addComponent(createNewComponent('Label'), null),
      },
      {
        label: '📊 Thêm Bảng dữ liệu (Table)',
        icon: TableIcon,
        onClick: () => addComponent(createNewComponent('Table'), null),
      },
    ]
  }

  const rootComponents = activeFeature?.components.filter((c) => !c.parentId) || []

  return (
    <div
      ref={setCanvasRootRef}
      onContextMenu={handleCanvasContextMenu}
      className={`flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5 transition-colors ${
        isCanvasRootOver && isEditing ? 'ring-2 ring-blue-500/50 bg-blue-950/10' : ''
      }`}
    >
      <div className="max-w w-full mx-auto flex-1 flex flex-col space-y-4">
        {/* Feature Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div>
            <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2.5">
              <span>{activeFeature?.name || 'Màn hình'}</span>
              {isBlBound ? (
                <span className="px-2.5 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5 shadow-sm">
                  <FileCode className="w-3.5 h-3.5" />
                  <span>{activeFeature?.scriptFile}</span>
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                  <Lock className="w-3 h-3" />
                  <span>Chưa gắn file BL</span>
                </span>
              )}
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              {isBlBound
                ? activeFeature?.description || 'Nhấn chuột phải vào màn hình hoặc khoảng trắng để thêm thành phần mới.'
                : 'Màn hình này đang bị khóa: Cần thiết lập file nghiệp vụ (TypeScript) để kích hoạt thiết kế.'}
            </p>
          </div>
        </div>

        {/* ── NẾU CHƯA GẮN FILE BL: KHÓA CANVAS VÀ HIỂN THỊ MÀN HÌNH THIẾT LẬP ── */}
        {!isBlBound ? (
          <div className="flex-1 min-h-[450px] border-2 border-dashed border-amber-800/60 bg-amber-950/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-900/20">
              <Lock className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-slate-100 mb-1.5 flex items-center gap-2">
              <span>Chưa Xác Định File Nghiệp Vụ (BL File)</span>
            </h3>
            <p className="text-xs text-slate-400 max-w-lg mb-6 leading-relaxed">
              Mỗi màn hình trong hệ thống cần liên kết với một file mã nguồn TypeScript (<strong className="text-amber-400 font-mono">*.bl.ts</strong>) để định nghĩa và thực thi các hàm logic nghiệp vụ khi người dùng tương tác sự kiện.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const fileName = blInputName.trim()
                if (!fileName) return
                const sanitized = fileName.endsWith('.bl.ts')
                  ? fileName
                  : fileName.endsWith('.ts')
                  ? fileName.replace(/\.ts$/, '.bl.ts')
                  : `${fileName}.bl.ts`
                updateFeatureScriptFile(activeFeatureId, sanitized)
                setBlInputName('')
              }}
              className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-3.5 text-left"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Tên file nghiệp vụ (TypeScript):</span>
                  <span className="text-[11px] text-amber-400 font-mono">.bl.ts</span>
                </label>
                <div className="relative">
                  <FileCode className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Ví dụ: customerManagement.bl.ts, orderReport.bl.ts..."
                    value={blInputName}
                    onChange={(e) => setBlInputName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-100 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Quick suggestion button */}
              {activeFeature && (
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Gợi ý nhanh:</span>
                  <button
                    type="button"
                    onClick={() => {
                      const base = activeFeature.name
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/[^a-z0-9]/g, '')
                      setBlInputName(`${base || 'feature'}.bl.ts`)
                    }}
                    className="text-cyan-400 hover:text-cyan-300 underline font-mono cursor-pointer"
                  >
                    {activeFeature.name
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .replace(/[^a-z0-9]/g, '') || 'feature'}
                    .bl.ts
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={!blInputName.trim()}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Xác Nhận & Mở Thiết Kế Giao Diện</span>
              </button>
            </form>
          </div>
        ) : rootComponents.length === 0 ? (
          <div
            onContextMenu={handleCanvasContextMenu}
            className={`flex-1 min-h-[400px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-12 text-center transition-all cursor-context-menu ${
              isCanvasRootOver
                ? 'border-blue-500 bg-blue-950/20 shadow-xl shadow-blue-500/10'
                : 'border-slate-800 hover:border-blue-500/50 bg-slate-900/30'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
              <Box className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-200 mb-1">
              Màn hình đang trống (Blank Canvas)
            </h3>
            <p className="text-xs text-slate-400 max-w-md mb-5 leading-relaxed">
              Bạn có thể <strong className="text-blue-400">kéo thả thành phần</strong> từ cột bên trái vào đây, hoặc <strong className="text-slate-200">nhấn chuột phải</strong> để thêm Khoảng Trắng, Nút, Bảng dữ liệu!
            </p>

            {isEditing && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    // Create 2 side-by-side containers
                    const parentContainer = createNewComponent(
                      'Container',
                      {
                        layoutMode: 'flex',
                        flexConfig: { direction: 'row', wrap: 'wrap', justify: 'space-between', align: 'stretch', gap: '16px' },
                      },
                      { width: '100%', minHeight: '160px', backgroundColor: '#1e293b', padding: '16px' }
                    )
                    parentContainer.children = [
                      createNewComponent(
                        'Container',
                        { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'wrap', justify: 'flex-start', align: 'stretch', gap: '12px' } },
                        { flex: '1', minHeight: '120px', backgroundColor: '#0f172a', padding: '12px', border: '1px dashed #475569' }
                      ),
                      createNewComponent(
                        'Container',
                        { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'wrap', justify: 'flex-start', align: 'stretch', gap: '12px' } },
                        { flex: '1', minHeight: '120px', backgroundColor: '#0f172a', padding: '12px', border: '1px dashed #475569' }
                      ),
                    ]
                    addComponent(parentContainer, null)
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                  <span>Tạo 2 Khoảng Trắng Nằm Song Song (50 - 50)</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: rootLayout.direction || 'column',
              gap: rootLayout.gap || '16px',
              flexWrap: rootLayout.wrap || 'wrap',
              width: '100%',
            }}
            className="flex-1"
          >
            {rootComponents.map((node) =>
              isEditing ? (
                <DraggableComponent
                  key={node.id}
                  node={node}
                  isEditing={isEditing}
                  onContextMenu={handleComponentContextMenu}
                  parentFlexConfig={
                    rootLayout.direction === 'row'
                      ? { direction: 'row', wrap: 'wrap', gap: rootLayout.gap, columnsPerRow: 'auto' }
                      : undefined
                  }
                  activeId={activeId}
                  overId={overId}
                />
              ) : (
                <ComponentRenderer
                  key={node.id}
                  node={node}
                  isEditing={false}
                  onContextMenu={handleComponentContextMenu}
                  parentFlexConfig={
                    rootLayout.direction === 'row'
                      ? { direction: 'row', wrap: 'wrap', gap: rootLayout.gap, columnsPerRow: 'auto' }
                      : undefined
                  }
                />
              )
            )}
          </div>
        )}
      </div>

      {/* Right-click Floating Context Menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          items={buildMenuItems()}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  )
}
