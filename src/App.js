import {useState} from 'react'
import Input from './components/Input'
import Numbers from './components/Numbers'
import Operators from './components/Operators'
import './App.css'
import './css/mobile.css'

function App() {
  const [firstInput,setFirstInput] = useState(true)
  const [isOpen, setIsOpen]=useState(false)
  const [isPercent, setIsPercent] = useState(false)
  const [expression,setExpression] = useState('')

  const handleClick = (ev) =>{
    let value =(ev.target.innerHTML)
    if(value==="&lt;=="){
      const newExp = expression.substring(0,expression.length-1)
      setExpression(newExp)
    }else if(value==="AC"){
      setExpression('')
      setIsOpen(false)
      setIsPercent(false)
    }else if(value==="x"){
      value="*"
      setExpression(expression+value)
    }else if(value==="%"){
      setIsPercent(true)
      setExpression(expression+value)
    }else if(value==="()"){
      setExpression('')
      if(isOpen){
        value=")"
        setIsOpen(false)
      }else{
        value="("
        setIsOpen(true)
      }    
      if(firstInput){
        setExpression(value)
        setFirstInput(false)
      } 
      else setExpression(expression+value)  
    }else{
      if(firstInput){
        setExpression(value)
        setFirstInput(false)
      }else{
        setExpression(expression+value)
      }
    }
  }
  const handleEqual=()=>{
    let val=0;
    console.log(expression)
    if(isPercent){
      const str=expression.split('%');
      let left=str[0]
      let right=str[1]
      left = eval(left)
      right= eval(right)
      val = (left*right)/100
      setIsPercent(false)
    }else{
      val = eval(expression)
    }
    setExpression(val)
    setFirstInput(true)
  }


  return (
    <div className="App">
      <Input expression={expression} />
      <div className="button-container">
        <Numbers handleClick={handleClick}/>
        <Operators handleClick={handleClick} handleEqual={handleEqual}/>
      </div>
    </div>
  );
}

export default App;
