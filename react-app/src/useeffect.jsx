import { useEffect, useState } from "react";

function CallOnce(){
    console.log("CallOnce function Called");
    
    const [counter,setCounter]=useState(0)
    const [data,setData]=useState(0)

    function counterFunction(){
        console.log('counterfunction',counter);
    }
      useEffect(()=>{
 counterFunction();

    },[])
    return<>

        <h3>useEffect Hook</h3>
        <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        {/* <button onClick={()=>setData(data+1)}>Data{data}</button> */}
</>
   
}
  
export default CallOnce;