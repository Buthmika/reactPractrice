import React, { useState } from 'react'

function UseState() {
      // let num1=2
      const[num1,setnum1]=useState(2)
      const[count,setcount]=useState(0)
      function handleClick() {
            // num1=3
            setnum1(3)
            
      }
      const decrementFun=()=>{
            setcount(count-1)

      }
      const incrementFun=()=>{
            setcount(count+1)
            
      }
  return (
    <div>
      <div className="wrapper">
            <button onClick={handleClick}>Click Me</button>
            <p>{num1}</p>
            <p>Counter</p>
            <button onClick={decrementFun}>-</button>
            <button onClick={incrementFun}>+</button>
            <p>{count}</p>
            
      </div>
    </div>
  )
}

export default UseState
