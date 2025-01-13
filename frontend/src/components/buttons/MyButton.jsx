import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import styles from './MyButton.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    app: {
      main: '#0acf83',
      light: '#6df2bf',
      dark: '#07ac6d',
      contrastText: '#f3f3f3',
    },
  },
})

export default function MyButton({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction='row' spacing={2}>
        <Button
          className={styles.button}
          variant='contained'
          color='app'
          type='submit'
        >
          {children}
        </Button>
      </Stack>
    </ThemeProvider>
  )
}
