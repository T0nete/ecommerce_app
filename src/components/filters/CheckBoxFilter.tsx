import React from 'react'
import { type FilterBy } from '../../types/categoryTypes'

interface Props {
  filter: FilterBy
}

const CheckBoxFilter: React.FC<Props> = ({ filter }) => {
  return (
        <div className='flex flex-row'>
            <input type="radio" id={filter.id.toString()} name="vehicle1" value="Bike" />
            <p className='px-2 text-sm font-semibold text-gray-500'>{filter.value}</p>
        </div>
  )
}

export default CheckBoxFilter
