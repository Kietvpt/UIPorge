// ============================================================
// GridPolicy TypeScript Specifications (Kế thừa Core.API/Models/GridPolicy.cs)
// ============================================================

export type ColumnComponentType = 
  | 'TextBox' 
  | 'Select' 
  | 'Dropdown'
  | 'DatePicker' 
  | 'Number' 
  | 'Checkbox' 
  | 'Link' 
  | 'Button'
  | 'Textarea'
  | 'Label';

export type ColumnAlign = 'left' | 'center' | 'right';
export type ColumnFreeze = 'none' | 'left' | 'right';
export type SummaryType = 'none' | 'sum' | 'count' | 'avg' | 'min' | 'max';

export interface SelectOption {
  value: string;
  label: string;
  rawItem?: Record<string, any>;
}

export interface DropdownColumnConfig {
  key: string;
  title: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface GridColumnPolicy {
  // ── COMMON ──
  id?: number | string;
  code?: string;                        // Mã policy (vd: GP000080)
  order?: number;                       // Thứ tự cột
  groupOrder?: number;
  feature?: string;                     // Mã feature (vd: F0013000)
  refClass?: string;                    // Lớp tham chiếu C#
  filterTemplate?: string;
  formatExcell?: string;
  childStyle?: string;
  template?: string;
  excelFieldName?: string;
  scriptValidation?: string;
  query?: string;
  parent?: string;
  plainText?: string;
  populated?: string;
  disabledExp?: string;
  dataSource?: string;                  // OData hoặc API DataSource

  // ── DISPLAY 2 ──
  key: string;                          // FieldName (vd: BookTypeId, containerNo)
  title: string;                        // ShortDesc (vd: Package Type, CONTAINER NO)
  description?: string;
  refName?: string;
  reference?: string;
  groupName?: string;
  formatCell?: string;                  // vd: {Name}
  formatData?: string;                  // vd: {FullName} - {Address}
  dropdownColumns?: DropdownColumnConfig[]; // Danh sách cột cho Dropdown table
  formatRow?: string;
  width?: string | number;              // vd: 162px
  minWidth?: string | number;
  maxWidth?: string | number;
  groupFormat?: string;
  groupReferenceName?: string;

  // ── DISPLAY ──
  componentType?: ColumnComponentType;  // Component (Dropdown, TextBox, DatePicker...)
  precision?: number;                   // Precision
  align?: ColumnAlign;                  // TextAlign ('left' | 'center' | 'right')
  events?: string | any[];              // vd: [{ trigger: 'click', handlerName: 'openTransactionDetail' }]
  cssClass?: string;
  cascadeField?: string;                // Cascade
  sumColSpan?: number;
  defaultVal?: string;
  databaseName?: string;
  style?: string;
  migration?: string;
  validation?: string;
  icon?: string;
  aggregate?: SummaryType;              // Summary ('sum' | 'count' | 'avg' | 'none')
  summaryPrefix?: string;
  summarySuffix?: string;
  row?: number;
  groupBy?: string;

  // ── THÔNG TIN KHÁC (Checkboxes) ──
  frozen?: boolean;                     // Cố định cột
  sticky?: ColumnFreeze;                // Ghim 'left' | 'right' | 'none'
  disabled?: boolean;                   // Vô hiệu hóa
  hasPermission?: boolean;              // Phân quyền
  focusSearch?: boolean;
  filterEq?: boolean;
  filterLocal?: boolean;
  hidden?: boolean;                     // Ẩn cột
  active?: boolean;                     // Kích hoạt
  advancedSearch?: boolean;             // Adv search
  virtualScroll?: boolean;
  upperCase?: boolean;
  hasFilter?: boolean;                  // Filter
  isRealtime?: boolean;
  autoFit?: boolean;
  isSummary?: boolean;                  // IsSumary
  addDate?: boolean;
  editable?: boolean;                   // Cho phép sửa trực tiếp (Editable)
  isPivot?: boolean;                    // Pivot
  basicSearch?: boolean;
  ignoreTrigger?: boolean;
  hideGrid?: boolean;
  sortable?: boolean;

  options?: SelectOption[];             // Lựa chọn cho Dropdown
  customCss?: string;
}

export interface GridContextMenuState {
  isOpen: boolean;
  x: number;
  y: number;
  column: GridColumnPolicy | null;
  columnIndex: number;
}
