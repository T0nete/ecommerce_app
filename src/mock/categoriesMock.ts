import { type Filter, type Category } from '../types/categoryTypes'

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

export const filterListMock = [
  {
    id: 1,
    name: 'price',
    filters: [
      {
        id: 1,
        name: '0-50'
      },
      {
        id: 2,
        name: '50-100'
      },
      {
        id: 3,
        name: '100-150'
      }
    ]
  },
  {
    id: 2,
    name: 'size',
    filters: [
      {
        id: 1,
        name: 'XS'
      },
      {
        id: 2,
        name: 'S'
      },
      {
        id: 3,
        name: 'M'
      },
      {
        id: 4,
        name: 'L'
      },
      {
        id: 5,
        name: 'XL'
      }
    ]
  },
  {
    id: 3,
    name: 'color',
    filters: [
      {
        id: 1,
        name: 'red'
      },
      {
        id: 2,
        name: 'blue'
      },
      {
        id: 3,
        name: 'green'
      }
    ]
  }
]
