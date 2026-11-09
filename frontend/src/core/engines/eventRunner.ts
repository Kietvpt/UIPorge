import type { ComponentEvent } from '@/types/schema'
import { registerBlFunctions } from './blRegistry'

// Map các module BL động được đăng ký vào ứng dụng
const BL_MODULES: Record<string, Record<string, any>> = {}

/**
 * 🔌 Đăng ký module Business Logic vào UIForge Event Engine.
 * Cho phép Host Application hoặc bất kỳ dự án ngoài nào cắm các file BL của riêng họ vào framework.
 */
export function registerBL(name: string, module: Record<string, any>) {
  BL_MODULES[name] = module
  const clean = name.trim().replace(/\\/g, '/').split('/').pop() || ''
  BL_MODULES[clean] = module
  const base = clean.toLowerCase().replace(/\.ts$/, '').replace(/\.bl$/, '')
  BL_MODULES[base] = module

  // Tự động bóc tách các hàm public để đăng ký vào blRegistry
  const fnNames: string[] = []
  for (const [k, v] of Object.entries(module)) {
    if (typeof v === 'function') {
      fnNames.push(k)
    } else if (v && typeof v === 'object') {
      for (const [subK, subV] of Object.entries(v)) {
        if (typeof subV === 'function') fnNames.push(subK)
      }
      const proto = Object.getPrototypeOf(v)
      if (proto && proto !== Object.prototype) {
        for (const prop of Object.getOwnPropertyNames(proto)) {
          if (prop !== 'constructor' && typeof v[prop] === 'function') {
            fnNames.push(prop)
          }
        }
      }
    }
  }
  if (fnNames.length > 0) {
    registerBlFunctions(clean, fnNames)
  }
}

/**
 * Chuẩn hóa tên file BL để tìm module tương ứng, không phân biệt hoa thường hoặc đuôi mở rộng
 */
export function resolveBlModule(rawFileName?: string): {
  module: Record<string, any> | null
  canonicalName: string
} {
  if (!rawFileName || !rawFileName.trim()) return { module: null, canonicalName: '' }
  const clean = rawFileName.trim().replace(/\\/g, '/').split('/').pop() || ''
  const lower = clean.toLowerCase()

  // 1. Direct match
  if (BL_MODULES[clean]) return { module: BL_MODULES[clean], canonicalName: clean }
  if (BL_MODULES[lower]) return { module: BL_MODULES[lower], canonicalName: clean }

  // 2. Base name match (bỏ đuôi .ts, .bl.ts)
  const base = lower.replace(/\.ts$/, '').replace(/\.bl$/, '')
  for (const [key, mod] of Object.entries(BL_MODULES)) {
    const keyBase = key.toLowerCase().replace(/\.ts$/, '').replace(/\.bl$/, '')
    if (keyBase === base) {
      return { module: mod, canonicalName: key }
    }
  }

  return { module: null, canonicalName: clean }
}

/**
 * Tìm hàm bên trong module BL, hỗ trợ:
 * 1. Hàm export trực tiếp ở top-level (Exact + Case-insensitive)
 * 2. Phương thức trong Singleton Instance hoặc Class Instance được export
 * 3. Phương thức trên Prototype của Class
 * 4. Tự động bind `this` vào instance để hàm chạy an toàn
 */
