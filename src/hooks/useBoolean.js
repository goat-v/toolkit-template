import React, { useCallback, useState } from "react"


export default function useBoolean(initialState=false) {
  const [value, setValue] = useState(initialState)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  return [value, setTrue, setFalse]
}