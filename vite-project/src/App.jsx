import './App.css'
function App() {
  
  const a=10;

  return (
    <>
      <div className="cont">
        <h1>React App</h1>
        <p>Buthmika menushan {5*a}</p>
        <p>{a>50?"greater":"lesser"}</p>
      </div>
    </>
  )
}

export default App
