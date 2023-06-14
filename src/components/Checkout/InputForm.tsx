import React from 'react'

interface Props {
  label: string
  name: string
  type: string
  renderErrors: boolean
  messageError: string
  onInputChange: (name: string, value: string) => void
}

const InputForm: React.FC<Props> = ({ label, name, type, renderErrors, messageError, onInputChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    onInputChange(name, value)
  }

  return (
    <div className='flex flex-col'>
        <label className=' font-semibold pb-2' htmlFor='fullName'>{label}</label>
        <input
            type={type}
            name={name}
            className={`border ${!renderErrors ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
            onChange={ handleChange }
        />
        {
            renderErrors &&
            <p className='text-red-500 text-xs p-1'>{messageError}</p>
        }
    </div>
  )
}

export default InputForm
