import type { ComponentEvent } from '@/types/schema'
import * as customerBL from './customerManagement.bl'
import * as dashboardBL from './dashboard.bl'

const BL_MODULES: Record<string, Record<string, any>> = {
  'customerManagement.bl.ts': customerBL,
  'dashboard.bl.ts': dashboardBL,
}

/**
 * Executes bound events at runtime (in Preview mode).
 * Calls the actual exported TypeScript function if available.
 */
export function triggerComponentEvent(
  events: ComponentEvent[] | undefined,
  triggerType: string,
  componentName?: string,
  blFileName?: string
) {
  if (!events || events.length === 0) return

  const matched = events.filter(
    (e) => e.trigger === triggerType || (triggerType === 'click' && e.trigger === 'onClick')
  )

  for (const ev of matched) {
    const fnName = ev.handlerName || ev.action || 'unnamedHandler'

    // Try executing the actual function from the BL module
    let executedRealFunction = false
    if (blFileName && BL_MODULES[blFileName]) {
      const fn = BL_MODULES[blFileName][fnName]
      if (typeof fn === 'function') {
        try {
          fn()
          executedRealFunction = true
        } catch (err) {
          console.error(`[UIForge BL Error] Lỗi khi thực thi ${fnName}() trong ${blFileName}:`, err)
        }
      }
    }

    console.log(
      `%c[UIForge BL Execution] %c${componentName || 'Component'} -> Event: ${triggerType} -> ${
        executedRealFunction ? 'Chạy hàm mã nguồn thật' : 'Gọi hàm mô phỏng'
      }: %c${fnName}()%c trong file %c${blFileName || 'BL'}`,
      'color: #38bdf8; font-weight: bold;',
      'color: #94a3b8;',
      'color: #4ade80; font-weight: bold;',
      'color: #94a3b8;',
      'color: #fbbf24; font-mono;'
    )

    // Visual feedback in UI
    const notif = document.createElement('div')
    notif.className =
      'fixed bottom-6 right-6 z-50 bg-slate-900 border border-blue-500 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-blue-500/30 text-xs flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200'
    notif.innerHTML = `
      <div class="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">⚡</div>
      <div>
        <div class="font-bold text-blue-300">Đã gọi hàm BL: <span class="font-mono text-cyan-300">${fnName}()</span></div>
        <div class="text-[10px] text-slate-400 mt-0.5">
          Sự kiện: <span class="font-mono text-amber-400">${triggerType}</span> | File: <span class="font-mono text-emerald-400">${blFileName || 'Chưa gắn file'}</span>
        </div>
      </div>
    `
    document.body.appendChild(notif)
    setTimeout(() => {
      notif.classList.add('opacity-0', 'transition-opacity', 'duration-300')
      setTimeout(() => notif.remove(), 300)
    }, 2800)
  }
}
