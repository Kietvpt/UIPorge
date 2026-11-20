import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useAuthStore } from '@/store/authStore'
import { useEditorStore } from '@/store/editorStore'
import type {
  FeaturePage,
  ComponentNode,
  TableColumn,
  FeaturePolicyRule,
  ComponentPolicyRule,
} from '@/types/schema'
import { apiClient } from '@/api/client'

export interface RoleItem {
  id: number | string
  code: string
  name: string
  description?: string
}

export interface UserItem {
  id: number | string
  username: string
  fullName?: string
  roleId?: number | string
  roleCode?: string
}

export interface FeaturePermissionEvaluation {
  canRead: boolean
  canWrite: boolean
  canWriteAll: boolean
  canDelete: boolean
  canDeleteAll: boolean
  canDeactivate: boolean
  canShare: boolean
  isPartialEditMode: boolean
  isLockedUpdate: boolean
  isLockedDelete: boolean
}

export interface ComponentPermissionEvaluation {
  canRead: boolean
  canWrite: boolean
  canWriteAll: boolean
  canDelete: boolean
  canDeactivate: boolean
  shouldHighlightEditable: boolean
}

interface PermissionEngineStore {
  roles: RoleItem[]
  users: UserItem[]
  featurePolicies: Record<string, FeaturePolicyRule[]>
  componentPolicies: Record<string, ComponentPolicyRule[]> // key: `${pageId}_${nodeId}`
  previewRoleCode: string | null // null = dùng vai trò thật của tài khoản đang đăng nhập
  isLoaded: boolean

  // Actions
  setPreviewRole: (roleCode: string | null) => void
  setRoles: (roles: RoleItem[]) => void
  setUsers: (users: UserItem[]) => void
  setFeaturePolicies: (featureId: string | number, rules: FeaturePolicyRule[]) => void
  setComponentPolicies: (pageId: string | number, nodeId: string, rules: ComponentPolicyRule[]) => void
  fetchSecurityMetadata: () => Promise<void>
  fetchFeaturePolicies: (featureId: string | number) => Promise<FeaturePolicyRule[]>
  saveFeaturePolicies: (featureId: string | number, rules: FeaturePolicyRule[]) => Promise<void>
  fetchComponentPolicies: (pageId: string | number, nodeId?: string) => Promise<ComponentPolicyRule[]>
  saveComponentPolicies: (
    pageId: string | number,
    nodeId: string,
    rules: ComponentPolicyRule[],
    fieldName?: string
  ) => Promise<void>
  createRole: (code: string, name: string, description?: string) => Promise<boolean>
  deleteRole: (id: number | string) => Promise<boolean>

  // Resolution Methods
  getEffectiveRoleCode: () => string
  getEffectiveUser: () => { id: string | number; username: string; roleCode: string; isDev: boolean }
  evaluateFeaturePermission: (
    feature: FeaturePage | string | number,
    recordCreatedBy?: string,
    recordCreatedDate?: string | Date
  ) => FeaturePermissionEvaluation
  evaluateComponentPermission: (
    pageId: string | number,
    node: ComponentNode,
    ancestorNodes?: ComponentNode[],
    recordCreatedBy?: string
  ) => ComponentPermissionEvaluation
  evaluateColumnPermission: (
    pageId: string | number,
    tableNode: ComponentNode | null,
    column: TableColumn,
    ancestorNodes?: ComponentNode[],
    recordCreatedBy?: string
  ) => ComponentPermissionEvaluation
}

