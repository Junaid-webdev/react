import { useRef } from "react"
import UserInput from "./alert";

function App(){
const   inputRef = useRef(null)
const updateInput = ()=>{
inputRef.current.value=1000;
inputRef.current.focus();
inputRef.current.style.color="red";
  
}
  return<>
  <h3>Forwerd Ref</h3>
    <UserInput ref={inputRef}/>
  <button onClick={updateInput}>Update INput Field</button>
  </>
}
export default App;