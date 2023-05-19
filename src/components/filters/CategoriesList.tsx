import { categoriesListMock } from '../../mock/categoriesMock'
import { useAppSelector, useAppDispatch } from '../../hooks/store'
import { selectCategory } from '../../store/categories/slice'
import { type CategoryId } from '../../types/categoryTypes'

const CategoriesList: React.FC = () => {
  const categorySelected = useAppSelector(state => state.categories)
  const dispatch = useAppDispatch()

  const handleSelectCategory = (id: CategoryId) => {
    dispatch(selectCategory(id))
  }

  console.log('categorySelected', categorySelected)

  return (
        <div className='flex flex-col'>
            <h3 className='text-left font-semibold text-lg'>Category</h3>
            <div className='flex flex-col py-1 ml-8'>
                {
                    categoriesListMock.map((category) => {
                      return (
                            <div key={category.id} className='text-left py-1'>
                                {
                                    categorySelected === category.id && (
                                        <button onClick={() => { handleSelectCategory(category.id) }}>
                                            <p className= {'font-semibold text-purple-600'}>{category.name}</p>
                                        </button>
                                    )
                                }
                                {
                                    categorySelected !== category.id && (
                                        <button onClick={() => { handleSelectCategory(category.id) }}>
                                            <p className= {'font-semibold text-gray-500'}>{category.name}</p>
                                        </button>
                                    )
                                }
                            </div>
                      )
                    })
                }
            </div>
        </div>
  )
}

export default CategoriesList
