import './css/style.css';
import "./App.css";
import styled from 'styled-components';
import Child from './child';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useRef } from 'react';



function App() {
  const inputhandler = ()=>{
    console.log(inputController); 
    inputController.current.focus();
    inputController.current.style.color='red';
    
  }
  const h1Ref = useRef(null);
  const inputController=useRef(null);
  const togglehandler = ()=>{
  if(  inputController.current.style.display!='none'){
    inputController.current.style.display='none'
  }else{
    inputController.current.style.display='inline'
  }
  }
  const h1handler = ()=>{
    h1Ref.current.style.color='yellow';
  }
 return <>
 <h3>Useref</h3>
 <button onClick={togglehandler}>Toggle</button>
 <input ref={inputController} type="text" placeholder='Enter Your Name' />
 <button onClick={inputhandler}>Click</button>

 <h1 ref={h1Ref}>Hello</h1>
 <button onClick={h1handler}>Handler</button>
 </>

  }

export default App;
