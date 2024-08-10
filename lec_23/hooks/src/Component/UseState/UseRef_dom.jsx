import React, { useRef, useState } from 'react'


const UseRef_dom = () => {
    const [myData,setData]=useState("");
    const InputElm = useRef(10); //it create mutable  var , not re render the comp

    let Change=()=>{
        console.log(InputElm);
        console.log(InputElm.current);
        InputElm.current.style.backgroundColor="#eeee";
        // InputElm.current.style.backgroundColor = "red"
        
    }


//===========================================
  return (
    <>
        
        <input type="text"
        ref={InputElm}
        value={myData}
        onChange={(e)=>setData(e.target.value)}
        // onChange={senewdata}
         />
        <button onClick={Change}> clickme   </button>
    </>
  )
}

export default UseRef_dom