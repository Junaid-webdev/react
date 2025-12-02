import { useState } from "react";
import User from "./User";
import Wrapper from "./wrapper";

function App(){
  const [val,setVal]=useState();

  return <>

    <h1>Get Input Field</h1>
    <input value={val} type="text"onChange={(event)=>setVal(event.target.value)} placeholder="Enter Your Name "/>
    <h4>{val}</h4>
    <button onClick={()=>setVal("")}>Clear Value</button>
  </>
}
export default App;