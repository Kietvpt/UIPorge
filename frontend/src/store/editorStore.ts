import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {
  ComponentNode,
  FeaturePage,
  FeatureLayoutConfig,
  EditorSelection,
  ComponentStyle,
  ComponentProps,
  ComponentEvent,
} from '@/types/schema'

interface EditorState {
  // All features in the system
  features: FeaturePage[]
  activeFeatureId: string

  // Selection
  selection: EditorSelection

  // History for undo/redo
  history: FeaturePage[][]
  historyIndex: number

  // Actions for Features
  setActiveFeature: (id: string) => void
  addFeature: (name: string, icon?: string) => string
  renameFeature: (id: string, name: string) => void
  deleteFeature: (id: string) => void
  updateFeatureId: (oldId: string, newId: string) => void
  updateFeatureLayout: (id: string, layoutConfig: Partial<FeatureLayoutConfig>) => void
  updateFeatureScriptFile: (id: string, scriptFile: string) => void

  // Hydrate toàn bộ features từ server (sau khi login / reload)
  setFeatures: (features: FeaturePage[]) => void

  // Actions for Components in the active feature
  selectComponent: (componentId: string | null) => void
  addComponent: (component: ComponentNode, parentId?: string | null, targetIndex?: number) => void
  updateComponentProps: (componentId: string, props: Partial<ComponentProps>) => void
  updateComponentStyle: (componentId: string, style: Partial<ComponentStyle>) => void
  updateComponentEvents: (componentId: string, events: ComponentEvent[]) => void
  removeComponent: (componentId: string) => void

  // Drag & Drop: move a component to a new parent at a specific index
  moveComponent: (dragId: string, newParentId: string | null, newIndex: number) => void

  // Smart flex layout: Adjust one component width without resetting custom settings of siblings
  distributeSiblingWidths: (componentId: string, primaryWidthPercent: number) => void

  // Undo / Redo
  undo: () => void
  redo: () => void
}

const MAX_HISTORY = 40

const initialFeatures: FeaturePage[] = [
  {
    id: '1',
    name: 'Tổng quan hệ thống',
    icon: 'LayoutDashboard',
    route: '/dashboard',
    description: 'Bảng điều khiển và thống kê chung',
    scriptFile: 'dashboard.bl.ts',
    layoutConfig: {
      direction: 'column',
      gap: '16px',
      wrap: 'wrap',
    },
    components: [
      {
        id: 'box-stats',
        type: 'Container',
        parentId: null,
        pageId: '1',
        props: {
          layoutMode: 'grid',
          gridConfig: { columns: 3, gap: '16px' },
        },
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '16px',
          width: '100%',
          padding: '16px',
          backgroundColor: '#1e293b',
          borderRadius: '12px',
          border: '1px solid #334155',
        },
        events: [],
        children: [
          {
            id: 'stat-1',
            type: 'Container',
            parentId: 'box-stats',
            pageId: '1',
            props: { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'nowrap', justify: 'flex-start', align: 'flex-start', gap: '4px' } },
            style: { padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' },
            events: [],
            children: [
              { id: 'lbl-stat-1', type: 'Label', parentId: 'stat-1', pageId: '1', props: { label: 'Doanh thu hôm nay' }, style: { color: '#94a3b8', fontSize: '12px' }, events: [], order: 1 },
              { id: 'lbl-stat-val-1', type: 'Label', parentId: 'stat-1', pageId: '1', props: { label: '₫ 128,450,000' }, style: { color: '#38bdf8', fontSize: '20px', fontWeight: 'bold' }, events: [], order: 2 },
            ],
            order: 1,
          },
          {
            id: 'stat-2',
            type: 'Container',
            parentId: 'box-stats',
            pageId: '1',
            props: { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'nowrap', justify: 'flex-start', align: 'flex-start', gap: '4px' } },
            style: { padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' },
            events: [],
            children: [
              { id: 'lbl-stat-2', type: 'Label', parentId: 'stat-2', pageId: '1', props: { label: 'Đơn hàng mới' }, style: { color: '#94a3b8', fontSize: '12px' }, events: [], order: 1 },
              { id: 'lbl-stat-val-2', type: 'Label', parentId: 'stat-2', pageId: '1', props: { label: '1,429 đơn' }, style: { color: '#4ade80', fontSize: '20px', fontWeight: 'bold' }, events: [], order: 2 },
            ],
            order: 2,
          },
          {
            id: 'stat-3',
            type: 'Container',
            parentId: 'box-stats',
            pageId: '1',
            props: { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'nowrap', justify: 'flex-start', align: 'flex-start', gap: '4px' } },
            style: { padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' },
            events: [],
            children: [
              { id: 'lbl-stat-3', type: 'Label', parentId: 'stat-3', pageId: '1', props: { label: 'Tỉ lệ hoàn tất' }, style: { color: '#94a3b8', fontSize: '12px' }, events: [], order: 1 },
              { id: 'lbl-stat-val-3', type: 'Label', parentId: 'stat-3', pageId: '1', props: { label: '98.6%' }, style: { color: '#facc15', fontSize: '20px', fontWeight: 'bold' }, events: [], order: 2 },
            ],
            order: 3,
          },
        ],
        order: 1,
      },
    ],
  },
]


