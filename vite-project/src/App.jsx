
import './App.css'
import Nav from './Components/Nav'

function App() {
  function hello(){
    console.log("Hello 1");
  }
  const hello2=()=>{
    console.log("Hello 2")
  }


  return (
    <>
      <div className="wrapper">
        <button onClick={hello}>Click 1</button>
        <button onClick={hello2}>Click 1</button>
      </div>
    </>
  )
}

export default App
