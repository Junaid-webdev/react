import { useState } from "react";
import College from "./College1";
import { SubjectContext } from "./ContextData";

function App(){

  const [subject,setSubject]=useState('')

  return <div style={{ backgroundColor:"yellow", padding:"20px", }}>
    <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
      <option value="">Select Subject </option>
      <option value="Math">Math</option>
      <option value="English">English</option>
      <option value="Hindi">Hindi</option>
      <option value="History">History</option>
    </select>
 <SubjectContext.Provider value={subject}>
   <h2>Context API</h2>
  <College/>
 </SubjectContext.Provider>
 <br />
 <button onClick={()=>setSubject('')}>Clear Subject</button>
</div>


 
}
export default App;