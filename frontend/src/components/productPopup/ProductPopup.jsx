import styles from './ProductPopup.module.css'
import { Dialog, Link } from '@mui/material'
import MyButton from '../buttons/MyButton.jsx'

export default function ProductPopup({ productData, onClose, onAddToCart }) {
    return (
        <Dialog open={true} onClose={onClose}>
            <div className={styles.popupContainer}>
                <img src={productData.image_url} alt="" />

                <div className={styles.popupContent}>
                    <h2>{productData.name}</h2>
                    <p>{productData.description}</p>
                    <p className={styles.price}>$ {productData.price}</p>
                    <Link onClick={() => { onAddToCart(productData) }}>
                        <MyButton>Add to Cart</MyButton>
                    </Link>
                </div>
            </div>
        </Dialog>
    )
}