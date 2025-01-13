import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { Drawer } from '@mui/material'
import { useState } from 'react'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarItems}>
        <Link to={'/'}>
          <img className={styles.logo} src='/imgs/icons/logo.png' alt='' />
        </Link>

        <div className={styles.navbarLinksContainer}>
          <Link to={'/'} className={styles.navbarLink}>
            Início
          </Link>
          <Link to={'/products'} className={styles.navbarLink}>
            Produtos
          </Link>
          <Link to={'/cart'} className={styles.navbarLink}>
            <img src='/imgs/icons/shopping-cart.svg' alt='' />
          </Link>
          <Link to={'/profile'} className={styles.navbarLink}>
            <img src='/imgs/icons/user.svg' alt='' />
          </Link>
        </div>
      </div>

      <div className={styles.mobileNavbarItems}>
        <div className={styles.mobileNavbarBtns}>
          <img className={styles.navbarLink} src='/imgs/icons/menu-variant.svg' onClick={handleOpenMenu} alt=''/> 
          <Link to={'/auth'}>
            <img
              className={styles.navbarLink}
              src='/imgs/icons/user.svg'
              alt=''
            />
          </Link>   
        </div>
      </div>

      <Drawer anchor='right' open={openMenu} onClose={handleOpenMenu}>
        <div className={styles.drawer}>
          <Link to={'/'} className={styles.navbarLink} href=''>
            Home
          </Link>
          <Link to={'/products'} className={styles.navbarLink} href=''>
            Products
          </Link>
          <Link to={'/profile'} className={styles.navbarLink} href=''>
            Profile
          </Link>
        </div>
      </Drawer>
    </nav>
  )
}
