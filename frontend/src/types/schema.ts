// ============================================================
// Core types for the UIForge component schema
// ============================================================

import type { DropdownColumnConfig } from './gridPolicy'

export type ComponentType =
  | 'Button'
  | 'TextBox'
  | 'Number'
  | 'Label'
  | 'Container'
  | 'Section'
  | 'Table'
  | 'Select'
  | 'Checkbox'
  | 'DatePicker'
  | 'Modal'
  | 'Tabs'
  | 'Image'
  | 'Divider'
  | 'Textarea'
  | 'RecordSelector'
  | 'SearchEntry'
  | 'FileUploadGrid'
  | 'Autocomplete'
  | 'TreeView'
  | 'Chart'

export type EventTrigger = 'onClick' | 'onChange' | 'onSubmit' | 'onFocus' | 'onBlur' | 'click' | 'change' | 'focus' | 'blur' | 'dblclick'
export type EventAction = 'navigate' | 'callApi' | 'showModal' | 'hideModal' | 'setState' | 'custom' | (string & {})

export interface ComponentEvent {
  id?: string
  trigger: string
  handlerName?: string
  action?: EventAction
  payload?: Record<string, unknown>
}

export type LayoutMode = 'flex' | 'grid'

export interface FlexConfig {
  direction: 'row' | 'column'
  wrap?: 'nowrap' | 'wrap'
  justify?: 'flex-start' | 'center' | 'space-between' | 'flex-end' | 'space-around' | string
  justifyContent?: string
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | string
  alignItems?: string
  gap?: string
  columnsPerRow?: number | 'auto' // Số cột / phần tử trên 1 dòng
}

export interface GridConfig {
  columns: number
  gap: string
}

export interface ComponentStyle {
  customCss?: string
  width?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  minWidth?: string | number
  maxWidth?: string | number
  backgroundColor?: string
  color?: string
  fontSize?: string
  fontWeight?: string
  borderRadius?: string
  border?: string
  borderWidth?: string
  borderColor?: string
  borderStyle?: string
  padding?: string
  margin?: string
  display?: string
  flexDirection?: string
  flexWrap?: string
  justifyContent?: string
  alignItems?: string
  gridTemplateColumns?: string
  gap?: string
  boxShadow?: string
  overflow?: string
  flex?: string
  flexGrow?: string | number
  flexShrink?: string | number
  flexBasis?: string
  [key: string]: any
}

export interface ComponentProps {
  label?: string
  showLabel?: boolean
  labelPosition?: 'left' | 'top'
  labelWidth?: string
  colSpan?: number // 1..12 tương đương Column: 2, 4, 12 trong Core cũ
  placeholder?: string
  value?: any
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  required?: boolean
  readOnly?: boolean
  rows?: number
  // Number
  precision?: number
  thousandsSeparator?: boolean
  min?: number
  max?: number
  // DatePicker
  format?: string
  minDate?: string
  maxDate?: string
  // Table
  columns?: TableColumn[]
  showSummary?: boolean
  searchable?: boolean
  pageSize?: number
  // Select
  options?: SelectOption[]
  dropdownColumns?: DropdownColumnConfig[]
  formatData?: string
  formatEntity?: string
  reference?: string
  refName?: string
  dataSource?: string
  idField?: string
  selectField?: string
  populateField?: string
  // Section / Container layout settings
  title?: string
  boxShadow?: boolean
  collapsible?: boolean
  isCard?: boolean
  layoutMode?: LayoutMode
  flexConfig?: FlexConfig
  gridConfig?: GridConfig
  [key: string]: unknown
}

export type { GridColumnPolicy, ColumnComponentType, ColumnAlign, ColumnFreeze, SummaryType, DropdownColumnConfig } from './gridPolicy'

export interface TableColumn extends Partial<import('./gridPolicy').GridColumnPolicy> {
  key: string
  title: string
  width?: string
  minWidth?: string
  maxWidth?: string
  sortable?: boolean
  filterable?: boolean
  editable?: boolean // tương ứng Editable trong GridPolicy
  sticky?: 'left' | 'right' | 'none' // tương ứng Frozen trong GridPolicy
  frozen?: boolean
  aggregate?: 'sum' | 'avg' | 'count' | 'min' | 'max' | 'none' // tương ứng Summary trong GridPolicy
  summaryType?: 'sum' | 'avg' | 'count' | 'min' | 'max' | 'none' | string
  aggregateColSpan?: number // tương ứng SummaryColSpan trong GridPolicy
  summaryPrefix?: string
  summarySuffix?: string
  align?: 'left' | 'center' | 'right' // tương ứng TextAlign trong GridPolicy
  format?: 'currency_vnd' | 'currency_usd' | 'date_dmy' | 'number' | string // tương ứng FormatCell
  formatCell?: string
  formatData?: string // Chuỗi định dạng hiển thị cho Select / Dropdown cell (vd: {Vendor.FullName} - {Vendor.Address})
  dropdownColumns?: DropdownColumnConfig[] // Cấu hình các cột hiển thị trong popup dropdown
  reference?: string // Bảng thực thể tham chiếu (vd: Vendor, Terminal)
  refName?: string
  dataSource?: string // OData filter expression (vd: Active eq true)
  idField?: string // Trường khóa chính
  selectField?: string // Trường hiển thị
  action?: string
  events?: ComponentEvent[] | string
  precision?: number // tương ứng Precision trong GridPolicy
  componentType?: 'TextBox' | 'Number' | 'DatePicker' | 'Select' | 'Dropdown' | 'Checkbox' | 'Button' | 'Label' | 'Link' | 'Textarea' // tương ứng Component trong GridPolicy
  options?: SelectOption[] // cho dropdown
  hidden?: boolean
  populateField?: string
  cascadeField?: string
  customCss?: string
  validation?: any
}

