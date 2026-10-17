import { apiClient } from './client'
import type { ComponentNode, FeatureLayoutConfig, FeaturePage } from '@/types/schema'

// Kiểu dữ liệu page trả về từ backend
export interface ApiPage {
  id: string
  projectId: string
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
  id: string
  name: string
  route: string
  icon?: string
  layoutConfig?: FeatureLayoutConfig
  components: ComponentNode[]
}

export async function getPages(): Promise<ApiPage[]> {
  const { data } = await apiClient.get<ApiPage[]>('/pages')
  return data
}

export async function savePage(payload: SavePageRequest): Promise<void> {
  await apiClient.post('/pages/save', payload)
}

/** Chuyển Page từ API -> FeaturePage của editor store */
export function apiPageToFeature(p: ApiPage): FeaturePage {
  return {
    id: p.id,
    name: p.name,
    route: p.route,
    icon: p.icon || 'Layers',
    layoutConfig: p.layoutConfig || { direction: 'column', gap: '16px', wrap: 'wrap' },
    components: p.components || [],
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }
}
