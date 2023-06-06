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
    },
    deleteProductCart: (state, action: PayloadAction<ProductCart>) => {
      return state.filter((product) => product.id !== action.payload.id && product.size === action.payload.size)
    },
    removeOneProductCart: (state, action: PayloadAction<ProductCart>) => {
      const existingProductIndex = state.findIndex((product) =>
        product.id === action.payload.id && product.size === action.payload.size
      )
      if (existingProductIndex !== -1) {
        const deleteLastProduct = state[existingProductIndex].quantity > 0

        if (deleteLastProduct) {
          return state.filter((product) => product.id !== action.payload.id && product.size === action.payload.size)
        }

        return state.map((product, index) =>
          index === existingProductIndex && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
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
export const { addProductCart, deleteProductCart, removeOneProductCart } = cartSlice.actions
