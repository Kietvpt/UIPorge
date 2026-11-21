import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useDataEngine } from '@/core/engines/dataEngine'
import type {
  ComponentNode,
  FeaturePage,
  FeatureLayoutConfig,
  EditorSelection,
  ComponentStyle,
  ComponentProps,
  ComponentEvent,
  DataBindingConfig,
  ValidationConfig,
  ComponentPermissionConfig,
} from '@/types/schema'
import {
  reorderPages,
  updatePageProperties as apiUpdatePageProperties,
  clonePageApi,
  togglePageActive as apiTogglePageActive,
  apiPageToFeature,
} from '@/api/pagesApi'

interface EditorState {
  // All features in the system
  features: FeaturePage[]
  activeFeatureId: string
  activeRecordId: string | null

  // Modals management
  isFeatureManagerOpen: boolean
  openFeatureManager: () => void
  closeFeatureManager: () => void

  featurePropertiesTargetId: string | null
  openFeatureProperties: (featureId?: string) => void
  closeFeatureProperties: () => void

  componentModalTargetId: string | null
  openComponentModal: (nodeId: string) => void
  closeComponentModal: () => void

  // Selection
  selection: EditorSelection

  // History for undo/redo
  history: FeaturePage[][]
  historyIndex: number

  // Actions for Features
  setActiveFeature: (id: string, recordId?: string | number | null) => void
  setActiveRecordId: (recordId: string | null) => void
  addFeature: (name: string, icon?: string, parentId?: string | null, isGroup?: boolean) => string
  renameFeature: (id: string, name: string) => void
  deleteFeature: (id: string) => void
  updateFeatureId: (oldId: string, newId: string) => void
  updateFeatureLayout: (id: string, layoutConfig: Partial<FeatureLayoutConfig>) => void
  updateFeatureScriptFile: (id: string, scriptFile: string) => void

  // Extended Feature Actions
  reorderFeatures: (items: { id: string; parentId: string | null; order: number; isGroup?: boolean }[]) => void
  updateFeatureProperties: (featureId: string, properties: Partial<FeaturePage>) => void
  cloneFeature: (featureId: string) => Promise<string | null>
  toggleFeatureActive: (featureId: string) => void

  // Hydrate toàn bộ features từ server (sau khi login / reload)
  setFeatures: (features: FeaturePage[]) => void

