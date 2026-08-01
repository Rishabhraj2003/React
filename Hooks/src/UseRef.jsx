import { React, useRef } from "react";
function UseRef() {
  const inputRef = useRef(null);
  function inputhandler() {
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.value = "Rishabh Raj ";
    inputRef.current.style.color = "red";
    inputRef.current.style.fontSize = "30px";
    inputRef.current.style.fontWeight = "bold";
    inputRef.current.style.backgroundColor = "Green";
    inputRef.current.focus();
  }
  return (
    <div>
      <h1>UseRef</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={() => inputhandler()}>Input Handler</button>
    </div>
  );
}
export default UseRef;
