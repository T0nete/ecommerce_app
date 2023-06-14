import React from 'react'

interface Props {
  quantity: number
  handleOnAddRemoveProductCart: (add: boolean) => void
}

const QuantityInput: React.FC<Props> = ({ quantity, handleOnAddRemoveProductCart }) => {
  return (
    <div className="flex flex-row p-1 items-center">
        <button
            onClick={() => { handleOnAddRemoveProductCart(false) }}
            className='bg-indigo-500 font-semibold rounded-l-md px-1 w-5'
        >
            -
        </button>
        <p className='bg-gray-200 font-semibold px-6'>{quantity}</p>
        <button onClick={() => { handleOnAddRemoveProductCart(true) }}
            className='bg-indigo-500 font-semibold rounded-r-md px-1 w-5'>
            +
        </button>
    </div>
  )
}

export default QuantityInput
