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

// Fallback cục bộ khi làm việc offline
export const FALLBACK_ENTITY_CATALOGS: EntityMetadata[] = [
  {
    name: 'Transaction',
    displayName: 'Lô Hàng (Transactions)',
    tableName: 'Transactions',
    description: 'Thực thể hồ sơ lô hàng vận chuyển FCL / LCL',
    columns: [
      { name: 'Id', displayName: 'Id', dataType: 'number', isRequired: true, isPrimaryKey: true, isAuditField: false },
      { name: 'JobNo', displayName: 'JobNo', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'TypeId', displayName: 'TypeId', dataType: 'number', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'ShipmentDate', displayName: 'ShipmentDate', dataType: 'date', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'MblNo', displayName: 'MblNo', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'VendorId', displayName: 'VendorId', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'VendorName', displayName: 'VendorName', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'SLines', displayName: 'SLines', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Agent', displayName: 'Agent', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'PolId', displayName: 'PolId', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'PodId', displayName: 'PodId', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Service', displayName: 'Service', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Opic', displayName: 'Opic', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'TotalPackages', displayName: 'TotalPackages', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'TotalGw', displayName: 'TotalGw', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'TotalCbm', displayName: 'TotalCbm', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'TotalVgm', displayName: 'TotalVgm', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Active', displayName: 'Active', dataType: 'boolean', isRequired: false, isPrimaryKey: false, isAuditField: true },
    ],
  },
  {
    name: 'Terminal',
    displayName: 'Cảng Biển / Ga Hàng Không (Terminals)',
    tableName: 'Terminals',
    description: 'Danh mục cảng biển xếp dỡ hàng hóa',
    columns: [
      { name: 'Id', displayName: 'Id', dataType: 'number', isRequired: true, isPrimaryKey: true, isAuditField: false },
      { name: 'Code', displayName: 'Code', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'FullName', displayName: 'FullName', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'Country', displayName: 'Country', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'VendorId', displayName: 'VendorId', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'VendorName', displayName: 'VendorName', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'AgentName', displayName: 'AgentName', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Active', displayName: 'Active', dataType: 'boolean', isRequired: false, isPrimaryKey: false, isAuditField: true },
    ],
  },
  {
    name: 'Container',
    displayName: 'Danh Mục Container (Containers)',
    tableName: 'Containers',
    description: 'Chi tiết thông tin các Container trong lô hàng',
    columns: [
      { name: 'Id', displayName: 'Id', dataType: 'number', isRequired: true, isPrimaryKey: true, isAuditField: false },
      { name: 'TransactionId', displayName: 'TransactionId', dataType: 'number', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'ContainerNo', displayName: 'ContainerNo', dataType: 'string', isRequired: true, isPrimaryKey: false, isAuditField: false },
      { name: 'Size', displayName: 'Size', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'SealNo', displayName: 'SealNo', dataType: 'string', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'PackageNumber', displayName: 'PackageNumber', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Gw', displayName: 'Gw', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Cbm', displayName: 'Cbm', dataType: 'number', isRequired: false, isPrimaryKey: false, isAuditField: false },
      { name: 'Active', displayName: 'Active', dataType: 'boolean', isRequired: false, isPrimaryKey: false, isAuditField: true },
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
