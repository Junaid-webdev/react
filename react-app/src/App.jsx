import User from "./User";
import Wrapper from "./wrapper";


function App(){
  return <>
  <Wrapper>
  <div>
   <h1>Hello Everyone</h1>
</div>
  </Wrapper>
  <Wrapper>
  <div>
   <h1 style={{ color:"yellow", background:"green" }}>Hello Junaid</h1>
</div>
  </Wrapper>
  <Wrapper>
  <div>
   <h1 style={{ color:"white" }}>Hello Admin</h1>
</div>
  </Wrapper>
  <Wrapper>
  <div>
   <h1>Hello Users</h1>
</div>
  </Wrapper>

  {/* <User />
  <User name="sameer" /> */}
  
  </>
}
export default App;