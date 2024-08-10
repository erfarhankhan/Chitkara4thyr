import React, { useState } from 'react';


const StateTuturial = () => {
    const [inputValue,newChangeValue]=useState("hf");

    

    let onChange =(event) =>{
            const newVal = event.target.value;
            newChangeValue(newVal)
    }
  return (
    <>
        <input type="text" value={inputValue}  placeholder='Type Something' onChange={onChange} />
        {/* <input type="text" value={inputValue}  placeholder='Type Something'  /> */}        
    </>
  )
}

export default StateTuturial