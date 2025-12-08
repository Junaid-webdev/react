import { useState } from "react"

const useToggle = (defaultVal)=>{
    const [value,setVlaue] = useState(defaultVal)
    function toggleValue (val){
        if(typeof val!='boolean'){
            setVlaue(!value)
        }else{
            setVlaue(val)
        }
    }

    return [value,toggleValue]
}
export default useToggle;