// ── URL & LocalStorage Persistence Helpers ──
export function getSavedFeatureId(): string | null {
  if (typeof window === 'undefined') return null
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const fromUrl = urlParams.get('feature') || urlParams.get('page')
    if (fromUrl) return fromUrl
    return localStorage.getItem('uiforge_active_feature_id')
  } catch {
    return null
  }
}

export function saveActiveFeatureIdToUrl(id: string) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('uiforge_active_feature_id', id)
    const url = new URL(window.location.href)
    url.searchParams.set('feature', id)
    window.history.replaceState(null, '', url.toString())
  } catch {
    // Ignore in unsupported environments
  }
}

export const useEditorStore = create<EditorState>()(
  devtools(
    (set) => ({
      features: initialFeatures,
      activeFeatureId: getSavedFeatureId() || initialFeatures[0].id,
      selection: { componentId: null, pageId: getSavedFeatureId() || initialFeatures[0].id },
      history: [initialFeatures],
      historyIndex: 0,

      setActiveFeature: (id) => {
        saveActiveFeatureIdToUrl(id)
        set((s) => ({
          activeFeatureId: id,
          selection: { componentId: null, pageId: id },
        }))
      },

      setFeatures: (features) => {
        if (!features.length) return
        const savedId = getSavedFeatureId()
        const target = (savedId && features.find((f) => f.id === savedId || f.route === `/${savedId}` || f.route === savedId)) || features[0]
        saveActiveFeatureIdToUrl(target.id)
        set({
          features,
          activeFeatureId: target.id,
          selection: { componentId: null, pageId: target.id },
          history: [features],
          historyIndex: 0,
        })
      },

      addFeature: (name, icon = 'Layers') => {
        const id = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
        const newFeature: FeaturePage = {
          id,
          name: name.trim() || 'Tính năng mới',
          icon,
          route: `/${id}`,
          scriptFile: '',
          layoutConfig: {
            direction: 'column',
            gap: '16px',
            wrap: 'wrap',
          },
          components: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

        saveActiveFeatureIdToUrl(id)
        set((s) => {
          const nextFeatures = [...s.features, newFeature]
          return {
            ...recordHistory(s, nextFeatures),
            activeFeatureId: id,
            selection: { componentId: null, pageId: id },
          }
        })
        return id
      },

      renameFeature: (id, name) => {
        set((s) => {
          const next = s.features.map((f) => (f.id === id ? { ...f, name } : f))
          return recordHistory(s, next)
        })
      },

      updateFeatureId: (oldId, newId) => {
        set((s) => {
          const next = s.features.map((f) =>
            f.id === oldId
              ? {
                  ...f,
                  id: newId,
                  route: f.route === `/${oldId}` ? `/${newId}` : f.route,
                  components: f.components.map((c) => ({ ...c, pageId: newId })),
                }
              : f
          )
          const updatedActiveId = s.activeFeatureId === oldId ? newId : s.activeFeatureId
          saveActiveFeatureIdToUrl(updatedActiveId)
          return {
            features: next,
            activeFeatureId: updatedActiveId,
            selection: s.selection.pageId === oldId ? { ...s.selection, pageId: newId } : s.selection,
          }
        })
      },

      deleteFeature: (id) => {
        set((s) => {
          if (s.features.length <= 1) return {}
          const next = s.features.filter((f) => f.id !== id)
          const newActiveId = s.activeFeatureId === id ? next[0].id : s.activeFeatureId
          saveActiveFeatureIdToUrl(newActiveId)
          return {
            ...recordHistory(s, next),
            activeFeatureId: newActiveId,
            selection: { componentId: null, pageId: newActiveId },
          }
        })
      },

      updateFeatureLayout: (id, layoutConfig) => {
        set((s) => {
          const next = s.features.map((f) => {
            if (f.id !== id) return f
            return {
              ...f,
              layoutConfig: {
                ...(f.layoutConfig || { direction: 'column', gap: '16px', wrap: 'wrap' }),
                ...layoutConfig,
              },
            }
          })
          return recordHistory(s, next)
        })
      },

      updateFeatureScriptFile: (id, scriptFile) => {
        set((s) => {
          const next = s.features.map((f) => (f.id === id ? { ...f, scriptFile: scriptFile.trim() } : f))
          return recordHistory(s, next)
        })
      },

      selectComponent: (componentId) => {
        set((s) => ({
          selection: { ...s.selection, componentId },
        }))
      },

      addComponent: (component, parentId = null, targetIndex?: number) => {
        set((s) => {
          const currentFeature = s.features.find((f) => f.id === s.activeFeatureId)
          if (!currentFeature) return {}

          let updatedComponents: ComponentNode[]
          if (parentId) {
            if (targetIndex !== undefined) {
              updatedComponents = insertNodeInParent(currentFeature.components, parentId, component, targetIndex)
            } else {
              updatedComponents = addNodeToParent(currentFeature.components, parentId, component)
            }
          } else {
            if (targetIndex !== undefined) {
              const rootNodes = [...currentFeature.components]
              rootNodes.splice(targetIndex, 0, component)
              updatedComponents = rootNodes.map((n, i) => ({ ...n, order: i + 1 }))
            } else {
              updatedComponents = [...currentFeature.components, component]
            }
          }

          const nextFeatures = s.features.map((f) =>
            f.id === s.activeFeatureId ? { ...f, components: updatedComponents } : f
          )
          return {
            ...recordHistory(s, nextFeatures),
            selection: { ...s.selection, componentId: component.id },
          }
        })
      },

      updateComponentProps: (componentId, props) => {
        set((s) => {
          const next = s.features.map((f) => {
            if (f.id !== s.activeFeatureId) return f
            return {
              ...f,
              components: updateNodeInList(f.components, componentId, (n) => ({
                ...n,
                props: { ...n.props, ...props },
              })),
            }
          })
          return recordHistory(s, next)
        })
      },

      updateComponentStyle: (componentId, style) => {
        set((s) => {
          const next = s.features.map((f) => {
            if (f.id !== s.activeFeatureId) return f
            return {
              ...f,
              components: updateNodeInList(f.components, componentId, (n) => ({
                ...n,
                style: { ...n.style, ...style },
              })),
            }
          })
          return recordHistory(s, next)
        })
      },

      updateComponentEvents: (componentId, events) => {
        set((s) => {
          const next = s.features.map((f) => {
            if (f.id !== s.activeFeatureId) return f
            return {
              ...f,
              components: updateNodeInList(f.components, componentId, (n) => ({
                ...n,
                events,
              })),
            }
          })
          return recordHistory(s, next)
        })
      },

      removeComponent: (componentId) => {
        set((s) => {
          const next = s.features.map((f) => {
            if (f.id !== s.activeFeatureId) return f
            return {
              ...f,
              components: removeNodeFromList(f.components, componentId),
            }
          })
          return {
            ...recordHistory(s, next),
            selection: { ...s.selection, componentId: null },
          }
        })
      },

      moveComponent: (dragId, newParentId, newIndex) => {
        set((s) => {
          const currentFeature = s.features.find((f) => f.id === s.activeFeatureId)
          if (!currentFeature) return {}

          // Extract the dragged node (remove from current position)
          const extracted = extractNode(currentFeature.components, dragId)
          if (!extracted) return {}
          const [movedNode, treeWithout] = extracted

          // Update parentId on the moved node
          const updatedNode: ComponentNode = { ...movedNode, parentId: newParentId }

          // Insert at target position
          let updatedComponents: ComponentNode[]
          if (newParentId === null) {
            // Root-level: work on flat root list, reorder, then merge children back
            const rootNodes = treeWithout.filter((c) => !c.parentId)
            rootNodes.splice(newIndex, 0, updatedNode)
            const withOrder = rootNodes.map((n, i) => ({ ...n, order: i + 1 }))
            const childNodes = treeWithout.filter((c) => c.parentId)
            updatedComponents = [...withOrder, ...childNodes]
          } else {
            updatedComponents = insertNodeInParent(treeWithout, newParentId, updatedNode, newIndex)
          }

          const nextFeatures = s.features.map((f) =>
            f.id === s.activeFeatureId ? { ...f, components: updatedComponents } : f
          )
          return recordHistory(s, nextFeatures)
        })
      },

      distributeSiblingWidths: (componentId, primaryWidthPercent) => {
        set((s) => {
          const next = s.features.map((f) => {
            if (f.id !== s.activeFeatureId) return f
            return {
              ...f,
              components: updateSiblingList(f.components, componentId, primaryWidthPercent),
            }
          })
          return recordHistory(s, next)
        })
      },

      undo: () => {
        set((s) => {
          if (s.historyIndex <= 0) return {}
          const newIndex = s.historyIndex - 1
          return { historyIndex: newIndex, features: s.history[newIndex] }
        })
      },

      redo: () => {
        set((s) => {
          if (s.historyIndex >= s.history.length - 1) return {}
          const newIndex = s.historyIndex + 1
          return { historyIndex: newIndex, features: s.history[newIndex] }
        })
      },
    }),
    { name: 'UIForge/MultiFeatureStore' }
  )
)

// Helper: record history state
function recordHistory(s: EditorState, nextFeatures: FeaturePage[]) {
  const newHist = s.history.slice(0, s.historyIndex + 1)
  if (newHist.length >= MAX_HISTORY) newHist.shift()
  newHist.push(nextFeatures)
  return {
    features: nextFeatures,
    history: newHist,
    historyIndex: newHist.length - 1,
  }
}

function updateNodeInList(
  nodes: ComponentNode[],
  id: string,
  updater: (node: ComponentNode) => ComponentNode
): ComponentNode[] {
  return nodes.map((node) => {
    if (node.id === id) return updater(node)
    if (node.children && node.children.length > 0) {
      return { ...node, children: updateNodeInList(node.children, id, updater) }
    }
    return node
  })
}

function removeNodeFromList(nodes: ComponentNode[], id: string): ComponentNode[] {
  return nodes
    .filter((n) => n.id !== id)
    .map((n) =>
      n.children && n.children.length > 0
        ? { ...n, children: removeNodeFromList(n.children, id) }
        : n
    )
}

function addNodeToParent(
  nodes: ComponentNode[],
  parentId: string,
  newNode: ComponentNode
): ComponentNode[] {
  return nodes.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        children: [...(node.children || []), { ...newNode, parentId }],
      }
    }
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: addNodeToParent(node.children, parentId, newNode),
      }
    }
    return node
  })
}

