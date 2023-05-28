import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'

export const SCREEN_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export type ScreenSizeType = typeof SCREEN_SIZE.SMALL[keyof typeof SCREEN_SIZE.SMALL]

const initialState: ScreenSizeType = SCREEN_SIZE.SMALL

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize: produce((state, action: PayloadAction<number>) => {
      if (action.payload <= 576) {
        console.log('SMALL')
        state = 'SMALL'
      } else if (action.payload <= 768) {
        console.log('MEDIUM')
        state = 'MEDIUM'
      } else {
        console.log('LARGE')
        state = 'LARGE'
      }
    })
  }
})

export default screenSizeSlice.reducer
export const { setScreenSize } = screenSizeSlice.actions
