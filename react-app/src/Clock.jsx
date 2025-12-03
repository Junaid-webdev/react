import { useEffect, useState } from "react";

const Clock=({color})=>{
    const [time,setTime]=useState(0);

    useEffect(()=>{
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);
    },[])
    return  <>
    
    <h1>Clock</h1>
    <h1
    style={{ color,background:'#000',width:'280px', padding:'20px', borderRadius:'8px', margin:'40px'  }} 
    >{time}</h1>
    </>
}
export default Clock;
