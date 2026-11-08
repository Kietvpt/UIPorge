/**
 * UIForge PermissionGuard (PermissionGuard.tsx)
 * 
 * Kế thừa SecurityBL.cs & PolicyEditorBL.cs từ C# Core:
 * - Bảo vệ component theo vai trò người dùng (Role-Based Access Control - RBAC).
 * - Ở chế độ thiết kế (isEditing): Luôn hiển thị component kèm huy hiệu phân quyền nhỏ
 *   để nhà phát triển vẫn có thể chỉnh sửa và cấu hình.
 * - Ở chế độ chạy thực tế (Runtime / Preview):
 *   + Nếu vai trò không nằm trong `allowedRoles`: Ẩn hoàn toàn hoặc Vô hiệu hóa (chuyển sang disabled) tùy cấu hình.
 *   + Nếu vai trò nằm trong `readOnlyRoles`: Chuyển ô nhập liệu hoặc nút bấm sang chỉ đọc (Read-only / Disabled).
 */

import React from 'react'
import type { ComponentNode } from '@/types/schema'
import { useAuthStore } from '@/store/authStore'

interface PermissionGuardProps {
  node: ComponentNode
  isEditing?: boolean
  children: React.ReactNode
}

export const PermissionGuard: React.FC<PermissionGuardProps> = ({ node, isEditing, children }) => {
  const user = useAuthStore((s) => s.user)
  const userRole = user?.role || 'User'
  const perms = node.permissions

  // Nếu không cấu hình phân quyền hoặc đang ở chế độ chỉnh sửa (Design Mode)
  if (!perms || (!perms.allowedRoles?.length && !perms.readOnlyRoles?.length)) {
    return <>{children}</>
  }

  // 1. Chế độ thiết kế: Luôn hiển thị, nhưng gắn watermark/badge nếu có hạn chế quyền
  if (isEditing) {
    const hasRestrictions = Boolean(perms.allowedRoles?.length || perms.readOnlyRoles?.length)
    if (!hasRestrictions) return <>{children}</>

    return (
      <div className="relative group/perm w-full">
        {children}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/perm:opacity-100 transition-opacity z-20 pointer-events-none">
          <span className="bg-amber-600/90 text-white text-[9px] font-mono px-1.5 py-0.5 rounded shadow">
            🔒 {perms.allowedRoles?.join(',') || 'RBAC'}
          </span>
        </div>
      </div>
    )
  }

  // 2. Chế độ Preview / Runtime: Kiểm tra quyền truy cập theo vai trò
  const allowed = perms.allowedRoles
  const readOnly = perms.readOnlyRoles
  const behavior = perms.deniedBehavior || 'hide'

  // Kiểm tra quyền truy cập (allowedRoles)
  if (allowed && allowed.length > 0) {
    const isAllowed = allowed.some((r) => r.toLowerCase() === userRole.toLowerCase())
    if (!isAllowed) {
      if (behavior === 'disable') {
        // Render ở trạng thái vô hiệu hóa
        return (
          <div className="opacity-50 pointer-events-none cursor-not-allowed select-none filter grayscale">
            {children}
          </div>
        )
      }
      // Mặc định ẩn hoàn toàn component
      return null
    }
  }

  // Kiểm tra trạng thái chỉ đọc (readOnlyRoles)
  if (readOnly && readOnly.length > 0) {
    const isReadOnly = readOnly.some((r) => r.toLowerCase() === userRole.toLowerCase())
    if (isReadOnly) {
      return (
        <div className="opacity-75 pointer-events-none cursor-default">
          {children}
        </div>
      )
    }
  }

  return <>{children}</>
}

