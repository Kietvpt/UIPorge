/**
 * 🌐 METADATA SERVICE: Đồng bộ hóa Entity Metadata giữa Backend và Frontend UI Studio
 * 
 * Lợi ích:
 * - Khi Backend (.NET) thêm bất kỳ Table/Entity nào kế thừa BaseEntity,
 *   Frontend lập tức nhận diện đầy đủ danh sách Bảng và Cột mà không cần viết lại mã TypeScript.
 * - Hỗ trợ Dropdown chọn Reference (Bảng liên kết), FieldName (Cột dữ liệu), Populate field trong Designer.
 */

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

// Fallback danh mục thực thể mẫu chuẩn generic khi làm việc offline
export const FALLBACK_ENTITY_CATALOGS: EntityMetadata[] = [
  {
    name: 'Document',
    displayName: 'Chứng Từ Nghiệp Vụ (Documents)',
    tableName: 'Documents',
    description: 'Thực thể chứng từ nghiệp vụ tổng quát',
    columns: [
      { name: 'Id', displayName: 'Id', dataType: 'number', isRequired: true, isPrimaryKey: true, isAuditField: false },
      { name: 'Code', displayName: 'Mã số', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'DocDate', displayName: 'Ngày lập', dataType: 'date', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Title', displayName: 'Tiêu đề / Tên chứng từ', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'PartnerName', displayName: 'Đối tác / Khách hàng', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Status', displayName: 'Trạng thái', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'TotalAmount', displayName: 'Tổng tiền', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Active', displayName: 'Kích hoạt', dataType: 'boolean', isRequired: false, isPrimaryKey: false, isAuditField: true },
    ],
  },
  {
    name: 'MasterData',
    displayName: 'Danh Mục Dùng Chung (MasterData)',
    tableName: 'MasterData',
    description: 'Bảng tra cứu danh mục chuẩn hóa',
    columns: [
      { name: 'Id', displayName: 'Id', dataType: 'number', isRequired: true, isPrimaryKey: true, isAuditField: false },
      { name: 'Code', displayName: 'Mã', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'Name', displayName: 'Tên danh mục', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'Description', displayName: 'Mô tả', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Active', displayName: 'Kích hoạt', dataType: 'boolean', isRequired: false, isPrimaryKey: false, isAuditField: true },
    ],
  },
]

let cachedMetadata: EntityMetadata[] | null = null

export async function fetchEntityMetadata(): Promise<EntityMetadata[]> {
  if (cachedMetadata) return cachedMetadata
  try {
    const res = await fetch('http://localhost:5048/api/core/metadata/entities')
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        cachedMetadata = data
        return data
      }
    }
  } catch (err) {
    console.warn('[MetadataService] Server offline, using fallback entity catalogs')
  }

  cachedMetadata = FALLBACK_ENTITY_CATALOGS
  return FALLBACK_ENTITY_CATALOGS
}

