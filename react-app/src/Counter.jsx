import { useState } from "react"

const Counter=()=>{
    const [count,setCount]=useState(0)
    const [rCounter,setrCounter]=useState(10)
    return<>
    <h1>Counter:0{count}</h1>
    <button onClick={ () =>setCount(count + 1)}>Update Counter</button>
    <h1>Reverse Counter {rCounter}</h1>
    <button onClick={ () =>setrCounter(rCounter - 1)}>Update Counter</button>
    </>
}
export default Counter;