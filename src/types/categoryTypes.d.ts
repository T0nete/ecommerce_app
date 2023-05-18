export type CategoryId = number

export interface Category {
  id: CategoryId
  name: string
}

export interface CategoryList {
  categories: Category[]
}
