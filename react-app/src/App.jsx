import { useState } from "react";

function App(){
const [data,setData]=useState([
  'anil','sam','peeter','junaid','quraishi'
])

const [dataDetails,setDataDetailes]=useState([
  {name:"anil ", age:'21',},
  {name:"sameer ", age:'17',},
  {name:"junaid ", age:'21',},
  {name:"tanveer ", age:'17',},
])

const handlerUser = (name)=>{
 data[data.length-1]=name;
setData([...data]) 
}

const handleAge=(age)=>{

  dataDetails[dataDetails.length-1].age=age;
  setDataDetailes([...dataDetails])
}
  return<>
  <h3>Updating Array in State</h3>
  <input type="text" placeholder="Enter Your Name"  onChange={(e)=>handlerUser(e.target.value)}  />
  <button onClick={()=>setData("Anil Sidhu")}>Update Name</button>

  {
    data.map((item,index)=>(
      <h2 key={index}>{item}</h2>
    ))
  }
  <hr />
  <input type="text" placeholder="Enter last user age" onChange={(e)=>handleAge(e.target.value)} />
  {
    dataDetails.map((item,index)=>(
      <h2 key={index}>{item.name},{item.age}</h2>

    ))
  }
  </>
}
export default App;