import { useAppSelector } from '../../hooks/store'
import { productListMock } from '../../mock/productListMock'
import ProductCard from './ProductCard'

const ProductList: React.FC = () => {
  const categorySelected = useAppSelector(state => state.categories)
  const filterPrice = useAppSelector(state => state.filters.filterPrice)
  const filterSize = useAppSelector(state => state.filters.filterSize)

  let productsList = categorySelected === -1
    ? productListMock
    : productListMock.filter((product) => product.categoryId === categorySelected)

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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {
            productsList.map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
              )
            })
        }
    </div>
  )
}

export default ProductList
