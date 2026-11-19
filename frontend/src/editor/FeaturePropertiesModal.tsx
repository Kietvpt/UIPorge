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
} from 'lucide-react'
import { useEditorStore } from '@/store/editorStore'
import { fetchEntityMetadata, EntityMetadata } from '@/core/services/metadataService'
import type { ComponentNode, FeaturePage } from '@/types/schema'
import { ComponentPropertiesModal } from './ComponentPropertiesModal'

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

  // Active Tab: 2 Tabs only as instructed by Master
  const [activeTab, setActiveTab] = useState<'settings' | 'components'>('settings')

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
    }
  }, [feature?.id, isOpen])

  // Save handler
  const handleSave = () => {
    if (!feature) return

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
      },
    }

    updateFeatureProperties(feature.id, updatedProps)
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
        </div>

        {/* ── MODAL BODY ── */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#0b1322]">
          {activeTab === 'settings' ? (
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
          ) : (
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
            setSelectedNodeForModal(null)
          }}
        />
      )}
    </div>,
    document.body
  )
}
