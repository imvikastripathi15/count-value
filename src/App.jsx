import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(0)
 //let Counter = 10
   
 const addValue =()=>{
if(Counter<20){
  Counter = Counter+1
  setCounter(Counter)
}

 } 

 const RemoveValue = ()=>{
  if(Counter > 0  ){
    setCounter(Counter-1)
  
  }
  
 }

  return (
    <>
      <h1>React</h1>
      <h2>Count Till 20 </h2>
      <h3>Count {Counter}</h3>
      <button  onClick={addValue}>Add Value{Counter}</button>
      <br />
      <button onClick={RemoveValue}> Remove Value{Counter}</button>
  
    </>
  )
}

export default App
