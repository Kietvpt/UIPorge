import React from 'react'
import { useComponentPermission } from '@/renderer/PermissionGuard'

export interface FormFieldWrapperProps {
  label?: string
  showLabel?: boolean
  labelPosition?: 'left' | 'top'
  labelWidth?: string
  required?: boolean
  error?: string
  colSpan?: number
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

/**
 * FormFieldWrapper: Chuẩn hóa mô hình "Component đi kèm Label"
 * Kế thừa cơ chế từ C# Core:
 * - Nhãn (Label) mặc định nằm bên trái, căn phải gọn gàng.
 * - Hỗ trợ độ rộng phân cột trong lưới 12-cột (colSpan: 1..12).
 * - Hiển thị dấu sao đỏ bắt buộc (*) khi required = true.
 * - Tích hợp phân quyền UIForge:
 *   + Khi có quyền sửa trong chế độ Partial Edit (shouldHighlightEditable):
 *     Chấm tròn xanh ngọc tinh tế trước nhãn + highlight đúng ô input/select (không bọc khoảng trắng thừa).
 *   + Khi là Read-only: hiển thị nhẹ nhàng, lịch sự.
 */
export const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  label,
  showLabel = true,
  labelPosition = 'left',
  labelWidth = '110px',
  required = false,
  error,
  colSpan,
  className = '',
  style,
  children,
}) => {
  const perm = useComponentPermission()
  const isHighlightEditable = Boolean(perm?.shouldHighlightEditable)
  const isReadOnly = Boolean(perm?.isReadOnly)
  const isLeft = labelPosition === 'left'

  // Luôn đảm bảo w-full để chiếm trọn vẹn ô lưới hoặc flex cell
  const colSpanClass = colSpan ? `col-span-${colSpan}` : ''

  const highlightContainerClass = isHighlightEditable
    ? '[&_input]:!border-emerald-500/70 [&_input]:!bg-emerald-950/20 [&_input]:shadow-[0_0_0_1px_rgba(16,185,129,0.25)] [&_textarea]:!border-emerald-500/70 [&_select]:!border-emerald-500/70 [&_.enterprise-select-trigger]:!border-emerald-500/70'
    : isReadOnly
    ? '[&_input]:bg-slate-900/50 [&_input]:border-slate-800/80 [&_input]:text-slate-400'
    : ''

  return (
    <div
      className={`relative group w-full ${colSpanClass} ${
        isLeft ? 'flex flex-row items-center gap-2.5' : 'flex flex-col gap-1'
      } ${className}`}
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(colSpan ? { gridColumn: `span ${colSpan} / span ${colSpan}` } : {}),
        ...style,
      }}
    >
      {showLabel && label && (
        <label
          className={`text-xs select-none ${
            isHighlightEditable
              ? 'text-emerald-300 font-semibold'
              : isReadOnly
              ? 'text-slate-400 font-medium'
              : 'text-slate-300 font-medium'
          } ${isLeft ? 'shrink-0 text-right truncate' : ''}`}
          style={isLeft ? { width: labelWidth } : undefined}
          title={label}
        >
          {isHighlightEditable && (
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1.5 shadow-[0_0_6px_rgba(52,211,153,0.8)] align-middle"
              title="Được phép chỉnh sửa"
            />
          )}
          {label}
          {required && <span className="text-red-400 ml-0.5">*</span>}
          {isLeft && ':'}
        </label>
      )}

      <div className={`flex-1 min-w-0 w-full flex flex-col justify-center ${highlightContainerClass}`}>
        {children}
        {error && <span className="text-[11px] text-red-400 mt-0.5">{error}</span>}
      </div>
    </div>
  )
}

