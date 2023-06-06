import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Product } from '../../types/productTypes'

export interface ProductCart extends Product {
  size: string
  quantity: number
}

const initialState: ProductCart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductCart: (state, action: PayloadAction<ProductCart>) => {
      console.log(action.payload.size)
      const existingProductIndex = state.findIndex((product) =>
        product.id === action.payload.id && product.size === action.payload.size
      )
      if (existingProductIndex !== -1) {
        return state.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      } else {
        return [
          ...state,
          {
            ...action.payload,
            quantity: 1
          }
        ]
      }
    }
  }
})

export default cartSlice.reducer
export const { addProductCart } = cartSlice.actions
