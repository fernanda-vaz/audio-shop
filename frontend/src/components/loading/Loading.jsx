import styles from './Loading.module.css'
import { CircularProgress } from '@mui/material'

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <CircularProgress color='inherit'/>
        </div>
    )
}