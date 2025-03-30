import React from 'react'

function ArrayReduce({numberList}) {
  return (
    <div>
            <h1>Reduced Number List(Reduce)</h1>
      <ul>
        {
          numberList.map((name,index)=>{
            return(
              <li key={index}>{name}</li>
            )
          })
      
          
        }
      </ul>
    </div>
  )
}

export default ArrayReduce
