import { useFormStatus } from "react-dom";

function App(){

  const handleSubmit= async()=>{
   await new Promise(Response=>setTimeout(Response,3000));
    console.log("submit");
    
  }
   function CoustmoreForm(){

    const {pending} = useFormStatus();

    return<>
    <input type="text" placeholder="Enter Name"/>
    <br /><br />
    <input type="text" placeholder="Enter Password" />
    <br /><br />
    <button disabled={pending}>{pending?'submiting...':'Submit'}</button>
    </> 
   }
  return<>
  <h2>useFomrStatus Hook in react</h2>
  <form action={handleSubmit}>
    <CoustmoreForm/>
  </form>
  </>
}
export default App;