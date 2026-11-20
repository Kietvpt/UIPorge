import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Shield, User, Users, Check } from 'lucide-react'
import type { ComponentPolicyRule } from '@/types/schema'
import { usePermissionEngine, RoleItem, UserItem } from '@/core/engines/permissionEngine'
import { DynamicRoleManagerModal } from './DynamicRoleManagerModal'

export interface PolicyMatrixGridProps {
  title?: string
  rules: ComponentPolicyRule[]
  onChange: (updatedRules: ComponentPolicyRule[]) => void
  onPendingRuleChange?: (pendingRule: ComponentPolicyRule | null) => void
  pageId?: string | number
  nodeId?: string
  fieldName?: string
  isColumn?: boolean
}

export const PolicyMatrixGrid: React.FC<PolicyMatrixGridProps> = ({
  title,
  rules = [],
  onChange,
  onPendingRuleChange,
  pageId = '',
  nodeId = '',
  fieldName = '',
  isColumn = false,
}) => {
  const roles = usePermissionEngine((s) => s.roles)
  const users = usePermissionEngine((s) => s.users)
  const fetchMetadata = usePermissionEngine((s) => s.fetchSecurityMetadata)

  useEffect(() => {
    fetchMetadata()
  }, [fetchMetadata])

  // Tự động nạp danh sách rules từ DB khi mở component/column
  useEffect(() => {
    if (pageId && nodeId) {
      usePermissionEngine
        .getState()
        .fetchComponentPolicies(pageId, nodeId)
        .then((dbRules) => {
          if (dbRules && dbRules.length > 0) {
            onChange(dbRules)
          }
        })
        .catch(() => {})
    }
  }, [pageId, nodeId])

  // New Rule Form State (Row 0 / Quick Add)
  const [showRoleModal, setShowRoleModal] = useState(false)
  const [newTargetType, setNewTargetType] = useState<'role' | 'user'>('role')
  const [newRoleId, setNewRoleId] = useState<string>('')
  const [newUserId, setNewUserId] = useState<string>('')
  const [newCanRead, setNewCanRead] = useState(true)
  const [newCanWrite, setNewCanWrite] = useState(false)
  const [newCanWriteAll, setNewCanWriteAll] = useState(false)
  const [newCanDelete, setNewCanDelete] = useState(false)
  const [newCanDeactivate, setNewCanDeactivate] = useState(false)
  const [newActive, setNewActive] = useState(true)

  // Báo pendingRule lên parent khi người dùng chọn role/user ở Row 0 nhưng chưa bấm "+"
  useEffect(() => {
    if (!onPendingRuleChange) return

    const hasRole = Boolean(newRoleId && newRoleId.trim() !== '')
    const hasUser = Boolean(newUserId && newUserId.trim() !== '')

    if (!hasRole && !hasUser) {
      onPendingRuleChange(null)
      return
    }

    const selectedRole = roles.find((r) => String(r.id) === newRoleId || r.code === newRoleId)
    const selectedUser = users.find((u) => String(u.id) === newUserId || u.username === newUserId)

    const pending: ComponentPolicyRule = {
      id: `cpr_pending_${Date.now()}`,
      pageId,
      nodeId,
      fieldName,
      roleId: hasRole ? selectedRole?.id || (Number(newRoleId) || newRoleId) : null,
      roleCode: hasRole ? selectedRole?.code || newRoleId : undefined,
      roleName: hasRole ? selectedRole?.name || newRoleId : undefined,
      userId: hasUser ? selectedUser?.id || (Number(newUserId) || newUserId) : null,
      userName: hasUser ? selectedUser?.username || newUserId : undefined,
      canRead: newCanRead,
      canWrite: newCanWrite,
      canWriteAll: newCanWriteAll,
      canDelete: newCanDelete,
      canDeactivate: newCanDeactivate,
      active: newActive,
    }

    onPendingRuleChange(pending)
  }, [
    newRoleId,
    newUserId,
    newCanRead,
    newCanWrite,
    newCanWriteAll,
    newCanDelete,
    newCanDeactivate,
    newActive,
    roles,
    users,
    pageId,
    nodeId,
    fieldName,
    onPendingRuleChange,
  ])

  const handleAddRule = () => {
    if (newTargetType === 'role' && !newRoleId) return
    if (newTargetType === 'user' && !newUserId) return

    const selectedRole = roles.find((r) => String(r.id) === newRoleId || r.code === newRoleId)
    const selectedUser = users.find((u) => String(u.id) === newUserId || u.username === newUserId)

    const newRule: ComponentPolicyRule = {
      id: `cpr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`,
      pageId,
      nodeId,
      fieldName,
      roleId: newTargetType === 'role' ? selectedRole?.id || newRoleId : null,
      roleCode: newTargetType === 'role' ? selectedRole?.code || newRoleId : undefined,
      roleName: newTargetType === 'role' ? selectedRole?.name || newRoleId : undefined,
      userId: newTargetType === 'user' ? selectedUser?.id || newUserId : null,
      userName: newTargetType === 'user' ? selectedUser?.username || newUserId : undefined,
      canRead: newCanRead,
      canWrite: newCanWrite,
      canWriteAll: newCanWriteAll,
      canDelete: newCanDelete,
      canDeactivate: newCanDeactivate,
      active: newActive,
    }

    const nextRules = [...rules, newRule]
    onChange(nextRules)

    if (pageId && nodeId) {
      usePermissionEngine.getState().saveComponentPolicies(pageId, nodeId, nextRules, fieldName)
    }

    // Reset quick add inputs
    setNewRoleId('')
    setNewUserId('')
    setNewCanRead(true)
    setNewCanWrite(false)
    setNewCanWriteAll(false)
    setNewCanDelete(false)
    setNewCanDeactivate(false)
    setNewActive(true)
    if (onPendingRuleChange) onPendingRuleChange(null)
  }

  const handleToggle = (index: number, field: keyof ComponentPolicyRule) => {
    const updated = [...rules]
    const currentVal = Boolean(updated[index][field])
    updated[index] = { ...updated[index], [field]: !currentVal }
    onChange(updated)
    if (pageId && nodeId) {
      usePermissionEngine.getState().saveComponentPolicies(pageId, nodeId, updated, fieldName)
    }
  }

  const handleDelete = (index: number) => {
    const updated = rules.filter((_, i) => i !== index)
    onChange(updated)
    if (pageId && nodeId) {
      usePermissionEngine.getState().saveComponentPolicies(pageId, nodeId, updated, fieldName)
    }
  }

  return (
    <div className="space-y-3 bg-[#0a1120] border border-slate-800 rounded-xl p-4 text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-teal-400" />
          <span className="font-bold text-slate-100 uppercase tracking-wider">
            {title || (isColumn ? 'Phân Quyền Cột Lưới (GridPolicy)' : 'Phân Quyền Linh Kiện (Component Policy)')}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono">
            {rules.length} quy tắc
          </span>
          <button
            type="button"
            onClick={() => setShowRoleModal(true)}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 text-[11px] font-semibold transition-colors cursor-pointer ml-1"
            title="Quản lý và tạo vai trò động cho dự án"
          >
            <Users className="w-3 h-3 text-teal-400" />
            <span>+ Quản lý Vai trò (Roles)</span>
          </button>
        </div>
        <div className="text-[11px] text-slate-400">
          💡 Hỗ trợ cấp quyền <strong>Cập nhật toàn bộ (CanWriteAll)</strong> để sửa trên bản ghi do role khác tạo
        </div>
      </div>

      {/* GridView Table */}
      <div className="border border-slate-800 rounded-lg overflow-hidden bg-[#070d18]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#050912] border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
              <tr>
                <th className="py-2 px-3 w-10 text-center">#</th>
                <th className="py-2 px-3 min-w-[140px]">Người Dùng (User)</th>
                <th className="py-2 px-3 min-w-[160px]">Vai Trò (Role)</th>
                <th className="py-2 px-2 text-center w-24">Xem (Read)</th>
                <th className="py-2 px-2 text-center w-28">Cập Nhật (Write)</th>
                <th className="py-2 px-2 text-center w-36 text-amber-300">Cập Nhật Toàn Bộ</th>
                <th className="py-2 px-2 text-center w-24">Xóa</th>
                <th className="py-2 px-2 text-center w-24">Hủy</th>
                <th className="py-2 px-2 text-center w-20">Active</th>
                <th className="py-2 px-3 text-center w-14">Xóa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200 text-xs">
              {/* Row 0: Quick Add New Rule */}
              <tr className="bg-teal-950/20 border-b-2 border-teal-600/30">
                <td className="py-2 px-3 text-center text-teal-400 font-bold">
                  <Plus className="w-4 h-4 mx-auto" />
                </td>

                {/* User Selector */}
                <td className="py-2 px-3">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <select
                      value={newTargetType === 'user' ? newUserId : ''}
                      onChange={(e) => {
                        setNewTargetType('user')
                        setNewUserId(e.target.value)
                        setNewRoleId('')
                      }}
                      className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-mono"
                    >
                      <option value="">—</option>
                      {users.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.username}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                {/* Role Selector */}
                <td className="py-2 px-3">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <select
                      value={newTargetType === 'role' ? newRoleId : ''}
                      onChange={(e) => {
                        setNewTargetType('role')
                        setNewRoleId(e.target.value)
                        setNewUserId('')
                      }}
                      className="w-full px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-100 focus:outline-none focus:border-teal-500 cursor-pointer font-semibold"
                    >
                      <option value="">—</option>
                      {roles.map((r) => (
                        <option key={r.id} value={r.code}>
                          {r.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                {/* Checkboxes for Quick Add */}
                <td className="py-2 px-2 text-center">
                  <input
                    type="checkbox"
                    checked={newCanRead}
                    onChange={(e) => setNewCanRead(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                    title="Quyền Xem"
                  />
                </td>

                <td className="py-2 px-2 text-center">
                  <input
                    type="checkbox"
                    checked={newCanWrite}
                    onChange={(e) => setNewCanWrite(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                    title="Quyền Cập nhật bản ghi của mình"
                  />
                </td>

                <td className="py-2 px-2 text-center bg-amber-500/5">
                  <input
                    type="checkbox"
                    checked={newCanWriteAll}
                    onChange={(e) => setNewCanWriteAll(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                    title="CẬP NHẬT TOÀN BỘ (Sửa trên mọi bản ghi kể cả do role khác tạo)"
                  />
                </td>

                <td className="py-2 px-2 text-center">
                  <input
                    type="checkbox"
                    checked={newCanDelete}
                    onChange={(e) => setNewCanDelete(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                    title="Quyền Xóa"
                  />
                </td>

                <td className="py-2 px-2 text-center">
                  <input
                    type="checkbox"
                    checked={newCanDeactivate}
                    onChange={(e) => setNewCanDeactivate(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                    title="Quyền Hủy"
                  />
                </td>

                <td className="py-2 px-2 text-center">
                  <input
                    type="checkbox"
                    checked={newActive}
                    onChange={(e) => setNewActive(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                    title="Kích hoạt rule"
                  />
                </td>

                <td className="py-2 px-3 text-center">
                  <button
                    type="button"
                    onClick={handleAddRule}
                    disabled={!newRoleId && !newUserId}
                    className="px-2 py-1 rounded bg-teal-600 hover:bg-teal-500 disabled:opacity-30 disabled:cursor-not-allowed text-white text-[11px] font-bold transition-all shadow-sm cursor-pointer"
                    title="Thêm quy tắc mới"
                  >
                    + Thêm
                  </button>
                </td>
              </tr>

              {/* Data Rows */}
              {rules.length === 0 ? (
                <tr>
                  <td colSpan={10} className="py-8 text-center text-slate-500">
                    Chưa có quy tắc phân quyền riêng (Linh kiện sẽ thừa kế phân quyền từ Feature cha).
                  </td>
                </tr>
              ) : (
                rules.map((rule, idx) => {
                  const roleCode =
                    rule.roleCode ||
                    roles.find((r) => r.code === rule.roleCode || String(r.id) === String(rule.roleId))?.code ||
                    (rule.roleId ? String(rule.roleId) : '')

                  const userName =
                    rule.userName ||
                    users.find((u) => String(u.id) === String(rule.userId))?.username ||
                    (rule.userId ? String(rule.userId) : '')

                  return (
                    <tr
                      key={rule.id || idx}
                      className="hover:bg-slate-800/40 transition-colors border-b border-slate-800/50"
                    >
                      <td className="py-2 px-3 text-center font-mono text-slate-500 text-[11px]">
                        {idx + 1}
                      </td>

                      <td className="py-2 px-3 font-medium">
                        {rule.userId || rule.userName ? (
                          <span className="text-cyan-300 font-mono">{userName}</span>
                        ) : null}
                      </td>

                      <td className="py-2 px-3 font-medium">
                        {rule.roleCode || rule.roleId ? (
                          <span className="text-amber-300 font-semibold">{roleCode}</span>
                        ) : null}
                      </td>

                      <td className="py-2 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={Boolean(rule.canRead)}
                          onChange={() => handleToggle(idx, 'canRead')}
                          className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                        />
                      </td>

                      <td className="py-2 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={Boolean(rule.canWrite)}
                          onChange={() => handleToggle(idx, 'canWrite')}
                          className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                        />
                      </td>

                      <td className="py-2 px-2 text-center bg-amber-500/5">
                        <input
                          type="checkbox"
                          checked={Boolean(rule.canWriteAll)}
                          onChange={() => handleToggle(idx, 'canWriteAll')}
                          className="w-4 h-4 accent-amber-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                        />
                      </td>

                      <td className="py-2 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={Boolean(rule.canDelete)}
                          onChange={() => handleToggle(idx, 'canDelete')}
                          className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                        />
                      </td>

                      <td className="py-2 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={Boolean(rule.canDeactivate)}
                          onChange={() => handleToggle(idx, 'canDeactivate')}
                          className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                        />
                      </td>

                      <td className="py-2 px-2 text-center">
                        <input
                          type="checkbox"
                          checked={Boolean(rule.active)}
                          onChange={() => handleToggle(idx, 'active')}
                          className="w-4 h-4 accent-emerald-500 rounded bg-slate-900 border-slate-700 cursor-pointer"
                        />
                      </td>

                      <td className="py-2 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleDelete(idx)}
                          className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-500/20 transition-all cursor-pointer"
                          title="Xóa quy tắc này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Role Manager Modal */}
      <DynamicRoleManagerModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
      />
    </div>
  )
}
