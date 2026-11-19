import { apiClient } from './client'
import type { ComponentNode, FeatureLayoutConfig, FeaturePage } from '@/types/schema'

export interface ExtendedLayoutConfig extends FeatureLayoutConfig {
  scriptFile?: string
  [key: string]: any
}

// Kiểu dữ liệu page trả về từ backend
export interface ApiPage {
  id: number | string
  projectId: number | string
  code?: string
  name: string
  title?: string
  route: string
  icon?: string
  parentId?: number | string | null
  order?: number
  isGroup?: boolean
  isMenu?: boolean
  active?: boolean
  entityName?: string
  description?: string
  scriptFile?: string
  scriptContent?: string
  layoutTemplateId?: string
  layoutConfig?: ExtendedLayoutConfig | null
  featureProps?: Record<string, any>
  featurePropsJson?: string
  displayFlags?: any
  customStyles?: any
  components: ComponentNode[]
  createdAt?: string
  updatedAt?: string
}

export interface ReorderPageItemRequest {
  id: number | string
  parentId: number | string | null
  order: number
  isGroup?: boolean
}

export interface SavePageRequest {
  id?: number | string
  projectId?: number | string
  code?: string
  name: string
  title?: string
  route: string
  icon?: string
  parentId?: number | string | null
  order?: number
  isGroup?: boolean
  isMenu?: boolean
  active?: boolean
  entityName?: string
  description?: string
  scriptFile?: string
  scriptContent?: string
  layoutConfig?: ExtendedLayoutConfig
  featureProps?: Record<string, any>
  components: ComponentNode[]
}

export interface SavePageResponse {
  success: boolean
  pageId: number
  updatedAt: string
}

export async function getPages(): Promise<ApiPage[]> {
  const { data } = await apiClient.get<ApiPage[]>('/pages')
  return data
}

export async function savePage(payload: SavePageRequest): Promise<SavePageResponse> {
  const { data } = await apiClient.post<SavePageResponse>('/pages/save', payload)
  return data
}

export async function deletePage(id: number | string): Promise<void> {
  await apiClient.delete(`/pages/${id}`)
}

/** Cập nhật thứ tự và phân tầng kéo thả của các Feature */
export async function reorderPages(items: ReorderPageItemRequest[]): Promise<{ success: boolean; count?: number }> {
  const { data } = await apiClient.put<{ success: boolean; count?: number }>('/pages/reorder', items)
  return data
}

/** Cập nhật toàn bộ thuộc tính của Feature (Tab 1 Feature Properties) */
export async function updatePageProperties(id: number | string, properties: Partial<ApiPage>): Promise<ApiPage> {
  const { data } = await apiClient.put<ApiPage>(`/pages/${id}/properties`, properties)
  return data
}

/** Nhân bản Feature kèm toàn bộ UIComponent con */
export async function clonePageApi(id: number | string): Promise<ApiPage> {
  const { data } = await apiClient.post<ApiPage>(`/pages/clone/${id}`)
  return data
}

/** Đảo cờ Active của Feature (Ẩn khỏi Leftbar nhưng vẫn quản lý được) */
export async function togglePageActive(id: number | string): Promise<{ success: boolean; active: boolean }> {
  const { data } = await apiClient.put<{ success: boolean; active: boolean }>(`/pages/${id}/toggle-active`)
  return data
}

/** Chuyển Page từ API -> FeaturePage của editor store */
export function apiPageToFeature(p: ApiPage): FeaturePage {
  const strId = String(p.id)
  // Get scriptFile from top-level or layoutConfig
  const scriptFile = p.scriptFile || p.layoutConfig?.scriptFile || ''

  // Parse featurePropsJson if string
  let parsedProps = p.featureProps
  if (!parsedProps && p.featurePropsJson) {
    try {
      parsedProps = JSON.parse(p.featurePropsJson)
    } catch {
      parsedProps = {}
    }
  }

  // Đảm bảo tất cả component (kể cả component lồng trong container) đều có pageId string đồng bộ
  const normalizeTree = (nodes: ComponentNode[]): ComponentNode[] => {
    return nodes.map((node) => ({
      ...node,
      pageId: strId,
      children: node.children && node.children.length > 0 ? normalizeTree(node.children) : node.children,
    }))
  }

  return {
    id: strId,
    code: p.code || '',
    name: p.name,
    title: p.title || p.name,
    route: p.route,
    icon: p.icon || (p.isGroup ? 'Folder' : 'Layers'),
    parentId: p.parentId !== null && p.parentId !== undefined ? String(p.parentId) : null,
    order: p.order ?? 0,
    isGroup: Boolean(p.isGroup),
    isMenu: p.isMenu !== undefined ? Boolean(p.isMenu) : true,
    active: p.active !== undefined ? Boolean(p.active) : true,
    entityName: p.entityName || '',
    description: p.description || '',
    scriptFile,
    scriptContent: p.scriptContent || '',
    layoutConfig: p.layoutConfig || { direction: 'column', gap: '16px', wrap: 'wrap' },
    featureProps: parsedProps || {},
    displayFlags: (p as any).displayFlags || parsedProps?.displayFlags,
    customStyles: (p as any).customStyles || parsedProps?.customStyles,
    badge: (p as any).badge ?? parsedProps?.badge,
    components: normalizeTree(p.components || []),
    hidden: (p as any).hidden ?? (p.layoutConfig as any)?.hidden ?? (strId === '2' ? true : undefined),
    isDetail: (p as any).isDetail ?? (p.layoutConfig as any)?.isDetail ?? (strId === '2' ? true : undefined),
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }
}
