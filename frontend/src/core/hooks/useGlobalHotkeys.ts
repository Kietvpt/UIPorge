/**
 * =========================================================================
 * ⌨️ useGlobalHotkeys - ERP Enterprise Global Keyboard Shortcut Manager
 * =========================================================================
 * Kế thừa cơ chế quản lý phím tắt HotKey từ TabEditor.cs & HotKeyModel.cs trong Core C#.
 * Cung cấp trải nghiệm nhập liệu chuyên nghiệp không cần dùng chuột cho người dùng ERP.
 * 
 * Các tổ hợp phím toàn cục chuẩn:
 * - Alt + ` (Backquote): Chuyển đổi nhanh tuần tự giữa các thẻ tab đang mở (WorkspaceTabBar).
 * - Esc: Đóng cửa sổ Popup Modal đang mở trên cùng.
 * - F9 hoặc Ctrl + S: Kích hoạt lưu dữ liệu trên màn hình hiện tại (Gọi onSave trong BL hoặc lưu giao diện).
 * - F8: Kích hoạt hành động Phê duyệt / Xác nhận (Gọi onApprove / onConfirm trong BL).
 * - Ctrl + Shift + F: Nhảy nhanh (Focus) vào ô tìm kiếm hoặc bộ lọc trên màn hình.
 */

import { useEffect } from 'react'
import { useNavigationEngine } from '../engines/navigationEngine'
import { useEditorStore } from '@/store/editorStore'
import { invokeBLLifecycle } from '../engines/eventRunner'
import { useDataEngine } from '../engines/dataEngine'

export interface GlobalHotkeysOptions {
  /** Hàm callback khi bấm lưu giao diện ở chế độ Dev */
  onSaveLayout?: () => void
  /** Trạng thái xem trước (Preview Mode) */
  isPreview?: boolean
  /** Quyền quản trị / Dev */
  canEdit?: boolean
}

export function useGlobalHotkeys(options: GlobalHotkeysOptions = {}) {
  const { onSaveLayout, isPreview = false, canEdit = true } = options

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      // ── 1. Alt + ` (Backquote): Chuyển đổi qua lại giữa các Tab đang mở ──
      if (e.altKey && (e.code === 'Backquote' || e.key === '`')) {
        e.preventDefault()
        e.stopPropagation()

        const navEngine = useNavigationEngine.getState()
        const tabs = navEngine.openTabs
        if (tabs.length <= 1) return

        const activeId = navEngine.activeTabId
        const currentIndex = tabs.findIndex((t) => t.id === activeId)
        const nextIndex = (currentIndex + 1) % tabs.length
        const nextTab = tabs[nextIndex]

        if (nextTab) {
          navEngine.setActiveTab(nextTab.id)
          useEditorStore.getState().setActiveFeature(nextTab.featureId, nextTab.params?.id ?? null)
        }
        return
      }

      // ── 2. Esc: Đóng Popup Modal đang mở trên cùng ──
      if (e.key === 'Escape') {
        const navEngine = useNavigationEngine.getState()
        if (navEngine.activePopup) {
          e.preventDefault()
          e.stopPropagation()
          navEngine.closePopup()
          return
        }
      }

      // ── 3. F9 hoặc Ctrl + S: Lưu bản ghi hoặc Lưu cấu trúc giao diện ──
      if (e.key === 'F9' || ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S'))) {
        e.preventDefault()
        e.stopPropagation()

        // Nếu đang ở chế độ thiết kế (Design mode của Dev) -> Lưu giao diện
        if (canEdit && !isPreview && onSaveLayout) {
          onSaveLayout()
          return
        }

        // Nếu đang ở chế độ Runtime / Preview -> Gọi onSave của file Business Logic (*.bl.ts)
        const editorStore = useEditorStore.getState()
        const activeFeature = editorStore.features.find((f) => f.id === editorStore.activeFeatureId)
        const scriptFile = activeFeature?.scriptFile

        if (scriptFile) {
          const dataEngine = useDataEngine.getState()
          const formRecord = dataEngine.getFormRecord(activeFeature.id) || dataEngine.getFormRecord('default')
          
          try {
            await invokeBLLifecycle(scriptFile, 'onSave', {
              record: formRecord,
              featureId: activeFeature.id,
              trigger: 'hotkey_F9',
            })
          } catch (err) {
            console.error('[GlobalHotkeys] Lỗi khi kích hoạt onSave:', err)
          }
        }
        return
      }

      // ── 4. F8: Kích hoạt Phê duyệt / Duyệt chứng từ (onApprove) ──
      if (e.key === 'F8') {
        e.preventDefault()
        e.stopPropagation()

        const editorStore = useEditorStore.getState()
        const activeFeature = editorStore.features.find((f) => f.id === editorStore.activeFeatureId)
        const scriptFile = activeFeature?.scriptFile

        if (scriptFile) {
          try {
            await invokeBLLifecycle(scriptFile, 'onApprove', {
              featureId: activeFeature.id,
              trigger: 'hotkey_F8',
            })
          } catch (err) {
            console.error('[GlobalHotkeys] Lỗi khi kích hoạt onApprove:', err)
          }
        }
        return
      }

      // ── 5. Ctrl + Shift + F: Focus nhanh vào ô tìm kiếm trên màn hình ──
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'f' || e.key === 'F')) {
        e.preventDefault()
        e.stopPropagation()

        const searchInput = document.querySelector<HTMLInputElement>(
          'input[type="search"], input[placeholder*="Tìm" i], input[placeholder*="search" i], input[name*="search" i], .uiforge-search-input'
        )
        if (searchInput) {
          searchInput.focus()
          searchInput.select()
        }
        return
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onSaveLayout, isPreview, canEdit])
}

