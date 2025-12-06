import { useState } from "react";


function App(){
const [pending,setpending]=useState(false);

const handleBtn = async()=>{
  setpending(true);
 await new Promise(res=>setTimeout(res,2000))
 setpending(false) 
}
  return<>
  <h2>useTransition Hook in react js</h2>
  <button disabled={pending} onClick={handleBtn}>Click</button>
  </>
}
export default App;