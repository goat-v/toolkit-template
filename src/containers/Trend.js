import React, { useEffect } from 'react'

const Trend = () => {
  useEffect(() => {
    document.title = "Trend page"
  }, [])

  return (
    <>
      <h1>Trend</h1>
    </>
  )
}

export default Trend