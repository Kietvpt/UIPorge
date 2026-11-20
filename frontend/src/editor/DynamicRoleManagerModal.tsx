import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Shield, Plus, Trash2, X, CheckCircle2, AlertCircle, Lock } from 'lucide-react'
import { usePermissionEngine } from '@/core/engines/permissionEngine'

export interface DynamicRoleManagerModalProps {
  isOpen: boolean
  onClose: () => void
}

export const DynamicRoleManagerModal: React.FC<DynamicRoleManagerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const roles = usePermissionEngine((s) => s.roles)
  const createRole = usePermissionEngine((s) => s.createRole)
  const deleteRole = usePermissionEngine((s) => s.deleteRole)

  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deletingId, setDeletingId] = useState<number | string | null>(null)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  if (!isOpen) return null

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedCode = code.trim().toUpperCase()
    const trimmedName = name.trim()

    if (!trimmedCode) {
      setFeedback({ type: 'error', message: 'Vui lòng nhập Mã vai trò (Code)!' })
      return
    }

    if (roles.some((r) => r.code?.toUpperCase() === trimmedCode)) {
      setFeedback({ type: 'error', message: `Vai trò "${trimmedCode}" đã tồn tại trong hệ thống!` })
      return
    }

    setIsSubmitting(true)
    setFeedback(null)

    const success = await createRole(trimmedCode, trimmedName || trimmedCode, description)
    setIsSubmitting(false)

    if (success) {
      setFeedback({ type: 'success', message: `Đã tạo thành công vai trò "${trimmedCode}"!` })
      setCode('')
      setName('')
      setDescription('')
      setTimeout(() => setFeedback(null), 3000)
    } else {
      setFeedback({ type: 'error', message: 'Có lỗi xảy ra khi tạo vai trò, vui lòng thử lại.' })
    }
  }

  const handleDelete = async (roleId: number | string, roleCode: string) => {
    if (roleCode.toUpperCase() === 'DEV') {
      alert("Role 'Dev' là vai trò hệ thống bắt buộc của Core, không thể xóa.")
      return
    }

    if (!confirm(`Bạn có chắc chắn muốn xóa vai trò "${roleCode}"?`)) {
      return
    }

    setDeletingId(roleId)
    const success = await deleteRole(roleId)
    setDeletingId(null)

    if (success) {
      setFeedback({ type: 'success', message: `Đã xóa vai trò "${roleCode}".` })
      setTimeout(() => setFeedback(null), 3000)
    } else {
      setFeedback({ type: 'error', message: `Không thể xóa vai trò "${roleCode}".` })
    }
  }

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl rounded-2xl border border-emerald-500/40 bg-[#0c1427] shadow-2xl overflow-hidden flex flex-col text-slate-100 max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080e1c] border-b border-emerald-600/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wide">
                Quản Lý Vai Trò Động (Dynamic Roles)
              </h2>
              <p className="text-xs text-slate-400">
                Core chỉ bắt buộc duy nhất role <span className="text-emerald-400 font-mono font-bold">Dev</span>. Các vai trò nghiệp vụ khác có thể tự do thêm/xóa theo yêu cầu doanh nghiệp.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs flex-1">
          {feedback && (
            <div
              className={`p-3 rounded-xl border flex items-center gap-2 ${
                feedback.type === 'success'
                  ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
              }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              )}
              <span className="font-medium">{feedback.message}</span>
            </div>
          )}

          {/* Form Thêm Role Mới */}
          <form onSubmit={handleCreate} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
            <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm Vai Trò Mới</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 font-medium mb-1">
                  Mã Vai Trò (Code) <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: ACCOUNTANT, WAREHOUSE..."
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 font-medium mb-1">
                  Tên Hiển Thị (Name)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Kế toán, Quản lý kho..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 font-medium mb-1">
                Mô tả (Description)
              </label>
              <input
                type="text"
                placeholder="Ghi chú về phạm vi quyền hạn của vai trò này..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={isSubmitting || !code.trim()}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/40 transition-all disabled:opacity-50 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Đang tạo...' : '+ Tạo Role Mới'}</span>
              </button>
            </div>
          </form>

          {/* Danh Sách Các Vai Trò Hiện Tại */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider px-1">
              <span>Danh Sách Vai Trò ({roles.length})</span>
              <span className="text-slate-500 lowercase font-normal">Tự động đồng bộ với ma trận phân quyền</span>
            </div>

            <div className="border border-slate-800 rounded-xl overflow-hidden bg-[#070d18]">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#050912] border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-2.5 px-3">Mã Role (Code)</th>
                    <th className="py-2.5 px-3">Tên Hiển Thị (Name)</th>
                    <th className="py-2.5 px-3">Mô Tả</th>
                    <th className="py-2.5 px-3 text-center w-28">Trạng Thái</th>
                    <th className="py-2.5 px-3 text-center w-16">Xóa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200 text-xs">
                  {roles.map((r) => {
                    const isCoreDev = r.code?.toUpperCase() === 'DEV'
                    return (
                      <tr key={r.id || r.code} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-2.5 px-3 font-mono font-bold text-emerald-400">
                          {r.code}
                        </td>
                        <td className="py-2.5 px-3 font-medium">
                          {r.name || r.code}
                        </td>
                        <td className="py-2.5 px-3 text-slate-400 text-[11px] truncate max-w-[200px]" title={r.description}>
                          {r.description || '—'}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          {isCoreDev ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60 font-semibold text-[10px]">
                              <Lock className="w-2.5 h-2.5" /> Core Bắt Buộc
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 text-[10px]">
                              Dynamic Role
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          {isCoreDev ? (
                            <span className="text-slate-600 text-xs select-none" title="Role Core Dev không thể xóa">
                              🔒
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => handleDelete(r.id, r.code)}
                              disabled={deletingId === r.id}
                              className="p-1 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded transition-colors disabled:opacity-50"
                              title={`Xóa vai trò ${r.code}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                  {roles.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-slate-500">
                        Chưa có vai trò nào trong hệ thống.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-3 bg-[#080e1c] border-t border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
