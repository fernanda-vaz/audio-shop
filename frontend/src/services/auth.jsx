import { useState } from 'react'

export default function AuthServices() {
  const [authLoading, setAuthLoading] = useState(false)

  // const url = 'http://localhost:3000/auth'

  const url =
    'http://audioshop-backend-cec6f4bvbyg7eqc3.brazilsouth-01.azurewebsites.net/auth'
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
