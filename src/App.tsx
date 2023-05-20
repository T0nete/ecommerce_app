import './App.css'
import ProductList from './components/productList/ProductList'
import CategoriesList from './components/filters/CategoriesList'
import FilterBySection from './components/filters/FilterBySection'

function App () {
  return (
    <div className='flex'>
      <aside className='w-1/4 h-screen bg-gray-100 p-6 flex flex-col divide-y-2'>
        <CategoriesList />
        <FilterBySection />
      </aside>
      <main className='h-full w-full flex justify-center items-center'>
        <ProductList />
      </main>

    </div>
  )
}

export default App
