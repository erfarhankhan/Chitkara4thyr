import React, { useEffect, useState } from "react";

function Counter1({number}) {
    // useEffect(()=>{
    //     console.log("useEffect:conponent ===>render mounting");
    // })
    // useEffect(()=>{
    //     console.log("useEffect:conponent ===>updating");
    // },[number])
    useEffect(()=>{
        console.log("useEffect:conponent ===>updating");
        return(()=>{
            console.log("funtion Component :Removed");
            
        })
    },[number])
            

    
    return (
        <>

                <h1>{number}</h1>
        </>
    )
}
export default  Counter1;