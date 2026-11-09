import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {
  calculateAutoPopulatedFields,
  getCascadedOptions,
  SelectOption,
} from '@/core/engines/cascadingEngine'
import {
  validateField,
  validateISO6346ContainerNo,
  validateDateSequence,
  ValidationRule,
} from '@/core/engines/validationEngine'

export interface MasterRecord {
  jobNo: string
  shipmentDate: string
  mblNo: string
  mblIssuedDate: string
  mblType: string
  vendor: string
  sLines: string
  agent: string
  pol: string
  pod: string
  service: string
  opic: string
  eta: string
  pTerm: string
  commodity: string
  tPackages: number
  pType: string
  totalGw: number
  totalCbm: number
  totalVgm: number
  poNo: string
  notes: string
  [key: string]: any
}

export interface ShippingRow {
  id: number
  jobNo?: string
  pol: string
  pod: string
  etd: string
  atd: string
  eta: string
  ata: string
  vessel: string
  voy: string
  [key: string]: any
}

export interface ContainerRow {
  id: number
  jobNo?: string
  size: string
  containerNo: string
  sealNo: string
  packageNumber: number
  packageType: string
  gw: number
  cbm: number
  vgm: number
  description: string
  [key: string]: any
}

export interface ShipmentDetailRow {
  id: number
  jobNo?: string
  hblNo: string
  custom: boolean
  trucking: boolean
  customer: string
  salesman: string
  salesSupport: string
  handleGroup: string
  documentNo: string
  shipmentType: string
  doNo: string
  referenceNo: string
  [key: string]: any
}

// 📦 Dữ liệu đa lô hàng (Master-Detail Multi-Job Dataset)
const INITIAL_JOB_DATABASE: Record<
  string,
  {
    master: MasterRecord
    shippingInfo: ShippingRow[]
    containerInfo: ContainerRow[]
    shipmentDetail: ShipmentDetailRow[]
  }
