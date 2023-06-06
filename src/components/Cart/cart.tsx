import { useAppSelector } from '../../hooks/store'
import Header from '../Header/Header'
import CartProductCard from './CartProductCard'

const Cart: React.FC = () => {
  const isSmallScreen = useAppSelector(state => state.screenSize)
  const productsCart = useAppSelector(state => state.cart)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <Header showMenu={false} isSmallScreen={isSmallScreen} />
      </div>
      <main className='h-full w-full flex justify-center items-center'>
          <div className='flex flex-col w-full '>
            <h1 className='text-left font-extrabold text-3xl p-4'>Cart <span>({productsCart.length})</span></h1>
            {
              productsCart.map((product) => {
                return <div
                  key={product.id.toString() + '_' + product.size}
                >
                  <CartProductCard product={product} />
                </div>
              })
            }
          </ div>
      </main>
    </div>
  )
}

export default Cart
