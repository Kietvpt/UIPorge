import { openTab, openPopup } from '@/core/engines/navigationEngine'
import { useDataEngine } from '@/core/engines/dataEngine'

export interface TransactionItem {
  id: number
  jobNo: string
  typeId: number
  shipmentDate?: string
  mblNo?: string
  mblIssuedDate?: string
  mblType?: string
  vendorId?: string
  vendorName?: string
  sLines?: string
  agent?: string
  polId?: string
  podId?: string
  service?: string
  opic?: string
  eta?: string
  pTerm?: string
  commodity?: string
  totalPackages?: number
  packageType?: string
  totalGw?: number
  totalCbm?: number
  totalVgm?: number
  poNo?: string
  notes?: string
  active?: boolean
  [key: string]: any
}

export class TransactionListBL {
  private static instance: TransactionListBL

  public static getInstance(): TransactionListBL {
    if (!TransactionListBL.instance) {
      TransactionListBL.instance = new TransactionListBL()
    }
    return TransactionListBL.instance
  }

  /**
   * 🚢 Tải danh sách lô hàng từ Backend SQL Server theo OData filter (mặc định TypeId eq 1 cho FCL Import)
   */
  async loadTransactions(filter = 'TypeId eq 1'): Promise<TransactionItem[]> {
    try {
      const dataEngine = useDataEngine.getState()
      const data = await dataEngine.queryEntity('Transaction', filter)
      dataEngine.registerDataset('Transaction', data)
      return data
    } catch (err) {
      console.error('[TransactionListBL] Lỗi tải danh sách Transaction từ SQL Server:', err)
      return []
    }
  }

  /**
   * 🔍 Mở màn hình chi tiết lô hàng (Tab hoặc Popup theo chuẩn Core C# ComponentGroupDetailBL)
   */
  openTransactionDetail(row: TransactionItem, mode: 'tab' | 'popup' = 'tab') {
    const id = row.id || row.Id
    const jobNo = row.jobNo || row.JobNo || `Lô #${id}`

    if (mode === 'popup') {
      openPopup('TransactionDetail', { id, jobNo, row }, `Chi tiết: ${jobNo}`)
    } else {
      openTab('TransactionDetail', { id, jobNo, row }, `Lô hàng: ${jobNo}`)
    }
  }

  /**
   * ➕ Thêm mới một lô hàng (mở tab chi tiết với id = 'new')
   */
  openNewTransaction(mode: 'tab' | 'popup' = 'tab') {
    if (mode === 'popup') {
      openPopup('TransactionDetail', { id: 'new', jobNo: '' }, 'Thêm mới Lô hàng')
    } else {
      openTab('TransactionDetail', { id: 'new', jobNo: '' }, 'Thêm mới Lô hàng')
    }
  }

  /**
   * 🗑️ Xóa mềm một lô hàng trong SQL Server (Soft Delete: Active = false)
   */
  async deleteTransaction(id: number | string): Promise<boolean> {
    try {
      const res = await fetch(`http://localhost:5048/api/core/data/Transaction/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        await this.loadTransactions()
        return true
      }
      return false
    } catch (err) {
      console.error('[TransactionListBL] Lỗi xóa bản ghi:', err)
      return false
    }
  }
}

export const transactionListBL = TransactionListBL.getInstance()
