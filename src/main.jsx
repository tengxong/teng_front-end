import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './router/Index'
import './index.css'


window.$api ="http://teng-backend1.vercel.app"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
