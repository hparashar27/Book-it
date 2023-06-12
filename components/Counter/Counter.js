import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const increment = ()=>{
     setCount(count++)
    } 
    const decrement = ()=>{
        setCount(count--);
    }
  return (
    <>
    <Button onClick={increment}>increment</Button>
    <Button onClick={decrement}> decrement</Button>
    <div>Counter:{count}</div>

    </>
  )
}

export default Counter