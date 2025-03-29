import React from 'react'


function Arraymap({nameList}) {
  return (
    <div>
            <h1>Full Name List(Map)</h1>
            <ul>
                {
                  nameList.map((name,index)=>{
                        return <li key={index}>{name}</li>
                  })
                        
                  }
                  
            </ul>
            <h1>Number List(Map)</h1>
            <ul>
                {
                  nameList.map((numbers,index)=>{
                        return <li key={index}>{numbers}</li>
                  })
                        
                  }
            </ul>
    </div>
  )
}

export default Arraymap
