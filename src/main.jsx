import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { getInitialTheme } from './theme-context'

const initialTheme = getInitialTheme()
document.documentElement.dataset.theme = initialTheme
document.documentElement.style.colorScheme = initialTheme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
