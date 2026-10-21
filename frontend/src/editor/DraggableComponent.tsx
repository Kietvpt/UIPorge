import React from 'react'
import { useDraggable, useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import type { ComponentNode, FlexConfig } from '@/types/schema'
import { ComponentRenderer } from '@/renderer/Renderer'
import { GripVertical } from 'lucide-react'

interface DraggableComponentProps {
  node: ComponentNode
  isEditing: boolean
  onContextMenu: (e: React.MouseEvent, node: ComponentNode) => void
  parentFlexConfig?: FlexConfig
  activeId?: string | null
  overId?: string | null
}

/**
 * Calculates outer layout styles (sizing, flex, min/max dimensions)
 * that MUST sit on the direct child of the parent flex/grid container.
 */
export function getComponentOuterLayoutStyle(
  node: ComponentNode,
  parentFlexConfig?: FlexConfig
): React.CSSProperties {
  const style = node.style || {}

  let autoWidth: string | undefined = style.flex ? undefined : '100%'
  let autoFlex: string | undefined = style.flex
  let autoMaxWidth: string | number | undefined = style.maxWidth

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

    if (!isNaN(cols) && cols > 0) {
      const gapNum = parseInt(parentFlexConfig.gap || '12', 10) || 12
      const calcWidth =
        cols === 1 ? '100%' : `calc((100% - ${(cols - 1) * gapNum}px) / ${cols})`

      if (style.width === undefined && style.flex === undefined) {
        autoWidth = calcWidth
        autoFlex = `0 0 ${calcWidth}`
        autoMaxWidth = calcWidth
      }
    }
  }

  const width = style.width !== undefined ? style.width : autoWidth
  const flex = style.flex !== undefined ? style.flex : autoFlex
  const maxWidth = style.maxWidth !== undefined ? style.maxWidth : autoMaxWidth
  const minWidth = style.minWidth !== undefined ? style.minWidth : 0

  return {
    width,
    flex,
    maxWidth,
    minWidth,
    height: style.height,
    minHeight: style.minHeight || (node.type === 'Container' ? '90px' : undefined),
    maxHeight: style.maxHeight,
    alignSelf: style.alignSelf,
  }
}

export const DraggableComponent: React.FC<DraggableComponentProps> = ({
  node,
  isEditing,
  onContextMenu,
  parentFlexConfig,
  activeId,
  overId,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
    isDragging,
  } = useDraggable({
    id: node.id,
    disabled: !isEditing,
    data: {
      isPaletteItem: false,
      id: node.id,
      type: node.type,
      node,
    },
  })

  const { setNodeRef: setDropRef, isOver } = useDroppable({
    id: node.id,
    disabled: !isEditing,
  })

  // Combine drag + drop refs
  const setRefs = (el: HTMLDivElement | null) => {
    setDragRef(el)
    setDropRef(el)
  }

  // Calculate layout styles (width, height, flex) for the wrapper div
  const outerLayoutStyle = getComponentOuterLayoutStyle(node, parentFlexConfig)

  const dndStyle: React.CSSProperties = {
    ...outerLayoutStyle,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.35 : 1,
    transition: isDragging ? undefined : 'opacity 0.15s ease',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  }

  // Visual cues
  const isDropTargetContainer = isOver && node.type === 'Container' && !isDragging
  const isSiblingDropTarget = isOver && node.type !== 'Container' && !isDragging

  return (
    <div ref={setRefs} style={dndStyle} className="group/drag relative">
      {/* Sibling drop indicator: glowing blue line at the top */}
      {isSiblingDropTarget && (
        <div className="absolute -top-2 left-0 right-0 h-1 bg-blue-500 rounded-full z-40 pointer-events-none shadow-md shadow-blue-500/60 animate-pulse">
          <div className="absolute -left-1 -top-0.5 w-2 h-2 rounded-full bg-blue-400" />
        </div>
      )}

      {/* Container drop highlight overlay */}
      {isDropTargetContainer && (
        <div className="absolute inset-0 rounded-xl border-2 border-blue-400 bg-blue-500/10 z-30 pointer-events-none shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/40" />
      )}

      {/* Drag handle — top right corner of component */}
      {isEditing && (
        <div
          {...attributes}
          {...listeners}
          className="absolute top-1.5 right-1.5 z-30 opacity-0 group-hover/drag:opacity-100 transition-opacity cursor-grab active:cursor-grabbing bg-slate-900/90 hover:bg-blue-600 text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md text-[10px] flex items-center gap-1 shadow-md border border-slate-700 select-none"
          title="Giữ chuột kéo để di chuyển vị trí"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <GripVertical className="w-3.5 h-3.5" />
          <span className="font-semibold text-[9px]"></span>
        </div>
      )}

      {/* Render the component with isWrappedByDrag=true so inner component fills wrapper */}
      <ComponentRenderer
        node={node}
        isEditing={isEditing}
        onContextMenu={onContextMenu}
        parentFlexConfig={parentFlexConfig}
        isWrappedByDrag={true}
        renderChild={(childNode, childFlexConfig) => (
          <DraggableComponent
            key={childNode.id}
            node={childNode}
            isEditing={isEditing}
            onContextMenu={onContextMenu}
            parentFlexConfig={childFlexConfig}
            activeId={activeId}
            overId={overId}
          />
        )}
      />
    </div>
  )
}