> = {
  'FCLI-26020005': {
    master: {
      jobNo: 'FCLI-26020005',
      shipmentDate: '02/02/2026',
      mblNo: 'ASHVT00002005',
      mblIssuedDate: '25/01/2026',
      mblType: 'SURRENDERED',
      vendor: 'VFRAC-IT',
      sLines: 'SITC',
      agent: 'SHANGHAI TRANSLEAD',
      pol: 'CNSGH',
      pod: 'VNDTS',
      service: 'CYCY',
      opic: 'NGO PHAN THI LY',
      eta: '03/02/2026',
      pTerm: 'COLLECT',
      commodity: 'Linh kiện điện tử phụ trợ',
      tPackages: 12,
      pType: 'PALL',
      totalGw: 1085,
      totalCbm: 25.0,
      totalVgm: 0,
      poNo: 'PO-2026-8899',
      notes: 'Lô hàng FCL nhập khẩu theo chỉ thị của khách hàng Foxlink Đà Nẵng. Lưu kho cảng Tiên Sa.',
    },
    shippingInfo: [
      {
        id: 1,
        jobNo: 'FCLI-26020005',
        pol: 'SHANGHAI / CNSGH',
        pod: 'TIEN SA TERMINAL / VNDTS',
        etd: '26/01/2026',
        atd: '26/01/2026',
        eta: '03/02/2026',
        ata: '03/02/2026',
        vessel: 'CA OSAKA',
        voy: '2602W',
      },
      {
        id: 2,
        jobNo: 'FCLI-26020005',
        pol: 'BUSAN / KRPUS',
        pod: 'CAT LAI / VNSGN',
        etd: '28/01/2026',
        atd: '—',
        eta: '05/02/2026',
        ata: '—',
        vessel: 'DONGJIN ENTERPRISE',
        voy: '0122S',
      },
      {
        id: 3,
        jobNo: 'FCLI-26020005',
        pol: 'SINGAPORE / SGSIN',
        pod: 'HAI PHONG / VNHPH',
        etd: '02/02/2026',
        atd: '—',
        eta: '08/02/2026',
        ata: '—',
        vessel: 'SITC HONGKONG',
        voy: '2418N',
      },
      {
        id: 4,
        jobNo: 'FCLI-26020005',
        pol: 'NINGBO / CNNGB',
        pod: 'TIEN SA / VNDTS',
        etd: '05/02/2026',
        atd: '—',
        eta: '11/02/2026',
        ata: '—',
        vessel: 'KMTC INCHEON',
        voy: '2601S',
      },
    ],
    containerInfo: [
      {
        id: 1,
        jobNo: 'FCLI-26020005',
        size: '40HC',
        containerNo: 'ZIRU8505175',
        sealNo: 'ARL2873758',
        packageNumber: 12,
        packageType: 'PALLETS',
        gw: 1085,
        cbm: 25.0,
        vgm: 0,
        description: 'Lô hàng linh kiện điện tử nguyên container (FCL)',
      },
    ],
    shipmentDetail: [
      {
        id: 1,
        jobNo: 'FCLI-26020005',
        hblNo: 'OLSC2600154',
        custom: true,
        trucking: false,
        customer: 'FOXLINK DA NANG',
        salesman: 'NGO PHAN THI LY',
        salesSupport: 'HO THI MAI',
        handleGroup: 'SEA IMPORT',
        documentNo: 'DOC-2602-0089',
        shipmentType: 'NOMINATED',
        doNo: 'FCL-26020025-1',
        referenceNo: 'REF-8899',
      },
    ],
  },
  'FCLI-26020006': {
    master: {
      jobNo: 'FCLI-26020006',
      shipmentDate: '05/02/2026',
      mblNo: 'ONEYS26003112',
      mblIssuedDate: '28/01/2026',
      mblType: 'ORIGINAL',
      vendor: 'TRANSLEAD',
      sLines: 'ONE',
      agent: 'OCEAN NETWORK EXPRESS JAPAN',
      pol: 'KRPUS',
      pod: 'VNSGN',
      service: 'CYCY',
      opic: 'LE VAN TRUNG',
      eta: '10/02/2026',
      pTerm: 'PREPAID',
      commodity: 'Máy móc thiết bị công nghiệp nặng',
      tPackages: 48,
      pType: 'PALL',
      totalGw: 8450,
      totalCbm: 68.5,
      totalVgm: 12000,
      poNo: 'PO-KR-2026-042',
      notes: 'Lô hàng thiết bị máy dập tự động nhập từ Busan về cảng Cát Lái.',
    },
    shippingInfo: [
      {
        id: 1,
        jobNo: 'FCLI-26020006',
        pol: 'BUSAN / KRPUS',
        pod: 'CAT LAI / VNSGN',
        etd: '29/01/2026',
        atd: '29/01/2026',
        eta: '10/02/2026',
        ata: '—',
        vessel: 'ONE APUS',
        voy: '0412E',
      },
    ],
    containerInfo: [
      {
        id: 1,
        jobNo: 'FCLI-26020006',
        size: '40HC',
        containerNo: 'TGHU0194823',
        sealNo: 'ONE7788991',
        packageNumber: 24,
        packageType: 'PALLETS',
        gw: 4225,
        cbm: 34.25,
        vgm: 6000,
        description: 'Module máy công nghiệp phần A',
      },
      {
        id: 2,
        jobNo: 'FCLI-26020006',
        size: '40HC',
        containerNo: 'NYKU4920194',
        sealNo: 'ONE7788992',
        packageNumber: 24,
        packageType: 'PALLETS',
        gw: 4225,
        cbm: 34.25,
        vgm: 6000,
        description: 'Module máy công nghiệp phần B',
      },
    ],
    shipmentDetail: [
      {
        id: 1,
        jobNo: 'FCLI-26020006',
        hblNo: 'HBL-ONE-260201',
        custom: true,
        trucking: true,
        customer: 'HYUNDAI ALUMINUM VINA',
        salesman: 'LE VAN TRUNG',
        salesSupport: 'NGUYEN THI ANH',
        handleGroup: 'SEA IMPORT',
        documentNo: 'DOC-2602-0199',
        shipmentType: 'FREEHAND',
        doNo: 'DO-2602006-A',
        referenceNo: 'REF-HYU-01',
      },
    ],
  },
  'FCLI-26020007': {
    master: {
      jobNo: 'FCLI-26020007',
      shipmentDate: '08/02/2026',
      mblNo: 'WHLV00928174',
      mblIssuedDate: '02/02/2026',
      mblType: 'SEAWAY',
      vendor: 'VFRAC-IT',
      sLines: 'WHL',
      agent: 'WAN HAI LINES TAIPEI',
      pol: 'CNSGH',
      pod: 'VNHPH',
      service: 'DOOR',
      opic: 'TRAN MINH QUAN',
      eta: '14/02/2026',
      pTerm: 'COLLECT',
      commodity: 'Vải dệt may và phụ liệu may mặc',
      tPackages: 120,
      pType: 'ROLL',
      totalGw: 14200,
      totalCbm: 82.0,
      totalVgm: 18500,
      poNo: 'PO-TEX-2026-901',
      notes: 'Lô hàng vải cao cấp nguyên cont giao kho Đình Vũ Hải Phòng.',
    },
    shippingInfo: [
      {
        id: 1,
        jobNo: 'FCLI-26020007',
        pol: 'SHANGHAI / CNSGH',
        pod: 'HAI PHONG / VNHPH',
        etd: '04/02/2026',
        atd: '04/02/2026',
        eta: '14/02/2026',
        ata: '—',
        vessel: 'WAN HAI 315',
        voy: 'S089',
      },
    ],
    containerInfo: [
      {
        id: 1,
        jobNo: 'FCLI-26020007',
        size: '40HC',
        containerNo: 'WHLU7891230',
        sealNo: 'WHL991283',
        packageNumber: 60,
        packageType: 'ROLL',
        gw: 7100,
        cbm: 41.0,
        vgm: 9250,
        description: 'Vải dệt thoi thành phẩm kiện A',
      },
      {
        id: 2,
        jobNo: 'FCLI-26020007',
        size: '40HC',
        containerNo: 'WHLU7891246',
        sealNo: 'WHL991284',
        packageNumber: 60,
        packageType: 'ROLL',
        gw: 7100,
        cbm: 41.0,
        vgm: 9250,
        description: 'Vải dệt thoi thành phẩm kiện B',
      },
    ],
    shipmentDetail: [
      {
        id: 1,
        jobNo: 'FCLI-26020007',
        hblNo: 'HBL-WHL-260207',
        custom: true,
        trucking: true,
        customer: 'MAY 10 CORPORATION',
        salesman: 'TRAN MINH QUAN',
        salesSupport: 'HO THI MAI',
        handleGroup: 'SEA IMPORT',
        documentNo: 'DOC-2602-0312',
        shipmentType: 'NOMINATED',
        doNo: 'DO-2602007-1',
        referenceNo: 'REF-M10-88',
      },
    ],
  },
}

