/**
 * =========================================================================
 * 🏛️ UIForge Core - Base Business Logic (BL) Lifecycle Contract & Interfaces
 * =========================================================================
 * Chuẩn hóa hợp đồng vòng đời và ngữ cảnh thực thi cho toàn bộ các file *.bl.ts.
 * Kế thừa triết lý EditForm / PortalBL từ Core C# nhưng hiện đại hóa cho React & TypeScript.
 * 100% Domain-Agnostic, tương thích hoàn hảo với kiến trúc tách rời Core vs BL.
 */

import { useDataEngine } from '../engines/dataEngine'
import { useNavigationEngine } from '../engines/navigationEngine'
import { useEditorStore } from '@/store/editorStore'

/**
 * Ngữ cảnh tiêu chuẩn được truyền vào mọi hàm Business Logic (BL Context)
 */
export interface BaseBLContext<T = Record<string, any>> {
  componentId?: string
  componentName?: string
  pageId?: string | number
  featureId?: string | number
  trigger?: string
  value?: any
  row?: any
  rowIndex?: number
  record?: T
  formValues?: Record<string, any>
  dataEngine?: ReturnType<typeof useDataEngine.getState>
  navigationEngine?: ReturnType<typeof useNavigationEngine.getState>
  editorStore?: ReturnType<typeof useEditorStore.getState>
  [key: string]: any
}

/**
 * Kết quả trả về của hàm kiểm tra trước khi lưu (beforeSave)
 */
export type BeforeSaveResult = boolean | { valid: boolean; message?: string }

/**
 * Giao diện hợp đồng vòng đời Business Logic tiêu chuẩn (BaseBL Lifecycle)
 */
export interface BaseBLLifecycle<T = Record<string, any>> {
  /**
   * 1. Khởi tạo màn hình / Nạp dữ liệu ban đầu
   */
  onInit?(context: BaseBLContext<T>): Promise<void> | void

  /**
   * 2. Tiền kiểm tra trước khi lưu (Validation nghiệp vụ trước khi gọi API)
   * Trả về true / { valid: true } để tiếp tục lưu, false / { valid: false, message: '...' } để hủy thao tác lưu.
   */
  beforeSave?(entity: T, context: BaseBLContext<T>): Promise<BeforeSaveResult> | BeforeSaveResult

  /**
   * 3. Thực thi lưu bản ghi (Nếu tự quản lý việc gọi API hoặc tổng hợp Master-Detail)
   */
  onSave?(entity: T, context: BaseBLContext<T>): Promise<any> | any

  /**
   * 4. Hậu xử lý sau khi lưu thành công (Reload grid cha, đóng popup, hiển thị thông báo...)
   */
  afterSave?(result: any, context: BaseBLContext<T>): Promise<void> | void

  /**
   * 5. Tiền kiểm tra trước khi xóa bản ghi
   */
  beforeDelete?(id: number | string, context: BaseBLContext<T>): Promise<boolean> | boolean

  /**
   * 6. Phản hồi khi giá trị một trường trên form thay đổi
   */
  onFieldChange?(fieldName: string, value: any, context: BaseBLContext<T>): Promise<void> | void

  /**
   * 7. Phản hồi khi nhấp chuột vào một dòng trên lưới dữ liệu (Single Click)
   */
  onRowClick?(row: any, context: BaseBLContext<T>): Promise<void> | void

  /**
   * 8. Phản hồi khi nhấp đúp chuột vào một dòng trên lưới (Double Click - mặc định mở Form chi tiết)
   */
  onRowDoubleClick?(row: any, context: BaseBLContext<T>): Promise<void> | void

  /**
   * 9. Giải phóng tài nguyên khi rời màn hình / đóng tab
   */
  onDispose?(): Promise<void> | void

  /**
   * Cho phép định nghĩa các hàm nghiệp vụ tùy biến khác (AutoFillVendor, onEManifest...)
   */
  [key: string]: any
}

/**
 * Lớp cơ sở trừu tượng BaseBL dành cho các kỹ sư muốn viết BL theo hướng đối tượng (OOP)
 */
export abstract class BaseBL<T = Record<string, any>> implements BaseBLLifecycle<T> {
  protected get dataEngine() {
    return useDataEngine.getState()
  }

  protected get navigationEngine() {
    return useNavigationEngine.getState()
  }

  protected get editorStore() {
    return useEditorStore.getState()
  }

  onInit?(context: BaseBLContext<T>): Promise<void> | void
  beforeSave?(entity: T, context: BaseBLContext<T>): Promise<BeforeSaveResult> | BeforeSaveResult
  onSave?(entity: T, context: BaseBLContext<T>): Promise<any> | any
  afterSave?(result: any, context: BaseBLContext<T>): Promise<void> | void
  beforeDelete?(id: number | string, context: BaseBLContext<T>): Promise<boolean> | boolean
  onFieldChange?(fieldName: string, value: any, context: BaseBLContext<T>): Promise<void> | void
  onRowClick?(row: any, context: BaseBLContext<T>): Promise<void> | void
  onRowDoubleClick?(row: any, context: BaseBLContext<T>): Promise<void> | void
  onDispose?(): Promise<void> | void

  /** Lấy dữ liệu trọn vẹn của Form */
  protected getFormRecord(formId = 'default'): Record<string, any> {
    return this.dataEngine.getFormRecord(formId)
  }

  /** Gán giá trị cho một trường trên Form */
  protected setFieldValue(fieldName: string, value: any, formId = 'default') {
    this.dataEngine.setFieldValue(formId, fieldName, value)
  }

  /** Mở màn hình dạng Tab */
  protected openTab(featureId: string, params?: Record<string, any>, title?: string) {
    this.navigationEngine.openFeature(featureId, params, 'Tab', title)
  }

  /** Mở màn hình dạng Popup Modal */
  protected openPopup(featureId: string, params?: Record<string, any>, title?: string) {
    this.navigationEngine.openFeature(featureId, params, 'Popup', title)
  }

  [key: string]: any
}

/**
 * Helper function `defineBL`: Định nghĩa một module Business Logic với đầy đủ gợi ý và kiểm tra kiểu TypeScript.
 * Thích hợp cho cả phong cách Functional lẫn Object literal.
 */
export function defineBL<T = Record<string, any>>(
  definition: BaseBLLifecycle<T> & Record<string, any>
): BaseBLLifecycle<T> & Record<string, any> {
  return definition
}

