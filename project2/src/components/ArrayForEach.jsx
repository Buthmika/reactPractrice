import React from 'react'

function ArrayForEach({nameList}) {
  return (
    <div>
      <hr />
      <h1>Full Name List(Map)</h1>
      <ul>
            {nameList.map((name,index)=>(<li key={index}>{name}</li>))}
      </ul>
    </div>
  )
}

export default ArrayForEach
