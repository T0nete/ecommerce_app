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

export interface FilterPriceType {
  id: FilterById
  minValue: number
  maxValue: number
}

export interface FilterSizeType {
  id: FilterById
  value: string
}

export interface FilterColorType {
  id: FilterById
  value: string
}

export interface FilterGroup {
  id: FilterId
  name: string
  selected: boolean
  filters: FilterSizeType[] | FilterPriceType[] | FilterColorType[]
}

export interface FilterListMock extends Array<FilterGroup> {}
