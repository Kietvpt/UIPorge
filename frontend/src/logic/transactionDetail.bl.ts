import { useDataEngine } from '@/core/engines/dataEngine'
import { useEditorStore, saveActiveFeatureIdToUrl, isDetailFeature } from '@/store/editorStore'
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
        const activeId = useEditorStore.getState().activeFeatureId || '4'
        dataEngine.setFormRecord('default', data)
        dataEngine.setFormRecord(activeId, data)
        dataEngine.setFormRecord('4', data)

        // Lưu ID vào URL & LocalStorage CHỈ KHI đang ở màn hình Chi tiết (Detail)
        const curStore = useEditorStore.getState()
        const currentFeat = curStore.features.find((f) => String(f.id) === String(activeId))
        const isDetail = isDetailFeature(currentFeat)

        if (isDetail && typeof window !== 'undefined' && data?.id) {
          saveActiveFeatureIdToUrl(activeId, String(data.id), curStore.features)
        }
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
   * 💾 Lưu dữ liệu vào SQL Server Database qua Core DataEngine (POST hoặc PUT)
   * Tương thích cả khi gọi trực tiếp từ BL hay gọi từ eventRunner (nhận tham số context hoặc formId)
   */
  async save(formIdInput: any = 'default'): Promise<{ success: boolean; data?: any; message: string }> {
    const formId = typeof formIdInput === 'string' ? formIdInput : (formIdInput?.formId || formIdInput?.pageId || 'default')
    const dataEngine = useDataEngine.getState()
    let formRecord = dataEngine.getFormRecord(formId)

    // Nếu chưa có JobNo, dùng Core collectScreenData để thu thập toàn bộ dữ liệu từ màn hình hiện tại
    if (!formRecord || (!formRecord.jobNo && !formRecord.JobNo)) {
      formRecord = dataEngine.collectScreenData(formId)
    }

    // 💡 Kiểm tra Dirty Tracking chuẩn Core C# EditForm.cs: nếu chưa đổi gì thì không gửi request vô ích
    const targetId = formRecord?.id || formRecord?.Id
    if (targetId && targetId !== 'new' && !dataEngine.isFormDirty(formId)) {
      console.log('[TransactionDetailBL] Form chưa bị thay đổi (Not Dirty). Bỏ qua lưu.')
      return { success: true, message: 'Dữ liệu chưa được thay đổi' }
    }

    const jobNo = formRecord?.jobNo || formRecord?.JobNo
    console.log('[TransactionDetailBL] Dữ liệu Form nhận được để lưu:', { jobNo, formId, formRecord })
    if (!jobNo) {
      return { success: false, message: 'Vui lòng nhập Job No. cho lô hàng trước khi lưu' }
    }

    return await dataEngine.saveRecord('Transaction', formRecord, formId)
  }

  /**
   * 🗑️ Xóa bản ghi qua Core DataEngine
   */
  async delete(idInput: any): Promise<{ success: boolean; message: string }> {
    const id = typeof idInput === 'object' ? (idInput?.id || idInput?.Id) : idInput
    if (!id) {
      return { success: false, message: 'Thiếu ID bản ghi cần xóa' }
    }
    return await useDataEngine.getState().deleteRecord('Transaction', id)
  }
}

export const transactionDetailBL = TransactionDetailBL.getInstance()

/**
 * ⚡ Các hàm xuất chuẩn ở top-level cho UIForge Event Runner kích hoạt trực tiếp từ Event của component
 */

/**
 * 💾 Lưu dữ liệu (được nút "Lưu Dữ Liệu" gọi trực tiếp qua sự kiện click)
 */
export async function save(context?: any) {
  return await transactionDetailBL.save(context)
}

/**
 * Bí danh cho save
 */
export const saveTransaction = save

/**
 * 📥 Nạp chi tiết bản ghi theo ID
 */
export async function loadDetail(contextOrId?: any) {
  const id = typeof contextOrId === 'object' ? (contextOrId?.id || contextOrId?.selectedRow?.id || 'new') : (contextOrId || 'new')
  return await transactionDetailBL.loadDetail(id)
}

/**
 * Bí danh khởi tạo dữ liệu
 */
export const initDetailData = loadDetail

/**
 * 🗑️ Xóa bản ghi
 */
export async function deleteRecord(contextOrId?: any) {
  return await transactionDetailBL.delete(contextOrId)
}

export const deleteTransaction = deleteRecord

/**
 * 🚪 Đóng màn hình chi tiết, quay lại danh sách
 */
export function closeDetail() {
  const { features, setActiveFeature } = useEditorStore.getState()
  const listFeat = features.find(
    (f) =>
      f.route === '/transactions' ||
      f.name.toLowerCase().includes('danh sách') ||
      f.scriptFile?.includes('transactionList')
  )
  const targetId = listFeat ? listFeat.id : '6'
  setActiveFeature(targetId, null)
  return { success: true, message: 'Đã đóng màn hình chi tiết, quay lại danh sách' }
}

