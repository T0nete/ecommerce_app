export type CategoryId = number

export interface Category {
  id: CategoryId
  name: string
}

export interface CategoryList {
  categories: Category[]
}

export type FilterId = number

export interface Filter {
  id: FilterId
  name: string
}
