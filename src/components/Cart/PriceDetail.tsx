import React from 'react'
import { type ProductCart } from '../../store/cart/slice'

interface Props {
  productsCart: ProductCart[]
}

const PriceDetail: React.FC<Props> = ({ productsCart }) => {
  const getTotalPrice = productsCart.reduce((sum, product) => sum + (product.price * product.quantity), 0)

  return (
    <div className='rounded-lg shadow-lg py-4 px-2 border border-gray-200'>
        <h3 className='text-lg font-semibold text-center '>Price Details</h3>
        <div className='py-2 divide-y-2'>
          <div>
            {
              productsCart.map((product) => {
                return <div
                  key={product.id.toString() + '_' + product.size}
                  className='flex flex-row w-full max-w-[75%] mx-auto justify-between py-2'
                >
                  <p className='text-gray-400'>{product.name} (<span>{product.size})</span> x <span>{product.quantity}</span></p>
                  <p className='font-semibold'>${product.price * product.quantity}</p>
                </div>
              })
            }
          </div>
          <div className='flex flex-row w-full max-w-[75%] mx-auto justify-between py-2'>
            <p className='text-gray-400 font-bold'>Total</p>
            <p className='font-bold'>${getTotalPrice}</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='rounded-full bg-indigo-500 p-2'>
            <p className='text-white font-normal hover:font-bold transition-all duration-300'>Proceed to Checkout</p>
          </button>
        </div>
    </div>
  )
}

export default PriceDetail
