import React from 'react'
import type { ComponentNode, FlexConfig } from '@/types/schema'
import {
  ForgeButton,
  ForgeTextBox,
  ForgeLabel,
  ForgeContainer,
  ForgeTable,
} from './components'
import { useEditorStore } from '@/store/editorStore'

interface ComponentRendererProps {
  node: ComponentNode
  isEditing?: boolean
  onContextMenu?: (e: React.MouseEvent, node: ComponentNode) => void
  parentFlexConfig?: FlexConfig
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  node,
  isEditing = false,
  onContextMenu,
  parentFlexConfig,
}) => {
  const selection = useEditorStore((s) => s.selection)
  const selectComponent = useEditorStore((s) => s.selectComponent)
  const isSelected = isEditing && selection.componentId === node.id

  const handleClick = (e: React.MouseEvent) => {
    if (!isEditing) return
    e.stopPropagation()
    selectComponent(node.id)
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    if (!isEditing) return
    e.preventDefault()
    e.stopPropagation()
    selectComponent(node.id)
    if (onContextMenu) {
      onContextMenu(e, node)
    }
  }

  // 1. If it's a Container (Khoảng Trắng):
  // Render ForgeContainer directly without any extra wrapping div!
  if (node.type === 'Container') {
    const layoutMode = node.props.layoutMode || 'flex'
    const flexConfig = node.props.flexConfig

    return (
      <ForgeContainer
        node={node}
        isEditing={isEditing}
        isSelected={isSelected}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
        parentFlexConfig={parentFlexConfig}
      >
        {node.children && node.children.length > 0 ? (
          node.children.map((child) => (
            <ComponentRenderer
              key={child.id}
              node={child}
              isEditing={isEditing}
              onContextMenu={onContextMenu}
              parentFlexConfig={layoutMode === 'flex' ? flexConfig : undefined}
            />
          ))
        ) : (
          <div className="w-full text-center py-4 text-xs text-slate-500 italic select-none">
            Chuột phải vào đây để thêm nút, textbox, khoảng trắng con...
          </div>
        )}
      </ForgeContainer>
    )
  }

  // 2. For non-container components (Button, TextBox, Label, Table)
  const renderLeafContent = () => {
    switch (node.type) {
      case 'Button':
        return <ForgeButton node={node} isEditing={isEditing} />
      case 'TextBox':
        return <ForgeTextBox node={node} isEditing={isEditing} />
      case 'Label':
        return <ForgeLabel node={node} isEditing={isEditing} />
      case 'Table':
        return <ForgeTable node={node} isEditing={isEditing} />
      default:
        return (
          <div className="p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs">
            Unknown Component: {node.type}
          </div>
        )
    }
  }

  // Auto calculate width for leaf items if parent flex defines columnsPerRow
  let leafWidth = node.style?.width
  let leafFlex = node.style?.flex
  let leafMaxWidth = node.style?.maxWidth

  if (
    parentFlexConfig &&
    parentFlexConfig.direction === 'row' &&
    parentFlexConfig.columnsPerRow &&
    parentFlexConfig.columnsPerRow !== 'auto'
  ) {
    const cols =
      typeof parentFlexConfig.columnsPerRow === 'number'
        ? parentFlexConfig.columnsPerRow
        : parseInt(String(parentFlexConfig.columnsPerRow), 10)

    if (!isNaN(cols) && cols > 0 && leafWidth === undefined && leafFlex === undefined) {
      const gapNum = parseInt(parentFlexConfig.gap || '12', 10) || 12
      const calcWidth =
        cols === 1 ? '100%' : `calc((100% - ${(cols - 1) * gapNum}px) / ${cols})`
      leafWidth = calcWidth
      leafFlex = `0 0 ${calcWidth}`
      leafMaxWidth = calcWidth
    }
  }

  const wrapperStyle: React.CSSProperties = {
    flex: leafFlex,
    width: leafWidth,
    maxWidth: leafMaxWidth,
    minWidth: node.style?.minWidth !== undefined ? node.style.minWidth : 0,
  }

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      style={wrapperStyle}
      className={`relative group transition-all duration-150 box-border ${
        isEditing
          ? `cursor-pointer rounded-lg ${
              isSelected
                ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20'
                : 'hover:outline-1 hover:outline-blue-400/40'
            }`
          : ''
      }`}
    >
      {isEditing && isSelected && (
        <div className="absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1">
          <span>{node.type}</span>
          <span className="opacity-75">#{node.id.slice(-4)}</span>
        </div>
      )}
      {renderLeafContent()}
    </div>
  )
}
