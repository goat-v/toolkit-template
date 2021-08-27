// createSliceでimportするReducersをここで定義する

export const incrementReducer = (state) => {
  state.value += 1
}

export const decrementReducer = (state) => {
  state.value -= 1
}

export const incrementByAmountReducer = (state, action) => {
  state.value += action.payload
}
