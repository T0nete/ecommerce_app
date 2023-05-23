import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import ImagesProduct from './ImagesProduct'
import { SIZE_TYPE } from '../../types/constants'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const { product, loading, getProduct } = useProduct()

  useEffect(() => {
    getProduct(Number(id))

    const handleResize = (): void => {
      setIsSmallScreen(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`mx-auto ${isSmallScreen ? 'w-full' : 'md:w-10/12'}`}>
      {loading && <p>Loading...</p>}
      {(product !== null) && (
        <div className='flex p-2 w-full flex-col sm:flex-row'>
          <div className='flex flex-col w-full sm:w-5/12 py-1 px-4 items-start'>
            <ImagesProduct imgs={product.imgs} isSmallScreen={isSmallScreen} />
          </div>
          <div className='flex flex-col w-full sm:w-7/12 py-1 px-4 items-start'>
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
