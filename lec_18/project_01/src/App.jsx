import React from 'react'

const App = () => {
  var myname = "john";
  var lname = " doee";
  return (
    <div>
      <h1>hello js {myname + lname}</h1>
      <h1>hello js {`${myname}and my last name is ${lname} `}</h1>
      <h2> my age {16}</h2>
    </div>
  )
}

export default App
