import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0);
    const handler=()=>{
        setCount(count+1)
    }
    const handler2=()=>{
        if (count !=0) {
            setCount(count-1)
        }else{
            setCount(count )
        }
    }
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handler}>click + </button>
      <button onClick={handler2}>click - </button>
    </div>
  )
}

export default Counter
