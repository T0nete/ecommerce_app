import React, { useState } from 'react'
import { type FilterPriceType, type FilterId, type FilterById } from '../../types/categoryTypes'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { setFilterPrice } from '../../store/filters/slice'

interface Props {
  id: FilterId
  filter: FilterPriceType
}

const FilterByActionPrice: React.FC<Props> = ({ id, filter }) => {
  const filterPrice = useAppSelector(state => state.filters.filterPrice)
  const dispatch = useAppDispatch()

  const [selectedFilter, setSelectedFilter] = useState<FilterById | null>(null)

  const handleSelectFilter = (filterSel: FilterPriceType): void => {
    console.log('selectedFilter', filterPrice?.id)
    console.log('filterSel', filterSel)
    console.log('compare', filterSel.id === selectedFilter)

    if (filterSel.id === filterPrice?.id) {
      setSelectedFilter(null)
      dispatch(setFilterPrice(null))
    } else {
      setSelectedFilter(filterSel.id)
      dispatch(setFilterPrice(filterSel))
    }
  }

  return (
        <div className='flex flex-row'>
            <input
              onChange={() => { }}
              onClick={() => { handleSelectFilter(filter) }}
              type="radio"
              id={id.toString()}
              name='price'
              value={filter.maxValue}
              checked={filterPrice?.id === filter.id}
            />
            <p className='px-2 text-sm font-semibold text-gray-500'>{filter.minValue} - {filter.maxValue}</p>
        </div>
  )
}

export default FilterByActionPrice
