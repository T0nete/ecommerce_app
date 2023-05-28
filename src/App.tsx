import './App.css'
import ProductList from './components/productList/ProductList'
import CategoriesList from './components/filters/CategoriesList'
import FilterBySection from './components/filters/FilterBySection'
import Header from './components/Header/Header'
import useResize from './hooks/useResize'

function App (): JSX.Element {
  useResize()

  return (
    <div className='flex flex-col'>
      <Header showMenu={true} />
      <div className='flex'>
        <aside className='w-1/4 h-screen bg-gray-100 p-6 flex flex-col divide-y-2'>
          <CategoriesList />
          <FilterBySection />
        </aside>
        <main className='h-full w-full flex justify-center items-center'>
          <ProductList />
        </main>
      </div>
    </div>
  )
}

export default App
