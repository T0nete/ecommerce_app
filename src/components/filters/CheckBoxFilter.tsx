import React from 'react'
import { type FilterId, type FilterBy } from '../../types/categoryTypes'
import { useAppDispatch } from '../../hooks/store'
import { setFilter } from '../../store/filters/slice'

interface Props {
  id: FilterId
  filter: FilterBy
}

const CheckBoxFilter: React.FC<Props> = ({ id, filter }) => {
  const dispatch = useAppDispatch()

  const handleSelectFilter = (filter: FilterBy) => {
    dispatch(setFilter({ id: filter.id, value: filter.value }))
  }

  return (
        <div className='flex flex-row'>
            <input
              onChange={() => { handleSelectFilter(filter) }}
              type="radio"
              id={id.toString()}
              name={id.toString()}
              value={filter.value}
            />
            <p className='px-2 text-sm font-semibold text-gray-500'>{filter.value}</p>
        </div>
  )
}

export default CheckBoxFilter
