import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useEditorStore } from '@/store/editorStore'

export type FeatureDisplayMode = 'Tab' | 'Popup'

export interface ActiveTab {
  id: string
  featureId: string
  title: string
  icon?: string
  params?: Record<string, any>
  isDirty?: boolean
}

export interface ActivePopup {
  featureId: string
  title: string
  params?: Record<string, any>
  width?: string
  onClose?: (result?: any) => void
}

interface NavigationState {
  // Danh sách các tab đang mở trên thanh tiêu đề (FeatureTab)
  openTabs: ActiveTab[]
  activeTabId: string | null

  // Cửa sổ Popup đang mở đè lên (FeaturePopup)
  activePopup: ActivePopup | null

  // Actions
  openFeature: (
    featureId: string,
    params?: Record<string, any>,
    mode?: FeatureDisplayMode,
    customTitle?: string
  ) => void
  closeTab: (tabId: string) => void
  setActiveTab: (tabId: string) => void
  closePopup: (result?: any) => void
}

export const useNavigationEngine = create<NavigationState>()(
  devtools((set, get) => ({
    openTabs: [
      {
        id: 'tab_trans_list',
        featureId: 'transaction_list',
        title: 'Danh Sách Lô Hàng',
      },
    ],
    activeTabId: 'tab_trans_list',
    activePopup: null,

    // 🚀 Mở một Feature theo chuẩn FeatureTab hoặc FeaturePopup (chỉ đạo của Master)
    openFeature: (
      featureId: string,
      params: Record<string, any> = {},
      mode: FeatureDisplayMode = 'Tab',
      customTitle?: string
    ) => {
      const title = customTitle || (params.id ? `${featureId} - #${params.id}` : featureId)

      if (mode === 'Popup') {
        set({
          activePopup: {
            featureId,
            title,
            params,
          },
        })
      } else {
        // Mở dạng Tab đa nhiệm
        const tabs = get().openTabs
        const existingTab = tabs.find((t) => t.featureId === featureId && t.params?.id === params?.id)

        if (existingTab) {
          // Nếu tab này đã mở rồi thì chỉ cần active
          set({ activeTabId: existingTab.id })
        } else {
          // Tạo tab mới
          const newTabId = `tab_${featureId}_${params.id || Date.now()}`
          const newTab: ActiveTab = {
            id: newTabId,
            featureId,
            title,
            params,
          }
          set({
            openTabs: [...tabs, newTab],
            activeTabId: newTabId,
          })
        }

        // Tự động đồng bộ Active Feature trong EditorStore
        useEditorStore.getState().setActiveFeature(featureId)
      }
    },

    // Đóng tab
    closeTab: (tabId: string) => {
      const tabs = get().openTabs
      if (tabs.length <= 1) return // Không đóng tab cuối cùng
      const nextTabs = tabs.filter((t) => t.id !== tabId)
      const currentActive = get().activeTabId
      let nextActive = currentActive

      if (currentActive === tabId) {
        nextActive = nextTabs[nextTabs.length - 1].id
      }

      set({
        openTabs: nextTabs,
        activeTabId: nextActive,
      })
    },

    // Chọn tab active
    setActiveTab: (tabId: string) => {
      set({ activeTabId: tabId })
    },

    // Đóng popup
    closePopup: (result?: any) => {
      const currentPopup = get().activePopup
      if (currentPopup?.onClose) {
        currentPopup.onClose(result)
      }
      set({ activePopup: null })
    },
  }))
)

/**
 * ⚡ Mở một Feature dưới dạng Popup Modal (Tương đương this.OpenPopup trong Core C#)
 * Tham khảo: ComponentGroupDetailBL.cs (TMS.UI.Business.MenuBL)
 */
export function openPopup(featureName: string, params: Record<string, any> = {}, title?: string) {
  useNavigationEngine.getState().openFeature(featureName, params, 'Popup', title || featureName)
}

/**
 * ⚡ Mở một Feature dưới dạng Tab đa nhiệm (Tương đương this.OpenTab trong Core C#)
 * Tham khảo: UserListBL.cs (TMS.UI.Business.User)
 */
export function openTab(featureName: string, params: Record<string, any> = {}, title?: string) {
  useNavigationEngine.getState().openFeature(featureName, params, 'Tab', title || featureName)
}

/**
 * ⚡ Đóng Popup hiện tại
 */
export function closePopup(result?: any) {
  useNavigationEngine.getState().closePopup(result)
}

/**
 * ⚡ Đóng Tab hiện tại
 */
export function closeTab(tabId: string) {
  useNavigationEngine.getState().closeTab(tabId)
}

