import { useDispatch } from "react-redux"
import { counterSlice } from "./counterSlice"
import { fetchContentOperation } from "./operations"

// Counterの状態を呼び出すためのカスタムフック
export default function useCounter() {
  const dispatch = useDispatch()
  const { actions } = counterSlice

  const increment = () => dispatch(actions.increment())
  const decrement = () => dispatch(actions.decrement())

  const incrementAsync = (amount) => {
    setTimeout(() => {
      dispatch(actions.incrementByAmount(amount));
    }, 1000);
  };

  const fetchContent = () => dispatch(fetchContentOperation())

  return { increment, decrement, incrementAsync, fetchContent }
}