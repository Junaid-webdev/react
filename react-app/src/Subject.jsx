import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject(){

const subject = useContext(SubjectContext)

   
  return<>
 
<div style={{ backgroundColor:"#bf2273", padding:"10px",color:"white" }}>
  <h2>Subject Component</h2>
  <h4>This is change subject: {subject}</h4>
</div>
  </>
}
export default Subject;