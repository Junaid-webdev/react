import { useEffect, useState } from "react";
import User from "./api";
import Clock from "./Clock";
import College from "./College";

function App(){
const collegeData = [
  {
    name: 'IET Alwar',
    city: "Alwar",
    website: "www.IET.com",
    student:[
      {
      name: "Junaid",
      age: 21,
      email: 'anil@test.com'
      },
        {
      name: "sam",
      age: 21,
      email: 'sam@test.com'
      },
        {
      name: "peeter",
      age: 23,
      email: 'peeter@test.com'
      }

    ]
  },
  {
    name:"IIT Delhi",
    city: "Delhi",
     website: "www.IIT.com",
      student:[
      {
      name: "Junaid",
      age: 21,
      email: 'anil@test.com'
      },
        {
      name: "sam",
      age: 21,
      email: 'sam@test.com'
      },
        {
      name: "peeter",
      age: 23,
      email: 'peeter@test.com'
      }
    ]
  },
  {
    name: "KCIET Hisar",
    city: "Hisar",
     website: "www.KCIET.com",
      student:[
      {
      name: "Junaid",
      age: 21,
      email: 'anil@test.com'
      },
        {
      name: "sam",
      age: 21,
      email: 'sam@test.com'
      },
        {
      name: "peeter",
      age: 23,
      email: 'peeter@test.com'
      }
    ]
  }
]
  
  return <>
  <h2>Nasted Loop in React JSX</h2>
 {
  collegeData.map((college,index)=>(
    <div key={index}>

     <College   college={college}/>
    </div>
  ))
 }
  
  </>
}

export default App;
