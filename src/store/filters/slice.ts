import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type FilterPriceType, type FilterSizeType, type FilterColorType } from '../../types/categoryTypes'

interface FilterState {
  filterPrice?: FilterPriceType | null
  filterSize?: FilterSizeType | null
  filterColor?: FilterColorType | null
}

const initialState: FilterState = {
  filterPrice: null,
  filterSize: null,
  filterColor: null
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterPrice: (state, action: PayloadAction<FilterPriceType | null>) => {
      if (action.payload === null) return { ...state, filterPrice: null }
      return {
        ...state,
        filterPrice: {
          id: action.payload.id,
          minValue: action.payload.minValue,
          maxValue: action.payload.maxValue
        }
      }
    },
    setFilterSize: (state, action: PayloadAction<FilterSizeType | null>) => {
      if (action.payload === null) return { ...state, filterSize: null }
      return {
        ...state,
        filterSize: {
          id: action.payload.id,
          value: action.payload.value
        }
      }
    },
    setFilterColor: (state, action: PayloadAction<FilterColorType>) => {
      const { id, value } = action.payload
      return {
        ...state,
        filterColor: {
          id,
          value
        }
      }
    }
  }
})

export default filterSlice.reducer
export const { setFilterPrice, setFilterSize, setFilterColor } = filterSlice.actions
