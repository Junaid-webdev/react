import { useState, useTransition } from "react";


function App(){
const [pending,startTransition] = useTransition();

const handleBtn = async()=>{
startTransition(async()=>{
    
 await new Promise(res=>setTimeout(res,5000))
})

}
  return<>
  <h2>useTransition Hook in react js</h2>
  {
    pending?
    <img style={{ width:"100px" }} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
    :null
  }
  <button disabled={pending} onClick={handleBtn}>Click</button>
  </>
}
export default App;