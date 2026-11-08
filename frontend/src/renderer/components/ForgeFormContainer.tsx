import React from 'react'
import type { ComponentProps } from './types'
import { Save, Printer, XCircle, Zap } from 'lucide-react'

/**
 * ForgeFormContainer: Kế thừa EditForm.cs từ C# Core
 * - Khung bao bọc form doanh nghiệp
 * - Thanh Action Bar tiêu chuẩn phía trên (Lưu, Hủy, In, Hàm chức năng) như Ảnh 4
 */
export const ForgeFormContainer: React.FC<ComponentProps> = ({ node, children }) => {
  const { props, style } = node
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const title = props.title || props.label || 'Biểu Mẫu Doanh Nghiệp'

  return (
    <div
      className="w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4 shadow-xl"
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      {/* Top Action Bar (Ảnh 4) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wide">
            {title}
          </h2>
          <p className="text-[11px] text-slate-400">
            {props.placeholder || 'Biểu mẫu nhập liệu & quản lý giao dịch'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span>In & Chứng từ</span>
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Hàm chức năng</span>
          </button>
          <button
            type="button"
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-blue-500/20"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Lưu dữ liệu</span>
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

