import { useEffect, useState } from "react";
import User from "./api";
import Clock from "./Clock";

function App(){

  const [color,setColor]=useState('white');

  return <>
  <select onChange={(event)=>setColor(event.target.value)}>
    <option value={'red'}>Red</option>
    <option value={'blue'}>Blue</option>
    <option value={'green'}>Green</option>
  </select>
  {/* <User/> */}
  <Clock color={color}/>
  
  </>
}

export default App;
