import { createSlice } from "@reduxjs/toolkit"

import { fetchContentOperation } from "./operations"
import { decrementReducer, incrementByAmountReducer, incrementReducer } from "./reducers"

const initialState = {
  value: 0,
  contents: [],
  isLoading: false,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: incrementReducer,
    decrement: decrementReducer,
    incrementByAmount: incrementByAmountReducer
  },
  extraReducers: {
    // fetchContent
    [fetchContentOperation.pending]: (state) => {
      state.isLoading = true
      console.log("pending")
    },
    [fetchContentOperation.fulfilled]: (state, { payload }) => {
      console.log("fulfilled")
      state.contents = payload
      state.isLoading = false
    },
    [fetchContentOperation.rejected]: (state) => {
      state.isLoading = false
      console.log("rejected")
    },

    // More AsyncThunk...
  }
})


export default counterSlice.reducer