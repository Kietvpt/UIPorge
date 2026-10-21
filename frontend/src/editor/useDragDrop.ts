import { useState } from 'react'
import type {
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
  CollisionDetection,
} from '@dnd-kit/core'
import { pointerWithin, rectIntersection } from '@dnd-kit/core'
import { useEditorStore } from '@/store/editorStore'
import type { ComponentNode, ComponentType } from '@/types/schema'

export interface DragActiveData {
  id: string
  isPaletteItem?: boolean
  type?: ComponentType
  name?: string
  node?: ComponentNode
}

export interface DragState {
  activeId: string | null
  overId: string | null
  activeData: DragActiveData | null
}

/** Custom collision detection: pointerWithin first, fallback to rectIntersection */
export const customCollisionDetection: CollisionDetection = (args) => {
  const pointerCollisions = pointerWithin(args)
  if (pointerCollisions.length > 0) {
    return pointerCollisions
  }
  return rectIntersection(args)
}

/** Factory to create a new component when dropped from the Palette */
export function createPaletteComponent(
  type: ComponentType,
  pageId: string,
  parentId: string | null = null,
  customProps: Record<string, unknown> = {},
  customStyle: Record<string, unknown> = {}
): ComponentNode {
  const id = `${type.toLowerCase()}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`

  let defaultProps: Record<string, unknown> = { ...customProps }
  let defaultStyle: Record<string, unknown> = { ...customStyle }

  switch (type) {
    case 'Button':
      defaultProps = { label: 'Nút bấm mới', variant: 'primary', size: 'md', ...defaultProps }
      break
    case 'TextBox':
      defaultProps = { label: 'Tên trường', placeholder: 'Nhập nội dung...', ...defaultProps }
      break
    case 'Label':
      defaultProps = { label: 'Tiêu đề khối văn bản', ...defaultProps }
      defaultStyle = { fontSize: '16px', fontWeight: 'bold', ...defaultStyle }
      break
    case 'Container':
      defaultProps = {
        layoutMode: 'flex',
        flexConfig: { direction: 'row', wrap: 'wrap', justify: 'flex-start', align: 'stretch', gap: '16px' },
        ...defaultProps,
      }
      defaultStyle = {
        minHeight: '120px',
        backgroundColor: '#1e293b',
        padding: '16px',
        borderRadius: '12px',
        border: '1px dashed #475569',
        ...defaultStyle,
      }
      break
    case 'Table':
      defaultProps = {
        columns: [
          { key: 'id', title: 'Mã', width: '80px' },
          { key: 'name', title: 'Tên' },
          { key: 'status', title: 'Trạng thái' },
        ],
        ...defaultProps,
      }
      break
  }

  return {
    id,
    type,
    parentId,
    pageId,
    props: defaultProps,
    style: defaultStyle,
    events: [],
    order: 1,
  }
}

