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
} from 'lucide-react'
import type { ComponentNode } from '@/types/schema'
import { fetchEntityMetadata, EntityMetadata } from '@/core/services/metadataService'

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
  const [activeTab, setActiveTab] = useState<'info' | 'permissions' | 'report'>('info')
  const [entities, setEntities] = useState<EntityMetadata[]>([])

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
  const [events, setEvents] = useState('{"change":"AutoPOL"}')
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

  // ── CODE / QUERY EDITORS (Khớp 100% Ảnh Modal: DATASOURCE, FORMATENTITY, MIGRATION, FORMATDATA, QUERY) ──
  const [dataSourceCode, setDataSourceCode] = useState(
    'return "?$filter=Active eq true and TerminalType/any(a:a/TypeId in ({${1}})) &$orderby=Id desc"'
  )
  const [formatEntityCode, setFormatEntityCode] = useState(
    '(x, y) => { return (x.PortCode !== null && x.PortCode !== undefined && x.PortCode !== "") ? (x.PortCode + " - " + x.Name) : x.Name; }'
  )
  const [migrationCode, setMigrationCode] = useState('')
  const [formatDataCode, setFormatDataCode] = useState('{ShortName}')
  const [queryCode, setQueryCode] = useState('')

  // Load entities from metadata engine
  useEffect(() => {
    fetchEntityMetadata().then((data) => setEntities(data))
  }, [])

  // Sync state when node changes
  useEffect(() => {
    if (node) {
      const p = node.props || {}
      const b = node.dataBinding || {}

      setComponentId(String(p.id ?? node.id))
      setGroup((p.group as string) || 'General')
      setReference((p.reference as string) || b.entityName || '')
      setComponentType(node.type || 'Dropdown')
      setParentId(String(p.parentId ?? ''))
      setRefName((p.refName as string) || (p.reference as string) || b.entityName || '')
      setFieldName(b.fieldName || (p.name as string) || (p.fieldName as string) || node.id)
      setOrder(Number(node.order ?? p.order ?? 1))
      setColumn(Number(p.colSpan ?? p.column ?? 4))
      setLabel((p.label as string) || '')
      setEvents(
        typeof p.events === 'string'
          ? p.events
          : p.events
            ? JSON.stringify(p.events)
            : '{"change":"AutoPOL"}'
      )
      setStyleVal((p.style as string) || '')
      setChildStyle((p.childStyle as string) || '')
      setValidation((p.validation as string) || '')
      setSelectField((p.selectField as string) || '')
      setPlainText((p.plainText as string) || '')
      setCssClass((p.cssClass as string) || (p.className as string) || '')
      setSqlSelect((p.sqlSelect as string) || '')
      setOffsetVal(String(p.offset ?? ''))
      setGroupFormat((p.groupFormat as string) || '')
      setFormatSummary((p.formatSummary as string) || '')
      setOrderBySummary((p.orderBySummary as string) || '')
      setGroupEvent((p.groupEvent as string) || '')
      setIconVal((p.icon as string) || '')
      setSystemVal((p.system as string) || '')
      setRefClass((p.refClass as string) || 'TMS.UI.Business.Catalogue.TerminalEditor')
      setHotKey((p.hotKey as string) || '')
      setDateTimeField((p.dateTimeField as string) || '')
      setAddStart(String(p.addStart ?? ''))
      setAddEnd(String(p.addEnd ?? ''))
      setBodyRowHeight(String(p.bodyRowHeight ?? ''))
      setSqlWhere((p.sqlWhere as string) || '')
      setFooterHeight(String(p.footerHeight ?? ''))
      setJoinTable((p.joinTable as string) || '')
      setIdField((p.idField as string) || 'id')
      setHeaderHeight(String(p.headerHeight ?? ''))
      setPopulateField((p.populateField as string) || '')
      setPrecision(String(p.precision ?? ''))
      setGroupBy((p.groupBy as string) || '')
      setDisabledExp((p.disabledExp as string) || '')
      setShowExp((p.showExp as string) || '')
      setRowVal(String(p.row ?? ''))
      setTemplateVal((p.template as string) || '')
      setTemplateLockedVal((p.templateLocked as string) || '')
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

      // Code blocks
      if (p.dataSource || p.dataSourceFilter || b.dataSource) {
        setDataSourceCode(String(p.dataSource || p.dataSourceFilter || b.dataSource))
      }
      if (p.formatEntity || b.formatEntity) {
        setFormatEntityCode(String(p.formatEntity || b.formatEntity))
      }
      if (p.migration) {
        setMigrationCode(String(p.migration))
      }
      if (p.formatData || b.formatData) {
        setFormatDataCode(String(p.formatData || b.formatData))
      }
      if (p.query || b.query) {
        setQueryCode(String(p.query || b.query))
      }
    }
  }, [node])

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
    }

    const updatedBinding = {
      ...(node.dataBinding || {}),
      entityName: reference || refName || node.dataBinding?.entityName || group || 'General',
      refName: refName || reference || node.dataBinding?.refName || '',
      fieldName: fieldName || node.id,
      query: dataSourceCode,
      dataSource: dataSourceCode,
      sqlWhere,
      selectField,
      populateField,
      idField,
      formatData: formatDataCode,
      formatEntity: formatEntityCode,
      twoWay: true,
    }

    onSave(node.id, updatedProps, updatedBinding)
    onClose()
  }

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

        {/* ── SUB-HEADER TABS (THÔNG TIN CHUNG | QUYỀN HẠN | REPORT) ── */}
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
                      <label className="text-slate-400 block mb-0.5 text-[11px]">Reference</label>
                      <input
                        type="text"
                        value={reference}
                        onChange={(e) => {
                          setReference(e.target.value)
                          if (!refName) setRefName(e.target.value)
                        }}
                        list="entity-list"
                        placeholder="VD: Terminal, Transaction..."
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
                      />
                      <datalist id="entity-list">
                        {entities.map((e) => (
                          <option key={e.name} value={e.name}>
                            {e.displayName}
                          </option>
                        ))}
                      </datalist>
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
                      <label className="text-slate-400 block mb-0.5 text-[11px]">RefName</label>
                      <input
                        type="text"
                        value={refName}
                        onChange={(e) => setRefName(e.target.value)}
                        className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-teal-500 focus:outline-none"
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
                        onChange={(e) => setDataSourceCode(e.target.value)}
                        className="w-full py-1 px-2.5 bg-transparent text-rose-300 focus:outline-none resize-y"
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
                        onChange={(e) => setFormatEntityCode(e.target.value)}
                        className="w-full py-1 px-2.5 bg-transparent text-cyan-300 focus:outline-none resize-y"
                      />
                    </div>
                  </div>
                </div>

                {/* Hàng Code 2: MIGRATION & FORMATDATA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                        className="w-full py-1 px-2.5 bg-transparent text-slate-300 focus:outline-none resize-y"
                      />
                    </div>
                  </div>

                  {/* FORMATDATA */}
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
                        className="w-full py-1 px-2.5 bg-transparent text-amber-300 focus:outline-none resize-y"
                      />
                    </div>
                  </div>
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
