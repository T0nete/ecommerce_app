import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'
import { SCREEN_SIZE, type ScreenSizeState } from '../../types/constants'

// export const SCREEN_SIZE = {
//   SMALL: 'small',
//   MEDIUM: 'medium',
//   LARGE: 'large'
// }

// export type ScreenSizeType = typeof SCREEN_SIZE.SMALL[keyof typeof SCREEN_SIZE.SMALL]

const initialState: ScreenSizeState = SCREEN_SIZE.SMALL

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize: produce((state, action: PayloadAction<number>) => {
      if (action.payload <= 546) {
        return SCREEN_SIZE.XSMALL
      } else if (action.payload <= 640) {
        return SCREEN_SIZE.SMALL
      } else if (action.payload <= 764) {
        return SCREEN_SIZE.MEDIUM
      } else {
        return SCREEN_SIZE.LARGE
      }
    })
  }
})

export default screenSizeSlice.reducer
export const { setScreenSize } = screenSizeSlice.actions
