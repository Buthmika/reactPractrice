import React from 'react'

function ArrayForEach({nameList}) {
      const newNameList=[]
  return (
    <div>
      <hr />
      <h1>Full Name List(forEach)</h1>
      <ul>
            {nameList.forEach((name,index)=>(<li key={index}>{name}</li>))}
      </ul>
    </div>
  )
}

export default ArrayForEach
