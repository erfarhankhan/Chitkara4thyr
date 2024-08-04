import React from 'react'
import Product from './Product' // file come product.jsx

const Shoppinglist = () => {
    const pro = [   
        {
            id:'0',
            name:"window",
            imgUrl:"https://th.bing.com/th?id=OIP.lPGXgBSyy846n6lU3UohQQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            price:'14000'
        },
        {
            id:'1',
            name:"Macbook Pro",
            imgUrl:"https://th.bing.com/th?id=OIP.2M2XH1GvLla2pA1RQwzP0AHaGc&w=268&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            price:'20000',
        },
        {
            id:'2',
            name:"IPhone",
            imgUrl:"https://th.bing.com/th?id=OIP.VnxEHCdzMaHx7x69eqaO9QHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            price:'10000'
        }
    ]
  return (
 <>
  {
    pro.map((p)=>{    // map fun use 
        return  <Product  // here product.jsxfile  comp  are use
        key={p.id}   
        name={p.name}
        imgUrl={p.imgUrl}
        price={p.price} />
    })
  }
 </>
  )
}

export default Shoppinglist
