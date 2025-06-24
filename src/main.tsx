import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import PagesRoutes from './routes/PageRoutes.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PagesRoutes />
    </BrowserRouter>
  </StrictMode>,
)
