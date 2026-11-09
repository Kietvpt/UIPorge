import React, { useEffect, useState } from 'react'
import { Plus, RefreshCw, Search, Eye, Trash2, Ship, FileText, CheckCircle2 } from 'lucide-react'
import { transactionListBL, TransactionItem } from '@/logic/transactionList.bl'
import { ForgeTable } from '@/renderer/components/ForgeTable'
import type { ComponentNode } from '@/types/schema'

export const TransactionListView: React.FC = () => {
  const [items, setItems] = useState<TransactionItem[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState<number | 'all'>(1) // 1: FCL, 2: LCL, 'all'
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const loadData = async () => {
    setLoading(true)
    const filter = typeFilter === 'all' ? '' : `TypeId eq ${typeFilter}`
    const data = await transactionListBL.loadTransactions(filter)
    setItems(data)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [typeFilter])

  const handleDelete = async (e: React.MouseEvent, row: TransactionItem) => {
    e.stopPropagation()
    const id = row.id || row.Id
    if (confirm(`Bạn có chắc chắn muốn xóa mềm lô hàng #${row.jobNo || row.JobNo || id} trong Database?`)) {
      const ok = await transactionListBL.deleteTransaction(id)
      if (ok) {
        showToast(`Đã xóa mềm thành công lô hàng #${id}`)
        loadData()
      }
    }
  }

  // Filter items locally by search term
  const filteredItems = items.filter((item) => {
    if (!searchTerm.trim()) return true
    const term = searchTerm.toLowerCase()
    return (
      (item.jobNo && item.jobNo.toLowerCase().includes(term)) ||
      (item.JobNo && item.JobNo.toLowerCase().includes(term)) ||
      (item.mblNo && item.mblNo.toLowerCase().includes(term)) ||
      (item.vendorName && item.vendorName.toLowerCase().includes(term)) ||
      (item.polId && item.polId.toLowerCase().includes(term)) ||
      (item.podId && item.podId.toLowerCase().includes(term))
    )
  })

  // Cấu hình bảng ForgeTable chuẩn Core
  const tableNode: ComponentNode = {
    id: 'grid_transactions_live',
    type: 'Table',
    pageId: 'transaction_list',
    parentId: null,
    order: 1,
    style: {},
    events: [],
    props: {
      reference: 'Transaction',
      data: filteredItems,
      columns: [
        { key: 'jobNo', title: 'Job No.', width: '150px', frozen: true, sticky: 'left', sortable: true },
        { key: 'mblNo', title: 'M-B/L No.', width: '160px', sortable: true },
        { key: 'shipmentDate', title: 'Ngày Lập', width: '120px', sortable: true },
        { key: 'vendorName', title: 'Hãng Tàu / Vendor', width: '220px', sortable: true },
        { key: 'polId', title: 'POL (Cảng Đi)', width: '130px', sortable: true },
        { key: 'podId', title: 'POD (Cảng Đến)', width: '140px', sortable: true },
        { key: 'commodity', title: 'Mặt Hàng', width: '180px' },
        { key: 'totalGw', title: 'Tổng GW (KGS)', width: '140px', align: 'right', aggregate: 'sum', summarySuffix: ' KGS' },
        { key: 'totalCbm', title: 'Tổng CBM', width: '120px', align: 'right', aggregate: 'sum', summarySuffix: ' CBM' },
        { key: 'active', title: 'Hiệu Lực', width: '90px', align: 'center', componentType: 'Checkbox' },
      ],
    },
  }

  return (
    <div className="flex flex-col h-full bg-[#0b1329] text-slate-200 p-6 space-y-4">
      {/* ── HEADER & TOOLBAR ── */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <Ship className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
              <span>Danh Sách Lô Hàng (Transactions)</span>
              <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                SQL Server Live
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              Dữ liệu thực tế từ Database SQL Server (`UIPorge_BetaV1`). Truy vấn chuẩn OData.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => transactionListBL.openNewTransaction('tab')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-700/30 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm Mới Lô Hàng</span>
          </button>
          <button
            type="button"
            onClick={loadData}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all cursor-pointer"
            title="Tải lại dữ liệu từ SQL Server"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${loading ? 'animate-spin' : ''}`} />
            <span>Tải Lại</span>
          </button>
        </div>
      </div>

      {/* ── FILTER & SEARCH BAR ── */}
      <div className="flex items-center justify-between flex-wrap gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
        {/* Type Tabs */}
        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setTypeFilter(1)}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              typeFilter === 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            FCL Import (TypeId = 1)
          </button>
          <button
            type="button"
            onClick={() => setTypeFilter(2)}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              typeFilter === 2 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            LCL Import (TypeId = 2)
          </button>
          <button
            type="button"
            onClick={() => setTypeFilter('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
              typeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Tất Cả Lô Hàng
          </button>
        </div>

        {/* Search Box */}
        <div className="relative min-w-[260px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo JobNo, M-B/L, Vendor..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-md text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
          />
        </div>
      </div>

      {/* ── TOAST NOTIFICATION ── */}
      {toastMessage && (
        <div className="flex items-center gap-2 p-3 bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs rounded-lg shadow-lg animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ── GRIDVIEW DATA TABLE ── */}
      <div className="flex-1 min-h-[350px] bg-slate-900/60 rounded-lg border border-slate-800 p-2 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between pb-2 px-1 text-xs text-slate-400 border-b border-slate-800/80 mb-2">
          <span>Tìm thấy <strong className="text-white font-mono">{filteredItems.length}</strong> bản ghi từ Database</span>
          <span className="text-[11px] text-slate-500">Nhấp vào dòng để xem chi tiết hoặc thao tác bên phải</span>
        </div>

        <div className="flex-1 overflow-auto">
          <ForgeTable node={tableNode} isEditing={false} />
        </div>
      </div>

      {/* ── QUICK ACTIONS DRAWER / DETAILS TRIGGER ── */}
      <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-lg text-xs flex items-center justify-between flex-wrap gap-2">
        <span className="text-slate-400">Thao tác nhanh trên bản ghi đang hiển thị:</span>
        <div className="flex items-center gap-2">
          {filteredItems.slice(0, 4).map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={() => transactionListBL.openTransactionDetail(row)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 text-[11px] font-mono transition-colors cursor-pointer"
            >
              <Eye className="w-3 h-3 text-blue-400" />
              <span>{row.jobNo || row.JobNo}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
