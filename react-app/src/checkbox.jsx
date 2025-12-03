import { useState } from "react";

function Skills(){
    const [skills,setSkills]=useState([]);

    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked)

        if(event.target.checked){
            setSkills([...skills,event.target.value]);
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)]);
        }
    }
    return<>
    <h3>Slecet Your Skills</h3>
    <input type="checkbox" onChange={handleSkills} id="php" value="php"/>
    <label htmlFor="php">PHP</label>
    <br />
    
    <input type="checkbox" onChange={handleSkills} id="c++" value="c++" />
    <label htmlFor="c++">C++</label>
    <br />
  
    <input type="checkbox" onChange={handleSkills} id="python" value="python"/>
    <label htmlFor="python">PYTHON</label>
    <br />
    <input type="checkbox" onChange={handleSkills} id="java" value="java" />
    <label htmlFor="java">JAVA</label>
    
    <h3>{skills.toString()}</h3>

    
    </>
}
export default Skills;