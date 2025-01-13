import styles from './Cart.module.css'
import MyButton from '../../components/buttons/MyButton'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart() {
  const navigate = useNavigate()
  
  return (
    <div className={styles.pageContent}>
      <nav>
        <div className={styles.mobileNavbarItems}>
          <img
            onClick={() => {
              navigate(-1)
            }}
            className={styles.navbarLink}
            src='/imgs/icons/arrow-left.svg'
            alt=''
          />
          <h3>Shopping Cart</h3>
          <img src='/imgs/icons/trash-2.svg' alt='' />
        </div>
      </nav>

      <div className={styles.cartProductCard}>
        <div className={styles.cartImage}>
          <img
            src='/imgs/products/Fone-de-Ouvido-Sennheiser-HD-25.png'
            alt=''
          />
        </div>
        <div className={styles.cartDescriptionCard}>
          <h4>Sennheiser HD 25 Headphone</h4>
          <h5>$ 399</h5>
          <div className={styles.cardIcons}>
            <img src='/imgs/icons/minus-circle.svg' alt='' />
            <p>1</p>
            <img src='/imgs/icons/plus-circle.svg' alt='' />
            <div className={styles.trash}>
              <img src='/imgs/icons/trash.svg' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cartFinalPrice}>
        <p>Total: 1 item</p>
        <h5>$ 399</h5>
      </div>

      <div className={styles.button}>
        <Link>
          <MyButton>
              Proceed to Checkout
              <img src="/imgs/icons/chevron-right.svg" alt="" />
          </MyButton>
        </Link>
      </div>
    </div>
  )
}
