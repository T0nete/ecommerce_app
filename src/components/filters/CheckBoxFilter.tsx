import React from 'react'
import { type Filter } from '../../types/categoryTypes'

interface Props {
  filter: Filter
}

const CheckBoxFilter: React.FC<Props> = ({ filter }) => {
  return (
        <div className='flex flex-row'>
            <input type="radio" id={filter.id.toString()} name="vehicle1" value="Bike" />
            <p>{filter.name}</p>
        </div>
  )
}

export default CheckBoxFilter
