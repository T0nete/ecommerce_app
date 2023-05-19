import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { filterListMock } from '../../mock/categoriesMock'
import { type FilterId } from '../../types/categoryTypes'

const initialState = filterListMock

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    openCloseFilter: (state, action: PayloadAction<FilterId>) => {
      console.log('id', action.payload)
      return state.map(filter => {
        if (filter.id === action.payload) {
          return {
            ...filter,
            selected: !filter.selected
          }
        }
        return filter
      })
    }
  }
})

export default filterSlice.reducer
export const { openCloseFilter } = filterSlice.actions
