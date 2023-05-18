import React from 'react'
import ShoppingCartIcon from '../Icons'
import { type Product } from '../../types/productTypes'

interface Props {
    product: Product
}

const ProductCard: React.FC<Props> = ({product}) => {
    return (
        <div className="p-2">
            <div className="rounded-xl border-2 border-solid flex flex-col justify-center items-center w-full">
                <img className='rounded-t-xl' src={product.imgs[1]} alt={product.name} />
                <div className='flex flex-col w-full p-2'>
                    <p className='font-bold text-lg'>{product.name}</p>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-col justify-start'>
                            <p className='font-semibold text-gray-400'>Price</p>
                            <p className='font-bold text-lg'>${product.price}</p>
                        </div>
                        <a className='cursor-pointer p-3 bg-indigo-600 rounded-xl'>
                            <ShoppingCartIcon />
                        </a>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default ProductCard
