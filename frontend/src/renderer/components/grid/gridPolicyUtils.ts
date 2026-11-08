import type { TableColumn } from '@/types/schema'

/**
 * Thuật toán sắp xếp cột kế thừa từ C# Core (GridView.cs dòng 2567-2570):
 * .OrderByDescending(x => x.Frozen).ThenBy(x => x.Order)
 * - Cột Frozen (cố định) LUÔN LUÔN được đưa lên đầu bảng (bên trái).
 * - Các cột cùng nhóm Frozen hoặc cùng nhóm Unfrozen sẽ được sắp xếp tăng dần theo `order`.
 */
export function sortColumnsByCorePolicy(cols: TableColumn[]): TableColumn[] {
  return [...cols].sort((a, b) => {
    const aFrozen = Boolean(a.frozen || a.sticky === 'left')
    const bFrozen = Boolean(b.frozen || b.sticky === 'left')

    // 1. Ưu tiên tuyệt đối cột Frozen lên đầu bảng
    if (aFrozen && !bFrozen) return -1
    if (!aFrozen && bFrozen) return 1

    // 2. Tiếp theo sắp xếp theo thuộc tính order (nhỏ đứng trước)
    const aOrder = typeof a.order === 'number' ? a.order : 999
    const bOrder = typeof b.order === 'number' ? b.order : 999
    if (aOrder !== bOrder) return aOrder - bOrder

    // 3. Nếu order bằng nhau, giữ nguyên thứ tự ban đầu
    return 0
  })
}

/**
 * Chuẩn hóa và gán lại thuộc tính order (1, 2, 3...) cho toàn bộ danh sách cột
 */
export function normalizeColumnOrders(cols: TableColumn[]): TableColumn[] {
  const sorted = sortColumnsByCorePolicy(cols)
  return sorted.map((col, idx) => ({
    ...col,
    order: idx + 1,
    // Đồng bộ thuộc tính frozen và sticky
    frozen: Boolean(col.frozen || col.sticky === 'left'),
    sticky: Boolean(col.frozen || col.sticky === 'left') ? 'left' : 'none',
  }))
}

/**
 * Di chuyển cột lên hoặc xuống trong danh sách (hoặc Kéo Thả Drag & Drop) và cập nhật lại order theo vị trí mới
 */
export function moveColumn(cols: TableColumn[], fromIdx: number, toIdx: number): TableColumn[] {
  if (toIdx < 0 || toIdx >= cols.length || fromIdx === toIdx) return cols
  const updated = [...cols]
  const [moved] = updated.splice(fromIdx, 1)

  // Kiểm tra nếu di chuyển liên quan đến vùng Frozen
  const frozenCount = updated.filter((c) => c.frozen || c.sticky === 'left').length
  const wasFrozen = Boolean(moved.frozen || moved.sticky === 'left')

  // Nếu kéo một cột thường vào trong vùng frozen -> tự động ghim
  if (!wasFrozen && toIdx < frozenCount) {
    moved.frozen = true
    moved.sticky = 'left'
  }
  // Nếu kéo một cột frozen ra ngoài vùng frozen -> tự động bỏ ghim
  else if (wasFrozen && toIdx >= frozenCount) {
    moved.frozen = false
    moved.sticky = 'none'
  }

  updated.splice(toIdx, 0, moved)

  // Giữ nhóm Frozen đứng đầu và nhóm Unfrozen đứng sau, bảo toàn tuyệt đối thứ tự kéo thả của user
  const frozens = updated.filter((c) => c.frozen || c.sticky === 'left')
  const unfrozens = updated.filter((c) => !c.frozen && c.sticky !== 'left')
  const reordered = [...frozens, ...unfrozens]

  // Gán lại order: 1, 2, 3... liên tục theo đúng thứ tự mảng mới
  return reordered.map((col, idx) => ({
    ...col,
    order: idx + 1,
    frozen: Boolean(col.frozen || col.sticky === 'left'),
    sticky: Boolean(col.frozen || col.sticky === 'left') ? ('left' as const) : ('none' as const),
  }))
}

/**
 * Bật / Tắt cố định cột (Freeze) và tự động đưa lên đầu table
 */
export function toggleColumnFreeze(cols: TableColumn[], columnKey: string): TableColumn[] {
  const updated = cols.map((col) => {
    if (col.key === columnKey) {
      const willFreeze = !(col.frozen || col.sticky === 'left')
      return {
        ...col,
        frozen: willFreeze,
        sticky: willFreeze ? ('left' as const) : ('none' as const),
      }
    }
    return col
  })
  return normalizeColumnOrders(updated)
}

/**
 * Tính toán vị trí left (px) cộng dồn cho các cột Sticky Left
 */
export function calculateLeftOffsets(
  columns: TableColumn[],
  baseLeft = 55
): { offsets: Record<string, number>; lastFrozenKey: string | null } {
  const offsets: Record<string, number> = {}
  let currentLeft = baseLeft
  let lastFrozenKey: string | null = null

  columns.forEach((col) => {
    const isFrozen = Boolean(col.frozen || col.sticky === 'left')
    if (isFrozen && !col.hidden) {
      offsets[col.key] = currentLeft
      lastFrozenKey = col.key
      const colWidthNum = parseInt(String(col.width || '140'), 10) || 140
      currentLeft += colWidthNum
    }
  })

  return { offsets, lastFrozenKey }
}

