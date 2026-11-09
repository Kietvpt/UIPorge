/**
 * 🌊 Cascading Dropdowns & Auto-Populate Engine (cascadingEngine.ts)
 * 
 * Chuẩn Generic Framework của UIForge (kế thừa Core.cs & GridPolicy.cs):
 * - Hoàn toàn trung lập với mọi nghiệp vụ (Domain-agnostic).
 * - CascadeField: Khi giá trị trường nguồn đổi -> Tự động lọc danh sách chọn của trường đích.
 * - PopulateField: Khi chọn giá trị trường nguồn -> Tự động điền dữ liệu vào các trường liên đới.
 * - Các nghiệp vụ cụ thể (Logistics, Kế toán, HR...) sẽ đăng ký resolver qua CascadingRegistry.
 */

export interface SelectOption {
  value: string
  label: string
  subText?: string
  data?: Record<string, any>
}

export type CascadeResolver = (
  sourceValue: any,
  allValues?: Record<string, any>
) => SelectOption[] | Promise<SelectOption[]>

export type PopulateResolver = (
  sourceValue: any,
  currentValues?: Record<string, any>
) => Record<string, any>

class CascadingRegistry {
  private cascadeResolvers = new Map<string, CascadeResolver>()
  private populateResolvers = new Map<string, PopulateResolver>()

  /**
   * Đăng ký bộ lọc phụ thuộc giữa 2 trường (VD: country -> city, category -> product)
   */
  registerCascade(sourceField: string, targetField: string, resolver: CascadeResolver) {
    const key = `${sourceField.toLowerCase().trim()}->${targetField.toLowerCase().trim()}`
    this.cascadeResolvers.set(key, resolver)
  }

  /**
   * Đăng ký bộ quy tắc tự động điền các trường liên đới khi trường nguồn thay đổi
   */
  registerPopulate(field: string, resolver: PopulateResolver) {
    const key = field.toLowerCase().trim().replace(/^fld_/, '')
    this.populateResolvers.set(key, resolver)
  }

  /**
   * Lấy danh sách options phụ thuộc theo Cascade
   */
  getCascadedOptions(
    sourceField: string,
    sourceValue: any,
    targetField: string
  ): SelectOption[] {
    const key = `${sourceField.toLowerCase().trim()}->${targetField.toLowerCase().trim()}`
    const resolver = this.cascadeResolvers.get(key)
    if (resolver) {
      const res = resolver(sourceValue)
      return Array.isArray(res) ? res : []
    }
    return []
  }

  /**
   * Tự động tính toán các trường cần điền (Auto-Populate)
   */
  calculateAutoPopulatedFields(
    changedField: string,
    newValue: any,
    currentValues: Record<string, any>
  ): Record<string, any> {
    const cleanKey = changedField.toLowerCase().trim().replace(/^fld_/, '')
    const resolver = this.populateResolvers.get(cleanKey)
    if (resolver) {
      return resolver(newValue, currentValues) || {}
    }
    return {}
  }
}

export const cascadingRegistry = new CascadingRegistry()

/**
 * 🔍 Lấy danh sách options phụ thuộc theo Cascade (Hàm xuất tương thích ngược)
 */
export function getCascadedOptions(
  sourceField: string,
  sourceValue: any,
  targetField: string
): SelectOption[] {
  return cascadingRegistry.getCascadedOptions(sourceField, sourceValue, targetField)
}

/**
 * ⚡ Tự động tính toán các trường cần điền (Auto-Populate) (Hàm xuất tương thích ngược)
 */
export function calculateAutoPopulatedFields(
  changedField: string,
  newValue: any,
  currentValues: Record<string, any>
): Record<string, any> {
  return cascadingRegistry.calculateAutoPopulatedFields(changedField, newValue, currentValues)
}
