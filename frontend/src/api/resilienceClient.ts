/**
 * UIForge Resilience Network Engine (resilienceClient.ts)
 * 
 * Kế thừa phát minh BadGatewayQueue.cs từ C# Core:
 * - Bảo vệ dữ liệu biểu mẫu & cấu hình không bao giờ bị mất khi mạng chập chờn, mất kết nối,
 *   hoặc máy chủ trả về mã lỗi 502 Bad Gateway / 503 Service Unavailable / 504 Gateway Timeout.
 * - Tự động lưu các lệnh thay đổi (POST, PUT, DELETE) vào LocalStorage an toàn (FIFO).
 * - Tự động phát lại (Replay) và đồng bộ lên máy chủ ngay khi có kết nối trở lại.
 */

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface QueuedMutation {
  id: string
  url: string
  method: string
  data?: any
  headers?: Record<string, string>
  timestamp: string
  retryCount: number
  description: string
}

const STORAGE_KEY = 'uiforge_resilience_queue_v1'
let isReplaying = false
let isInitialized = false

/** Lấy danh sách hàng đợi từ LocalStorage */
export function getQueuedMutations(): QueuedMutation[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

/** Lưu danh sách hàng đợi vào LocalStorage */
function saveQueuedMutations(queue: QueuedMutation[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(queue))
    // Cập nhật số lượng hiển thị trên UI hoặc console
    console.log(`[ResilienceQueue] Hiện có ${queue.length} tác vụ đang chờ đồng bộ an toàn`)
  } catch {}
}

/** Thêm một mutation vào hàng đợi */
export function enqueueMutation(config: AxiosRequestConfig, description?: string): QueuedMutation {
  const queue = getQueuedMutations()
  const item: QueuedMutation = {
    id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    url: config.url || '',
    method: (config.method || 'POST').toUpperCase(),
    data: config.data,
    headers: {
      'Content-Type': 'application/json',
    },
    timestamp: new Date().toISOString(),
    retryCount: 0,
    description: description || `Thao tác ${config.method?.toUpperCase()} trên ${config.url}`,
  }

  queue.push(item)
  saveQueuedMutations(queue)
  showResilienceToast(
    '🛡️ Đã lưu vào Hàng Đợi Bền Bỉ (Resilience Queue)',
    `Mạng gián đoạn hoặc máy chủ phản hồi 502/503. Thao tác "${item.description}" được bảo toàn an toàn và sẽ tự động đồng bộ khi kết nối phục hồi.`,
    'warning'
  )
  return item
}

/** Xóa một tác vụ khỏi hàng đợi theo id */
export function dequeueMutation(id: string) {
  const queue = getQueuedMutations().filter((i) => i.id !== id)
  saveQueuedMutations(queue)
}

/** Hiển thị Toast thông báo trạng thái đồng bộ bền bỉ */
export function showResilienceToast(title: string, message: string, type: 'info' | 'warning' | 'success' = 'info') {
  if (typeof document === 'undefined') return

  const notif = document.createElement('div')
  notif.className = `fixed top-6 right-6 z-[9999] max-w-md px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-300 ${
    type === 'warning'
      ? 'bg-amber-950/90 border-amber-600/50 text-amber-100 shadow-amber-900/30'
      : type === 'success'
      ? 'bg-emerald-950/90 border-emerald-600/50 text-emerald-100 shadow-emerald-900/30'
      : 'bg-blue-950/90 border-blue-600/50 text-blue-100 shadow-blue-900/30'
  }`

  notif.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="mt-0.5 text-lg">
        ${type === 'warning' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}
      </div>
      <div class="flex-1 text-xs">
        <div class="font-bold text-sm mb-1">${title}</div>
        <div class="opacity-90 leading-relaxed">${message}</div>
      </div>
    </div>
  `

  document.body.appendChild(notif)
  setTimeout(() => {
    notif.classList.add('opacity-0', 'transition-opacity', 'duration-300')
    setTimeout(() => notif.remove(), 300)
  }, 4500)
}

/**
 * Phát lại (Replay) toàn bộ các mutation trong hàng đợi
 */
export async function replayResilienceQueue(client: AxiosInstance) {
  if (isReplaying) return
  const queue = getQueuedMutations()
  if (queue.length === 0) return

  isReplaying = true
  console.log(`[ResilienceQueue] Bắt đầu tự động đồng bộ ${queue.length} tác vụ đang chờ...`)

  let successCount = 0
  const remaining: QueuedMutation[] = []

  for (const item of queue) {
    try {
      await client.request({
        url: item.url,
        method: item.method,
        data: item.data,
      })
      successCount++
      console.log(`[ResilienceQueue] Đồng bộ thành công: ${item.description}`)
    } catch (err: any) {
      item.retryCount = (item.retryCount || 0) + 1
      console.warn(`[ResilienceQueue] Lỗi khi đồng bộ lại ${item.description} (lần thử ${item.retryCount}):`, err?.message)
      // Nếu lỗi do dữ liệu 4xx không thể sửa, bỏ qua; nếu lỗi 5xx hoặc mạng thì tiếp tục giữ lại
      if (err?.response?.status >= 400 && err?.response?.status < 500) {
        // Bad request, không giữ lại
      } else {
        remaining.push(item)
      }
    }
  }

  saveQueuedMutations(remaining)
  isReplaying = false

  if (successCount > 0) {
    showResilienceToast(
      '✨ Đồng Bộ Tự Động Hoàn Tất',
      `Đã phát lại và ghi nhận thành công ${successCount} thao tác vào cơ sở dữ liệu sau khi kết nối phục hồi!`,
      'success'
    )
  }
}

/** Kiểm tra xem lỗi có thuộc loại gián đoạn mạng hoặc 502/503/504 Bad Gateway không */
export function isResilienceEligibleError(error: any): boolean {
  if (!error) return false
  // 1. Offline trình duyệt
  if (typeof navigator !== 'undefined' && !navigator.onLine) return true
  // 2. Không có response (Network Error / CORS / Connection refused)
  if (!error.response && (error.code === 'ERR_NETWORK' || error.message?.includes('Network Error'))) return true
  // 3. Mã lỗi máy chủ Bad Gateway hoặc Service Unavailable
  const status = error.response?.status
  return status === 502 || status === 503 || status === 504
}

/** Khởi tạo bộ lắng nghe tự động cho Resilience Queue */
export function initResilienceQueueListener(client: AxiosInstance) {
  if (isInitialized || typeof window === 'undefined') return
  isInitialized = true

  // Khi trình duyệt có mạng trở lại -> tự động replay
  window.addEventListener('online', () => {
    console.log('[ResilienceQueue] Kết nối Internet đã được phục hồi. Kích hoạt replay...')
    replayResilienceQueue(client)
  })

  // Định kỳ mỗi 20 giây kiểm tra nếu có hàng đợi còn tồn đọng và có mạng
  setInterval(() => {
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      const queue = getQueuedMutations()
      if (queue.length > 0 && !isReplaying) {
        replayResilienceQueue(client)
      }
    }
  }, 20000)

  // Khởi động kiểm tra ngay khi mở ứng dụng
  setTimeout(() => {
    const queue = getQueuedMutations()
    if (queue.length > 0) {
      console.log(`[ResilienceQueue] Phát hiện ${queue.length} tác vụ chưa hoàn tất từ phiên trước.`)
      replayResilienceQueue(client)
    }
  }, 3000)
}

