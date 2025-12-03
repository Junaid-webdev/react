import { useEffect } from "react";
useEffect(()=>{
    GetUsresData();
    },[])
async function GetUsresData(){
const url = "https://api.restful-api.dev/objects";
let response = await fetch(url);
response = await response.json();
console.log(response);
}
export default GetUsresData;    