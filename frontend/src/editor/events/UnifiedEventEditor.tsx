import React, { useState } from 'react'
import {
  Plus,
  Trash2,
  Play,
  FileCode,
  PlusCircle,
  Zap,
  Check,
} from 'lucide-react'
import type { ComponentEvent } from '@/types/schema'
import { getFunctionsForBlFile, addFunctionToBlFile } from '@/core/engines/blRegistry'
import { executeSingleEvent } from '@/core/engines/eventRunner'

export interface UnifiedEventEditorProps {
  events: ComponentEvent[]
  onChange: (events: ComponentEvent[]) => void
  scriptFile?: string
  componentName?: string
  componentId?: string
  contextExtra?: Record<string, any>
  compact?: boolean
  availableTriggers?: { value: string; label: string }[]
}

const DEFAULT_TRIGGERS = [
  { value: 'click', label: 'Bấm chuột / Nút (click)' },
  { value: 'dblclick', label: 'Nhấp đúp chuột (dblclick)' },
  { value: 'actionClick', label: 'Hành động ô (actionClick)' },
  { value: 'change', label: 'Thay đổi giá trị (change)' },
  { value: 'focus', label: 'Khi chọn ô (focus)' },
  { value: 'blur', label: 'Khi rời ô (blur)' },
]

export const UnifiedEventEditor: React.FC<UnifiedEventEditorProps> = ({
  events = [],
  onChange,
  scriptFile = 'transactionList.bl.ts',
  componentName = 'Component',
  componentId,
  contextExtra,
  compact = false,
  availableTriggers = DEFAULT_TRIGGERS,
}) => {
  const [newBlFnInput, setNewBlFnInput] = useState('')
  const [, setBlFnVer] = useState(0)

  const blFile = scriptFile || 'transactionList.bl.ts'
  const availableFns = getFunctionsForBlFile(blFile)

  const handleAddEvent = () => {
    const defaultFn = availableFns[0] || 'openTransactionDetail'
    const newEvent: ComponentEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      trigger: availableTriggers[0]?.value || 'click',
      handlerName: defaultFn,
      action: defaultFn,
    }
    onChange([...events, newEvent])
  }

  const handleUpdateEvent = (idx: number, patch: Partial<ComponentEvent>) => {
    const next = events.map((item, i) => {
      if (i !== idx) return item
      const updated = { ...item, ...patch }
      if (patch.handlerName && !patch.action) {
        updated.action = patch.handlerName
      }
      return updated
    })
    onChange(next)
  }

  const handleRemoveEvent = (idx: number) => {
    const next = events.filter((_, i) => i !== idx)
    onChange(next)
  }

  const handleAddNewFunctionToBl = () => {
    if (!newBlFnInput.trim()) return
    addFunctionToBlFile(blFile, newBlFnInput.trim())
    setNewBlFnInput('')
    setBlFnVer((v) => v + 1)
  }

  return (
    <div className="space-y-4 text-xs">
      {/* ── HEADER: DANH SÁCH SỰ KIỆN & NÚT THÊM ── */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Danh Sách Sự Kiện ({events.length})</span>
          </h3>
          <p className="text-[10px] text-slate-400">
            File BL:{' '}
            <span className="font-mono text-emerald-400 font-semibold">{blFile}</span>
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddEvent}
          className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-md shadow-blue-600/20 active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+ Thêm Sự Kiện</span>
        </button>
      </div>

      {/* ── KHAI BÁO HÀM MỚI TRONG FILE BL ── */}
      <div className="p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
          <FileCode className="w-3 h-3 text-cyan-400" />
          <span>Khai Báo Hàm Mới Trong {blFile}</span>
        </label>
        <div className="flex items-center gap-1.5">
          <input
            type="text"
            value={newBlFnInput}
            onChange={(e) => setNewBlFnInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAddNewFunctionToBl()
              }
            }}
            placeholder="ví dụ: openTransactionDetail, checkGW..."
            className="flex-1 px-2.5 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 font-mono text-xs focus:outline-none focus:border-cyan-500"
          />
          <button
            type="button"
            onClick={handleAddNewFunctionToBl}
            className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Lưu Hàm</span>
          </button>
        </div>
      </div>

      {/* ── DANH SÁCH CÁC SỰ KIỆN ĐÃ GẮN ── */}
      {events.length > 0 ? (
        <div className="space-y-3">
          {events.map((ev, idx) => {
            const hasFn = availableFns.includes(ev.handlerName || '')
            return (
              <div
                key={ev.id || idx}
                className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5 shadow-sm"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      Sự Kiện #{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono">
                      {ev.trigger}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveEvent(idx)}
                    className="text-slate-500 hover:text-red-400 p-1 rounded transition-colors"
                    title="Xóa sự kiện này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className={compact ? 'space-y-2' : 'grid grid-cols-2 gap-2'}>
                  <div>
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Loại Trigger
                    </label>
                    <select
                      value={ev.trigger || 'click'}
                      onChange={(e) => handleUpdateEvent(idx, { trigger: e.target.value })}
                      className="w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      {availableTriggers.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Hàm Xử Lý (BL Function)
                    </label>
                    <select
                      value={ev.handlerName || availableFns[0] || ''}
                      onChange={(e) => {
                        const fn = e.target.value
                        handleUpdateEvent(idx, { handlerName: fn, action: fn })
                      }}
                      className="w-full px-2 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-cyan-300 font-mono text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      {availableFns.map((fn) => (
                        <option key={fn} value={fn}>
                          {fn}()
                        </option>
                      ))}
                      {!hasFn && ev.handlerName && (
                        <option value={ev.handlerName}>{ev.handlerName}() [Tùy chỉnh]</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* ── NÚT TEST RUNNER: CHẠY THỬ HÀM BL NGAY LẬP TỨC ── */}
                <button
                  type="button"
                  onClick={() => {
                    executeSingleEvent(
                      ev,
                      componentName,
                      blFile,
                      {
                        componentId,
                        trigger: ev.trigger,
                        ...contextExtra,
                      }
                    )
                  }}
                  className="w-full mt-2 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-emerald-300 active:scale-[0.99]"
                  title="Bấm để kích hoạt và chạy hàm BL này ngay lập tức"
                >
                  <Play className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>▶ Chạy Thử Sự Kiện Này</span>
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="p-6 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 space-y-1.5">
          <Zap className="w-6 h-6 text-slate-600 mx-auto mb-1 stroke-1" />
          <p className="text-xs font-medium text-slate-400">
            {componentName} chưa gắn sự kiện nào.
          </p>
          <p className="text-[11px] text-slate-600 max-w-xs mx-auto">
            Bấm nút <strong className="text-slate-400">"+ Thêm Sự Kiện"</strong> ở trên để liên kết sự kiện (click, dblclick, change...) với hàm trong file <span className="font-mono text-emerald-400">{blFile}</span>.
          </p>
        </div>
      )}
    </div>
  )
}

