/**
 * 🌊 Cascading Dropdowns & Auto-Populate Engine (cascadingEngine.ts)
 * 
 * Kế thừa cơ chế quan hệ phụ thuộc trường từ C# Core (Component.cs & GridPolicy.cs):
 * - CascadeField: Khi giá trị trường nguồn đổi -> Tự động lọc danh sách chọn của trường đích.
 * - PopulateField: Khi chọn giá trị trường nguồn -> Tự động điền dữ liệu vào các trường liên đới.
 */

export interface SelectOption {
  value: string
  label: string
  subText?: string
  data?: Record<string, any>
}

// 🚢 Danh mục quan hệ Tuyến vận tải Cảng Bốc (POL) -> Cảng Dỡ (POD)
export const POL_TO_POD_ROUTES: Record<string, SelectOption[]> = {
  // Cảng Thượng Hải (CNSGH)
  'CNSGH': [
    { value: 'VNDTS', label: 'TIEN SA TERMINAL / VNDTS', subText: 'Đà Nẵng, Việt Nam - Thời gian vận chuyển: 4 ngày' },
    { value: 'VNSGN', label: 'CAT LAI / VNSGN', subText: 'TP. Hồ Chí Minh, Việt Nam - Thời gian vận chuyển: 5 ngày' },
    { value: 'VNHPH', label: 'HAI PHONG / VNHPH', subText: 'Hải Phòng, Việt Nam - Thời gian vận chuyển: 3 ngày' },
  ],
  // Cảng Busan Hàn Quốc (KRPUS)
  'KRPUS': [
    { value: 'VNSGN', label: 'CAT LAI / VNSGN', subText: 'TP. Hồ Chí Minh, Việt Nam - Thời gian vận chuyển: 6 ngày' },
    { value: 'VNDTS', label: 'TIEN SA TERMINAL / VNDTS', subText: 'Đà Nẵng, Việt Nam - Thời gian vận chuyển: 5 ngày' },
  ],
  // Cảng Singapore (SGSIN)
  'SGSIN': [
    { value: 'VNHPH', label: 'HAI PHONG / VNHPH', subText: 'Hải Phòng, Việt Nam - Thời gian vận chuyển: 4 ngày' },
    { value: 'VNSGN', label: 'CAT LAI / VNSGN', subText: 'TP. Hồ Chí Minh, Việt Nam - Thời gian vận chuyển: 2 ngày' },
    { value: 'VNDTS', label: 'TIEN SA TERMINAL / VNDTS', subText: 'Đà Nẵng, Việt Nam - Thời gian vận chuyển: 3 ngày' },
  ],
  // Cảng Ninh Ba (CNNGB)
  'CNNGB': [
    { value: 'VNDTS', label: 'TIEN SA TERMINAL / VNDTS', subText: 'Đà Nẵng, Việt Nam - Thời gian vận chuyển: 4 ngày' },
    { value: 'VNHPH', label: 'HAI PHONG / VNHPH', subText: 'Hải Phòng, Việt Nam - Thời gian vận chuyển: 3 ngày' },
  ],
}

// 🏢 Danh mục Quan hệ Hãng tàu (S.Lines) -> Đại lý, Vendor và Điều khoản thanh toán
export interface ShippingLineRelation {
  lineCode: string
  lineName: string
  vendorCode: string
  vendorName: string
  agentName: string
  defaultPTerm: 'COLLECT' | 'PREPAID'
  defaultService: 'CYCY' | 'CFSCFS' | 'DOOR'
}

