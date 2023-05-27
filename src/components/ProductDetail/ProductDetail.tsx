import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import ImagesProduct from './ImagesProduct'
import SizeSelector from './SizeSelector'
import ButtonsDetail from './ButtonsDetail'

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
          <div className='flex flex-col w-full sm:w-7/12 py-2 px-4 items-start gap-1'>
              <h1 className='font-bold text-3xl'>{product.name}</h1>
              <p className='font-bold text-lg p-1'>${product.price}</p>
              <SizeSelector />
              <div className='py-4'>
                <ButtonsDetail />
              </div>
              <div className='flex flex-col'>
                <p className='text-start font-semibold text-md text-gray-400 py-1'>Description</p>
                <p className='text-justify'>{product.description}</p>
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
