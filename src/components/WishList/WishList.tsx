import React from 'react'
import { useAppSelector } from '../../hooks/store'
import useResize from '../../hooks/useResize'
import Header from '../Header/Header'
import ProductList from '../productList/ProductList'

const WishList: React.FC = () => {
  useResize()
  const isSmallScreen = useAppSelector(state => state.screenSize)
  const wishListProducts = useAppSelector(state => state.wishListProducts)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <Header showMenu={false} isSmallScreen={isSmallScreen}/>
      </div>
      <main className='h-full w-full flex justify-center items-center'>
          <div className='flex flex-col w-full'>
            <h3 className='text-left font-extrabold text-3xl p-4'>Wish List</h3>
            <ProductList productsList={wishListProducts} isWishList={true}/>
          </div>
        </main>
    </div>
  )
}

export default WishList
