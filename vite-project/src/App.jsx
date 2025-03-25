import './App.css'
import Arraymap from './Components/Arraymap'
const name=['React','Vue','Angular','Svelte','Ember'];
const numbers=[1,2,3,4,5,6,7,8,9,10];
function App() {
  
  

  return (
    <>
      <div className="cont">
        <h1>React App</h1>
        <Arraymap nameList={name}/>

        
      </div>
    </>
  )
}


export default App
