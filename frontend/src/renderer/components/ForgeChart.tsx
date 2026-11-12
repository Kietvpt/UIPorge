import React, { useState, useMemo } from 'react'
import type { ComponentNode } from '@/types/schema'
import {
  BarChart3,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  TrendingUp,
  Info,
  Maximize2,
} from 'lucide-react'
import { useDataEngine } from '@/core/engines/dataEngine'

export type ChartType = 'bar' | 'line' | 'donut'

export interface ChartDataItem {
  label: string
  value: number
  color?: string
}

export interface ForgeChartProps {
  node: ComponentNode
  isEditing?: boolean
  data?: ChartDataItem[]
  type?: ChartType
  title?: string
  reference?: string
}

const DEFAULT_PALETTE = [
  '#10B981', // Emerald
  '#06B6D4', // Cyan
  '#3B82F6', // Blue
  '#6366F1', // Indigo
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#F59E0B', // Amber
  '#14B8A6', // Teal
]

/**
 * 📊 ForgeChart: Linh kiện Biểu đồ trực quan hóa dữ liệu hiệu năng cao (TSK-4.3)
 * Hỗ trợ 3 chế độ: Cột (Bar), Đường (Line), Tròn rỗng (Donut).
 * 100% SVG thuần, 0 dependency ngoài, tự động tương thích responsive và Dark mode ERP.
 */
