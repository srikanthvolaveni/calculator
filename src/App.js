import React,{useState} from 'react'
import './App.css'
const App = () => {
  const [input,setInput] = useState('')
  const [result,setResult] = useState(0)

  const onChangeHandler = event =>{
    setInput(event.target.value)
  }

  const onClickResult = () =>{
    setResult(eval(input))
  }

  return (
    <div>
      <center>
        <input size="40" type="text" value={input} onChange={onChangeHandler} />
        <br />
        <button className='button' type="button" onClick={onClickResult}>Result</button>
        <h2>Result is: {result}</h2>

        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button> <br />

        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button>
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'0')}>0</button> <br />

        <button onClick={()=>setInput(input+'+')}>+</button>
        <button onClick={()=>setInput(input+'-')}>-</button>
        <button onClick={()=>setInput(input+'*')}>*</button>
        <button onClick={()=>setInput(input+'/')}>/</button>
        <button onClick={()=>{setInput('') 
                               setResult(0)
                               }}>clr</button>
      </center>
    </div>
  )
}

export default App