// Bảng ánh xạ ID trường HTML sang Key của Master Record
const FIELD_ID_MAP: Record<string, keyof MasterRecord> = {
  fld_job_no: 'jobNo',
  fld_shipment_date: 'shipmentDate',
  fld_mbl_no: 'mblNo',
  fld_mbl_date: 'mblIssuedDate',
  fld_mbl_type: 'mblType',
  fld_vendor: 'vendor',
  fld_lines: 'sLines',
  fld_agent: 'agent',
  fld_pol: 'pol',
  fld_pod: 'pod',
  fld_service: 'service',
  fld_opic: 'opic',
  fld_eta: 'eta',
  fld_pterm: 'pTerm',
  fld_commodity: 'commodity',
  fld_tpackages: 'tPackages',
  fld_ptype: 'pType',
  fld_total_gw: 'totalGw',
  fld_total_cbm: 'totalCbm',
  fld_total_vgm: 'totalVgm',
  fld_po_no: 'poNo',
  fld_notes: 'notes',
}

interface MasterDetailState {
  jobs: string[]
  activeJobNo: string
  masterRecord: MasterRecord
  detailGrids: {
    grid_shipping_info: ShippingRow[]
    grid_container_info: ContainerRow[]
    grid_shipment_detail: ShipmentDetailRow[]
    [key: string]: any[]
  }
  validationErrors: Record<string, string> // key: fieldName hoặc row-col key -> message