export function findFunctionInModule(
  moduleObj: Record<string, any>,
  rawFnName: string
): { fn: Function | null; matchedName: string } {
  if (!rawFnName || !rawFnName.trim()) return { fn: null, matchedName: '' }
  const cleanName = rawFnName.replace(/\(.*?\)/g, '').trim()
  const lower = cleanName.toLowerCase()

  // 1. Exact match trên top-level module exports
  if (typeof moduleObj[cleanName] === 'function') {
    return { fn: moduleObj[cleanName], matchedName: cleanName }
  }

  // 2. Case-insensitive match trên top-level module exports
  for (const [key, value] of Object.entries(moduleObj)) {
    if (key.toLowerCase() === lower && typeof value === 'function') {
      return { fn: value, matchedName: key }
    }
  }

  // 3. Tìm kiếm bên trong các Instance / Service Object được export
  for (const [modKey, modVal] of Object.entries(moduleObj)) {
    if (modVal && typeof modVal === 'object') {
      // 3a. Direct property on instance
      if (typeof modVal[cleanName] === 'function') {
        return { fn: modVal[cleanName].bind(modVal), matchedName: cleanName }
      }
      // 3b. Case-insensitive property on instance
      for (const [subKey, subVal] of Object.entries(modVal)) {
        if (subKey.toLowerCase() === lower && typeof subVal === 'function') {
          return { fn: (subVal as Function).bind(modVal), matchedName: subKey }
        }
      }
      // 3c. Prototype methods (các class ES6/TypeScript định nghĩa phương thức trên prototype)
      const proto = Object.getPrototypeOf(modVal)
      if (proto && proto !== Object.prototype) {
        for (const prop of Object.getOwnPropertyNames(proto)) {
          if (prop === 'constructor') continue
          if (typeof modVal[prop] === 'function') {
            if (prop === cleanName || prop.toLowerCase() === lower) {
              return { fn: modVal[prop].bind(modVal), matchedName: prop }
            }
          }
        }
      }
    } else if (typeof modVal === 'function') {
      const classFn = modVal as any
      if (typeof classFn.getInstance === 'function') {
        try {
          const instance = classFn.getInstance()
          if (instance && typeof instance[cleanName] === 'function') {
            return { fn: instance[cleanName].bind(instance), matchedName: cleanName }
          }
          if (instance) {
            const proto = Object.getPrototypeOf(instance)
            if (proto) {
              for (const prop of Object.getOwnPropertyNames(proto)) {
                if (prop === 'constructor') continue
                if (typeof instance[prop] === 'function' && (prop === cleanName || prop.toLowerCase() === lower)) {
                  return { fn: instance[prop].bind(instance), matchedName: prop }
                }
              }
            }
          }
        } catch {}
      }
      if (typeof classFn[cleanName] === 'function') {
        return { fn: classFn[cleanName].bind(classFn), matchedName: cleanName }
      }
    }
  }

  return { fn: null, matchedName: cleanName }
}

/**
 * Hiển thị toast thông báo trực quan trên màn hình khi một sự kiện được kích hoạt
 */
