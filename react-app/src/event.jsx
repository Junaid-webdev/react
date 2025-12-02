import { useState } from "react";


function Call(){
    function callFun(){
        alert("Function Called")
    }
      const [fruit,setFruit]=useState("Apple");
    const handleFruit=()=>{
        setFruit("Banana")

    }
   
    return<>
   
    <h3>Event and function call</h3>
    <h3>State</h3>
    {/* <button onClick={callFun}>Click Me</button> */}
    <h1>{fruit  }</h1>
    <button onClick={handleFruit}>Change Fruit Name</button>
    
    </>
}

export default Call;