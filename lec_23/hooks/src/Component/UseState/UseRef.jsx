

import React, { useState,useEffect,useRef } from 'react'

const UseRef = () => {
   
//     const [myData,setData]=useState("");
//     const [count,setCount]=useState();

   
//     useEffect(()=>{
//         setCount(count+1)
//     })

// //    let senewdata=((e)=>{
// //         // const newVal = e.target.value;
// //         // setData(newVal)
// //     })


//==============================================
        const [myData,setData]=useState("");
        const count = useRef(10); //it create mutable  var , not re render the comp

        useEffect(()=>{
                    count.current = count.current +1;
                })

//===========================================
      return (
        <>
            <input type="text"
            value={myData}
            onChange={(e)=>setData(e.target.value)}
            // onChange={senewdata}
             />
            <p>render Count:{count.current}</p>
        </>
      )
}

export default UseRef
