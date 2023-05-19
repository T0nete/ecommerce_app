import React, { useEffect } from 'react'
import CheckBoxFilter from './CheckBoxFilter'
import { ArrowDownIcon, ArrowUpIcon } from '../Icons'
import { openCloseFilter } from '../../store/filters/slice'
import { type FilterId } from '../../types/categoryTypes'
import { useAppSelector, useAppDispatch } from '../../hooks/store'

const FilterBy: React.FC = () => {
  const filterSelected = useAppSelector(state => state.filters)
  const dispatch = useAppDispatch()

  const handleOnOpenCloseFilter = (id: FilterId) => {
    dispatch(openCloseFilter(id))
  }

  return (
    <div className='flex flex-col'>
        <h3 className='text-left font-semibold text-md py-1'>Filter by:</h3>
        {
            // filterListMock.map((filter) => {
            //   return (
                // <CheckBoxFilter key={filter.id} filter={filter} />
                filterSelected.map((category) => {
                  return (
                    <div key={category.id} className='flex flex-col'>
                      <div className='flex flex-row py-1 justify-between' key={category.id}>
                          <p className='font-semibold text-md'>{category.name}</p>
                          <button onClick={() => { handleOnOpenCloseFilter(category.id) }}>
                            {
                              !category.selected ? <ArrowDownIcon /> : <ArrowUpIcon />
                            }
                          </button>
                      </div>
                      {
                        category.selected && (
                          category.filters.map((filter) => {
                            return (
                              <CheckBoxFilter key={filter.id} filter={filter} />
                            )
                          })
                        )
                      }
                    </div>
                  )
                })
            //   )
            // })
        }
    </div>
  )
}

export default FilterBy
