// ============================================================
// Core types for the UIForge component schema
// ============================================================

export type ComponentType =
  | 'Button'
  | 'TextBox'
  | 'Label'
  | 'Container'
  | 'Table'
  | 'Select'
  | 'Checkbox'
  | 'DatePicker'
  | 'Modal'
  | 'Tabs'
  | 'Image'
  | 'Divider'

export type EventTrigger = 'onClick' | 'onChange' | 'onSubmit' | 'onFocus' | 'onBlur'
export type EventAction = 'navigate' | 'callApi' | 'showModal' | 'hideModal' | 'setState' | 'custom'

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
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | string
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
  placeholder?: string
  value?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  required?: boolean
  rows?: number
  columns?: TableColumn[]
  options?: SelectOption[]
  // Container layout settings
  layoutMode?: LayoutMode
  flexConfig?: FlexConfig
  gridConfig?: GridConfig
  [key: string]: unknown
}

export interface TableColumn {
  key: string
  title: string
  width?: string
  sortable?: boolean
}

export interface SelectOption {
  value: string
  label: string
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