export const usePermissionEngine = create<PermissionEngineStore>()(
  persist(
    (set, get) => ({
      roles: [],
      users: [],
      featurePolicies: {},
      componentPolicies: {},
      previewRoleCode: null,
      isLoaded: false,

      setPreviewRole: (roleCode) => {
        set({ previewRoleCode: roleCode })
      },

      setRoles: (roles) => set({ roles }),
      setUsers: (users) => set({ users }),

      setFeaturePolicies: (featureId, rules) => {
        set((state) => ({
          featurePolicies: {
            ...state.featurePolicies,
            [String(featureId)]: rules,
          },
        }))
      },

      setComponentPolicies: (pageId, nodeId, rules) => {
        const key = `${pageId}_${nodeId}`
        set((state) => ({
          componentPolicies: {
            ...state.componentPolicies,
            [key]: rules,
          },
        }))
      },

      fetchSecurityMetadata: async () => {
        try {
          const [rolesRes, usersRes] = await Promise.all([
            apiClient.get<RoleItem[]>('/core/roles').catch(() => null),
            apiClient.get<UserItem[]>('/core/users').catch(() => null),
          ])

          if (rolesRes && Array.isArray(rolesRes.data)) {
            set({ roles: rolesRes.data })
          }
          if (usersRes && Array.isArray(usersRes.data)) {
            set({ users: usersRes.data })
          }
          set({ isLoaded: true })
        } catch {
          set({ isLoaded: true })
        }
      },

      fetchFeaturePolicies: async (featureId: string | number) => {
        try {
          const res = await apiClient.get<FeaturePolicyRule[]>(`/core/feature-policies/${featureId}`).catch(() => null)
          if (res && Array.isArray(res.data)) {
            const rules = res.data
            set((state) => ({
              featurePolicies: {
                ...state.featurePolicies,
                [String(featureId)]: rules,
              },
            }))
            return rules
          }
        } catch {}
        return get().featurePolicies[String(featureId)] || []
      },

      saveFeaturePolicies: async (featureId: string | number, rules: FeaturePolicyRule[]) => {
        try {
          const payload = {
            featureId: Number(featureId) || 0,
            policies: rules,
          }
          const res = await apiClient
            .put<FeaturePolicyRule[]>(`/core/feature-policies/${featureId}`, payload)
            .catch(async () => {
              return await apiClient
                .post<FeaturePolicyRule[]>(`/core/feature-policies/${featureId}`, payload)
                .catch(() => null)
            })

          if (res && Array.isArray(res.data)) {
            set((state) => ({
              featurePolicies: {
                ...state.featurePolicies,
                [String(featureId)]: res.data,
              },
            }))
            return
          }
        } catch {}

        await get()
          .fetchFeaturePolicies(featureId)
          .catch(() => {
            set((state) => ({
              featurePolicies: {
                ...state.featurePolicies,
                [String(featureId)]: rules,
              },
            }))
          })
      },

      fetchComponentPolicies: async (pageId: string | number, nodeId?: string) => {
        try {
          const url = nodeId
            ? `/core/component-policies?pageId=${pageId}&nodeId=${encodeURIComponent(nodeId)}`
            : `/core/component-policies?pageId=${pageId}`
          const res = await apiClient.get<ComponentPolicyRule[]>(url).catch(() => null)
          if (res && Array.isArray(res.data)) {
            const rules = res.data
            if (nodeId) {
              const key = `${pageId}_${nodeId}`
              set((state) => ({
                componentPolicies: {
                  ...state.componentPolicies,
                  [key]: rules,
                },
              }))
            } else {
              // Nạp toàn bộ policies của trang và lưu theo từng nodeId
              const newPolicies: Record<string, ComponentPolicyRule[]> = {}
              for (const rule of rules) {
                if (rule.nodeId) {
                  const key = `${pageId}_${rule.nodeId}`
                  if (!newPolicies[key]) newPolicies[key] = []
                  newPolicies[key].push(rule)
                }
              }
              set((state) => ({
                componentPolicies: {
                  ...state.componentPolicies,
                  ...newPolicies,
                },
              }))
            }
            return rules
          }
        } catch {}
        if (nodeId) {
          const key = `${pageId}_${nodeId}`
          return get().componentPolicies[key] || []
        }
        return []
      },

      saveComponentPolicies: async (
        pageId: string | number,
        nodeId: string,
        rules: ComponentPolicyRule[],
        fieldName?: string
      ) => {
        const key = `${pageId}_${nodeId}`
        const normalizedRules = rules.map((r) => ({
          ...r,
          pageId: Number(pageId),
          nodeId,
          fieldName: fieldName || r.fieldName || nodeId,
          roleId: typeof r.roleId === 'number' ? r.roleId : null,
          roleCode: r.roleCode || (typeof r.roleId === 'string' ? r.roleId : undefined),
          userId: typeof r.userId === 'number' ? r.userId : null,
          userName: r.userName || (typeof r.userId === 'string' ? r.userId : undefined),
        }))

        try {
          const payload = {
            pageId: Number(pageId),
            nodeId,
            fieldName: fieldName || nodeId,
            policies: normalizedRules,
          }
          const res = await apiClient
            .put<ComponentPolicyRule[]>('/core/component-policies', payload)
            .catch(async () => {
              return await apiClient
                .post<ComponentPolicyRule[]>('/core/component-policies', payload)
                .catch(() => null)
            })

          if (res && Array.isArray(res.data)) {
            set((state) => ({
              componentPolicies: {
                ...state.componentPolicies,
                [key]: res.data,
              },
            }))
            return
          }
        } catch {}

        set((state) => ({
          componentPolicies: {
            ...state.componentPolicies,
            [key]: normalizedRules,
          },
        }))
      },

      createRole: async (code: string, name: string, description?: string) => {
        try {
          await apiClient.post('/core/roles', {
            code: code.trim(),
            name: name.trim() || code.trim(),
            description: description?.trim() || '',
            active: true,
          })
          await get().fetchSecurityMetadata()
          return true
        } catch (err: any) {
          console.error('Failed to create role:', err)
          return false
        }
      },

      deleteRole: async (id: number | string) => {
        try {
          await apiClient.delete(`/core/roles/${id}`)
          await get().fetchSecurityMetadata()
          return true
        } catch (err: any) {
          console.error('Failed to delete role:', err)
          return false
        }
      },

      getEffectiveRoleCode: () => {
        const authUser = useAuthStore.getState().user
        const isAuthDev = authUser ? authUser.role === 'Dev' : true

        // CHỈ áp dụng previewRoleCode khi tài khoản đăng nhập thật sự là Dev!
        if (isAuthDev) {
          const { previewRoleCode } = get()
          if (previewRoleCode) return previewRoleCode
          return 'Dev'
        }

        // Tài khoản không phải Dev: luôn dùng vai trò gốc của tài khoản
        return (authUser as any).roleCode || (authUser as any).role || 'User'
      },

      getEffectiveUser: () => {
        const authUser = useAuthStore.getState().user
        const isAuthDev = authUser ? authUser.role === 'Dev' : true
        const { previewRoleCode } = get()

        if (isAuthDev && previewRoleCode) {
          const isDev = previewRoleCode === 'Dev'
          return {
            id: 'simulated_user',
            username: `sim_${previewRoleCode.toLowerCase()}`,
            roleCode: previewRoleCode,
            isDev,
          }
        }

        const roleCode = get().getEffectiveRoleCode()
        const isDev = roleCode === 'Dev'

        return {
          id: authUser?.id || (isAuthDev ? 1 : 'user'),
          username: authUser?.username || (isAuthDev ? 'admin' : 'user'),
          roleCode,
          isDev,
        }
      },

      // ── ĐÁNH GIÁ QUYỀN TRÊN FEATURE / MÀN HÌNH ──
      evaluateFeaturePermission: (featureInput, recordCreatedBy, recordCreatedDate) => {
        const state = get()
        const effectiveUser = state.getEffectiveUser()
        const { roleCode, isDev, username } = effectiveUser

        // Dev luôn có toàn quyền (Bypass)
        if (isDev) {
          return {
            canRead: true,
            canWrite: true,
            canWriteAll: true,
            canDelete: true,
            canDeleteAll: true,
            canDeactivate: true,
            canShare: true,
            isPartialEditMode: false,
            isLockedUpdate: false,
            isLockedDelete: false,
          }
        }

        // Tìm feature đối tượng
        let feature: FeaturePage | undefined
        if (typeof featureInput === 'object' && featureInput !== null) {
          feature = featureInput as FeaturePage
        } else {
          const strId = String(featureInput)
          feature = useEditorStore.getState().features.find((f) => f.id === strId || f.route === strId)
        }

        // Feature Public
        if (feature?.displayFlags?.isPublic || feature?.featureProps?.displayFlags?.isPublic) {
          return {
            canRead: true,
            canWrite: false,
            canWriteAll: false,
            canDelete: false,
            canDeleteAll: false,
            canDeactivate: false,
            canShare: false,
            isPartialEditMode: true,
            isLockedUpdate: false,
            isLockedDelete: false,
          }
        }

        // Lấy rules phân quyền của feature
        const featId = feature?.id || String(featureInput)
        let rules: FeaturePolicyRule[] = state.featurePolicies[featId] || feature?.policies || []

        // Nếu không có rule riêng và có bật thừa kế quyền từ cha (IsPermissionInherited)
        if (rules.length === 0 && (feature?.displayFlags?.isPermissionInherited ?? true) && feature?.parentId) {
          rules = state.featurePolicies[feature.parentId] || []
        }

        // Tìm rule khớp: Ưu tiên 1 theo UserId -> Ưu tiên 2 theo RoleCode/RoleId
        const activeRules = rules.filter((r) => r.active !== false)
        const userRule = activeRules.find((r) => String(r.userId) === String(effectiveUser.id) || r.userName === username)
        const roleRule = activeRules.find((r) => {
          if (!r.roleCode && !r.roleName && !r.roleId) return false
          const rCode = r.roleCode || r.roleName
          return rCode?.toLowerCase() === roleCode.toLowerCase()
        })

        const matchedRule = userRule || roleRule

        // Nếu Feature chưa có rule nào được cấu hình (activeRules.length === 0): Mặc định toàn quyền truy cập (Core domain-agnostic)
        if (activeRules.length === 0) {
          return {
            canRead: true,
            canWrite: true,
            canWriteAll: true,
            canDelete: true,
            canDeleteAll: true,
            canDeactivate: true,
            canShare: true,
            isPartialEditMode: false,
            isLockedUpdate: false,
            isLockedDelete: false,
          }
        }

        // Nếu Feature đã có cấu hình rule (activeRules.length > 0) mà User/Role hiện tại không khớp dòng nào: Trả về không có quyền
        if (!matchedRule) {
          return {
            canRead: false,
            canWrite: false,
            canWriteAll: false,
            canDelete: false,
            canDeleteAll: false,
            canDeactivate: false,
            canShare: false,
            isPartialEditMode: false,
            isLockedUpdate: false,
            isLockedDelete: false,
          }
        }

        // Kiểm tra thời hạn khóa sửa/xóa
        let isLockedUpdate = false
        let isLockedDelete = false
        if (recordCreatedDate) {
          const createdTime = new Date(recordCreatedDate).getTime()
          const now = Date.now()
          const elapsedHours = (now - createdTime) / (1000 * 60 * 60)

          if (matchedRule.lockUpdateAfterCreated && matchedRule.lockUpdateAfterCreated > 0) {
            isLockedUpdate = elapsedHours > matchedRule.lockUpdateAfterCreated
          }
          if (matchedRule.lockDeleteAfterCreated && matchedRule.lockDeleteAfterCreated > 0) {
            isLockedDelete = elapsedHours > matchedRule.lockDeleteAfterCreated
          }
        }

        // So khớp quyền sửa / xóa với quyền sở hữu bản ghi
        const isOwner = !recordCreatedBy || recordCreatedBy === username
        const canWrite = (matchedRule.canWriteAll || (matchedRule.canWrite && isOwner)) && !isLockedUpdate
        const canDelete = (matchedRule.canDeleteAll || (matchedRule.canDelete && isOwner)) && !isLockedDelete

        const isPartialEditMode = matchedRule.canRead && !matchedRule.canWrite && !matchedRule.canWriteAll

        return {
          canRead: matchedRule.canRead,
          canWrite,
          canWriteAll: matchedRule.canWriteAll,
          canDelete,
          canDeleteAll: matchedRule.canDeleteAll,
          canDeactivate: matchedRule.canDeactivate,
          canShare: matchedRule.canShare,
          isPartialEditMode,
          isLockedUpdate,
          isLockedDelete,
        }
      },

      // ── ĐÁNH GIÁ QUYỀN TRÊN COMPONENT / LINH KIỆN ──
      evaluateComponentPermission: (pageId, node, ancestorNodes = [], recordCreatedBy) => {
        const state = get()
        const effectiveUser = state.getEffectiveUser()
        const { roleCode, isDev, username } = effectiveUser

        if (isDev) {
          return {
            canRead: true,
            canWrite: true,
            canWriteAll: true,
            canDelete: true,
            canDeactivate: true,
            shouldHighlightEditable: false,
          }
        }

        // Lấy quyền cấp Feature làm baseline
        const featurePerm = state.evaluateFeaturePermission(pageId, recordCreatedBy)

        // 1. Tìm rule trên chính component này
        const key = `${pageId}_${node.id}`
        const nodeRules: ComponentPolicyRule[] =
          state.componentPolicies[key] ||
          node.permissions?.rules ||
          (node.props as any)?.permissions?.rules ||
          []

        // 2. Tìm rule trên ancestor containers nếu component con không có rule riêng
        let effectiveRules = nodeRules
        if (effectiveRules.length === 0 && ancestorNodes.length > 0) {
          for (let i = ancestorNodes.length - 1; i >= 0; i--) {
            const ancestor = ancestorNodes[i]
            const ancestorKey = `${pageId}_${ancestor.id}`
            const ancestorRules =
              state.componentPolicies[ancestorKey] ||
              ancestor.permissions?.rules ||
              (ancestor.props as any)?.permissions?.rules ||
              []
            if (ancestorRules.length > 0) {
              effectiveRules = ancestorRules
              break
            }
          }
        }

        // Tìm rule khớp với user hoặc role
        const activeRules = effectiveRules.filter((r) => r.active !== false)
        const userRule = activeRules.find((r) => String(r.userId) === String(effectiveUser.id) || r.userName === username)
        const roleRule = activeRules.find((r) => {
          if (!r.roleCode && !r.roleName && !r.roleId) return false
          const rCode = r.roleCode || r.roleName
          return rCode?.toLowerCase() === roleCode.toLowerCase()
        })

        const matchedRule = userRule || roleRule

        // Nếu component có rule riêng: Áp dụng rule đó (Override)
        if (matchedRule) {
          const isOwner = !recordCreatedBy || recordCreatedBy === username
          const canWrite = matchedRule.canWriteAll || (matchedRule.canWrite && isOwner)

          // shouldHighlightEditable: Người dùng ở chế độ chỉ đọc màn hình nhưng được cấp quyền sửa ô này
          const shouldHighlightEditable =
            featurePerm.isPartialEditMode && (matchedRule.canWrite || matchedRule.canWriteAll)

          return {
            canRead: matchedRule.canRead,
            canWrite,
            canWriteAll: matchedRule.canWriteAll,
            canDelete: matchedRule.canDelete,
            canDeactivate: matchedRule.canDeactivate,
            shouldHighlightEditable,
          }
        }

        // Hỗ trợ kiểu legacy: node.permissions.allowedRoles & readOnlyRoles
        const permConfig = node.permissions
        if (permConfig?.allowedRoles && permConfig.allowedRoles.length > 0) {
          const isAllowed = permConfig.allowedRoles.some((r) => r.toLowerCase() === roleCode.toLowerCase())
          const isReadOnly = permConfig.readOnlyRoles?.some((r) => r.toLowerCase() === roleCode.toLowerCase())

          if (!isAllowed) {
            return {
              canRead: permConfig.deniedBehavior !== 'hide',
              canWrite: false,
              canWriteAll: false,
              canDelete: false,
              canDeactivate: false,
              shouldHighlightEditable: false,
            }
          }

          return {
            canRead: true,
            canWrite: !isReadOnly && featurePerm.canWrite,
            canWriteAll: !isReadOnly && featurePerm.canWriteAll,
            canDelete: featurePerm.canDelete,
            canDeactivate: featurePerm.canDeactivate,
            shouldHighlightEditable: false,
          }
        }

        // Mặc định thừa kế quyền của Feature cha
        return {
          canRead: featurePerm.canRead,
          canWrite: featurePerm.canWrite,
          canWriteAll: featurePerm.canWriteAll,
          canDelete: featurePerm.canDelete,
          canDeactivate: featurePerm.canDeactivate,
          shouldHighlightEditable: false,
        }
      },

      // ── ĐÁNH GIÁ QUYỀN TRÊN CỘT LƯỚI GRIDPOLICY ──
      evaluateColumnPermission: (pageId, tableNode, column, ancestorNodes = [], recordCreatedBy) => {
        const state = get()
        const effectiveUser = state.getEffectiveUser()
        const { roleCode, isDev, username } = effectiveUser

        if (isDev) {
          return {
            canRead: true,
            canWrite: true,
            canWriteAll: true,
            canDelete: true,
            canDeactivate: true,
            shouldHighlightEditable: false,
          }
        }

        // Quyền Feature baseline
        const featurePerm = state.evaluateFeaturePermission(pageId, recordCreatedBy)

        // Rules trên cột: ưu tiên nạp từ componentPolicies theo nodeId = column.key
        const colKey = `${pageId}_${column.key}`
        const dbColRules = state.componentPolicies[colKey]
        const colRules: ComponentPolicyRule[] =
          (dbColRules && dbColRules.length > 0)
            ? dbColRules
            : (column.columnPermissions ||
               column.permissions?.rules ||
               (column as any).policies ||
               [])

        const activeRules = colRules.filter((r) => r.active !== false)
        const userRule = activeRules.find((r) => String(r.userId) === String(effectiveUser.id) || r.userName === username)
        const roleRule = activeRules.find((r) => {
          if (!r.roleCode && !r.roleName && !r.roleId) return false
          const rCode = r.roleCode || r.roleName
          return rCode?.toLowerCase() === roleCode.toLowerCase()
        })

        const matchedRule = userRule || roleRule

        if (matchedRule) {
          const isOwner = !recordCreatedBy || recordCreatedBy === username
          const canWrite = matchedRule.canWriteAll || (matchedRule.canWrite && isOwner)
          const shouldHighlightEditable =
            featurePerm.isPartialEditMode && (matchedRule.canWrite || matchedRule.canWriteAll)

          return {
            canRead: matchedRule.canRead,
            canWrite,
            canWriteAll: matchedRule.canWriteAll,
            canDelete: matchedRule.canDelete,
            canDeactivate: matchedRule.canDeactivate,
            shouldHighlightEditable,
          }
        }

        // Thừa kế bảng hoặc feature
        return {
          canRead: featurePerm.canRead,
          canWrite: featurePerm.canWrite && (column.editable !== false),
          canWriteAll: featurePerm.canWriteAll && (column.editable !== false),
          canDelete: featurePerm.canDelete,
          canDeactivate: featurePerm.canDeactivate,
          shouldHighlightEditable: false,
        }
      },
    }),
    {
      name: 'uiforge-permission-engine',
      partialize: (state) => ({
        previewRoleCode: state.previewRoleCode,
        featurePolicies: state.featurePolicies,
        componentPolicies: state.componentPolicies,
      }),
    }
  )
)
