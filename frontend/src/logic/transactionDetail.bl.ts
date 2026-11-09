import { useDataEngine } from '@/core/engines/dataEngine'
import { TransactionItem } from './transactionList.bl'

export class TransactionDetailBL {
  private static instance: TransactionDetailBL

  public static getInstance(): TransactionDetailBL {
    if (!TransactionDetailBL.instance) {
      TransactionDetailBL.instance = new TransactionDetailBL()
    }
    return TransactionDetailBL.instance
  }

  /**
   * 📥 Nạp chi tiết bản ghi từ SQL Server theo ID
   */
  async loadDetail(id: number | string): Promise<TransactionItem | null> {
    const dataEngine = useDataEngine.getState()

    if (!id || id === 'new') {
      const defaultNew: TransactionItem = {
        id: 0,
        jobNo: `FCLI-${new Date().getFullYear()}${String(Date.now()).slice(-4)}`,
        typeId: 1, // FCL Import
        shipmentDate: new Date().toISOString().split('T')[0],
        mblType: 'SURRENDERED',
        service: 'CY/CY',
        pTerm: 'COLLECT',
        totalPackages: 1,
        packageType: 'PALLETS',
        totalGw: 0,
        totalCbm: 0,
        totalVgm: 0,
        active: true,
      }
      dataEngine.setFormRecord('default', defaultNew)
      return defaultNew
    }

    try {
      const res = await fetch(`http://localhost:5048/api/core/data/Transaction/${id}`)
      if (res.ok) {
        const data: TransactionItem = await res.json()
        dataEngine.setFormRecord('default', data)
        return data
      }
    } catch (err) {
      console.error(`[TransactionDetailBL] Lỗi tải chi tiết bản ghi #${id}:`, err)
    }

    return null
  }

  /**
   * 🏷️ Nạp danh sách các lô hàng con (Sub-records) phục vụ ForgeRecordSelector
   */
  async loadSubRecords(jobNo?: string): Promise<any[]> {
    try {
      const dataEngine = useDataEngine.getState()
      // Tải các bản ghi bắt đầu bằng FCLT- hoặc cùng nhóm
      const allTrans: TransactionItem[] = await dataEngine.queryEntity('Transaction', 'TypeId eq 1')
      const subRecords = allTrans
        .filter((t) => (t.jobNo && t.jobNo.startsWith('FCLT-')) || (t.JobNo && t.JobNo.startsWith('FCLT-')))
        .map((t) => ({
          id: t.id || t.Id,
          code: t.jobNo || t.JobNo,
          mblNo: t.mblNo || t.MblNo,
          raw: t,
        }))

      if (subRecords.length > 0) {
        return subRecords
      }
    } catch (err) {
      console.error('[TransactionDetailBL] Lỗi tải sub-records:', err)
    }

    // Fallback nếu chưa có sub-record
    return [
      { id: '1', code: 'FCLT-26020005' },
      { id: '2', code: 'FCLT-26020006' },
      { id: '3', code: 'FCLT-26020007' },
    ]
  }

  /**
   * 🔄 Chuyển đổi dữ liệu Form sang lô con được chọn
   */
  switchSubRecord(subItem: any) {
    const dataEngine = useDataEngine.getState()
    if (subItem.raw) {
      dataEngine.setFormRecord('default', subItem.raw)
    } else {
      const current = dataEngine.getFormRecord('default')
      dataEngine.setFormRecord('default', {
        ...current,
        jobNo: subItem.code || subItem.id,
      })
    }
  }

  /**
   * 💾 Lưu dữ liệu vào SQL Server Database (POST hoặc PUT)
   */
  async save(formId = 'default'): Promise<{ success: boolean; data?: any; message: string }> {
    const dataEngine = useDataEngine.getState()
    const formRecord = dataEngine.getFormRecord(formId)

    if (!formRecord.jobNo && !formRecord.JobNo) {
      return { success: false, message: 'Vui lòng nhập Job No. cho lô hàng' }
    }

    const id = formRecord.id || formRecord.Id

    try {
      if (id && id !== 'new' && Number(id) > 0) {
        // Cập nhật PUT
        const res = await fetch(`http://localhost:5048/api/core/data/Transaction/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formRecord),
        })

        if (res.ok) {
          const updated = await res.json()
          dataEngine.setFormRecord(formId, updated)
          return { success: true, data: updated, message: `Đã cập nhật thành công lô hàng #${id} vào Database SQL Server!` }
        } else {
          return { success: false, message: `Lỗi cập nhật HTTP ${res.status}` }
        }
      } else {
        // Thêm mới POST
        const res = await fetch('http://localhost:5048/api/core/data/Transaction', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formRecord),
        })

        if (res.ok) {
          const created = await res.json()
          dataEngine.setFormRecord(formId, created)
          return { success: true, data: created, message: `Đã tạo mới thành công lô hàng vào Database SQL Server!` }
        } else {
          return { success: false, message: `Lỗi tạo mới HTTP ${res.status}` }
        }
      }
    } catch (err: any) {
      console.error('[TransactionDetailBL] Lỗi lưu vào database:', err)
      return { success: false, message: err?.message || 'Lỗi kết nối tới Backend' }
    }
  }
}

export const transactionDetailBL = TransactionDetailBL.getInstance()

