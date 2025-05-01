import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { FavProvider } from './contexts/FavoriteContext'
import { ProductCard } from './components/ProductCard'
import { ProductProvider } from './contexts/ProductContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavProvider>
      <BrowserRouter>
        <ProductProvider>
          <App />
        </ProductProvider>
      </BrowserRouter>
    </FavProvider>
  </StrictMode>
)