// Sets targetId to primaryPercent WITHOUT overwriting siblings that already have custom settings!
function updateSiblingList(
  nodes: ComponentNode[],
  targetId: string,
  primaryPercent: number
): ComponentNode[] {
  const containsTarget = nodes.some((n) => n.id === targetId)

  if (containsTarget) {
    return nodes.map((node) => {
      if (node.id === targetId) {
        return {
          ...node,
          style: {
            ...node.style,
            width: `${primaryPercent}%`,
            flex: `0 0 ${primaryPercent}%`,
            maxWidth: `${primaryPercent}%`,
            minWidth: 0,
          },
        }
      } else {
        // IMPORTANT: If sibling already has a custom width set, PRESERVE IT! Never wipe it!
        if (node.style?.width && node.style.width !== '100%') {
          return node
        }
        // Only siblings without custom width share the remaining space
        return {
          ...node,
          style: {
            ...node.style,
            flex: '1 1 0%',
            width: undefined,
            maxWidth: undefined,
            minWidth: 0,
          },
        }
      }
    })
  }

  // Recurse into children
  return nodes.map((node) => {
    if (node.children && node.children.length > 0) {
      return {
        ...node,
        children: updateSiblingList(node.children, targetId, primaryPercent),
      }
    }
    return node
  })
}


