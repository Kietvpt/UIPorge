/**
 * 🌐 METADATA SERVICE: Đồng bộ hóa Entity Metadata giữa Backend và Frontend UI Studio
 * 
 * Lợi ích:
 * - Khi Backend (.NET) thêm bất kỳ Table/Entity nào kế thừa BaseEntity,
 *   Frontend lập tức nhận diện đầy đủ danh sách Bảng và Cột mà không cần viết lại mã TypeScript.
 * - Hỗ trợ Dropdown chọn Reference (Bảng liên kết), FieldName (Cột dữ liệu), Populate field trong Designer.
 */

import type { UIEntityCatalog } from '@/types/schema'

export interface ColumnMetadata {
  name: string
  displayName: string
  dataType: 'string' | 'number' | 'date' | 'boolean'
  isRequired: boolean
  isPrimaryKey: boolean
  isAuditField: boolean
}

export interface EntityMetadata {
  name: string
  displayName: string
  tableName: string
  description: string
  columns: ColumnMetadata[]
}

export interface CombinedEntityInfo {
  name: string
  displayName: string
  tableName?: string
  fields: { name: string; displayName: string; dataType: string }[]
}

let cachedMetadata: EntityMetadata[] | null = null

export async function fetchEntityMetadata(forceRefresh = false): Promise<EntityMetadata[]> {
  if (!forceRefresh && cachedMetadata) return cachedMetadata
  try {
    const res = await fetch('http://localhost:5048/api/core/metadata/entities')
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data)) {
        cachedMetadata = data
        return data
      }
    }
  } catch (err) {
    console.warn('[MetadataService] Không thể tải danh mục thực thể từ Backend API:', err)
  }

  return []
}

/**
 * Chuẩn hóa danh mục thực thể nghiệp vụ lấy từ Backend API (Reflection DbContext).
 */
export function buildCombinedEntityCatalog(
  liveEntities: EntityMetadata[],
  _extraCatalogs: UIEntityCatalog[] = []
): CombinedEntityInfo[] {
  return liveEntities.map((ent) => ({
    name: ent.name,
    displayName: ent.displayName || ent.name,
    tableName: ent.tableName,
    fields: ent.columns.map((c) => ({
      name: c.name,
      displayName: c.displayName || c.name,
      dataType: c.dataType,
    })),
  }))
}

/**
 * Tìm kiếm thực thể khớp theo tên (hỗ trợ cả số ít/số nhiều như Vendor <-> Vendors, TableName).
 */
export function findMatchingEntity(
  entities: CombinedEntityInfo[],
  refName?: string
): CombinedEntityInfo | undefined {
  if (!refName || !refName.trim()) return undefined
  const clean = refName.trim().toLowerCase()
  const singular = clean.endsWith('s') ? clean.slice(0, -1) : clean

  return entities.find(
    (e) =>
      e.name.toLowerCase() === clean ||
      e.name.toLowerCase() === singular ||
      (e.tableName && e.tableName.toLowerCase() === clean)
  )
}

