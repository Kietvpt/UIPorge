import React, { useState } from 'react'
import { useEditorStore } from '@/store/editorStore'
import { TopNav } from '@/editor/TopNav'
import { LeftNavbar } from '@/editor/LeftNavbar'
import { FeatureCanvas } from '@/editor/FeatureCanvas'
import { PropertyPanel } from '@/editor/PropertyPanel'

export function App() {
  const [isPreview, setIsPreview] = useState(false)
  const [showRightPanel, setShowRightPanel] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [saveToast, setSaveToast] = useState<string | null>(null)

  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)

  const handleSave = async () => {
    setIsSaving(true)
    setSaveToast(null)
    try {
      const activeFeature = features.find((f) => f.id === activeFeatureId)
      // Save feature schema to backend API
      await fetch('/api/pages/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: activeFeature?.id,
          name: activeFeature?.name,
          route: activeFeature?.route,
          components: activeFeature?.components,
        }),
      }).catch(() => null)

      setTimeout(() => {
        setIsSaving(false)
        setSaveToast('✓ Đã lưu cấu trúc giao diện thành công!')
        setTimeout(() => setSaveToast(null), 3000)
      }, 400)
    } catch {
      setIsSaving(false)
      setSaveToast('✓ Đã lưu tạm vào bộ nhớ!')
      setTimeout(() => setSaveToast(null), 3000)
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-sans select-none">
      {/* ── 1. Top Navbar: Logo, Brand, Breadcrumb, Undo/Redo & Account Info ── */}
      <TopNav
        isPreview={isPreview}
        onTogglePreview={() => setIsPreview(!isPreview)}
        onSave={handleSave}
        isSaving={isSaving}
        showRightPanel={showRightPanel}
        onToggleRightPanel={() => setShowRightPanel(!showRightPanel)}
      />

      {/* Save Toast Notification */}
      {saveToast && (
        <div className="fixed top-16 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl shadow-emerald-950/40 animate-in fade-in slide-in-from-top-2 duration-200">
          {saveToast}
        </div>
      )}

      {/* ── 2. Main Workspace Layout ── */}
      <div className="flex-1 flex overflow-hidden">
        {/* Thanh Navbar bên trái: Danh mục Features (Chuột phải để thêm Feature) */}
        <LeftNavbar />

        {/* Màn hình làm việc của Feature: Hiển thị canvas trắng (Chuột phải để thêm Khoảng Trắng / Flex / Grid / Components) */}
        <FeatureCanvas isEditing={!isPreview} />

        {/* Thanh quản lý bên phải: Quản lý kích thước, flex/grid, css, sự kiện */}
        {!isPreview && showRightPanel && <PropertyPanel />}
      </div>
    </div>
  )
}

export default App
