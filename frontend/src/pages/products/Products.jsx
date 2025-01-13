import { useState } from 'react'
import styles from './Products.module.css'
import { Drawer } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Products() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className={styles.pageContainer}>
      <nav>
        <div className={styles.mobileNavbarItems}>
          <img
            className={styles.navbarLink}
            onClick={handleOpenMenu}
            src='/imgs/icons/arrow-left.svg'
            alt=''
          />
          <img src='/imgs/icons/logo-home.svg' alt='' />
          <img src='/imgs/icons/shopping-cart.svg' alt='' />
        </div>

        <Drawer anchor='left' open={openMenu} onClose={handleOpenMenu}>
          <div className={styles.drawer}>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/cart'} className={styles.cartItem}>
              Cart
              <img src='/imgs/icons/shopping-cart.svg' alt='' />
            </Link>
          </div>
        </Drawer>
      </nav>

      <section className={styles.productsCategories}>
        <ul>
          <li>Controllers</li>
          <li>Headphones</li>
          <li>Mixers</li>
        </ul>

        <div className={styles.productsFeaturedCards}>
          <div className={styles.productsFeaturedCard}>
            <img
              src='/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png'
              alt=''
            />
            <p>
              Sennheiser HD 25 <br /> Headphone
            </p>
            <p className={styles.price}>$ 399</p>
          </div>

          <div className={styles.productsFeaturedCard}>
            <img
              src='/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png'
              alt=''
            />
            <p>
              Sennheiser HD 25 <br /> Headphone
            </p>
            <p className={styles.price}>$ 399</p>
          </div>

          <div className={styles.productsFeaturedCard}>
            <img
              src='/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png'
              alt=''
            />
            <p>
              Sennheiser HD 25 <br /> Headphone
            </p>
            <p className={styles.price}>$ 399</p>
          </div>

          <div className={styles.productsFeaturedCard}>
            <img
              src='/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png'
              alt=''
            />
            <p>
              Sennheiser HD 25 <br /> Headphone
            </p>
            <p className={styles.price}>$ 399</p>
          </div>
        </div>
      </section>
    </div>
  )
}
