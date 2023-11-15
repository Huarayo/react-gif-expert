import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //EVITANDO QUE NOS RESPONDA 2 VECES LA MISMA COSA
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
