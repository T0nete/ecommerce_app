import { type Product, type ProductId } from '../types/productTypes'
import { productListMock } from '../mock/productListMock'

const getProductById = (id: ProductId): Product | null => {
  if (Number.isNaN(id)) throw new Error('No id provided')
  const product = productListMock.find(product => product.id === id)
  if (product === undefined) return null
  return product
}

export default getProductById
