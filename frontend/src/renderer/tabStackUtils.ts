import type { ComponentNode } from '@/types/schema'

export interface TabStackGroup {
  type: 'tab_stack'
  order: number
  nodes: ComponentNode[]
}

export interface SingleNodeGroup {
  type: 'single'
  order: number
  node: ComponentNode
}

export type RenderGroup = TabStackGroup | SingleNodeGroup

/**
 * 📑 Gom nhóm các Container anh em theo nguyên lý:
 * "nếu chúng có cùng order và thuộc tính tab = true thì nó sẽ stack lại thành thanh Tab,
 * còn không thì tách ra và xuống hàng."
 */
export function groupNodesByTabStack(nodes: ComponentNode[]): RenderGroup[] {
  if (!nodes || nodes.length === 0) return []

  // Sắp xếp ưu tiên thứ tự từ nhỏ đến lớn
  const sorted = [...nodes].sort((a, b) => (a.order ?? 1) - (b.order ?? 1))

  const groups: RenderGroup[] = []
  for (const node of sorted) {
    const isTab = Boolean(node.props?.tab || node.props?.isTab || node.type === 'Tabs')
    const order = node.order ?? 1

    if (isTab) {
      const lastGroup = groups[groups.length - 1]
      // Nếu phần tử trước đó cũng là TabStack và CÙNG ORDER -> STACK LẠI
      if (lastGroup && lastGroup.type === 'tab_stack' && lastGroup.order === order) {
        lastGroup.nodes.push(node)
      } else {
        // Khác order -> tạo một nhóm Tab riêng biệt (xuống hàng)
        groups.push({
          type: 'tab_stack',
          order,
          nodes: [node],
        })
      }
    } else {
      // Container hoặc Component bình thường -> xuống hàng theo bố cục
      groups.push({
        type: 'single',
        order,
        node,
      })
    }
  }

  return groups
}

