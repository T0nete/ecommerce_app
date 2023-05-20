import { useAppSelector } from '../../hooks/store'
import { productListMock } from '../../mock/productListMock'
import ProductCard from './ProductCard'

const ProductList: React.FC = () => {
  const categorySelected = useAppSelector(state => state.categories)
  const filterPrice = useAppSelector(state => state.filters.filterPrice)
  const filterSize = useAppSelector(state => state.filters.filterSize)

  console.log(categorySelected)

  let productsList = categorySelected.category === null
    ? productListMock
    : productListMock.filter((product) => product.categoryId === categorySelected.category?.id)

  if (filterPrice != null) {
    productsList = productsList.filter((product) => {
      return product.price >= filterPrice.minValue && product.price < filterPrice.maxValue
    })
  }

  if (filterSize !== null) {
    productsList = productsList.filter((product) => {
      return product.size === filterSize?.value
    })
  }

  return (
    <div className='flex flex-col'>
      {
        categorySelected.category === null
          ? (
          <h3 className='text-left font-extrabold text-3xl p-4'>Newest Products</h3>
            )
          : categorySelected.category?.name !== null && (
          <h3 className='text-left font-extrabold text-3xl p-4'>{categorySelected.category?.name}</h3>
          )
      }
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {
            productsList.map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
              )
            })
        }
      </div>
    </div>
  )
}

export default ProductList
