import React, { useState } from 'react'
import { type FilterGroup } from '../../types/categoryTypes'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'
import CheckBoxFilter from './CheckBoxFilter'

interface Props {
  filter: FilterGroup
}

const FilterByAction: React.FC<Props> = ({ filter }) => {
  const [isFilterSelected, setIsFilterSelected] = useState<boolean>(false)

  const handleOnOpenCloseFilter = () => {
    setIsFilterSelected(!isFilterSelected)
  }

  return (
    <div className='flex flex-col'>
        <div className='flex flex-row py-1 justify-between' key={filter.id}>
            <p className='font-semibold text-md'>{filter.name}</p>
            <button onClick={() => { handleOnOpenCloseFilter() }}>
            {
                !isFilterSelected ? <ArrowDownIcon /> : <ArrowUpIcon />
            }
            </button>
        </div>
        {
            isFilterSelected && (
              filter.filters.map((filter) => {
                return (
                <CheckBoxFilter key={filter.id} filter={filter} />
                )
              })
            )
        }
    </div>
  )
}

export default FilterByAction
