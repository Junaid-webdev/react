import { useState } from "react";
import Skills from "./checkbox";
import Radio from "./radiobtn";
import Loop from "./loop";
import getUsresData from "./api";


function App(){
//  const userData = [
//         {
//             name: "Junaid",
//             email: "junaid@test.com",  
//             age: 21,
//             id: 1
//         },
//         {
//             name: "sameer",
//             email: "sameer@test.com",
//             age: 17,
//             id: 2
//         },
//         {
//             name: "peeter",
//             email: "peeter@test.com",
//             age: 37,
//             id: 3
//         },

//     ]

  return <>
 {/* <h2>Handle Checkbox in React Js</h2> */}
 {/* <Skills />/ */}
 {/* <Radio/> */}
{
//  userData.map((user)=>(
//   <div key={user.id}>
//     <Loop user={user}/>
//   </div>
//  ))
<GetUsresData/>
}
 

  </>
}
export default App;