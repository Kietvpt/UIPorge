import React from 'react'
import type { ComponentNode, FlexConfig } from '@/types/schema'

export interface ForgeContainerProps {
  node: ComponentNode
  isEditing?: boolean
  isSelected?: boolean
  onClick?: (e: React.MouseEvent) => void
  onContextMenu?: (e: React.MouseEvent) => void
  parentFlexConfig?: FlexConfig
  isWrappedByDrag?: boolean
  children?: React.ReactNode
}

// Container / Section (Flex / Grid Layout)
// Renders the single direct DOM element that takes all sizing & flex attributes directly
export const ForgeContainer: React.FC<ForgeContainerProps> = ({
  node,
  isEditing,
  isSelected,
  onClick,
  onContextMenu,
  parentFlexConfig,
  isWrappedByDrag = false,
  children,
}) => {
  const { props, style } = node
  const layoutMode = props.layoutMode || 'flex'
  const flexConfig = props.flexConfig || {
    direction: 'row',
    wrap: 'wrap',
    justify: 'flex-start',
    align: 'flex-start',
    gap: '12px',
    columnsPerRow: 'auto',
  }
  const gridConfig = props.gridConfig || { columns: 2, gap: '16px' }

  // flexWrap must always be 'wrap' when columnsPerRow is active so items wrap onto new rows!
  const defaultWrap = flexConfig.wrap || 'wrap'

  // Build layout style dynamically from flex or grid settings
  const layoutStyle: React.CSSProperties =
    layoutMode === 'grid'
      ? {
          display: 'grid',
          gridTemplateColumns: `repeat(${gridConfig.columns || 2}, minmax(0, 1fr))`,
          gap: gridConfig.gap || '16px',
        }
      : {
          display: 'flex',
          flexDirection: flexConfig.direction || 'row',
          flexWrap: defaultWrap,
          justifyContent: flexConfig.justify || 'flex-start',
          alignItems: flexConfig.align || 'flex-start',
          gap: flexConfig.gap || '12px',
        }

  // Calculate default item width if parent flex container specifies columnsPerRow (only if not wrapped by drag)
  let autoWidth: string | undefined = style?.flex ? undefined : '100%'
  let autoFlex: string | undefined = style?.flex
  let autoMaxWidth: string | number | undefined = style?.maxWidth

  if (
    !isWrappedByDrag &&
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

      // If this child does not have an explicit width or flex, apply the column width
      if (style?.width === undefined && style?.flex === undefined) {
        autoWidth = calcWidth
        autoFlex = `0 0 ${calcWidth}`
        autoMaxWidth = calcWidth
      }
    }
  }

  // When wrapped inside DraggableComponent, outer sizing (width, flex, height) sits on the draggable wrapper.
  // The inner container simply fills 100% of the wrapper.
  const { width: _w, flex: _f, ...cleanStyle } = (style || {}) as React.CSSProperties

  const combinedStyle: React.CSSProperties = isWrappedByDrag
    ? {
        ...layoutStyle,
        minHeight: style?.minHeight || '90px',
        padding: style?.padding || '16px',
        backgroundColor: style?.backgroundColor || 'rgba(30, 41, 59, 0.4)',
        borderRadius: style?.borderRadius || '12px',
        border: style?.border || '1px dashed #475569',
        height: style?.height ? '100%' : undefined,
        minWidth: 0,
        boxSizing: 'border-box',
        ...cleanStyle,
        width: '100%',
        flex: '1 1 auto',
      }
    : {
        ...layoutStyle,
        minHeight: style?.minHeight || '90px',
        padding: style?.padding || '16px',
        backgroundColor: style?.backgroundColor || 'rgba(30, 41, 59, 0.4)',
        borderRadius: style?.borderRadius || '12px',
        border: style?.border || '1px dashed #475569',
        width: style?.width !== undefined ? style.width : autoWidth,
        flex: style?.flex !== undefined ? style.flex : autoFlex,
        maxWidth: style?.maxWidth !== undefined ? style.maxWidth : autoMaxWidth,
        minWidth: style?.minWidth !== undefined ? style.minWidth : 0,
        boxSizing: 'border-box',
        ...(style as React.CSSProperties),
      }

  return (
    <div
      onClick={onClick}
      onContextMenu={onContextMenu}
      style={combinedStyle}
      className={`relative transition-all duration-150 group/container box-border ${
        isEditing
          ? `cursor-pointer ${
              isSelected
                ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20'
                : 'hover:outline-1 hover:outline-blue-400/40'
            }`
          : ''
      }`}
    >
      {/* Selection badge */}
      {isEditing && isSelected && (
        <div className="absolute -top-3 left-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-20 uppercase tracking-wider flex items-center gap-1">
          <span>Khoảng trắng</span>
          <span className="opacity-75">#{node.id.slice(-4)}</span>
        </div>
      )}

      {children}
    </div>
  )
}
