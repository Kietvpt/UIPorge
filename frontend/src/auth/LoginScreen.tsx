import React, { useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { loginApi } from '@/api/authApi'
import { Database, Loader2, Lock, LogIn, User } from 'lucide-react'

export const LoginScreen: React.FC = () => {
  const setAuth = useAuthStore((s) => s.setAuth)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [branch, setBranch] = useState('BetaV1')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isLoading) return
    setIsLoading(true)
    setError(null)
    try {
      const res = await loginApi({ username: username.trim(), password, branch: branch.trim() })
      setAuth({ token: res.token, branch: res.branch, user: res.user })
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Đăng nhập thất bại. Kiểm tra lại thông tin hoặc kết nối server.'
      setError(msg)
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    'w-full pl-9 pr-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950 select-none">
      <div className="w-[380px] rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-2xl shadow-blue-950/30 p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-7">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/25 mb-3">
            UF
          </div>
          <h1 className="text-lg font-extrabold tracking-wide text-white">UIForge</h1>
          <p className="text-xs text-slate-400 mt-0.5">Đăng nhập để vào Web App Visual Framework</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tên đăng nhập"
              required
              autoFocus
              className={inputClass}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              required
              className={inputClass}
            />
          </div>

          {/* Branch */}
          <div className="relative">
            <Database className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="Branch (mặc định: BetaV1)"
              className={inputClass}
            />
          </div>
          <p className="text-[10px] text-slate-500 -mt-2.5 leading-snug">
            Branch là hậu tố của database — vd <span className="text-slate-300 font-mono">BetaV1</span> kết
            nối <span className="text-slate-300 font-mono">UIPorge_BetaV1</span>,{' '}
            <span className="text-slate-300 font-mono">BetaV2</span> kết nối{' '}
            <span className="text-slate-300 font-mono">UIPorge_BetaV2</span>.
          </p>

          {/* Error */}
          {error && (
            <div className="text-xs text-red-300 bg-red-950/50 border border-red-800/60 rounded-lg px-3 py-2.5">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-600/25 transition-all cursor-pointer disabled:opacity-60"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
            <span>{isLoading ? 'Đang kết nối...' : 'Đăng nhập'}</span>
          </button>
        </form>

        {/* Hint tài khoản mặc định */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-400 mb-1">Tài khoản mặc định:</p>
          <p>
            <span className="font-mono text-slate-300">admin / admin123</span> — Dev (được chỉnh sửa)
          </p>
          <p>
            <span className="font-mono text-slate-300">viewer / viewer123</span> — User (chỉ xem)
          </p>
        </div>
      </div>
    </div>
  )
}
