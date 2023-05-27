import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories/slice'
import filtersReducer from '../store/filters/slice'
import screenSizeReducer from '../store/screenSize/slice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    filters: filtersReducer,
    screenSize: screenSizeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
