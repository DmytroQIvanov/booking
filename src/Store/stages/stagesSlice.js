import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //Step-1
  City:"",
  Address:"",
  Metro:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    firstStep: (state,{payload}) => {
        console.log(payload)
      state.City =payload.City
      state.Address =payload.Address
      state.Metro =payload.Metro
    },
    secondStep: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { firstStep, secondStep, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer