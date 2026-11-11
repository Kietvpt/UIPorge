import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Save,
  Shield,
  X,
  Sliders,
  Zap,
  Table as TableIcon,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'
import type { TableColumn, ComponentEvent, DropdownColumnConfig } from '@/types/schema'
import { useEditorStore } from '@/store/editorStore'
import { UnifiedEventEditor } from '@/editor/events/UnifiedEventEditor'

export interface ColumnPropertiesModalProps {
  isOpen: boolean
  column: TableColumn | null
  onClose: () => void
  onSave: (updatedColumn: TableColumn) => void
}

export const ColumnPropertiesModal: React.FC<ColumnPropertiesModalProps> = ({
  isOpen,
  column,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<TableColumn | null>(null)
  const [activeBottomTab, setActiveBottomTab] = useState<'info' | 'dropdownColumns' | 'events' | 'permissions'>('info')
  const activeFeature = useEditorStore((s) => s.features.find((f) => f.id === s.activeFeatureId))

  useEffect(() => {
    if (column) {
      let parsedEvents: ComponentEvent[] = []
      if (Array.isArray(column.events)) {
        parsedEvents = [...column.events]
      } else if (typeof column.events === 'string' && column.events.trim()) {
        try {
          const raw = JSON.parse(column.events)
          if (Array.isArray(raw)) parsedEvents = raw
        } catch {}
      }

      // Tự động đồng bộ nếu cột có action (ví dụ: action = 'openTransactionDetail')
      if (parsedEvents.length === 0 && column.action) {
        parsedEvents = [
          {
            id: `evt-${column.key}-action`,
            trigger: column.componentType === 'Button' ? 'click' : 'dblclick',
            handlerName: column.action,
            action: column.action,
          },
        ]
      }

      setFormData({
        ...column,
        code: column.code || `GP${Math.floor(100000 + Math.random() * 900000)}`,
        order: column.order ?? 1,
        width: column.width || '162px',
        minWidth: column.minWidth || '162px',
        maxWidth: column.maxWidth || '162px',
        componentType: (column.componentType || 'TextBox') as any,
        align: column.align || 'left',
        editable: column.editable ?? true,
        frozen: Boolean(column.frozen || column.sticky === 'left'),
        sticky: Boolean(column.frozen || column.sticky === 'left') ? 'left' : 'none',
        active: column.active ?? true,
        hasFilter: column.hasFilter ?? true,
        advancedSearch: column.advancedSearch ?? true,
        formatCell: column.formatCell || (column.format as string) || '{Name}',
        events: parsedEvents,
      })
    }
  }, [column])

  if (!isOpen || !formData) return null

  const columnEvents: ComponentEvent[] = Array.isArray(formData.events) ? formData.events : []

  const handleChange = (field: keyof TableColumn, value: any) => {
    setFormData((prev) => {
      if (!prev) return prev
      const updated = { ...prev, [field]: value }
      // Đồng bộ giữa frozen và sticky
      if (field === 'frozen') {
        updated.sticky = value ? 'left' : 'none'
      } else if (field === 'sticky') {
        updated.frozen = value === 'left'
      }
      return updated
    })
  }

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (formData) {
      onSave(formData)
      onClose()
    }
  }

  // ── PORTAL TO BODY (z-[999999]): ĐẢM BẢO HOÀN TOÀN KHÔNG BỊ CÁC Ô GHIM CỦA BẢNG ĐÈ LÊN UI ──
  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="w-full max-w-6xl rounded-xl border border-emerald-500/40 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col text-slate-200 my-auto max-h-[95vh] relative z-10">
        {/* ── TOP HEADER (Ảnh Core cũ: Properties [Lưu] [Phân quyền] [Đóng]) ── */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#0b1329] border-b border-emerald-600/30">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-sm tracking-wide text-slate-100">Properties (GridPolicy)</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
              {formData.key || 'Column'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-950/50 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveBottomTab('permissions')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-semibold text-xs transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Phân quyền</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Đóng</span>
            </button>
          </div>
        </div>

        {/* ── BODY: 3 CỘT (COMMON | DISPLAY 2 | DISPLAY) ── */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* ── CỘT 1: COMMON ── */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 space-y-2.5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800">
                COMMON
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Code</label>
                <input
                  type="text"
                  value={formData.code || ''}
                  onChange={(e) => handleChange('code', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-cyan-400 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-emerald-400 font-bold block mb-0.5">Thứ Tự Cột (Order) *</label>
                <input
                  type="number"
                  value={formData.order ?? 1}
                  onChange={(e) => handleChange('order', parseInt(e.target.value) || 0)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/50 text-emerald-300 font-mono text-xs focus:border-emerald-400 focus:outline-none font-bold"
                />
                <span className="text-[9px] text-slate-500">Số nhỏ đứng trước, quyết định thứ tự cột từ trái sang phải</span>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Feature</label>
                <input
                  type="text"
                  value={formData.feature || 'F0013000'}
                  onChange={(e) => handleChange('feature', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Ref Class</label>
                <input
                  type="text"
                  value={formData.refClass || ''}
                  onChange={(e) => handleChange('refClass', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Filter Template</label>
                <input
                  type="text"
                  value={formData.filterTemplate || ''}
                  onChange={(e) => handleChange('filterTemplate', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Format Excel</label>
                <input
                  type="text"
                  value={formData.formatExcell || ''}
                  onChange={(e) => handleChange('formatExcell', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">ChildStyle</label>
                <input
                  type="text"
                  value={formData.childStyle || ''}
                  onChange={(e) => handleChange('childStyle', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">DataSource (OData / Query)</label>
                <textarea
                  rows={2}
                  value={formData.dataSource || ''}
                  onChange={(e) => handleChange('dataSource', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-[11px] focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* ── CỘT 2: DISPLAY 2 ── */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 space-y-2.5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800">
                DISPLAY 2
              </div>

              <div>
                <label className="text-[10px] text-emerald-400 font-bold block mb-0.5">Field Name *</label>
                <input
                  type="text"
                  value={formData.key}
                  onChange={(e) => handleChange('key', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/50 text-emerald-300 font-mono text-xs focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-300 font-bold block mb-0.5">Short Desc (Tiêu Đề Cột) *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Description</label>
                <input
                  type="text"
                  value={formData.description || ''}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">RefName</label>
                  <input
                    type="text"
                    value={formData.refName || ''}
                    onChange={(e) => handleChange('refName', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Reference</label>
                  <input
                    type="text"
                    value={formData.reference || ''}
                    onChange={(e) => handleChange('reference', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Format Cell</label>
                  <input
                    type="text"
                    value={formData.formatCell || ''}
                    placeholder="{Name}"
                    onChange={(e) => handleChange('formatCell', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-emerald-400 font-semibold block mb-0.5">Format Data (Select)</label>
                  <input
                    type="text"
                    value={formData.formatData || ''}
                    placeholder="{FullName} - {Address}"
                    onChange={(e) => handleChange('formatData', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/40 text-emerald-300 font-mono text-xs focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Width</label>
                  <input
                    type="text"
                    value={formData.width || '162px'}
                    onChange={(e) => handleChange('width', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Min Width</label>
                  <input
                    type="text"
                    value={formData.minWidth || '162px'}
                    onChange={(e) => handleChange('minWidth', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Max Width</label>
                  <input
                    type="text"
                    value={formData.maxWidth || '162px'}
                    onChange={(e) => handleChange('maxWidth', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* ── CỘT 3: DISPLAY ── */}
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 space-y-2.5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800">
                DISPLAY
              </div>

              <div>
                <label className="text-[10px] text-emerald-400 font-bold block mb-0.5">Component (Loại Ô) *</label>
                <select
                  value={formData.componentType || 'TextBox'}
                  onChange={(e) => handleChange('componentType', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-emerald-500/50 text-slate-100 text-xs focus:border-emerald-400 focus:outline-none font-semibold"
                >
                  <option value="TextBox">TextBox (Input ô gõ trực tiếp)</option>
                  <option value="Dropdown">Dropdown (Select danh mục)</option>
                  <option value="Select">Select (Lựa chọn)</option>
                  <option value="DatePicker">DatePicker (Chọn lịch)</option>
                  <option value="Number">Number (Số / Định dạng)</option>
                  <option value="Checkbox">Checkbox (Hộp kiểm)</option>
                  <option value="Button">Button (Nút bấm thao tác)</option>
                  <option value="Link">Link (Đường dẫn bấm được)</option>
                  <option value="Textarea">Textarea (Nhiều dòng)</option>
                  <option value="Label">Label (Chỉ đọc - Readonly)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Precision</label>
                  <input
                    type="number"
                    min={0}
                    max={6}
                    value={formData.precision ?? 0}
                    onChange={(e) => handleChange('precision', parseInt(e.target.value) || 0)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Text Align</label>
                  <select
                    value={formData.align || 'left'}
                    onChange={(e) => handleChange('align', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="left">Left (Trái)</option>
                    <option value="center">Center (Giữa)</option>
                    <option value="right">Right (Phải)</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[10px] text-slate-400 block font-semibold">Events (Sự Kiện Cột)</label>
                  <button
                    type="button"
                    onClick={() => setActiveBottomTab('events')}
                    className="text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>{columnEvents.length > 0 ? `Cấu hình (${columnEvents.length})` : '+ Thêm Sự Kiện'}</span>
                  </button>
                </div>
                <div
                  onClick={() => setActiveBottomTab('events')}
                  className="w-full px-2.5 py-1.5 rounded bg-[#0b1329] border border-slate-700 hover:border-emerald-500/70 text-slate-200 text-xs flex items-center justify-between cursor-pointer transition-all shadow-inner group"
                  title="Nhấn để mở Tab cấu hình sự kiện cho cột này"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                    {columnEvents.length > 0 ? (
                      <span className="text-emerald-300 font-mono text-[11px] truncate">
                        {columnEvents.map((ev) => `${ev.trigger} ➔ ${ev.handlerName || ev.action}()`).join(', ')}
                      </span>
                    ) : (
                      <span className="text-slate-500 italic text-[11px]">Chưa cấu hình sự kiện</span>
                    )}
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono shrink-0 group-hover:bg-emerald-950 group-hover:text-emerald-300 transition-colors">
                    {columnEvents.length} event{columnEvents.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Cascade</label>
                  <input
                    type="text"
                    value={formData.cascadeField || ''}
                    onChange={(e) => handleChange('cascadeField', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block mb-0.5">Summary</label>
                  <select
                    value={formData.aggregate || 'none'}
                    onChange={(e) => handleChange('aggregate', e.target.value)}
                    className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="none">None</option>
                    <option value="sum">Sum</option>
                    <option value="count">Count</option>
                    <option value="avg">Avg</option>
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 block mb-0.5">Validation</label>
                <input
                  type="text"
                  value={formData.validation || ''}
                  onChange={(e) => handleChange('validation', e.target.value)}
                  className="w-full px-2.5 py-1 rounded bg-[#0b1329] border border-slate-700 text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* ── TABS CHÂN FORM (Ảnh Core cũ: THÔNG TIN KHÁC / PHÂN QUYỀN) ── */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/90 overflow-hidden">
            <div className="flex border-b border-slate-800 bg-[#0b1329] text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveBottomTab('info')}
                className={`px-5 py-2.5 border-b-2 transition-colors ${
                  activeBottomTab === 'info'
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                THÔNG TIN KHÁC
              </button>
              {(formData.componentType === 'Select' || (formData.componentType as string) === 'Dropdown') && (
                <button
                  type="button"
                  onClick={() => setActiveBottomTab('dropdownColumns')}
                  className={`px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeBottomTab === 'dropdownColumns'
                      ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TableIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CỘT DROPDOWN</span>
                  {(formData.dropdownColumns?.length ?? 0) > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                      {formData.dropdownColumns!.length}
                    </span>
                  )}
                </button>
              )}
              <button
                type="button"
                onClick={() => setActiveBottomTab('events')}
                className={`px-5 py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeBottomTab === 'events'
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>SỰ KIỆN (EVENTS)</span>
                {columnEvents.length > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                    {columnEvents.length}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setActiveBottomTab('permissions')}
                className={`px-5 py-2.5 border-b-2 transition-colors ${
                  activeBottomTab === 'permissions'
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                PHÂN QUYỀN
              </button>
            </div>

            {activeBottomTab === 'info' && (
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-xs">
                {/* Cột 1 */}
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.frozen)}
                      onChange={(e) => handleChange('frozen', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className={formData.frozen ? 'font-bold text-emerald-300' : 'text-slate-300'}>
                      📌 Frozen (Cố định cột)
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.disabled)}
                      onChange={(e) => handleChange('disabled', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Disabled</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.hasPermission)}
                      onChange={(e) => handleChange('hasPermission', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Phân quyền</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.focusSearch)}
                      onChange={(e) => handleChange('focusSearch', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Focus Search</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.filterEq)}
                      onChange={(e) => handleChange('filterEq', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Filter Eq</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.filterLocal)}
                      onChange={(e) => handleChange('filterLocal', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">FilterLocal</span>
                  </label>
                </div>

                {/* Cột 2 */}
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.hidden)}
                      onChange={(e) => handleChange('hidden', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Hidden (Ẩn cột)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.active ?? true}
                      onChange={(e) => handleChange('active', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300 font-semibold text-emerald-400">Active</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.advancedSearch ?? true}
                      onChange={(e) => handleChange('advancedSearch', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Adv search</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.virtualScroll)}
                      onChange={(e) => handleChange('virtualScroll', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">VirtualScroll</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.upperCase)}
                      onChange={(e) => handleChange('upperCase', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">UpperCase</span>
                  </label>
                </div>

                {/* Cột 3 */}
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.hasFilter ?? true}
                      onChange={(e) => handleChange('hasFilter', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Filter</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.isRealtime)}
                      onChange={(e) => handleChange('isRealtime', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Realtime</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.autoFit)}
                      onChange={(e) => handleChange('autoFit', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Auto fit</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.aggregate && formData.aggregate !== 'none'}
                      onChange={(e) => handleChange('aggregate', e.target.checked ? 'sum' : 'none')}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">IsSumary</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.addDate)}
                      onChange={(e) => handleChange('addDate', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">AddDate</span>
                  </label>
                </div>

                {/* Cột 4 */}
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.editable ?? true}
                      onChange={(e) => handleChange('editable', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-emerald-400 font-bold">Editable (Cho phép sửa)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.isPivot)}
                      onChange={(e) => handleChange('isPivot', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Pivot</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.basicSearch)}
                      onChange={(e) => handleChange('basicSearch', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Basic Search</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.ignoreTrigger)}
                      onChange={(e) => handleChange('ignoreTrigger', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">Ignore Trigger</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={Boolean(formData.hideGrid)}
                      onChange={(e) => handleChange('hideGrid', e.target.checked)}
                      className="rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                    />
                    <span className="text-slate-300">HideGrid</span>
                  </label>
                </div>
              </div>
            )}

            {activeBottomTab === 'dropdownColumns' && (() => {
              const cols: DropdownColumnConfig[] = formData.dropdownColumns || []
              const updateCols = (next: DropdownColumnConfig[]) => handleChange('dropdownColumns', next)

              return (
                <div className="p-4 bg-slate-950/60 space-y-4 max-h-[420px] overflow-y-auto text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <h4 className="font-bold text-emerald-300 flex items-center gap-1.5">
                        <TableIcon className="w-4 h-4 text-emerald-400" />
                        <span>Cấu Hình Bảng Chọn Đa Cột Cho Cột [{formData.title || formData.key}]</span>
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Khi bấm vào ô Select trên bảng, danh sách sẽ mở dạng bảng nhiều cột từ thực thể <span className="font-mono text-cyan-300">{formData.reference || formData.refName || '(Chưa nhập Reference)'}</span>.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        updateCols([
                          ...cols,
                          {
                            key: `col${cols.length + 1}`,
                            title: `Cột ${cols.length + 1}`,
                            width: '50%',
                            align: 'left',
                          },
                        ])
                      }}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm Cột</span>
                    </button>
                  </div>

                  {/* Khóa chính & FormatData & PopulateField */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Khóa Chính (IdField)</label>
                      <input
                        type="text"
                        value={formData.idField || 'id'}
                        placeholder="id"
                        onChange={(e) => handleChange('idField', e.target.value)}
                        className="w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-emerald-400 font-semibold block mb-1">Định Dạng Hiển Thị (FormatData)</label>
                      <input
                        type="text"
                        value={formData.formatData || ''}
                        placeholder="{FullName} - {Address}"
                        onChange={(e) => handleChange('formatData', e.target.value)}
                        className="w-full px-2.5 py-1 bg-[#0b1329] border border-emerald-500/40 rounded text-xs font-mono text-emerald-300 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-purple-400 font-semibold block mb-1">Tự Động Điền Cột Khác (Populate)</label>
                      <input
                        type="text"
                        value={formData.populateField || ''}
                        placeholder="VendorName = FullName"
                        onChange={(e) => handleChange('populateField', e.target.value)}
                        className="w-full px-2.5 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-purple-300 focus:border-purple-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Bảng quản lý danh sách cột */}
                  {cols.length === 0 ? (
                    <div className="p-5 border border-dashed border-slate-700 rounded-xl text-center text-slate-400">
                      Chưa thiết lập cột hiển thị cho dropdown này. Nhấn <strong>"Thêm Cột"</strong> ở trên để bắt đầu.
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {cols.map((col, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-12 gap-2 items-center p-2 bg-slate-900 border border-slate-800 rounded-lg"
                        >
                          <div className="col-span-1 flex items-center justify-center gap-0.5">
                            <button
                              type="button"
                              disabled={idx === 0}
                              onClick={() => {
                                const next = [...cols]
                                const tmp = next[idx]
                                next[idx] = next[idx - 1]
                                next[idx - 1] = tmp
                                updateCols(next)
                              }}
                              className="p-0.5 text-slate-400 hover:text-white disabled:opacity-20"
                            >
                              <ChevronUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              disabled={idx === cols.length - 1}
                              onClick={() => {
                                const next = [...cols]
                                const tmp = next[idx]
                                next[idx] = next[idx + 1]
                                next[idx + 1] = tmp
                                updateCols(next)
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
                                const next = [...cols]
                                next[idx] = { ...next[idx], key: e.target.value }
                                updateCols(next)
                              }}
                              className="w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-cyan-300"
                            />
                          </div>
                          <div className="col-span-3">
                            <input
                              type="text"
                              value={col.title}
                              placeholder="Tiêu đề cột"
                              onChange={(e) => {
                                const next = [...cols]
                                next[idx] = { ...next[idx], title: e.target.value }
                                updateCols(next)
                              }}
                              className="w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs text-slate-100"
                            />
                          </div>
                          <div className="col-span-2">
                            <input
                              type="text"
                              value={col.width || '50%'}
                              placeholder="Width"
                              onChange={(e) => {
                                const next = [...cols]
                                next[idx] = { ...next[idx], width: e.target.value }
                                updateCols(next)
                              }}
                              className="w-full px-2 py-1 bg-[#0b1329] border border-slate-700 rounded text-xs font-mono text-slate-200"
                            />
                          </div>
                          <div className="col-span-1">
                            <select
                              value={col.align || 'left'}
                              onChange={(e) => {
                                const next = [...cols]
                                next[idx] = { ...next[idx], align: e.target.value as 'left' | 'center' | 'right' }
                                updateCols(next)
                              }}
                              className="w-full px-1 py-1 bg-[#0b1329] border border-slate-700 rounded text-[11px] text-slate-200"
                            >
                              <option value="left">Trái</option>
                              <option value="center">Giữa</option>
                              <option value="right">Phải</option>
                            </select>
                          </div>
                          <div className="col-span-1 flex justify-end">
                            <button
                              type="button"
                              onClick={() => updateCols(cols.filter((_, i) => i !== idx))}
                              className="p-1 text-slate-400 hover:text-red-400"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}

            {activeBottomTab === 'events' && (
              <div className="p-4 bg-slate-950/60 max-h-[380px] overflow-y-auto">
                <UnifiedEventEditor
                  events={columnEvents}
                  onChange={(newEvents) => {
                    handleChange('events', newEvents)
                    const clickEv = newEvents.find((e) => e.trigger === 'click' || e.trigger === 'actionClick')
                    if (clickEv) {
                      handleChange('action', clickEv.handlerName || clickEv.action)
                    }
                  }}
                  scriptFile={activeFeature?.scriptFile || 'transactionList.bl.ts'}
                  componentName={`Cột [${formData.title || formData.key}]`}
                  componentId={formData.key}
                  availableTriggers={[
                    { value: 'click', label: 'Bấm chuột / Nút thao tác (click)' },
                    { value: 'dblclick', label: 'Nhấp đúp chuột vào ô (dblclick)' },
                    { value: 'actionClick', label: 'Hành động ô (actionClick)' },
                    { value: 'change', label: 'Thay đổi giá trị ô (change)' },
                    { value: 'focus', label: 'Khi chọn ô (focus)' },
                    { value: 'blur', label: 'Khi rời ô (blur)' },
                  ]}
                  contextExtra={{
                    columnKey: formData.key,
                    columnTitle: formData.title,
                    row: { [formData.key]: 'Mẫu kiểm thử' },
                  }}
                />
              </div>
            )}

            {activeBottomTab === 'permissions' && (
              <div className="p-4 space-y-3 text-xs">
                <div className="text-slate-300">Cấu hình phân quyền hiển thị / chỉnh sửa cột theo vai trò (Roles):</div>
                <div className="grid grid-cols-3 gap-3">
                  {['Admin', 'Manager', 'Dispatcher', 'Sales', 'Customer'].map((role) => (
                    <label key={role} className="flex items-center gap-2 p-2 rounded bg-slate-800/80 border border-slate-700 cursor-pointer">
                      <input type="checkbox" defaultChecked={role === 'Admin' || role === 'Manager'} className="rounded text-emerald-500" />
                      <span className="font-semibold text-slate-200">{role}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── FOOTER ACTIONS ── */}
        <div className="flex items-center justify-end gap-3 px-6 py-3 bg-[#0b1329] border-t border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors"
          >
            Đóng
          </button>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="flex items-center gap-2 px-5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950/40 transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Lưu Thuộc Tính Cột</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
