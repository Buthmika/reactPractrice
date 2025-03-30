


import './App.css'
import ArrayFilter from './components/ArrayFilter';
import ArrayMap from './components/ArrayMap'
const names=['React','Vue','Angular','Svelte','Ember'];

function App() {


  return (
    <>
      <h1>hi</h1>
      <ArrayMap nameList={names}></ArrayMap>
      <ArrayFilter nameList={names}></ArrayFilter>
    </>
  )
}

export default App
