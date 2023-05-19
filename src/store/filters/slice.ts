import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { filterListMock } from '../../mock/categoriesMock'
import { type FilterBy, type FilterId } from '../../types/categoryTypes'

const initialState: FilterBy[] = []

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // openCloseFilter: (state, action: PayloadAction<FilterId>) => {
    //   console.log('id', action.payload)
    //   return state.map(filter => {
    //     if (filter.id === action.payload) {
    //       return {
    //         ...filter,
    //         selected: !filter.selected
    //       }
    //     }
    //     return filter
    //   })
    // }
    setFilter: (state, action: PayloadAction<FilterBy>) => {
      const { id, value } = action.payload
      console.log('id', id)
      console.log('value', value)
      return state.map(filter => {
        if (filter.id === id) {
          return {
            ...filter,
            value
          }
        }
        return filter
      })
    }
  }
})

export default filterSlice.reducer
export const { setFilter } = filterSlice.actions
