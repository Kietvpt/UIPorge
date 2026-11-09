import React, { useEffect, useState } from 'react'
import {
  Save,
  X,
  Calendar,
  Layers,
  CheckCircle2,
  AlertCircle,
  Database,
  RotateCcw,
} from 'lucide-react'
import { transactionDetailBL } from '@/logic/transactionDetail.bl'
import { useDataEngine } from '@/core/engines/dataEngine'
import { closeTab } from '@/core/engines/navigationEngine'
import { ForgeRecordSelector } from '@/renderer/components/ForgeRecordSelector'

interface TransactionDetailViewProps {
  id?: number | string
  jobNo?: string
  tabId?: string
}

export const TransactionDetailView: React.FC<TransactionDetailViewProps> = ({
  id = 1,
  jobNo: propsJobNo,
  tabId,
}) => {
  const dataEngine = useDataEngine()
  const [activeTab, setActiveTab] = useState('MAIN INFORMATION')
  const [loading, setLoading] = useState(false)
  const [saveStatus, setSaveStatus] = useState<{ success: boolean; msg: string } | null>(null)
  const [subRecords, setSubRecords] = useState<any[]>([])
  const [activeSubId, setActiveSubId] = useState<string | number>('')

  // Form states
  const [jobNo, setJobNo] = useState('')
  const [sDate, setSDate] = useState('2026-02-02')
  const [mblNo, setMblNo] = useState('')
  const [mblIssuedDate, setMblIssuedDate] = useState('2026-01-25')
  const [mblType, setMblType] = useState('SURRENDERED')
  const [vendor, setVendor] = useState('')
  const [sLines, setSLines] = useState('SITC')
  const [agent, setAgent] = useState('')
  const [pol, setPol] = useState('CNSGH')
  const [pod, setPod] = useState('VNDTS')
  const [service, setService] = useState('CY/CY')
  const [opic, setOpic] = useState('NGO PHAN THI LY')
  const [eta, setEta] = useState('2026-02-03')
  const [pTerm, setPTerm] = useState('COLLECT')
  const [commodity, setCommodity] = useState('')
  const [packages, setPackages] = useState<number>(12)
  const [pType, setPType] = useState('PALLETS')
  const [totalGw, setTotalGw] = useState<number>(1085)
  const [totalCbm, setTotalCbm] = useState<number>(25.0)
  const [totalVgm, setTotalVgm] = useState<number>(0)
  const [poNo, setPoNo] = useState('PO-2026-8899')
  const [notes, setNotes] = useState('')

  // 1. Tải chi tiết bản ghi từ SQL Server khi mount
  useEffect(() => {
    const init = async () => {
      setLoading(true)
      const data = await transactionDetailBL.loadDetail(id)
      if (data) {
        setJobNo(data.jobNo || data.JobNo || '')
        if (data.shipmentDate) setSDate(String(data.shipmentDate).split('T')[0])
        setMblNo(data.mblNo || data.MblNo || '')
        if (data.mblIssuedDate) setMblIssuedDate(String(data.mblIssuedDate).split('T')[0])
        setMblType(data.mblType || 'SURRENDERED')
        setVendor(data.vendorName || data.VendorName || '')
        setSLines(data.sLines || 'SITC')
        setAgent(data.agent || data.Agent || '')
        setPol(data.polId || 'CNSGH')
        setPod(data.podId || 'VNDTS')
        setService(data.service || 'CY/CY')
        setOpic(data.opic || 'NGO PHAN THI LY')
        if (data.eta) setEta(String(data.eta).split('T')[0])
        setPTerm(data.pTerm || 'COLLECT')
        setCommodity(data.commodity || '')
        setPackages(Number(data.totalPackages || 12))
        setPType(data.packageType || 'PALLETS')
        setTotalGw(Number(data.totalGw || 0))
        setTotalCbm(Number(data.totalCbm || 0))
        setTotalVgm(Number(data.totalVgm || 0))
        setPoNo(data.poNo || '')
        setNotes(data.notes || '')
      }

      // Tải danh sách lô con cho ForgeRecordSelector
      const subs = await transactionDetailBL.loadSubRecords(propsJobNo || (data?.jobNo as string))
      setSubRecords(subs)
      if (subs.length > 0) {
        setActiveSubId(subs[0].id)
      }
      setLoading(false)
    }

    init()
  }, [id])

  // 2. Chuyển đổi khi chọn lô con (Sub-record Badge)
  const handleSelectSubRecord = (sub: any) => {
    setActiveSubId(sub.id)
    if (sub.raw) {
      const d = sub.raw
      setJobNo(d.jobNo || d.JobNo || sub.code)
      setMblNo(d.mblNo || d.MblNo || '')
      setCommodity(d.commodity || '')
      setTotalGw(Number(d.totalGw || 0))
      setTotalCbm(Number(d.totalCbm || 0))
      setNotes(d.notes || '')
    } else {
      setJobNo(sub.code || `FCLT-${sub.id}`)
    }
  }

  // 3. Xử lý tạo mới lô con
  const handleAddNewSubRecord = () => {
    const nextIdx = subRecords.length + 5
    const newCode = `FCLT-2602000${nextIdx}`
    const newSub = {
      id: String(Date.now()),
      code: newCode,
      mblNo: mblNo || `ASHVT0000200${nextIdx}`,
    }
    const updated = [...subRecords, newSub]
    setSubRecords(updated)
    setActiveSubId(newSub.id)
    setJobNo(newCode)
    setCommodity('')
    setTotalGw(0)
    setTotalCbm(0)
    setNotes(`Lô hàng con mới [${newCode}]`)
  }

  // 4. Xử lý lưu dữ liệu xuống SQL Server
  const handleSave = async () => {
    setLoading(true)
    const currentPayload = {
      id: Number(id) || 0,
      jobNo,
      typeId: 1, // FCL Import
      shipmentDate: sDate,
      mblNo,
      mblIssuedDate,
      mblType,
      vendorName: vendor,
      sLines,
      agent,
      polId: pol,
      podId: pod,
      service,
      opic,
      eta,
      pTerm,
      commodity,
      totalPackages: packages,
      packageType: pType,
      totalGw,
      totalCbm,
      totalVgm,
      poNo,
      notes,
    }

    dataEngine.setFormRecord('default', currentPayload)
    const result = await transactionDetailBL.save('default')
    setLoading(false)

    if (result.success) {
      setSaveStatus({ success: true, msg: result.message })
      setTimeout(() => setSaveStatus(null), 4000)
    } else {
      setSaveStatus({ success: false, msg: result.message })
    }
  }

  const TABS = [
    'MAIN INFORMATION',
    'MASTER COST',
    'ATTACHMENT',
    'PROFIT',
    'PROFIT (NEW)',
    'RECOMMEND SERVICE',
    'AI CHAT',
    'HISTORY',
  ]

  return (
    <div className="flex flex-col h-full bg-[#080e1c] text-slate-200 overflow-y-auto">
      {/* ── TOP TABS STACK (Khớp ảnh 1 của Master) ── */}
      <div className="flex items-center gap-1 px-4 pt-3 bg-[#060b17] border-b border-teal-600/30 overflow-x-auto select-none">
        {TABS.map((tab) => {
          const isActive = activeTab === tab
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold tracking-wider rounded-t-lg transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#0f172a] text-teal-400 border-t-2 border-teal-400 border-x border-teal-600/40 shadow-lg'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      {/* ── TOAST NOTIFICATION ── */}
      {saveStatus && (
        <div className="p-3 mx-4 mt-3 flex items-center justify-between gap-2 rounded-lg text-xs font-medium animate-in fade-in duration-150 border bg-emerald-950/90 border-emerald-600 text-emerald-300">
          <div className="flex items-center gap-2">
            {saveStatus.success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400" />
            )}
            <span>{saveStatus.msg}</span>
          </div>
          <button
            type="button"
            onClick={() => setSaveStatus(null)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ── MAIN CONTENT: SECTION CARD (GENERAL - FCL IMPORT) ── */}
      <div className="p-4 space-y-4 flex-1">
        <div className="bg-[#0b1324] border border-teal-600/30 rounded-xl p-5 shadow-2xl space-y-5">
          {/* Card Title */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>GENERAL - FCL IMPORT</span>
              <span className="text-[10px] text-slate-500 font-mono font-normal">
                (ID: #{id} | SQL Server)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSave}
                disabled={loading}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-700/30 transition-all cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{loading ? 'Đang lưu...' : 'Lưu Vào Database'}</span>
              </button>
              {tabId && (
                <button
                  type="button"
                  onClick={() => closeTab(tabId)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
                >
                  <X className="w-3.5 h-3.5 text-rose-400" />
                  <span>Đóng</span>
                </button>
              )}
            </div>
          </div>

          {/* ── ROW 1: Job No. & S.Date ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <label className="w-24 text-slate-400 font-semibold shrink-0">Job No. :</label>
              <input
                type="text"
                value={jobNo}
                onChange={(e) => setJobNo(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-cyan-300 font-mono font-semibold focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="w-24 text-slate-400 font-semibold shrink-0">S.Date :</label>
              <div className="relative flex-1">
                <input
                  type="date"
                  value={sDate}
                  onChange={(e) => setSDate(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none font-mono"
                />
              </div>
            </div>
          </div>

          {/* ── ROW 2: FORGE RECORD SELECTOR (LÔ HÀNG) KHỚP 100% ẢNH MASTER ── */}
          <div className="p-3 bg-[#070d1a] border border-blue-500/30 rounded-lg">
            <ForgeRecordSelector
              label="Lô hàng:"
              reference="Transaction"
              displayField="code"
              records={subRecords}
              activeId={activeSubId}
              onSelectRecord={handleSelectSubRecord}
              onAddNew={handleAddNewSubRecord}
            />
          </div>

          {/* ── FORM LƯỚI 12 CỘT CHI TIẾT LÔ HÀNG (Khớp ảnh 1 của Master) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs pt-1">
            {/* M-B/L No */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">M-B/L No *</label>
              <input
                type="text"
                value={mblNo}
                onChange={(e) => setMblNo(e.target.value)}
                placeholder="ASHVT00002005..."
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-amber-300 font-mono font-semibold focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* M-B/L Issued Date */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">M-B/L Issued Date</label>
              <input
                type="date"
                value={mblIssuedDate}
                onChange={(e) => setMblIssuedDate(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 font-mono focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* M-B/L Type */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">M-B/L Type</label>
              <select
                value={mblType}
                onChange={(e) => setMblType(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none cursor-pointer"
              >
                <option value="SURRENDERED">SURRENDERED</option>
                <option value="ORIGINAL">ORIGINAL</option>
                <option value="SEA WAYBILL">SEA WAYBILL</option>
              </select>
            </div>

            {/* Vendor */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Vendor</label>
              <input
                type="text"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* S. Lines */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">S. Lines</label>
              <select
                value={sLines}
                onChange={(e) => setSLines(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none cursor-pointer"
              >
                <option value="SITC">SITC</option>
                <option value="ONE">ONE (Ocean Network Express)</option>
                <option value="WHL">WAN HAI LINES</option>
                <option value="KMTC">KMTC VIETNAM</option>
                <option value="COSCO">COSCO SHIPPING</option>
              </select>
            </div>

            {/* Agent */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Agent</label>
              <input
                type="text"
                value={agent}
                onChange={(e) => setAgent(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* POL */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">POL (Cảng Đi)</label>
              <select
                value={pol}
                onChange={(e) => setPol(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none cursor-pointer"
              >
                <option value="CNSGH">SHANGHAI / CNSGH</option>
                <option value="KRPUS">BUSAN / KRPUS</option>
                <option value="SGSIN">SINGAPORE / SGSIN</option>
                <option value="CNNGB">NINGBO / CNNGB</option>
              </select>
            </div>

            {/* POD */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">POD (Cảng Đến)</label>
              <select
                value={pod}
                onChange={(e) => setPod(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none cursor-pointer"
              >
                <option value="VNDTS">TIEN SA TERMINAL / VNDTS</option>
                <option value="VNSGN">CAT LAI / VNSGN</option>
                <option value="VNHPH">HAI PHONG / VNHPH</option>
              </select>
            </div>

            {/* Service */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Service</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none cursor-pointer"
              >
                <option value="CY/CY">CY/CY</option>
                <option value="CFS/CFS">CFS/CFS</option>
                <option value="DOOR/DOOR">DOOR/DOOR</option>
              </select>
            </div>

            {/* O.P IC */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">O.P IC (Phụ trách)</label>
              <input
                type="text"
                value={opic}
                onChange={(e) => setOpic(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* ETA */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">ETA (Ngày tàu đến)</label>
              <input
                type="date"
                value={eta}
                onChange={(e) => setEta(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 font-mono focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* P.Term */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">P.Term</label>
              <select
                value={pTerm}
                onChange={(e) => setPTerm(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none cursor-pointer"
              >
                <option value="COLLECT">COLLECT</option>
                <option value="PREPAID">PREPAID</option>
              </select>
            </div>

            {/* Commodity */}
            <div className="lg:col-span-2">
              <label className="block text-slate-400 mb-1 font-medium">Commodity (Mặt Hàng)</label>
              <input
                type="text"
                value={commodity}
                onChange={(e) => setCommodity(e.target.value)}
                placeholder="VD: Linh kiện điện tử..."
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* T.Packages & P.Type */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">T.Packages</label>
                <input
                  type="number"
                  value={packages}
                  onChange={(e) => setPackages(Number(e.target.value))}
                  className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 font-mono focus:border-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-medium">P.Type</label>
                <select
                  value={pType}
                  onChange={(e) => setPType(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none cursor-pointer"
                >
                  <option value="PALLETS">PALLETS</option>
                  <option value="CARTONS">CARTONS</option>
                  <option value="BOXES">BOXES</option>
                  <option value="COILS">COILS</option>
                </select>
              </div>
            </div>

            {/* PO No. */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">PO No.</label>
              <input
                type="text"
                value={poNo}
                onChange={(e) => setPoNo(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 font-mono focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Total GW */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Total GW (KGS)</label>
              <input
                type="number"
                value={totalGw}
                onChange={(e) => setTotalGw(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-emerald-400 font-mono font-bold text-right focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Total CBM */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Total CBM</label>
              <input
                type="number"
                step="0.01"
                value={totalCbm}
                onChange={(e) => setTotalCbm(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-cyan-300 font-mono font-bold text-right focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Total VGM */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Total VGM</label>
              <input
                type="number"
                value={totalVgm}
                onChange={(e) => setTotalVgm(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 font-mono text-right focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="text-xs pt-1">
            <label className="block text-slate-400 mb-1 font-medium">Notes (Ghi chú nghiệp vụ)</label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ghi chú tác nghiệp hải quan, kho bãi..."
              className="w-full p-2.5 bg-[#070d18] border border-slate-700 rounded text-slate-200 focus:border-teal-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
