import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkshopProvider } from './components/Context/WorkshopContext'


createRoot(document.getElementById('root')).render(
  <WorkshopProvider>
    <App />
  </WorkshopProvider>

)
