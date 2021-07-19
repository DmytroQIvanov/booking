import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from './stages/stagesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})