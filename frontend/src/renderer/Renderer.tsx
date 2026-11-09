import React from 'react'
import type { ComponentNode, FlexConfig } from '@/types/schema'
import {
  ForgeButton,
  ForgeTextBox,
  ForgeNumber,
  ForgeTextarea,
  ForgeLabel,
  ForgeContainer,
  ForgeTable,
  ForgeSelect,
  ForgeCheckbox,
  ForgeDatePicker,
  ForgeDivider,
  ForgeModal,
  ForgeSection,
  ForgeTabStack,
  ForgeRecordSelector,
} from './components'
import { groupNodesByTabStack } from './tabStackUtils'
import { useEditorStore } from '@/store/editorStore'
import { PermissionGuard } from './PermissionGuard'
import { getComponentOuterLayoutStyle, type ParentLayoutContext } from './layoutUtils'

interface ComponentRendererProps {
  node: ComponentNode
  isEditing?: boolean
  isSelected?: boolean
  onContextMenu?: (e: React.MouseEvent, node: ComponentNode) => void
  parentLayout?: ParentLayoutContext
  parentFlexConfig?: FlexConfig
  /** True when wrapped inside DraggableComponent, outer sizing is on draggable wrapper */
  isWrappedByDrag?: boolean
  /**
   * Optional render prop — if provided, each child of a Container is rendered via this function.
   * Used by DraggableComponent to inject drag/drop wrappers around children without circular deps.
   */
  renderChild?: (
    child: ComponentNode,
    childLayout?: ParentLayoutContext | FlexConfig
  ) => React.ReactNode
}

