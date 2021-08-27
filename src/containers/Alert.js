import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import useCounter from "../ducks/counter/useCounter"


const Alert = () => {
  const count = useSelector((state) => state.counter.value)
  const content = useSelector((state) => state.counter.contents)
  const isLoading = useSelector((state) => state.counter.isLoading)

  const { increment, decrement, incrementAsync, fetchContent } = useCounter()

  useEffect(() => {
    document.title = "Alert page"
  }, [])

  return (
    <>
      <h1>Alert</h1>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={() => incrementAsync(3)}>+3(setTimeout)</button>
      <button onClick={fetchContent}>fetch content</button>
      { isLoading &&  <div>Progress...</div> }
      <table border="1px">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          { content.map((c, index) => 
            <tr key={index}>
              <td>{c.id}</td>
              <td>{c.title}</td>
              <td>{c.body}</td>
            </tr>
          )}
        </tbody>

      </table>
    </>
  )
}

export default Alert