  // Actions for Components in the active feature
  selectComponent: (componentId: string | null) => void
  addComponent: (component: ComponentNode, parentId?: string | null, targetIndex?: number) => void
  updateComponentProps: (componentId: string, props: Partial<ComponentProps>) => void
  updateComponentStyle: (componentId: string, style: Partial<ComponentStyle>) => void
  updateComponentEvents: (componentId: string, events: ComponentEvent[]) => void
  updateComponentDataBinding: (componentId: string, dataBinding: Partial<DataBindingConfig>) => void
  updateComponentValidation: (componentId: string, validation: Partial<ValidationConfig>) => void
  updateComponentPermissions: (componentId: string, permissions: Partial<ComponentPermissionConfig>) => void
  updateComponentOrder: (componentId: string, order: number) => void
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

const initialFeatures: FeaturePage[] = []

// ── URL & LocalStorage Persistence Helpers ──
export function slugify(text: string): string {
  if (!text) return ''
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function normalizeRoute(route?: string | null): string {
  if (!route) return ''
  let cleaned = route.trim().toLowerCase()
  if (!cleaned.startsWith('/')) {
    cleaned = '/' + cleaned
  }
  if (cleaned.length > 1 && cleaned.endsWith('/')) {
    cleaned = cleaned.replace(/\/+$/, '')
  }
  return cleaned
}

export function getCleanRouteForFeature(feat?: FeaturePage | null): string {
  if (!feat) return '/'
  if (feat.route && feat.route.trim()) {
    return normalizeRoute(feat.route)
  }
  const slug = slugify(feat.title || feat.name || feat.id)
  return normalizeRoute(slug || feat.id)
}

export function resolveLocationState(features: FeaturePage[]): {
  featureId: string | null
  recordKey: string | null
} {
  if (typeof window === 'undefined' || !features || features.length === 0) {
    return { featureId: null, recordKey: null }
  }
  try {
    const rawPath = window.location.pathname
    const cleanPath = normalizeRoute(rawPath)

    if (cleanPath && cleanPath !== '/') {
      // Sắp xếp các features theo độ dài route giảm dần để ưu tiên prefix dài nhất
      const sortedFeatures = [...features].sort((a, b) => {
        const routeA = getCleanRouteForFeature(a)
        const routeB = getCleanRouteForFeature(b)
        return routeB.length - routeA.length
      })

      // 1. Khớp hoàn toàn (exact match: e.g. /transactions)
      for (const feat of sortedFeatures) {
        const featRoute = getCleanRouteForFeature(feat)
        if (
          featRoute === cleanPath ||
          normalizeRoute(feat.route) === cleanPath ||
          normalizeRoute(`/${feat.id}`) === cleanPath
        ) {
          const urlParams = new URLSearchParams(window.location.search)
          const qId = urlParams.get('id')
          return { featureId: feat.id, recordKey: qId || null }
        }
      }

      // 2. Khớp prefix (prefix match: e.g. /fcl-import/FCLI-260200033345 hoặc /fcl-import/1)
      for (const feat of sortedFeatures) {
        const featRoute = getCleanRouteForFeature(feat)
        if (featRoute && featRoute !== '/' && cleanPath.startsWith(featRoute + '/')) {
          const rest = cleanPath.slice(featRoute.length + 1)
          const firstSegment = rest.split('/')[0]
          const recordKey = firstSegment ? decodeURIComponent(firstSegment) : null
          return { featureId: feat.id, recordKey }
        }
      }
    }

    // 3. Fallback query param cũ (?feature=... & ?id=...)
    const urlParams = new URLSearchParams(window.location.search)
    const queryFeature = urlParams.get('feature') || urlParams.get('page')
    const queryId = urlParams.get('id')
    if (queryFeature) {
      const matchedByQuery = features.find(
        (f) => String(f.id) === String(queryFeature) || normalizeRoute(f.route) === normalizeRoute(queryFeature)
      )
      return {
        featureId: matchedByQuery ? matchedByQuery.id : queryFeature,
        recordKey: queryId || null,
      }
    }

    return { featureId: null, recordKey: null }
  } catch {
    return { featureId: null, recordKey: null }
  }
}

export function resolveFeatureIdFromLocation(features: FeaturePage[]): string | null {
  return resolveLocationState(features).featureId
}

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

export function getSavedRecordId(): string | null {
  if (typeof window === 'undefined') return null
  try {
    // 1. Đọc segment thứ 2 từ pathname nếu có (/fcl-import/FCLI-260200033345 -> FCLI-260200033345)
    const rawPath = window.location.pathname
    const cleanPath = normalizeRoute(rawPath)
    if (cleanPath && cleanPath !== '/') {
      const parts = cleanPath.split('/').filter(Boolean)
      if (parts.length >= 2) {
        return decodeURIComponent(parts[1])
      }
    }

    // 2. Query param cũ fallback (?id=1)
    const urlParams = new URLSearchParams(window.location.search)
    const fromUrl = urlParams.get('id')
    if (fromUrl) return fromUrl

    // 3. LocalStorage fallback
    return localStorage.getItem('uiforge_active_transaction_id')
  } catch {
    return null
  }
}

/**
 * 🏷️ Kiểm tra một Feature có phải là màn hình Chi tiết (Detail/Form) hay không
 */
export function isDetailFeature(feat: FeaturePage | null | undefined): boolean {
  if (!feat) return false
  return Boolean(
    feat.isDetail ||
    feat.route === '/fcl-import' ||
    feat.route?.includes('detail') ||
    feat.scriptFile?.toLowerCase().includes('detail') ||
    feat.name?.toLowerCase().includes('fcl import') ||
    feat.name?.toLowerCase().includes('chi tiết')
  )
}

/**
 * 📋 Kiểm tra một Feature có phải là màn hình Danh sách (List/Grid) hay không
 */
export function isListFeature(feat: FeaturePage | null | undefined): boolean {
  if (!feat) return false
  return !isDetailFeature(feat)
}

export function saveActiveFeatureIdToUrl(
  id: string,
  recordId?: string | number | null,
  featureList?: FeaturePage[]
) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('uiforge_active_feature_id', id)
    const url = new URL(window.location.href)

    // XÓA hoàn toàn feature, page, và id khỏi searchParams (100% Clean Route)
    url.searchParams.delete('feature')
    url.searchParams.delete('page')
    url.searchParams.delete('id')

    // Xác định route thân thiện từ feature
    const features = featureList || useEditorStore.getState()?.features || []
    const feat = features.find((f) => String(f.id) === String(id) || f.route === `/${id}` || f.route === id)
    const cleanRoute = feat ? getCleanRouteForFeature(feat) : (id ? normalizeRoute(id) : '/')

    // Xác định xem feature đích có phải màn hình danh sách hay không
    const isList = feat ? isListFeature(feat) : (id === '6' || id === '1' || id === '3')

    if (isList || recordId === null || recordId === '' || recordId === undefined) {
      url.pathname = cleanRoute
      try {
        localStorage.removeItem('uiforge_active_transaction_id')
      } catch {}
    } else {
      // Màn hình chi tiết có recordId
      let pathSuffix = String(recordId)
      try {
        const dataEngineState = useDataEngine?.getState?.()
        const formRecord = dataEngineState?.formRecords?.[id] || dataEngineState?.formRecords?.['default']
        if (formRecord && (String(formRecord.id ?? formRecord.Id) === String(recordId) || recordId === 'new')) {
          const bizCode = formRecord.jobNo || formRecord.JobNo || formRecord.code || formRecord.Code
          if (bizCode) {
            pathSuffix = String(bizCode)
          }
        }
      } catch {}

      url.pathname = `${cleanRoute}/${encodeURIComponent(pathSuffix)}`
      try {
        localStorage.setItem('uiforge_active_transaction_id', String(recordId))
      } catch {}
    }

    window.history.replaceState(null, '', url.toString())
  } catch {
    // Ignore in unsupported environments
  }
}

