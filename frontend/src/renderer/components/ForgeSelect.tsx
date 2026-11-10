import React, { useState, useEffect } from 'react'
import type { ComponentProps } from './types'
import { ChevronDown } from 'lucide-react'
import { triggerComponentEvent } from '@/core/engines/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine, SelectOption, extractFieldValue } from '@/core/engines/dataEngine'
import { FormFieldWrapper } from './FormFieldWrapper'

/**
 * 📦 ForgeSelect: Generic Dropdown Component
 * - 100% Trung lập (Domain-Agnostic): Phục vụ mọi ngành nghề.
 * - Hỗ trợ Reference & Query (OData): Tự động truy vấn danh mục theo metadata từ Database.
 * - Hỗ trợ Populate Field: Tự động phân tích quy tắc "TargetField = SourceField" để điền dữ liệu.
 */
export const ForgeSelect: React.FC<ComponentProps> = ({ node, isEditing }) => {
  const { props, style } = node
  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const currentFeature =
    features.find((f) => String(f.id) === String(node.pageId)) ||
    features.find((f) => String(f.id) === String(activeFeatureId))
  const blFileName = currentFeature?.scriptFile
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  // Lấy giá trị qua Generic DataEngine
  const formId = String(node.pageId || activeFeatureId || 'default')
  const fieldName = String(node.dataBinding?.fieldName || node.props.name || node.id)
  const engineVal = useDataEngine((s) => extractFieldValue(s, formId, fieldName, undefined))
  const setFieldValue = useDataEngine((s) => s.setFieldValue)
  const applyPopulate = useDataEngine((s) => s.applyPopulate)
  const queryReference = useDataEngine((s) => s.queryReference)

  const currentValue = engineVal !== undefined ? engineVal : (props.value ?? '')
  const [dynamicOptions, setDynamicOptions] = useState<SelectOption[]>([])

  // ── CẤU HÌNH REFERENCE, QUERY & POPULATE CHUẨN CORE C# (GuiInfo.cs) ──
  const reference =
    (props.reference as string) ||
    (props.refName as string) ||
    (node.dataBinding?.refName as string) ||
    (node.dataBinding?.entityName as string) ||
    ''

  const query =
    (props.query as string) ||
    (node.dataBinding?.query as string) ||
    (props.dataSource as string) ||
    (node.dataBinding?.dataSource as string) ||
    (props.sqlWhere as string) ||
    (node.dataBinding?.sqlWhere as string) ||
    ''

  const idField =
    (props.idField as string) ||
    (node.dataBinding?.idField as string) ||
    'id'

  const textField =
    (props.textField as string) ||
    (props.selectField as string) ||
    (node.dataBinding?.selectField as string) ||
    (props.fieldName as string) ||
    (node.dataBinding?.fieldName as string) ||
    'name'

  const populateRule =
    (props.populateField as string) ||
    (node.dataBinding?.populateField as string) ||
    ''

  // Tải danh sách Options từ Reference (OData) nếu được cấu hình
  useEffect(() => {
    let isMounted = true

    if (reference) {
      queryReference(reference, query, idField, textField).then((res) => {
        if (isMounted) {
          setDynamicOptions(res)
        }
      })
    }
    return () => {
      isMounted = false
    }
  }, [reference, query, idField, textField, queryReference])

  // Sử dụng dynamicOptions nếu có, ngược lại dùng props.options tĩnh
  const options: SelectOption[] =
    dynamicOptions.length > 0
      ? dynamicOptions
      : (props.options as SelectOption[]) || []

  const hasError = Boolean(props.validationError)

  return (
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
      <div className="relative w-full">
        <select
          disabled={props.disabled}
          value={currentValue}
          className={`w-full px-3 py-1.5 pr-8 bg-slate-900 border rounded-lg text-xs text-slate-100 transition-all appearance-none cursor-pointer disabled:opacity-50 ${hasError
              ? 'border-red-500/90 bg-red-950/20 text-red-200 ring-1 ring-red-500/60 focus:border-red-400 focus:outline-none'
              : 'border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          onChange={(e) => {
            const nextVal = e.target.value
            setFieldValue(formId, fieldName, nextVal)

            // Tìm rawItem của option được chọn để thực thi Populate
            const matchedOpt = options.find((opt) => String(opt.value) === String(nextVal))
            const rawItem = matchedOpt?.rawItem || matchedOpt

            // Thực thi cơ chế Populate Field chuẩn Core C# (Ảnh Modal: Populate field)
            if (populateRule && typeof populateRule === 'string') {
              applyPopulate(formId, populateRule, rawItem)
            }

            if (!isEditing) {
              triggerComponentEvent(node.events, 'change', props.label || 'Chọn mục', blFileName, {
                componentId: node.id,
                fieldName,
                value: nextVal,
                selectedItem: rawItem,
              })
            }
          }}
        >
          <option value="">-- Chọn --</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100 py-1">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </FormFieldWrapper>
  )
}
