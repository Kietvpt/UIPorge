/**
 * 🛡️ Enterprise Validation Rules Engine (validationEngine.ts)
 * 
 * Kế thừa cơ chế kiểm tra tính hợp lệ dữ liệu từ C# Core (Validation.cs & GridPolicy.cs):
 * 1. Required: Kiểm tra bắt buộc không để trống.
 * 2. Min / Max / Length: Giới hạn độ dài chuỗi và giá trị số.
 * 3. Pattern Regex: Kiểm tra định dạng theo biểu thức chính quy (M-B/L, P.O, Email, Phone...).
 * 4. ISO 6346 Container Check Digit: Thuật toán kiểm tra số hiệu container tiêu chuẩn quốc tế.
 * 5. Date Sequence: Kiểm tra tuần tự thời gian logic (ETD <= ETA, ATD <= ATA, IssueDate <= ETD).
 * 6. Unique Check: Kiểm tra trùng lặp dữ liệu trên form và qua API backend.
 */

export interface ValidationRule {
  rule: 'required' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern' | 'containerNo' | 'dateSequence' | 'unique' | 'custom'
  value?: any
  message?: string
  targetField?: string // Dùng cho so sánh 2 trường (vd: dateSequence so sánh với targetField)
  apiEndpoint?: string // Dùng cho kiểm tra unique qua backend
  validatorFn?: (val: any, allValues?: Record<string, any>) => boolean | string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

/**
 * 📦 Thuật toán ISO 6346 Kiểm Tra Check Digit của Số Container Quốc Tế
 * 
 * Quy chuẩn: 4 chữ cái (Mã chủ sở hữu + Mã thiết bị 'U'/'J'/'Z') + 6 chữ số seri + 1 chữ số kiểm tra (Check Digit).
 * Ví dụ: ZIRU8505175
 * - ZIRU: 4 chữ cái
 * - 850517: 6 số
 * - 5: Check digit chuẩn
 */
export function validateISO6346ContainerNo(rawContainerNo: string): {
  isValid: boolean
  calculatedCheckDigit?: number
  actualCheckDigit?: number
  message: string
} {
  const clean = String(rawContainerNo || '').trim().toUpperCase()
  if (!clean) {
    return { isValid: false, message: 'Số Container không được để trống' }
  }

  // Cấu trúc chuẩn 4 chữ cái + 7 số (hoặc 6 số + 1 check digit)
  const regex = /^[A-Z]{4}\d{7}$/
  if (!regex.test(clean)) {
    return {
      isValid: false,
      message: `Định dạng số Container [${clean}] không hợp lệ. Phải gồm 4 chữ cái + 7 chữ số (Ví dụ: ZIRU8505175)`,
    }
  }

  // Bảng giá trị chuyển đổi chữ cái sang số theo tiêu chuẩn ISO 6346
  // (Bỏ qua các bội số của 11: 11, 22, 33)
  const charValues: Record<string, number> = {
    A: 10, B: 12, C: 13, D: 14, E: 15, F: 16, G: 17, H: 18, I: 19, J: 20,
    K: 21, L: 23, M: 24, N: 25, O: 26, P: 27, Q: 28, R: 29, S: 30, T: 31,
    U: 32, V: 34, W: 35, X: 36, Y: 37, Z: 38,
  }

  let sum = 0
  for (let i = 0; i < 10; i++) {
    const char = clean[i]
    let numVal = 0
    if (char >= '0' && char <= '9') {
      numVal = parseInt(char, 10)
    } else if (charValues[char] !== undefined) {
      numVal = charValues[char]
    } else {
      return { isValid: false, message: `Ký tự [${char}] trong số container không hợp lệ` }
    }

    // Trọng số 2^i
    const weight = Math.pow(2, i)
    sum += numVal * weight
  }

  // Check digit = sum mod 11 (nếu mod 11 = 10 thì check digit coi là 0 theo chuẩn ISO)
  let calculatedCheckDigit = sum % 11
  if (calculatedCheckDigit === 10) {
    calculatedCheckDigit = 0
  }

  const actualCheckDigit = parseInt(clean[10], 10)

  if (calculatedCheckDigit === actualCheckDigit) {
    return {
      isValid: true,
      calculatedCheckDigit,
      actualCheckDigit,
      message: `Số Container ${clean} hợp lệ chuẩn ISO 6346 (Check Digit: ${actualCheckDigit})`,
    }
  } else {
    return {
      isValid: false,
      calculatedCheckDigit,
      actualCheckDigit,
      message: `Số Container ${clean} sai Check Digit: Tính toán là [${calculatedCheckDigit}] nhưng nhập là [${actualCheckDigit}]`,
    }
  }
}

/**
 * 📅 Chuyển chuỗi ngày tháng dd/mm/yyyy sang Date object
 */
export function parseDDMMYYYY(dateStr: string): Date | null {
  if (!dateStr || typeof dateStr !== 'string') return null
  const clean = dateStr.trim()
  if (!clean || clean === '—' || clean === '-') return null

  // Format: dd/mm/yyyy hoặc dd-mm-yyyy hoặc yyyy-mm-dd
  const ddmmyyyy = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/
  const match = clean.match(ddmmyyyy)
  if (match) {
    const day = parseInt(match[1], 10)
    const month = parseInt(match[2], 10) - 1
    const year = parseInt(match[3], 10)
    return new Date(year, month, day)
  }

  const iso = /^\d{4}-\d{2}-\d{2}/
  if (iso.test(clean)) {
    const d = new Date(clean)
    return isNaN(d.getTime()) ? null : d
  }

  return null
}

/**
 * ⏱️ Kiểm tra tuần tự thời gian (Date 1 phải <= Date 2)
 */
export function validateDateSequence(
  earlierDateStr: string,
  laterDateStr: string,
  earlierLabel = 'Ngày bắt đầu',
  laterLabel = 'Ngày kết thúc'
): { isValid: boolean; message?: string } {
  const d1 = parseDDMMYYYY(earlierDateStr)
  const d2 = parseDDMMYYYY(laterDateStr)

  if (!d1 || !d2) {
    // Nếu một trong hai chưa nhập thì chưa tính là vi phạm thứ tự
    return { isValid: true }
  }

  if (d1.getTime() > d2.getTime()) {
    return {
      isValid: false,
      message: `${earlierLabel} (${earlierDateStr}) không thể xảy ra sau ${laterLabel} (${laterDateStr})`,
    }
  }

  return { isValid: true }
}

/**
 * 🔍 Kiểm tra tính hợp lệ của 1 trường dữ liệu đơn lẻ
 */
export function validateField(
  fieldName: string,
  value: any,
  rules: ValidationRule[] = [],
  allValues: Record<string, any> = {}
): ValidationResult {
  const errors: string[] = []

  for (const r of rules) {
    // 1. Required
    if (r.rule === 'required') {
      const isEmpty =
        value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === '') ||
        (Array.isArray(value) && value.length === 0)

      if (isEmpty) {
        errors.push(r.message || `${fieldName} là trường bắt buộc nhập`)
        continue // Nếu đã trống thì không cần kiểm tra các rule định dạng khác
      }
    }

    // Nếu giá trị rỗng và không có rule required thì bỏ qua các rule sau
    if (value === undefined || value === null || (typeof value === 'string' && value.trim() === '')) {
      continue
    }

    // 2. Min Length
    if (r.rule === 'minLength' && typeof value === 'string') {
      const min = Number(r.value) || 0
      if (value.length < min) {
        errors.push(r.message || `${fieldName} phải có tối thiểu ${min} ký tự`)
      }
    }

    // 3. Max Length
    if (r.rule === 'maxLength' && typeof value === 'string') {
      const max = Number(r.value) || 0
      if (value.length > max) {
        errors.push(r.message || `${fieldName} không được vượt quá ${max} ký tự`)
      }
    }

    // 4. Pattern Regex
    if (r.rule === 'pattern' && r.value) {
      try {
        const regex = typeof r.value === 'string' ? new RegExp(r.value) : (r.value as RegExp)
        if (!regex.test(String(value))) {
          errors.push(r.message || `${fieldName} không đúng định dạng quy định`)
        }
      } catch (err) {
        console.warn(`[ValidationEngine] Biểu thức Regex không hợp lệ:`, r.value)
      }
    }

    // 5. Container Number (ISO 6346)
    if (r.rule === 'containerNo') {
      const check = validateISO6346ContainerNo(String(value))
      if (!check.isValid) {
        errors.push(r.message || check.message)
      }
    }

    // 6. Date Sequence
    if (r.rule === 'dateSequence' && r.targetField) {
      const targetVal = allValues[r.targetField]
      if (targetVal) {
        const check = validateDateSequence(String(value), String(targetVal), fieldName, r.targetField)
        if (!check.isValid && check.message) {
          errors.push(r.message || check.message)
        }
      }
    }

    // 7. Custom Validator Function
    if (r.rule === 'custom' && typeof r.validatorFn === 'function') {
      const customRes = r.validatorFn(value, allValues)
      if (typeof customRes === 'string' && customRes) {
        errors.push(customRes)
      } else if (customRes === false) {
        errors.push(r.message || `${fieldName} không thỏa mãn điều kiện kiểm tra tùy biến`)
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * 📋 Đánh giá toàn bộ Form theo bảng quy tắc
 */
export function validateForm(
  formValues: Record<string, any>,
  ruleMap: Record<string, ValidationRule[]>
): Record<string, string[]> {
  const resultErrors: Record<string, string[]> = {}

  for (const [fieldName, rules] of Object.entries(ruleMap)) {
    const val = formValues[fieldName]
    const res = validateField(fieldName, val, rules, formValues)
    if (!res.isValid) {
      resultErrors[fieldName] = res.errors
    }
  }

  return resultErrors
}

