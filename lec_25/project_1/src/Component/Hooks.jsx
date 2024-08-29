import React, { useState } from 'react'

const Hooks = () => {
//     let name = "abz";
//  const handler=()=>{
//     console.log(name);
//     name="sonu"
//     console.log(name);
//  }
//   return (
//     <div>
//       <h1>name:{name}</h1>
//       <button onClick={()=>{handler()}}>click me </button>
//     </div>
//   )
// now here hooks 
   const [name,setname]=useState("abz");
   console.log(name);
   const handler=()=>{
    // console.log(name);
    setname("sonu")
    console.log(name);
   }
return(
    <>
    <div>
       <h1>name:{name}</h1>
       <button onClick={()=>{handler()}}>click me </button>
    </div>
    </>
)
}

export default Hooks
