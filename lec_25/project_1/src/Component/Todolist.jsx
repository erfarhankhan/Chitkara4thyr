import React, { useState } from 'react'


const Todolist = () => {
    const arr = [
        {
            title: "raju", 
            disc: "123"
        },
        {
            title: "rajpal", 
            disc: "999"
        },
        {
            title: "rampal", 
            disc: "999"
        },
    ]
    const [array,setarray]=useState(arr);
  return (
   
    <>
        <Todo todos={array} />
        <Addtodo  array={array} setarray={setarray}/>
        <h1>todolist</h1>
        {/* <Todo title="john1" disc="doe"/>
        <Todo title="john1" disc="doe"/>
        <Todo title="john1" disc="doe"/> */}
    </>
  )

}


function Addtodo({array,setarray}) {
    const [inp1,setinp1]=useState("")
    const [inp2,setinp2]=useState("")
 
        function changeinp1(e) {
            setinp1(e.target.value);
        }
        function changeinp2(e) {
            setinp2(e.target.value);
        }
        
        function handlerAdd() {
            setarray([...array ,{title:inp1,disc:inp2}])
            
        }
    return(
        <div>
        <input onChange={changeinp1} type="text" value={inp1} />
        <input onChange={changeinp2} type="text" value={inp2} />
        <button onClick={handlerAdd}>click me</button>
        </div>
    )
}
function Todo({todos}) {
    return(
        todos.map((item,index)=>{
            
            return(
                 <div key={index} style={{border:"2px solid #eee"}}>
                   <h3>name: {item.title}</h3>
                   <h3>disc:{item.disc}</h3>
                 </div>
            )
        })
       
    )
}

export default Todolist
