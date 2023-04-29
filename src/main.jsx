import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Index from './router'
import './index.css'


window.$api ="http://localhost:3060"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
