import React, { useState } from 'react'
import type { ComponentProps } from './types'
import { triggerComponentEvent } from '@/core/engines/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine, extractFieldValue } from '@/core/engines/dataEngine'
import { FormFieldWrapper } from './FormFieldWrapper'
import { ForgeSearchModal } from './grid/ForgeSearchModal'
import { Search } from 'lucide-react'

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

  const displayVal = engineVal !== undefined ? engineVal : (props.value ?? '')
  const hasError = Boolean(props.validationError)

  // Cấu hình Tra cứu
  const reference = String(props.reference || node.dataBinding?.entityName || '')
  const displayField = String(props.displayField || 'code')
  const valueField = String(props.valueField || 'code')
  const populateRule = String(props.populateRule || '')

  const handleOpenSearch = () => {
    if (props.disabled || isEditing) return
    if (!reference) {
      console.warn(`[ForgeSearchEntry] Component ${node.id} chưa cấu hình reference entity`)
      return
    }
    setIsModalOpen(true)
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
            className={`w-full pl-3 pr-8 py-1.5 bg-slate-900 border rounded-lg text-xs text-slate-100 placeholder-slate-500 transition-all font-mono disabled:opacity-50 ${
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

          {/* Nút kính lúp mở Modal Tra cứu */}
          {reference && (
            <button
              type="button"
              disabled={props.disabled || isEditing}
              onClick={handleOpenSearch}
              title={`Tra cứu ${reference} (Nhấn F1 hoặc nhấp đúp)`}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
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
    </>
  )
}

