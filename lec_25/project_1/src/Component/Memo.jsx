import React, { memo, useState } from 'react'
function Mymemo({name}){
    return (
        <div>
            <h1>name:{name}</h1>
        </div>
    )
    }



// let Mymemo = memo(function({name}){
//     return (
//         <div>
//             <h1>name:{name}</h1>
//         </div>
//     )
//     })
function Memo () {

    let [title,settitle]=useState("hf");
    function handler(){
        settitle(Math.random()*10)
    }
   
  return (

    <div>
      <Mymemo name={title}/>
      <button onClick={handler}>clickme </button>
      <Mymemo name="farhan1"/>
      <Mymemo name="farhan2"/>
      <Mymemo name="farhan3"/>
    </div>
  )
}

export default Memo
