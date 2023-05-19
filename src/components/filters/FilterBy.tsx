import React from 'react'
import { filterListMock } from '../../mock/categoriesMock'
import CheckBoxFilter from './CheckBoxFilter'

const FilterBy: React.FC = () => {
  return (
    <div className='flex flex-col'>
        <h3 className='text-left font-semibold text-md'>Filter by:</h3>
        {
            filterListMock.map((filter) => {
              return (
                <CheckBoxFilter key={filter.id} filter={filter} />
              )
            })
        }
    </div>
  )
}

export default FilterBy
