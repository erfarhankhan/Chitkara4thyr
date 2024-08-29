import React, { useState } from 'react'

const Tooo = () => {
    const arr = [
        {
            title:"hf",
            disc:"123"
        },
        {
             title:"hf",
             disc:"123"
        },
        {
            title:"hf",
            disc:"123"
       }
    ]
    const [array,setarray]=useState(arr);
  return (

    <div>
      <Comp props={array}  />
      <h1>hello react js Tooo</h1>
      <Addtodo array={array} setarray={setarray}/>
    </div>
  )
}

export default Tooo
function Addtodo({array,setarray}) {
    const [inp1,setinp1]=useState("");
    const [inp2,setinp2]=useState("");
    function changeinp1(e) {
        setinp1(e.target.value)
    }
    function changeinp2(e) {
        setinp2(e.target.value)
    }
    function handlerAdd(){
        setarray([...array, {title:inp1,disc:inp2}])
    
    }
    return(
        <div>
            <input onChange={changeinp1} type="text" value={inp1} />
            <input onChange={changeinp2} type="text" value={inp2} />
            <button onClick={handlerAdd}>click me</button>
        </div>
    )
}

function Comp({props}) {

    return(
        props.map((p,index)=>{
            return(
                

                <div key={index}>
                <h1>title {p.title}</h1>
                <h1>disc {p.disc}</h1>
                </div>
               
            )
        })
    )
  
}




