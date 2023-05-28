import './App.css'
import ProductList from './components/productList/ProductList'
import CategoriesList from './components/filters/CategoriesList'
import FilterBySection from './components/filters/FilterBySection'
import Header from './components/Header/Header'
import useResize from './hooks/useResize'
import { useAppSelector } from './hooks/store'
import { SCREEN_SIZE } from './types/constants'
import { useState } from 'react'

function App (): JSX.Element {
  useResize()
  const isSmallScreen = useAppSelector(state => state.screenSize)
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = (): void => {
    setOpenMenu(!openMenu)
    console.log('openMenu', openMenu)
  }

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
          <ProductList />
        </main>
      </div>
    </div>
  )
}

export default App
