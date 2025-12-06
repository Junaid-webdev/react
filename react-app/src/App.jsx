import { useId } from "react";


function App(){

  return <>
  <h1>useId Hook</h1>
  <User/>
  <User/>
 
  </>
}


function User(){
const name = useId();
const password = useId();
const terms = useId();
const skills = useId();
  return <>
  
  <form action="">
    <label htmlFor={name}>Enter User Name:  </label>
      <input type="text" id={name} placeholder="Enter Your Name" />
      <br /><br />
      <label htmlFor={password}>Enter Password </label>
      <input type="text" id={password} placeholder="Enter Password" />
      <br /><br />
      <label htmlFor={terms}>Enter Trems </label>
      <input type="text" id={terms} placeholder="Enter trems" />
      <br /><br />
      <label htmlFor={skills}>Trems and Condition  </label>
      <input type="checkbox" id={skills} placeholder="Enter skills" />
  </form>

  </>
}
export default App;