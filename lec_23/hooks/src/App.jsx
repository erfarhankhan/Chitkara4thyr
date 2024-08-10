import { useState } from 'react'

import './App.css'
import StateTuturial from './Component/UseState/StateTuturial';
// import UseRef from './Component/UseState/UseRef';
import UseRef_dom from './Component/UseState/UseRef_dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StateTuturial /> */}
      {/* <UseRef /> */}
      <UseRef_dom />
    </>
  )
}

export default App
