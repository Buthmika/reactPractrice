


import './App.css'
import ArrayFilter from './components/ArrayFilter';
import ArrayMap from './components/ArrayMap'
import ArrayReduce from './components/ArrayReduce';
const names=['React','Vue','Angular','Svelte','Ember'];
const numbers=[1,2,3,4,5,6,7,8,9,10];


function App() {


  return (
    <>
      <h1>hi</h1>
      <ArrayMap nameList={names}></ArrayMap>
      <ArrayFilter nameList={names}></ArrayFilter>
      <ArrayReduce numberList={numbers}></ArrayReduce>
    </>
  )
}

export default App
