import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import ImagesProduct from './ImagesProduct'
import SizeSelector from './SizeSelector'
import ButtonsDetail from './ButtonsDetail'
import Header from '../Header/Header'
import useResize from '../../hooks/useResize'
import { useAppSelector } from '../../hooks/store'

const ProductDetail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { product, loading, getProduct } = useProduct()

  useResize()
  const isSmallScreen = useAppSelector(state => state.screenSize)

  useEffect(() => {
    getProduct(Number(id))
  }, [])

  const goBack = (): void => {
    navigate(-1)
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className={`mx-auto ${isSmallScreen ? 'w-full' : 'md:w-10/12'}`}>
        {loading && <p>Loading...</p>}
        {(product !== null) && (
          <div className='flex p-2 w-full flex-col sm:flex-row'>
            <div className='flex flex-col w-full sm:w-5/12 py-1 px-4 items-start'>
              <ImagesProduct imgs={product.imgs} isSmallScreen={isSmallScreen} />
            </div>
            <div className={`flex flex-col w-full sm:w-7/12 px-4 items-start gap-1 ${isSmallScreen ? 'py-2' : ''}`}>
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
        <footer className='p-4'>
          <button
            className='flex items-center justify-center py-2 px-4 bg-indigo-500 rounded-md shadow-md'
            onClick={() => { goBack() }}
          >
            <p className='text-white px-1'>Back</p>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default ProductDetail
