import { useEffect } from 'react'
import ProductService from '../../services/products'
import Loading from '../../components/loading/Loading'
import ProductsCard from '../../components/productCard/ProductCard'
import { Link } from 'react-router-dom'
import MyButton from '../../components/buttons/MyButton'

export default function() {
  const { getAvailableProducts, getProductsByHeadphonesCategory, productsList, productsLoading, refetchProducts } = ProductService()
  
  useEffect(() => {
    if(refetchProducts) {
      getAvailableProducts()
    }
  }, [refetchProducts])

  if(productsLoading) {
    return (
      <Loading />
    )
  }

  const handleHeadphonesCategory = () => {
    getProductsByHeadphonesCategory()
  }

  console.log(productsList)

  return (
    <>
      <h1>Página teste...</h1>

      <div>
        {productsList.map((item) => (
          <div key={item._id}>
            <ProductsCard productData={item}/>
          </div>
        ))}
      </div>
    </>
  )
}
