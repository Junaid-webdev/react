import './css/style.css';
import "./App.css";
import styled from 'styled-components';
import Child from './child';


function App() {
  const Heading = styled.h3 `color:red; border:1px solid #ddd; `
  const Btn = styled.button `
  pdding: 10px;
  border:none;
  background:red;
  color:white;
  cursor:pointer;
  margin:10px;
  width:100px;
  height100px;
  `
 return <>

<Heading>Hello</Heading>
<Btn>Login</Btn>
 </>

  }

export default App;