export const ForgeChart: React.FC<ForgeChartProps> = ({
  node,
  isEditing = false,
  data: propsData,
  type: propsType,
  title: propsTitle,
  reference: propsReference,
}) => {
  const props = node.props || {}
  const initialType: ChartType = (propsType || props.chartType || props.type || 'bar') as ChartType
  const [currentType, setCurrentType] = useState<ChartType>(initialType)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const reference = (propsReference || props.reference || props.refName || node.dataBinding?.refName || '') as string
  const datasetFromEngine = useDataEngine((s) => (reference ? s.datasets[reference] : undefined))

  // Chuẩn hóa danh sách dữ liệu hiển thị trên biểu đồ
  const chartData: ChartDataItem[] = useMemo(() => {
    let source: any[] = []
    if (propsData && Array.isArray(propsData) && propsData.length > 0) source = propsData
    else if (props.data && Array.isArray(props.data) && props.data.length > 0) source = props.data
    else if (datasetFromEngine && Array.isArray(datasetFromEngine) && datasetFromEngine.length > 0) source = datasetFromEngine
    else {
      // Dữ liệu mẫu chuẩn sản lượng container / hàng hóa qua các cảng
      source = [
        { label: 'Cát Lái (CTL)', value: 4850 },
        { label: 'Cái Mép (TCIT)', value: 3620 },
        { label: 'Hải Phòng (HPH)', value: 2980 },
        { label: 'Lạch Huyện (HICT)', value: 2450 },
        { label: 'Đà Nẵng (DAN)', value: 1680 },
        { label: 'Quy Nhơn (QNH)', value: 1120 },
      ]
    }

    const labelKey = (props.labelField as string) || 'label' || 'name' || 'code'
    const valueKey = (props.valueField as string) || 'value' || 'amount' || 'total' || 'count'

    return source.map((item, idx) => {
      const label = String(item[labelKey] ?? item.label ?? item.name ?? item.code ?? `Mục ${idx + 1}`)
      const rawVal = item[valueKey] ?? item.value ?? item.amount ?? item.total ?? 0
      const value = Math.max(0, Number(rawVal) || 0)
      const color = item.color || DEFAULT_PALETTE[idx % DEFAULT_PALETTE.length]
      return { label, value, color }
    })
  }, [propsData, props.data, datasetFromEngine, props.labelField, props.valueField])

  const totalValue = useMemo(() => chartData.reduce((acc, d) => acc + d.value, 0), [chartData])
  const maxValue = useMemo(() => Math.max(...chartData.map((d) => d.value), 1), [chartData])

  const title = (propsTitle || props.title || node.props?.label || 'Biểu Đồ Thống Kê Sản Lượng') as string
  const subtitle = (props.subtitle as string) || (reference ? `Nguồn dữ liệu: ${reference}` : 'Đơn vị: TEUs')

  // ── 1. RENDER BIỂU ĐỒ CỘT (BAR CHART) ──
  const renderBarChart = () => {
    const chartHeight = 220
    const barWidth = Math.max(20, Math.min(48, Math.floor(400 / (chartData.length || 1))))

    return (
      <div className="w-full flex flex-col justify-end h-64 pt-6 pb-2 px-4">
        {/* Lưới tọa độ và các cột */}
        <div className="flex-1 flex items-end justify-between gap-3 border-b border-slate-700/80 relative">
          {/* Đường lưới ngang 50% & 100% */}
          <div className="absolute inset-x-0 top-0 border-t border-dashed border-slate-800 pointer-events-none" />
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-800 pointer-events-none" />

          {chartData.map((item, idx) => {
            const heightPercent = maxValue > 0 ? (item.value / maxValue) * 100 : 0
            const isHovered = hoveredIndex === idx
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer"
              >
                {/* Tooltip khi hover */}
                {isHovered && (
                  <div className="absolute -top-12 z-20 bg-slate-900 border border-slate-700 text-slate-100 text-[11px] px-2.5 py-1 rounded shadow-xl whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95">
                    <p className="font-bold text-emerald-400">{item.label}</p>
                    <p className="font-mono">
                      {item.value.toLocaleString('en-US')} ({((item.value / (totalValue || 1)) * 100).toFixed(1)}%)
                    </p>
                  </div>
                )}

                {/* Giá trị trên đầu cột */}
                <span className={`text-[10px] font-mono mb-1 transition-all ${isHovered ? 'text-emerald-300 font-bold -translate-y-0.5' : 'text-slate-400'}`}>
                  {item.value > 1000 ? `${(item.value / 1000).toFixed(1)}k` : item.value}
                </span>

                {/* Thân cột */}
                <div
                  style={{
                    height: `${Math.max(4, heightPercent)}%`,
                    backgroundColor: item.color,
                    maxWidth: `${barWidth}px`,
                  }}
                  className={`w-full rounded-t-md transition-all duration-300 shadow-md ${
                    isHovered ? 'brightness-125 ring-2 ring-white/40 shadow-lg scale-x-105' : 'hover:brightness-110'
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* Trục hoành (Labels bên dưới) */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {chartData.map((item, idx) => (
            <div key={idx} className="flex-1 text-center truncate" title={item.label}>
              <span className={`text-[11px] truncate block ${hoveredIndex === idx ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── 2. RENDER BIỂU ĐỒ ĐƯỜNG (LINE CHART SVG) ──
  const renderLineChart = () => {
    const width = 600
    const height = 200
    const paddingX = 40
    const paddingY = 25

    const n = chartData.length
    const points = chartData.map((item, idx) => {
      const x = n > 1 ? paddingX + (idx / (n - 1)) * (width - 2 * paddingX) : width / 2
      const y = height - paddingY - (maxValue > 0 ? (item.value / maxValue) * (height - 2 * paddingY) : 0)
      return { x, y, item, idx }
    })

    const pathD = points.reduce((acc, p, i) => {
      return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`
    }, '')

    const areaD = points.length > 0
      ? `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`
      : ''

    return (
      <div className="w-full flex flex-col items-center justify-center h-64 px-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48 overflow-visible">
          <defs>
            <linearGradient id={`lineGrad_${node.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Đường lưới nền */}
          <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="#334155" strokeDasharray="4 4" />
          <line x1={paddingX} y1={height / 2} x2={width - paddingX} y2={height / 2} stroke="#334155" strokeDasharray="4 4" />
          <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#475569" />

          {/* Vùng đổ màu Gradient dưới đường */}
          {areaD && <path d={areaD} fill={`url(#lineGrad_${node.id})`} />}

          {/* Đường nối các điểm */}
          {pathD && <path d={pathD} fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}

          {/* Các điểm nút (Nodes) */}
          {points.map((p) => {
            const isHovered = hoveredIndex === p.idx
            return (
              <g
                key={p.idx}
                onMouseEnter={() => setHoveredIndex(p.idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHovered ? 6 : 4}
                  fill={isHovered ? '#34D399' : '#10B981'}
                  stroke="#0F172A"
                  strokeWidth="2"
                  className="transition-all"
                />
                {isHovered && (
                  <circle cx={p.x} cy={p.y} r={10} fill="none" stroke="#34D399" strokeWidth="1.5" strokeDasharray="2 2" className="animate-spin" />
                )}
              </g>
            )
          })}
        </svg>

        {/* Labels bên dưới */}
        <div className="w-full flex items-center justify-between px-6 pt-2">
          {chartData.map((item, idx) => (
            <div key={idx} className="text-center truncate flex-1">
              <span className={`text-[10px] truncate block ${hoveredIndex === idx ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── 3. RENDER BIỂU ĐỒ DONUT / PIE (SVG DONUT) ──
  const renderDonutChart = () => {
    const size = 180
    const center = size / 2
    const radius = 70
    const holeRadius = 45

    let cumulativeAngle = 0
    const slices = chartData.map((item, idx) => {
      const sliceAngle = totalValue > 0 ? (item.value / totalValue) * 360 : 0
      const startAngle = cumulativeAngle
      const endAngle = cumulativeAngle + sliceAngle
      cumulativeAngle += sliceAngle

      const startRad = ((startAngle - 90) * Math.PI) / 180
      const endRad = ((endAngle - 90) * Math.PI) / 180

      const x1 = center + radius * Math.cos(startRad)
      const y1 = center + radius * Math.sin(startRad)
      const x2 = center + radius * Math.cos(endRad)
      const y2 = center + radius * Math.sin(endRad)

      const hx1 = center + holeRadius * Math.cos(startRad)
      const hy1 = center + holeRadius * Math.sin(startRad)
      const hx2 = center + holeRadius * Math.cos(endRad)
      const hy2 = center + holeRadius * Math.sin(endRad)

      const largeArc = sliceAngle > 180 ? 1 : 0

      const pathData =
        sliceAngle >= 359.9
          ? `M ${center} ${center - radius} A ${radius} ${radius} 0 1 1 ${center} ${center + radius} A ${radius} ${radius} 0 1 1 ${center} ${center - radius} M ${center} ${center - holeRadius} A ${holeRadius} ${holeRadius} 0 1 0 ${center} ${center + holeRadius} A ${holeRadius} ${holeRadius} 0 1 0 ${center} ${center - holeRadius}`
          : `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${hx2} ${hy2} A ${holeRadius} ${holeRadius} 0 ${largeArc} 0 ${hx1} ${hy1} Z`

      return { item, idx, pathData, percentage: ((item.value / (totalValue || 1)) * 100).toFixed(1) }
    })

    return (
      <div className="w-full flex items-center justify-around h-64 px-4 py-2">
        {/* Donut SVG */}
        <div className="relative flex items-center justify-center">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {slices.map((slice) => {
              const isHovered = hoveredIndex === slice.idx
              return (
                <path
                  key={slice.idx}
                  d={slice.pathData}
                  fill={slice.item.color}
                  onMouseEnter={() => setHoveredIndex(slice.idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`transition-all duration-200 cursor-pointer ${
                    isHovered ? 'scale-105 origin-center brightness-125 stroke-white stroke-1' : 'hover:opacity-90'
                  }`}
                />
              )
            })}
          </svg>

          {/* Nhãn tâm giữa Donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {hoveredIndex !== null && chartData[hoveredIndex] ? (
              <>
                <span className="text-[10px] text-slate-400 font-medium truncate max-w-[80px]">
                  {chartData[hoveredIndex].label}
                </span>
                <span className="text-xs font-bold font-mono text-emerald-400">
                  {((chartData[hoveredIndex].value / (totalValue || 1)) * 100).toFixed(1)}%
                </span>
              </>
            ) : (
              <>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">TỔNG</span>
                <span className="text-xs font-bold font-mono text-slate-100">
                  {totalValue > 10000 ? `${(totalValue / 1000).toFixed(0)}k` : totalValue}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Bảng chú giải (Legends) */}
        <div className="flex flex-col gap-1.5 max-h-52 overflow-y-auto pr-2">
          {chartData.map((item, idx) => {
            const isHovered = hoveredIndex === idx
            const pct = ((item.value / (totalValue || 1)) * 100).toFixed(1)
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors ${
                  isHovered ? 'bg-slate-800/80 text-white' : 'text-slate-300 hover:bg-slate-800/40'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-xs truncate max-w-[110px]">{item.label}</span>
                <span className="text-[11px] font-mono text-slate-400 ml-auto">{pct}%</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div
      className="w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden shadow-md font-sans"
      style={{
        width: node.style?.width || '100%',
        minHeight: node.style?.minHeight || '320px',
      }}
    >
      {/* ── HEADER TOOLBAR ── */}
      <div className="px-3.5 py-2.5 bg-[#0b1329] border-b border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <div>
            <h3 className="text-xs font-bold text-slate-200 tracking-wide uppercase">{title}</h3>
            <span className="text-[10px] text-slate-400 font-mono block">{subtitle}</span>
          </div>
        </div>

        {/* Nút chuyển đổi kiểu biểu đồ (Bar / Line / Donut) */}
        <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-lg p-0.5 gap-0.5">
          <button
            type="button"
            onClick={() => setCurrentType('bar')}
            title="Biểu đồ Cột (Bar Chart)"
            className={`p-1.5 rounded transition-all cursor-pointer ${
              currentType === 'bar' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentType('line')}
            title="Biểu đồ Đường (Line Chart)"
            className={`p-1.5 rounded transition-all cursor-pointer ${
              currentType === 'line' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <LineChartIcon className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentType('donut')}
            title="Biểu đồ Tròn (Donut Chart)"
            className={`p-1.5 rounded transition-all cursor-pointer ${
              currentType === 'donut' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <PieChartIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── CHART CANVAS BODY ── */}
      <div className="flex-1 flex items-center justify-center p-2">
        {chartData.length === 0 ? (
          <div className="py-12 text-center text-xs text-slate-500 italic">
            Không có dữ liệu số liệu để vẽ biểu đồ
          </div>
        ) : currentType === 'bar' ? (
          renderBarChart()
        ) : currentType === 'line' ? (
          renderLineChart()
        ) : (
          renderDonutChart()
        )}
      </div>

      {/* ── STATUS FOOTER ── */}
      <div className="px-3.5 py-1.5 bg-[#0b1329] border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between font-mono">
        <span>Tổng cộng: <strong className="text-slate-200">{totalValue.toLocaleString('en-US')}</strong></span>
        <span>{chartData.length} danh mục</span>
      </div>
    </div>
  )
}
