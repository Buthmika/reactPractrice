import './App.css'
function App() {
  const firstName="Buthmika";
  const secondName="Menushan"
  const surName="Dampitige";
  const a=10;
  const getFunction=(f,m,s)=>{
      return `${f} ${m} ${s}`;
  }

  return (
    <>
      <div className="cont">
        <h1>React App</h1>
        <p>{`${firstName}  ${secondName}`} {5*a}</p>
        <p>{a>50?"greater":"lesser"}</p>
        <p>Full name {getFunction("Methula","Sethmika","Dampitige")}</p>
      </div>
    </>
  )
}

export default App
