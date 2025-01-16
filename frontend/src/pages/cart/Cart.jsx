import styles from './Cart.module.css'
import MyButton from '../../components/buttons/MyButton'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../contexts/useCartContext'
import { useState } from 'react'
import OrderServices from '../../services/order.jsx'
import ConfirmOrderPopup from '../../components/confirmOrderPopup/ConfirmOrderPopup.jsx'

export default function Cart() {
  const navigate = useNavigate()

  const {
    cartItems,
    updateCartItems,
    removeFromCart,
    clearCart,
    calculateTotalPrice,
  } = useCartContext()
  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false)
  const { sendOrder } = OrderServices()

  const handleChangeItemQty = (mode, itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === itemId) {
        if (mode === 'less' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        } else if (mode === 'more') {
          return { ...item, quantity: item.quantity + 1 }
        }
      }
      return item
    })
    updateCartItems(updatedCartItems)
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleOpenPopup = (e) => {
    e.preventDefault()
    setConfirmPopupOpen(!confirmPopupOpen)
  }

  const handleClearCart = () => {
    clearCart()
  }

  const handleConfirmOrder = (orderData) => {
    orderData.items = cartItems.map((item) => {
      return { productId: item._id, quantity: item.quantity }
    })

    sendOrder(orderData)
    setConfirmPopupOpen(!confirmPopupOpen)
    clearCart()
  }

  if (!cartItems.length) {
    return (
      <div className={styles.pageContainer}>
        <nav>
          <div className={styles.mobileNavbarItems}>
            <img
              onClick={() => {
                navigate(-1)
              }}
              className={styles.navbarLink}
              src='/imgs/icons/arrow-left.svg'
              alt=''
            />
            <h3>Shopping Cart</h3>
            <img
              onClick={() => {
                navigate('/profile')
              }}
              src='/imgs/icons/user.svg'
              alt=''
            />
          </div>
        </nav>
        <div className={styles.emptyCart}>
          <h1>Your cart is empty...</h1>
          <img src='/imgs/icons/sad-face.svg' alt='' />
        </div>

        <Link className={styles.linkBtn} to={'/products'}>
          <MyButton>Check our products!</MyButton>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.pageContent}>
      <nav>
        <div className={styles.mobileNavbarItems}>
          <img
            onClick={() => {
              navigate(-1)
            }}
            className={styles.navbarLink}
            src='/imgs/icons/arrow-left.svg'
            alt=''
          />
          <h3>Shopping Cart</h3>
          <img onClick={handleClearCart} src='/imgs/icons/trash-2.svg' alt='' />
        </div>
      </nav>

      <section className={styles.cartContainer}>
        <div className={styles.cartProductCard}>
          {cartItems.map((item) => (
            <div className={styles.itemContainer} key={item._id}>
              <div className={styles.cartImage}>
                <img src={item.image_url} alt='' />
              </div>

              <div className={styles.cartDescriptionCard}>
                <h4>{item.name}</h4>
                <h5>{item.price}</h5>
                <div className={styles.cardIcons}>
                  <Link
                    onClick={() => {
                      handleChangeItemQty('less', item._id)
                    }}
                  >
                    <img src='/imgs/icons/minus-circle.svg' alt='' />
                  </Link>

                  <p>{item.quantity}</p>

                  <Link
                    onClick={() => {
                      handleChangeItemQty('more', item._id)
                    }}
                  >
                    <img src='/imgs/icons/plus-circle.svg' alt='' />
                  </Link>

                  <div className={styles.trash}>
                    <Link
                      onClick={() => {
                        removeFromCart(item._id)
                      }}
                    >
                      <img src='/imgs/icons/trash.svg' alt='' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.cartFinalPrice}>
        <p>
          Total: {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </p>
        <h5>$ {calculateTotalPrice().toFixed(2)}</h5>
      </div>

      <Link className={styles.checkoutBtn} onClick={handleOpenPopup}>
        <MyButton>
          Proceed to Checkout
          <img src='/imgs/icons/chevron-right.svg' alt='' />
        </MyButton>
      </Link>

      <ConfirmOrderPopup
        open={confirmPopupOpen}
        onClose={handleOpenPopup}
        onConfirm={handleConfirmOrder}
      />
    </div>
  )
}
