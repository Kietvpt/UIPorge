import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/core/engines/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine, extractFieldValue } from '@/core/engines/dataEngine'
import { FormFieldWrapper } from './FormFieldWrapper'
import { ForgeSearchModal } from './grid/ForgeSearchModal'
import { Search, Plus, Save, Loader2, X } from 'lucide-react'
import { openPopup } from '@/core/engines/navigationEngine'

/**
 * 📦 ForgeSearchEntry: Search & Auto-Populate Component (Kế thừa SearchEntry.cs từ Core C#)
 * - 100% Generic & Domain-Agnostic: Tra cứu bất kỳ danh mục nào qua `node.props.reference`.
 * - Hỗ trợ Two-Way Data Binding với DataEngine.
 * - Nút kính lúp hoặc phím F1 mở Modal lưới tìm kiếm đa cột `ForgeSearchModal`.
 * - Tự động thực thi `applyPopulate()` điền nhiều trường liên đới khi chọn bản ghi.
 */
export const ForgeSearchEntry: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const currentFeature =
    features.find((f) => String(f.id) === String(node.pageId)) ||
    features.find((f) => String(f.id) === String(activeFeatureId))
  const blFileName = currentFeature?.scriptFile

  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const formId = String(node.pageId || activeFeatureId || 'default')
  const fieldName = String(node.dataBinding?.fieldName || node.props.name || node.id)
  const engineVal = useDataEngine((s) => extractFieldValue(s, formId, fieldName, undefined))
  const setFieldValue = useDataEngine((s) => s.setFieldValue)
  const applyPopulate = useDataEngine((s) => s.applyPopulate)

  const [isModalOpen, setIsModalOpen] = useState(false)

  // ── QUICK ADD MODAL STATES ──
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false)
  const [quickAddCode, setQuickAddCode] = useState('')
  const [quickAddName, setQuickAddName] = useState('')
  const [quickAddDescription, setQuickAddDescription] = useState('')
  const [isSubmittingQuickAdd, setIsSubmittingQuickAdd] = useState(false)

  const displayVal = engineVal !== undefined ? engineVal : (props.value ?? '')
  const hasError = Boolean(props.validationError)

  // Cấu hình Tra cứu chuẩn Core C# (SearchEntry.cs & GuiInfo.cs)
  const reference = String(
    props.reference ||
    props.refName ||
    node.dataBinding?.refName ||
    node.dataBinding?.entityName ||
    ''
  )
  const refClass = String(
    props.refClass ||
    (node.dataBinding as any)?.refClass ||
    ''
  )
  const displayField = String(
    props.displayField ||
    props.selectField ||
    node.dataBinding?.selectField ||
    'code'
  )
  const valueField = String(
    props.valueField ||
    props.idField ||
    node.dataBinding?.idField ||
    'code'
  )
  const populateRule = String(
    props.populateRule ||
    props.populateField ||
    node.dataBinding?.populateField ||
    ''
  )

  const handleOpenSearch = () => {
    if (props.disabled || isEditing) return
    if (!reference) {
      console.warn(`[ForgeSearchEntry] Component ${node.id} chưa cấu hình reference entity`)
      return
    }
    setIsModalOpen(true)
  }

  // Mở Popup hoặc Form tạo nhanh bản ghi mới
  const handleOpenQuickAdd = () => {
    if (props.disabled || isEditing) return
    if (refClass) {
      openPopup(refClass, {}, `Tạo mới ${reference || refClass}`)
      return
    }
    const cleanSearch = String(displayVal || '').trim()
    setQuickAddCode(cleanSearch ? cleanSearch.toUpperCase().replace(/\s+/g, '_') : '')
    setQuickAddName(cleanSearch)
    setQuickAddDescription('')
    setIsQuickAddOpen(true)
  }

  // Lưu bản ghi mới vào SQL Server và chọn ngay vào input
  const handleSaveQuickAdd = async () => {
    if (!quickAddCode.trim() || !quickAddName.trim()) return
    const cleanRef = reference.trim()
    if (!cleanRef) return

    setIsSubmittingQuickAdd(true)
    try {
      const payload: Record<string, any> = {
        code: quickAddCode.trim(),
        name: quickAddName.trim(),
        fullName: quickAddName.trim(),
        description: quickAddDescription.trim(),
        active: true,
      }

      const res = await fetch(`http://localhost:5048/api/core/data/${encodeURIComponent(cleanRef)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        const createdItem = await res.json()
        const newRecord = {
          ...payload,
          ...createdItem,
          id: createdItem.id ?? createdItem.Id ?? Date.now(),
        }

        // Tải lại dataset từ API và cập nhật DataEngine
        await useDataEngine.getState().queryEntity(cleanRef)
        handleSelectRecord(newRecord)
        setIsQuickAddOpen(false)
      } else {
        alert('Không thể lưu bản ghi mới vào server. Vui lòng kiểm tra lại thông tin.')
      }
    } catch (err) {
      console.error('[ForgeSearchEntry] Lỗi tạo nhanh bản ghi:', err)
      const newRecord = {
        id: `mock-${Date.now()}`,
        code: quickAddCode.trim(),
        name: quickAddName.trim(),
        fullName: quickAddName.trim(),
        description: quickAddDescription.trim(),
        active: true,
      }
      handleSelectRecord(newRecord)
      setIsQuickAddOpen(false)
    } finally {
      setIsSubmittingQuickAdd(false)
    }
  }

  const handleSelectRecord = (selectedItem: any) => {
    const val = selectedItem[valueField] ?? selectedItem[displayField] ?? selectedItem.code ?? selectedItem.id
    const displayText = selectedItem[displayField] ?? selectedItem.name ?? val

    setFieldValue(formId, fieldName, val)

    // Tự động kích hoạt cơ chế PopulateField của Core C#
    if (populateRule) {
      applyPopulate(formId, populateRule, selectedItem)
    }

    if (!isEditing) {
      triggerComponentEvent(node.events, 'change', props.label || 'Ô tra cứu', blFileName, {
        componentId: node.id,
        fieldName,
        value: val,
        selectedItem,
      })
      triggerComponentEvent(node.events, 'select', props.label || 'Ô tra cứu', blFileName, {
        componentId: node.id,
        fieldName,
        value: val,
        selectedItem,
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'F1') {
      e.preventDefault()
      e.stopPropagation()
      handleOpenSearch()
    }
  }

  return (
    <>
      <FormFieldWrapper
        label={props.label}
        showLabel={props.showLabel ?? true}
        labelPosition={props.labelPosition || 'left'}
        labelWidth={props.labelWidth || '100px'}
        required={props.required}
        error={props.validationError ? String(props.validationError) : undefined}
        colSpan={props.colSpan}
        style={{
          width: '100%',
          maxWidth: '100%',
          ...(visualStyle as React.CSSProperties),
        }}
      >
        <div className="relative flex items-center w-full">
          <input
            type="text"
            disabled={props.disabled}
            readOnly={isEditing || Boolean(props.readOnly)}
            placeholder={props.placeholder || (reference ? `Tra cứu ${reference} (F1)...` : 'Nhập dữ liệu...')}
            value={displayVal}
            onKeyDown={handleKeyDown}
            onDoubleClick={handleOpenSearch}
            className={`w-full pl-3 pr-14 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${
              hasError
                ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
                : 'border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
            onChange={(e) => {
              const nextVal = e.target.value
              setFieldValue(formId, fieldName, nextVal)
              if (!isEditing) {
                triggerComponentEvent(node.events, 'change', props.label || 'Ô tra cứu', blFileName, {
                  componentId: node.id,
                  fieldName,
                  value: nextVal,
                })
              }
            }}
          />

          {/* Nút thao tác: Tạo nhanh (+) & Kính lúp mở Modal Tra cứu (F1) */}
          {reference && (
            <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
              <button
                type="button"
                disabled={props.disabled || isEditing}
                onClick={handleOpenQuickAdd}
                title={`Tạo nhanh ${reference} (+)`}
                className="w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                disabled={props.disabled || isEditing}
                onClick={handleOpenSearch}
                title={`Tra cứu ${reference} (Nhấn F1 hoặc nhấp đúp)`}
                className="w-5 h-5 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </FormFieldWrapper>

      {/* Modal tra cứu đa cột */}
      {reference && (
        <ForgeSearchModal
          isOpen={isModalOpen}
          title={`Tra cứu danh mục: ${props.label || reference}`}
          entityName={reference}
          columns={props.columns}
          onSelect={handleSelectRecord}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* ── MODAL TẠO NHANH BẢN GHI (QUICK ADD MODAL) ── */}
      {isQuickAddOpen &&
        createPortal(
          <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-100">
            <div
              className="w-full max-w-md rounded-2xl border border-emerald-500/50 bg-slate-900 p-6 shadow-2xl text-slate-100 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">
                      Tạo nhanh danh mục: {reference || 'Bản ghi mới'}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Thêm mới vào cơ sở dữ liệu và tự động chọn vào ô này
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsQuickAddOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Mã số (Code) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={quickAddCode}
                    onChange={(e) => setQuickAddCode(e.target.value)}
                    placeholder="VD: SITC, V-001..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Tên hiển thị (Name) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={quickAddName}
                    onChange={(e) => setQuickAddName(e.target.value)}
                    placeholder="VD: CÔNG TY CỔ PHẦN..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Ghi chú / Mô tả (Description)
                  </label>
                  <textarea
                    rows={2}
                    value={quickAddDescription}
                    onChange={(e) => setQuickAddDescription(e.target.value)}
                    placeholder="Thông tin bổ sung..."
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsQuickAddOpen(false)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  disabled={isSubmittingQuickAdd || !quickAddCode.trim() || !quickAddName.trim()}
                  onClick={handleSaveQuickAdd}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-900/40 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmittingQuickAdd ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Save className="w-3.5 h-3.5" />
                  )}
                  <span>Lưu & Chọn ngay</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