function showEventToast(
  fnName: string,
  triggerType: string,
  blFileName?: string,
  isReal = false,
  customMessage?: string,
  isSuccess = true
) {
  const notif = document.createElement('div')
  notif.className = `fixed bottom-6 right-6 z-50 bg-slate-900 border ${
    !isSuccess ? 'border-red-500 shadow-red-500/30' : isReal ? 'border-emerald-500 shadow-emerald-500/30' : 'border-blue-500 shadow-blue-500/30'
  } text-white px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-md`
  
  const icon = !isSuccess ? '⚠️' : isReal ? '⚡' : '⚙'
  const iconBg = !isSuccess ? 'bg-red-600/25 text-red-400' : isReal ? 'bg-emerald-600/25 text-emerald-400' : 'bg-blue-600/20 text-blue-400'
  const headerColor = !isSuccess ? 'text-red-300' : isReal ? 'text-emerald-300' : 'text-blue-300'

  notif.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${iconBg} flex items-center justify-center font-bold text-base flex-shrink-0">
      ${icon}
    </div>
    <div class="min-w-0">
      <div class="font-bold ${headerColor} flex items-center gap-1.5 flex-wrap">
        <span>${customMessage ? (isSuccess ? 'Thao tác thành công:' : 'Cảnh báo:') : isReal ? 'Đã gọi hàm BL:' : 'Mô phỏng sự kiện:'}</span>
        <span class="font-mono text-cyan-300 font-bold">${fnName}()</span>
      </div>
      ${
        customMessage
          ? `<div class="text-[11px] text-slate-200 mt-1 leading-relaxed">${customMessage}</div>`
          : `<div class="text-[10px] text-slate-400 mt-0.5">
               Sự kiện: <span class="font-mono text-amber-400">${triggerType}</span> | File: <span class="font-mono text-emerald-400">${blFileName || 'Chưa gắn file'}</span>
             </div>`
      }
    </div>
  `
  document.body.appendChild(notif)
  setTimeout(() => {
    notif.classList.add('opacity-0', 'transition-opacity', 'duration-300')
    setTimeout(() => notif.remove(), 300)
  }, 3800)
}

/**
 * Thực thi một sự kiện đơn lẻ (dùng cho cả Preview mode lẫn nút Chạy thử trong PropertyPanel)
 */
export function executeSingleEvent(
  ev: ComponentEvent,
  componentName?: string,
  blFileName?: string,
  context?: Record<string, any>
): boolean {
  const rawFnName = ev.handlerName || ev.action || 'unnamedHandler'
  const triggerType = ev.trigger || 'click'

  const { module: blModule, canonicalName } = resolveBlModule(blFileName)
  let executedRealFunction = false
  let matchedFnName = rawFnName.replace(/\(.*?\)/g, '').trim()

  if (blModule) {
    const { fn, matchedName } = findFunctionInModule(blModule, rawFnName)
    matchedFnName = matchedName
    if (fn) {
      try {
        const ret = fn(context || { componentName, trigger: triggerType, blFileName: canonicalName })
        executedRealFunction = true

        if (ret && typeof ret.then === 'function') {
          ret.then((asyncRes: any) => {
            if (asyncRes && asyncRes.message) {
              showEventToast(matchedFnName, triggerType, canonicalName || blFileName, true, asyncRes.message, asyncRes.success !== false)
            } else {
              showEventToast(matchedFnName, triggerType, canonicalName || blFileName, true)
            }
          }).catch((err: any) => {
            showEventToast(matchedFnName, triggerType, canonicalName || blFileName, true, String(err), false)
          })
          return true
        } else if (ret && ret.message) {
          showEventToast(matchedFnName, triggerType, canonicalName || blFileName, true, ret.message, ret.success !== false)
          return true
        }
      } catch (err) {
        console.error(`[UIForge BL Error] Lỗi khi thực thi ${matchedName}() trong ${canonicalName}:`, err)
      }
    }
  }

  console.log(
    `%c[UIForge BL Execution] %c${componentName || 'Component'} -> Event: ${triggerType} -> ${
      executedRealFunction ? 'Chạy hàm mã nguồn thật' : 'Hàm chưa có trong file BL'
    }: %c${matchedFnName}()%c trong file %c${canonicalName || blFileName || 'Chưa chọn file'}`,
    'color: #38bdf8; font-weight: bold;',
    'color: #94a3b8;',
    'color: #4ade80; font-weight: bold;',
    'color: #94a3b8;',
    'color: #fbbf24; font-mono;'
  )

  showEventToast(matchedFnName, triggerType, canonicalName || blFileName, executedRealFunction)
  return executedRealFunction
}

/**
 * Kích hoạt danh sách sự kiện gắn với component theo loại trigger (click, dblclick, change...)
 */
export function triggerComponentEvent(
  events: ComponentEvent[] | undefined,
  triggerType: string,
  componentName?: string,
  blFileName?: string,
  context?: Record<string, any>
) {
  if (!events || events.length === 0) return

  const matched = events.filter((e) => {
    if (e.trigger === triggerType) return true
    if (triggerType === 'click' && (e.trigger === 'onClick' || e.trigger === 'click')) return true
    if (triggerType === 'dblclick' && (e.trigger === 'onDoubleClick' || e.trigger === 'dblclick')) return true
    if (triggerType === 'change' && (e.trigger === 'onChange' || e.trigger === 'change')) return true
    if (triggerType === 'focus' && (e.trigger === 'onFocus' || e.trigger === 'focus')) return true
    if (triggerType === 'blur' && (e.trigger === 'onBlur' || e.trigger === 'blur')) return true
    return false
  })

  for (const ev of matched) {
    executeSingleEvent(ev, componentName, blFileName, context)
  }
}

