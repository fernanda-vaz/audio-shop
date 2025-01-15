import styles from './Products.module.css'
import ProductService from '../../services/products.jsx'
import { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading.jsx'
import ProductsCard from '../../components/productCard/ProductCard.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../contexts/useCartContext.jsx'
import ProductPopup from '../../components/productPopup/ProductPopup.jsx'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Controllers')
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  const { addToCart } = useCartContext()
  const navigate = useNavigate()

  const {
    getAvailableProducts,
    getProductsByControllersCategory,
    getProductsByHeadphonesCategory,
    getProductsByMixersCategory,
    productsList,
    productsLoading,
    refetchProducts,
  } = ProductService()

  useEffect(() => {
    if (refetchProducts) {
      getAvailableProducts()
    }
  }, [refetchProducts])

  useEffect(() => {
    if (selectedCategory === 'Headphones') {
      getProductsByHeadphonesCategory()
    } else if (selectedCategory === 'Controllers') {
      getProductsByControllersCategory()
    } else if (selectedCategory === 'Mixers') {
      getProductsByMixersCategory()
    }
  }, [selectedCategory])

  const handleSelectedProduct = (product) => {
    setSelectedProduct(product)
  }

  const handlePopupClose = () => {
    setSelectedProduct(null)
  }

  const handleAddToCart = (itemToAdd) => {
    addToCart(itemToAdd)
    handlePopupClose()
    // console.log(itemToAdd)
  }

  if (productsLoading) {
    return <Loading />
  }
  // console.log(productsList)

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
          <img src='/imgs/icons/logo-home.svg' alt='' />
          <Link to={'/cart'}>
            <img src='/imgs/icons/shopping-cart.svg' alt='' />
          </Link>
        </div>
      </nav>

      <div className={styles.prodCategories}>
        <ul>
          <li 
            className={selectedCategory === 'Controllers' ? styles.active : ''}
            onClick={() => setSelectedCategory('Controllers')}
          >
            Controllers
          </li>
          <li className={selectedCategory === 'Headphones' ? styles.active : ''} onClick={() => setSelectedCategory('Headphones')}>Headphones</li>
          <li className={selectedCategory === 'Mixers' ? styles.active : ''} onClick={() => setSelectedCategory('Mixers')}>Mixers</li>
        </ul>
        {productsList.map((product) => (
          <div
            className={styles.cardContainer}
            key={product._id}
            onClick={() => {
              handleSelectedProduct(product)
            }}
          >
            <ProductsCard productData={product} />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductPopup
          productData={selectedProduct}
          onClose={handlePopupClose}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  )
}
