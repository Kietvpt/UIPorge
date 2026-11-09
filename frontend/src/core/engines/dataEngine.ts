import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useEditorStore } from '@/store/editorStore'
import type { ComponentNode } from '@/types/schema'

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

  // 10. Tiện ích lưu bản ghi chuẩn Core (tự động phân loại POST thêm mới hoặc PUT cập nhật)
  saveRecord: (
    entityName: string,
    record: Record<string, any>,
    formId?: string
  ) => Promise<{ success: boolean; data?: any; message: string }>

  // 11. Tiện ích xóa bản ghi chuẩn Core (Soft delete theo BaseEntity)
  deleteRecord: (
    entityName: string,
    id: number | string
  ) => Promise<{ success: boolean; message: string }>

  // 12. Thu thập trọn vẹn dữ liệu từ màn hình / các component thuộc Feature (hỗ trợ BL lấy data siêu tốc)
  collectScreenData: (featureIdOrFormId?: string) => Record<string, any>

  // 13. Lưu trữ và truy xuất dòng đang được chọn trên lưới dữ liệu (Selected Row)
  selectedRecords: Record<string, any>
  setSelectedRecord: (entityName: string, record: any) => void
  getSelectedRecord: (entityName: string) => any
}

export const useDataEngine = create<DataEngineState>()(
  devtools((set, get) => ({
    datasets: {},
    formRecords: {},
    selectedRecords: {},

    // Lưu trữ bản ghi đang chọn
    setSelectedRecord: (entityName: string, record: any) => {
      set((state) => ({
        selectedRecords: {
          ...state.selectedRecords,
          [entityName]: record,
        },
      }))
    },

    // Lấy bản ghi đang chọn
    getSelectedRecord: (entityName: string) => {
      return get().selectedRecords[entityName]
    },

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
        const cleanKey = fieldName.replace(/^fld_/, '')
        const lower = cleanKey.toLowerCase()
        const camel = cleanKey.charAt(0).toLowerCase() + cleanKey.slice(1)
        const pascal = cleanKey.charAt(0).toUpperCase() + cleanKey.slice(1)

        const updateForm = (form: Record<string, any>) => {
          const next = { ...form }
          // Xóa tất cả các key cũ trùng tên (không phân biệt hoa thường) để loại bỏ conflict
          for (const k of Object.keys(next)) {
            if (k.toLowerCase() === lower || k.toLowerCase() === fieldName.toLowerCase()) {
              delete next[k]
            }
          }
          next[camel] = value
          next[pascal] = value
          return next
        }

        const currentForm = state.formRecords[formId] || {}
        const defaultForm = state.formRecords['default'] || {}
        return {
          formRecords: {
            ...state.formRecords,
            [formId]: updateForm(currentForm),
            default: updateForm(defaultForm),
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
      set((state) => {
        const normalized: Record<string, any> = {}
        for (const [k, v] of Object.entries(record || {})) {
          normalized[k] = v
          const clean = k.replace(/^fld_/, '')
          const camel = clean.charAt(0).toLowerCase() + clean.slice(1)
          const pascal = clean.charAt(0).toUpperCase() + clean.slice(1)
          normalized[camel] = v
          normalized[pascal] = v
        }
        return {
          formRecords: {
            ...state.formRecords,
            [formId]: normalized,
            default: normalized,
            ...(formId === 'default' ? { '4': normalized, '2': normalized, 'TransactionDetail': normalized } : {}),
            ...(formId === '4' ? { default: normalized, 'TransactionDetail': normalized } : {}),
          },
        }
      })
    },

    // 6. Lấy trọn vẹn bản ghi (Gộp default và target để luôn đảm bảo đủ trường từ mọi section/tab)
    getFormRecord: (formId: string) => {
      const records = get().formRecords
      const target = records[formId] || {}
      const def = records['default'] || {}
      let merged: Record<string, any> = { ...def, ...target }

      // Nếu chưa có JobNo hoặc rỗng, kích hoạt thu thập trực tiếp từ các component trên màn hình
      if (!merged.jobNo && !merged.JobNo) {
        const collected = get().collectScreenData(formId)
        merged = { ...collected, ...merged }
      }

      // Đảm bảo các thuộc tính chính luôn có cả camelCase và PascalCase
      const normalized: Record<string, any> = { ...merged }
      for (const [k, v] of Object.entries(merged)) {
        if (!k) continue
        const camel = k.charAt(0).toLowerCase() + k.slice(1)
        const pascal = k.charAt(0).toUpperCase() + k.slice(1)
        if (normalized[camel] === undefined) normalized[camel] = v
        if (normalized[pascal] === undefined) normalized[pascal] = v
      }
      return normalized
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

    // 10. Tiện ích lưu bản ghi chuẩn Core (tự động phân loại POST thêm mới hoặc PUT cập nhật)
    saveRecord: async (entityName: string, record: Record<string, any>, formId?: string) => {
      if (!entityName || !record) {
        return { success: false, message: 'Thiếu thông tin Entity hoặc dữ liệu bản ghi' }
      }
      let targetId = record.id || record.Id
      // Nếu chưa có ID nhưng có JobNo, kiểm tra đối chiếu trong dataset đã nạp
      if ((!targetId || targetId === 'new' || Number(targetId) <= 0) && (record.jobNo || record.JobNo)) {
        const currentList = get().datasets[entityName]
        if (Array.isArray(currentList)) {
          const match = currentList.find((t) => (t.jobNo || t.JobNo) === (record.jobNo || record.JobNo))
          if (match) {
            targetId = match.id || match.Id
          }
        }
      }
      const isUpdate = Boolean(targetId && targetId !== 'new' && Number(targetId) > 0)
      const numericId = isUpdate ? Number(targetId) : 0

      try {
        const url = isUpdate
          ? `http://localhost:5048/api/core/data/${encodeURIComponent(entityName)}/${numericId}`
          : `http://localhost:5048/api/core/data/${encodeURIComponent(entityName)}`
        const method = isUpdate ? 'PUT' : 'POST'

        // Làm sạch payload trước khi gửi: Chuyển chuỗi rỗng của trường ngày/số thành null
        const sanitized: Record<string, any> = { ...record }
        for (const [k, v] of Object.entries(sanitized)) {
          if (v === '') {
            if (/date|eta|atd|ata|etd/i.test(k) || /^(id|total|gw|cbm|vgm|typeid|package)/i.test(k)) {
              sanitized[k] = null
            }
          } else if (typeof v === 'string' && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(v.trim())) {
            // Chuyển định dạng DD/MM/YYYY sang chuẩn ISO 8601 YYYY-MM-DDTHH:mm:ss tương thích 100% C# .NET
            const [d, m, y] = v.trim().split('/')
            sanitized[k] = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T00:00:00`
          }
        }
        // Chuẩn hóa payload: Loại bỏ các key trùng lặp và các tiền tố id component (fld_*)
        // Mỗi thuộc tính chỉ giữ lại đúng 1 key PascalCase chuẩn C# .NET duy nhất
        const payloadForApi: Record<string, any> = {}
        for (const [k, v] of Object.entries(sanitized)) {
          if (!k || k.startsWith('fld_') || k.startsWith('btn_') || k.startsWith('sec_') || k.startsWith('tab_')) {
            continue
          }
          const clean = k.replace(/^fld_/, '')
          const pascalKey = clean.charAt(0).toUpperCase() + clean.slice(1)
          payloadForApi[pascalKey] = v
        }

        if (isUpdate) {
          payloadForApi.Id = numericId
        } else {
          payloadForApi.Id = 0
          payloadForApi.Active = true
        }

        const res = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payloadForApi),
        })

        if (res.ok) {
          const data = await res.json()
          const realId = data.id || data.Id || numericId

          // Cập nhật URL & LocalStorage để khi F5 vẫn giữ đúng bản ghi vừa lưu
          if (typeof window !== 'undefined') {
            const currentUrl = new URL(window.location.href)
            currentUrl.searchParams.set('id', String(realId))
            window.history.replaceState(null, '', currentUrl.toString())
            try {
              localStorage.setItem('uiforge_active_transaction_id', String(realId))
            } catch {}
          }
          useEditorStore.getState().setActiveRecordId(String(realId))

          if (formId) {
            get().setFormRecord(formId, data)
          }
          get().setFormRecord('default', data)
          // Cập nhật lại trong dataset nếu có
          const currentDataset = get().datasets[entityName]
          if (currentDataset && Array.isArray(currentDataset)) {
            if (isUpdate) {
              const updatedList = currentDataset.map((item) =>
                (item.id || item.Id) === numericId ? { ...item, ...data } : item
              )
              get().registerDataset(entityName, updatedList)
            } else {
              get().registerDataset(entityName, [data, ...currentDataset])
            }
          }
          return {
            success: true,
            data,
            message: isUpdate
              ? `Cập nhật thành công bản ghi #${numericId} (${entityName}) vào Database!`
              : `Thêm mới thành công bản ghi (${entityName}) vào Database!`,
          }
        } else {
          return { success: false, message: `Lỗi máy chủ: HTTP ${res.status}` }
        }
      } catch (err: any) {
        return { success: false, message: `Lỗi kết nối API: ${err?.message || err}` }
      }
    },

    // 11. Tiện ích xóa bản ghi chuẩn Core (Soft delete theo BaseEntity)
    deleteRecord: async (entityName: string, id: number | string) => {
      if (!entityName || !id) {
        return { success: false, message: 'Thiếu thông tin Entity hoặc ID bản ghi' }
      }
      try {
        const res = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(entityName)}/${id}`, {
          method: 'DELETE',
        })
        if (res.ok) {
          // Xóa khỏi dataset trong RAM nếu có
          const currentDataset = get().datasets[entityName]
          if (currentDataset && Array.isArray(currentDataset)) {
            const filtered = currentDataset.filter((item) => (item.id || item.Id) !== id)
            get().registerDataset(entityName, filtered)
          }
          return { success: true, message: `Đã xóa thành công bản ghi #${id} (${entityName})!` }
        } else {
          return { success: false, message: `Lỗi xóa bản ghi: HTTP ${res.status}` }
        }
      } catch (err: any) {
        return { success: false, message: `Lỗi kết nối khi xóa: ${err?.message || err}` }
      }
    },

    // 12. Thu thập trọn vẹn dữ liệu từ màn hình / các component thuộc Feature (chuẩn Core)
    collectScreenData: (featureIdOrFormId?: string) => {
      const state = get()
      const editorStore = useEditorStore.getState()
      const features = editorStore.features || []
      const activeFeatureId = editorStore.activeFeatureId

      // Xác định Feature tương ứng
      const targetFeature =
        features.find((f) => String(f.id) === String(featureIdOrFormId)) ||
        features.find((f) => String(f.id) === String(activeFeatureId)) ||
        features.find((f) => f.name.toLowerCase().includes('fcl') || f.route?.includes('fcl')) ||
        features[0]

      const collected: Record<string, any> = {}

      // Hàm đệ quy duyệt cây component của Feature
      const traverseNodes = (nodes?: ComponentNode[]) => {
        if (!nodes || !Array.isArray(nodes)) return
        for (const node of nodes) {
          const bindingField = node.dataBinding?.fieldName
          const propName = node.props?.name
          const rawId = node.id

          // Tìm tên trường đại diện (loại bỏ tiền tố fld_)
          const rawFieldKey = bindingField || (typeof propName === 'string' ? propName : '') || rawId?.replace(/^fld_/, '')
          const fieldKey = String(rawFieldKey || '').trim()

          if (fieldKey) {
            // 1. Kiểm tra giá trị đã có trong formRecords
            let val = extractFieldValue(state, String(node.pageId || activeFeatureId || 'default'), fieldKey, undefined)

            // 2. Fallback sang props.value của ComponentNode
            if (val === undefined && node.props?.value !== undefined) {
              val = node.props.value
            }

            // 3. Fallback đọc trực tiếp từ DOM Input nếu đang chạy trên trình duyệt
            if (val === undefined && typeof document !== 'undefined') {
              const el =
                (document.getElementById(node.id) as HTMLInputElement | HTMLSelectElement | null) ||
                (document.querySelector(`[name="${node.id}"]`) as any) ||
                (document.querySelector(`[name="${fieldKey}"]`) as any)
              if (el && 'value' in el && el.value !== '') {
                val = el.value
              }
            }

            if (val !== undefined && val !== null) {
              collected[fieldKey] = val
              const camel = fieldKey.charAt(0).toLowerCase() + fieldKey.slice(1)
              const pascal = fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)
              collected[camel] = val
              collected[pascal] = val
            }
          }

          if (node.children && node.children.length > 0) {
            traverseNodes(node.children)
          }
        }
      }

      if (targetFeature?.components) {
        traverseNodes(targetFeature.components)
      }

      // Lấy dữ liệu người dùng đang thao tác trong form hiện tại
      const formKey = featureIdOrFormId || String(activeFeatureId || 'default')
      const activeForm = { ...state.formRecords['default'], ...(formKey ? state.formRecords[formKey] : {}) }

      // Dữ liệu người dùng đã nhập (activeForm) phải đè lên giá trị mặc định của template (collected)
      const finalRecord = { ...collected, ...activeForm }

      // Lấy ID từ URL hoặc LocalStorage nếu form chưa có
      if (!finalRecord.id && !finalRecord.Id && typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search)
        const idFromUrl = urlParams.get('id') || localStorage.getItem('uiforge_active_transaction_id')
        if (idFromUrl && idFromUrl !== 'new' && Number(idFromUrl) > 0) {
          finalRecord.id = Number(idFromUrl)
          finalRecord.Id = Number(idFromUrl)
        }
      }

      // Tự động đối chiếu ID từ dataset 'Transaction' nếu có
      const jobNoVal = finalRecord.jobNo || finalRecord.JobNo
      if (jobNoVal && !finalRecord.id && !finalRecord.Id) {
        const transList = state.datasets['Transaction']
        if (Array.isArray(transList)) {
          const match = transList.find((t) => (t.jobNo || t.JobNo) === jobNoVal)
          if (match) {
            finalRecord.id = match.id || match.Id
            finalRecord.Id = match.id || match.Id
          }
        }
      }

      // Chuẩn hóa và làm sạch: Mỗi thuộc tính chỉ có 1 camelCase và 1 PascalCase đồng bộ 100%
      const normalizedRecord: Record<string, any> = {}
      for (const [k, v] of Object.entries(finalRecord)) {
        if (!k || k.startsWith('fld_') || k.startsWith('btn_') || k.startsWith('sec_') || k.startsWith('tab_')) continue
        const clean = k.replace(/^fld_/, '')
        const camel = clean.charAt(0).toLowerCase() + clean.slice(1)
        const pascal = clean.charAt(0).toUpperCase() + clean.slice(1)
        normalizedRecord[camel] = v
        normalizedRecord[pascal] = v
      }
      if (finalRecord.id || finalRecord.Id) {
        normalizedRecord.id = finalRecord.id || finalRecord.Id
        normalizedRecord.Id = finalRecord.id || finalRecord.Id
      }

      // Đồng bộ lại vào DataEngine state
      set((s) => ({
        formRecords: {
          ...s.formRecords,
          [formKey]: normalizedRecord,
          default: normalizedRecord,
        },
      }))

      return normalizedRecord
    },
  }))
)
