import { useState } from 'react'

export default function AuthServices() {
  const [authLoading, setAuthLoading] = useState(false)

  const url = 'https://audio-shop-backend-0wz2.onrender.com/auth'

  const login = (formData) => {
    setAuthLoading(true)

    fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.success && result.body.token) {
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: result.body.token,
              user: result.body.user,
            })
          )
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setAuthLoading(false)
      })
  }

  const logout = () => {
    localStorage.removeItem('auth')
  }

  const signup = (formData) => {
    setAuthLoading(true)

    fetch(`${url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)

        if (result.success && result.body.token) {
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: result.body.token,
              user: result.body.user,
            })
          )
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setAuthLoading(false)
      })
  }

  return { login, logout, signup, authLoading }
}
