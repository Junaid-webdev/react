import { useState } from "react";


function App(){
const [name,setName]=useState()
const [password,setPassword]=useState()
const [email,setEmail]=useState()
  return <>
  <h1>Controller Components</h1>
    <form action="" method="get">
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
      <br /> <br />
     
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
      <br /> <br />
     
      <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder="Enter Email" />

      <br /> <br />
     <button>Submit</button>
     <button onClick={()=>{setEmail('');setName('');}}>Clear</button>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </form>
  </>
}
export default App;