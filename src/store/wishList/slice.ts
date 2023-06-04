import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ProductId, type Product } from '../../types/productTypes'

const initialState: Product[] = []

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addProductWishList: (state, action: PayloadAction<Product>) => {
      if (state.find(product => product.id === action.payload.id) != null) return state
      return [...state, action.payload]
    },
    removeProductWishList: (state, action: PayloadAction<ProductId>) => {
      return state.filter(product => product.id !== action.payload)
    }
  }
})

export default wishListSlice.reducer
export const { addProductWishList, removeProductWishList } = wishListSlice.actions
