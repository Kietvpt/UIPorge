import React from 'react'

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
 * Kế thừa cơ chế từ C# Core (Ảnh 1 & 2):
 * - Nhãn (Label) mặc định nằm bên trái (theo chỉ đạo của Master), căn phải gọn gàng.
 * - Hỗ trợ độ rộng phân cột trong lưới 12-cột (colSpan: 1..12).
 * - Hiển thị dấu sao đỏ bắt buộc (*) khi required = true.
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
  const isLeft = labelPosition === 'left'

  // Luôn đảm bảo w-full để chiếm trọn vẹn ô lưới hoặc flex cell
  const colSpanClass = colSpan ? `col-span-${colSpan}` : ''

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
          className={`text-xs font-medium text-slate-300 select-none ${
            isLeft ? 'shrink-0 text-right truncate' : ''
          }`}
          style={isLeft ? { width: labelWidth } : undefined}
          title={label}
        >
          {label}
          {required && <span className="text-red-400 ml-0.5">*</span>}
          {isLeft && ':'}
        </label>
      )}

      <div className="flex-1 min-w-0 w-full flex flex-col justify-center">
        {children}
        {error && <span className="text-[11px] text-red-400 mt-0.5">{error}</span>}
      </div>
    </div>
  )
}

