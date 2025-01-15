import { useState } from 'react'
import styles from './ConfirmOrderPopup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog, Button } from '@mui/material'
import MyButton from '../buttons/MyButton'

export default function ConfirmOrderPopup({ open, onClose, onConfirm }) {
  const authData = JSON.parse(localStorage.getItem('auth'))
  const navigate = useNavigate()

  const handleConfirm = (e) => {
    e.preventDefault()

    if (!authData?.user?._id) {
      return navigate('/')
    } else {
      const orderData = {
        userId: auth?.user?._id,
      }
      onConfirm(orderData)
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={styles.popupContainer}>
        <h2>We're almost there...</h2>
        <p>
          Confirm your order with the current date:
          <strong>{new Date().toLocaleDateString()}</strong>
        </p>

        <div className={styles.confirmBtn}>
          <Button className={styles.cancelBtn} onClick={onClose}>Cancel</Button>

          <Link onClick={handleConfirm}>
            <MyButton>Confirm</MyButton>
          </Link>
        </div>
      </div>
    </Dialog>
  )
}
