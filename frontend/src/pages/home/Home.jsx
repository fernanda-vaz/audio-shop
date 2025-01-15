import { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { Box, Drawer, InputAdornment, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import MyButton from '../../components/buttons/MyButton'
import ProductService from '../../services/products'
import Loading from '../../components/loading/Loading'

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Controllers')
  const [filteredProducts, setFilteredProducts] = useState([])

  const {
    getProductsByControllersCategory,
    getProductsByHeadphonesCategory,
    getProductsByMixersCategory,
    getAvailableProducts,
    productsList,
    refetchProducts,
    productsLoading,
  } = ProductService()

  useEffect(() => {
    if (selectedCategory === 'Headphones') {
      getProductsByHeadphonesCategory()
    } else if (selectedCategory === 'Controllers') {
      getProductsByControllersCategory()
    } else if (selectedCategory === 'Mixers') {
      getProductsByMixersCategory()
    }
  }, [selectedCategory])

  useEffect(() => {
    if (productsList.length > 0) {
      setFilteredProducts(productsList.slice(0, 1))
    }
  }, [productsList])

  useEffect(() => {
    if (refetchProducts) {
      getAvailableProducts()
    }
  }, [refetchProducts])

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  if (productsLoading) {
    return <Loading />
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
          <Link to={'/profile'}>
            <img src='/imgs/icons/user.svg' alt='' />
          </Link>
        </div>

        <Drawer anchor='left' open={openMenu} onClose={handleOpenMenu}>
          <div className={styles.drawer}>
            <Link className={styles.menuLink} to={'/orders'}>
              My Orders
            </Link>
            <Link className={styles.menuLink} to={'/products'}>
              Products
            </Link>
            <Link
              className={`${styles.menuLink} ${styles.cartItem}`}
              to={'/cart'}
            >
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
          <Box sx={{ width: 500, maxWidth: '100%' }} >
            <TextField
              fullWidth
              type='search'
              name='search'
              size='small'
              placeholder='Looking for something?'
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </div>
        <div className={styles.homeCategories}>
          <ul>
            <li
              className={
                selectedCategory === 'Controllers' ? styles.active : ''
              }
              onClick={() => setSelectedCategory('Controllers')}
            >
              Controllers
            </li>
            <li
              className={selectedCategory === 'Headphones' ? styles.active : ''}
              onClick={() => setSelectedCategory('Headphones')}
            >
              Headphones
            </li>
            <li
              className={selectedCategory === 'Mixers' ? styles.active : ''}
              onClick={() => setSelectedCategory('Mixers')}
            >
              Mixers
            </li>
          </ul>

          <div className={styles.homeProductCard}>
            {filteredProducts.map((product) => (
              <div className={styles.productCard} key={product._id}>
                <h2>{product.name}</h2>
                <img src={product.image_url} alt={product.name} />
                <Link to={'/products'}>
                  <MyButton className={styles.productCardBtn}>
                    Shop now
                    <img src='/imgs/icons/arrow-right.svg' alt='' />
                  </MyButton>
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.homeFeaturedProducts}>
            <p>Featured Products</p>
            <Link className={styles.link} to={'/products'}>
              See All
            </Link>
          </div>

          <div className={styles.homeFeaturedCards}>
            {productsList.slice(0, 2).map((product) => (
              <div className={styles.homeFeaturedCard} key={product._id}>
                <img src={product.image_url} alt={product.name} />
                <p>{product.name}</p>
                <p className={styles.price}>$ {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
