import React, { useState } from 'react'

const Interview = () => {
    const [count, setcount]=useState(0)
    // function handler(){
    //     setcount(count+1) //async
    //     setcount(count+1)
    //     setcount(count+1)
    // }
    function handler(){
        setcount((count)=>count+1) //
        setcount((count)=>count+1) //
        setcount((count)=>count+1) //
        
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handler}>click</button>
    </div>
  )
}

export default Interview
