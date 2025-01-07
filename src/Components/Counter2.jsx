import React from 'react'
import { useSelector } from 'react-redux'

function Counter2(props) {
    let count = useSelector((state) => state.counter)
  return (
    <div>Counter2 {count}</div>
  )
}

export default Counter2