
import './App.css'
import Nav from './Components/Nav'

function App() {
  function hello(){
    console.log("Hello 1");
  }
  const hello2=()=>{
    console.log("Hello 2")
  }
  function hello3(name){
    console.log("Hello 3"+ name);
  }


  return (
    <>
      <div className="wrapper">
        <button onClick={hello}>Click 1</button>
        <button onClick={hello2}>Click 2</button>
        <button onClick={
          ()=>{
            console.log(hello3("Buthmika"))
          }
          // hello3("Buthmika")
          }>Click 3</button>
          

      </div>
    </>
  )
}

export default App
