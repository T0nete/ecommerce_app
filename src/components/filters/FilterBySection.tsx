import { filterListMock } from '../../mock/categoriesMock'
import FilterByAction from './FilterByAction'

const FilterBySection: React.FC = () => {
  return (
    <div className='flex flex-col'>
        <h3 className='text-left font-semibold text-md py-2'>Filter by:</h3>
        {
          filterListMock.map((filter) => {
            return (
              <div key={filter.id} className='flex flex-col'>
                <FilterByAction filter={filter} />
              </div>
            )
          })
        }
    </div>
  )
}

export default FilterBySection
