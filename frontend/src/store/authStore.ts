import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AuthUser {
  id: string
  username: string
  fullName?: string
  /** "Dev" = được chỉnh sửa giao diện, "User" = chỉ xem */
  role: 'Dev' | 'User'
}

interface AuthState {
  token: string | null
  /** Branch database đang kết nối (BetaV1, BetaV2...) */
  branch: string | null
  user: AuthUser | null

  setAuth: (payload: { token: string; branch: string; user: AuthUser }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      branch: null,
      user: null,

      setAuth: ({ token, branch, user }) => set({ token, branch, user }),
      logout: () => set({ token: null, branch: null, user: null }),
    }),
    { name: 'uiforge-auth' }
  )
)
