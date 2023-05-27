import { useState } from 'react'
import { type ProductId, type Product } from '../types/productTypes'
import getProductById from '../services/productsService'

interface ProductHook {
  product: Product | null
  loading: boolean
  error: string
  getProduct: (id: ProductId) => void
}

const useProduct = (): ProductHook => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')

  const getProduct = (id: ProductId): void => {
    try {
      setLoading(true)
      const response: Product | null = getProductById(id)
      if (response == null) {
        setError('Product not found')
      }
      setProduct(response)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { product, loading, error, getProduct }
}

export default useProduct
