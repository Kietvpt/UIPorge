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
  name: string
  route: string
  icon?: string
  scriptFile?: string
  layoutTemplateId?: string
  layoutConfig?: ExtendedLayoutConfig | null
  components: ComponentNode[]
  createdAt?: string
  updatedAt?: string
}

export interface SavePageRequest {
  id?: number | string
  projectId?: number | string
  name: string
  route: string
  icon?: string
  scriptFile?: string
  layoutConfig?: ExtendedLayoutConfig
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

/** Chuyển Page từ API -> FeaturePage của editor store */
export function apiPageToFeature(p: ApiPage): FeaturePage {
  const strId = String(p.id)
  // Get scriptFile from top-level or layoutConfig
  const scriptFile = p.scriptFile || p.layoutConfig?.scriptFile || ''

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
    name: p.name,
    route: p.route,
    icon: p.icon || 'Layers',
    scriptFile,
    layoutConfig: p.layoutConfig || { direction: 'column', gap: '16px', wrap: 'wrap' },
    components: normalizeTree(p.components || []),
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }
}
