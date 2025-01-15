import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Auth from './pages/auth/Auth.jsx'
import Cart from './pages/cart/Cart.jsx'
import Profile from './pages/profile/Profile.jsx'
import ProductDetails from './pages/productDetails/ProductDetails.jsx'
import UserOrders from './pages/orders/UserOrders.jsx'
import Products from './pages/products/Products.jsx'
import TestPage from './pages/testPage/TestPage.jsx'

const pages = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/', element: <Auth /> },
      { path: '/cart', element: <Cart /> },
      { path: '/products', element: <Products /> },
      { path: '/profile', element: <Profile /> },
      { path: '/details', element: <ProductDetails /> },
      // { path: '/orders', element: <UserOrders /> },
      // { path: '/test', element: <TestPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages}></RouterProvider>
  </StrictMode>
)
