import { useState } from 'react'
import styles from './Home.module.css'
import { Box, Drawer, InputAdornment, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MyButton from '../../components/buttons/MyButton';

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  const authData = JSON.parse(localStorage.getItem('auth'))

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
          <img src='/imgs/icons/user.svg' alt='' />
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
      <section className={styles.homeContent}>
        <div className={styles.homeContentHeader}>
            <p>Olá, {authData?.user?.fullname}</p>
            <h1>What are you looking for today?</h1>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField 
                    fullWidth
                    type='search'
                    name='search'
                    size='small'
                    placeholder='Looking for something?'
                    slotProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
        </div>
        <div className={styles.homeCategories}>
            <ul>
                <li>Controllers</li>
                <li>Headphones</li>
                <li>Mixers</li>
            </ul>

            <div className={styles.homeProductCard}>
                <h2>Sennheiser HD 25 Headphone</h2>
                <img src="/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png" alt="" />
                <MyButton className={styles.productCardBtn}>
                    Shop now
                    <img src="/imgs/icons/arrow-right.svg" alt="" />
                </MyButton>
            </div>
            
            <div className={styles.homeFeaturedProducts}>
                <p>Featured Products</p>
                <Link className={styles.link} to={'/products'}>See All</Link>
            </div>
            
            <div className={styles.homeFeaturedCards}>
                <div className={styles.homeFeaturedCard}>
                    <img src="/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png" alt="" />
                    <p>Sennheiser HD 25 <br/> Headphone</p>
                    <p className={styles.price}>$ 399</p>
                </div>

                <div className={styles.homeFeaturedCard}>
                    <img src="/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png" alt="" />
                    <p>Sennheiser HD 25 <br/> Headphone</p>
                    <p className={styles.price}>$ 399</p>
                </div>
            </div>
            
        </div>
      </section>
    </div>
  )
}
