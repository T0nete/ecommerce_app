import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Category } from '../../types/categoryTypes'

interface CategoryFilterState {
  category: Category | null
}

const initialState: CategoryFilterState = {
  category: null
}

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<Category>) => {
      if (action.payload.id === state.category?.id) return { ...state, category: null }
      return {
        ...state,
        category: {
          id: action.payload.id,
          name: action.payload.name
        }
      }
    }
  }
})

export default categorySlice.reducer
export const { selectCategory } = categorySlice.actions
