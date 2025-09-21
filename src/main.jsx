import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CartProvider } from './context/CartContext'   // <-- IMPORTANTE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>     {/* <-- envolvemos App con el provider */}
      <App />
    </CartProvider>
  </React.StrictMode>,
)
