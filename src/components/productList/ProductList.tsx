import { productListMock } from '../../mock/productListMock'
import ProductCard from './ProductCard'

const ProductList = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {
                productListMock.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default ProductList