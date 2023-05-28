import React from 'react'
import { ShoppingCartIconWhite } from '../Icons'
import { type Product } from '../../types/productTypes'
interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="p-2">
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img className='rounded-t-xl' src={product.imgs[1]} alt={product.name} />
            <div className='flex flex-col w-full py-2 px-4'>
                <p className='font-bold text-lg'>{product.name}</p>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col justify-start'>
                        <p className='font-semibold text-gray-400'>Price</p>
                        <p className='font-bold text-lg'>${product.price}</p>
                    </div>
                    <button className='cursor-pointer p-3 bg-indigo-600 rounded-xl'>
                        <ShoppingCartIconWhite />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
