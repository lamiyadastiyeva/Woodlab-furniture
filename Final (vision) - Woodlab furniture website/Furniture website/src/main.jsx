import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from 'react-use-cart'
import BacktoButton from './components/BacktoButton.jsx'


createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <App />
      <BacktoButton />
    </BrowserRouter>
  </CartProvider>
)
