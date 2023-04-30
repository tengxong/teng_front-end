import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './router/Index'
import './index.css'


// window.$api ="https://teng-backend1.vercel.app"
window.$api ="http://localhost:3060"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
