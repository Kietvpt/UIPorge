import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface SelectOption {
  value: string | number
  label: string
  subText?: string
  rawItem?: any
}

export interface PopulateRule {
  targetField: string
  sourceField: string
}

const EMPTY_ARRAY: any[] = []

/**
 * ⚡ Phân tích chuỗi quy tắc Populate Field từ Core C# (Ảnh Modal: Populate field)
 * Ví dụ: "Transaction.VendorId = Terminal.VendorId, Transaction.Agent = Terminal.AgentName"
 * Hoặc: "Vendor = VendorName, Agent = AgentName, Price = UnitPrice"
 */
export function parsePopulateRules(rawString?: string): PopulateRule[] {
  if (!rawString || typeof rawString !== 'string') return []
  const rules: PopulateRule[] = []

  const pairs = rawString.split(',')
  for (const pair of pairs) {
    const parts = pair.split('=')
    if (parts.length === 2) {
      // Lấy tên trường đích (bỏ qua tên entity nếu có: "Transaction.VendorId" -> "VendorId")
      const targetRaw = parts[0].trim()
      const targetField = targetRaw.includes('.') ? targetRaw.split('.').pop()! : targetRaw

      // Lấy tên trường nguồn (bỏ qua tên entity nếu có: "Terminal.VendorId" -> "VendorId")
      const sourceRaw = parts[1].trim()
      const sourceField = sourceRaw.includes('.') ? sourceRaw.split('.').pop()! : sourceRaw

      if (targetField && sourceField) {
        rules.push({ targetField, sourceField })
      }
    }
  }

  return rules
}

export function extractFieldValue(
  state: { formRecords: Record<string, Record<string, any>> },
  formId: string,
  fieldName: string,
  fallback: any = undefined
) {
  // Tìm kiếm form ưu tiên: formId -> 'default' -> '2' -> tất cả các form còn lại trong state
  const candidateForms = [
    state.formRecords[formId],
    state.formRecords['default'],
    state.formRecords['2'],
    state.formRecords['TransactionDetail'],
    ...Object.values(state.formRecords),
  ].filter(Boolean)

  if (candidateForms.length === 0) return fallback

  const cleanFieldName = fieldName.toLowerCase().replace(/^fld_/, '')

  // Mapping các alias tương đương giữa C# Entity và Form UIForge
  const aliasMap: Record<string, string[]> = {
    jobno: ['jobno', 'job_no'],
    mblno: ['mblno', 'mbl_no'],
    shipmentdate: ['shipmentdate', 'sdate', 'shipment_date'],
    mblissueddate: ['mblissueddate', 'mbl_issued_date'],
    mbltype: ['mbltype', 'mbl_type'],
    vendor: ['vendorname', 'vendorid', 'vendor', 'vendor_name'],
    vendorname: ['vendorname', 'vendor', 'vendor_name'],
    slines: ['slines', 'shippingline', 's_lines'],
    pol: ['polid', 'pol', 'pol_id'],
    pod: ['podid', 'pod', 'pod_id'],
    commodity: ['commodity', 'commodityname', 'commodity_name'],
    commodityname: ['commodity', 'commodityname', 'commodity_name'],
    totalgw: ['totalgw', 'total_gw', 'gw'],
    totalcbm: ['totalcbm', 'total_cbm', 'cbm'],
    totalvgm: ['totalvgm', 'total_vgm', 'vgm'],
    totalpackages: ['totalpackages', 'total_packages', 'tpackages'],
    packagetype: ['packagetype', 'package_type', 'ptype'],
    pono: ['pono', 'po_no'],
    service: ['service'],
    pterm: ['pterm', 'p_term'],
    opic: ['opic', 'op_ic'],
    eta: ['eta'],
    notes: ['notes'],
  }

  const searchKeys = [
    fieldName,
    cleanFieldName,
    ...(aliasMap[cleanFieldName] || []),
  ]

  for (const form of candidateForms) {
    if (!form) continue
    for (const key of searchKeys) {
      if (form[key] !== undefined) return form[key]
      const found = Object.keys(form).find(
        (k) => k.toLowerCase().replace(/^fld_/, '') === key.toLowerCase()
      )
      if (found && form[found] !== undefined) {
        return form[found]
      }
    }
  }

  return fallback
}

interface DataEngineState {
  // Kho lưu trữ dữ liệu các bảng/entity nghiệp vụ (datasets['Terminal'], datasets['Transaction']...)
  datasets: Record<string, any[]>

  // Lưu trữ dữ liệu bản ghi đang nhập liệu trên từng Form (formRecords[formId][fieldName])
  formRecords: Record<string, Record<string, any>>

  // Đăng ký bộ dữ liệu cho một Entity
  registerDataset: (entityName: string, items: any[]) => void

  // Lấy danh sách bản ghi của một Entity trong RAM
  getDataset: (entityName: string) => any[]

  // Gán giá trị cho một trường trên Form
  setFieldValue: (formId: string, fieldName: string, value: any) => void

  // Lấy giá trị của một trường trên Form (hỗ trợ match thông minh case-insensitive & prefix fld_)
  getFieldValue: (formId: string, fieldName: string, fallback?: any) => any

  // Khởi tạo hoặc cập nhật trọn vẹn bản ghi trên Form
  setFormRecord: (formId: string, record: Record<string, any>) => void

  // Lấy trọn vẹn bản ghi của Form
  getFormRecord: (formId: string) => Record<string, any>

  // Thực thi tự động điền dữ liệu (Populate) khi người dùng chọn một mục
  applyPopulate: (formId: string, populateRuleString: string, sourceItem: any) => void

  // Truy vấn danh mục cho Dropdown/Select (hỗ trợ Reference + Query OData)
  queryReference: (
    entityName: string,
    query?: string,
    idField?: string,
    textField?: string
  ) => Promise<SelectOption[]>

