import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Save,
  Shield,
  X,
  Sliders,
  Lock,
  FileText,
  Check,
  Code,
  Database,
  Layers,
  Table as TableIcon,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Zap,
} from 'lucide-react'
import type { ComponentNode, DropdownColumnConfig } from '@/types/schema'
import {
  fetchEntityMetadata,
  EntityMetadata,
  buildCombinedEntityCatalog,
  findMatchingEntity,
} from '@/core/services/metadataService'

export interface ComponentPropertiesModalProps {
  isOpen: boolean
  node: ComponentNode | null
  onClose: () => void
  onSave: (nodeId: string, updatedProps: Record<string, any>, updatedBinding?: any) => void
}

export const ComponentPropertiesModal: React.FC<ComponentPropertiesModalProps> = ({
  isOpen,
  node,
  onClose,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'dropdownColumns' | 'permissions' | 'report'>('info')
  const [entities, setEntities] = useState<EntityMetadata[]>([])
  const [dropdownColumns, setDropdownColumns] = useState<DropdownColumnConfig[]>([])

  // ── COMMON FORM STATES (Khớp 100% Ảnh Modal Component properties của Master) ──
  const [componentId, setComponentId] = useState('')
  const [group, setGroup] = useState('General')
  const [reference, setReference] = useState('')
  const [componentType, setComponentType] = useState('Dropdown')
  const [parentId, setParentId] = useState('')
  const [refName, setRefName] = useState('')
  const [fieldName, setFieldName] = useState('')
  const [order, setOrder] = useState<number | string>(1)
  const [column, setColumn] = useState<number | string>(4)
  const [label, setLabel] = useState('')
  const [events, setEvents] = useState('')
  const [styleVal, setStyleVal] = useState('')
  const [childStyle, setChildStyle] = useState('')
  const [validation, setValidation] = useState('')
  const [selectField, setSelectField] = useState('')
  const [plainText, setPlainText] = useState('')
  const [cssClass, setCssClass] = useState('')
  const [sqlSelect, setSqlSelect] = useState('')
  const [offsetVal, setOffsetVal] = useState('')
  const [groupFormat, setGroupFormat] = useState('')
  const [formatSummary, setFormatSummary] = useState('')
  const [orderBySummary, setOrderBySummary] = useState('')
  const [groupEvent, setGroupEvent] = useState('')
  const [iconVal, setIconVal] = useState('')
  const [systemVal, setSystemVal] = useState('')
  const [refClass, setRefClass] = useState('')
  const [hotKey, setHotKey] = useState('')
  const [dateTimeField, setDateTimeField] = useState('')
  const [addStart, setAddStart] = useState('')
  const [addEnd, setAddEnd] = useState('')
  const [bodyRowHeight, setBodyRowHeight] = useState('')
  const [sqlWhere, setSqlWhere] = useState('')
  const [footerHeight, setFooterHeight] = useState('')
  const [joinTable, setJoinTable] = useState('')
  const [idField, setIdField] = useState('id')
  const [headerHeight, setHeaderHeight] = useState('')
  const [populateField, setPopulateField] = useState('')
  const [precision, setPrecision] = useState('')
  const [groupBy, setGroupBy] = useState('')
  const [disabledExp, setDisabledExp] = useState('')
  const [showExp, setShowExp] = useState('')
  const [rowVal, setRowVal] = useState('')
  const [templateVal, setTemplateVal] = useState('')
  const [templateLockedVal, setTemplateLockedVal] = useState('')
  const [defaultVal, setDefaultVal] = useState('')

  // ── DISPLAY CHECKBOXES STATES (Khớp 100% Ảnh Modal DISPLAY 2 cột) ──
  // Cột 1
  const [dispRealtime, setDispRealtime] = useState(false)
  const [dispLabel, setDispLabel] = useState(true)
  const [dispHidden, setDispHidden] = useState(false)
  const [dispFilterLocal, setDispFilterLocal] = useState(false)
  const [dispSqlSearch, setDispSqlSearch] = useState(false)
  const [dispCache, setDispCache] = useState(false)
  const [dispMoveTab, setDispMoveTab] = useState(false)
  const [dispFocus, setDispFocus] = useState(false)
  const [dispFocusSearch, setDispFocusSearch] = useState(false)
  const [dispNoLoad, setDispNoLoad] = useState(false)
  const [dispCollapsible, setDispCollapsible] = useState(false)
  const [dispHotKey, setDispHotKey] = useState(false)
  const [dispHistory, setDispHistory] = useState(false)

  // Cột 2
  const [dispTop, setDispTop] = useState(false)
  const [dispHideAnd, setDispHideAnd] = useState(false)
  const [dispDisabled, setDispDisabled] = useState(false)
  const [dispVisibility, setDispVisibility] = useState(true)
  const [dispActive, setDispActive] = useState(true)
  const [dispUpperCase, setDispUpperCase] = useState(false)
  const [dispVirtual, setDispVirtual] = useState(false)
  const [dispPrivate, setDispPrivate] = useState(false)
  const [dispRenderIndex, setDispRenderIndex] = useState(false)
  const [dispAdd, setDispAdd] = useState(false)
  const [dispSearch, setDispSearch] = useState(false)
  const [dispSummary, setDispSummary] = useState(false)
  const [dispDateTimeField, setDispDateTimeField] = useState(false)

  // ── CODE / QUERY EDITORS (Khớp 100% Ảnh Modal: DATASOURCE, FORMATENTITY, MIGRATION, FORMATDATA) ──
  const [dataSourceCode, setDataSourceCode] = useState('')
  const [formatEntityCode, setFormatEntityCode] = useState('')
  const [migrationCode, setMigrationCode] = useState('')
  const [formatDataCode, setFormatDataCode] = useState('')
  const [queryCode, setQueryCode] = useState('')

  // Load entities from metadata engine
  useEffect(() => {
    fetchEntityMetadata().then((data) => setEntities(data))
  }, [])

  // Sync state when node or modal open state changes (dùng ?? để giữ nguyên chuỗi rỗng khi người dùng đã xóa)
  useEffect(() => {
    if (node && isOpen) {
      const p = node.props || {}
      const b = node.dataBinding || {}

      setComponentId(String(p.id ?? node.id))
      setGroup(p.group !== undefined ? String(p.group) : 'General')
      const initialRef =
        p.reference !== undefined
          ? String(p.reference)
          : b.entityName !== undefined
          ? String(b.entityName)
          : p.refName !== undefined
          ? String(p.refName)
          : ''
      setReference(initialRef)
      setComponentType(node.type || 'Dropdown')
      setParentId(String(p.parentId ?? ''))
      setRefName(
        p.refName !== undefined
          ? String(p.refName)
          : b.refName !== undefined
          ? String(b.refName)
          : initialRef
      )
      setFieldName(
        b.fieldName !== undefined
          ? String(b.fieldName)
          : p.fieldName !== undefined
          ? String(p.fieldName)
          : p.name !== undefined
          ? String(p.name)
          : node.id
      )
      setOrder(Number(node.order ?? p.order ?? 1))
      setColumn(Number(p.colSpan ?? p.column ?? 4))
      setLabel(p.label !== undefined ? String(p.label) : '')
      setEvents(
        p.events !== undefined
          ? typeof p.events === 'string'
            ? p.events
            : JSON.stringify(p.events)
          : ''
      )
      setStyleVal(p.style !== undefined ? String(p.style) : '')
      setChildStyle(p.childStyle !== undefined ? String(p.childStyle) : '')
      setValidation(p.validation !== undefined ? String(p.validation) : '')
      setSelectField(
        p.selectField !== undefined
          ? String(p.selectField)
          : b.selectField !== undefined
          ? String(b.selectField)
          : ''
      )
      setPlainText(p.plainText !== undefined ? String(p.plainText) : '')
      setCssClass(
        p.cssClass !== undefined
          ? String(p.cssClass)
          : p.className !== undefined
          ? String(p.className)
          : ''
      )
      setSqlSelect(p.sqlSelect !== undefined ? String(p.sqlSelect) : '')
      setOffsetVal(String(p.offset ?? ''))
      setGroupFormat(p.groupFormat !== undefined ? String(p.groupFormat) : '')
      setFormatSummary(p.formatSummary !== undefined ? String(p.formatSummary) : '')
      setOrderBySummary(p.orderBySummary !== undefined ? String(p.orderBySummary) : '')
      setGroupEvent(p.groupEvent !== undefined ? String(p.groupEvent) : '')
      setIconVal(p.icon !== undefined ? String(p.icon) : '')
      setSystemVal(p.system !== undefined ? String(p.system) : '')
      setRefClass(p.refClass !== undefined ? String(p.refClass) : '')
      setHotKey(p.hotKey !== undefined ? String(p.hotKey) : '')
      setDateTimeField(p.dateTimeField !== undefined ? String(p.dateTimeField) : '')
      setAddStart(String(p.addStart ?? ''))
      setAddEnd(String(p.addEnd ?? ''))
      setBodyRowHeight(String(p.bodyRowHeight ?? ''))
      setSqlWhere(
        p.sqlWhere !== undefined
          ? String(p.sqlWhere)
          : b.sqlWhere !== undefined
          ? String(b.sqlWhere)
          : ''
      )
      setFooterHeight(String(p.footerHeight ?? ''))
      setJoinTable(p.joinTable !== undefined ? String(p.joinTable) : '')
      setIdField(
        p.idField !== undefined
          ? String(p.idField)
          : b.idField !== undefined
          ? String(b.idField)
          : 'id'
      )
      setHeaderHeight(String(p.headerHeight ?? ''))
      setPopulateField(
        p.populateField !== undefined
          ? String(p.populateField)
          : b.populateField !== undefined
          ? String(b.populateField)
          : ''
      )
      setPrecision(String(p.precision ?? ''))
      setGroupBy(p.groupBy !== undefined ? String(p.groupBy) : '')
      setDisabledExp(p.disabledExp !== undefined ? String(p.disabledExp) : '')
      setShowExp(p.showExp !== undefined ? String(p.showExp) : '')
      setRowVal(String(p.row ?? ''))
      setTemplateVal(p.template !== undefined ? String(p.template) : '')
      setTemplateLockedVal(p.templateLocked !== undefined ? String(p.templateLocked) : '')
      setDefaultVal(String(p.default ?? p.defaultValue ?? ''))

      // Checkboxes
      setDispRealtime(Boolean(p.realtime))
      setDispLabel(p.showLabel !== false && (p.label as any) !== false)
      setDispHidden(Boolean(p.hidden))
      setDispFilterLocal(Boolean(p.filterLocal))
      setDispSqlSearch(Boolean(p.sqlSearch))
      setDispCache(Boolean(p.cache))
      setDispMoveTab(Boolean(p.moveTab))
      setDispFocus(Boolean(p.focus))
      setDispFocusSearch(Boolean(p.focusSearch))
      setDispNoLoad(Boolean(p.noLoad))
      setDispCollapsible(Boolean(p.collapsible))
      setDispHotKey(Boolean(p.showHotKey))
      setDispHistory(Boolean(p.history))

      setDispTop(Boolean(p.top))
      setDispHideAnd(Boolean(p.hideAnd))
      setDispDisabled(Boolean(p.disabled))
      setDispVisibility(p.visibility !== false)
      setDispActive(p.active !== false)
      setDispUpperCase(Boolean(p.upperCase))
      setDispVirtual(Boolean(p.virtualScroll || p.virtual))
      setDispPrivate(Boolean(p.isPrivate))
      setDispRenderIndex(Boolean(p.renderIndex))
      setDispAdd(Boolean(p.canAdd || p.add))
      setDispSearch(Boolean(p.canSearch || p.search))
      setDispSummary(Boolean(p.isSummary || p.summary))
      setDispDateTimeField(Boolean(p.showDateTimeField))

      // Code blocks (giữ chuỗi rỗng '' nếu người dùng đã xóa trắng!)
      const rawDs =
        p.dataSource !== undefined
          ? p.dataSource
          : p.dataSourceFilter !== undefined
          ? p.dataSourceFilter
          : b.dataSource !== undefined
          ? b.dataSource
          : ''
      setDataSourceCode(String(rawDs ?? ''))

      const rawFe =
        p.formatEntity !== undefined
          ? p.formatEntity
          : b.formatEntity !== undefined
          ? b.formatEntity
          : ''
      setFormatEntityCode(String(rawFe ?? ''))

      setMigrationCode(p.migration !== undefined ? String(p.migration) : '')

      const rawFd =
        p.formatData !== undefined
          ? p.formatData
          : b.formatData !== undefined
          ? b.formatData
          : ''
      setFormatDataCode(String(rawFd ?? ''))

      const rawQ =
        p.query !== undefined
          ? p.query
          : b.query !== undefined
          ? b.query
          : ''
      setQueryCode(String(rawQ ?? ''))

      setDropdownColumns(
        (p.dropdownColumns as DropdownColumnConfig[]) || b.dropdownColumns || []
      )
    }
  }, [node, isOpen])

  if (!isOpen || !node) return null

  const handleSave = () => {
    let parsedEvents: any = events
    try {
      if (events.trim().startsWith('{')) {
        parsedEvents = JSON.parse(events)
      }
    } catch {
      parsedEvents = events
    }

    const updatedProps: Record<string, any> = {
      ...node.props,
      id: componentId,
      group,
      reference,
      componentType,
      parentId,
      refName,
      fieldName,
      order: Number(order) || 1,
      colSpan: Number(column) || 4,
      column: Number(column) || 4,
      label,
      events: parsedEvents,
      style: styleVal,
      childStyle,
      validation,
      selectField,
      plainText,
      cssClass,
      sqlSelect,
      offset: offsetVal,
      groupFormat,
      formatSummary,
      orderBySummary,
      groupEvent,
      icon: iconVal,
      system: systemVal,
      refClass,
      hotKey,
      dateTimeField,
      addStart,
      addEnd,
      bodyRowHeight,
      sqlWhere,
      footerHeight,
      joinTable,
      idField,
      headerHeight,
      populateField,
      precision: precision ? Number(precision) : undefined,
      groupBy,
      disabledExp,
      showExp,
      row: rowVal,
      template: templateVal,
      templateLocked: templateLockedVal,
      default: defaultVal,

      // Display flags
      realtime: dispRealtime,
      showLabel: dispLabel,
      hidden: dispHidden,
      filterLocal: dispFilterLocal,
      sqlSearch: dispSqlSearch,
      cache: dispCache,
      moveTab: dispMoveTab,
      focus: dispFocus,
      focusSearch: dispFocusSearch,
      noLoad: dispNoLoad,
      collapsible: dispCollapsible,
      showHotKey: dispHotKey,
      history: dispHistory,

      top: dispTop,
      hideAnd: dispHideAnd,
      disabled: dispDisabled,
      visibility: dispVisibility,
      active: dispActive,
      upperCase: dispUpperCase,
      virtual: dispVirtual,
      isPrivate: dispPrivate,
      renderIndex: dispRenderIndex,
      add: dispAdd,
      search: dispSearch,
      summary: dispSummary,
      showDateTimeField: dispDateTimeField,

      // Code blocks
      dataSource: dataSourceCode,
      dataSourceFilter: dataSourceCode,
      formatEntity: formatEntityCode,
      migration: migrationCode,
      formatData: formatDataCode,
      query: dataSourceCode,
      dropdownColumns,
    }

    const updatedBinding = {
      ...(node.dataBinding || {}),
      entityName: reference || refName || '',
      refName: refName || reference || '',
      fieldName: fieldName || node.id,
      query: dataSourceCode,
      dataSource: dataSourceCode,
      sqlWhere,
      selectField,
      populateField,
      idField,
      formatData: formatDataCode,
      formatEntity: formatEntityCode,
      dropdownColumns,
      twoWay: true,
    }

    onSave(node.id, updatedProps, updatedBinding)
    onClose()
  }

  const combinedEntities = buildCombinedEntityCatalog(entities)
  const selectedEntity = findMatchingEntity(combinedEntities, reference || refName)
  const availableFields = selectedEntity ? selectedEntity.fields : []
  const isSelectLike = ['Select', 'Dropdown', 'Autocomplete', 'SearchEntry'].includes(componentType)

  // Helper checkbox input with green tick style matching legacy Core
  const renderCheckbox = (
    labelTxt: string,
    checked: boolean,
    setChecked: (v: boolean) => void
  ) => (
    <label className="flex items-center justify-between py-1 px-1.5 hover:bg-slate-800/60 rounded cursor-pointer select-none transition-colors">
      <span className={`text-[11px] ${checked ? 'text-slate-200 font-medium' : 'text-slate-400'}`}>
        {labelTxt}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
      />
    </label>
  )

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-7xl rounded-lg border border-teal-600/40 bg-[#0d1525] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[96vh] relative">
        {/* ── TOP HEADER (Khớp ảnh: Component properties [Lưu] [Phân quyền] [Đóng]) ── */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-[#09101d] border-b border-teal-600/30">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-teal-400" />
            <span className="font-bold text-sm tracking-wide text-white">Component properties</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800/60 font-mono">
              #{componentId || node.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('permissions')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>Phân quyền</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5 text-rose-400" />
              <span>Đóng</span>
            </button>
          </div>
        </div>

        {/* ── SUB-HEADER TABS (THÔNG TIN CHUNG | CỘT DROPDOWN | QUYỀN HẠN | REPORT) ── */}
        <div className="flex items-center border-b border-slate-800 bg-[#0a1220] px-5 gap-6 text-xs font-semibold select-none">
          <button
            type="button"
            onClick={() => setActiveTab('info')}
            className={`py-2 border-b-2 transition-colors cursor-pointer ${activeTab === 'info'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
          >
            THÔNG TIN CHUNG
          </button>
          {isSelectLike && (
            <button
              type="button"
              onClick={() => setActiveTab('dropdownColumns')}
              className={`py-2 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${activeTab === 'dropdownColumns'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
            >
              <TableIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>CỘT DROPDOWN</span>
              {dropdownColumns.length > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                  {dropdownColumns.length}
                </span>
              )}
            </button>
          )}
          <button
            type="button"
            onClick={() => setActiveTab('permissions')}
            className={`py-2 border-b-2 transition-colors cursor-pointer ${activeTab === 'permissions'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
          >
            QUYỀN HẠN
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('report')}
            className={`py-2 border-b-2 transition-colors cursor-pointer ${activeTab === 'report'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
          >
            REPORT
          </button>
        </div>

        {/* ── TAB CONTENT BODY ── */}
        <div className="p-4 overflow-y-auto space-y-4">
          {activeTab === 'info' && (
            <div className="space-y-4">
              {/* TOP SECTION: COMMON (3 Cột) & DISPLAY (Checkboxes) */}
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                {/* 3 CỘT TRÁI: KHỐI COMMON (Khớp 100% Ảnh Modal Core C#) */}
                <div className="xl:col-span-3 space-y-3 bg-[#0a1220]/60 p-3.5 rounded-lg border border-slate-800">
                  <div className="text-[11px] font-bold text-teal-400 border-b border-slate-800 pb-1 tracking-wider uppercase">
                    COMMON
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 gap-y-2 text-xs">
                    {/* Hàng 1 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Id</label>
                      <input
                        type="text"
                        disabled
                        value={componentId}
                        className="w-full px-2 py-1 bg-slate-900 border border-slate-800 rounded font-mono text-teal-300 opacity-80"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Group</label>
                      <input
                        type="text"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Reference (Chọn Thực Thể)</label>
                      <select
                        value={selectedEntity ? selectedEntity.name : ''}
                        onChange={(e) => {
                          const entName = e.target.value
                          setReference(entName)
                          setRefName(entName)
                        }}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer"
                      >
                        <option value="">-- Chọn Thực Thể Danh Mục --</option>
                        {combinedEntities.map((ent) => (
                          <option key={ent.name} value={ent.name}>
                            {ent.displayName} ({ent.name})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Hàng 2 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Component</label>
                      <select
                        value={componentType}
                        onChange={(e) => setComponentType(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none cursor-pointer"
                      >
                        <option value="Dropdown">Dropdown</option>
                        <option value="TextBox">TextBox / Input</option>
                        <option value="Number">Number</option>
                        <option value="DatePicker">DatePicker</option>
                        <option value="Select">Select</option>
                        <option value="Checkbox">Checkbox</option>
                        <option value="Textarea">Textarea</option>
                        <option value="Table">Table / GridView</option>
                        <option value="RecordSelector">RecordSelector (Lô hàng)</option>
                        <option value="Section">Section Card</option>
                        <option value="Container">Container</option>
                        <option value="Button">Button</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">ParentId</label>
                      <input
                        type="text"
                        value={parentId}
                        onChange={(e) => setParentId(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">RefName (Hoặc nhập tay)</label>
                      <input
                        type="text"
                        value={refName}
                        placeholder="VD: Vendor, Terminal, Customer..."
                        onChange={(e) => {
                          setRefName(e.target.value)
                          setReference(e.target.value)
                        }}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-cyan-300 font-mono text-xs focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 3 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Field Name</label>
                      <input
                        type="text"
                        value={fieldName}
                        onChange={(e) => setFieldName(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Order</label>
                      <input
                        type="number"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Column</label>
                      <input
                        type="number"
                        value={column}
                        onChange={(e) => setColumn(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 4 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Label</label>
                      <input
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between">
                        <span>Events</span>
                        <span className="text-[9px] text-cyan-400 font-mono">Đã chuyển sang Tab Events</span>
                      </label>
                      <div className="w-full px-2 py-1 bg-slate-900/60 border border-slate-800 rounded text-slate-400 text-[11px] italic flex items-center justify-between">
                        <span className="truncate">Cấu hình trực quan tại Tab Events</span>
                        <span className="text-[10px] text-cyan-400 font-mono">⚡ Visual</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Style</label>
                      <input
                        type="text"
                        value={styleVal}
                        onChange={(e) => setStyleVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 5 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Child style</label>
                      <input
                        type="text"
                        value={childStyle}
                        onChange={(e) => setChildStyle(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Validation</label>
                      <input
                        type="text"
                        value={validation}
                        onChange={(e) => setValidation(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Select Field</label>
                      <input
                        type="text"
                        value={selectField}
                        onChange={(e) => setSelectField(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 6 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Plain text</label>
                      <input
                        type="text"
                        value={plainText}
                        onChange={(e) => setPlainText(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Css class</label>
                      <input
                        type="text"
                        value={cssClass}
                        onChange={(e) => setCssClass(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Sql Select</label>
                      <input
                        type="text"
                        value={sqlSelect}
                        onChange={(e) => setSqlSelect(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 7 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Offset</label>
                      <input
                        type="text"
                        value={offsetVal}
                        onChange={(e) => setOffsetVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">GroupFormat</label>
                      <input
                        type="text"
                        value={groupFormat}
                        onChange={(e) => setGroupFormat(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Format Sumary</label>
                      <input
                        type="text"
                        value={formatSummary}
                        onChange={(e) => setFormatSummary(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 8 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">OrderBy Sumary</label>
                      <input
                        type="text"
                        value={orderBySummary}
                        onChange={(e) => setOrderBySummary(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Group event</label>
                      <input
                        type="text"
                        value={groupEvent}
                        onChange={(e) => setGroupEvent(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Icon</label>
                      <input
                        type="text"
                        value={iconVal}
                        onChange={(e) => setIconVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 9 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">System</label>
                      <input
                        type="text"
                        value={systemVal}
                        onChange={(e) => setSystemVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Ref class</label>
                      <input
                        type="text"
                        value={refClass}
                        onChange={(e) => setRefClass(e.target.value)}
                        placeholder="TMS.UI.Business.Catalogue.TerminalEditor..."
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-cyan-300 font-mono text-[11px] focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">HotKey</label>
                      <input
                        type="text"
                        value={hotKey}
                        onChange={(e) => setHotKey(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 10 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">DateTime field</label>
                      <input
                        type="text"
                        value={dateTimeField}
                        onChange={(e) => setDateTimeField(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Add Start</label>
                      <input
                        type="text"
                        value={addStart}
                        onChange={(e) => setAddStart(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Add End</label>
                      <input
                        type="text"
                        value={addEnd}
                        onChange={(e) => setAddEnd(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 11 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">BodyRow Height</label>
                      <input
                        type="text"
                        value={bodyRowHeight}
                        onChange={(e) => setBodyRowHeight(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">SqlWhere</label>
                      <input
                        type="text"
                        value={sqlWhere}
                        onChange={(e) => setSqlWhere(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">FooterHeight</label>
                      <input
                        type="text"
                        value={footerHeight}
                        onChange={(e) => setFooterHeight(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 12 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">JoinTable</label>
                      <input
                        type="text"
                        value={joinTable}
                        onChange={(e) => setJoinTable(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">IdField</label>
                      <input
                        type="text"
                        value={idField}
                        onChange={(e) => setIdField(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">HeaderHeight</label>
                      <input
                        type="text"
                        value={headerHeight}
                        onChange={(e) => setHeaderHeight(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 13 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Populate field</label>
                      <input
                        type="text"
                        value={populateField}
                        onChange={(e) => setPopulateField(e.target.value)}
                        placeholder="Transaction.Vendor = Terminal.VendorId..."
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-emerald-300 font-mono text-[11px] focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Precision</label>
                      <input
                        type="number"
                        value={precision}
                        onChange={(e) => setPrecision(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">GroupBy</label>
                      <input
                        type="text"
                        value={groupBy}
                        onChange={(e) => setGroupBy(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 14 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">DisabledExp</label>
                      <input
                        type="text"
                        value={disabledExp}
                        onChange={(e) => setDisabledExp(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">ShowExp</label>
                      <input
                        type="text"
                        value={showExp}
                        onChange={(e) => setShowExp(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Row</label>
                      <input
                        type="text"
                        value={rowVal}
                        onChange={(e) => setRowVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    {/* Hàng 15 */}
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Template</label>
                      <input
                        type="text"
                        value={templateVal}
                        onChange={(e) => setTemplateVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px] flex items-center justify-between">
                        <span>Template</span>
                        <Lock className="w-3 h-3 text-amber-400" />
                      </label>
                      <input
                        type="text"
                        value={templateLockedVal}
                        onChange={(e) => setTemplateLockedVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Default</label>
                      <input
                        type="text"
                        value={defaultVal}
                        onChange={(e) => setDefaultVal(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 1 CỘT PHẢI: KHỐI DISPLAY (Checkboxes 2 Cột chuẩn theo ảnh) */}
                <div className="space-y-2 bg-[#0a1220]/60 p-3.5 rounded-lg border border-slate-800">
                  <div className="text-[11px] font-bold text-teal-400 border-b border-slate-800 pb-1 tracking-wider uppercase">
                    DISPLAY
                  </div>

                  <div className="grid grid-cols-2 gap-x-2 text-xs">
                    {/* Cột Trái DISPLAY */}
                    <div className="space-y-0.5">
                      {renderCheckbox('Realtime', dispRealtime, setDispRealtime)}
                      {renderCheckbox('Label', dispLabel, setDispLabel)}
                      {renderCheckbox('Hidden', dispHidden, setDispHidden)}
                      {renderCheckbox('FilterLocal', dispFilterLocal, setDispFilterLocal)}
                      {renderCheckbox('SqlSearch', dispSqlSearch, setDispSqlSearch)}
                      {renderCheckbox('Cache', dispCache, setDispCache)}
                      {renderCheckbox('Move Tab', dispMoveTab, setDispMoveTab)}
                      {renderCheckbox('Focus', dispFocus, setDispFocus)}
                      {renderCheckbox('FocusSearch', dispFocusSearch, setDispFocusSearch)}
                      {renderCheckbox('No Load', dispNoLoad, setDispNoLoad)}
                      {renderCheckbox('Collapsible', dispCollapsible, setDispCollapsible)}
                      {renderCheckbox('HotKey', dispHotKey, setDispHotKey)}
                      {renderCheckbox('History', dispHistory, setDispHistory)}
                    </div>

                    {/* Cột Phải DISPLAY */}
                    <div className="space-y-0.5">
                      {renderCheckbox('Top', dispTop, setDispTop)}
                      {renderCheckbox('HideAnd', dispHideAnd, setDispHideAnd)}
                      {renderCheckbox('Disabled', dispDisabled, setDispDisabled)}
                      {renderCheckbox('Visibility', dispVisibility, setDispVisibility)}
                      {renderCheckbox('Active', dispActive, setDispActive)}
                      {renderCheckbox('Upper Case', dispUpperCase, setDispUpperCase)}
                      {renderCheckbox('Virtual', dispVirtual, setDispVirtual)}
                      {renderCheckbox('Private', dispPrivate, setDispPrivate)}
                      {renderCheckbox('Render Index', dispRenderIndex, setDispRenderIndex)}
                      {renderCheckbox('Add', dispAdd, setDispAdd)}
                      {renderCheckbox('Search', dispSearch, setDispSearch)}
                      {renderCheckbox('Sumary', dispSummary, setDispSummary)}
                      {renderCheckbox('DateTime Field', dispDateTimeField, setDispDateTimeField)}
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION: 5 KHỐI CODE EDITORS (DATASOURCE, FORMATENTITY, MIGRATION, FORMATDATA, QUERY) */}
              <div className="space-y-3 pt-2">
                {/* Hàng Code 1: DATASOURCE & FORMATENTITY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* DATASOURCE */}
                  <div className="bg-[#070d18] border border-slate-800 rounded p-2.5">
                    <div className="text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase flex items-center justify-between">
                      <span>DATASOURCE</span>
                      <span className="text-[10px] text-slate-500 font-mono">OData Query Template</span>
                    </div>
                    <div className="flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]">
                      <div className="py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right">
                        1
                      </div>
                      <textarea
                        rows={2}
                        value={dataSourceCode}
                        placeholder="VD: active = true hoặc ?$filter=Active eq true"
                        onChange={(e) => setDataSourceCode(e.target.value)}
                        className="w-full py-1 px-2.5 bg-transparent text-rose-300 placeholder-slate-600 focus:outline-none resize-y"
                      />
                    </div>
                  </div>

                  {/* FORMATENTITY */}
                  <div className="bg-[#070d18] border border-slate-800 rounded p-2.5">
                    <div className="text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase flex items-center justify-between">
                      <span>FORMATENTITY</span>
                      <span className="text-[10px] text-slate-500 font-mono">(x, y) =&gt; Function</span>
                    </div>
                    <div className="flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]">
                      <div className="py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right">
                        1
                      </div>
                      <textarea
                        rows={2}
                        value={formatEntityCode}
                        placeholder="VD: (x, y) => { return x.PortCode ? (x.PortCode + ' - ' + x.Name) : x.Name; }"
                        onChange={(e) => setFormatEntityCode(e.target.value)}
                        className="w-full py-1 px-2.5 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none resize-y"
                      />
                    </div>
                  </div>
                </div>

                {/* Hàng Code 2: MIGRATION & FORMATDATA (Ẩn FORMATDATA nếu là component Select/Dropdown vì đã nằm ở Tab Cột Dropdown) */}
                <div className={`grid grid-cols-1 ${!isSelectLike ? 'md:grid-cols-2' : ''} gap-3`}>
                  {/* MIGRATION */}
                  <div className="bg-[#070d18] border border-slate-800 rounded p-2.5">
                    <div className="text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase">
                      MIGRATION
                    </div>
                    <div className="flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]">
                      <div className="py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right">
                        1
                      </div>
                      <textarea
                        rows={2}
                        value={migrationCode}
                        onChange={(e) => setMigrationCode(e.target.value)}
                        placeholder="Migration scripts..."
                        className="w-full py-1 px-2.5 bg-transparent text-slate-300 placeholder-slate-600 focus:outline-none resize-y"
                      />
                    </div>
                  </div>

                  {/* FORMATDATA: Chỉ hiện ở đây cho component không liên quan đến Select */}
                  {!isSelectLike && (
                    <div className="bg-[#070d18] border border-slate-800 rounded p-2.5">
                      <div className="text-[11px] font-bold text-teal-400 mb-1 tracking-wider uppercase flex items-center justify-between">
                        <span>FORMATDATA</span>
                        <span className="text-[10px] text-slate-500 font-mono">{'{Field}'} Interpolation</span>
                      </div>
                      <div className="flex bg-[#030712] border border-slate-900 rounded font-mono text-[11px]">
                        <div className="py-1 px-2 text-slate-600 select-none border-r border-slate-900 text-right">
                          1
                        </div>
                        <textarea
                          rows={2}
                          value={formatDataCode}
                          onChange={(e) => setFormatDataCode(e.target.value)}
                          placeholder="{ShortName}"
                          className="w-full py-1 px-2.5 bg-transparent text-amber-300 placeholder-slate-600 focus:outline-none resize-y"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dropdownColumns' && isSelectLike && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <TableIcon className="w-4 h-4 text-emerald-400" />
                      <span>Cấu Hình Cột Hiển Thị Bảng Chọn Dropdown (Multi-Column Select)</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Thiết lập danh sách cột và định dạng hiển thị <span className="font-mono text-emerald-300">FORMATDATA</span> cho Select.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setDropdownColumns([
                          ...dropdownColumns,
                          {
                            key: availableFields[dropdownColumns.length]?.name || `col${dropdownColumns.length + 1}`,
                            title: availableFields[dropdownColumns.length]?.displayName || `Cột ${dropdownColumns.length + 1}`,
                            width: '50%',
                            align: 'left',
                          },
                        ])
                      }}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm Cột</span>
                    </button>
                    {selectedEntity && availableFields.length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          const preferred = ['code', 'fullname', 'name', 'address', 'taxcode', 'phone', 'shortname']
                          let picked = availableFields.filter((f) => preferred.includes(f.name.toLowerCase()))
                          if (picked.length === 0) picked = availableFields.slice(0, 3)
                          else picked = picked.slice(0, 4)
                          setDropdownColumns(
                            picked.map((f) => ({
                              key: f.name,
                              title: f.displayName || f.name,
                              width: `${Math.floor(100 / picked.length)}%`,
                              align: 'left',
                            }))
                          )
                        }}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Tự động nạp từ {selectedEntity.name}</span>
                      </button>
                    )}
                  </div>
                </div>

                {dropdownColumns.length === 0 ? (
                  <div className="p-5 border border-dashed border-slate-700 rounded-lg text-center text-xs text-slate-400">
                    Chưa có cột nào. Nhấn <strong>"Thêm Cột"</strong> hoặc <strong>"Tự động nạp"</strong> để bắt đầu.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {dropdownColumns.map((col, idx) => (
                      <div key={idx} className="grid grid-cols-12 gap-2 items-center p-2 bg-[#070d18] border border-slate-800 rounded">
                        <div className="col-span-1 flex items-center justify-center gap-0.5">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => {
                              const next = [...dropdownColumns]
                              const tmp = next[idx]
                              next[idx] = next[idx - 1]
                              next[idx - 1] = tmp
                              setDropdownColumns(next)
                            }}
                            className="p-0.5 text-slate-400 hover:text-white disabled:opacity-20"
                          >
                            <ChevronUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === dropdownColumns.length - 1}
                            onClick={() => {
                              const next = [...dropdownColumns]
                              const tmp = next[idx]
                              next[idx] = next[idx + 1]
                              next[idx + 1] = tmp
                              setDropdownColumns(next)
                            }}
                            className="p-0.5 text-slate-400 hover:text-white disabled:opacity-20"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="col-span-4">
                          <input
                            type="text"
                            value={col.key}
                            placeholder="Key (vd: FullName)"
                            onChange={(e) => {
                              const next = [...dropdownColumns]
                              next[idx] = { ...next[idx], key: e.target.value }
                              setDropdownColumns(next)
                            }}
                            className="w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                          />
                        </div>
                        <div className="col-span-3">
                          <input
                            type="text"
                            value={col.title}
                            placeholder="Tiêu đề cột"
                            onChange={(e) => {
                              const next = [...dropdownColumns]
                              next[idx] = { ...next[idx], title: e.target.value }
                              setDropdownColumns(next)
                            }}
                            className="w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs text-slate-100"
                          />
                        </div>
                        <div className="col-span-2">
                          <input
                            type="text"
                            value={col.width || '50%'}
                            placeholder="Width"
                            onChange={(e) => {
                              const next = [...dropdownColumns]
                              next[idx] = { ...next[idx], width: e.target.value }
                              setDropdownColumns(next)
                            }}
                            className="w-full px-2 py-1 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-slate-200"
                          />
                        </div>
                        <div className="col-span-1">
                          <select
                            value={col.align || 'left'}
                            onChange={(e) => {
                              const next = [...dropdownColumns]
                              next[idx] = { ...next[idx], align: e.target.value as 'left' | 'center' | 'right' }
                              setDropdownColumns(next)
                            }}
                            className="w-full px-1 py-1 bg-[#030712] border border-slate-700 rounded text-[11px] text-slate-200"
                          >
                            <option value="left">Trái</option>
                            <option value="center">Giữa</option>
                            <option value="right">Phải</option>
                          </select>
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setDropdownColumns(dropdownColumns.filter((_, i) => i !== idx))}
                            className="p-1 text-slate-400 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* FORMATDATA nằm tại đây cho Select */}
                <div className="bg-[#070d18] border border-slate-800 rounded p-3 space-y-2">
                  <div className="text-[11px] font-bold text-teal-400 tracking-wider uppercase flex items-center justify-between">
                    <span>FORMATDATA (Định dạng hiển thị sau khi chọn)</span>
                    <span className="text-[10px] text-slate-500 font-mono">{'{Entity.Field}'} Interpolation</span>
                  </div>
                  <input
                    type="text"
                    value={formatDataCode}
                    onChange={(e) => setFormatDataCode(e.target.value)}
                    placeholder="VD: {Vendor.FullName} - {Vendor.Address}"
                    className="w-full px-3 py-1.5 bg-[#030712] border border-slate-700 rounded text-xs font-mono text-amber-300 placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
                  />
                  {dropdownColumns.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {dropdownColumns.map((col, idx) => {
                        const prefix = reference || refName
                        const token = prefix ? `{${prefix}.${col.key}}` : `{${col.key}}`
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setFormatDataCode(formatDataCode ? `${formatDataCode} - ${token}` : token)}
                            className="px-2 py-0.5 bg-slate-800 hover:bg-emerald-900/40 text-emerald-300 border border-slate-700 rounded text-[10px] font-mono cursor-pointer"
                          >
                            + {token}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'permissions' && (
            <div className="space-y-4">
              <div className="bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-400" />
                  <span>Ma Trận Phân Quyền Theo Vai Trò (Roles & RBAC)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-300 border border-slate-800">
                    <thead className="bg-[#070d18] text-slate-400 uppercase text-[10px]">
                      <tr>
                        <th className="py-2 px-3 border border-slate-800">Vai Trò (Role)</th>
                        <th className="py-2 px-3 border border-slate-800 text-center">Xem (View)</th>
                        <th className="py-2 px-3 border border-slate-800 text-center">Sửa (Edit)</th>
                        <th className="py-2 px-3 border border-slate-800 text-center">Ẩn (Hide)</th>
                        <th className="py-2 px-3 border border-slate-800 text-center">Khóa (Disable)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {['Admin (Quản trị)', 'Operator (Nhân viên)', 'Accountant (Kế toán)', 'Customer (Khách hàng)'].map(
                        (role, idx) => (
                          <tr key={role} className="border-b border-slate-800 hover:bg-slate-800/40">
                            <td className="py-2 px-3 font-medium text-slate-200 border-r border-slate-800">
                              {role}
                            </td>
                            <td className="py-2 px-3 text-center border-r border-slate-800">
                              <input
                                type="checkbox"
                                defaultChecked
                                className="w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                              />
                            </td>
                            <td className="py-2 px-3 text-center border-r border-slate-800">
                              <input
                                type="checkbox"
                                defaultChecked={idx <= 1}
                                className="w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                              />
                            </td>
                            <td className="py-2 px-3 text-center border-r border-slate-800">
                              <input
                                type="checkbox"
                                defaultChecked={false}
                                className="w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                              />
                            </td>
                            <td className="py-2 px-3 text-center">
                              <input
                                type="checkbox"
                                defaultChecked={idx > 1}
                                className="w-3.5 h-3.5 accent-emerald-500 cursor-pointer"
                              />
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'report' && (
            <div className="space-y-4">
              <div className="bg-[#0a1220]/60 p-4 rounded-lg border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>Tham Số In Ấn & Xuất Báo Cáo (Excel / PDF Template)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Mã cột Excel (Excel Field Name)</label>
                    <input
                      type="text"
                      placeholder="VD: COL_POL_NAME"
                      className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Định dạng số / ngày (Format Pattern)</label>
                    <input
                      type="text"
                      placeholder="VD: #,##0.00 hoặc DD/MM/YYYY"
                      className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
