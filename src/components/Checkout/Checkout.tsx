import React from 'react'
import { useAppSelector } from '../../hooks/store'
import useResize from '../../hooks/useResize'
import Header from '../Header/Header'
import AdressForm from './AdressForm.tsx'
import OrderSummary from './OrderSummary.tsx'
import { SCREEN_SIZE } from '../../types/constants'

const Checkout: React.FC = () => {
  useResize()
  const isSmallScreen = useAppSelector(state => state.screenSize)

  const renderInCol = (): boolean => {
    return isSmallScreen === SCREEN_SIZE.XSMALL ||
            isSmallScreen === SCREEN_SIZE.SMALL ||
            isSmallScreen === SCREEN_SIZE.MEDIUM
  }

  return (
    <div className='flex flex-col'>
    <div className='flex flex-col'>
      <Header showMenu={false} isSmallScreen={isSmallScreen} />
    </div>
    <main className='h-full w-full flex flex-col justify-center items-center'>
          <div className={`flex flex-col ${renderInCol() ? 'w-10/12' : 'w-8/12'}`}>
            <h1 className='text-left font-extrabold text-3xl py-4'>Checkout</h1>
            <div className='flex flex-row w-full'>
                <div className={`${!renderInCol() ? 'w-7/12' : 'w-full'} p-2` }>
                    <AdressForm />
                </div>
                {
                    !renderInCol() &&
                    (
                        <div className='w-5/12 p-2'>
                            <OrderSummary />
                        </div>
                    )
                }

            </div>
            {
                renderInCol() &&
                (
                    <div className='w-full p-2 m-auto'>
                        <OrderSummary />
                    </div>
                )
            }
        </ div>
    </main>
  </div>
  )
}

export default Checkout
