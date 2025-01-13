import styles from './Profile.module.css'
import MyButton from '../../components/buttons/MyButton'
import { Link, useNavigate } from 'react-router-dom'
import AuthServices from '../../services/auth.jsx'
import { Button } from '@mui/material'
import { useEffect } from 'react'

export default function Profile() {
  const { logout } = AuthServices()
  const navigate = useNavigate()
  const authData = JSON.parse(localStorage.getItem('auth'))

  useEffect(() => {
    if (!authData) {
      return navigate('/')
    }
  }, [authData])

  const handleLogout = () => {
    logout()
    return navigate('/')
    // console.log('clicked')
  }

  return (
    <div className={styles.pageContainer}>
      <nav>
        <div className={styles.mobileNavbarItems}>
          <img
            className={styles.navbarLink}
            onClick={() => {
              navigate(-1)
            }}
            src='/imgs/icons/arrow-left.svg'
            alt=''
          />
          <h3>Profile</h3>
          <Link to={'/home'}>
            <img src='/imgs/icons/home.svg' alt='' />
          </Link>
        </div>
      </nav>

      <div className={styles.profileHeader}>
        <img src='/imgs/icons/user.svg' alt='' />
        <div className={styles.profileInfos}>
          <h3>{authData?.user?.fullname}</h3>
          <p>{authData?.user?.email}</p>
        </div>
      </div>
      <hr />
      <div className={styles.pageContent}>
        <div className={styles.contentItems}>
          <h4>General</h4>
          <Link className={styles.link}>
            <h3>Edit Profile</h3>
          </Link>
          <hr />
          <Link className={styles.link} to={'/orders'}>
            <h3>My Orders</h3>
          </Link>
          <hr />
          <Link className={styles.link}>
            <h3>Notificatios</h3>
          </Link>
          <hr />
          <Link className={styles.link}>
            <h3>Wishlist</h3>
          </Link>
          <hr />
        </div>

        <div className={styles.contentItems}>
          <h4>Legal</h4>
          <Link className={styles.link}>
            <h3>Terms of Use</h3>
          </Link>
          <hr />
          <Link className={styles.link}>
            <h3>Privacy Policy</h3>
          </Link>
          <hr />
        </div>

        <div className={styles.contentItems}>
          <h4>Personal</h4>
          <Link className={styles.link}>
            <h3>Report a Bug</h3>
          </Link>
          <hr />
          <Link className={styles.link} onClick={handleLogout}>
            <MyButton>Logout</MyButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