export interface SelectOption {
  value: string
  label: string
  rawItem?: Record<string, any>
}

// ============================================================
// Phase 1: Data Binding, Validation & Permissions Schema
// ============================================================

export interface DataBindingConfig {
  /** Tên thực thể liên kết, ví dụ: 'Customer', 'Order', 'Product', 'Terminal' */
  entityName?: string
  /** Tên thực thể tham chiếu (Reference / RefName trong Core C#) */
  refName?: string
  /** Tên trường dữ liệu trong Entity, ví dụ: 'FullName', 'TaxCode', 'Price' */
  fieldName?: string
  /** Câu lệnh Query / OData Query / SQL Query để nạp dữ liệu động (Ảnh 2 Core C#) */
  query?: string
  /** Biểu thức nguồn dữ liệu (DataSource / OData Filter Expression, VD: '?$filter=Active eq true') */
  dataSource?: string
  /** Điều kiện lọc SQL bổ sung (SqlWhere) */
  sqlWhere?: string
  /** Danh sách cột chọn (SelectField / SqlSelect) */
  selectField?: string
  /** Quy tắc tự động gán dữ liệu sang các trường khác (PopulateField) */
  populateField?: string
  /** Tên trường khóa chính (IdField), mặc định là 'Id' */
  idField?: string
  /** Chuỗi định dạng hiển thị dữ liệu (FormatData, ví dụ: '{ShortName}') */
  formatData?: string
  /** Cấu hình các cột hiển thị trong Multi-Column Dropdown */
  dropdownColumns?: DropdownColumnConfig[]
  /** Hàm biểu thức format JavaScript (FormatEntity) */
  formatEntity?: string
  /** ID của nguồn dữ liệu liên kết nếu có */
  dataSourceId?: string
  /** Cho phép binding 2 chiều (Two-way data binding) */
  twoWay?: boolean
  /** Bộ định dạng hiển thị, ví dụ: 'currency' | 'date' | 'uppercase' | 'percent' */
  formatter?: string
  /** Giá trị mặc định */
  defaultValue?: any
}

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'custom'
  value?: any
  message: string
}

export interface ValidationConfig {
  required?: boolean
  requiredMessage?: string
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  pattern?: string
  patternMessage?: string
  customValidator?: string
  rules?: ValidationRule[]
}

export interface ComponentPermissionConfig {
  allowedRoles?: string[]
  readOnlyRoles?: string[]
  deniedBehavior?: 'hide' | 'disable'
}

// ============================================================
// Entity Catalog Types (Metadata Dictionary for Data Binding)
// Tách biệt hoàn toàn giữa UI Builder Engine và Domain Models
// ============================================================
export interface UIEntityField {
  name: string
  displayName: string
  dataType: 'string' | 'number' | 'date' | 'boolean'
  isRequired?: boolean
  description?: string
  options?: string[]
}

export interface UIEntityCatalog {
  id: string
  name: string
  displayName: string
  description?: string
  fields: UIEntityField[]
}

export interface ComponentNode {
  id: string
  type: ComponentType
  parentId: string | null
  pageId: string
  props: ComponentProps
  style: ComponentStyle
  events: ComponentEvent[]
  children?: ComponentNode[]
  order: number
  dataBinding?: DataBindingConfig
  validation?: ValidationConfig
  permissions?: ComponentPermissionConfig
  createdAt?: string
  updatedAt?: string
}

// ============================================================
// Feature / Page types
// ============================================================

export interface FeatureLayoutConfig {
  direction: 'column' | 'row'
  gap: string
  wrap: 'wrap' | 'nowrap'
}

export interface FeaturePage {
  id: string
  name: string
  icon?: string
  route: string
  description?: string
  scriptFile?: string
  components: ComponentNode[]
  layoutConfig?: FeatureLayoutConfig
  hidden?: boolean
  isDetail?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface Project {
  id: string
  name: string
  description?: string
  ownerId: string
  pages: FeaturePage[]
  createdAt?: string
  updatedAt?: string
}

export interface EditorSelection {
  componentId: string | null
  pageId: string | null
}
