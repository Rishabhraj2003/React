import React, { useState } from "react";
import Child2 from "./Child2";

function Parent2() {

  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h1>Parent2 Component</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Update Count
      </button>

      <br /><br />

      <button onClick={() => setShowChild(!showChild)}>
        Show / Hide Child
      </button>


      {showChild && (
        <Child2 count={count} />
      )}

    </div>
  );
}

export default Parent2;