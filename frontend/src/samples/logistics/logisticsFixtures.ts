/**
 * 🚢 LOGISTICS SAMPLE FIXTURES & ENTITIES
 * (Dành riêng cho màn hình mẫu FCL Import - Hoàn toàn độc lập khỏi Lõi Core)
 * 
 * Bộ dữ liệu mẫu dùng để kiểm thử sức mạnh của UIForge Engine theo chỉ đạo của Master:
 * - Table: Transactions (Lô hàng FCL Import)
 * - Table: Terminals (Cảng biển)
 * - Table: Containers (Danh sách container)
 * - Table: ShipmentDetails (Chi tiết vận đơn HBL)
 */

export interface TransactionEntity {
  id: number
  jobNo: string
  typeId: number // 1: FCL, 2: LCL, 3: AIR
  shipmentDate: string
  mblNo: string
  mblIssuedDate: string
  mblType: string
  vendorId: string
  vendorName: string
  sLines: string
  agent: string
  polId: string
  podId: string
  service: string
  opic: string
  eta: string
  pTerm: string
  commodity: string
  totalPackages: number
  packageType: string
  totalGw: number
  totalCbm: number
  totalVgm: number
  poNo: string
  notes: string
  active: boolean
  createdDate: string
  createdBy: string
}

export interface TerminalEntity {
  id: string
  code: string
  fullName: string
  country: string
  vendorId: string
  vendorName: string
  agentName: string
  active: boolean
}

// 1. Danh mục Cảng biển mẫu (Terminals)
export const SAMPLE_TERMINALS: TerminalEntity[] = [
  { id: 'CNSGH', code: 'CNSGH', fullName: 'SHANGHAI / CNSGH', country: 'CHINA', vendorId: 'VFRAC-IT', vendorName: 'VFRAC-IT VIETNAM', agentName: 'SHANGHAI TRANSLEAD', active: true },
  { id: 'KRPUS', code: 'KRPUS', fullName: 'BUSAN / KRPUS', country: 'KOREA', vendorId: 'TRANSLEAD', vendorName: 'SHANGHAI TRANSLEAD', agentName: 'OCEAN NETWORK EXPRESS JAPAN', active: true },
  { id: 'SGSIN', code: 'SGSIN', fullName: 'SINGAPORE / SGSIN', country: 'SINGAPORE', vendorId: 'VFRAC-IT', vendorName: 'VFRAC-IT VIETNAM', agentName: 'SITC LOGISTICS SINGAPORE', active: true },
  { id: 'CNNGB', code: 'CNNGB', fullName: 'NINGBO / CNNGB', country: 'CHINA', vendorId: 'TRANSLEAD', vendorName: 'KMTC VIETNAM CO., LTD', agentName: 'KMTC INCHEON', active: true },
  { id: 'VNDTS', code: 'VNDTS', fullName: 'TIEN SA TERMINAL / VNDTS', country: 'VIETNAM', vendorId: 'VFRAC-IT', vendorName: 'CẢNG ĐÀ NẴNG', agentName: 'TIEN SA LOGISTICS', active: true },
  { id: 'VNSGN', code: 'VNSGN', fullName: 'CAT LAI / VNSGN', country: 'VIETNAM', vendorId: 'TRANSLEAD', vendorName: 'TÂN CẢNG SÀI GÒN', agentName: 'SAIGON NEWPORT', active: true },
  { id: 'VNHPH', code: 'VNHPH', fullName: 'HAI PHONG / VNHPH', country: 'VIETNAM', vendorId: 'VFRAC-IT', vendorName: 'CẢNG HẢI PHÒNG', agentName: 'HAI PHONG PORT AUTHORITY', active: true },
]

// 2. Danh sách Chặng tàu mẫu (Shipping Info)
export const SAMPLE_SHIPPING_INFO = [
  { id: 1, transactionId: 1, pol: 'SHANGHAI / CNSGH', pod: 'TIEN SA TERMINAL / VNDTS', etd: '26/01/2026', atd: '26/01/2026', eta: '03/02/2026', ata: '03/02/2026', vessel: 'CA OSAKA', voy: '2602W', active: true },
  { id: 2, transactionId: 1, pol: 'BUSAN / KRPUS', pod: 'CAT LAI / VNSGN', etd: '28/01/2026', atd: '—', eta: '05/02/2026', ata: '—', vessel: 'DONGJIN ENTERPRISE', voy: '0122S', active: true },
  { id: 3, transactionId: 1, pol: 'SINGAPORE / SGSIN', pod: 'HAI PHONG / VNHPH', etd: '02/02/2026', atd: '—', eta: '08/02/2026', ata: '—', vessel: 'SITC HONGKONG', voy: '2418N', active: true },
  { id: 4, transactionId: 1, pol: 'NINGBO / CNNGB', pod: 'TIEN SA / VNDTS', etd: '05/02/2026', atd: '—', eta: '11/02/2026', ata: '—', vessel: 'KMTC INCHEON', voy: '2601S', active: true },
]

// 3. Danh sách Container mẫu
export const SAMPLE_CONTAINERS = [
  { id: 1, transactionId: 1, size: '40HC', containerNo: 'ZIRU8505172', sealNo: 'ARL2873758', packageNumber: 12, packageType: 'PALLETS', gw: 1085, cbm: 25.0, vgm: 0, description: 'Lô hàng linh kiện điện tử nguyên container (FCL)', active: true },
]

// 4. Danh sách Chứng từ HBL mẫu
export const SAMPLE_SHIPMENT_DETAILS = [
  { id: 1, transactionId: 1, custom: true, trucking: false, hblNo: 'OLSC2600154', customer: 'FOXLINK DA NANG', salesman: 'NGO PHAN THI LY', salesSupport: 'HO THI MAI', handleGroup: 'SEA IMPORT', documentNo: 'DOC-2602-0089', shipmentType: 'NOMINATED', doNo: 'FCL-26020025-1', referenceNo: 'REF-8899', active: true },
]
