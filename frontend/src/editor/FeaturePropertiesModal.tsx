import React, { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  Save,
  Copy,
  X,
  Sliders,
  Code,
  Layers,
  Search,
  ChevronDown,
  ChevronRight,
  Plus,
  Info,
  Folder,
  Eye,
  EyeOff,
  Check,
  Table as TableIcon,
  Calendar,
  Type,
  Square,
  Hash,
  Sparkles,
  Shield,
  RotateCcw,
  Equal,
  Trash2,
  User,
  Users,
} from 'lucide-react'
import { useEditorStore } from '@/store/editorStore'
import { fetchEntityMetadata, EntityMetadata } from '@/core/services/metadataService'
import type { ComponentNode, FeaturePage, FeaturePolicyRule } from '@/types/schema'
import { usePermissionEngine } from '@/core/engines/permissionEngine'
import { ComponentPropertiesModal } from './ComponentPropertiesModal'
import { DynamicRoleManagerModal } from './DynamicRoleManagerModal'

interface FeaturePropertiesModalProps {
  isOpen?: boolean
  featureId?: string | null
  onClose?: () => void
}

export const FeaturePropertiesModal: React.FC<FeaturePropertiesModalProps> = ({
  isOpen: propIsOpen,
  featureId: propFeatureId,
  onClose: propOnClose,
}) => {
  // Store subscriptions
  const storeTargetId = useEditorStore((s) => s.featurePropertiesTargetId)
  const closeStoreModal = useEditorStore((s) => s.closeFeatureProperties)
  const features = useEditorStore((s) => s.features)
  const updateFeatureProperties = useEditorStore((s) => s.updateFeatureProperties)
  const cloneFeature = useEditorStore((s) => s.cloneFeature)
  const openComponentModalStore = useEditorStore((s) => s.openComponentModal)
  const updateComponentProps = useEditorStore((s) => s.updateComponentProps)
  const updateComponentDataBinding = useEditorStore((s) => s.updateComponentDataBinding)

  // Determine open state & target feature
  const isOpen = propIsOpen !== undefined ? propIsOpen : Boolean(storeTargetId)
  const targetId = propFeatureId !== undefined ? propFeatureId : storeTargetId
  const feature = useMemo(
    () => features.find((f) => f.id === targetId) || null,
    [features, targetId]
  )

  const handleClose = () => {
    if (propOnClose) propOnClose()
    closeStoreModal()
  }

  // Active Tab: 3 Tabs (Cài đặt, Phần tử, Quyền hạn khớp 100% Core C#)
  const [activeTab, setActiveTab] = useState<'settings' | 'components' | 'permissions'>('settings')

  // Security & Permission Engine integration
  const permissionRoles = usePermissionEngine((s) => s.roles)
  const permissionUsers = usePermissionEngine((s) => s.users)
  const storeFeaturePolicies = usePermissionEngine((s) => s.featurePolicies)
  const setFeaturePoliciesInStore = usePermissionEngine((s) => s.setFeaturePolicies)

  // ── TAB 3 STATE: QUYỀN HẠN (Feature Policies khớp 13 cột media_1795161916077_a96c0ef7.png) ──
  const [featureRules, setFeatureRules] = useState<FeaturePolicyRule[]>([])
  const [permSearch, setPermSearch] = useState('')

  // Hàng thêm nhanh Row-0
  const [newUserId, setNewUserId] = useState<string>('')
  const [newRoleId, setNewRoleId] = useState<string>('')
  const [newCanRead, setNewCanRead] = useState<boolean>(true)
  const [newCanWrite, setNewCanWrite] = useState<boolean>(false)
  const [newCanWriteAll, setNewCanWriteAll] = useState<boolean>(false)
  const [newCanDelete, setNewCanDelete] = useState<boolean>(false)
  const [newCanDeleteAll, setNewCanDeleteAll] = useState<boolean>(false)
  const [newCanDeactivate, setNewCanDeactivate] = useState<boolean>(false)
  const [newCanShare, setNewCanShare] = useState<boolean>(false)
  const [newRecordId, setNewRecordId] = useState<number>(0)
  const [newLockUpdate, setNewLockUpdate] = useState<string>('')
  const [newLockDelete, setNewLockDelete] = useState<string>('')
  const [newActive, setNewActive] = useState<boolean>(true)

  // Metadata entities
  const [entities, setEntities] = useState<EntityMetadata[]>([])
  useEffect(() => {
    fetchEntityMetadata()
      .then((data) => setEntities(data))
      .catch(() => {})
  }, [])

  // ── FORM STATE FOR TAB 1: TÙY CHỈNH / THÔNG TIN CHUNG (Chuẩn Hình 3) ──
  // Block 1: COMMON
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [parentId, setParentId] = useState<string>('')
  const [order, setOrder] = useState<number>(0)
  const [icon, setIcon] = useState('Layers')
  const [route, setRoute] = useState('/')

  // Block 2: DISPLAY (13 Checkboxes chuẩn 2 cột Hình 3)
  const [isDivider, setIsDivider] = useState(false)
  const [isMenu, setIsMenu] = useState(true)
  const [isStartup, setIsStartup] = useState(false)
  const [isPublic, setIsPublic] = useState(false)
  const [is403, setIs403] = useState(false)
  const [deleteTemp, setDeleteTemp] = useState(false)
  const [lockUpdate, setLockUpdate] = useState(false)

  const [isGroup, setIsGroup] = useState(false)
  const [active, setActive] = useState(true)
  const [noEncode, setNoEncode] = useState(true)
  const [isPermissionInherited, setIsPermissionInherited] = useState(true)
  const [isSystem, setIsSystem] = useState(false)
  const [customNextCell, setCustomNextCell] = useState(false)

  // Block 3: OTHER
  const [code, setCode] = useState('')
  const [scriptFile, setScriptFile] = useState('')
  const [description, setDescription] = useState('')
  const [entityName, setEntityName] = useState('')

  // Block 4: TÙY CHỈNH & STYLE
  const [customEvent, setCustomEvent] = useState('')
  const [customCssClass, setCustomCssClass] = useState('')
  const [customCssStyle, setCustomCssStyle] = useState('')
  const [customScript, setCustomScript] = useState('')
  const [customStylesheet, setCustomStylesheet] = useState('')

  // Block 5: SCRIPT Code Editor
  const [scriptContent, setScriptContent] = useState('')

  // Save feedback
  const [savedFeedback, setSavedFeedback] = useState(false)

  // ── TAB 2 STATE: PHẦN TỬ (Component Tree) ──
  const [searchFilter, setSearchFilter] = useState('')
  const [collapsedNodes, setCollapsedNodes] = useState<Record<string, boolean>>({})
  const [selectedNodeForModal, setSelectedNodeForModal] = useState<ComponentNode | null>(null)
  const [showRoleManagerModal, setShowRoleManagerModal] = useState(false)

  // Sync state when feature changes
  useEffect(() => {
    if (feature && isOpen) {
      setName(feature.name || '')
      setTitle(feature.title || feature.name || '')
      setParentId(feature.parentId || '')
      setOrder(feature.order ?? 0)
      setIcon(feature.icon || (feature.isGroup ? 'Folder' : 'Layers'))
      setRoute(feature.route || '/')

      const flags = feature.displayFlags || feature.featureProps?.displayFlags || {}
      setIsDivider(Boolean(flags.isDivider))
      setIsMenu(feature.isMenu !== undefined ? feature.isMenu : flags.isMenu !== undefined ? flags.isMenu : true)
      setIsStartup(Boolean(flags.isStartup))
      setIsPublic(Boolean(flags.isPublic))
      setIs403(Boolean(flags.is403))
      setDeleteTemp(Boolean(flags.deleteTemp))
      setLockUpdate(Boolean(flags.lockUpdate))

      setIsGroup(feature.isGroup !== undefined ? feature.isGroup : Boolean(flags.isGroup))
      setActive(feature.active !== undefined ? feature.active : flags.active !== undefined ? flags.active : true)
      setNoEncode(flags.noEncode !== undefined ? flags.noEncode : true)
      setIsPermissionInherited(flags.isPermissionInherited !== undefined ? flags.isPermissionInherited : true)
      setIsSystem(Boolean(flags.isSystem))
      setCustomNextCell(Boolean(flags.customNextCell))

      setCode(feature.code || '')
      setScriptFile(feature.scriptFile || '')
      setDescription(feature.description || '')
      setEntityName(feature.entityName || '')

      const styles = feature.customStyles || feature.featureProps?.customStyles || {}
      setCustomEvent(styles.event || '')
      setCustomCssClass(styles.className || '')
      setCustomCssStyle(styles.style || '')
      setCustomScript(styles.script || '')
      setCustomStylesheet(styles.stylesheet || '')

      setScriptContent(
        feature.scriptContent ||
          feature.featureProps?.scriptContent ||
          `// Logic JavaScript xử lý nghiệp vụ cho Feature: ${feature.name}\nlet methods = {\n  SaveAs: function (gridView, form) {\n    // Code xử lý...\n  }\n};`
      )

      // Sync feature policies from Backend DB
      if (feature?.id) {
        usePermissionEngine
          .getState()
          .fetchFeaturePolicies(feature.id)
          .then((dbRules) => {
            setFeatureRules(dbRules || [])
          })
          .catch(() => {
            const fallback =
              feature.policies && feature.policies.length > 0
                ? feature.policies
                : storeFeaturePolicies[feature.id] || []
            setFeatureRules(fallback)
          })
      } else {
        setFeatureRules([])
      }
    }
  }, [feature?.id, isOpen])

  // Helper actions for Feature Policies Tab 3
  const handleAddRule = () => {
    if (!newRoleId && !newUserId) {
      alert('Vui lòng chọn ít nhất một Vai trò hoặc Người dùng để phân quyền!')
      return
    }
    const roleObj = permissionRoles.find((r) => String(r.id) === String(newRoleId) || r.code === newRoleId)
    const userObj = permissionUsers.find((u) => String(u.id) === String(newUserId) || u.username === newUserId)

    const newRule: FeaturePolicyRule = {
      id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      featureId: feature?.id || '',
      featureCode: feature?.code || feature?.name,
      roleId: newRoleId ? (Number(newRoleId) || newRoleId) : null,
      roleCode: newRoleId ? (roleObj?.code || newRoleId) : undefined,
      userId: newUserId ? (Number(newUserId) || newUserId) : null,
      userName: newUserId ? (userObj?.username || newUserId) : undefined,
      canRead: newCanRead,
      canWrite: newCanWrite,
      canWriteAll: newCanWriteAll,
      canDelete: newCanDelete,
      canDeleteAll: newCanDeleteAll,
      canDeactivate: newCanDeactivate,
      canShare: newCanShare,
      recordId: Number(newRecordId) || 0,
      lockUpdateAfterCreated: newLockUpdate ? Number(newLockUpdate) : undefined,
      lockDeleteAfterCreated: newLockDelete ? Number(newLockDelete) : undefined,
      active: newActive,
    }

    setFeatureRules((prev) => [newRule, ...prev])
    setNewUserId('')
    setNewRoleId('')
    setNewCanRead(true)
    setNewCanWrite(false)
    setNewCanWriteAll(false)
    setNewCanDelete(false)
    setNewCanDeleteAll(false)
    setNewCanDeactivate(false)
    setNewCanShare(false)
    setNewRecordId(0)
    setNewLockUpdate('')
    setNewLockDelete('')
    setNewActive(true)
  }

  const updateRuleField = (ruleId: string | number | undefined, field: keyof FeaturePolicyRule, val: any) => {
    setFeatureRules((prev) =>
      prev.map((r) => (r.id === ruleId ? { ...r, [field]: val } : r))
    )
  }

  const deleteRule = (ruleId: string | number | undefined) => {
    setFeatureRules((prev) => prev.filter((r) => r.id !== ruleId))
  }

  // Save handler
  const handleSave = () => {
    if (!feature) return

    let rulesToSave = [...featureRules]
    if (newRoleId || newUserId) {
      const roleObj = permissionRoles.find((r) => String(r.id) === String(newRoleId) || r.code === newRoleId)
      const userObj = permissionUsers.find((u) => String(u.id) === String(newUserId) || u.username === newUserId)
      const pending: FeaturePolicyRule = {
        id: `rule-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        featureId: feature.id,
        featureCode: feature.code || feature.name,
        roleId: newRoleId ? (Number(newRoleId) || newRoleId) : null,
        roleCode: newRoleId ? (roleObj?.code || newRoleId) : undefined,
        userId: newUserId ? (Number(newUserId) || newUserId) : null,
        userName: newUserId ? (userObj?.username || newUserId) : undefined,
        canRead: newCanRead,
        canWrite: newCanWrite,
        canWriteAll: newCanWriteAll,
        canDelete: newCanDelete,
        canDeleteAll: newCanDeleteAll,
        canDeactivate: newCanDeactivate,
        canShare: newCanShare,
        recordId: Number(newRecordId) || 0,
        lockUpdateAfterCreated: newLockUpdate ? Number(newLockUpdate) : undefined,
        lockDeleteAfterCreated: newLockDelete ? Number(newLockDelete) : undefined,
        active: newActive,
      }
      rulesToSave = [pending, ...rulesToSave]
      setFeatureRules(rulesToSave)
      setNewUserId('')
      setNewRoleId('')
      setNewCanRead(true)
      setNewCanWrite(false)
      setNewCanWriteAll(false)
      setNewCanDelete(false)
      setNewCanDeleteAll(false)
      setNewCanDeactivate(false)
      setNewCanShare(false)
      setNewRecordId(0)
      setNewLockUpdate('')
      setNewLockDelete('')
      setNewActive(true)
    }

    const finalParentId = parentId && parentId.trim() !== '' ? parentId.trim() : null

    const updatedProps: Partial<FeaturePage> = {
      name: name.trim(),
      title: title.trim(),
      parentId: finalParentId,
      order: Number(order) || 0,
      icon: icon.trim(),
      route: route.trim(),
      isGroup,
      isMenu,
      active,
      code: code.trim(),
      scriptFile: scriptFile.trim(),
      description: description.trim(),
      entityName: entityName.trim(),
      scriptContent,
      policies: rulesToSave,
      displayFlags: {
        isDivider,
        isMenu,
        isStartup,
        isPublic,
        is403,
        deleteTemp,
        lockUpdate,
        isGroup,
        active,
        noEncode,
        isPermissionInherited,
        isSystem,
        customNextCell,
      },
      customStyles: {
        event: customEvent,
        className: customCssClass,
        style: customCssStyle,
        script: customScript,
        stylesheet: customStylesheet,
      },
      featureProps: {
        ...(feature.featureProps || {}),
        displayFlags: {
          isDivider,
          isMenu,
          isStartup,
          isPublic,
          is403,
          deleteTemp,
          lockUpdate,
          isGroup,
          active,
          noEncode,
          isPermissionInherited,
          isSystem,
          customNextCell,
        },
        customStyles: {
          event: customEvent,
          className: customCssClass,
          style: customCssStyle,
          script: customScript,
          stylesheet: customStylesheet,
        },
        scriptContent,
        policies: rulesToSave,
      },
    }

    updateFeatureProperties(feature.id, updatedProps)
    setFeaturePoliciesInStore(feature.id, rulesToSave)
    usePermissionEngine.getState().saveFeaturePolicies(feature.id, rulesToSave)
    setSavedFeedback(true)
    setTimeout(() => setSavedFeedback(false), 2000)
  }

  // Clone handler
  const handleCopy = async () => {
    if (!feature) return
    await cloneFeature(feature.id)
    handleClose()
  }

  // Parent chain breadcrumb
  const parentChain = useMemo(() => {
    if (!feature || !parentId) return 'Gốc (Root)'
    const chain: string[] = []
    let currId: string | null = parentId
    const visited = new Set<string>()

    while (currId && !visited.has(currId)) {
      visited.add(currId)
      const p = features.find((f) => f.id === currId)
      if (p) {
        chain.unshift(p.title || p.name)
        currId = p.parentId || null
      } else {
        break
      }
    }
    return chain.join(' > ')
  }, [feature, parentId, features])

  // Potential parents (cannot be itself)
  const availableParents = useMemo(() => {
    return features.filter((f) => f.id !== feature?.id)
  }, [features, feature])

  // Flattened component tree for Tab 2
  interface FlatTreeItem {
    node: ComponentNode
    depth: number
    hasChildren: boolean
    isCollapsed: boolean
  }

  const flattenedComponents = useMemo(() => {
    if (!feature) return []

    const result: FlatTreeItem[] = []
    const traverse = (nodes: ComponentNode[], depth = 0) => {
      for (const node of nodes) {
        const hasChildren = Boolean(node.children && node.children.length > 0)
        const isCollapsed = Boolean(collapsedNodes[node.id])

        // Filter check
        const matchQuery =
          !searchFilter.trim() ||
          (node.props?.label && String(node.props.label).toLowerCase().includes(searchFilter.toLowerCase())) ||
          (node.id && node.id.toLowerCase().includes(searchFilter.toLowerCase())) ||
          (node.type && node.type.toLowerCase().includes(searchFilter.toLowerCase())) ||
          (node.dataBinding?.fieldName &&
            String(node.dataBinding.fieldName).toLowerCase().includes(searchFilter.toLowerCase()))

        if (matchQuery) {
          result.push({
            node,
            depth,
            hasChildren,
            isCollapsed,
          })
        }

        if (hasChildren && !isCollapsed) {
          traverse(node.children!, depth + 1)
        }
      }
    }

    traverse(feature.components || [], 0)
    return result
  }, [feature, collapsedNodes, searchFilter])

  // Total components in feature
  const totalComponentCount = useMemo(() => {
    if (!feature) return 0
    let count = 0
    const countNodes = (nodes: ComponentNode[]) => {
      count += nodes.length
      for (const n of nodes) {
        if (n.children && n.children.length > 0) countNodes(n.children)
      }
    }
    countNodes(feature.components || [])
    return count
  }, [feature])

  // Toggle tree node collapse
  const toggleCollapse = (nodeId: string) => {
    setCollapsedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }))
  }

  // Expand all / Collapse all in Tab 2
  const handleExpandAll = () => setCollapsedNodes({})
  const handleCollapseAll = () => {
    if (!feature) return
    const collapsed: Record<string, boolean> = {}
    const collectIds = (nodes: ComponentNode[]) => {
      for (const n of nodes) {
        if (n.children && n.children.length > 0) {
          collapsed[n.id] = true
          collectIds(n.children)
        }
      }
    }
    collectIds(feature.components || [])
    setCollapsedNodes(collapsed)
  }

  // Double click handler on component row -> Open ComponentPropertiesModal!
  const handleComponentDoubleClick = (node: ComponentNode) => {
    setSelectedNodeForModal(node)
    openComponentModalStore(node.id)
  }

  // Component Icon Helper
  const getComponentIcon = (type: string) => {
    switch (type) {
      case 'Table':
        return <TableIcon className="w-3.5 h-3.5 text-blue-400" />
      case 'DatePicker':
        return <Calendar className="w-3.5 h-3.5 text-emerald-400" />
      case 'TextBox':
      case 'Textarea':
        return <Type className="w-3.5 h-3.5 text-amber-400" />
      case 'Number':
        return <Hash className="w-3.5 h-3.5 text-cyan-400" />
      case 'Container':
      case 'Section':
        return <Square className="w-3.5 h-3.5 text-indigo-400" />
      case 'Tabs':
        return <Layers className="w-3.5 h-3.5 text-purple-400" />
      default:
        return <Sparkles className="w-3.5 h-3.5 text-slate-400" />
    }
  }

  // Checkbox Helper with Emerald tick
  const renderCheckbox = (
    labelTxt: string,
    checked: boolean,
    setChecked: (v: boolean) => void
  ) => (
    <label className="flex items-center justify-between py-1 px-2 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors">
      <span className={`text-xs ${checked ? 'text-slate-100 font-semibold' : 'text-slate-400'}`}>
        {labelTxt}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 cursor-pointer accent-emerald-500"
      />
    </label>
  )

  if (!isOpen || !feature) return null

  return createPortal(
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150 select-none">
      <div className="w-full max-w-7xl rounded-xl border border-blue-600/40 bg-[#0b1322] shadow-2xl flex flex-col text-slate-200 my-auto max-h-[96vh] overflow-hidden relative">
        {/* ── TOP HEADER TOOLBAR (Khớp Hình 3: Feature - [Tên], [Lưu], [Copy], [Đóng]) ── */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#080e1a] border-b border-blue-600/30">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Sliders className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-white tracking-wide">
                Feature - {feature.title || feature.name}
              </span>
              {code && (
                <span className="text-xs px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-mono font-semibold">
                  #{code}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {savedFeedback && (
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-in fade-in duration-200">
                <Check className="w-4 h-4" /> Đã lưu thành công!
              </span>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu</span>
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
              title="Nhân bản Feature này kèm toàn bộ linh kiện"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-300 text-slate-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Đóng</span>
            </button>
          </div>
        </div>

        {/* ── TAB SELECTOR (2 Tabs Chuẩn Master Chỉ Đạo: TÙY CHỈNH & PHẦN TỬ) ── */}
        <div className="flex items-center gap-2 px-5 pt-3 border-b border-slate-800 bg-[#090f1d]">
          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'settings'
                ? 'border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>TÙY CHỈNH / THÔNG TIN CHUNG</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('components')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'components'
                ? 'border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PHẦN TỬ (CÂY COMPONENT)</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-blue-900/60 text-blue-300 font-mono">
              {totalComponentCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('permissions')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'permissions'
                ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-t-lg'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>QUYỀN HẠN (RBAC & POLICIES)</span>
            {featureRules.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-950/80 text-emerald-300 font-mono border border-emerald-800/50">
                {featureRules.length}
              </span>
            )}
          </button>
        </div>

        {/* ── MODAL BODY ── */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#0b1322]">
          {activeTab === 'settings' && (
            /* ══════════════════════════════════════════════════════════════
               TAB 1: TÙY CHỈNH / THÔNG TIN FEATURE (Khớp 100% Hình 3)
               ══════════════════════════════════════════════════════════════ */
            <div className="space-y-4">
              {/* Top 3 Blocks: COMMON, DISPLAY, OTHER */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* 1. KHỐI COMMON */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> COMMON
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Tên:</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Tiêu đề:</label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Cấp cha:</label>
                      <div className="flex items-center gap-1.5">
                        <select
                          value={parentId}
                          onChange={(e) => setParentId(e.target.value)}
                          className="flex-1 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                          <option value="">-- Cấp gốc (Không có cha) --</option>
                          {availableParents.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.isGroup ? '📁 ' : '📄 '}
                              {p.title || p.name} ({p.route})
                            </option>
                          ))}
                        </select>
                        <span
                          className="p-1.5 bg-slate-800 border border-slate-700 rounded text-slate-400 hover:text-blue-400 cursor-help"
                          title={`Đường dẫn phân tầng: ${parentChain}`}
                        >
                          <Info className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-[11px] px-2 py-1 rounded bg-slate-950/70 border border-slate-800">
                        <span className="text-slate-400 text-[10px]">
                          {isMenu ? '📌 Hiển thị trên Leftbar' : '🔍 Màn hình mở theo điều kiện (Ẩn Leftbar)'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsMenu(!isMenu)}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-semibold cursor-pointer transition-colors ${
                            isMenu
                              ? 'bg-blue-600/30 text-blue-300 hover:bg-blue-600/50'
                              : 'bg-amber-600/30 text-amber-300 hover:bg-amber-600/50'
                          }`}
                        >
                          {isMenu ? 'Chuyển sang Ẩn' : 'Hiện lên Menu'}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-400 mb-1">Thứ tự:</label>
                        <input
                          type="number"
                          value={order}
                          onChange={(e) => setOrder(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">Icon:</label>
                        <input
                          type="text"
                          value={icon}
                          onChange={(e) => setIcon(e.target.value)}
                          placeholder="Layers, Folder, Ship..."
                          className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Nhóm chức năng / Route:</label>
                      <input
                        type="text"
                        value={route}
                        onChange={(e) => setRoute(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. KHỐI DISPLAY (13 Checkboxes 2 Cột Chuẩn Hình 3) */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center justify-between">
                    <span>DISPLAY</span>
                    <span className="text-[10px] text-slate-500 font-normal">Cờ hiển thị hệ thống</span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-xs">
                    {/* Cột 1 */}
                    <div className="space-y-0.5">
                      {renderCheckbox('Thanh chia', isDivider, setIsDivider)}
                      {renderCheckbox('Hiển thị menu', isMenu, setIsMenu)}
                      {renderCheckbox('Khởi động', isStartup, setIsStartup)}
                      {renderCheckbox('Public', isPublic, setIsPublic)}
                      {renderCheckbox('403', is403, setIs403)}
                      {renderCheckbox('Delete Temp', deleteTemp, setDeleteTemp)}
                      {renderCheckbox('LockUpdate', lockUpdate, setLockUpdate)}
                    </div>

                    {/* Cột 2 */}
                    <div className="space-y-0.5">
                      {renderCheckbox('Nhóm menu', isGroup, setIsGroup)}
                      {renderCheckbox('Hoạt động', active, setActive)}
                      {renderCheckbox('No-Encode', noEncode, setNoEncode)}
                      {renderCheckbox('Thừa kế quyền', isPermissionInherited, setIsPermissionInherited)}
                      {renderCheckbox('System', isSystem, setIsSystem)}
                      {renderCheckbox('CustomNextCell', customNextCell, setCustomNextCell)}
                    </div>
                  </div>
                </div>

                {/* 3. KHỐI OTHER */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5">
                    <Folder className="w-3.5 h-3.5" /> OTHER
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Mã (Code):</label>
                      <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Ví dụ: F0013226"
                        className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-amber-300 font-mono font-semibold focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Class (File BL):</label>
                      <input
                        type="text"
                        value={scriptFile}
                        onChange={(e) => setScriptFile(e.target.value)}
                        placeholder="Ví dụ: TMS.BusinessLogic.TransactionBL"
                        className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Đối tượng (Entity):</label>
                      <input
                        type="text"
                        list="entities-list"
                        value={entityName}
                        onChange={(e) => setEntityName(e.target.value)}
                        placeholder="Ví dụ: Transaction"
                        className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500"
                      />
                      <datalist id="entities-list">
                        {entities.map((ent) => (
                          <option key={ent.name} value={ent.name}>
                            {ent.displayName || ent.name}
                          </option>
                        ))}
                      </datalist>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Parents:</label>
                      <div className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded text-slate-400 text-[11px] font-mono truncate">
                        {parentChain}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Mô tả:</label>
                      <textarea
                        rows={2}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-blue-500 text-xs resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Khối 4: TÙY CHỈNH & STYLE */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="text-xs font-bold text-purple-400 tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" /> TÙY CHỈNH & STYLE
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Event:</label>
                    <input
                      type="text"
                      value={customEvent}
                      onChange={(e) => setCustomEvent(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Css class:</label>
                    <input
                      type="text"
                      value={customCssClass}
                      onChange={(e) => setCustomCssClass(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Css style:</label>
                    <input
                      type="text"
                      value={customCssStyle}
                      onChange={(e) => setCustomCssStyle(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Script:</label>
                    <input
                      type="text"
                      value={customScript}
                      onChange={(e) => setCustomScript(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 text-xs">Stylesheet:</label>
                  <textarea
                    rows={2}
                    value={customStylesheet}
                    onChange={(e) => setCustomStylesheet(e.target.value)}
                    placeholder="/* Custom CSS stylesheet rules */"
                    className="w-full px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded text-slate-100 font-mono text-[11px] focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>
              </div>

              {/* Khối 5: SCRIPT Code Editor (Khớp Hình 3 có số dòng line numbers) */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
                    <Code className="w-4 h-4" /> SCRIPT (Trình soạn thảo mã nghiệp vụ Feature)
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {scriptContent.split('\n').length} dòng
                  </span>
                </div>

                <div className="relative flex rounded-lg border border-slate-800 bg-[#070b14] overflow-hidden min-h-[220px]">
                  {/* Line Numbers Bar */}
                  <div className="py-2.5 px-3 bg-[#05080f] border-r border-slate-800/80 text-right font-mono text-xs text-slate-600 select-none leading-5 min-w-[40px]">
                    {scriptContent.split('\n').map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  {/* Code Textarea */}
                  <textarea
                    value={scriptContent}
                    onChange={(e) => setScriptContent(e.target.value)}
                    spellCheck={false}
                    className="flex-1 p-2.5 bg-transparent font-mono text-xs text-emerald-300 leading-5 focus:outline-none resize-y min-h-[200px]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'components' && (
            /* ══════════════════════════════════════════════════════════════
               TAB 2: PHẦN TỬ / CÂY COMPONENT CHA - CON (Yêu cầu đặc biệt của Master)
               ══════════════════════════════════════════════════════════════ */
            <div className="space-y-4">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                <div className="relative flex-1 min-w-[260px] max-w-md">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Tìm kiếm component theo Tên, ID, FieldName, Type..."
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleExpandAll}
                    className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer"
                  >
                    Mở rộng tất cả
                  </button>
                  <button
                    type="button"
                    onClick={handleCollapseAll}
                    className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer"
                  >
                    Thu gọn tất cả
                  </button>
                </div>
              </div>

              {/* Double click instruction banner */}
              <div className="px-4 py-2 bg-blue-950/40 border border-blue-800/40 rounded-xl text-xs text-blue-300 flex items-center justify-between">
                <span>
                  💡 <strong>Hướng dẫn</strong>: Nhấp đúp chuột (<strong>Double-Click</strong>) vào bất kỳ dòng phần tử
                  nào trong bảng để mở ngay modal thuộc tính của phần tử đó!
                </span>
                <span className="font-mono text-[11px] text-blue-400">
                  {flattenedComponents.length} / {totalComponentCount} phần tử
                </span>
              </div>

              {/* Component Tree Table */}
              <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 shadow-inner">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#080f1e] border-b border-slate-800 text-slate-400 font-semibold uppercase text-[11px]">
                      <tr>
                        <th className="py-2.5 px-3">Phần tử / Cấu trúc</th>
                        <th className="py-2.5 px-3">Mã #ID</th>
                        <th className="py-2.5 px-3">Loại (Type)</th>
                        <th className="py-2.5 px-3">Trường (FieldName)</th>
                        <th className="py-2.5 px-3 text-center">Thứ tự</th>
                        <th className="py-2.5 px-3 text-center">Cột</th>
                        <th className="py-2.5 px-3 text-center">Hiển thị</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      {flattenedComponents.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-slate-500">
                            Không tìm thấy phần tử nào trong Feature này
                          </td>
                        </tr>
                      ) : (
                        flattenedComponents.map(({ node, depth, hasChildren, isCollapsed }) => {
                          const label =
                            node.props?.label ||
                            node.props?.title ||
                            node.dataBinding?.fieldName ||
                            node.type
                          const fieldName = node.dataBinding?.fieldName || '-'
                          const colSpan = node.props?.colSpan ? `${node.props.colSpan}/12` : 'Auto'

                          return (
                            <tr
                              key={node.id}
                              onDoubleClick={() => handleComponentDoubleClick(node)}
                              className="hover:bg-blue-600/15 cursor-pointer transition-colors group"
                              title="Nhấp đúp chuột để cấu hình phần tử này"
                            >
                              <td className="py-2 px-3">
                                <div
                                  className="flex items-center gap-1.5"
                                  style={{ paddingLeft: `${depth * 20}px` }}
                                >
                                  {hasChildren ? (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        toggleCollapse(node.id)
                                      }}
                                      className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer"
                                    >
                                      {isCollapsed ? (
                                        <ChevronRight className="w-3.5 h-3.5" />
                                      ) : (
                                        <ChevronDown className="w-3.5 h-3.5" />
                                      )}
                                    </button>
                                  ) : (
                                    <span className="w-5" />
                                  )}

                                  <div className="p-1 rounded bg-slate-800/80 group-hover:bg-blue-600/20">
                                    {getComponentIcon(node.type)}
                                  </div>

                                  <span className="font-semibold text-slate-200 group-hover:text-white truncate">
                                    {label}
                                  </span>
                                </div>
                              </td>

                              <td className="py-2 px-3 font-mono text-[11px] text-slate-400">
                                <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                                  #{node.id}
                                </span>
                              </td>

                              <td className="py-2 px-3">
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/50">
                                  {node.type}
                                </span>
                              </td>

                              <td className="py-2 px-3 font-mono text-[11px] text-emerald-400">
                                {fieldName}
                              </td>

                              <td className="py-2 px-3 text-center font-mono text-slate-400">
                                {node.order ?? 1}
                              </td>

                              <td className="py-2 px-3 text-center font-mono text-slate-400">
                                {colSpan}
                              </td>

                              <td className="py-2 px-3 text-center">
                                {node.props?.hidden ? (
                                  <EyeOff className="w-4 h-4 text-slate-600 mx-auto" />
                                ) : (
                                  <Eye className="w-4 h-4 text-emerald-400 mx-auto" />
                                )}
                              </td>
                            </tr>
                          )
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'permissions' && (
            <div className="space-y-4">
              {/* ── TOOLBAR KHỚP 100% CORE C# (media_1795161916077_a96c0ef7.png) ── */}
              <div className="bg-[#0e1726] border border-slate-800 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-md">
                {/* Left: Search, Filter, Reset, Settings, F-keys */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={permSearch}
                      onChange={(e) => setPermSearch(e.target.value)}
                      placeholder="Tìm kiếm vai trò, người dùng..."
                      className="pl-8 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 w-56 transition-colors"
                    />
                  </div>

                  <button
                    type="button"
                    title="Lọc điều kiện (=)"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Equal className="w-3.5 h-3.5 text-emerald-400" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setPermSearch('')}
                    title="Khôi phục tìm kiếm"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    type="button"
                    title="Cài đặt ma trận phân quyền"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {/* F1..F11 ERP Function Key Badges */}
                  <div className="hidden xl:flex items-center gap-1 pl-2 border-l border-slate-800 text-[10px] text-slate-400 font-mono">
                    {['F1: Help', 'F2: Thêm', 'F4: Sửa', 'F5: Tải lại', 'F8: Xóa', 'F10: Lưu'].map((f) => (
                      <span key={f} className="px-1.5 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Nút Quản lý Dynamic Roles */}
                  <button
                    type="button"
                    onClick={() => setShowRoleManagerModal(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-colors cursor-pointer ml-1"
                    title="Quản lý và tạo vai trò động cho dự án"
                  >
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+ Quản lý Vai trò (Roles)</span>
                  </button>
                </div>

                {/* Right: Master Checkboxes */}
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isPermissionInherited}
                      onChange={(e) => setIsPermissionInherited(e.target.checked)}
                      className="w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                    />
                    <span>Thừa kế quyền</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isPublic}
                      onChange={(e) => setIsPublic(e.target.checked)}
                      className="w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                    />
                    <span>Công khai (Public)</span>
                  </label>
                </div>
              </div>

              {/* ── BẢNG LƯỚI MA TRẬN 13 CỘT KHỚP 100% ẢNH THỰC TẾ CORE C# CŨ ── */}
              <div className="bg-[#0b1322] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-300 border-collapse select-none">
                    <thead className="bg-[#070e1b] text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800 tracking-wider">
                      <tr>
                        <th className="py-2.5 px-3 border-r border-slate-800 text-center w-12">#</th>
                        <th className="py-2.5 px-3 border-r border-slate-800 min-w-[130px]">NGƯỜI DÙNG</th>
                        <th className="py-2.5 px-3 border-r border-slate-800 min-w-[160px]">VAI TRÒ</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-24">QUYỀN ĐỌC</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-28">QUYỀN CẬP NHẬT</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-32">CẬP NHẬT TOÀN BỘ</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-24">QUYỀN XÓA</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-28">XÓA TOÀN BỘ</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-24">QUYỀN HỦY</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-28">QUYỀN CHIA SẺ</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-24">RECORDID</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-28">KHÓA CẬP NHẬT</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-24">KHÓA XÓA</th>
                        <th className="py-2.5 px-2.5 border-r border-slate-800 text-center w-20">ACTIVE</th>
                        <th className="py-2.5 px-2 text-center w-12"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {/* ── ROW 0: HÀNG THÊM NHANH (Nút + đầu dòng chuẩn Core C# cũ) ── */}
                      <tr className="bg-emerald-950/20 border-b-2 border-emerald-600/40 hover:bg-emerald-950/30 transition-colors">
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <button
                            type="button"
                            onClick={handleAddRule}
                            className="w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center mx-auto transition-transform active:scale-95 shadow-sm shadow-emerald-600/30 cursor-pointer"
                            title="Thêm mới quy tắc phân quyền (+)"
                          >
                            <Plus className="w-3.5 h-3.5 stroke-[3]" />
                          </button>
                        </td>

                        {/* Người dùng */}
                        <td className="py-2 px-2 border-r border-slate-800">
                          <select
                            value={newUserId}
                            onChange={(e) => {
                              setNewUserId(e.target.value)
                              if (e.target.value) setNewRoleId('')
                            }}
                            className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
                          >
                            <option value="">—</option>
                            {permissionUsers.map((u) => (
                              <option key={u.id} value={u.id}>
                                {u.username}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Vai trò */}
                        <td className="py-2 px-2 border-r border-slate-800">
                          <select
                            value={newRoleId}
                            onChange={(e) => {
                              setNewRoleId(e.target.value)
                              if (e.target.value) setNewUserId('')
                            }}
                            className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-semibold"
                          >
                            <option value="">—</option>
                            {permissionRoles.map((r) => (
                              <option key={r.id} value={r.id}>
                                {r.code}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Checkboxes 7 quyền cốt lõi */}
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newCanRead}
                            onChange={(e) => setNewCanRead(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                            title="Quyền Đọc (CanRead)"
                          />
                        </td>
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newCanWrite}
                            onChange={(e) => setNewCanWrite(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                            title="Quyền Cập nhật bản ghi của mình (CanWrite)"
                          />
                        </td>
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newCanWriteAll}
                            onChange={(e) => setNewCanWriteAll(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                            title="Cập nhật toàn bộ bản ghi của mọi người (CanWriteAll)"
                          />
                        </td>
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newCanDelete}
                            onChange={(e) => setNewCanDelete(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                            title="Quyền Xóa bản ghi của mình (CanDelete)"
                          />
                        </td>
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newCanDeleteAll}
                            onChange={(e) => setNewCanDeleteAll(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                            title="Xóa toàn bộ bản ghi của mọi người (CanDeleteAll)"
                          />
                        </td>
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newCanDeactivate}
                            onChange={(e) => setNewCanDeactivate(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                            title="Quyền Hủy / Ngưng hiệu lực (CanDeactivate)"
                          />
                        </td>
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newCanShare}
                            onChange={(e) => setNewCanShare(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                            title="Quyền Chia sẻ bản ghi (CanShare)"
                          />
                        </td>

                        {/* RecordId */}
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="number"
                            value={newRecordId}
                            onChange={(e) => setNewRecordId(Number(e.target.value) || 0)}
                            className="w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                            title="0 = Toàn bộ dữ liệu; > 0 = Phân quyền đích danh ID"
                          />
                        </td>

                        {/* Khóa cập nhật */}
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="number"
                            placeholder="Giờ"
                            value={newLockUpdate}
                            onChange={(e) => setNewLockUpdate(e.target.value)}
                            className="w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600"
                            title="Số giờ sau khi tạo thì khóa không cho sửa (để trống = không giới hạn)"
                          />
                        </td>

                        {/* Khóa xóa */}
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="number"
                            placeholder="Giờ"
                            value={newLockDelete}
                            onChange={(e) => setNewLockDelete(e.target.value)}
                            className="w-16 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-center font-mono text-xs text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-600"
                            title="Số giờ sau khi tạo thì khóa không cho xóa"
                          />
                        </td>

                        {/* Active */}
                        <td className="py-2 px-2 text-center border-r border-slate-800">
                          <input
                            type="checkbox"
                            checked={newActive}
                            onChange={(e) => setNewActive(e.target.checked)}
                            className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                          />
                        </td>

                        <td className="py-2 px-2 text-center">
                          <button
                            type="button"
                            onClick={handleAddRule}
                            className="text-[11px] px-2 py-1 rounded bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/50 transition-colors font-medium cursor-pointer"
                          >
                            Lưu
                          </button>
                        </td>
                      </tr>

                      {/* ── DANH SÁCH CÁC DÒNG QUY TẮC HIỆN CÓ ── */}
                      {featureRules
                        .filter((r) => {
                          if (!permSearch.trim()) return true
                          const term = permSearch.toLowerCase()
                          return (
                            (r.roleCode && r.roleCode.toLowerCase().includes(term)) ||
                            (r.userName && r.userName.toLowerCase().includes(term)) ||
                            (r.description && r.description.toLowerCase().includes(term))
                          )
                        })
                        .map((rule, idx) => {
                          const roleObj = permissionRoles.find(
                            (r) => String(r.id) === String(rule.roleId) || r.code === rule.roleCode
                          )
                          const userObj = permissionUsers.find(
                            (u) => String(u.id) === String(rule.userId) || u.username === rule.userName
                          )

                          return (
                            <tr
                              key={rule.id || idx}
                              className="hover:bg-slate-800/40 transition-colors group"
                            >
                              <td className="py-2 px-2 text-center text-slate-500 font-mono text-[11px] border-r border-slate-800">
                                {idx + 1}
                              </td>

                              {/* Người dùng */}
                              <td className="py-2 px-3 border-r border-slate-800">
                                {userObj?.username || rule.userName ? (
                                  <span className="text-xs text-blue-300 font-mono font-medium">
                                    {userObj?.username || rule.userName}
                                  </span>
                                ) : null}
                              </td>

                              {/* Vai trò */}
                              <td className="py-2 px-3 border-r border-slate-800">
                                {rule.roleCode || roleObj?.code ? (
                                  <span className="font-semibold text-xs text-slate-200">
                                    {rule.roleCode || roleObj?.code}
                                  </span>
                                ) : null}
                              </td>

                              {/* 7 Checkboxes trực quan khớp 100% Core C# */}
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.canRead}
                                  onChange={(e) => updateRuleField(rule.id, 'canRead', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.canWrite}
                                  onChange={(e) => updateRuleField(rule.id, 'canWrite', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.canWriteAll}
                                  onChange={(e) => updateRuleField(rule.id, 'canWriteAll', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.canDelete}
                                  onChange={(e) => updateRuleField(rule.id, 'canDelete', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.canDeleteAll}
                                  onChange={(e) => updateRuleField(rule.id, 'canDeleteAll', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.canDeactivate}
                                  onChange={(e) => updateRuleField(rule.id, 'canDeactivate', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.canShare}
                                  onChange={(e) => updateRuleField(rule.id, 'canShare', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>

                              {/* RecordId */}
                              <td className="py-2 px-2 text-center font-mono text-xs border-r border-slate-800">
                                <input
                                  type="number"
                                  value={rule.recordId ?? 0}
                                  onChange={(e) => updateRuleField(rule.id, 'recordId', Number(e.target.value) || 0)}
                                  className="w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none"
                                />
                              </td>

                              {/* Khóa cập nhật */}
                              <td className="py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800">
                                <input
                                  type="number"
                                  placeholder="—"
                                  value={rule.lockUpdateAfterCreated ?? ''}
                                  onChange={(e) => updateRuleField(rule.id, 'lockUpdateAfterCreated', e.target.value ? Number(e.target.value) : undefined)}
                                  className="w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                                />
                              </td>

                              {/* Khóa xóa */}
                              <td className="py-2 px-2 text-center font-mono text-xs text-slate-400 border-r border-slate-800">
                                <input
                                  type="number"
                                  placeholder="—"
                                  value={rule.lockDeleteAfterCreated ?? ''}
                                  onChange={(e) => updateRuleField(rule.id, 'lockDeleteAfterCreated', e.target.value ? Number(e.target.value) : undefined)}
                                  className="w-16 bg-transparent hover:bg-slate-900 border border-transparent hover:border-slate-700 rounded px-1 text-center font-mono text-xs text-slate-300 focus:bg-slate-900 focus:border-emerald-500 focus:outline-none placeholder-slate-600"
                                />
                              </td>

                              {/* Active */}
                              <td className="py-2 px-2 text-center border-r border-slate-800">
                                <input
                                  type="checkbox"
                                  checked={rule.active}
                                  onChange={(e) => updateRuleField(rule.id, 'active', e.target.checked)}
                                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-emerald-500 accent-emerald-500 cursor-pointer"
                                />
                              </td>

                              {/* Delete button */}
                              <td className="py-2 px-2 text-center">
                                <button
                                  type="button"
                                  onClick={() => deleteRule(rule.id)}
                                  className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition-colors cursor-pointer"
                                  title="Xóa quy tắc này"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          )
                        })}

                      {featureRules.length === 0 && (
                        <tr>
                          <td colSpan={15} className="py-8 text-center text-slate-500">
                            Chưa có quy tắc phân quyền nào. Nhấn nút{' '}
                            <span className="text-emerald-400 font-semibold">+</span> ở hàng đầu để thêm quy tắc mới.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── EMBEDDED COMPONENT PROPERTIES MODAL ON DOUBLE-CLICK (z-[999999]) ── */}
      {selectedNodeForModal && (
        <ComponentPropertiesModal
          isOpen={Boolean(selectedNodeForModal)}
          node={selectedNodeForModal}
          onClose={() => setSelectedNodeForModal(null)}
          onSave={(nodeId, updatedProps, updatedBinding) => {
            updateComponentProps(nodeId, updatedProps)
            if (updatedBinding) updateComponentDataBinding(nodeId, updatedBinding)
          }}
        />
      )}

      {/* ── DYNAMIC ROLE MANAGER MODAL (z-[999999]) ── */}
      <DynamicRoleManagerModal
        isOpen={showRoleManagerModal}
        onClose={() => setShowRoleManagerModal(false)}
      />
    </div>,
    document.body
  )
}
