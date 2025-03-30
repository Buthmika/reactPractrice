import React from 'react'

function ArrayReduce({numberList}) {
      const sum=numberList.reduce((total,num)=>(total+num));
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
      <hr />
      <p>{sum}</p>
    </div>
  )
}

export default ArrayReduce
