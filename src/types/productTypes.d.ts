import { type CategoryId } from './categoryTypes'

export type ProductId = number

export interface Product {
  id: ProductId
  name: string
  imgs: string[]
  price: number
  description: string
  categoryId: CategoryId
}

export interface ProductList {
  products: Product[]
}
