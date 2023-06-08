import React from 'react'
import { SIZE_TYPE } from '../../types/constants'

interface Props {
  selectedSize: string
  errorSize: boolean
  handleSelectedSize: (size: string) => void
}

const SizeSelector: React.FC<Props> = ({ selectedSize, errorSize, handleSelectedSize }) => {
  return (
    <div className='flex flex-col text-start'>
      <p className='font-semibold text-md text-gray-400'>Select Size</p>
      <div className='flex flex-row py-1'>
        {
          Object.entries(SIZE_TYPE).map((value) => {
            return (
              <button
                key={value[0]}
                onClick={() => { handleSelectedSize(value[1]) }}
                className={`${value[1] === selectedSize ? 'rounded-full bg-indigo-500 ' : ''} p-2`}
              >
                <span
                  className={`${value[1] === selectedSize
                              ? 'text-white'
                              : (!errorSize ? 'text-black' : 'text-red-500')}
                              font-semibold p-1`}
                 // ${value[1] === selectedSize ? 'text-white' : 'text-black'} font-semibold p-1`}
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
