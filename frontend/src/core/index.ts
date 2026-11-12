/**
 * =========================================================================
 * 🚀 @uiforge/core - Enterprise Low-Code Framework Library (Frontend Core)
 * =========================================================================
 * 100% Domain-Agnostic: Chứa toàn bộ UI Components, Core Engines,
 * Visual Canvas, Property Panels và Dynamic Schema Renderer.
 * Không chứa bất kỳ logic nghiệp vụ Logistics/ERP nào.
 */

// 1. UI Components
export * from '@/renderer/components'
export { EnterpriseDatePicker } from '@/renderer/components/common/EnterpriseDatePicker'
export { EnterpriseSelect } from '@/renderer/components/common/EnterpriseSelect'
export { interpolateFormatData } from './utils/formatDataInterpolator'

// 2. Core Dynamic Renderer
export { ComponentRenderer } from '@/renderer/Renderer'
export { PermissionGuard } from '@/renderer/PermissionGuard'
export * from '@/renderer/layoutUtils'
export * from '@/renderer/tabStackUtils'
export * from '@/renderer/components/grid/gridPolicyUtils'
export { GridCellComponent } from '@/renderer/components/grid/GridCellComponent'
export { InlineCellEditor } from '@/renderer/components/grid/InlineCellEditor'
export { ColumnPropertiesModal } from '@/renderer/components/grid/ColumnPropertiesModal'
export { HeaderContextMenu } from '@/renderer/components/grid/HeaderContextMenu'
export { RowContextMenu } from '@/renderer/components/grid/RowContextMenu'
export { SummaryRow } from '@/renderer/components/grid/SummaryRow'
export { useGridKeyboardNavigation } from '@/renderer/components/grid/useGridKeyboardNavigation'
export { exportGridToExcel } from './engines/excelExportEngine'
export {
  printGridReport,
  downloadBackendPdfReport,
  downloadBackendDocxReport,
} from './engines/printReportEngine'
export type { PrintReportOptions, BackendDocxReportOptions } from './engines/printReportEngine'

// 3. Core Framework Engines
export { useDataEngine } from './engines/dataEngine'
export { useNavigationEngine } from './engines/navigationEngine'
export { useRealtimeEngine } from './engines/realtimeEngine'
export type { LockedRecordInfo, RealtimeNotification } from './engines/realtimeEngine'
export { useGlobalHotkeys } from './hooks/useGlobalHotkeys'
export type { GlobalHotkeysOptions } from './hooks/useGlobalHotkeys'
export {
  registerBL,
  resolveBlModule,
  findFunctionInModule,
  executeSingleEvent,
  triggerComponentEvent,
  invokeBLLifecycle,
} from './engines/eventRunner'
export {
  registerBlFunctions,
  getFunctionsForBlFile,
  addFunctionToBlFile,
  removeFunctionFromBlFile,
  normalizeBlKey,
} from './engines/blRegistry'
export {
  getCascadedOptions,
  calculateAutoPopulatedFields,
} from './engines/cascadingEngine'
export {
  validateField,
  validateForm,
  validateISO6346ContainerNo,
  validateDateSequence,
  parseDDMMYYYY,
} from './engines/validationEngine'

// 4. Core Visual Studio Canvas & Designer
export { FeatureCanvas } from '@/editor/FeatureCanvas'
export { PropertyPanel } from '@/editor/PropertyPanel'
export { ComponentPalette } from '@/editor/ComponentPalette'
export { ComponentTree } from '@/editor/ComponentTree'
export { ContextMenu } from '@/editor/ContextMenu'
export { WorkspaceTabBar } from '@/editor/WorkspaceTabBar'
export { LeftNavbar } from '@/editor/LeftNavbar'
export { TopBar } from '@/editor/TopBar'
export { TopNav } from '@/editor/TopNav'
export { UnifiedEventEditor } from '@/editor/events/UnifiedEventEditor'
export { FeaturePopupModal } from '@/editor/FeaturePopupModal'
export { ComponentPropertiesModal } from '@/editor/ComponentPropertiesModal'

// 5. Stores
export { useEditorStore } from '@/store/editorStore'
export { useAuthStore } from '@/store/authStore'
export { useMasterDetailStore } from '@/store/masterDetailStore'

// 6. Types & Contracts
export { BaseBL, defineBL } from './contracts/BaseBL'
export type { BaseBLContext, BaseBLLifecycle, BeforeSaveResult } from './contracts/BaseBL'
export type {
  ComponentNode,
  ComponentType,
  FeaturePage,
  FeatureLayoutConfig,
  ComponentEvent,
  DataBindingConfig,
  ValidationConfig,
  ComponentPermissionConfig,
  FlexConfig,
  GridConfig,
  Project,
  EditorSelection,
  DropdownColumnConfig,
} from '@/types/schema'
export type * from '@/types/gridPolicy'
export type { SelectOption } from './engines/cascadingEngine'
export type { ValidationRule, ValidationResult } from './engines/validationEngine'
