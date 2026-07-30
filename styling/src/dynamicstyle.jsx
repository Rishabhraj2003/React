import {useState} from "react";

function DynamicStyle(){

const [status,setStatus] = useState("success");


return(

<div>

<h1
style={{
color: status==="success" ? "green" : "red"
}}
>
{status}
</h1>


<button onClick={()=>setStatus("error")}>
Change Status
</button>


</div>

)

}

export default DynamicStyle;