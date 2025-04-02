import React from 'react'

function ReactFragment({items}) {
  return (
    <div>
      {items.map((item,index)=>(<li key={index}>{item}</li>))}
    </div>
  )
}

export default ReactFragment
