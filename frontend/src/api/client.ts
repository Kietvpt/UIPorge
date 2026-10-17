import axios from 'axios'
import { useAuthStore } from '@/store/authStore'

// Axios instance dùng chung: baseURL /api (đi qua Vite proxy -> backend)
export const apiClient = axios.create({
  baseURL: '/api',
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
