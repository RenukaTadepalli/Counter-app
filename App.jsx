import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App = () => {
useEffect(()=>{
  document.title="counter"
})
  const [count,setCount]=useState(0)
  const [inputValue,setInputValue]=useState("");
  const addHandler=()=>{
    setCount(count+inputValue)
    setInputValue("");
  }
  const removeHandler=()=>{
    setCount(count-inputValue);
    setInputValue("")
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 flex-column count'>
      <marquee className="text-white fs-1 mb-3"><b>Counter App</b></marquee>
      <input className='input rounded shadow-lg' type="number"  value={inputValue} 
  onChange={(e) => setInputValue(parseInt(e.target.value))} placeholder='Enter Number'/>
     <h1 className='text-white fs-1 mt-1'>{count}</h1>
     <div>
     <button className='button1' onClick={()=>setCount(count+1)}>Increment</button>
     <button className='button2' onClick={()=>setCount(0)}>Reset</button>
     <button className='button3' onClick={()=>setCount(count-1)}>Decrement</button>
     </div>
     <div>
      <button onClick={addHandler} className='button4'>Add</button>
      <button onClick={removeHandler} className='button5'>Remove</button>
     </div>
    </div>
  )
}

export default App
