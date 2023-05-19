import { type Category, type FilterListMock } from '../types/categoryTypes'

export const categoriesListMock: Category[] = [
  {
    id: 1,
    name: 'T-Shirts'
  },
  {
    id: 2,
    name: 'Dresses'
  },
  {
    id: 3,
    name: 'Accessories'
  },
  {
    id: 4,
    name: 'Shoes'
  },
  {
    id: 5,
    name: 'Jackets'
  },
  {
    id: 6,
    name: 'Trousers'
  }
]

export const filterListMock: FilterListMock = [
  {
    id: 1,
    name: 'Price',
    selected: false,
    filters: [
      {
        id: 1,
        value: '0-50'
      },
      {
        id: 2,
        value: '50-100'
      },
      {
        id: 3,
        value: '100-150'
      }
    ]
  },
  {
    id: 2,
    name: 'Size',
    selected: false,
    filters: [
      {
        id: 1,
        value: 'XS'
      },
      {
        id: 2,
        value: 'S'
      },
      {
        id: 3,
        value: 'M'
      },
      {
        id: 4,
        value: 'L'
      },
      {
        id: 5,
        value: 'XL'
      }
    ]
  },
  {
    id: 3,
    name: 'Color',
    selected: false,
    filters: [
      {
        id: 1,
        value: 'Red'
      },
      {
        id: 2,
        value: 'Blue'
      },
      {
        id: 3,
        value: 'Green'
      }
    ]
  }
]
