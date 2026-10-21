import { useEffect, useState } from 'react'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { useEditorStore } from '@/store/editorStore'
import { useAuthStore } from '@/store/authStore'
import { apiPageToFeature, getPages, savePage } from '@/api/pagesApi'
import { LoginScreen } from '@/auth/LoginScreen'
import { TopNav } from '@/editor/TopNav'
import { LeftNavbar } from '@/editor/LeftNavbar'
import { FeatureCanvas } from '@/editor/FeatureCanvas'
import { PropertyPanel } from '@/editor/PropertyPanel'
import { ComponentRenderer } from '@/renderer/Renderer'
import { useDragDrop, customCollisionDetection } from '@/editor/useDragDrop'
import { useResizablePanels } from '@/editor/useResizablePanels'

export function App() {
  // ── Auth state ──
  const token = useAuthStore((s) => s.token)
  const user = useAuthStore((s) => s.user)
  const branch = useAuthStore((s) => s.branch)
  const logout = useAuthStore((s) => s.logout)
  const isDev = user?.role === 'Dev'

  // ── UI state ──
  const [isPreview, setIsPreview] = useState(false)
  const [showRightPanel, setShowRightPanel] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const features = useEditorStore((s) => s.features)
  const activeFeatureId = useEditorStore((s) => s.activeFeatureId)
  const setFeatures = useEditorStore((s) => s.setFeatures)
  const setActiveFeature = useEditorStore((s) => s.setActiveFeature)

  // Người dùng thường (User) luôn ở chế độ xem, không được chỉnh sửa
  const effectivePreview = isPreview || !isDev

  // ── Drag & Drop Management ──
  // ── Resizable Left and Right Panels ──
  const { leftWidth, rightWidth, startLeftResize, startRightResize } = useResizablePanels()

  const { dragState, handleDragStart, handleDragOver, handleDragEnd, handleDragCancel } =
    useDragDrop()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // 5px threshold before dragging starts to allow normal clicks
      },
    }),
    useSensor(KeyboardSensor)
  )

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  // ── Lắng nghe sự kiện Back/Forward của trình duyệt để đổi màn hình ──
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const pageId = urlParams.get('feature') || urlParams.get('page')
      if (pageId) {
        setActiveFeature(pageId)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [setActiveFeature])

  // ── Tải danh sách pages từ server sau khi đăng nhập ──
  useEffect(() => {
    if (!token) return
    let cancelled = false
    setIsLoading(true)
    getPages()
      .then((pages) => {
        if (cancelled) return
        if (pages.length > 0) {
          setFeatures(pages.map(apiPageToFeature))
        }
      })
      .catch(() => {
        if (!cancelled) showToast('⚠ Không tải được dữ liệu từ server — đang dùng dữ liệu cục bộ.')
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  // ── Lưu giao diện lên server (chỉ Dev) ──
  const handleSave = async () => {
    if (!isDev) return
    const activeFeature = features.find((f) => f.id === activeFeatureId)
    if (!activeFeature) return

    setIsSaving(true)
    try {
      await savePage({
        id: activeFeature.id,
        name: activeFeature.name,
        route: activeFeature.route,
        icon: activeFeature.icon,
        scriptFile: activeFeature.scriptFile,
        layoutConfig: {
          ...(activeFeature.layoutConfig || { direction: 'column', gap: '16px', wrap: 'wrap' }),
          scriptFile: activeFeature.scriptFile,
        },
        components: activeFeature.components,
      })
      showToast('✓ Đã lưu cấu trúc giao diện thành công!')
    } catch {
      showToast('✕ Lưu thất bại! Kiểm tra kết nối server.')
    } finally {
      setIsSaving(false)
    }
  }

  // ── Chưa đăng nhập -> màn hình login ──
  if (!token) {
    return <LoginScreen />
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={customCollisionDetection}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-sans select-none">
        {/* ── 1. Top Navbar: Logo, Brand, Breadcrumb, Undo/Redo & Account Info ── */}
        <TopNav
          isPreview={effectivePreview}
          onTogglePreview={() => setIsPreview(!isPreview)}
          onSave={handleSave}
          isSaving={isSaving}
          showRightPanel={showRightPanel}
          onToggleRightPanel={() => setShowRightPanel(!showRightPanel)}
          canEdit={isDev}
          userName={user?.fullName || user?.username}
          userRole={user?.role}
          branch={branch ?? undefined}
          onLogout={logout}
        />

        {/* Toast Notification */}
        {toast && (
          <div className="fixed top-16 right-6 z-50 bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl shadow-emerald-950/40 animate-in fade-in slide-in-from-top-2 duration-200">
            {toast}
          </div>
        )}

        {/* ── 2. Main Workspace Layout ── */}
        <div className="flex-1 flex overflow-hidden">
          {/* Thanh Navbar bên trái: Danh mục màn hình (Chuột phải để thêm) */}
          <LeftNavbar width={leftWidth} />

          {/* Thanh kéo co giãn bên trái (Left Splitter) */}
          <div
            onMouseDown={startLeftResize}
            className="w-1.5 hover:w-2 bg-transparent hover:bg-blue-500/80 active:bg-blue-500 cursor-col-resize transition-all duration-75 relative group z-20 shrink-0 select-none flex items-center justify-center"
            title="Kéo sang trái/phải để điều chỉnh độ rộng menu"
          >
            <div className="w-0.5 h-8 bg-slate-700 group-hover:bg-white rounded-full transition-colors" />
          </div>

          {/* Màn hình làm việc của Feature */}
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">
              Đang tải dữ liệu từ server...
            </div>
          ) : (
            <FeatureCanvas
              isEditing={!effectivePreview}
              activeId={dragState.activeId}
              overId={dragState.overId}
            />
          )}

          {/* Thanh kéo co giãn bên phải (Right Splitter) */}
          {!effectivePreview && showRightPanel && (
            <div
              onMouseDown={startRightResize}
              className="w-1.5 hover:w-2 bg-transparent hover:bg-blue-500/80 active:bg-blue-500 cursor-col-resize transition-all duration-75 relative group z-20 shrink-0 select-none flex items-center justify-center"
              title="Kéo sang trái/phải để điều chỉnh độ rộng thanh thuộc tính"
            >
              <div className="w-0.5 h-8 bg-slate-700 group-hover:bg-white rounded-full transition-colors" />
            </div>
          )}

          {/* Thanh quản lý bên phải: Quản lý kích thước, flex/grid, css, sự kiện */}
          {!effectivePreview && showRightPanel && <PropertyPanel width={rightWidth} />}
        </div>

        {/* ── 3. Drag Overlay (Floating Ghost Preview) ── */}
        <DragOverlay dropAnimation={null}>
          {dragState.activeData?.node && (
            <div className="opacity-90 pointer-events-none shadow-2xl shadow-blue-500/40 ring-2 ring-blue-500 rounded-xl overflow-hidden bg-slate-900/90 max-w-sm">
              <ComponentRenderer
                node={dragState.activeData.node}
                isEditing={false}
                onContextMenu={() => {}}
              />
            </div>
          )}
        </DragOverlay>
      </div>
    </DndContext>
  )
}

export default App