export const SHIPPING_LINE_DIRECTORY: Record<string, ShippingLineRelation> = {
  'SITC': {
    lineCode: 'SITC',
    lineName: 'SITC CONTAINER LINES CO., LTD',
    vendorCode: 'VFRAC-IT',
    vendorName: 'VFRAC-IT VIETNAM',
    agentName: 'SHANGHAI TRANSLEAD',
    defaultPTerm: 'COLLECT',
    defaultService: 'CYCY',
  },
  'ONE': {
    lineCode: 'ONE',
    lineName: 'OCEAN NETWORK EXPRESS (VIETNAM) CO., LTD',
    vendorCode: 'TRANSLEAD',
    vendorName: 'SHANGHAI TRANSLEAD',
    agentName: 'OCEAN NETWORK EXPRESS JAPAN',
    defaultPTerm: 'PREPAID',
    defaultService: 'CYCY',
  },
  'WHL': {
    lineCode: 'WHL',
    lineName: 'WAN HAI LINES (VIETNAM) CO., LTD',
    vendorCode: 'VFRAC-IT',
    vendorName: 'WAN HAI LINES VIETNAM',
    agentName: 'WAN HAI LINES TAIPEI',
    defaultPTerm: 'COLLECT',
    defaultService: 'CYCY',
  },
  'ASL': {
    lineCode: 'ASL',
    lineName: 'ASL LOGISTICS SERVICE CORP',
    vendorCode: 'VFRAC-IT',
    vendorName: 'ASL LOGISTICS SERVICE',
    agentName: 'ASL TRANS OVERSEAS',
    defaultPTerm: 'PREPAID',
    defaultService: 'DOOR',
  },
  'KMTC': {
    lineCode: 'KMTC',
    lineName: 'KOREA MARINE TRANSPORT CO., LTD',
    vendorCode: 'TRANSLEAD',
    vendorName: 'KMTC VIETNAM CO., LTD',
    agentName: 'KMTC INCHEON HEADQUARTERS',
    defaultPTerm: 'COLLECT',
    defaultService: 'CYCY',
  },
}

/**
 * 🔍 Lấy danh sách options phụ thuộc theo Cascade (vd: POL -> POD)
 */
export function getCascadedOptions(
  sourceField: string,
  sourceValue: any,
  targetField: string
): SelectOption[] {
  if (sourceField === 'pol' && targetField === 'pod') {
    const polKey = String(sourceValue || '').toUpperCase()
    if (POL_TO_POD_ROUTES[polKey]) {
      return POL_TO_POD_ROUTES[polKey]
    }
  }

  // Mặc định trả về toàn bộ cảng nếu chưa chọn nguồn
  if (targetField === 'pod') {
    return [
      { value: 'VNDTS', label: 'TIEN SA TERMINAL / VNDTS' },
      { value: 'VNSGN', label: 'CAT LAI / VNSGN' },
      { value: 'VNHPH', label: 'HAI PHONG / VNHPH' },
    ]
  }

  return []
}

/**
 * ⚡ Tự động tính toán các trường cần điền (Auto-Populate)
 */
export function calculateAutoPopulatedFields(
  changedField: string,
  newValue: any,
  currentValues: Record<string, any>
): Record<string, any> {
  const updates: Record<string, any> = {}

  // 1. Khi đổi Hãng tàu (S.Lines)
  if (changedField === 'sLines' || changedField === 'lines' || changedField === 'fld_lines') {
    const lineKey = String(newValue || '').trim().toUpperCase()
    const rel = SHIPPING_LINE_DIRECTORY[lineKey]
    if (rel) {
      updates['vendor'] = rel.vendorCode
      updates['agent'] = rel.agentName
      if (!currentValues['pTerm']) {
        updates['pTerm'] = rel.defaultPTerm
      }
      if (!currentValues['service']) {
        updates['service'] = rel.defaultService
      }
    }
  }

  // 2. Khi đổi Cảng bốc (POL) -> Tự gán cảng dỡ mặc định đầu tiên nếu chưa chọn
  if (changedField === 'pol' || changedField === 'fld_pol') {
    const polKey = String(newValue || '').toUpperCase()
    const availablePods = POL_TO_POD_ROUTES[polKey]
    if (availablePods && availablePods.length > 0) {
      const currentPod = currentValues['pod']
      const isValidPodForNewPol = availablePods.some((p) => p.value === currentPod)
      if (!isValidPodForNewPol) {
        updates['pod'] = availablePods[0].value
      }
    }
  }

  return updates
}

