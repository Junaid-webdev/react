import { useEffect } from "react";

const Counter = ({count,data})=>{

   const  handelCounter=()=>{
    console.log('handlecounter called');
    }

    const handleData=()=>{
        console.log("handleData called  ");
        
    }
  

    useEffect(()=>{
  handelCounter();

    },[])

    useEffect(()=>{
        handleData();
    },[data])
  
return<>

<h3>Counter Components{count}</h3>
<h3>Data Components{data}</h3>


</>
}
export default Counter;