import React, { useState } from 'react'
import { type FilterPriceType, type FilterGroup } from '../../types/categoryTypes'
import { FILTERSBY_TYPE } from '../../types/constants'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'
import FilterByActionPrice from './FilterByActionPrice'

interface Props {
  filter: FilterGroup
}

const FilterByAction: React.FC<Props> = ({ filter }) => {
  const [isFilterSelected, setIsFilterSelected] = useState<boolean>(false)

  const handleDropDown = (): void => {
    setIsFilterSelected(!isFilterSelected)
  }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-row py-1 justify-between' key={filter.id}>
            <p className='font-semibold text-md'>{filter.name}</p>
            <button onClick={() => { handleDropDown() }}>
            {
                !isFilterSelected ? <ArrowDownIcon /> : <ArrowUpIcon />
            }
            </button>
        </div>
        {
            isFilterSelected && (
              filter.filters.map((filterBy) => {
                switch (filter.id) {
                  case FILTERSBY_TYPE.PRICE:
                    return (
                        <FilterByActionPrice key={filterBy.id} id={filter.id} filter={filterBy as FilterPriceType} />
                    )
                  default:
                    return null
                }

                // return (
                //     <FilterByActionPrice key={filterBy.id} id={filter.id} filter={filterBy} />
                // )
              })
            )
        }
    </div>
  )
}

export default FilterByAction
