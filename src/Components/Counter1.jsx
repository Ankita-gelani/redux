import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from '../redux/slice/counterSlice';
import { increment as numberIncrement } from '../redux/slice/numberSlice';

function Counter1() {
    let count = useSelector((state) => state.counter)
    console.log(useSelector(state => state))
    const dispatch = useDispatch();
  return (
    <>
        <div>{count}</div>
        <button onClick={() => dispatch(incrementByAmount(20))}>Click</button>
        <button onClick={() => dispatch(numberIncrement())}>Number Click</button>
    </>
  )
}

export default Counter1