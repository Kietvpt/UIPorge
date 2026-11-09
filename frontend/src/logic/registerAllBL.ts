import { registerBL } from '@/core/engines/eventRunner'
import * as customerBL from './customerManagement.bl'
import * as dashboardBL from './dashboard.bl'
import * as fclImportBL from './fclImport.bl'
import * as transactionListBL from './transactionList.bl'
import * as transactionDetailBL from './transactionDetail.bl'

/**
 * 📦 Khởi tạo và cắm toàn bộ các file Business Logic mẫu (Logistics / ERP Test Bench)
 * vào Core Engine của UIForge Framework.
 */
export function initializeSampleBusinessLogic() {
  registerBL('customerManagement.bl.ts', customerBL)
  registerBL('dashboard.bl.ts', dashboardBL)
  registerBL('fclImport.bl.ts', fclImportBL)
  registerBL('transactionList.bl.ts', transactionListBL)
  registerBL('transactionDetail.bl.ts', transactionDetailBL)
  console.log('[UIForge Sample Host] Đã đăng ký 5 module BL mẫu vào Core Framework EventRunner.')
}

