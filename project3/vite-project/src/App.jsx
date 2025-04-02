
import './App.css'
import OrderdList from './components/OrderdList'
import ReactFragment from './components/ReactFragment'

function App() {
  const nameList=['Amal','Kamal','Sunil','Rajith','Nimal']


  return (
    <>
      <h1>ho</h1>
      <ReactFragment  itemList={nameList}></ReactFragment>
      <OrderdList itemList={nameList}></OrderdList>
    </>
  )
}

export default App
