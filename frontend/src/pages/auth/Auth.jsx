import { Box, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import styles from './Auth.module.css'
import AuthServices from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import MyButton from '../../components/buttons/MyButton'

export default function Auth() {
  const [formType, setFormType] = useState('login')
  const [formData, setFormData] = useState(null)

  const { login, signup, authLoading } = AuthServices()

  const authData = JSON.parse(localStorage.getItem('auth'))

  const navigate = useNavigate()

  useEffect(() => {
    if (authData) {
      return navigate('/home')
    }
  }, [authData])

  const handleChangeFormType = () => {
    if (formType === 'login') {
      setFormType('signup')
    } else {
      setFormType('login')
    }
    console.log(formType)
  }

  const handleChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    switch (formType) {
      case 'login':
        login(formData)
        break

      case 'signup':
        if (formData.password !== formData.confirmPassword) {
          console.log('Passwords do not match')
          return
        }
        signup(formData)
        break
    }
  }

  if (authLoading) {
    return <Loading />
  }

  return (
    <div className={styles.pageContainer}>
      {formType === 'login' ? (
        <>
          <div className={styles.pageContent}>
            <h1>Audio</h1>
            <p>It's modular and designed to last</p>
          </div>

          <form onSubmit={handleSubmitForm}>
            <Box
              sx={{ width: 330, maxWidth: '100%' }}
              className={styles.authBox}
            >
              <TextField
                color='success'
                focused
                fullWidth
                required
                label='Email'
                type='email'
                name='email'
                onChange={handleChangeFormData}
              />

              <TextField
                focused
                fullWidth
                color='success'
                required
                label='Senha'
                type='password'
                name='password'
                onChange={handleChangeFormData}
              />
            </Box>

            <MyButton className={styles.formBtn} type='submit'>
              Login <img src='/imgs/icons/log-in.svg' alt='' />
            </MyButton>
          </form>

          <Button onClick={handleChangeFormType}>
            Não tem uma conta? clique aqui
          </Button>
        </>
      ) : null}

      {formType === 'signup' ? (
        <>
          <div className={styles.pageContent}>
            <h1>Audio</h1>
            <p>It's modular and designed to last</p>
          </div>

          <form onSubmit={handleSubmitForm}>
            <Box
              sx={{ width: 330, maxWidth: '100%' }}
              className={styles.authBox}
            >
              <TextField
                required
                focused
                fullWidth
                color='success'
                label='Nome Completo'
                type='fullname'
                name='fullname'
                onChange={handleChangeFormData}
              />

              <TextField
                required
                focused
                fullWidth
                color='success'
                label='Email'
                type='email'
                name='email'
                onChange={handleChangeFormData}
              />

              <TextField
                required
                focused
                fullWidth
                color='success'
                label='Senha'
                type='password'
                name='password'
                onChange={handleChangeFormData}
              />

              <TextField
                required
                focused
                fullWidth
                color='success'
                label='Confirme a senha'
                type='password'
                name='confirmPassword'
                onChange={handleChangeFormData}
              />
            </Box>

            <MyButton className={styles.formBtn} type='submit'>
              Login{' '}
              <img
                className={styles.formBtnIcon}
                src='/imgs/icons/log-in.svg'
                alt=''
              />
            </MyButton>
          </form>
          <Button onClick={handleChangeFormType}>
            Já tem uma conta? clique aqui
          </Button>
        </>
      ) : null}
    </div>
  )
}