// Extracts a node (by id) from the tree, returns [extractedNode, treeWithoutNode]
// Works on FLAT list (components array at feature level)
function extractNode(
  nodes: ComponentNode[],
  id: string
): [ComponentNode, ComponentNode[]] | null {
  // Check root level first
  const rootIdx = nodes.findIndex((n) => n.id === id)
  if (rootIdx !== -1) {
    const node = nodes[rootIdx]
    const remaining = [...nodes.slice(0, rootIdx), ...nodes.slice(rootIdx + 1)]
    return [node, remaining]
  }

  // Search in children of each node
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    if (!node.children || node.children.length === 0) continue

    const childIdx = node.children.findIndex((c) => c.id === id)
    if (childIdx !== -1) {
      const found = node.children[childIdx]
      const newChildren = [
        ...node.children.slice(0, childIdx),
        ...node.children.slice(childIdx + 1),
      ]
      const updatedNode = { ...node, children: newChildren }
      const updatedNodes = [...nodes.slice(0, i), updatedNode, ...nodes.slice(i + 1)]
      return [found, updatedNodes]
    }

    // Recurse deeper
    const result = extractNodeFromChildren(node.children, id)
    if (result) {
      const [found, newChildren] = result
      const updatedNode = { ...node, children: newChildren }
      const updatedNodes = [...nodes.slice(0, i), updatedNode, ...nodes.slice(i + 1)]
      return [found, updatedNodes]
    }
  }
  return null
}

