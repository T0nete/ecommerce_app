import React, { useState } from 'react'
import { type Product } from '../../types/productTypes'
import { SIZE_TYPE, type SizeType } from '../../types/constants'

interface Props {
  product: Product
}

const SizeSelector: React.FC<Props> = (productItem) => {
  const { product } = productItem

  const [selectedSize, setSelectedSize] = useState<SizeType>(SIZE_TYPE.S)

  const handleSelectSize = (selectedSize: SizeType): void => {
    setSelectedSize(selectedSize)
  }

  return (
        <div className='flex flex-col w-7/12 py-1 px-8 items-start'>
            <h1 className='font-bold text-3xl'>{product.name}</h1>
            <p className='font-bold text-lg'>${product.price}</p>
            <div>
                {
                Object.entries(SIZE_TYPE).map((value) => {
                  console.log(value[0])
                  return (
                    selectedSize === value[0]
                      ? (
                        <button
                            key={value[0]}
                            onClick={() => { handleSelectSize(value[1]) }}
                            className='border-2 border-gray-400 rounded-lg px-2 mx-2 my-2 bg-gray-400'>
                            {value[1]}
                        </button>
                        )
                      : (
                            <button key={value[0]} className='border-2 border-gray-400 rounded-lg px-2 mx-2 my-2' onClick={handleSelectSize}>
                                {value[1]}
                            </button>
                        )
                  )
                })
                }
            </div>
            <p>{product.description}</p>
        </div>
  )
}

export default SizeSelector
