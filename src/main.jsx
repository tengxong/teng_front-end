import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from '../router/index'
import './index.css'


window.$api ="http://localhost:3060"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