/** Hook to manage drag-and-drop logic for canvas and palette */
export function useDragDrop() {
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const moveComponent = useEditorStore((s) => s.moveComponent)
  const addComponent = useEditorStore((s) => s.addComponent)
  const selectComponent = useEditorStore((s) => s.selectComponent)

  const [dragState, setDragState] = useState<DragState>({
    activeId: null,
    overId: null,
    activeData: null,
  })

  const handleDragStart = (event: DragStartEvent) => {
    const activeId = String(event.active.id)
    const currentData = (event.active.data.current || {}) as DragActiveData

    setDragState({
      activeId,
      overId: null,
      activeData: { ...currentData, id: activeId },
    })

    // Auto-select existing component on drag start
    if (!currentData.isPaletteItem) {
      selectComponent(activeId)
    }
  }

  const handleDragOver = (event: DragOverEvent) => {
    const overId = event.over ? String(event.over.id) : null
    setDragState((prev) => ({ ...prev, overId }))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setDragState({ activeId: null, overId: null, activeData: null })

    if (!over) return

    const dragId = String(active.id)
    const overId = String(over.id)
    const isPaletteItem = Boolean(active.data.current?.isPaletteItem)
    const paletteType = active.data.current?.type as ComponentType | undefined

    const currentFeature = features.find((f) => f.id === activeFeatureId)
    if (!currentFeature) return

    // Case 1: Dropped onto Canvas Root background
    if (overId === 'canvas-root') {
      if (isPaletteItem && paletteType) {
        const newComp = createPaletteComponent(paletteType, activeFeatureId, null)
        addComponent(newComp, null)
      } else {
        const rootComponents = currentFeature.components.filter((c) => !c.parentId)
        moveComponent(dragId, null, rootComponents.length)
      }
      return
    }

    // Don't drop on self
    if (dragId === overId) return

    // Find over node in component tree
    const overNode = findNodeById(currentFeature.components, overId)
    if (!overNode) return

    // ── Handle PALETTE ITEM drop ──
    if (isPaletteItem && paletteType) {
      if (overNode.type === 'Container') {
        // Drop inside container at the end
        const childCount = overNode.children?.length || 0
        const newComp = createPaletteComponent(paletteType, activeFeatureId, overNode.id)
        addComponent(newComp, overNode.id, childCount)
      } else {
        // Drop as sibling before overNode
        const targetParentId = overNode.parentId
        const siblings = getSiblings(currentFeature.components, targetParentId)
        const overIndex = siblings.findIndex((s) => s.id === overId)
        const insertIndex = overIndex >= 0 ? overIndex : siblings.length
        const newComp = createPaletteComponent(paletteType, activeFeatureId, targetParentId)
        addComponent(newComp, targetParentId, insertIndex)
      }
      return
    }

    // ── Handle EXISTING CANVAS COMPONENT drop ──
    const dragNode = findNodeById(currentFeature.components, dragId)
    if (!dragNode) return

    // Anti-cycle check: Cannot drop a node into itself or any of its descendants
    if (isDescendant(dragNode, overId)) {
      return
    }

    // Check sibling reorder:
    // When both are siblings under the same parent AND
    // either both are non-containers, or both are containers
    const isSameParent = dragNode.parentId === overNode.parentId
    const bothContainers = dragNode.type === 'Container' && overNode.type === 'Container'
    const bothLeaves = dragNode.type !== 'Container' && overNode.type !== 'Container'

    if (isSameParent && (bothContainers || bothLeaves)) {
      // Sibling reorder
      const targetParentId = overNode.parentId
      const siblings = getSiblings(currentFeature.components, targetParentId)
      const overIndex = siblings.findIndex((s) => s.id === overId)
      if (overIndex >= 0) {
        moveComponent(dragId, targetParentId, overIndex)
      }
      return
    }

    // Over a Container: nest inside it (unless it's the node itself or a descendant)
    if (overNode.type === 'Container') {
      const childCount = overNode.children?.length || 0
      moveComponent(dragId, overNode.id, childCount)
      return
    }

    // Over a leaf component: insert before that leaf inside overNode's parent
    const targetParentId = overNode.parentId
    const siblings = getSiblings(currentFeature.components, targetParentId)
    const overIndex = siblings.findIndex((s) => s.id === overId)
    const insertIndex = overIndex >= 0 ? overIndex : siblings.length
    moveComponent(dragId, targetParentId, insertIndex)
  }

  const handleDragCancel = () => {
    setDragState({ activeId: null, overId: null, activeData: null })
  }

  return {
    dragState,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
  }
}

/** Recursively find a node by id in the component tree */
export function findNodeById(
  nodes: ComponentNode[],
  id: string
): ComponentNode | null {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children && node.children.length > 0) {
      const found = findNodeById(node.children, id)
      if (found) return found
    }
  }
  return null
}

/** Check if targetId is the node itself or one of its descendants */
export function isDescendant(node: ComponentNode, targetId: string): boolean {
  if (node.id === targetId) return true
  if (node.children && node.children.length > 0) {
    return node.children.some((child) => isDescendant(child, targetId))
  }
  return false
}

/** Get all siblings sharing the same parentId (null = root level) */
export function getSiblings(
  nodes: ComponentNode[],
  parentId: string | null
): ComponentNode[] {
  if (parentId === null) {
    return nodes.filter((n) => !n.parentId)
  }
  const parent = findNodeById(nodes, parentId)
  return parent?.children || []
}
