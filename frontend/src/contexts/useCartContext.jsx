import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (itemToAdd) => {
    const checkItemAlready = cartItems.find((cartItem) => {
      return cartItem._id === itemToAdd._id
    })
    if (!checkItemAlready) {
      itemToAdd.quantity = 1
      setCartItems([...cartItems, itemToAdd])
      console.log('Item added correctly')
    } else {
      console.log('Item is already on cart')
    }
  }

  const removeFromCart = (itemId) => {
    const cartItemRemoved = cartItems.filter((item) => {
      return item._id !== itemId
    })
    setCartItems(cartItemRemoved)
  }

  const updateCartItems = (items) => {
    setCartItems(items)
  }

  const clearCart = () => {
    setCartItems([])
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        removeFromCart,
        addToCart,
        cartItems,
        updateCartItems,
        clearCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context) {
    console.log('You are out of CartContext')
  }

  return context
}
