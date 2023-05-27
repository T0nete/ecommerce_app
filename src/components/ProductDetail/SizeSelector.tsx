import React, { useState } from 'react'
import { SIZE_TYPE, type SizeType } from '../../types/constants'

const SizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('')

  const onClickSize = (size: SizeType): void => {
    setSelectedSize(size)
  }

  return (
    <div className='flex flex-col text-start'>
      <p className='font-semibold text-md text-gray-400'>Select Size</p>
      <div className='flex flex-row py-1'>
        {
            Object.entries(SIZE_TYPE).map((value) => {
              console.log(value[1])
              return (
                <button
                  key={value[0]}
                  onClick={() => { onClickSize(value[1]) }}
                  className={`${value[1] === selectedSize ? 'rounded-full bg-indigo-500 ' : ''} p-2`}
                >
                  <span
                    className={`${value[1] === selectedSize ? 'text-white' : 'text-black'} font-semibold p-1`}
                  >{value[1]}</span>
                </button>
              )
            })
          }

      </div>
    </div>
  )
}

export default SizeSelector
