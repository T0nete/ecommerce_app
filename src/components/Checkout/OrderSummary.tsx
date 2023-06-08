import React from 'react'
import { useAppSelector } from '../../hooks/store'

const OrderSummary: React.FC = () => {
  const productsCart = useAppSelector(state => state.cart)

  const getTotalPrice = productsCart.reduce((sum, product) => sum + (product.price * product.quantity), 0)
  const getTotalQuantity = productsCart.reduce((sum, product) => sum + (product.quantity), 0)
  const deliveryCharges: number = 5
  const totalCharge = getTotalPrice + deliveryCharges

  return (
    <div className='flex flex-col w-full p-4 rounded-lg shadow-lg border border-gray-200'>
        <h1 className='text-start text-lg font-semibold pb-4'>Order Summary</h1>
        <div className='flex flex-col divide-y-2'>
            <div className='pb-4'>
                {
                    productsCart.map((product) => {
                      return (
                            <li
                                className='list-none p-2 flex flex-row items-center justify-between'
                                key={product.id.toString() + '_' + product.size}
                            >
                                <div className='flex flex-row'>
                                    <img
                                        src={product.imgs[0]}
                                        alt={product.name}
                                        className='h-20 rounded'
                                    />
                                    <div className='flex flex-col px-2 justify-center'>
                                        <p className='font-semibold'>{product.name} <span className='font-normal text-sm'>({product.size})</span></p>
                                        <p className='font-semibold'>${product.price}</p>
                                    </div>
                                </div>
                                <p className='font-semibold'>x{product.quantity}</p>
                            </li>
                      )
                    })
                }
            </div>
            <div className='flex flex-col py-4 px-2'>
                <div className='flex flex-row justify-between py-1'>
                    <p className='text-gray-400 font-semibold'>Total Products</p>
                    <p className='text-gray-400 font-semibold'>{getTotalQuantity}</p>
                </div>
                <div className='flex flex-row justify-between py-1'>
                    <p className='text-gray-400 font-semibold'>Subtotal</p>
                    <p className='text-gray-400 font-semibold'>${getTotalPrice}</p>
                </div>
                <div className='flex flex-row justify-between py-1'>
                    <p className='text-gray-400 font-semibold'>Delivery Charges</p>
                    <p className='text-gray-400 font-semibold'>${deliveryCharges}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between pt-4 px-2'>
                <p className='text-gray-400 font-bold'>Total</p>
                <p className='text-gray-400 font-semibold'>${totalCharge}</p>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary
