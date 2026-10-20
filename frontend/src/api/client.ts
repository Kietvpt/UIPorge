import axios from 'axios'
import { useAuthStore } from '@/store/authStore'

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

// Token hết hạn / không hợp lệ -> tự đăng xuất về màn hình login
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      useAuthStore.getState().logout()
    }
    return Promise.reject(err)
  }
)
