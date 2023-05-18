import { configureStore } from '@reduxjs/toolkit'
import useresReducer from './categories/slice'

export const store = configureStore({
  reducer: {
    categories: useresReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
