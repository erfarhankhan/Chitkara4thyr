import React, { memo, useState } from 'react'

const Countertwo = () => {
 
  const [count, setCount]=useState(0);


  function handler(){
    setCount(count+1);
  }
    // memo((count)=>{
    //   return count;
    // })
    memo(function(count) {
      return (
        <div>
          <h1>hello counter 2 ==={count}</h1>
          <button onClick={handler}>clickme</button>
        </div>
      )
    })


}

export default Countertwo
