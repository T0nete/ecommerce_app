import React from 'react'
import { type FilterId, type FilterSizeType } from '../../types/categoryTypes'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { setFilterSize } from '../../store/filters/slice'

interface Props {
  id: FilterId
  filter: FilterSizeType
}

const FilterByActionSize: React.FC<Props> = ({ id, filter }) => {
  const filterSize = useAppSelector(state => state.filters.filterSize)
  const dispatch = useAppDispatch()

  const handleSelectFilter = (filterSel: FilterSizeType): void => {
    if (filterSel.id === filterSize?.id) {
      dispatch(setFilterSize(null))
    } else {
      dispatch(setFilterSize(filterSel))
    }
  }

  return (
        <div
          className='flex flex-row py-1'
          onClick={() => { handleSelectFilter(filter) }}
        >
          <input
            onChange={() => { }}
            type="radio"
            id={id.toString()}
            name={id.toString() }
            value={filter.value}
            checked={filterSize?.id === filter.id}
          />
          <p className='px-2 text-sm font-semibold text-gray-500'>{filter.value}</p>
        </div>
  )
}

export default FilterByActionSize
