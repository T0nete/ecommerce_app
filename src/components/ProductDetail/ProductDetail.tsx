import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import { type ProductId } from '../../types/productTypes'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { product, loading, getProduct } = useProduct()

  useEffect(() => {
    getProduct(Number(id))
  }, [id])

  return (
    <div>
        {loading && <p>Loading...</p>}
        {(product !== null) && (
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        )}
    </div>
  )
}

export default ProductDetail
