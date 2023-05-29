import React, { useState }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

function Counter2() {
  const count = useSelector(state => state.counter.count);
  // const [ count, setCount]= useState(1);
  const dispatch = useDispatch();

  return (
    <>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <h1>{count}</h1>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Counter2;