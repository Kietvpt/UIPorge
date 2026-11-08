import axios from 'axios'
import { useAuthStore } from '@/store/authStore'
import {
  enqueueMutation,
  initResilienceQueueListener,
  isResilienceEligibleError,
} from './resilienceClient'

// Backend API URL:
// - Mặc định local dev kết nối backend HTTPS: https://localhost:7057/api
// - Khi deploy môi trường khác (staging/production): cấu hình biến môi trường VITE_API_URL
const apiBaseUrl = import.meta.env.VITE_API_URL || 'https://localhost:7057/api'

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 15000,
})

// Tự động gắn JWT vào mọi request
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Tự động phát hiện lỗi mất mạng hoặc 502/503/504 để bảo vệ dữ liệu bằng Resilience Queue
apiClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err?.response?.status === 401) {
      useAuthStore.getState().logout()
      return Promise.reject(err)
    }

    const method = (err?.config?.method || '').toUpperCase()
    const isMutation = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)

    if (isMutation && isResilienceEligibleError(err)) {
      const description = err?.config?.url?.includes('/pages/save')
        ? 'Lưu cấu hình trang (UI Forge Page)'
        : `Thao tác ${method} [${err?.config?.url}]`

      enqueueMutation(err.config, description)

      // Trả về optimistic synthetic response để UI tiếp tục hoạt động mượt mà không crash
      return Promise.resolve({
        data: {
          success: true,
          isQueued: true,
          message: 'Dữ liệu đã được lưu an toàn trong Hàng Đợi Bền Bỉ (Resilience Queue).',
        },
        status: 202,
        statusText: 'Accepted into Resilience Queue',
        headers: {},
        config: err.config,
      })
    }

    return Promise.reject(err)
  }
)

// Khởi chạy bộ lắng nghe phục hồi mạng và tự động đồng bộ (Kế thừa BadGatewayQueue.cs)
initResilienceQueueListener(apiClient)
