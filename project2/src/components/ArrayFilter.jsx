import React from 'react'

function ArrayFilter({nameList}) {
      const filterdNames=nameList.filter((name)=>(name.startsWith('A')));
  return (
    <div>
            <h1>Filterd Name List(Filter)(Map)</h1>
      <ul>
        {
          filterdNames.map((name,index)=>{
            return(
              <li key={index}>{name}</li>
            )
          })
      
          
        }
      </ul>
    </div>
  )
}

export default ArrayFilter
