import { apiClient } from './client'
import type { ComponentNode, FeatureLayoutConfig, FeaturePage } from '@/types/schema'

// Kiểu dữ liệu page trả về từ backend
export interface ApiPage {
  id: number | string
  projectId: number | string
  name: string
  route: string
  icon?: string
  layoutTemplateId?: string
  layoutConfig?: FeatureLayoutConfig | null
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
  layoutConfig?: FeatureLayoutConfig
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
  return {
    id: strId,
    name: p.name,
    route: p.route,
    icon: p.icon || 'Layers',
    layoutConfig: p.layoutConfig || { direction: 'column', gap: '16px', wrap: 'wrap' },
    components: (p.components || []).map((c) => ({ ...c, pageId: strId })),
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }
}