  // Truy vấn danh sách Entity tổng quát (phục vụ GridView / Table)
  queryEntity: (entityName: string, query?: string) => Promise<any[]>
}

export const useDataEngine = create<DataEngineState>()(
  devtools((set, get) => ({
    datasets: {},
    formRecords: {},

    // 1. Đăng ký dataset cho một Entity (ví dụ nạp danh mục Terminal, Customer...)
    registerDataset: (entityName: string, items: any[]) => {
      set((state) => ({
        datasets: {
          ...state.datasets,
          [entityName]: items,
        },
      }))
    },

    // 2. Lấy dataset của Entity
    getDataset: (entityName: string) => {
      return get().datasets[entityName] || EMPTY_ARRAY
    },

    // 3. Gán giá trị 1 trường trên Form (Two-Way Binding)
    setFieldValue: (formId: string, fieldName: string, value: any) => {
      set((state) => {
        const currentForm = state.formRecords[formId] || {}
        return {
          formRecords: {
            ...state.formRecords,
            [formId]: {
              ...currentForm,
              [fieldName]: value,
            },
          },
        }
      })
    },

    // 4. Lấy giá trị 1 trường trên Form (với Fallback thông minh)
    getFieldValue: (formId: string, fieldName: string, fallback: any = '') => {
      return extractFieldValue(get(), formId, fieldName, fallback)
    },

    // 5. Gán trọn vẹn bản ghi
    setFormRecord: (formId: string, record: Record<string, any>) => {
      set((state) => ({
        formRecords: {
          ...state.formRecords,
          [formId]: { ...record },
          // Đồng bộ luôn dạng default và '2' để các màn hình con/cha đều đọc được
          ...(formId === 'default' ? { '2': { ...record }, 'TransactionDetail': { ...record } } : {}),
          ...(formId === '2' ? { 'default': { ...record }, 'TransactionDetail': { ...record } } : {}),
        },
      }))
    },

    // 6. Lấy trọn vẹn bản ghi
    getFormRecord: (formId: string) => {
      return get().formRecords[formId] || {}
    },

    // 7. Thực thi cơ chế Populate Field chuẩn Core C#
    applyPopulate: (formId: string, populateRuleString: string, sourceItem: any) => {
      if (!sourceItem || typeof sourceItem !== 'object') return
      const rules = parsePopulateRules(populateRuleString)
      if (rules.length === 0) return

      const currentForm = get().formRecords[formId] || {}
      const updates: Record<string, any> = {}

      for (const rule of rules) {
        // Tìm giá trị trong sourceItem theo sourceField (không phân biệt hoa thường)
        const matchKey = Object.keys(sourceItem).find(
          (k) => k.toLowerCase() === rule.sourceField.toLowerCase()
        )
        if (matchKey && sourceItem[matchKey] !== undefined) {
          const val = sourceItem[matchKey]
          updates[rule.targetField] = val
          // Đồng bộ luôn dạng tiền tố fld_ nếu người dùng dùng id fld_*
          if (!rule.targetField.startsWith('fld_')) {
            updates[`fld_${rule.targetField.toLowerCase()}`] = val
          }
        }
      }

      set((state) => ({
        formRecords: {
          ...state.formRecords,
          [formId]: {
            ...currentForm,
            ...updates,
          },
        },
      }))
    },

    // 8. Truy vấn danh mục tham chiếu (OData Reference Query cho Select/Dropdown)
    queryReference: async (
      entityName: string,
      query?: string,
      idField = 'id',
      textField = 'fullName'
    ): Promise<SelectOption[]> => {
      // 1. Thử gọi Backend OData API nếu có
      if (entityName) {
        try {
          const queryString = query
            ? query.startsWith('?')
              ? query
              : `?$filter=${encodeURIComponent(query)}`
            : ''
          const url = `http://localhost:5048/api/core/data/${encodeURIComponent(entityName)}${queryString}`
          const response = await fetch(url)
          if (response.ok) {
            const data = await response.json()
            const items = Array.isArray(data) ? data : data.value || []
            return items.map((item: any) => {
              const val = item[idField] !== undefined ? item[idField] : item.Id || item.id || item.code
              const label =
                item[textField] !== undefined
                  ? item[textField]
                  : item.FullName || item.fullName || item.Name || item.name || item.title || String(val)
              return {
                value: val,
                label: String(label),
                rawItem: item,
              }
            })
          }
        } catch {
          // Bỏ qua nếu offline, fallback sang local dataset
        }
      }

      // 2. Fallback sang dataset đã đăng ký trong bộ nhớ Core
      const localItems = get().datasets[entityName] || []
      return localItems.map((item: any) => {
        const val = item[idField] !== undefined ? item[idField] : item.Id || item.id || item.code
        const label =
          item[textField] !== undefined
            ? item[textField]
            : item.FullName || item.fullName || item.Name || item.name || item.title || String(val)
        return {
          value: val,
          label: String(label),
          rawItem: item,
        }
      })
    },

    // 9. Truy vấn danh sách Entity tổng quát (GridView / Table)
    queryEntity: async (entityName: string, query?: string): Promise<any[]> => {
      if (entityName) {
        try {
          const queryString = query
            ? query.startsWith('?')
              ? query
              : `?$filter=${encodeURIComponent(query)}`
            : ''
          const url = `http://localhost:5048/api/core/data/${encodeURIComponent(entityName)}${queryString}`
          const response = await fetch(url)
          if (response.ok) {
            const data = await response.json()
            return Array.isArray(data) ? data : data.value || []
          }
        } catch {
          // Offline fallback
        }
      }
      return get().datasets[entityName] || []
    },
  }))
)