function extractNodeFromChildren(
  children: ComponentNode[],
  id: string
): [ComponentNode, ComponentNode[]] | null {
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    if (child.id === id) {
      const remaining = [...children.slice(0, i), ...children.slice(i + 1)]
      return [child, remaining]
    }
    if (child.children && child.children.length > 0) {
      const result = extractNodeFromChildren(child.children, id)
      if (result) {
        const [found, newGrandchildren] = result
        const updatedChild = { ...child, children: newGrandchildren }
        const newChildren = [...children.slice(0, i), updatedChild, ...children.slice(i + 1)]
        return [found, newChildren]
      }
    }
  }
  return null
}

// Insert a node into a parent container at a specific index, update order for all siblings
function insertNodeInParent(
  nodes: ComponentNode[],
  parentId: string,
  newNode: ComponentNode,
  atIndex: number
): ComponentNode[] {
  return nodes.map((node) => {
    if (node.id === parentId) {
      const existingChildren = node.children || []
      const newChildren = [...existingChildren]
      newChildren.splice(atIndex, 0, { ...newNode, parentId })
      const withOrder = newChildren.map((c, i) => ({ ...c, order: i + 1 }))
      return { ...node, children: withOrder }
    }
    if (node.children && node.children.length > 0) {
      return { ...node, children: insertNodeInParent(node.children, parentId, newNode, atIndex) }
    }
    return node
  })
}
