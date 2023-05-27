import { type Category, type FilterListMock } from '../types/categoryTypes'
import { FILTERSBY_TYPE, SIZE_TYPE } from '../types/constants'

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
    id: FILTERSBY_TYPE.PRICE,
    name: 'Price',
    selected: false,
    filters: [
      {
        id: 1,
        minValue: 0,
        maxValue: 50
      },
      {
        id: 2,
        minValue: 50,
        maxValue: 100
      },
      {
        id: 3,
        minValue: 100,
        maxValue: 150
      }
    ]
  },
  {
    id: FILTERSBY_TYPE.SIZE,
    name: 'Size',
    selected: false,
    filters: [
      {
        id: 1,
        value: SIZE_TYPE.XS
      },
      {
        id: 2,
        value: SIZE_TYPE.S
      },
      {
        id: 3,
        value: SIZE_TYPE.M
      },
      {
        id: 4,
        value: SIZE_TYPE.L
      },
      {
        id: 5,
        value: SIZE_TYPE.XL
      }
    ]
  },
  {
    id: FILTERSBY_TYPE.COLOR,
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
