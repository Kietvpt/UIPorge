import React, { useState, useRef, useId } from 'react'
import {
  Upload,
  File,
  FileText,
  Image as ImageIcon,
  Trash2,
  Eye,
  Download,
  Plus,
  X,
  Paperclip,
  CheckCircle2,
} from 'lucide-react'
import type { ComponentNode } from '@/types/schema'
import { useDataEngine } from '@/core/engines/dataEngine'

export interface AttachedFile {
  id: string
  fileName: string
  fileSize: number // in bytes
  fileType: string
  uploadedDate: string
  uploadedBy: string
  dataUrl?: string
}

interface ForgeFileUploadGridProps {
  node?: ComponentNode
  isEditing?: boolean
  label?: string
  files?: AttachedFile[]
  onFilesChange?: (files: AttachedFile[]) => void
  readOnly?: boolean
  maxSizeMB?: number
  allowedExtensions?: string[]
}

export const ForgeFileUploadGrid: React.FC<ForgeFileUploadGridProps> = ({
  node,
  isEditing,
  label,
  files: propsFiles,
  onFilesChange,
  readOnly = false,
  maxSizeMB = 25,
  allowedExtensions,
}) => {
  const fileInputId = useId()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null)
  const [previewFile, setPreviewFile] = useState<AttachedFile | null>(null)

  // Internal state if not controlled from props
  const [internalFiles, setInternalFiles] = useState<AttachedFile[]>([
    {
      id: 'file-demo-1',
      fileName: 'Chung_Tu_Goc_2026.pdf',
      fileSize: 1024 * 350,
      fileType: 'application/pdf',
      uploadedDate: new Date().toLocaleDateString('vi-VN'),
      uploadedBy: 'Admin',
    },
    {
      id: 'file-demo-2',
      fileName: 'Bien_Ban_Giao_Nhan.png',
      fileSize: 1024 * 820,
      fileType: 'image/png',
      uploadedDate: new Date().toLocaleDateString('vi-VN'),
      uploadedBy: 'Admin',
    },
  ])

  const effectiveFiles = propsFiles ?? internalFiles

  const updateFiles = (nextFiles: AttachedFile[]) => {
    if (!propsFiles) {
      setInternalFiles(nextFiles)
    }
    onFilesChange?.(nextFiles)
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) {
      return <ImageIcon className="w-4 h-4 text-emerald-400" />
    }
    if (fileType.includes('pdf')) {
      return <FileText className="w-4 h-4 text-red-400" />
    }
    return <File className="w-4 h-4 text-blue-400" />
  }

  const handleProcessUploadedFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return

    const newAttachments: AttachedFile[] = []
    const nowStr = new Date().toLocaleDateString('vi-VN')

    Array.from(fileList).forEach((file) => {
      // Validate file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`Tệp "${file.name}" vượt quá kích thước cho phép (${maxSizeMB}MB)`)
        return
      }

      const reader = new FileReader()
      const newFileId = `file-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`

      reader.onload = () => {
        const item: AttachedFile = {
          id: newFileId,
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type || 'application/octet-stream',
          uploadedDate: nowStr,
          uploadedBy: 'User',
          dataUrl: reader.result as string,
        }
        updateFiles([...effectiveFiles, item])
      }

      reader.readAsDataURL(file)
    })
  }

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (confirm('Bạn có chắc muốn xóa tệp đính kèm này?')) {
      const next = effectiveFiles.filter((f) => f.id !== id)
      updateFiles(next)
      if (selectedFileId === id) setSelectedFileId(null)
    }
  }

  const handleDownload = (file: AttachedFile, e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!file.dataUrl) {
      alert(`Đang tải file mẫu: ${file.fileName}`)
      return
    }
    const a = document.createElement('a')
    a.href = file.dataUrl
    a.download = file.fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const displayTitle = label || (node?.props?.label as string) || 'Danh Sách Tệp Đính Kèm (FileUploadGrid)'

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg select-none flex flex-col">
      {/* ── HEADER TOOLBAR ── */}
      <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Paperclip className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            {displayTitle}
          </span>
          <span className="text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded-full">
            {effectiveFiles.length} tệp
          </span>
        </div>

        {!readOnly && (
          <div className="flex items-center gap-2">
            <input
              id={fileInputId}
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => handleProcessUploadedFiles(e.target.files)}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold shadow transition-all active:scale-95"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Đính kèm tệp</span>
            </button>
          </div>
        )}
      </div>

      {/* ── DRAG & DROP ZONE (IF EMPTY OR DRAGGING) ── */}
      {!readOnly && (
        <div
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setIsDragging(false)
            handleProcessUploadedFiles(e.dataTransfer.files)
          }}
          className={`p-3 border-b transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer ${
            isDragging
              ? 'bg-blue-900/30 border-blue-500 text-blue-300'
              : 'bg-slate-950/30 border-dashed border-slate-800 text-slate-500 hover:text-slate-300'
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-4 h-4 opacity-60" />
          <span>Kéo & thả tệp vào đây hoặc nhấn để chọn tệp (Tối đa {maxSizeMB}MB)</span>
        </div>
      )}

      {/* ── ATTACHMENTS TABLE ── */}
      <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-950/60 border-b border-slate-800 text-slate-400 text-[11px] font-semibold">
              <th className="py-2.5 px-3 w-10 text-center">STT</th>
              <th className="py-2.5 px-3">Tên Tệp Tin</th>
              <th className="py-2.5 px-3 w-28">Kích Thước</th>
              <th className="py-2.5 px-3 w-28">Người Tải Lên</th>
              <th className="py-2.5 px-3 w-28">Ngày Tải</th>
              <th className="py-2.5 px-3 w-24 text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {effectiveFiles.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-500 italic">
                  Chưa có tệp tin nào được đính kèm.
                </td>
              </tr>
            ) : (
              effectiveFiles.map((file, idx) => {
                const isSelected = selectedFileId === file.id
                return (
                  <tr
                    key={file.id}
                    onClick={() => setSelectedFileId(file.id)}
                    className={`transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-200'
                        : 'hover:bg-slate-800/40 text-slate-300'
                    }`}
                  >
                    <td className="py-2 px-3 text-center text-slate-500 font-mono text-[10px]">
                      {idx + 1}
                    </td>
                    <td className="py-2 px-3 font-medium flex items-center gap-2">
                      {getFileIcon(file.fileType)}
                      <span className="truncate max-w-[280px]" title={file.fileName}>
                        {file.fileName}
                      </span>
                    </td>
                    <td className="py-2 px-3 font-mono text-[11px] text-slate-400">
                      {formatFileSize(file.fileSize)}
                    </td>
                    <td className="py-2 px-3 text-slate-400">{file.uploadedBy}</td>
                    <td className="py-2 px-3 font-mono text-[11px] text-slate-400">
                      {file.uploadedDate}
                    </td>
                    <td className="py-2 px-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setPreviewFile(file)
                          }}
                          className="p-1 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 rounded transition-colors"
                          title="Xem trước"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleDownload(file, e)}
                          className="p-1 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 rounded transition-colors"
                          title="Tải xuống"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                        {!readOnly && (
                          <button
                            type="button"
                            onClick={(e) => handleDelete(file.id, e)}
                            className="p-1 hover:bg-red-900/40 text-slate-400 hover:text-red-400 rounded transition-colors"
                            title="Xóa tệp"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ── LIGHTBOX PREVIEW MODAL ── */}
      {previewFile && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewFile(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getFileIcon(previewFile.fileType)}
                <span className="font-semibold text-sm text-slate-100">{previewFile.fileName}</span>
                <span className="text-xs text-slate-500 font-mono">
                  ({formatFileSize(previewFile.fileSize)})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => handleDownload(previewFile, e)}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải về</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewFile(null)}
                  className="p-1 hover:bg-slate-800 text-slate-400 hover:text-slate-100 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/50 min-h-[350px]">
              {previewFile.fileType.startsWith('image/') && previewFile.dataUrl ? (
                <img
                  src={previewFile.dataUrl}
                  alt={previewFile.fileName}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800"
                />
              ) : previewFile.fileType.includes('pdf') && previewFile.dataUrl ? (
                <iframe
                  src={previewFile.dataUrl}
                  title={previewFile.fileName}
                  className="w-full h-[65vh] rounded border border-slate-800"
                />
              ) : (
                <div className="text-center space-y-3 py-12">
                  <div className="w-16 h-16 rounded-full bg-slate-800/80 mx-auto flex items-center justify-center">
                    {getFileIcon(previewFile.fileType)}
                  </div>
                  <div className="text-sm font-medium text-slate-300">{previewFile.fileName}</div>
                  <p className="text-xs text-slate-500 max-w-sm">
                    Định dạng ({previewFile.fileType}) không hỗ trợ xem trực tiếp trong trình duyệt.
                    Vui lòng tải tệp về để mở.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => handleDownload(previewFile, e)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Tải về tệp tin</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

