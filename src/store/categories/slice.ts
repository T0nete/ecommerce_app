import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CategoryId } from '../../types/categoryTypes'

const initialState: CategoryId = -1

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<CategoryId>) => {
      return action.payload
    }
  }
})

export default categorySlice.reducer
export const { selectCategory } = categorySlice.actions