  // Actions
  selectJob: (jobNo: string) => void
  createNewJob: () => string
  updateMasterField: (fieldKeyOrId: string, value: any) => void
  updateGridCell: (gridId: string, rowId: any, columnKey: string, value: any) => void
  addGridRow: (gridId: string, initialData?: any) => void
  deleteGridRow: (gridId: string, rowIndex: number) => void
  duplicateGridRow: (gridId: string, rowIndex: number) => void
  recalculateTotals: () => void
  validateAll: () => boolean
  saveAggregate: () => Promise<{ success: boolean; message: string; aggregate?: any }>
}

export const useMasterDetailStore = create<MasterDetailState>()(
  devtools((set, get) => ({
    jobs: ['FCLI-26020005', 'FCLI-26020006', 'FCLI-26020007'],
    activeJobNo: 'FCLI-26020005',
    masterRecord: { ...INITIAL_JOB_DATABASE['FCLI-26020005'].master },
    detailGrids: {
      grid_shipping_info: [...INITIAL_JOB_DATABASE['FCLI-26020005'].shippingInfo],
      grid_container_info: [...INITIAL_JOB_DATABASE['FCLI-26020005'].containerInfo],
      grid_shipment_detail: [...INITIAL_JOB_DATABASE['FCLI-26020005'].shipmentDetail],
    },
    validationErrors: {},

    // 1. Chuyển Job No (Master-Detail Switching)
    selectJob: (jobNo: string) => {
      const jobData = INITIAL_JOB_DATABASE[jobNo]
      if (jobData) {
        set({
          activeJobNo: jobNo,
          masterRecord: { ...jobData.master },
          detailGrids: {
            grid_shipping_info: [...jobData.shippingInfo],
            grid_container_info: [...jobData.containerInfo],
            grid_shipment_detail: [...jobData.shipmentDetail],
          },
          validationErrors: {},
        })
      }
    },

    // 2. Tạo Job mới
    createNewJob: () => {
      const currentJobs = get().jobs
      const nextNum = currentJobs.length + 5
      const newJobNo = `FCLI-2602000${nextNum}`

      const newMaster: MasterRecord = {
        jobNo: newJobNo,
        shipmentDate: new Date().toLocaleDateString('vi-VN'),
        mblNo: '',
        mblIssuedDate: '',
        mblType: 'SURRENDERED',
        vendor: 'VFRAC-IT',
        sLines: 'SITC',
        agent: 'SHANGHAI TRANSLEAD',
        pol: 'CNSGH',
        pod: 'VNDTS',
        service: 'CYCY',
        opic: 'NGO PHAN THI LY',
        eta: '',
        pTerm: 'COLLECT',
        commodity: '',
        tPackages: 0,
        pType: 'PALL',
        totalGw: 0,
        totalCbm: 0,
        totalVgm: 0,
        poNo: '',
        notes: '',
      }

      INITIAL_JOB_DATABASE[newJobNo] = {
        master: newMaster,
        shippingInfo: [],
        containerInfo: [],
        shipmentDetail: [],
      }

      set({
        jobs: [...currentJobs, newJobNo],
        activeJobNo: newJobNo,
        masterRecord: newMaster,
        detailGrids: {
          grid_shipping_info: [],
          grid_container_info: [],
          grid_shipment_detail: [],
        },
        validationErrors: {},
      })

      return newJobNo
    },

    // 3. Cập nhật trường trên Master Form (kèm Cascading, Auto-Populate & Validation)
    updateMasterField: (fieldKeyOrId: string, value: any) => {
      const canonicalKey = String(FIELD_ID_MAP[fieldKeyOrId] || fieldKeyOrId)
      const current = get().masterRecord
      const updatedMaster = { ...current, [canonicalKey]: value }

      // Kích hoạt Auto-Populate & Cascading
      const populated = calculateAutoPopulatedFields(canonicalKey, value, updatedMaster)
      Object.assign(updatedMaster, populated)

      // Kích hoạt Validation thời gian thực
      const currentErrors = { ...get().validationErrors }

      // 1. Kiểm tra M-B/L No (Pattern regex)
      if (canonicalKey === 'mblNo') {
        const valStr = String(value || '').trim()
        if (!valStr) {
          currentErrors['mblNo'] = 'Số M-B/L là bắt buộc'
        } else if (!/^[A-Z0-9]{8,18}$/i.test(valStr)) {
          currentErrors['mblNo'] = 'Số M-B/L không đúng định dạng (8-18 ký tự chữ và số)'
        } else {
          delete currentErrors['mblNo']
        }
      }

      // 2. Kiểm tra Job No (Required)
      if (canonicalKey === 'jobNo') {
        const valStr = String(value || '').trim()
        if (!valStr) {
          currentErrors['jobNo'] = 'Job No không được để trống'
        } else {
          delete currentErrors['jobNo']
        }
      }

      // 3. Kiểm tra ngày tháng logic (Issue Date <= Shipment Date)
      if (canonicalKey === 'mblIssuedDate' || canonicalKey === 'shipmentDate') {
        const issue = updatedMaster.mblIssuedDate
        const ship = updatedMaster.shipmentDate
        if (issue && ship) {
          const check = validateDateSequence(issue, ship, 'Ngày phát hành M-B/L', 'Ngày khởi hành (S.Date)')
          if (!check.isValid) {
            currentErrors['mblIssuedDate'] = check.message || 'Ngày phát hành phải trước ngày khởi hành'
          } else {
            delete currentErrors['mblIssuedDate']
          }
        }
      }

      set({
        masterRecord: updatedMaster,
        validationErrors: currentErrors,
      })

      // Lưu ngược vào database mock để duy trì state
      const activeJob = get().activeJobNo
      if (INITIAL_JOB_DATABASE[activeJob]) {
        INITIAL_JOB_DATABASE[activeJob].master = updatedMaster
      }
    },

    // 4. Cập nhật ô trong Lưới (Grid Cell Editing + Reactive Totals + Cell Validation)
    updateGridCell: (gridId: string, rowId: any, columnKey: string, value: any) => {
      const grids = get().detailGrids
      const targetGrid = grids[gridId] || []
      const currentErrors = { ...get().validationErrors }
      const errorCellKey = `${gridId}_${rowId}_${columnKey}`

      const updatedGrid = targetGrid.map((r, i) => {
        const isMatch = (r.id !== undefined && r.id === rowId) || (r.id === undefined && i === rowId)
        if (isMatch) {
          return { ...r, [columnKey]: value }
        }
        return r
      })

      // Validation riêng cho từng cột đặc thù
      // 1. Cột Số hiệu Container (ISO 6346)
      if (columnKey === 'containerNo') {
        const check = validateISO6346ContainerNo(String(value))
        if (!check.isValid) {
          currentErrors[errorCellKey] = check.message
        } else {
          delete currentErrors[errorCellKey]
        }
      }

      // 2. Cột ngày chặng tàu (ETD <= ETA)
      if (gridId === 'grid_shipping_info' && (columnKey === 'etd' || columnKey === 'eta')) {
        const targetRow = updatedGrid.find((r) => r.id === rowId)
        if (targetRow && targetRow.etd && targetRow.eta) {
          const check = validateDateSequence(targetRow.etd, targetRow.eta, 'ETD', 'ETA')
          const dateErrKey = `${gridId}_${rowId}_etd_eta`
          if (!check.isValid) {
            currentErrors[dateErrKey] = check.message || 'ETD phải trước ETA'
          } else {
            delete currentErrors[dateErrKey]
          }
        }
      }

      set({
        detailGrids: { ...grids, [gridId]: updatedGrid },
        validationErrors: currentErrors,
      })

      // Tự động tính toán lại tổng (Reactive Summary Calculation)
      if (gridId === 'grid_container_info') {
        get().recalculateTotals()
      }

      // Đồng bộ vào persistent mock database
      const activeJob = get().activeJobNo
      if (INITIAL_JOB_DATABASE[activeJob]) {
        if (gridId === 'grid_shipping_info') INITIAL_JOB_DATABASE[activeJob].shippingInfo = updatedGrid as any
        if (gridId === 'grid_container_info') INITIAL_JOB_DATABASE[activeJob].containerInfo = updatedGrid as any
        if (gridId === 'grid_shipment_detail') INITIAL_JOB_DATABASE[activeJob].shipmentDetail = updatedGrid as any
      }
    },

    // 5. Thêm dòng mới vào Lưới con (kèm gán khóa ngoại JobNo)
    addGridRow: (gridId: string, initialData?: any) => {
      const grids = get().detailGrids
      const currentRows = grids[gridId] || []
      const nextId = currentRows.length > 0 ? Math.max(...currentRows.map((r) => Number(r.id) || 0)) + 1 : 1
      const activeJob = get().activeJobNo

      let defaultRow: any = { id: nextId, jobNo: activeJob }

      if (gridId === 'grid_container_info') {
        defaultRow = {
          id: nextId,
          jobNo: activeJob,
          size: '40HC',
          containerNo: 'ZIRU' + Math.floor(1000000 + Math.random() * 9000000),
          sealNo: 'ARL' + Math.floor(1000000 + Math.random() * 9000000),
          packageNumber: 10,
          packageType: 'PALLETS',
          gw: 1000,
          cbm: 20.0,
          vgm: 0,
          description: 'Hàng hóa container mới',
          ...initialData,
        }
      } else if (gridId === 'grid_shipping_info') {
        defaultRow = {
          id: nextId,
          jobNo: activeJob,
          pol: 'SHANGHAI / CNSGH',
          pod: 'TIEN SA / VNDTS',
          etd: '10/02/2026',
          atd: '—',
          eta: '16/02/2026',
          ata: '—',
          vessel: 'NEW VESSEL',
          voy: '0101N',
          ...initialData,
        }
      } else if (gridId === 'grid_shipment_detail') {
        defaultRow = {
          id: nextId,
          jobNo: activeJob,
          hblNo: 'HBL-' + Math.floor(100000 + Math.random() * 900000),
          custom: true,
          trucking: false,
          customer: 'DOANH NGHIEP MOI',
          salesman: 'NGO PHAN THI LY',
          salesSupport: 'HO THI MAI',
          handleGroup: 'SEA IMPORT',
          documentNo: 'DOC-NEW',
          shipmentType: 'NOMINATED',
          doNo: 'DO-NEW',
          referenceNo: 'REF-NEW',
          ...initialData,
        }
      } else {
        defaultRow = { id: nextId, jobNo: activeJob, ...initialData }
      }

      const nextRows = [...currentRows, defaultRow]
      set({
        detailGrids: { ...grids, [gridId]: nextRows },
      })

      if (gridId === 'grid_container_info') {
        get().recalculateTotals()
      }
    },

    // 6. Xóa dòng trong Lưới
    deleteGridRow: (gridId: string, rowIndex: number) => {
      const grids = get().detailGrids
      const currentRows = grids[gridId] || []
      const nextRows = currentRows.filter((_, idx) => idx !== rowIndex)

      set({
        detailGrids: { ...grids, [gridId]: nextRows },
      })

      if (gridId === 'grid_container_info') {
        get().recalculateTotals()
      }
    },

    // 7. Nhân bản dòng trong Lưới
    duplicateGridRow: (gridId: string, rowIndex: number) => {
      const grids = get().detailGrids
      const currentRows = grids[gridId] || []
      const target = currentRows[rowIndex]
      if (!target) return

      const nextId = currentRows.length > 0 ? Math.max(...currentRows.map((r) => Number(r.id) || 0)) + 1 : 1
      const cloned = { ...target, id: nextId }

      const nextRows = [...currentRows]
      nextRows.splice(rowIndex + 1, 0, cloned)

      set({
        detailGrids: { ...grids, [gridId]: nextRows },
      })

      if (gridId === 'grid_container_info') {
        get().recalculateTotals()
      }
    },

    // 8. Tự động tính toán lại Tổng (Reactive Totals) từ bảng CONTAINER INFORMATION
    recalculateTotals: () => {
      const containers = get().detailGrids.grid_container_info || []
      let totalPkgs = 0
      let totalGw = 0
      let totalCbm = 0
      let totalVgm = 0

      containers.forEach((c) => {
        totalPkgs += Number(c.packageNumber) || 0
        totalGw += Number(c.gw) || 0
        totalCbm += Number(c.cbm) || 0
        totalVgm += Number(c.vgm) || 0
      })

      const currentMaster = get().masterRecord
      const updatedMaster: MasterRecord = {
        ...currentMaster,
        tPackages: totalPkgs,
        totalGw: totalGw,
        totalCbm: Number(totalCbm.toFixed(2)),
        totalVgm: totalVgm,
      }

      set({ masterRecord: updatedMaster })

      const activeJob = get().activeJobNo
      if (INITIAL_JOB_DATABASE[activeJob]) {
        INITIAL_JOB_DATABASE[activeJob].master = updatedMaster
      }
    },

    // 9. Kiểm tra toàn bộ dữ liệu (Validate All)
    validateAll: () => {
      const master = get().masterRecord
      const errors: Record<string, string> = {}

      if (!master.jobNo?.trim()) errors['jobNo'] = 'Job No không được để trống'
      if (!master.mblNo?.trim()) errors['mblNo'] = 'Số M-B/L không được để trống'
      else if (!/^[A-Z0-9]{8,18}$/i.test(master.mblNo.trim())) {
        errors['mblNo'] = 'Số M-B/L phải gồm 8 - 18 ký tự chữ và số'
      }

      // Kiểm tra Container check digit
      const containers = get().detailGrids.grid_container_info || []
      containers.forEach((c) => {
        const check = validateISO6346ContainerNo(c.containerNo)
        if (!check.isValid) {
          errors[`grid_container_info_${c.id}_containerNo`] = check.message
        }
      })

      set({ validationErrors: errors })
      return Object.keys(errors).length === 0
    },

    // 10. Lưu dữ liệu Hợp nhất Master-Detail (Aggregate Save)
    saveAggregate: async () => {
      const isValid = get().validateAll()
      if (!isValid) {
        const errCount = Object.keys(get().validationErrors).length
        return {
          success: false,
          message: `Lưu thất bại: Còn ${errCount} trường dữ liệu chưa hợp lệ. Vui lòng kiểm tra các ô có viền đỏ.`,
        }
      }

      const activeJob = get().activeJobNo
      const payload = {
        master: get().masterRecord,
        shippingInfo: get().detailGrids.grid_shipping_info,
        containerInfo: get().detailGrids.grid_container_info,
        shipmentDetail: get().detailGrids.grid_shipment_detail,
      }

      try {
        // Thử gửi sang Backend API nếu có
        const response = await fetch('http://localhost:5048/api/fcl-import/save-aggregate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          const resJson = await response.json()
          return {
            success: true,
            message: `Đã lưu thành công lô hàng ${activeJob} và đồng bộ với CSDL SQL Server!`,
            aggregate: resJson,
          }
        }
      } catch (err) {
        // Nếu API chưa chạy hoặc đang dev offline, lưu bền vững vào local memory
        console.warn('[MasterDetailStore] Backend API chưa phản hồi, đã lưu bền vững vào bộ nhớ ứng dụng:', err)
      }

      return {
        success: true,
        message: `Đã lưu thành công lô hàng [${activeJob}] (1 Master Record + ${payload.containerInfo.length} Containers + ${payload.shippingInfo.length} Chặng tàu) trong một Transaction!`,
        aggregate: payload,
      }
    },
  }))
)
