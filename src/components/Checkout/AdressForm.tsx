import React, { useRef, type FormEvent, useState } from 'react'
import InputForm from './InputForm'

export type AddressFormType = Record<string, string>

const initialState: AddressFormType = {
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
  const inputForm = useRef<AddressFormType>(initialState)
  const [renderErrors, setErrors] = useState(errorsFormInitialValue)

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

  const handleInputChange = (name: string, value: string): void => {
    inputForm.current[name] = value
  }

  // const handleFillDummyValues = (): void => {
  //   inputForm.current = {
  //     fullName: 'Toni Barrantes',
  //     mobilePhone: '123456789',
  //     email: 'tonibarrantes@example.com',
  //     direction: 'Street 1',
  //     townCity: 'Barcelona',
  //     postalCode: '08080'
  //   }
  // }

  return (
    <div className='flex flex-col w-full p-4 rounded-lg shadow-lg border border-gray-200'>
        <h1 className='text-start text-lg font-bold'>Adress</h1>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <div className='flex py-2'>
              <div className='flex flex-col w-1/2 px-2'>
                <InputForm
                  label={'Full Name'}
                  name={'fullName'}
                  type={'text'}
                  renderErrors={renderErrors.fullName}
                  messageError={renderErrors.messageErrorFullName}
                  onInputChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col w-1/2 px-2'>
                <InputForm
                  label={'Mobile Phone'}
                  name={'mobilePhone'}
                  type={'number'}
                  renderErrors={renderErrors.mobilePhone}
                  messageError={renderErrors.messageErrorMobilePhone}
                  onInputChange={handleInputChange}
                />
              </div>
            </div>
            <div className='flex flex-col w-full py-2 px-2'>
              <InputForm
                label={'Email'}
                name={'email'}
                type={'email'}
                renderErrors={renderErrors.email}
                messageError={renderErrors.messageErrorEmail}
                onInputChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col w-full py-2 px-2'>
              <InputForm
                label={'Direction'}
                name={'direction'}
                type={'text'}
                renderErrors={renderErrors.direction}
                messageError={renderErrors.messageErrorDirection}
                onInputChange={handleInputChange}
              />
            </div>
            <div className='flex py-2'>
              <div className='flex flex-col w-1/2 px-2'>
                <InputForm
                  label={'Town/City'}
                  name={'townCity'}
                  type={'text'}
                  renderErrors={renderErrors.townCity}
                  messageError={renderErrors.messageErrorTownCity}
                  onInputChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col w-1/2 px-2'>
                <InputForm
                  label={'Postal Code'}
                  name={'postalCode'}
                  type={'number'}
                  renderErrors={renderErrors.postalCode}
                  messageError={renderErrors.messageErrorPostalCode}
                  onInputChange={handleInputChange}
                />
              </div>
            </div>
              <div className='flex p-4 justify-evenly'>
                {/* <button
                  type='submit'
                  className='border border-gray-400 rounded-full p-2'
                  onClick={handleFillDummyValues}
                >
                  Fill dummy values
                </button> */}
                <button
                  type='submit'
                  className='w-1/2 items-center align bg-indigo-500 rounded-full p-2 text-white font-normal hover:text-lg hover:font-bold transition-all duration-300'>
                  Place Order
                </button>
              </div>
          </div>
        </form>
    </div>
  )
}

export default AdressForm
