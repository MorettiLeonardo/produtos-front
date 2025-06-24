import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import PagesRoutes from './routes/PageRoutes.tsx'

import './index.css'
import Header from './components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <PagesRoutes />
    </BrowserRouter>
  </StrictMode>,
)
