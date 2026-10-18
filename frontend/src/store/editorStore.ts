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
  updateFeatureLayout: (id: string, layoutConfig: Partial<FeatureLayoutConfig>) => void

  // Hydrate toàn bộ features từ server (sau khi login / reload)
  setFeatures: (features: FeaturePage[]) => void

  // Actions for Components in the active feature
  selectComponent: (componentId: string | null) => void
  addComponent: (component: ComponentNode, parentId?: string | null) => void
  updateComponentProps: (componentId: string, props: Partial<ComponentProps>) => void
  updateComponentStyle: (componentId: string, style: Partial<ComponentStyle>) => void
  updateComponentEvents: (componentId: string, events: ComponentEvent[]) => void
  removeComponent: (componentId: string) => void

  // Smart flex layout: Adjust one component width without resetting custom settings of siblings
  distributeSiblingWidths: (componentId: string, primaryWidthPercent: number) => void

  // Undo / Redo
  undo: () => void
  redo: () => void
}

const MAX_HISTORY = 40

const initialFeatures: FeaturePage[] = [
  {
    id: 'feat-dashboard',
    name: 'Tổng quan hệ thống',
    icon: 'LayoutDashboard',
    route: '/dashboard',
    description: 'Bảng điều khiển và thống kê chung',
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
        pageId: 'feat-dashboard',
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
            pageId: 'feat-dashboard',
            props: { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'nowrap', justify: 'flex-start', align: 'flex-start', gap: '4px' } },
            style: { padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' },
            events: [],
            children: [
              { id: 'lbl-stat-1', type: 'Label', parentId: 'stat-1', pageId: 'feat-dashboard', props: { label: 'Doanh thu hôm nay' }, style: { color: '#94a3b8', fontSize: '12px' }, events: [], order: 1 },
              { id: 'lbl-stat-val-1', type: 'Label', parentId: 'stat-1', pageId: 'feat-dashboard', props: { label: '₫ 128,450,000' }, style: { color: '#38bdf8', fontSize: '20px', fontWeight: 'bold' }, events: [], order: 2 },
            ],
            order: 1,
          },
          {
            id: 'stat-2',
            type: 'Container',
            parentId: 'box-stats',
            pageId: 'feat-dashboard',
            props: { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'nowrap', justify: 'flex-start', align: 'flex-start', gap: '4px' } },
            style: { padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' },
            events: [],
            children: [
              { id: 'lbl-stat-2', type: 'Label', parentId: 'stat-2', pageId: 'feat-dashboard', props: { label: 'Đơn hàng mới' }, style: { color: '#94a3b8', fontSize: '12px' }, events: [], order: 1 },
              { id: 'lbl-stat-val-2', type: 'Label', parentId: 'stat-2', pageId: 'feat-dashboard', props: { label: '1,429 đơn' }, style: { color: '#4ade80', fontSize: '20px', fontWeight: 'bold' }, events: [], order: 2 },
            ],
            order: 2,
          },
          {
            id: 'stat-3',
            type: 'Container',
            parentId: 'box-stats',
            pageId: 'feat-dashboard',
            props: { layoutMode: 'flex', flexConfig: { direction: 'column', wrap: 'nowrap', justify: 'flex-start', align: 'flex-start', gap: '4px' } },
            style: { padding: '16px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' },
            events: [],
            children: [
              { id: 'lbl-stat-3', type: 'Label', parentId: 'stat-3', pageId: 'feat-dashboard', props: { label: 'Tỉ lệ hoàn tất' }, style: { color: '#94a3b8', fontSize: '12px' }, events: [], order: 1 },
              { id: 'lbl-stat-val-3', type: 'Label', parentId: 'stat-3', pageId: 'feat-dashboard', props: { label: '98.6%' }, style: { color: '#facc15', fontSize: '20px', fontWeight: 'bold' }, events: [], order: 2 },
            ],
            order: 3,
          },
        ],
        order: 1,
      },
    ],
  },
]

export const useEditorStore = create<EditorState>()(
  devtools(
    (set) => ({
      features: initialFeatures,
      activeFeatureId: initialFeatures[0].id,
      selection: { componentId: null, pageId: initialFeatures[0].id },
      history: [initialFeatures],
      historyIndex: 0,

      setActiveFeature: (id) => {
        set((s) => ({
          activeFeatureId: id,
          selection: { componentId: null, pageId: id },
        }))
      },

      setFeatures: (features) => {
        if (!features.length) return
        set({
          features,
          activeFeatureId: features[0].id,
          selection: { componentId: null, pageId: features[0].id },
          history: [features],
          historyIndex: 0,
        })
      },

      addFeature: (name, icon = 'Layers') => {
        const id = `feat-${Date.now().toString(36)}`
        const newFeature: FeaturePage = {
          id,
          name: name.trim() || 'Tính năng mới',
          icon,
          route: `/${id}`,
          layoutConfig: {
            direction: 'column',
            gap: '16px',
            wrap: 'wrap',
          },
          components: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

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

      deleteFeature: (id) => {
        set((s) => {
          if (s.features.length <= 1) return {}
          const next = s.features.filter((f) => f.id !== id)
          const newActiveId = s.activeFeatureId === id ? next[0].id : s.activeFeatureId
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

      selectComponent: (componentId) => {
        set((s) => ({
          selection: { ...s.selection, componentId },
        }))
      },

      addComponent: (component, parentId = null) => {
        set((s) => {
          const currentFeature = s.features.find((f) => f.id === s.activeFeatureId)
          if (!currentFeature) return {}

          let updatedComponents: ComponentNode[]
          if (parentId) {
            // Nested inside a container
            updatedComponents = addNodeToParent(currentFeature.components, parentId, component)
          } else {
            // Root level
            updatedComponents = [...currentFeature.components, component]
          }

          const nextFeatures = s.features.map((f) =>
            f.id === s.activeFeatureId ? { ...f, components: updatedComponents } : f
          )
          return recordHistory(s, nextFeatures)
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
