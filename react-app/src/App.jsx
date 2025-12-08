import useToggle from "./toggle";

function App(){

const [value,toggleValue]=useToggle(true);
const [data,setData]=useToggle()
console.log(value);

return<>

<button onClick={toggleValue}>Toggle Heading</button>
<button onClick={()=>toggleValue(true)}>Show Heading</button>
<button onClick={()=>toggleValue(false)}>Hide Heading</button>

{
  value? <h2>Custom Hook</h2>:null
}
<hr />

<button onClick={setData}>Toggle Heading</button>
<button onClick={()=>setData(true)}>Show Heading</button>
<button onClick={()=>setData(false)}>Hide Heading</button>

{
  data? <h2>Second Heading </h2>:null
}
</>

}
export  default App;
