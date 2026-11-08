import React from 'react'
import type { ComponentNode, FlexConfig } from '@/types/schema'

export interface ParentLayoutContext {
  mode: 'flex' | 'grid'
  direction?: 'row' | 'column'
  columnsPerRow?: string | number
  gap?: string
  wrap?: 'wrap' | 'nowrap'
  gridColumns?: number
}

/**
 * Tính toán outer layout style (độ rộng, flex-basis, grid-column)
 * gắn trực tiếp vào wrapper ngoài cùng của từng phần tử con
 * để tương thích hoàn hảo giữa CSS Grid 12-cột ERP và Flexbox.
 *
 * 🎯 Ý TƯỞNG CỦA MASTER:
 * - Container định nghĩa Tổng Số Cột (Total Grid Columns, ví dụ 12 cột)
 * - Từng component con định nghĩa colSpan riêng biệt (ví dụ Job No = 4, S.Date = 8)
 * - Khi đó: 4 + 8 = 12 cột -> Job No (1/3) và S.Date (2/3) tự động nằm CHUNG 1 HÀNG!
 * - Phần tử tiếp theo rớt xuống hàng kế tiếp!
 */
export function getComponentOuterLayoutStyle(
  node: ComponentNode,
  parentLayout?: ParentLayoutContext
): React.CSSProperties {
  const style = node.style || {}
  const colSpan =
    node.props?.colSpan !== undefined && node.props?.colSpan !== null
      ? Number(node.props.colSpan)
      : undefined

  let width: string | undefined = style.width
  let flex: string | undefined = style.flex
  let maxWidth: string | number | undefined = style.maxWidth
  let minWidth: string | number | undefined = style.minWidth ?? 0
  let gridColumn: string | undefined = undefined

  const layoutMode = parentLayout?.mode || 'grid'
  const totalCols = parentLayout?.gridColumns || 12

  if (layoutMode === 'grid') {
    // ══════════════════════════════════════════════════════════
    // ── CSS GRID SYSTEM (12-CỘT HOẶC TỔNG N-CỘT THEO CONTAINER) ──
    // ══════════════════════════════════════════════════════════
    let span: number

    // 1. ƯU TIÊN CAO NHẤT: Thuộc tính colSpan riêng của component con (ví dụ: Job No = 4, S.Date = 8, Notes = 12)
    if (colSpan !== undefined && !isNaN(colSpan) && colSpan > 0) {
      span = Math.min(colSpan, totalCols)
    } else if (parentLayout?.columnsPerRow && parentLayout.columnsPerRow !== 'auto') {
      // 2. Nếu con không đặt colSpan riêng, chia đều theo số cột/dòng của container
      const cols = Number(parentLayout.columnsPerRow)
      if (!isNaN(cols) && cols > 0) {
        span = Math.max(1, Math.floor(totalCols / cols))
      } else {
        span = Math.min(4, totalCols)
      }
    } else {
      // 3. Mặc định là 4 (trên lưới 12-cột tương đương 1/3 hàng)
      span = Math.min(4, totalCols)
    }

    gridColumn = `span ${span} / span ${span}`

    // Trong CSS Grid, phần tử con PHẢI chiếm 100% ô lưới (track) mà nó được phân phối!
    width = style.width !== undefined ? style.width : '100%'
    maxWidth = style.maxWidth !== undefined ? style.maxWidth : '100%'
    flex = style.flex !== undefined ? style.flex : 'none'
  } else {
    // ══════════════════════════════════════════════════════════
    // ── FLEXBOX SYSTEM (HÀNG NGANG / CỘT DỌC LINH HOẠT) ──
    // ══════════════════════════════════════════════════════════
    const gapNum = parseInt(parentLayout?.gap || '12', 10) || 12
    const direction = parentLayout?.direction || 'row'

    if (direction === 'row') {
      if (colSpan !== undefined && !isNaN(colSpan) && colSpan > 0) {
        // Tôn trọng colSpan của con trên tổng số cột totalCols (mặc định 12)
        // Ví dụ: colSpan = 4 -> 4/12 = 33.3%, colSpan = 8 -> 8/12 = 66.6%
        const percent = Math.min(100, Math.max(2, (colSpan / totalCols) * 100))
        const calcWidth =
          colSpan >= totalCols
            ? '100%'
            : `calc(${percent}% - ${Math.round(gapNum * (1 - colSpan / totalCols))}px)`

        if (style.width === undefined && style.flex === undefined) {
          width = calcWidth
          maxWidth = calcWidth
          flex = `0 0 ${calcWidth}`
        }
      } else if (parentLayout?.columnsPerRow && parentLayout.columnsPerRow !== 'auto') {
        const cols = Number(parentLayout.columnsPerRow)
        if (!isNaN(cols) && cols > 0) {
          const calcWidth =
            cols === 1 ? '100%' : `calc((100% - ${(cols - 1) * gapNum}px) / ${cols})`
          if (style.width === undefined && style.flex === undefined) {
            width = calcWidth
            maxWidth = calcWidth
            flex = `0 0 ${calcWidth}`
          }
        }
      } else {
        if (style.width === undefined && style.flex === undefined) {
          width = '100%'
          maxWidth = '100%'
          flex = '1 1 auto'
        }
      }
    } else {
      // Hướng Cột dọc (Column): Chiếm toàn bộ chiều rộng
      if (style.width === undefined && style.flex === undefined) {
        width = '100%'
        maxWidth = '100%'
        flex = 'none'
      }
    }
  }

  return {
    width: width !== undefined ? width : '100%',
    flex: flex !== undefined ? flex : undefined,
    maxWidth: maxWidth !== undefined ? maxWidth : '100%',
    minWidth,
    gridColumn,
    height: style.height,
    minHeight: style.minHeight || (node.type === 'Container' ? '90px' : undefined),
    maxHeight: style.maxHeight,
    alignSelf: style.alignSelf,
  }
}
