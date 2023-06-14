import React from 'react'
import { type FilterPriceType, type FilterId } from '../../types/categoryTypes'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { setFilterPrice } from '../../store/filters/slice'

interface Props {
  id: FilterId
  filter: FilterPriceType
}

const FilterByActionPrice: React.FC<Props> = ({ id, filter }) => {
  const filterPrice = useAppSelector(state => state.filters.filterPrice)
  const dispatch = useAppDispatch()

  const handleSelectFilter = (filterSel: FilterPriceType): void => {
    if (filterSel.id === filterPrice?.id) {
      dispatch(setFilterPrice(null))
    } else {
      dispatch(setFilterPrice(filterSel))
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
              name={id.toString()}
              value={filter.maxValue}
              checked={filterPrice?.id === filter.id}
            />
            <p className='px-2 text-sm font-semibold text-gray-500'>${filter.minValue} - {filter.maxValue}</p>
        </div>
  )
}

export default FilterByActionPrice
