import React from 'react'
import type { ComponentProps } from './types'
import type { DropdownColumnConfig, SelectOption } from '@/types/schema'
import { triggerComponentEvent } from '@/core/engines/eventRunner'
import { useEditorStore } from '@/store/editorStore'
import { useDataEngine, extractFieldValue } from '@/core/engines/dataEngine'
import { FormFieldWrapper } from './FormFieldWrapper'
import { EnterpriseSelect } from './common/EnterpriseSelect'

/**
 * 📦 ForgeSelect: Generic Enterprise Multi-Column Dropdown Component
 * - 100% Trung lập (Domain-Agnostic): Phục vụ mọi ngành nghề kinh doanh.
 * - Hỗ trợ Reference & DataSource (OData/SQL): Tự động truy vấn danh mục theo metadata từ Database.
 * - Hỗ trợ Cột Hiển Thị Đa Cột (Dropdown Columns): Tra cứu thông tin đầy đủ, rõ ràng.
 * - Hỗ trợ Định Dạng Hiển Thị (FormatData): Ví dụ: {Vendor.FullName} - {Vendor.Address}.
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

  const currentValue = engineVal !== undefined ? engineVal : (props.value ?? '')

  // ── CẤU HÌNH REFERENCE, DATASOURCE, MULTI-COLUMN & POPULATE CHUẨN CORE C# ──
  const reference =
    (props.reference as string) ||
    (props.refName as string) ||
    (node.dataBinding?.refName as string) ||
    (node.dataBinding?.entityName as string) ||
    ''

  const dataSource =
    (props.dataSource as string) ||
    (node.dataBinding?.dataSource as string) ||
    (props.query as string) ||
    (node.dataBinding?.query as string) ||
    (props.sqlWhere as string) ||
    (node.dataBinding?.sqlWhere as string) ||
    ''

  const idField =
    (props.idField as string) ||
    (node.dataBinding?.idField as string) ||
    'id'

  const selectField =
    (props.textField as string) ||
    (props.selectField as string) ||
    (node.dataBinding?.selectField as string) ||
    'name'

  const dropdownColumns =
    (props.dropdownColumns as DropdownColumnConfig[]) ||
    node.dataBinding?.dropdownColumns

  const formatData =
    (props.formatData as string) ||
    (node.dataBinding?.formatData as string) ||
    ''

  const populateRule =
    (props.populateField as string) ||
    (node.dataBinding?.populateField as string) ||
    ''

  const options = (props.options as SelectOption[]) || []
  const hasError = Boolean(props.validationError)

  const handleChange = (nextVal: any, selectedItem?: any) => {
    setFieldValue(formId, fieldName, nextVal)

    if (!isEditing) {
      triggerComponentEvent(node.events, 'change', props.label || 'Chọn mục', blFileName, {
        componentId: node.id,
        fieldName,
        value: nextVal,
        selectedItem,
      })
    }
  }

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
        <EnterpriseSelect
          value={currentValue}
          onChange={handleChange}
          options={options}
          reference={reference}
          dataSource={dataSource}
          idField={idField}
          selectField={selectField}
          dropdownColumns={dropdownColumns}
          formatData={formatData}
          populateField={populateRule}
          formId={formId}
          placeholder={props.placeholder ? String(props.placeholder) : '— Chọn —'}
          disabled={props.disabled}
          error={hasError ? String(props.validationError) : undefined}
        />
      </div>
    </FormFieldWrapper>
  )
}