export const useEditorStore = create<EditorState>()(
  devtools(
    (set, get) => ({
      features: [],
      activeFeatureId: getSavedFeatureId() || '',
      activeRecordId: getSavedRecordId(),
      selection: { componentId: null, pageId: getSavedFeatureId() || '' },
      history: [[]],
      historyIndex: 0,

      // Modals State
      isFeatureManagerOpen: false,
      openFeatureManager: () => set({ isFeatureManagerOpen: true }),
      closeFeatureManager: () => set({ isFeatureManagerOpen: false }),

      featurePropertiesTargetId: null,
      openFeatureProperties: (featureId) => {
        set((s) => ({
          featurePropertiesTargetId: featureId || s.activeFeatureId || (s.features[0]?.id ?? null),
        }))
      },
      closeFeatureProperties: () => set({ featurePropertiesTargetId: null }),

      componentModalTargetId: null,
      openComponentModal: (nodeId) => set({ componentModalTargetId: nodeId }),
      closeComponentModal: () => set({ componentModalTargetId: null }),

      setActiveRecordId: (recordId) => {
        set({ activeRecordId: recordId ? String(recordId) : null })
      },

      setActiveFeature: (id, recordId) => {
        const features = get().features || []
        const feat = features.find((f) => String(f.id) === String(id) || f.route === `/${id}` || f.route === id)
        const isList = feat ? isListFeature(feat) : (id === '6' || id === '1' || id === '3')

        saveActiveFeatureIdToUrl(id, isList ? null : recordId, features)

        let finalRecId: string | null = null
        if (isList || recordId === null || recordId === '') {
          finalRecId = null
        } else if (recordId !== undefined && recordId !== null) {
          finalRecId = String(recordId)
        } else {
          finalRecId = getSavedRecordId()
        }

        set((s) => ({
          activeFeatureId: id,
          activeRecordId: finalRecId,
          selection: { componentId: null, pageId: id },
        }))
      },

      setFeatures: (features) => {
        if (!features.length) {
          set({
            features: [],
            activeFeatureId: '',
            activeRecordId: null,
            selection: { componentId: null, pageId: '' },
            history: [[]],
            historyIndex: 0,
          })
          return
        }
        const locState = resolveLocationState(features)
        const idFromLocation = locState.featureId
        const savedId = getSavedFeatureId()
        // Ưu tiên chọn:
        // 1. Khớp từ window.location.pathname qua resolveLocationState
        // 2. Feature đã lưu trong URL/LocalStorage nếu còn tồn tại
        // 3. Feature /transactions (Danh Sách Lô Hàng)
        // 4. Feature hiển thị đầu tiên (không bị ẩn / không phải detail)
        // 5. Feature đầu tiên
        const target =
          (idFromLocation && features.find((f) => f.id === idFromLocation)) ||
          (savedId && features.find((f) => f.id === savedId || f.route === `/${savedId}` || f.route === savedId)) ||
          features.find((f) => f.route === '/transactions' || f.name.includes('Lô Hàng')) ||
          features.find((f) => !f.hidden && !f.isDetail) ||
          features[0]

        const isList = isListFeature(target)
        const recId = isList ? null : (locState.recordKey || getSavedRecordId())
        saveActiveFeatureIdToUrl(target.id, recId, features)
        set({
          features,
          activeFeatureId: target.id,
          activeRecordId: recId,
          selection: { componentId: null, pageId: target.id },
          history: [features],
          historyIndex: 0,
        })
      },

      addFeature: (name, icon = 'Layers', parentId = null, isGroup = false) => {
        const id = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
        const siblings = get().features.filter((f) => (f.parentId ?? null) === parentId)
        const nextOrder = siblings.length > 0 ? Math.max(...siblings.map((s) => s.order ?? 0)) + 1 : 1

        const newFeature: FeaturePage = {
          id,
          code: `F_${Date.now().toString(36).toUpperCase()}`,
          name: name.trim() || 'Tính năng mới',
          title: name.trim() || 'Tính năng mới',
          icon: isGroup ? 'Folder' : icon,
          route: `/${id}`,
          parentId: parentId ? String(parentId) : null,
          order: nextOrder,
          isGroup: Boolean(isGroup),
          isMenu: true,
          active: true,
          scriptFile: '',
          scriptContent: '',
          layoutConfig: {
            direction: 'column',
            gap: '16px',
            wrap: 'wrap',
          },
          components: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

        saveActiveFeatureIdToUrl(id, null)
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

      reorderFeatures: (items) => {
        set((s) => {
          const map = new Map(items.map((it) => [it.id, it]))
          const next = s.features.map((f) => {
            const update = map.get(f.id)
            if (!update) return f
            return {
              ...f,
              parentId: update.parentId !== undefined ? (update.parentId ? String(update.parentId) : null) : f.parentId,
              order: update.order !== undefined ? update.order : f.order,
              isGroup: update.isGroup !== undefined ? update.isGroup : f.isGroup,
            }
          })
          reorderPages(
            items.map((it) => ({
              id: it.id,
              parentId: it.parentId,
              order: it.order,
              isGroup: it.isGroup,
            }))
          ).catch(() => {})
          return recordHistory(s, next)
        })
      },

      updateFeatureProperties: (featureId, properties) => {
        set((s) => {
          const normalizedParentId =
            properties.parentId !== undefined
              ? (properties.parentId && String(properties.parentId).trim() !== '' ? String(properties.parentId) : null)
              : undefined

          const normalizedProps: Partial<FeaturePage> = {
            ...properties,
            ...(normalizedParentId !== undefined ? { parentId: normalizedParentId } : {}),
          }

          const next = s.features.map((f) => {
            if (f.id !== featureId) return f
            return {
              ...f,
              ...normalizedProps,
              updatedAt: new Date().toISOString(),
            }
          })

          const apiPayload = {
            ...properties,
            parentId:
              normalizedParentId !== undefined
                ? (normalizedParentId ? (isNaN(Number(normalizedParentId)) ? normalizedParentId : Number(normalizedParentId)) : null)
                : undefined,
          }

          apiUpdatePageProperties(featureId, apiPayload).catch(() => {})
          return recordHistory(s, next)
        })
      },

      cloneFeature: async (featureId) => {
        const s = get()
        const source = s.features.find((f) => f.id === featureId)
        if (!source) return null

        try {
          const clonedApiPage = await clonePageApi(featureId)
          if (clonedApiPage && clonedApiPage.id) {
            const newFeat = apiPageToFeature(clonedApiPage)
            set((state) => {
              const nextFeatures = [...state.features, newFeat]
              return {
                ...recordHistory(state, nextFeatures),
                activeFeatureId: newFeat.id,
                selection: { componentId: null, pageId: newFeat.id },
              }
            })
            saveActiveFeatureIdToUrl(newFeat.id, null)
            return newFeat.id
          }
        } catch {
          // Fallback to local clone
        }

        const newId = `feat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
        const clonedFeat: FeaturePage = {
          ...source,
          id: newId,
          name: `${source.name} (Copy)`,
          title: source.title ? `${source.title} (Copy)` : `${source.name} (Copy)`,
          code: source.code ? `${source.code}_COPY` : `F_${Date.now().toString(36).toUpperCase()}`,
          route: `/${newId}`,
          order: (source.order || 0) + 1,
          components: cloneComponentNodes(source.components || [], newId),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

        set((state) => {
          const nextFeatures = [...state.features, clonedFeat]
          return {
            ...recordHistory(state, nextFeatures),
            activeFeatureId: newId,
            selection: { componentId: null, pageId: newId },
          }
        })
        saveActiveFeatureIdToUrl(newId, null)
        return newId
      },

      toggleFeatureActive: (featureId) => {
        set((s) => {
          const next = s.features.map((f) => {
            if (f.id !== featureId) return f
            const newActive = !(f.active !== false)
            return {
              ...f,
              active: newActive,
              updatedAt: new Date().toISOString(),
            }
          })
          apiTogglePageActive(featureId).catch(() => {})
          return recordHistory(s, next)
        })
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
          saveActiveFeatureIdToUrl(newActiveId, null)
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

                      updateComponentDataBinding: (componentId, dataBinding) => {
                        set((s) => {
                          const next = s.features.map((f) => {
                            if (f.id !== s.activeFeatureId) return f
                            return {
                              ...f,
                              components: updateNodeInList(f.components, componentId, (n) => ({
                                ...n,
                                dataBinding: { ...n.dataBinding, ...dataBinding },
                              })),
                            }
                          })
                          return recordHistory(s, next)
                        })
                      },

                        updateComponentValidation: (componentId, validation) => {
                          set((s) => {
                            const next = s.features.map((f) => {
                              if (f.id !== s.activeFeatureId) return f
                              return {
                                ...f,
                                components: updateNodeInList(f.components, componentId, (n) => ({
                                  ...n,
                                  validation: { ...n.validation, ...validation },
                                })),
                              }
                            })
                            return recordHistory(s, next)
                          })
                        },

                          updateComponentPermissions: (componentId, permissions) => {
                            set((s) => {
                              const next = s.features.map((f) => {
                                if (f.id !== s.activeFeatureId) return f
                                return {
                                  ...f,
                                  components: updateNodeInList(f.components, componentId, (n) => ({
                                    ...n,
                                    permissions: { ...n.permissions, ...permissions },
                                  })),
                                }
                              })
                              return recordHistory(s, next)
                            })
                          },

                            updateComponentOrder: (componentId, order) => {
                              set((s) => {
                                const next = s.features.map((f) => {
                                  if (f.id !== s.activeFeatureId) return f
                                  return {
                                    ...f,
                                    components: updateNodeInList(f.components, componentId, (n) => ({
                                      ...n,
                                      order,
                                      props: { ...n.props, order },
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

function cloneComponentNodes(nodes: ComponentNode[], newPageId: string): ComponentNode[] {
  return nodes.map((node) => {
    const newId = `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
    return {
      ...node,
      id: newId,
      pageId: newPageId,
      children: node.children ? cloneComponentNodes(node.children, newPageId) : [],
    }
  })
}
