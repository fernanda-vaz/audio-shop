import { useState } from 'react'

export default function ProductService() {
  const [productsLoading, setProductsLoading] = useState(false)
  const [refetchProducts, setRefetchProducts] = useState(true)
  const [productsList, setProductsList] = useState([])

  const url = 'http://localhost:3000/products'

  const getAvailableProducts = (userId) => {
    setProductsLoading(true)

    fetch(`${url}/available`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setProductsList(result.body)
        } else {
          console.log(result)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setProductsLoading(false)
        setRefetchProducts(false)
      })
  }

  const getProductsByHeadphonesCategory = (userId) => {
    setProductsLoading(true)

    fetch(`${url}/headphones`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setProductsList(result.body)
        } else {
          console.log(result)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setProductsLoading(false)
        setRefetchProducts(false)
      })
  }

  

  return {
    getAvailableProducts,
    productsLoading,
    refetchProducts,
    productsList,
    getProductsByHeadphonesCategory,
  }
}
