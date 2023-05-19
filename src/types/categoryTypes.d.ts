export type CategoryId = number

export interface Category {
  id: CategoryId
  name: string
}

export interface CategoryList {
  categories: Category[]
}

export type FilterId = number
export type FilterById = number
export type SelectedFilterType = boolean

export interface FilterBy {
  id: FilterById
  value: string
}

export interface FilterGroup {
  id: FilterId
  name: string
  selected: boolean
  filters: FilterBy[]
}

export interface FilterListMock extends Array<FilterGroup> {}
