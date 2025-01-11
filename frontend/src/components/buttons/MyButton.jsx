import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import styles from './MyButton.module.css'

export default function MyButton({ children }) {
  return (
    <Stack direction='row' spacing={2}>
      <Button className={styles.button} variant='contained' type='submit'>
        {children}
      </Button>
    </Stack>
  )
}
