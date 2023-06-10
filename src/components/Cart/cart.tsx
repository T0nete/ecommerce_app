import { useAppSelector } from '../../hooks/store'
import useResize from '../../hooks/useResize'
import { SCREEN_SIZE } from '../../types/constants'
import Header from '../Header/Header'
import CartProductCard from './CartProductCard'
import PriceDetail from './PriceDetail'

const Cart: React.FC = () => {
  const productsCart = useAppSelector(state => state.cart)

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
            <h1 className='text-left font-extrabold text-3xl py-4'>Cart <span>({productsCart.length})</span></h1>
            <div className='flex flex-row w-full'>
              {/* <div className='flex flex-col  w-full'> */}
              <div className={`flex flex-col ${!renderInCol() ? 'w-8/12' : 'w-full'}`}>
                {
                  productsCart.map((product) => {
                    return <div
                      key={product.id.toString() + '_' + product.size}
                    >
                      <div className='flex flex-row p-2'>
                        <CartProductCard product={product} />
                      </div>
                   </div>
                  })
                }
              </div>
              {
                !renderInCol() &&
                (
                  <div className='w-4/12 p-2'>
                    <PriceDetail productsCart={productsCart}/>
                  </div>
                )
              }
            </div>
          {
            renderInCol() &&
            (
              <div className='min-w-max[60%] p-2'>
                <PriceDetail productsCart={productsCart} />
              </div>
            )
          }
          </ div>
      </main>
    </div>
  )
}

export default Cart