export const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  node,
  isEditing = false,
  onContextMenu,
  parentLayout,
  parentFlexConfig,
  isWrappedByDrag = false,
  renderChild,
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

  // 1. If it's a Container hoặc Section:
  if (node.type === 'Container' || node.type === 'Section' || node.type === 'Tabs') {
    const layoutMode =
      node.props.layoutMode || (node.type === 'Section' ? 'grid' : 'flex')
    const flexConfig = (node.props.flexConfig as Partial<FlexConfig>) || {}
    const gridConfig = (node.props.gridConfig as Record<string, any>) || {}

    const resolvedFlexConfig: FlexConfig = {
      direction: flexConfig.direction || 'row',
      wrap: flexConfig.wrap || 'wrap',
      gap: flexConfig.gap || '12px',
      columnsPerRow: flexConfig.columnsPerRow || 'auto',
    }

    const totalCols =
      Number(
        gridConfig.columns ||
          (typeof flexConfig.columnsPerRow === 'number'
            ? flexConfig.columnsPerRow
            : 12)
      ) || 12

    // Xây dựng layout context chuẩn hóa truyền xuống toàn bộ các con:
    const childParentLayout: ParentLayoutContext = {
      mode: layoutMode === 'flex' ? 'flex' : 'grid',
      direction: flexConfig.direction || 'row',
      columnsPerRow: flexConfig.columnsPerRow || 'auto',
      gap: flexConfig.gap || gridConfig.gap || '12px',
      wrap: flexConfig.wrap || 'wrap',
      gridColumns: totalCols,
    }

    const renderChildren = () => {
      const rawChildren = node.children || []
      if (rawChildren.length === 0) {
        return (
          <div className="w-full text-center py-6 text-xs text-slate-500 italic select-none col-span-12 border border-dashed border-slate-800 rounded-lg bg-slate-950/40">
            Chuột phải vào đây để thêm nút, textbox, khoảng trắng con...
          </div>
        )
      }

      // ── ÁP DỤNG CƠ CHẾ GOM NHÓM TAB (TAB STACK THEO ORDER) ──
      const groups = groupNodesByTabStack(rawChildren)

      return groups.map((group, gIdx) => {
        if (group.type === 'tab_stack') {
          return (
            <ForgeTabStack
              key={`tab_stack_${node.id}_${group.order}_${gIdx}`}
              parentId={node.id}
              order={group.order}
              tabNodes={group.nodes}
              isEditing={isEditing}
              parentFlexConfig={resolvedFlexConfig}
              onContextMenu={onContextMenu}
              renderChild={renderChild}
            />
          )
        }

        const child = group.node
        if (renderChild) {
          return (
            <React.Fragment key={child.id}>
              {renderChild(child, childParentLayout)}
            </React.Fragment>
          )
        }
        return (
          <ComponentRenderer
            key={child.id}
            node={child}
            isEditing={isEditing}
            onContextMenu={onContextMenu}
            parentLayout={childParentLayout}
            isWrappedByDrag={false}
          />
        )
      })
    }

    if (node.type === 'Section') {
      return (
        <PermissionGuard node={node} isEditing={isEditing}>
          <div onClick={handleClick} onContextMenu={handleContextMenu} className="w-full">
            <ForgeSection node={node} isEditing={isEditing}>
              {renderChildren()}
            </ForgeSection>
          </div>
        </PermissionGuard>
      )
    }

    if (node.type === 'Tabs') {
      return (
        <PermissionGuard node={node} isEditing={isEditing}>
          <ForgeContainer
            node={node}
            isEditing={isEditing}
            isSelected={isSelected}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
            parentFlexConfig={parentFlexConfig}
            isWrappedByDrag={isWrappedByDrag}
          >
            {renderChildren()}
          </ForgeContainer>
        </PermissionGuard>
      )
    }

    return (
      <PermissionGuard node={node} isEditing={isEditing}>
        <ForgeContainer
          node={node}
          isEditing={isEditing}
          isSelected={isSelected}
          onClick={handleClick}
          onContextMenu={handleContextMenu}
          parentFlexConfig={parentFlexConfig}
          isWrappedByDrag={isWrappedByDrag}
        >
          {renderChildren()}
        </ForgeContainer>
      </PermissionGuard>
    )
  }

  // 2. For non-container components
  const renderLeafContent = () => {
    switch (node.type) {
      case 'Button':
        return <ForgeButton node={node} isEditing={isEditing} />
      case 'TextBox':
        return <ForgeTextBox node={node} isEditing={isEditing} />
      case 'Textarea':
        return <ForgeTextarea node={node} isEditing={isEditing} />
      case 'Number':
        return <ForgeNumber node={node} isEditing={isEditing} />
      case 'Label':
        return <ForgeLabel node={node} isEditing={isEditing} />
      case 'Table':
        return <ForgeTable node={node} isEditing={isEditing} />
      case 'Select':
        return <ForgeSelect node={node} isEditing={isEditing} />
      case 'Checkbox':
        return <ForgeCheckbox node={node} isEditing={isEditing} />
      case 'DatePicker':
        return <ForgeDatePicker node={node} isEditing={isEditing} />
      case 'Divider':
        return <ForgeDivider node={node} isEditing={isEditing} />
      case 'Modal':
        return <ForgeModal node={node} isEditing={isEditing} />
      case 'RecordSelector':
        return (
          <ForgeRecordSelector
            label={(node.props?.label as string) ?? 'Lô hàng:'}
            reference={(node.props?.reference as string) ?? 'Transaction'}
            displayField={(node.props?.displayField as string) ?? 'code'}
            records={node.props?.records as any}
            activeId={node.props?.activeId as any}
            canAdd={node.props?.canAdd !== false}
            style={node.style as any}
          />
        )
      default:
        return (
          <div className="p-3 bg-red-950/40 border border-red-800 rounded text-red-300 text-xs">
            Unknown Component: {node.type}
          </div>
        )
    }
  }

  // Calculate layout styles if NOT wrapped by DraggableComponent (Preview Mode)
  const effectiveLayout: ParentLayoutContext | undefined =
    parentLayout ||
    (parentFlexConfig
      ? {
          mode: 'flex',
          direction: parentFlexConfig.direction,
          columnsPerRow: parentFlexConfig.columnsPerRow,
          gap: parentFlexConfig.gap,
          wrap: parentFlexConfig.wrap,
        }
      : undefined)

  const outerStyle = getComponentOuterLayoutStyle(node, effectiveLayout)

  const wrapperStyle: React.CSSProperties = isWrappedByDrag
    ? {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }
    : {
        ...outerStyle,
        boxSizing: 'border-box',
      }

  return (
    <PermissionGuard node={node} isEditing={isEditing}>
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
    </PermissionGuard>
  )
}
