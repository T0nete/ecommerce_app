import { type CategoryId } from './categoryTypes'

export interface Product {
  id: number
  name: string
  imgs: string[]
  price: number
  description: string
  categoryId: CategoryId
}

export interface ProductList {
  products: Product[]
}
