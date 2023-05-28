import { type Product } from '../../types/productTypes'
import ProductCard from './ProductCard'

interface Porps {
  productsList: Product[]
  isWishList: boolean
}

const ProductList: React.FC<Porps> = ({ productsList, isWishList }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
      {
          productsList.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard key={product.id} product={product} isWishList={isWishList} />
              </div>
            )
          })
      }
    </div>
  )
}

export default ProductList
