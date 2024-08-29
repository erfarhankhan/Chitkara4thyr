import React from 'react'
// ye pr hai 
const Todone = () => {
    const arr =[
        {
            title:"title 1",
            disc:"movie 1"
        },
         {
            title:"title 2",
            disc:"movie 2"
        },
        {
            title:"title 3",
            disc:"movie 3"
        },
    ]
  return (
    <div>
      <List todos={arr}/>
    </div>
  )
}

export default Todone

function List({todos}) {
   return(
    todos.map((item, index)=>{
        return(
            
                <>
                <div key={index} style={{border:"2px solid #eee", margin:"10px"}}>

                <h1>name:{item.title}</h1>
                <h2>disc:{item.disc}</h2>

                
                </div>
                </>
           
        )
    })
   )
}
