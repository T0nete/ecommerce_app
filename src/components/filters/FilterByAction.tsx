import React, { useState } from 'react'
import { type FilterPriceType, type FilterGroup, type FilterSizeType } from '../../types/categoryTypes'
import { FILTERSBY_TYPE } from '../../types/constants'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'
import FilterByActionPrice from './FilterByActionPrice'
import FilterByActionSize from './FilterByActionSize'

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
        <div
          className='flex flex-row py-1 justify-between'
          key={filter.id}
          onClick={() => { handleDropDown() }}
          >
            <p className='font-semibold text-md'>{filter.name}</p>
            {/* <button onClick={() => { handleDropDown() }}> */}
            {
                !isFilterSelected ? <ArrowDownIcon /> : <ArrowUpIcon />
            }
            {/* </button> */}
        </div>
        {
            isFilterSelected && (
              filter.filters.map((filterBy) => {
                switch (filter.id) {
                  case FILTERSBY_TYPE.PRICE:
                    return (
                        <FilterByActionPrice key={`${filter.id}_${filterBy.id}`} id={filter.id} filter={filterBy as FilterPriceType} />
                    )
                  case FILTERSBY_TYPE.SIZE:
                    return (
                        <FilterByActionSize key={`${filter.id}_${filterBy.id}`} id={filter.id} filter={filterBy as FilterSizeType} />
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
