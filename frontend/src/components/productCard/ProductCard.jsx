import styles from './ProductCard.module.css'

export default function ProductsCard({ productData }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={productData.image_url} alt='' />
        <h4>{productData.name}</h4>
        <div className={styles.cardInfo}>
          <h3>$ {productData.price}</h3>
          <img src='/imgs/icons/more-vertical.svg' alt='' />
        </div>
      </div>
    </div>
  )
}
