import React from 'react'
import "./Product.css"


const Product = (p) => {
  return (
    <div>
      <article className='product'>
        <h1>name:{p.name}</h1>
        <img src={p.imgUrl} alt="" />
        <p>price:{p.price}</p>
      </article>
    </div>
  )
}

export default Product
