function Wrapper({children}){
    return<>
    
    <div style={{ color:"red",border:"5px solid black", width:"400px", margin:"10px", background:"blue"}}>
       {children}
    </div>
    
    </>
}
export default Wrapper;