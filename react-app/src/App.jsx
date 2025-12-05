import './css/style.css';
import "./App.css";
import styled from 'styled-components';
import Child from './child';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useRef } from 'react';



function App() {


  // Ref Use Const//
  const nameRef=useRef();
  const passwordRef=useRef()


  const handleForm =(event)=>{
  event.preventDefault();
   const user = document.querySelector('#name').value;
   const password  = document.querySelector('#password').value;
     console.log(user,password);
  }
  const handleFormRef=(event)=>{
    event.preventDefault();
    const user=nameRef.current.value;
    const password=passwordRef.current.value;
    console.log("handleFormRef",user,password);
    
  }
 return <>
 <h3>Uncontrolled Component</h3>
 <form action="" onSubmit={handleForm}>
  <input type="text"  id="name" placeholder='Enter Your Name' />
  <br /><br />
  <input type="password"  id='password' placeholder='Enter Your Password' />
  <button>
    Submit
  </button>
 </form>

 <hr />
 <h3>Uncontrolled Component with useRef</h3>
 <form action="" onSubmit={handleFormRef}>
  <input type="text" ref={nameRef} id="nameRef" placeholder='Enter Your Name' />
  <br /><br />
  <input type="password" ref={passwordRef} id='passwordRef' placeholder='Enter Your Password' />
  <button>
    Submit with Ref
  </button>
 </form>
 </>

  }

export default App;
