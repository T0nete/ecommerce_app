export type CategoryId = number

export interface Category {
  id: CategoryId
  name: string
}

export interface CategoryList {
  categories: Category[]
}

export type FilterId = number
export type SelectedFilterType = boolean

export interface FilterBy {
  id: FilterId
  value: string
}

export interface FilterGroup {
  id: FilterId
  name: string
  selected: boolean
  filters: FilterBy[]
}

export interface FilterListMock extends Array<FilterGroup> {}
