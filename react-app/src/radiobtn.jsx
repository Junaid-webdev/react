import { useState } from "react";

function Radio(){

    const [gender,setGender]=useState('Female');
    const [city,setCity]=useState();
    return<>
    <div>

    <h3>Handle Radio  and Dropdown</h3>
    <h3>Select Gender:{gender}</h3>
    <input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender=='male'} value={'Male'} name="gender" id="male" /> 
    <label htmlFor="male">Male</label>
    <input type="radio" onChange={(event=>setGender(event.target.value))} value={'Female'} checked={gender=='female'} name="gender" id="female" /> 
    <label htmlFor="female">Female</label>
    <br /><br /><br />

    <h4>Select City</h4>
    <select onChange={(event)=>setCity(event.target.value)} defaultValue="jaipur">
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
        <option value="jaipur">Jaipur</option>
        <option value="punjab">Punjab</option>
    </select>
    <h3>Selected City:{city}</h3>
    </div>
    
    </>
}
export default Radio;