import { Outlet } from 'react-router-dom'
import { CartProvider } from './contexts/useCartContext'

function App() {
  return (
    <>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </>
  )
}

export default App
