import React, { useState } from 'react'
import { type FilterGroup } from '../../types/categoryTypes'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'
import CheckBoxFilter from './CheckBoxFilter'

interface Props {
  filter: FilterGroup
}

const FilterByAction: React.FC<Props> = ({ filter }) => {
  const [isFilterSelected, setIsFilterSelected] = useState<boolean>(false)

  const handleDropDown = () => {
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
                return (
                    <CheckBoxFilter key={filterBy.id} id={filter.id} filter={filterBy} />
                )
              })
            )
        }
    </div>
  )
}

export default FilterByAction
