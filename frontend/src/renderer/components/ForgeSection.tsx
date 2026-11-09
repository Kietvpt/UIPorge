import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { ChevronDown, ChevronUp, Layers } from 'lucide-react'
import type { FlexConfig } from '@/types/schema'

/**
 * ForgeSection: Kế thừa Section.cs & ComponentGroup.cs từ C# Core
 * - Thẻ Card có viền box-shadow sang trọng và bố cục linh hoạt
 * - Mặc định: Thiết lập hệ thống lưới 12-cột ERP (grid-template-columns: repeat(12, minmax(0, 1fr)))
 *   cho phép các FormField con nhận colSpan: 2, 4, 12 xếp hàng ngang hoàn hảo!
 * - Hỗ trợ thu gọn/mở rộng (Collapsible)
 * - Tương thích hoàn toàn với cấu hình Bố cục (Layout Mode: CSS Grid 12-cột hoặc Flexbox)
 */
export const ForgeSection: React.FC<ComponentProps> = ({ node, children }) => {
  const { props, style } = node
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const [collapsed, setCollapsed] = useState(false)
  const title = props.title || props.label || 'Khối Bố Cục (Section)'
  const isCollapsible = props.collapsible ?? true

  const layoutMode = props.layoutMode || 'grid'
  const flexConfig = (props.flexConfig as Partial<FlexConfig>) || {}
  const gridConfig = (props.gridConfig as Record<string, any>) || {}
  const totalCols = Number(gridConfig.columns || flexConfig.columnsPerRow || 12) || 12
  const gap = flexConfig.gap || gridConfig.gap || '12px'

  // Hỗ trợ cả cấu hình từ flexConfig lẫn Custom CSS
  const resolvedJustify = (style?.justifyContent as string) || flexConfig.justify || 'flex-start'
  const resolvedAlign = (style?.alignItems as string) || flexConfig.align || 'center'

  // Xây dựng style cho body của Section
  const bodyStyle: React.CSSProperties =
    layoutMode === 'flex'
      ? {
          display: 'flex',
          flexDirection: flexConfig.direction || 'row',
          flexWrap: flexConfig.wrap || 'wrap',
          justifyContent: resolvedJustify,
          alignItems: resolvedAlign,
          gap,
        }
      : {
          display: 'grid',
          gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))`,
          gap,
          alignItems: resolvedAlign,
        }

  return (
    <div
      className="w-full rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 overflow-hidden transition-all"
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      {/* Section Header */}
      <div className="px-4 py-3 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            {title}
          </h3>
        </div>

        {isCollapsible && (
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-colors cursor-pointer"
            title={collapsed ? 'Mở rộng' : 'Thu gọn'}
          >
            {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Section Body */}
      {!collapsed && (
        <div className="p-4 w-full box-border" style={bodyStyle}>
          {children}
        </div>
      )}
    </div>
  )
}
