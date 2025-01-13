import styles from './Profile.module.css'
import AuthServices from '../../services/auth.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@mui/material'
import OrderServices from '../../services/order.jsx'
import Loading from '../../components/loading/Loading.jsx'
import MyButton from '../../components/buttons/MyButton.jsx'

export default function Profile() {
  const { logout } = AuthServices()
  const navigate = useNavigate()
  const authData = JSON.parse(localStorage.getItem('auth'))
  const { getUserOrders, orderLoading, refetchOrders, ordersList } =
    OrderServices()

  useEffect(() => {
    if (!authData) {
      return navigate('/auth')
    } else if (refetchOrders) {
      getUserOrders(authData?.user?._id)
    }
  }, [authData, refetchOrders])

  if (orderLoading) {
    return <Loading />
  }

  const handleLogout = () => {
    logout()
    return navigate('/')
  }

  console.log(ordersList)

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileContainer}>
        <h1>Olá, {authData?.user?.fullname}</h1>
        <h4>{authData?.user?.email}</h4>
        <Button color='inherit' onClick={handleLogout}>
          Logout
          <img src='/imgs/icons/log-out.svg' alt='' />
        </Button>
      </div>

      {ordersList.length > 0 ? (
        <div className={styles.ordersContainer}>
          {ordersList.map((order) => (
            <div key={order._id} className={styles.orderContainer}>
              {order.pickupStatus === 'Pending' ? (
                <p className={`${styles.pickupStatus} ${styles.pending}`}>
                  <img
                    className={styles.icon}
                    src='/imgs/icons/clock.svg'
                    alt=''
                  />{' '}
                  Pendente
                </p>
              ) : null}

              {order.pickupStatus === 'Completed' ? (
                <p className={`${styles.pickupStatus} ${styles.completed}`}>
                  <img src='/imgs/icons/check-square.svg' alt='' /> Finalizado
                </p>
              ) : null}

              {order.pickupStatus === 'Canceled' ? (
                <p className={`${styles.pickupStatus} ${styles.canceled}`}>
                  <img src='/imgs/icons/x-circle.svg' alt='' /> Cancelado
                </p>
              ) : null}

              {order.orderItems.map((item) => (
                <div key={item._id}>
                  <h4>{item.itemDetails[0].name}</h4>
                  <p>Quantidade: {item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.notOrdersContainer}>
            <div className={styles.notOrderText}>
                <h2>Você não possui pedidos ainda.</h2>
                <img src='/imgs/icons/sad-face.svg' alt='' />
            </div>
          <Button>
            <Link to={'/products'}>Clique aqui para fazer seu pedido!</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
