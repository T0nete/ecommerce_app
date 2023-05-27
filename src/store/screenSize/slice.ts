import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = false

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize: (state, action: PayloadAction<number>) => {
      return action.payload <= 768
    }
  }
})

export default screenSizeSlice.reducer
export const { setScreenSize } = screenSizeSlice.actions
