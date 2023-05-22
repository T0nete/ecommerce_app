import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import ImagesProduct from './ImagesProduct'
import { SIZE_TYPE } from '../../types/constants'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { product, loading, getProduct } = useProduct()

  useEffect(() => {
    getProduct(Number(id))
  }, [])

  return (
    <div className='mx-auto w-10/12'>
        {loading && <p>Loading...</p>}
        {(product !== null) && (
          <div className='flex flex-row p-2'>
            <ImagesProduct imgs={product.imgs} />
            <div className='flex flex-col w-7/12 py-1 px-8 items-start'>
                <h1 className='font-bold text-3xl'>{product.name}</h1>
                <p className='font-bold text-lg'>${product.price}</p>
                <div>
                  {
                    Object.entries(SIZE_TYPE).map((value) => {
                      return (
                        <button key={value[0]} className='border-2 border-gray-400 rounded-lg px-2 mx-2 my-2'>
                          {value[1]}
                        </button>
                      )
                    })
                  }
                </div>
                <p>{product.description}</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default ProductDetail
