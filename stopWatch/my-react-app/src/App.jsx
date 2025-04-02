import { useState } from "react"

function App() {
  const[time,setTime]=useState(0)
  

  return (
    <>
      <h1>Stop Watch</h1>
      <div>
        <span>{("0"+Math.floor((time/60000)%60))}:</span>
        <span>{("0"+Math.floor((time/60000)%60))}:</span>
        <span>{("0"+((time/10)%100))}</span>

      </div>
    </>
  )
}

export default App
