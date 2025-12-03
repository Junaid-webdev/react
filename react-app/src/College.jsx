import Student from "./Student";

const College=({college})=>{
    return <>
    <div style={{ backgroundColor:"#ccc", padding:"20px",borderBottom:"2px solid black",margin:"20px", borderRadius:"10px"   }}>
        <h3>{college.name}</h3>
        <ul>
           <li><h3>City: {college.city}</h3></li>
           <li><h3>website: {college.website}</h3></li>
             <Student  student={college.student}/>
        </ul>
    </div>
  
    
    </>
}
export default College;