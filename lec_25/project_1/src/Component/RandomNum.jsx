import React from 'react'

const RandomNum = () => {
    const random = Math.floor(Math.random()*10);
    // console.log(random +"ran");
   let el;
    if (random===1) {
        el ="winner"
    } else {
        el ="losser"
    }
  return (
    <>
      <p>hello random `${el} hello random number ${random}`</p>
      {
      Math.floor(Math.random()*10)===7? <h2>winner</h2>: <h2>losser</h2> 
      }
    </>
  )
}

export default RandomNum;