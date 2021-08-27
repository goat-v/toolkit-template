import { counterSlice } from "./counterSlice"

// reducerを呼び出すActionを定義するときはactions.jsに書く？
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(counterSlice.actions.incrementByAmount(amount))
  }, 2000)
}