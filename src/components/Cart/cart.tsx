import { useAppSelector } from '../../hooks/store'
import Header from '../Header/Header'
import QuantityInput from './QuantityInput'

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
            <h1 className='text-left font-extrabold text-3xl p-4'>Cart <span>({productsCart.length})</span></h1>
            {
              productsCart.map((product) => {
                return <div
                  key={product.id.toString() + '_' + product.size}
                  className='flex flex-row p-2'
                >
                  <img
                    src={product.imgs[0]}
                    alt={product.name}
                    className='h-32 rounded-lg'
                  />
                  <div className='flex flex-col justify-evenly px-4'>
                    <h3 className='text-start text-xl font-semibold'>{product.name}</h3>
                    <div className='flex flex-row items-center'>
                      <p>Quantity:</p>
                      <div className='p-2'/>
                      <QuantityInput quantity={product.quantity} />
                    </div>
                    <button
                      onClick={() => {}}
                      className='border rounded-full p-1 border-gray-500 text-sm'
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              })
            }
          </ div>
      </main>
    </div>
  )
}

export default Cart
