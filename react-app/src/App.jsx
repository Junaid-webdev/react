import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import  User from './condition'
import Sum from './props';
import College from './college';
import Student from './student';

function App(){
  // let name = "sameer"
  // let age = 21;
  // let email = "junaid@gmail.com";
  let userObject={
    name: "Sameer",
    age: 17,
    city: "Nagaur",
    address:"nsndsa",
    email: "sameer@test.com"

  }
  let userObject1={
    name: "peter",
    age: 17,
    city: "palri jodha",
    address:"sdfgh",
    email: "peter@test.com"

  }

  let CollgeName = ['IET','IIT','NIT','MIT','DU'];

  const [student,setStudent]=useState();
  
  return<>
  
 
  {/* <Sum name="junaid" age={21} email="junaid@gmail.com"/> */}
  <College College={CollgeName}/>
  {student &&<Student name={student}/>}
  <button onClick={()=>setStudent("Sameer")}>Update Name</button>
  <Sum user={userObject}/>
  <Sum user={userObject1}/>

  
  
  </>
}

export default App;