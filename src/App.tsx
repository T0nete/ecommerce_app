import './App.css'
import ProductList from './components/productList/ProductList'
import CategoriesList from './components/filters/CategoriesList'
import FilterBySection from './components/filters/FilterBySection'
import Header from './components/Header/Header'
import useResize from './hooks/useResize'
import { useAppSelector } from './hooks/store'
import { SCREEN_SIZE } from './types/constants'
import { useState } from 'react'
import { productListMock } from './mock/productListMock'

function App (): JSX.Element {
  useResize()
  const isSmallScreen = useAppSelector(state => state.screenSize)
  const [openMenu, setOpenMenu] = useState(false)
  const categorySelected = useAppSelector(state => state.categories)
  const filterPrice = useAppSelector(state => state.filters.filterPrice)
  const filterSize = useAppSelector(state => state.filters.filterSize)

  const handleOpenMenu = (): void => {
    setOpenMenu(!openMenu)
  }

  let productsList = categorySelected.category === null
    ? productListMock
    : productListMock.filter((product) => product.categoryId === categorySelected.category?.id)

  if (filterPrice != null) {
    productsList = productsList.filter((product) => {
      return product.price >= filterPrice.minValue && product.price < filterPrice.maxValue
    })
  }

  // if (filterSize !== null) {
  //   productsList = productsList.filter((product) => {
  //     return product.size === filterSize?.value
  //   })
  // }

  return (
    <div className='flex flex-col'>
      <Header showMenu={true} isSmallScreen={isSmallScreen} handleOpenMenu={handleOpenMenu}/>
      <div className='flex'>
        {
          (isSmallScreen !== SCREEN_SIZE.XSMALL || openMenu) && (
            // <aside className='w-1/4 md:w-1/5 lg:1/5 h-screen bg-gray-100 p-6 flex flex-col divide-y-2'>
            <aside className={`${isSmallScreen === SCREEN_SIZE.XSMALL ? 'w-3/5' : 'w-1/4'} sm:1/4 md:w-1/5 lg:1/5 h-screen bg-gray-100 p-6 flex flex-col divide-y-2`}>
              <CategoriesList />
              <FilterBySection />
            </aside>
          )
        }
        <main className='h-full w-full flex justify-center items-center'>
          <div className='flex flex-col w-full'>
          {
            categorySelected.category === null
              ? (
                  <h3 className='text-left font-extrabold text-3xl p-4'>Newest Products</h3>
                )
              : (
                  <h3 className='text-left font-extrabold text-3xl p-4'>{categorySelected.category?.name}</h3>
                )
          }
            <ProductList productsList={productsList} isWishList={false}/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
