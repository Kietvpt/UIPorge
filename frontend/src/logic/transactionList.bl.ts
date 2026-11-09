import { openTab, openPopup } from '@/core/engines/navigationEngine'
import { useDataEngine } from '@/core/engines/dataEngine'
import { useEditorStore } from '@/store/editorStore'
import { transactionDetailBL } from './transactionDetail.bl'

function getDetailFeatureId(): string {
  try {
    const features = useEditorStore.getState().features
    const detail = features.find(
      (f) => f.route === '/fcl-import' || f.isDetail || f.name.toLowerCase().includes('fcl import')
    )
    return detail ? detail.id : '4'
  } catch {
    return '4'
  }
}

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
  openTransactionDetail(rowOrContext: any, mode: 'tab' | 'popup' = 'tab') {
    const row = rowOrContext?.row || rowOrContext?.value || rowOrContext?.params || (typeof rowOrContext === 'object' ? rowOrContext : {})
    const id = row.id !== undefined ? row.id : (row.Id !== undefined ? row.Id : (rowOrContext?.id ?? rowOrContext?.Id))
    if (id === undefined || id === null) return

    const jobNo = row.jobNo || row.JobNo || `Lô #${id}`
    const targetPageId = getDetailFeatureId()

    useDataEngine.getState().setFormRecord('default', row)
    useDataEngine.getState().setFormRecord(targetPageId, row)
    useEditorStore.getState().setActiveFeature(targetPageId, id)

    if (mode === 'popup') {
      openPopup(targetPageId, { id, jobNo, row }, `Chi tiết: ${jobNo}`)
    } else {
      openTab(targetPageId, { id, jobNo, row }, `Lô: ${jobNo}`)
    }

    if (id && id !== 'new') {
      transactionDetailBL.loadDetail(id).then((freshData) => {
        if (freshData) {
          useDataEngine.getState().setFormRecord(targetPageId, freshData)
          useDataEngine.getState().setFormRecord('default', freshData)
        }
      })
    }
  }

  /**
   * ➕ Thêm mới một lô hàng (mở tab chi tiết với id = 'new')
   */
  openNewTransaction(mode: 'tab' | 'popup' = 'tab') {
    const targetPageId = getDetailFeatureId()
    if (mode === 'popup') {
      openPopup(targetPageId, { id: 'new', jobNo: '' }, 'Thêm mới Lô hàng')
    } else {
      openTab(targetPageId, { id: 'new', jobNo: '' }, 'Thêm mới Lô hàng')
    }
  }

  /**
   * 🗑️ Xóa mềm một lô hàng trong SQL Server (Soft Delete: Active = false) qua Core DataEngine
   */
  async deleteTransaction(id: number | string): Promise<boolean> {
    const res = await useDataEngine.getState().deleteRecord('Transaction', id)
    if (res.success) {
      await this.loadTransactions()
      return true
    }
    return false
  }
}

export const transactionListBL = TransactionListBL.getInstance()

/**
 * ⚡ Hàm xuất cho Event Runner UIForge kích hoạt trực tiếp từ Grid Event
 */
export function openTransactionDetail(context?: any) {
  const row = context?.row || context?.value || context?.params || (typeof context === 'object' ? context : {})
  const id = row.id !== undefined ? row.id : (row.Id !== undefined ? row.Id : (context?.id ?? context?.Id))
  if (id === undefined || id === null) {
    return { success: false, message: 'Không tìm thấy ID bản ghi' }
  }
  const jobNo = row.jobNo || row.JobNo || `Lô #${id}`
  const targetPageId = getDetailFeatureId()

  useDataEngine.getState().setFormRecord('default', row)
  useDataEngine.getState().setFormRecord(targetPageId, row)
  useEditorStore.getState().setActiveFeature(targetPageId, id)

  openTab(targetPageId, { id, jobNo, row }, `Lô: ${jobNo}`)

  if (id && id !== 'new') {
    transactionDetailBL.loadDetail(id).then((freshData) => {
      if (freshData) {
        useDataEngine.getState().setFormRecord(targetPageId, freshData)
        useDataEngine.getState().setFormRecord('default', freshData)
      }
    })
  }

  return { success: true, message: `Mở chi tiết ${jobNo}` }
}

export const onRowDblClick = openTransactionDetail

export function openNewTransaction() {
  const targetPageId = getDetailFeatureId()
  openTab(targetPageId, { id: 'new', jobNo: '' }, 'Thêm mới Lô hàng')
  return { success: true, message: 'Mở form thêm mới lô hàng' }
}

