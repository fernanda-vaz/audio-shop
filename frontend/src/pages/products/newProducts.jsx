import styles from './newProducts.module.css'
import ProductService from '../../services/products.jsx'
import { useEffect } from 'react'
import Loading from '../../components/loading/Loading.jsx'
import ProductsCard from '../../components/productCard/ProductCard'
import { Link, useNavigate } from 'react-router-dom'

export default function NewProducts() {
  const navigate = useNavigate()
  
    const {
    getAvailableProducts,
    productsList,
    productsLoading,
    refetchProducts,
  } = ProductService()

  useEffect(() => {
    if(refetchProducts) {
        getAvailableProducts()
    }
  }, [refetchProducts])

  if(productsLoading) {
    return <Loading />
  }
  console.log(productsList)

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
          <Link to={'/cart'}><img src='/imgs/icons/shopping-cart.svg' alt='' /></Link>
          
        </div>
      </nav>

      <div className={styles.prodCategories}>
        <ul>
            <li><Link className={styles.link}>Controllers</Link></li>
            <li><Link className={styles.link}>Headphones</Link></li>
            <li><Link className={styles.link}>Mixers</Link></li>
        </ul>
        {productsList.map((product) => (
            <div className={styles.cardContainer}>
                <ProductsCard productData={product}/>
            </div>
        ))}
      </div>
    </div>
  )
}
