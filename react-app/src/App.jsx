// import { useEffect, useState } from "react";
import { useState } from "react";
import Counter from "./hook";
import CallOnce from "./useeffect";


function App(){

  const [count,setCount]=useState(0);
  const [data,setData]=useState(0)
  return <>
  
{/* <CallOnce/> */}
  <Counter count={count} data={data}/>
  <button onClick={()=>setCount(count+1)}>Counter</button>
  <button onClick={()=>setData(data+1)}>Data</button>
  </>
}

export default App;
