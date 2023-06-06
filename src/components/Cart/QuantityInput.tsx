import React from 'react'

interface Props {
  quantity: number
}

const QuantityInput: React.FC<Props> = ({ quantity }) => {
  return (
    <div className="flex flex-row p-1 items-center">
        <button
            onClick={() => {}}
            className='bg-indigo-500 font-semibold rounded-l-md p-1'
        >
            -
        </button>
        <p className='bg-gray-200 font-semibold py-1 px-6'>{quantity}</p>
        <button onClick={() => {}}
            className='bg-indigo-500 font-semibold rounded-r-md p-1'>
            +
        </button>
    </div>
  )
}

export default QuantityInput
