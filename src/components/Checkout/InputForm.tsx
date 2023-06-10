import React from 'react'

interface Props {
  type: string
  value: string
  renderErrors: boolean
  messageError: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm: React.FC<Props> = ({ type, value, renderErrors, messageError, handleChange }) => {
  return (
        <div className='flex flex-col'>
            <label className=' font-semibold pb-2' htmlFor='fullName'>Full Name</label>
            <input
                type={type}
                name={value}
                className={`border ${!renderErrors ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
                onChange={handleChange}
            />
            {
                renderErrors &&
                <p className='text-red-500 text-xs p-1'>{messageError}</p>
            }
        </div>
  )
}

export default InputForm
