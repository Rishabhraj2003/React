import {react, useState,useId} from "react";

function UseID() {
  const [count, setCount] = useState(0);
  const id = useId(); 
  return (
    <div>
      <h1>UseID</h1>
      <p>ID: {id}</p>
    </div>
  );
}
export default UseID;