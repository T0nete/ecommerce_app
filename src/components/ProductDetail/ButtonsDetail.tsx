import React from 'react'
import { HeartIcon, ShoppingCartIcon } from '../Icons'

const ButtonsDetail: React.FC = () => {
  return (
        <div className='flex flex-row'>
            <button className='items-center rounded-md p-2 bg-gray-200 shadow-md'>
                  <p className='flex flex-row font-semibold text-sm'>
                    <span className='pr-1'>{<HeartIcon />} </span>
                    WISHLIST
                  </p>
                </button>
                <div className='px-2'></div>
                <button className='items-center rounded-md py-2 px-4 bg-indigo-500 shadow-md'>
                  <p className='flex flex-row text-white font-semibold text-sm'>
                    <span className='pr-1'>{<ShoppingCartIcon />} </span>
                    ADD TO CART
                  </p>
                </button>
        </div>
  )
}

export default ButtonsDetail
