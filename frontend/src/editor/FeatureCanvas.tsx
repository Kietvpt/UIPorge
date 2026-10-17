import React, { useState } from 'react'
import { useEditorStore } from '@/store/editorStore'
import { ComponentRenderer } from '@/renderer/Renderer'
import { ContextMenu, MenuItem } from './ContextMenu'
import type { ComponentNode, ComponentType } from '@/types/schema'
import {
  Box,
  Columns,
  Square,
  Type,
  FileText,
  Table as TableIcon,
  PlusCircle,
  MousePointerClick,
  Sliders,
  Trash2,
  ArrowRightLeft,
  ArrowUpDown,
  Layers,
} from 'lucide-react'

interface FeatureCanvasProps {
  isEditing: boolean
}

export const FeatureCanvas: React.FC<FeatureCanvasProps> = ({ isEditing }) => {
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const addComponent = useEditorStore((s) => s.addComponent)
  const selectComponent = useEditorStore((s) => s.selectComponent)
  const removeComponent = useEditorStore((s) => s.removeComponent)
  const updateComponentProps = useEditorStore((s) => s.updateComponentProps)
  const updateFeatureLayout = useEditorStore((s) => s.updateFeatureLayout)

  const activeFeature = features.find((f) => f.id === activeFeatureId)
  const rootLayout = activeFeature?.layoutConfig || {
    direction: 'column',
    gap: '16px',
    wrap: 'wrap',
  }

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
    const id = `${type.toLowerCase()}-${Date.now().toString(36)}`
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
    if (!isEditing) return
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
        label: isRootRow
          ? '↕ Đổi bố cục màn hình: Xếp trên dưới (Column)'
          : '↔ Đổi bố cục màn hình: Nằm song song (Row)',
        icon: isRootRow ? ArrowUpDown : ArrowRightLeft,
        onClick: () => {
          updateFeatureLayout(activeFeatureId, {
            direction: isRootRow ? 'column' : 'row',
          })
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
      onContextMenu={handleCanvasContextMenu}
      className="flex-1 overflow-y-auto bg-slate-950 p-6 flex flex-col relative mr-2.5"
    >
      <div className="max-w w-full mx-auto flex-1 flex flex-col space-y-4">
        {/* Feature Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div>
            <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>{activeFeature?.name || 'Màn hình'}</span>
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              {activeFeature?.description || 'Nhấn chuột phải để thêm khoảng trắng layout, nút, ô nhập liệu...'}
            </p>
          </div>

          {/* Quick Root Layout Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs text-slate-400">
              <span className="text-[11px] px-2 font-medium text-slate-400">Bố cục màn hình:</span>
              <button
                type="button"
                onClick={() => updateFeatureLayout(activeFeatureId, { direction: 'column' })}
                className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                  rootLayout.direction === 'column'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Các khoảng trắng nằm xếp chồng theo chiều dọc"
              >
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span>Xếp Dọc</span>
              </button>
              <button
                type="button"
                onClick={() => updateFeatureLayout(activeFeatureId, { direction: 'row' })}
                className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
                  rootLayout.direction === 'row'
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Các khoảng trắng tự động nằm song song theo chiều ngang"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Nằm Song Song</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty Canvas Placeholder */}
        {rootComponents.length === 0 ? (
          <div
            onContextMenu={handleCanvasContextMenu}
            className="flex-1 min-h-[400px] border-2 border-dashed border-slate-800 hover:border-blue-500/50 rounded-2xl flex flex-col items-center justify-center p-12 text-center bg-slate-900/30 transition-colors cursor-context-menu"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
              <Box className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-200 mb-1">
              Màn hình đang trống (Blank Canvas)
            </h3>
            <p className="text-xs text-slate-400 max-w-md mb-5 leading-relaxed">
              Bạn có thể <strong className="text-blue-400">nhấn chuột phải</strong> tại đây để thêm <strong className="text-slate-200">Khoảng Trắng (Container)</strong> nằm song song hoặc lồng các khoảng trắng con bên trong nhau!
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
            {rootComponents.map((node) => (
              <ComponentRenderer
                key={node.id}
                node={node}
                isEditing={isEditing}
                onContextMenu={handleComponentContextMenu}
                parentFlexConfig={
                  rootLayout.direction === 'row'
                    ? { direction: 'row', wrap: 'wrap', gap: rootLayout.gap, columnsPerRow: 'auto' }
                    : undefined
                }
              />
            ))}
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
