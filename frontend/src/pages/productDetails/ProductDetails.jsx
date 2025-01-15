import styles from './ProductDetails.module.css'
import MyButton from '../../components/buttons/MyButton.jsx'
import { useNavigate } from 'react-router-dom'
import ProductService from '../../services/products.jsx'
import { useEffect } from 'react'
import { useCartContext } from '../../contexts/useCartContext.jsx'
import Loading from '../../components/loading/Loading.jsx'

export default function ProductDetails({ productData, onAddToCart }) {
  const navigate = useNavigate()

  const { addToCart } = useCartContext()
  const { getAvailableProducts, productsList, productsLoading, refetchProducts } = ProductService()

  useEffect(() => {
    if(refetchProducts) {
      getAvailableProducts()
    }
  }, [refetchProducts])

  const handleAddToCart = (itemToAdd) => {
    addToCart()
  }

  if(productsLoading) {
    return(
      <Loading />
    )
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
          <img src='/imgs/icons/logo-home.svg' alt='' />
          <img src='/imgs/icons/shopping-cart.svg' alt='' />
        </div>
      </nav>

      <div className={styles.detailsContent}>
        <h3>R$ 399</h3>
        <h1>Sennheiser HD 25 Headphone</h1>
        <img src='/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png' alt='' />
      </div>
      <div className={styles.detailsContentText}>
        <h4>Highly Detailed Audio</h4>
        <p>
          The speaker unit contains a diaphragm that is precision-grown from NAC
          Audio bio-cellulose, making it stiffer, lighter and stronger than
          regular PET speaker units, and allowing the sound-producing diaphragm
          to vibrate without the levels of distortion found in other speakers.
        </p>
        <p>
          The speaker unit contains a diaphragm that is precision-grown from NAC
          Audio bio-cellulose, making it stiffer, lighter and stronger than
          regular PET speaker units, and allowing the sound-producing diaphragm
          to vibrate without the levels of distortion found in other speakers.
        </p>
        <MyButton>Add to Cart</MyButton>
      </div>
    </div>
  )
}
