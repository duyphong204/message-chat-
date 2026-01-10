import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App />
        <Toaster position='bottom-right' richColors />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
