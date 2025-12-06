function AddUser({setUser}){


    return<>
    <h2>Addd USer</h2>
    <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User Name"/>
    <hr />  
    </>
}
export default AddUser;