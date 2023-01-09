import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import LanContextProvider from './context/lanContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
  </LanContextProvider>
)
