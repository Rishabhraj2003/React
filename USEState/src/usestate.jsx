import { useState } from "react";

function UseState() {
  const [name, setName] = useState("Rishabh");

  const handleName = () => {
    setName("Rishabh Raj");
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleName}>Change Name</button>
    </div>
  );
}

export default UseState;