import type { ComponentEvent } from '@/types/schema'
import * as customerBL from './customerManagement.bl'
import * as dashboardBL from './dashboard.bl'

// Map các module BL tĩnh được import vào ứng dụng
const BL_MODULES: Record<string, Record<string, any>> = {
  'customerManagement.bl.ts': customerBL,
  'customerManagement.bl': customerBL,
  'customerManagement': customerBL,
  'dashboard.bl.ts': dashboardBL,
  'dashboard.bl': dashboardBL,
  'dashboard': dashboardBL,
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
 * Tìm hàm bên trong module BL, hỗ trợ không phân biệt hoa thường và tự loại bỏ dấu ngoặc đơn ()
 */
export function findFunctionInModule(
  moduleObj: Record<string, any>,
  rawFnName: string
): { fn: Function | null; matchedName: string } {
  if (!rawFnName || !rawFnName.trim()) return { fn: null, matchedName: '' }
  const cleanName = rawFnName.replace(/\(.*?\)/g, '').trim()

  // 1. Exact match
  if (typeof moduleObj[cleanName] === 'function') {
    return { fn: moduleObj[cleanName], matchedName: cleanName }
  }

  // 2. Case-insensitive match
  const lower = cleanName.toLowerCase()
  for (const [key, value] of Object.entries(moduleObj)) {
    if (key.toLowerCase() === lower && typeof value === 'function') {
      return { fn: value, matchedName: key }
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
  isReal = false
) {
  const notif = document.createElement('div')
  notif.className =
    'fixed bottom-6 right-6 z-50 bg-slate-900 border border-blue-500 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-blue-500/30 text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200'
  notif.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${
      isReal ? 'bg-emerald-600/25 text-emerald-400' : 'bg-blue-600/20 text-blue-400'
    } flex items-center justify-center font-bold text-base">
      ${isReal ? '⚡' : '⚙'}
    </div>
    <div>
      <div class="font-bold ${isReal ? 'text-emerald-300' : 'text-blue-300'} flex items-center gap-1.5">
        <span>${isReal ? 'Đã gọi hàm BL:' : 'Mô phỏng sự kiện:'}</span>
        <span class="font-mono text-cyan-300 font-bold">${fnName}()</span>
      </div>
      <div class="text-[10px] text-slate-400 mt-0.5">
        Sự kiện: <span class="font-mono text-amber-400">${triggerType}</span> | File: <span class="font-mono text-emerald-400">${
    blFileName || 'Chưa gắn file'
  }</span>
      </div>
    </div>
  `
  document.body.appendChild(notif)
  setTimeout(() => {
    notif.classList.add('opacity-0', 'transition-opacity', 'duration-300')
    setTimeout(() => notif.remove(), 300)
  }, 2800)
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
        fn(context || { componentName, trigger: triggerType, blFileName: canonicalName })
        executedRealFunction = true
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

