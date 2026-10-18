import React from 'react'
import type { ComponentProps } from './types'

// Table Component
export const ForgeTable: React.FC<ComponentProps> = ({ node }) => {
  const { props, style } = node
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const columns = props.columns || [
    { key: 'id', title: 'Mã', width: '80px' },
    { key: 'name', title: 'Tên mục' },
    { key: 'status', title: 'Trạng thái' },
  ]

  const mockRows = [
    { id: 'SP-01', name: 'Sản phẩm mẫu Alpha', status: 'Đang hoạt động' },
    { id: 'SP-02', name: 'Đơn đặt hàng Beta', status: 'Chờ duyệt' },
    { id: 'SP-03', name: 'Lô hàng số 03', status: 'Đã hoàn thành' },
  ]

  return (
    <div
      className="w-full overflow-x-auto rounded-lg border border-slate-700 bg-slate-900/70"
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      <table className="w-full text-left text-sm text-slate-200">
        <thead className="bg-slate-800 text-xs uppercase font-semibold text-slate-400 border-b border-slate-700">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3" style={{ width: col.width }}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {mockRows.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-slate-300">
                  {row[col.key as keyof typeof row] || '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
