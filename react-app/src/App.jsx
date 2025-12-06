import { useState } from "react";
import AddUser from "./Adduser";
import DisplayUser from "./Display";

function App(){
const [user,setUser]=useState('');
  return<>
  <h3>Lifting State Up</h3>
  <AddUser setUser={setUser}/>
    <DisplayUser user={user}/>
  </>
}
export default App;