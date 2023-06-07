import React from 'react'
import QuantityInput from './QuantityInput'
import { useAppDispatch } from '../../hooks/store'
import { type ProductCart } from '../../store/cart/slice'
import { addProductCart, removeOneProductCart, deleteProductCart } from '../../store/cart/slice'

interface Props {
  product: ProductCart
}

const CartProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleOnAddRemoveProductCart = (add: boolean): void => {
    add
      ? dispatch(addProductCart(product))
      : dispatch(removeOneProductCart(product))
  }

  const handleRemoveProduct = (): void => {
    dispatch(deleteProductCart(product))
  }

  return (
        <div className='flex flex-row justify-between w-full p-4 rounded-lg shadow-lg border border-gray-100'>
            <div className='flex flex-row'>
              <img
              src={product.imgs[0]}
              alt={product.name}
              className='h-32 rounded-lg'
              />
              <div className='flex flex-col justify-between px-4 center'>
                <h3 className='text-start text-xl font-semibold'>{product.name}</h3>
                <div className='flex flex-row items-center'>
                  <p className='text-sm'>Quantity:</p>
                  <div className='p-2'/>
                  <QuantityInput
                    quantity={product.quantity}
                    handleOnAddRemoveProductCart= {handleOnAddRemoveProductCart}
                  />
                </div>
                <div className='flex flex-row items-center'>
                  <p className='text-sm'>Size: {product.size}</p>
                </div>
                <button
                  onClick={() => { handleRemoveProduct() }}
                  className='border rounded-full  p-1 border-gray-500 hover:border-indigo-500 text-sm hover:bg-indigo-500 text-black hover:text-white text-normal hover:font-bold transition-all duration-300'
                >
                  Remove from Cart
                </button>
              </div>
          </div>
          <div className='flex font-bold text-lg items-center justify-center'>
              <h3 className='text-center'>${product.price}</h3>
          </div>
    </div>
  )
}

export default CartProductCard
