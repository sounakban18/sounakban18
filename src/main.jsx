import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { getInitialTheme } from './theme-context'

const initialTheme = getInitialTheme()
document.documentElement.dataset.theme = initialTheme
document.documentElement.style.colorScheme = initialTheme

// Low-end devices (or Data Saver) get "lite" mode: glass without live blur and
// no ambient looping animation. Safari reports no deviceMemory, so it defaults high.
const memory = navigator.deviceMemory ?? 8
const cores = navigator.hardwareConcurrency ?? 8
if (navigator.connection?.saveData || memory <= 2 || cores <= 2 || (memory <= 4 && cores <= 4)) {
  document.documentElement.classList.add('lite')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
