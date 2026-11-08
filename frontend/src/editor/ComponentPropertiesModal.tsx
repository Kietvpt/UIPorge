import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Save,
  Shield,
  X,
  Sliders,
  Database,
  Code,
  FileText,
  Check,
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

  // Form states matching Master's screenshot (Component properties)
  const [componentId, setComponentId] = useState('')
  const [componentType, setComponentType] = useState('TextBox')
  const [fieldName, setFieldName] = useState('')
  const [label, setLabel] = useState('')
  const [group, setGroup] = useState('General')
  const [order, setOrder] = useState<number>(1)
  const [colSpan, setColSpan] = useState<number>(4)
  const [reference, setReference] = useState('')
  const [refName, setRefName] = useState('')
  const [populateField, setPopulateField] = useState('')
  const [idField, setIdField] = useState('id')
  const [query, setQuery] = useState('')
  const [formatData, setFormatData] = useState('{FullName}')

  // Checkboxes
  const [isActive, setIsActive] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(false)

  // Load entities from metadata engine
  useEffect(() => {
    fetchEntityMetadata().then((data) => setEntities(data))
  }, [])

  // Sync state when node changes
  useEffect(() => {
    if (node) {
      const p = node.props || {}
      const b = node.dataBinding || {}
      setComponentId(node.id)
      setComponentType(node.type)
      setFieldName(b.fieldName || (p.name as string) || node.id)
      setLabel((p.label as string) || '')
      setGroup((p.group as string) || 'General')
      setOrder(Number(node.order ?? p.order ?? 1))
      setColSpan(Number(p.colSpan ?? 4))
      setReference((p.reference as string) || b.entityName || '')
      setRefName((p.refName as string) || (p.reference as string) || b.entityName || '')
      setPopulateField((p.populateField as string) || '')
      setIdField((p.idField as string) || 'id')
      setQuery((p.query as string) || '')
      setFormatData((p.formatData as string) || '{FullName}')

      setIsActive(p.active !== false)
      setIsHidden(Boolean(p.hidden))
      setIsDisabled(Boolean(p.disabled))
      setIsReadOnly(Boolean(p.readOnly))
    }
  }, [node])

  if (!isOpen || !node) return null

  const handleSave = () => {
    const updatedProps: Record<string, any> = {
      ...node.props,
      label,
      group,
      order,
      colSpan,
      reference,
      refName,
      populateField,
      idField,
      query,
      formatData,
      active: isActive,
      hidden: isHidden,
      disabled: isDisabled,
      readOnly: isReadOnly,
    }

    const updatedBinding = {
      ...(node.dataBinding || {}),
      entityName: reference || node.dataBinding?.entityName || 'General',
      fieldName: fieldName,
      twoWay: true,
    }

    onSave(node.id, updatedProps, updatedBinding)
    onClose()
  }

  const selectedEntityObj = entities.find(
    (e) => e.name.toLowerCase() === reference.toLowerCase()
  )

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative">
        {/* ── TOP HEADER (Ảnh Core cũ: Component properties [Lưu] [Phân quyền] [Đóng]) ── */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-sm tracking-wide text-white">Component properties</span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-mono">
              {node.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-700/30 transition-all cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('permissions')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Phân quyền</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
            >
              <X className="w-3.5 h-3.5 text-rose-400" />
              <span>Đóng</span>
            </button>
          </div>
        </div>

        {/* ── SUB-HEADER TABS (THÔNG TIN CHUNG / QUYỀN HẠN / REPORT) ── */}
        <div className="flex items-center border-b border-slate-800 bg-[#0d162a] px-6 gap-6 text-xs font-semibold select-none">
          <button
            type="button"
            onClick={() => setActiveTab('info')}
            className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'info'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            THÔNG TIN CHUNG
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('permissions')}
            className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'permissions'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            QUYỀN HẠN
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('report')}
            className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'report'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            REPORT
          </button>
        </div>

        {/* ── BODY CONTENT ── */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'info' && (
            <div className="space-y-6">
              {/* COMMON & DISPLAY SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* 3 Cột Trái: Các trường cấu hình Common */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="text-xs font-bold text-emerald-400 border-b border-slate-800 pb-1 tracking-wider uppercase">
                    COMMON
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    {/* Id */}
                    <div>
                      <label className="text-slate-400 block mb-1">Id</label>
                      <input
                        type="text"
                        disabled
                        value={componentId}
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded font-mono text-cyan-300 opacity-80"
                      />
                    </div>

                    {/* Component */}
                    <div>
                      <label className="text-slate-400 block mb-1">Component</label>
                      <input
                        type="text"
                        disabled
                        value={componentType}
                        className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded text-slate-300 font-semibold"
                      />
                    </div>

                    {/* Field Name */}
                    <div>
                      <label className="text-slate-400 block mb-1">Field Name</label>
                      <input
                        type="text"
                        value={fieldName}
                        onChange={(e) => setFieldName(e.target.value)}
                        placeholder="Tên trường dữ liệu..."
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Label */}
                    <div>
                      <label className="text-slate-400 block mb-1">Label</label>
                      <input
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Group */}
                    <div>
                      <label className="text-slate-400 block mb-1">Group</label>
                      <input
                        type="text"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Column (colSpan) */}
                    <div>
                      <label className="text-slate-400 block mb-1">Column (Span /12)</label>
                      <input
                        type="number"
                        min={1}
                        max={12}
                        value={colSpan}
                        onChange={(e) => setColSpan(Number(e.target.value))}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Reference (Select Entity from Metadata) */}
                    <div>
                      <label className="text-slate-400 block mb-1">Reference (Bảng liên kết)</label>
                      <select
                        value={reference}
                        onChange={(e) => {
                          setReference(e.target.value)
                          setRefName(e.target.value)
                        }}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-emerald-500 focus:outline-none cursor-pointer"
                      >
                        <option value="">-- Không tham chiếu --</option>
                        {entities.map((ent) => (
                          <option key={ent.name} value={ent.name}>
                            {ent.displayName} ({ent.name})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* RefName */}
                    <div>
                      <label className="text-slate-400 block mb-1">RefName</label>
                      <input
                        type="text"
                        value={refName}
                        onChange={(e) => setRefName(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* IdField */}
                    <div>
                      <label className="text-slate-400 block mb-1">IdField</label>
                      <input
                        type="text"
                        value={idField}
                        onChange={(e) => setIdField(e.target.value)}
                        placeholder="id hoặc code"
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-slate-100 font-mono focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Populate field (Quy chuẩn Core C#) */}
                  <div className="pt-2">
                    <label className="text-slate-400 block mb-1 font-semibold flex items-center justify-between">
                      <span>Populate field</span>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        TargetField = SourceField (VD: Transaction.ABC = Terminal.XYZ)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={populateField}
                      onChange={(e) => setPopulateField(e.target.value)}
                      placeholder="Transaction.Vendor = Terminal.VendorId, Transaction.Agent = Terminal.AgentName"
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-emerald-300 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* 1 Cột Phải: DISPLAY (Checkboxes) */}
                <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-emerald-400 border-b border-slate-800 pb-1 tracking-wider uppercase">
                    DISPLAY
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                        className="rounded bg-slate-800 border-slate-700 text-emerald-600"
                      />
                      <span className={isActive ? 'text-slate-200' : 'text-slate-500'}>Active (Khả dụng)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isHidden}
                        onChange={(e) => setIsHidden(e.target.checked)}
                        className="rounded bg-slate-800 border-slate-700 text-emerald-600"
                      />
                      <span className={isHidden ? 'text-slate-200' : 'text-slate-500'}>Hidden (Ẩn)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isDisabled}
                        onChange={(e) => setIsDisabled(e.target.checked)}
                        className="rounded bg-slate-800 border-slate-700 text-emerald-600"
                      />
                      <span className={isDisabled ? 'text-slate-200' : 'text-slate-500'}>Disabled (Vô hiệu)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isReadOnly}
                        onChange={(e) => setIsReadOnly(e.target.checked)}
                        className="rounded bg-slate-800 border-slate-700 text-emerald-600"
                      />
                      <span className={isReadOnly ? 'text-slate-200' : 'text-slate-500'}>ReadOnly (Chỉ xem)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* DATASOURCE / QUERY & FORMATDATA (Ảnh Core cũ) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                {/* DATASOURCE / QUERY */}
                <div>
                  <div className="text-xs font-bold text-emerald-400 mb-1.5 uppercase flex items-center justify-between">
                    <span>DATASOURCE / QUERY (OData)</span>
                    <span className="text-[10px] text-slate-500 font-normal">Active eq true...</span>
                  </div>
                  <textarea
                    rows={4}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="return &quot;?$filter=Active eq true&quot;"
                    className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-cyan-300 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {/* FORMATDATA */}
                <div>
                  <div className="text-xs font-bold text-emerald-400 mb-1.5 uppercase flex items-center justify-between">
                    <span>FORMATDATA</span>
                    <span className="text-[10px] text-slate-500 font-normal">{'{ShortName}'} hoặc {'{FullName}'}</span>
                  </div>
                  <textarea
                    rows={4}
                    value={formatData}
                    onChange={(e) => setFormatData(e.target.value)}
                    placeholder="{FullName}"
                    className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-amber-300 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'permissions' && (
            <div className="p-8 text-center border border-dashed border-slate-800 rounded-xl space-y-2">
              <Shield className="w-8 h-8 text-blue-400 mx-auto" />
              <div className="text-sm font-bold text-slate-200">Phân Quyền Component</div>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Cấu hình quyền Xem (View), Chỉnh sửa (Edit) hoặc Ẩn (Hide) đối với từng Nhóm người dùng (Admin, Dev, Operator).
              </p>
            </div>
          )}

          {activeTab === 'report' && (
            <div className="p-8 text-center border border-dashed border-slate-800 rounded-xl space-y-2">
              <FileText className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="text-sm font-bold text-slate-200">Cấu hình In ấn & Xuất Báo Cáo</div>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Cấu hình tham số khi xuất sang mẫu in Excel hoặc PDF.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
