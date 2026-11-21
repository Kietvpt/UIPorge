/**
 * 🌐 UIForge Core Configuration & Endpoint Resolver
 * Quản lý cấu hình tập trung cho toàn bộ hệ thống UIForge (Frontend & Core Engines).
 * Hỗ trợ linh hoạt: Runtime Override -> window.__UIFORGE_API_URL__ -> import.meta.env.VITE_API_URL -> Fallback.
 */

declare global {
  interface Window {
    __UIFORGE_API_URL__?: string
  }
}

let runtimeApiBaseUrl: string | null = null

/**
 * 🛠️ Chuẩn hóa URL máy chủ Backend:
 * - Loại bỏ khoảng trắng
 * - Loại bỏ dấu gạch chéo cuối trang (trailing slash)
 * - Loại bỏ đuôi '/api' nếu người dùng nhập sẵn '/api' để đảm bảo root host thống nhất
 */
export function normalizeApiUrl(rawUrl?: string | null): string {
  if (!rawUrl || typeof rawUrl !== 'string') return ''
  let clean = rawUrl.trim()
  clean = clean.replace(/\/+$/, '')
  if (clean.toLowerCase().endsWith('/api')) {
    clean = clean.slice(0, -4).replace(/\/+$/, '')
  }
  return clean
}

/**
 * ⚡ Thiết lập URL Backend API tại Runtime (ví dụ từ Client App Template khi khởi động)
 * @param url URL của backend (ví dụ: 'https://api.uiforge.com' hoặc 'http://localhost:5048')
 */
export function setApiBaseUrl(url: string): void {
  runtimeApiBaseUrl = normalizeApiUrl(url)
}

/**
 * 🎯 Lấy URL Root của Backend Server (không có đuôi '/api'):
 * Ví dụ: 'http://localhost:5048' hoặc 'https://api.yourdomain.com'
 */
export function getApiBaseUrl(): string {
  if (runtimeApiBaseUrl) {
    return runtimeApiBaseUrl
  }

  if (typeof window !== 'undefined' && window.__UIFORGE_API_URL__) {
    return normalizeApiUrl(window.__UIFORGE_API_URL__)
  }

  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) {
    return normalizeApiUrl(import.meta.env.VITE_API_URL)
  }

  return 'http://localhost:5048'
}

/**
 * 🚀 Lấy URL API đầy đủ (có kèm '/api'):
 * Ví dụ: 'http://localhost:5048/api' hoặc 'https://api.yourdomain.com/api'
 */
export function getApiUrl(): string {
  return `${getApiBaseUrl()}/api`
}
