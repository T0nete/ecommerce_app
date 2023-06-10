import React, { type ChangeEvent, useRef, type FormEvent, useState } from 'react'
import InputForm from './InputForm'

// interface AdressFormType {
//   fullName: string
//   errorFullName: boolean
//   mobilePhone: string
//   errorMobilePhone: boolean
//   email: string
//   errorEmail: boolean
//   direction: string
//   errorDirection: boolean
//   townCity: string
//   errorTownCity: boolean
//   postalCode: number
//   errorPostalCode: boolean
// }

type AdressFormType = Record<string, string>

const initialState: AdressFormType = {
  fullName: '',
  mobilePhone: '',
  email: '',
  direction: '',
  townCity: '',
  postalCode: ''
}

interface ErrorsFormType {
  fullName: boolean
  messageErrorFullName: string
  mobilePhone: boolean
  messageErrorMobilePhone: string
  email: boolean
  messageErrorEmail: string
  direction: boolean
  messageErrorDirection: string
  townCity: boolean
  messageErrorTownCity: string
  postalCode: boolean
  messageErrorPostalCode: string
}

const errorsFormInitialValue: ErrorsFormType = {
  fullName: false,
  messageErrorFullName: 'Full name is required',
  mobilePhone: false,
  messageErrorMobilePhone: 'Mobile phone is required',
  email: false,
  messageErrorEmail: 'Email is required',
  direction: false,
  messageErrorDirection: 'Direction is required',
  townCity: false,
  messageErrorTownCity: 'Town/City is required',
  postalCode: false,
  messageErrorPostalCode: 'Postal code is required'
}

const AdressForm: React.FC = () => {
  const inputForm = useRef<AdressFormType>(initialState)
  const [renderErrors, setErrors] = useState(errorsFormInitialValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    console.log('handleChange')
    inputForm.current[name] = value.trim()
  }

  const validateForm = (fullName: string, mobilePhone: string, email: string, direction: string, townCity: string, postalCode: string): ErrorsFormType => {
    const errors: ErrorsFormType = errorsFormInitialValue
    if (fullName === '') {
      errors.fullName = true
    } else if (fullName.length < 3) {
      errors.fullName = true
      errors.messageErrorFullName = 'Full name must be at least 3 characters'
    } else {
      errors.fullName = false
    }

    if (mobilePhone === '') {
      errors.mobilePhone = true
    } else if (mobilePhone.length !== 9) {
      errors.mobilePhone = true
      errors.messageErrorMobilePhone = 'Invalid mobile phone'
    } else {
      errors.mobilePhone = false
    }

    if (email === '') {
      errors.email = true
    } else if (!email.includes('@') && !email.includes('.')) {
      errors.email = true
      errors.messageErrorEmail = 'Invalid email'
    } else {
      errors.email = false
    }

    if (direction === '') {
      errors.direction = true
    } else {
      errors.direction = false
    }

    if (townCity === '') {
      errors.townCity = true
    } else {
      errors.townCity = false
    }

    if (postalCode === '') {
      errors.postalCode = true
    } else if (postalCode.length !== 5) {
      errors.postalCode = true
      errors.messageErrorPostalCode = 'Invalid postal code'
    } else {
      errors.postalCode = false
    }

    return errors
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // console.log(inputForm.current)

    const { fullName, mobilePhone, email, direction, townCity, postalCode } = inputForm.current
    console.log(inputForm.current)
    const errors = validateForm(fullName, mobilePhone, email, direction, townCity, postalCode)
    // console.log({ ...errors })
    setErrors({ ...errors })
  }

  return (
    <div className='flex flex-col w-full p-4 rounded-lg shadow-lg border border-gray-200'>
        <h1 className='text-start text-lg font-bold'>Adress</h1>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <div className='flex py-2'>
              <div className='flex flex-col w-1/2 px-2'>
                <InputForm type={'text'} value={inputForm.current.fullName} renderErrors={renderErrors.fullName} messageError={renderErrors.messageErrorFullName} handleChange={handleChange} />
                {/* <label className=' font-semibold pb-2' htmlFor='fullName'>Full Name</label>
                <input
                  type='text'
                  name='fullName'
                  className={`border ${!renderErrors.fullName ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
                  onChange={handleChange}
                />
                {
                  renderErrors.fullName &&
                  <p className='text-red-500 text-xs p-1'>{renderErrors.messageErrorFullName}</p>
                } */}
              </div>
              <div className='flex flex-col w-1/2 px-2'>
                <label className=' font-semibold pb-2' htmlFor='mobilePhone'>Mobile No.</label>
                <input
                  type='number'
                  name='mobilePhone'
                  className={`border ${!renderErrors.mobilePhone ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
                  onChange={handleChange}
                />
                {
                  renderErrors.mobilePhone &&
                  <p className='text-red-500 text-xs p-1'>{renderErrors.messageErrorMobilePhone}</p>
                }
              </div>
            </div>
            <div className='flex flex-col w-full py-2 px-2'>
              <label className=' font-semibold pb-2' htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className={`border ${!renderErrors.email ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
                onChange={handleChange}
              />
              {
                renderErrors.email &&
                <p className='text-red-500 text-xs p-1'>{renderErrors.messageErrorEmail}</p>
              }
            </div>
            <div className='flex flex-col w-full py-2 px-2'>
              <label className=' font-semibold pb-2' htmlFor='direction'>Direction</label>
              <input
                type='text'
                name='direction'
                className={`border ${!renderErrors.direction ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
                onChange={handleChange}
              />
            </div>
            <div className='flex py-2'>
              <div className='flex flex-col w-1/2 px-2'>
                <label className=' font-semibold pb-2' htmlFor='townCity'>Town/City</label>
                <input
                  type='text'
                  name='townCity'
                  className={`border ${!renderErrors.townCity ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-col w-1/2 px-2'>
                <label className=' font-semibold pb-2' htmlFor='postalCode'>Postal Code</label>
                <input
                  type='number'
                  name='postalCode'
                  className={`border ${!renderErrors.postalCode ? 'border-gray-300' : 'border-red-500'} rounded-md p-1  focus:border-indigo-500 outline-none`}
                  onChange={handleChange}
                />
              </div>
            </div>
              <div className='flex p-4 justify-evenly'>
                <button
                  type='submit'
                  className='border border-gray-400 rounded-full p-2'
                >
                  Fill dummy values
                </button>
                <button type='submit' className='bg-indigo-500 rounded-full p-2 font-semibold text-md text-white'>
                  Place Order
                </button>
              </div>
          </div>
        </form>
    </div>
  )
}

export default AdressForm
