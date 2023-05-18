import { useAppSelector } from '../../hooks/store'
import { productListMock } from '../../mock/productListMock'
import ProductCard from './ProductCard'

const ProductList: React.FC = () => {
  const categorySelected = useAppSelector(state => state.categories)

  const productsList = categorySelected === -1
    ? productListMock
    : productListMock.filter((product) => product.categoryId === categorySelected)

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
