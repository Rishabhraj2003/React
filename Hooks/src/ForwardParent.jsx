import { forwardRef } from "react";
const userInput=(props,ref)=>{
 return (<div>
<input type="text" placeholder="Enter your name" ref={ref}/>
</div>)
}
export default forwardRef(userInput);  