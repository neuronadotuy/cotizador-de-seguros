import React from 'react'
import ReactDOM from 'react-dom/client'
import { CotizadorProvider } from './context/CotizadorProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CotizadorProvider>
      <App />
    </CotizadorProvider>
  </React.StrictMode>
)
