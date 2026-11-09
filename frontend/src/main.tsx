import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { initializeSampleBusinessLogic } from './logic/registerAllBL'

// Đăng ký toàn bộ các module nghiệp vụ mẫu vào UIForge Core
initializeSampleBusinessLogic()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
