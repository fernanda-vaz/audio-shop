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
                fullWidth
                required
                label='Email'
                type='email'
                name='email'
                onChange={handleChangeFormData}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: '#0acf83',
                    '&.Mui-focused': {
                      color: '#0acf83',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#f2f2f2',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0acf83',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                required
                label='Password'
                type='password'
                name='password'
                onChange={handleChangeFormData}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: '#0acf83',
                    '&.Mui-focused': {
                      color: '#0acf83',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#f2f2f2',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0acf83',
                    },
                  },
                }}
              />
            </Box>

            <MyButton className={styles.formBtn} type='submit'>
              Login <img src='/imgs/icons/log-in.svg' alt='' />
            </MyButton>
          </form>

          <Button
            onClick={handleChangeFormType}
            sx={{
              color: '#f2f2f2',
              backgroundColor: '#7f7f7f45',
              '&:hover': {
                backgroundColor: '#7f7f7f',
              },
            }}
          >
            Don't you have an account? Click Here
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
                fullWidth
                label='Full Name'
                type='fullname'
                name='fullname'
                onChange={handleChangeFormData}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: '#0acf83',
                    '&.Mui-focused': {
                      color: '#0acf83',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#f2f2f2',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0acf83',
                    },
                  },
                }}
              />

              <TextField
                required
                fullWidth
                label='Email'
                type='email'
                name='email'
                onChange={handleChangeFormData}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: '#0acf83',
                    '&.Mui-focused': {
                      color: '#0acf83',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#f2f2f2',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0acf83',
                    },
                  },
                }}
              />

              <TextField
                required
                fullWidth
                label='Password'
                type='password'
                name='password'
                onChange={handleChangeFormData}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: '#0acf83',
                    '&.Mui-focused': {
                      color: '#0acf83',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#f2f2f2',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0acf83',
                    },
                  },
                }}
              />

              <TextField
                required
                fullWidth
                label='Confirm your password'
                type='password'
                name='confirmPassword'
                onChange={handleChangeFormData}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: '#0acf83',
                    '&.Mui-focused': {
                      color: '#0acf83',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: '#f2f2f2',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0acf83',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0acf83',
                    },
                  },
                }}
              />
            </Box>

            <MyButton type='submit'>
              Sign up
              <img
                className={styles.formBtnIcon}
                src='/imgs/icons/log-in.svg'
                alt=''
              />
            </MyButton>
          </form>
          <Button
            className={styles.btn}
            onClick={handleChangeFormType}
            sx={{
              color: '#f2f2f2',
              backgroundColor: '#7f7f7f45',
              '&:hover': {
                backgroundColor: '#7f7f7f',
              },
            }}
          >
            Already have an account? Click Here
          </Button>
        </>
      ) : null}
    </div>
  )
}
