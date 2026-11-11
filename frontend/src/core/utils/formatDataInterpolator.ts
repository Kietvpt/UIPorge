/**
 * 🏷️ formatDataInterpolator.ts
 * Tiện ích nội suy chuỗi định dạng (FormatData / FormatCell) chuẩn Enterprise & Core C#.
 * 
 * Hỗ trợ các định dạng biểu mẫu linh hoạt:
 * - `{Vendor.FullName} - {Vendor.Address}`
 * - `{ShortName}`
 * - `{code} | {name}`
 * - `{PortCode} - {PortName}`
 * 
 * Tự động phân giải entity prefix (Vendor.FullName -> FullName),
 * tìm kiếm linh hoạt không phân biệt hoa thường (case-insensitive, camelCase, PascalCase).
 */

export function interpolateFormatData(
  template?: string,
  item?: Record<string, any> | null,
  fallback: string = ''
): string {
  if (!item || typeof item !== 'object') {
    return fallback
  }

  // 1. Nếu không có template, tự động lấy trường hiển thị phổ biến nhất
  if (!template || typeof template !== 'string' || template.trim() === '') {
    const commonField =
      item.fullName ??
      item.FullName ??
      item.name ??
      item.Name ??
      item.shortName ??
      item.ShortName ??
      item.title ??
      item.Title ??
      item.label ??
      item.Label ??
      item.code ??
      item.Code ??
      item.id ??
      item.Id
    return commonField !== undefined && commonField !== null ? String(commonField) : fallback
  }

  const trimmedTemplate = template.trim()

  // 2. Nếu template không chứa dấu ngoặc nhọn `{...}`, kiểm tra xem có phải tên 1 trường cụ thể không
  if (!trimmedTemplate.includes('{') || !trimmedTemplate.includes('}')) {
    const directVal = lookupFieldValue(item, trimmedTemplate)
    if (directVal !== undefined && directVal !== null) {
      return String(directVal)
    }
    return trimmedTemplate // Chuỗi văn bản tĩnh
  }

  // 3. Phân giải các placeholder `{Token}`
  const regex = /\{([^{}]+)\}/g
  let hasReplaced = false

  const result = trimmedTemplate.replace(regex, (_, rawToken: string) => {
    const token = rawToken.trim()
    hasReplaced = true

    // Trích xuất propName (bỏ prefix entity nếu có, ví dụ 'Vendor.FullName' -> 'FullName')
    const cleanProp = token.includes('.') ? token.split('.').pop()!.trim() : token

    // 1. Tìm chính xác theo raw token
    let val = lookupFieldValue(item, token)
    // 2. Nếu chưa thấy, tìm theo clean property
    if (val === undefined || val === null) {
      val = lookupFieldValue(item, cleanProp)
    }

    if (val !== undefined && val !== null) {
      return String(val)
    }

    return ''
  })

  if (!hasReplaced) {
    return trimmedTemplate
  }

  // 4. Làm sạch các dấu phân cách lơ lửng nếu một số trường bị rỗng
  // Ví dụ: "CONG TY A - " hoặc " - HA NOI" hoặc "A - - B"
  let cleanResult = result
    .replace(/\s*[-|,:/]\s*[-|,:/]\s*/g, ' - ')
    .replace(/^[\s\-|,:/]+/, '')
    .replace(/[\s\-|,:/]+$/, '')
    .trim()

  return cleanResult || fallback
}

/**
 * Tra cứu giá trị trường trong object với cơ chế matching thông minh:
 * - Match chính xác key
 * - Tự động tách Entity prefix nếu có (VD: 'Vendor.FullName' -> 'FullName')
 * - Match không phân biệt hoa thường (case-insensitive)
 * - Match bỏ prefix 'fld_' hoặc '_'
 */
export function lookupFieldValue(obj: Record<string, any> | null | undefined, key: string): any {
  if (!obj || typeof obj !== 'object' || !key) return undefined

  if (key in obj && obj[key] !== undefined && obj[key] !== null) {
    return obj[key]
  }

  const cleanProp = key.includes('.') ? key.split('.').pop()!.trim() : key.trim()
  if (cleanProp in obj && obj[cleanProp] !== undefined && obj[cleanProp] !== null) {
    return obj[cleanProp]
  }

  const lowerKey = cleanProp.toLowerCase()
  const objKeys = Object.keys(obj)

  // Tìm case-insensitive
  const matchedKey = objKeys.find((k) => k.toLowerCase() === lowerKey)
  if (matchedKey && obj[matchedKey] !== undefined && obj[matchedKey] !== null) {
    return obj[matchedKey]
  }

  // Thử trích xuất clean key nếu có prefix fld_ hoặc _
  const stripped = cleanProp.replace(/^(fld_|_)/i, '')
  const matchedStripped = objKeys.find((k) => k.toLowerCase() === stripped.toLowerCase())
  if (matchedStripped && obj[matchedStripped] !== undefined && obj[matchedStripped] !== null) {
    return obj[matchedStripped]
  }

  return undefined
}

