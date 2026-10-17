import { apiClient } from './client'
import type { AuthUser } from '@/store/authStore'

export interface LoginRequest {
  username: string
  password: string
  /** Hậu tố tên DB: BetaV1 -> UIPorge_BetaV1. Trống = mặc định BetaV1 */
  branch?: string
}

export interface LoginResponse {
  token: string
  expiresAt: string
  branch: string
  user: AuthUser
}

export async function loginApi(req: LoginRequest): Promise<LoginResponse> {
  const { data } = await apiClient.post<LoginResponse>('/auth/login', req)
  return data
}
