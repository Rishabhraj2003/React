import { use } from "react";
import userInput from "./forwardparent";
function ForwardChild(props) {
  const inputref=useRef();
  const UpdateInput=()=>{
    console.log(inputref);
    inputref.current.value="Rishabh";
  }
    return (
        <div>
          <h1>forward Ref</h1>
          <userInput ref={inputref}></userInput>
          <button onClick={UpdateInput}>Update Input</button>
          
          </div>
    )
}
export default ForwardChild;