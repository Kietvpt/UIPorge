/**
 * UIForge PermissionGuard (PermissionGuard.tsx)
 * 
 * Kế thừa SecurityBL.cs & PolicyEditorBL.cs từ C# Core:
 * - Bảo vệ component đa tầng (Feature, Container, Component, Field).
 * - Cung cấp PermissionContext (useComponentPermission) cho các component con (FormFieldWrapper, v.v.).
 * - KHÔNG sinh thêm bất kỳ thẻ wrapper <div> nào làm phá vỡ CSS Grid 12-cột hay Flexbox!
 * - Ở chế độ chạy thực tế (Runtime / Preview):
 *   + Nếu không có CanRead: Ẩn hoàn toàn component khỏi DOM (return null).
 *   + Nếu là nút Xóa và không có CanDelete: Ẩn (return null).
 *   + Nếu là nút Hủy và không có CanDeactivate: Ẩn (return null).
 *   + Nếu là Read-only / Highlight Editable: truyền cờ qua PermissionContext cho FormFieldWrapper.
 */

import React, { createContext, useContext } from 'react'
import type { ComponentNode } from '@/types/schema'
import { useEditorStore } from '@/store/editorStore'
import { usePermissionEngine, ComponentPermissionEvaluation } from '@/core/engines/permissionEngine'

export interface ComponentPermissionContextValue extends Partial<ComponentPermissionEvaluation> {
  isReadOnly?: boolean
  shouldHighlightEditable?: boolean
  canRead?: boolean
  canWrite?: boolean
  canWriteAll?: boolean
  canDelete?: boolean
  canDeactivate?: boolean
  hasRules?: boolean
}

export const PermissionContext = createContext<ComponentPermissionContextValue | null>(null)

export const useComponentPermission = () => useContext(PermissionContext)

interface PermissionGuardProps {
  node: ComponentNode
  isEditing?: boolean
  ancestors?: ComponentNode[]
  children: React.ReactNode
}

export const PermissionGuard: React.FC<PermissionGuardProps> = ({
  node,
  isEditing = false,
  ancestors = [],
  children,
}) => {
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const evaluateComponentPermission = usePermissionEngine((s) => s.evaluateComponentPermission)

  // 1. Chế độ thiết kế (Design Mode): Luôn hiển thị
  if (isEditing) {
    const hasRules = Boolean(
      (node.permissions?.rules && node.permissions.rules.length > 0) ||
      (node.props as any)?.permissions?.rules?.length ||
      node.permissions?.allowedRoles?.length ||
      node.permissions?.readOnlyRoles?.length
    )

    return (
      <PermissionContext.Provider
        value={{
          canRead: true,
          canWrite: true,
          canWriteAll: true,
          canDelete: true,
          canDeactivate: true,
          isReadOnly: false,
          shouldHighlightEditable: false,
          hasRules,
        }}
      >
        {children}
      </PermissionContext.Provider>
    )
  }

  // 2. Chế độ Runtime / Preview: Tính toán quyền thực tế
  const perm = evaluateComponentPermission(activeFeatureId, node, ancestors)

  // Quyền Đọc (CanRead) - Ẩn hoàn toàn khỏi DOM nếu không có quyền đọc
  if (!perm.canRead) {
    return null
  }

  // Kiểm tra nút Xóa (CanDelete)
  const isDeleteButton =
    node.type === 'Button' &&
    (/delete|xóa|remove/i.test(String(node.props?.text || '')) ||
      /trash|delete/i.test(String(node.props?.icon || '')) ||
      node.props?.variant === 'danger')
  if (isDeleteButton && !perm.canDelete) {
    return null
  }

  // Kiểm tra nút Hủy (CanDeactivate)
  const isDeactivateButton =
    node.type === 'Button' &&
    (/deactivate|ngưng|hủy bỏ/i.test(String(node.props?.text || '')))
  if (isDeactivateButton && !perm.canDeactivate) {
    return null
  }

  // Quyền Cập nhật (CanWrite / CanWriteAll)
  const isReadOnly = !perm.canWrite && !perm.canWriteAll

  return (
    <PermissionContext.Provider
      value={{
        ...perm,
        isReadOnly,
        shouldHighlightEditable: Boolean(perm.shouldHighlightEditable),
      }}
    >
      {children}
    </PermissionContext.Provider>
  )
}
