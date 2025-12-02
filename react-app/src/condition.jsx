import { useState } from "react";


function User(){

    const [count,setCount]=useState(1);
    return <>
    
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Count</button>
    {
        count==0?<h1>Condition 0:</h1>
        :count==1?<h1>Condition 1:</h1>
        :count==2?<h1>Condition 2:</h1>
        :count==3?<h1>Condition 3:</h1>
        :count==4?<h1>Condition 4:</h1>
        :<h1>Other Condition</h1>
    }
    </>
}
export default User;