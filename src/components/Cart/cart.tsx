import { useAppSelector } from '../../hooks/store'
import Header from '../Header/Header'

const Cart: React.FC = () => {
  const isSmallScreen = useAppSelector(state => state.screenSize)
  const productsCart = useAppSelector(state => state.cart)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <Header showMenu={false} isSmallScreen={isSmallScreen} />
      </div>
      <main className='h-full w-full flex justify-center items-center'>
          <div className='flex flex-col w-full'>
            {
              productsCart.map((product) => {
                return <div key={product.id.toString() + '_' + product.size}>
                  <p>{product.name}</p>
                  <p>{product.quantity}</p>
                  <p>{product.size}</p>
                </div>
              })
            }
          </ div>
      </main>
    </div>
  )
}

export default Cart
