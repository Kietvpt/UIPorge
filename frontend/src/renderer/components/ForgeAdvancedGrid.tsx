import React, { useState, useMemo } from 'react'
import type { ComponentProps } from './types'
import type { TableColumn } from '@/types/schema'
import { Search, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * ForgeAdvancedGrid: Kế thừa GridView.cs & GridPolicy.cs từ C# Core
 * - Hỗ trợ Cột cố định (Sticky / Frozen Columns) với backdrop-blur
 * - Dòng tổng kết (Summary Footer Row) tính Sum / Avg / Count
 * - Thanh tìm kiếm từ khóa lọc tức thì
 * - Sắp xếp cột linh hoạt và phân trang
 */
export const ForgeAdvancedGrid: React.FC<ComponentProps> = ({ node }) => {
  const { props, style } = node
  const { flex, flexGrow, flexShrink, flexBasis, minWidth, maxWidth, width, ...visualStyle } = style || {}

  const defaultColumns: TableColumn[] = [
    { key: 'code', title: 'Mã số', width: '130px', sticky: 'left', sortable: true },
    { key: 'name', title: 'Tên mục', width: '180px', sortable: true },
    { key: 'category', title: 'Phân loại', width: '140px', sortable: true },
    { key: 'docDate', title: 'Ngày tạo', width: '110px', format: 'date_dmy', sortable: true },
    { key: 'quantity', title: 'Số lượng', width: '100px', align: 'right', aggregate: 'sum', sortable: true },
    { key: 'price', title: 'Đơn giá', width: '120px', align: 'right', aggregate: 'sum', sortable: true },
    { key: 'amount', title: 'Thành tiền', width: '130px', align: 'right', aggregate: 'sum', sortable: true },
    { key: 'status', title: 'Trạng thái', width: '130px', align: 'center' },
  ]

  const columns: TableColumn[] = props.columns && props.columns.length > 0 ? props.columns : defaultColumns

  const mockRows = [
    { id: '1', code: 'REC-001', name: 'Mục dữ liệu A1', category: 'Loại 1', docDate: '26/01/2026', quantity: 12, price: 100, amount: 1200, status: 'Hoàn thành' },
    { id: '2', code: 'REC-002', name: 'Mục dữ liệu B2', category: 'Loại 2', docDate: '28/01/2026', quantity: 25, price: 150, amount: 3750, status: 'Đang xử lý' },
    { id: '3', code: 'REC-003', name: 'Mục dữ liệu C3', category: 'Loại 1', docDate: '02/02/2026', quantity: 8, price: 80, amount: 640, status: 'Chờ duyệt' },
    { id: '4', code: 'REC-004', name: 'Mục dữ liệu D4', category: 'Loại 3', docDate: '05/02/2026', quantity: 40, price: 200, amount: 8000, status: 'Hoàn thành' },
  ]

  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(1)
  const pageSize = Number(props.pageSize) || 10

  // 1. Filter rows by search
  const filteredRows = useMemo(() => {
    if (!search.trim()) return mockRows
    const term = search.toLowerCase()
    return mockRows.filter((r) =>
      Object.values(r).some((v) => String(v).toLowerCase().includes(term))
    )
  }, [search])

  // 2. Sort rows
  const sortedRows = useMemo(() => {
    if (!sortKey) return filteredRows
    return [...filteredRows].sort((a, b) => {
      const valA = (a as any)[sortKey]
      const valB = (b as any)[sortKey]
      if (valA === valB) return 0
      const res = valA > valB ? 1 : -1
      return sortOrder === 'asc' ? res : -res
    })
  }, [filteredRows, sortKey, sortOrder])

  // 3. Pagination
  const totalPages = Math.ceil(sortedRows.length / pageSize) || 1
  const displayedRows = useMemo(() => {
    const start = (page - 1) * pageSize
    return sortedRows.slice(start, start + pageSize)
  }, [sortedRows, page, pageSize])

  // 4. Calculate Summary Aggregates (Footer Totals - Ảnh 4)
  const summaryValues = useMemo(() => {
    const res: Record<string, string | number> = {}
    for (const col of columns) {
      if (col.aggregate === 'sum') {
        const total = filteredRows.reduce((sum, r) => sum + (Number((r as any)[col.key]) || 0), 0)
        res[col.key] = total.toLocaleString('en-US')
      } else if (col.aggregate === 'count') {
        res[col.key] = filteredRows.length
      } else if (col.aggregate === 'avg') {
        const avg = filteredRows.length
          ? filteredRows.reduce((sum, r) => sum + (Number((r as any)[col.key]) || 0), 0) / filteredRows.length
          : 0
        res[col.key] = avg.toFixed(1)
      }
    }
    return res
  }, [columns, filteredRows])

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  return (
    <div
      className="w-full flex flex-col rounded-xl border border-slate-800 bg-slate-950/80 shadow-md overflow-hidden text-xs"
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(visualStyle as React.CSSProperties),
      }}
    >
      {/* Header Bar: Title & Search Filter */}
      <div className="p-3 border-b border-slate-800/80 flex items-center justify-between gap-3 bg-slate-900/60">
        <div className="flex items-center gap-2">
          {props.label && (
            <span className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              {props.label}
            </span>
          )}
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
            {filteredRows.length} bản ghi
          </span>
        </div>

        <div className="relative w-64 max-w-full">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm trong bảng..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            className="w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Table Body with Sticky Column Support */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-900/90 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 select-none">
            <tr>
              {columns.map((col) => {
                const isSticky = col.sticky === 'left'
                const alignClass =
                  col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'

                return (
                  <th
                    key={col.key}
                    onClick={() => col.sortable !== false && handleSort(col.key)}
                    style={{
                      width: col.width,
                      minWidth: col.minWidth || col.width,
                    }}
                    className={`px-3.5 py-2.5 transition-colors cursor-pointer hover:text-slate-200 ${alignClass} ${
                      isSticky ? 'sticky left-0 z-20 bg-slate-900 shadow-[2px_0_5px_rgba(0,0,0,0.3)]' : ''
                    }`}
                  >
                    <div className={`flex items-center gap-1.5 ${col.align === 'right' ? 'justify-end' : col.align === 'center' ? 'justify-center' : 'justify-start'}`}>
                      {col.sticky === 'left' && (
                        <span className="text-[10px] text-blue-400 font-normal" title="Cột cố định (Frozen)">📌</span>
                      )}
                      <span>{col.title}</span>
                      {col.sortable !== false && (
                        <ArrowUpDown className="w-3 h-3 opacity-40 hover:opacity-100" />
                      )}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
            {displayedRows.length > 0 ? (
              displayedRows.map((row, idx) => (
                <tr key={row.id || idx} className="hover:bg-slate-800/40 transition-colors">
                  {columns.map((col) => {
                    const isSticky = col.sticky === 'left'
                    const val = (row as any)[col.key]
                    const alignClass =
                      col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'

                    return (
                      <td
                        key={col.key}
                        className={`px-3.5 py-2 text-slate-300 truncate ${alignClass} ${
                          isSticky ? 'sticky left-0 z-10 bg-slate-950 font-medium text-blue-400 shadow-[2px_0_5px_rgba(0,0,0,0.3)]' : ''
                        }`}
                      >
                        {(() => {
                          if (val === undefined || val === null) return '—'

                          // 1. Checkbox cell
                          if (col.componentType === 'Checkbox') {
                            const isChecked = Boolean(val === true || val === 'true' || val === 1)
                            return (
                              <input
                                type="checkbox"
                                checked={isChecked}
                                readOnly
                                className="w-3.5 h-3.5 rounded text-blue-600 bg-slate-900 border-slate-700 pointer-events-none"
                              />
                            )
                          }

                          // 2. Button cell
                          if (col.componentType === 'Button') {
                            return (
                              <button
                                type="button"
                                className="px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/40 text-[10px] font-sans font-medium transition-colors"
                              >
                                {String(val)}
                              </button>
                            )
                          }

                          // 3. DatePicker cell
                          if (col.componentType === 'DatePicker' || col.format === 'date_dmy') {
                            return (
                              <span className="inline-flex items-center gap-1 text-slate-200">
                                <span className="opacity-60 text-[10px]">📅</span>
                                <span>{String(val)}</span>
                              </span>
                            )
                          }

                          // 4. Number cell
                          if (col.componentType === 'Number' || typeof val === 'number') {
                            const num = Number(val)
                            if (!isNaN(num)) {
                              const prec = col.precision !== undefined ? col.precision : (num % 1 !== 0 ? 2 : 0)
                              return (
                                <span className="text-slate-100 font-mono">
                                  {num.toLocaleString('en-US', { minimumFractionDigits: prec, maximumFractionDigits: prec })}
                                </span>
                              )
                            }
                          }

                          // 5. Select / Status Badge
                          if (col.key === 'status' || col.componentType === 'Select') {
                            return (
                              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium ${
                                val === 'Hoàn thành' ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40' : 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                              }`}>
                                {String(val)}
                              </span>
                            )
                          }

                          // Mặc định: Text
                          return String(val)
                        })()}
                      </td>
                    )
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-slate-500 font-sans">
                  Không tìm thấy dữ liệu phù hợp.
                </td>
              </tr>
            )}
          </tbody>

          {/* 5. Summary Footer Row (C# Core GridView Aggregate Totals) */}
          <tfoot className="bg-slate-900 border-t-2 border-slate-700 font-semibold text-xs text-slate-200">
            <tr>
              {columns.map((col, idx) => {
                const isSticky = col.sticky === 'left'
                const alignClass =
                  col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                const sumVal = summaryValues[col.key]

                return (
                  <td
                    key={col.key}
                    className={`px-3.5 py-2.5 font-mono ${alignClass} ${
                      isSticky ? 'sticky left-0 z-20 bg-slate-900 text-blue-400 font-bold shadow-[2px_0_5px_rgba(0,0,0,0.3)]' : ''
                    }`}
                  >
                    {idx === 0 && !sumVal ? (
                      <span className="font-sans uppercase text-[10px] text-slate-400">Tổng cộng:</span>
                    ) : (
                      sumVal !== undefined ? sumVal : ''
                    )}
                  </td>
                )
              })}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/40 select-none">
        <span>Trang {page} / {totalPages}</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

