import React from 'react'
import { DeleteIcon, ShoppingCartIconWhite } from '../Icons'
import { type Product } from '../../types/productTypes'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/store'
import { removeProductWishList } from '../../store/wishList/slice'

interface Props {
  product: Product
  isWishList: boolean
}

const ProductCard: React.FC<Props> = ({ product, isWishList }) => {
  const dispatch = useAppDispatch()

  const handleOnRemoveFromWishList = (): void => {
    dispatch(removeProductWishList(product.id))
  }
  return (
    <div className="p-2">
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Link id={product.id.toString()} to={`/product/${product.id}`} >
            <img className='rounded-t-xl' src={product.imgs[1]} alt={product.name} />
        </Link>
        <div className='flex flex-col w-full py-2 px-4'>
            <p className='font-bold text-lg'>{product.name}</p>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col justify-start'>
                    <p className='font-semibold text-gray-400'>Price</p>
                    <p className='font-bold text-lg'>${product.price}</p>
                </div>
                <div className='justify-evenly flex flex-row'>
                  {
                    isWishList && (
                      <div className='p-1'>
                        <button
                          onClick={() => { handleOnRemoveFromWishList() } }
                          className='cursor-pointer p-3 bg-red-500 rounded-xl'>
                          <DeleteIcon />
                        </button>
                      </div>
                    )
                  }
                  <div className='p-1'>
                    <button className='cursor-pointer p-3 bg-indigo-600 rounded-xl'>
                        <ShoppingCartIconWhite />
                    </button>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
