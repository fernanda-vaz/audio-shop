import styles from './UserOrders.module.css'
import { useNavigate, Link } from 'react-router-dom'
import OrderServices from '../../services/order.jsx'
import { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading.jsx'
import { Drawer } from '@mui/material'
import MyButton from '../../components/buttons/MyButton.jsx'

export default function () {
  const [openMenu, setOpenMenu] = useState(false)
  const { getUserOrders, orderLoading, refetchOrders, ordersList } =
    OrderServices()
  const navigate = useNavigate()
  const authData = JSON.parse(localStorage.getItem('auth'))

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    if (!authData) {
      return navigate('/')
    } else if (refetchOrders) {
      getUserOrders(authData?.user?._id)
    }
  }, [authData, refetchOrders])

  if(orderLoading) {
    return (
        <Loading />
    )
  }

  return (
    <div className={styles.pageContainer}>
      <nav>
        <div className={styles.mobileNavbarItems}>
          <img
            className={styles.navbarLink}
            onClick={handleOpenMenu}
            src='/imgs/icons/menu-variant.svg'
            alt=''
          />
          <img src='/imgs/icons/logo-home.svg' alt='' />
          <Link to={'/profile'}>
            <img src='/imgs/icons/user.svg' alt='' />
          </Link>
        </div>

        <Drawer anchor='left' open={openMenu} onClose={handleOpenMenu}>
          <div className={styles.drawer}>
            <Link to={'/home'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/cart'} className={styles.cartItem}>
              Cart
              <img src='/imgs/icons/shopping-cart.svg' alt='' />
            </Link>
          </div>
        </Drawer>
      </nav>
      <div className={styles.ordersHeader}>
        <h2>Olá, {authData?.user?.fullname}</h2>
        <h4>{authData?.user?.email}</h4>
      </div>

      {ordersList.length > 0 ? (
        <div className={styles.ordersContainer}>
            <h1>Your orders: </h1>
            {ordersList.map((order) => (
                <div key={order._id} className={styles.orderContainer}>
                    {order.deliveryStatus === 'Pending' ? (
                            <p className={`${styles.deliveryStatus} ${styles.pending}`}>
                                <img src="/imgs/icons/clock.svg" alt="" />
                                {order.deliveryStatus}
                            </p>
                    ) : null}

                    {order.deliveryStatus === 'Delivered' ? (
                        <p className={`${styles.deliveryStatus} ${styles.delivered}`}>
                            <img src="/imgs/icons/check-square.svg" alt="" />
                            {order.deliveryStatus}
                        </p>
                    ) : null}

                    {order.deliveryStatus === 'Sent' ? (
                        <p className={`${styles.deliveryStatus} ${styles.sent}`}>
                            <img src="/imgs/icons/truck.svg" alt="" />
                            {order.deliveryStatus}
                        </p>
                    ) : null}

                    {order.deliveryStatus === 'Canceled' ? (
                        <p className={`${styles.deliveryStatus} ${styles.canceled}`}>
                            <img src="/imgs/icons/x-circle.svg" alt="" />
                            {order.deliveryStatus}
                        </p>
                    ) : null}

                    {order.orderItems.map((item) => (
                        <div key={item._id}>
                            <div>
                                <h4>{item.itemDetails[0].name}</h4>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
      ) : (
        <div className={styles.zeroOrder}>
            <h3>You do not have orders yet!</h3>
            <img src="/imgs/icons/sad-face.svg" alt="" />
            <Link to={'/products'}>
                <MyButton>Click Here to order!</MyButton>
            </Link>
        </div>
      )}
    </div>
  )
}
