import React, { useState } from "react";
import Child1 from "./Child1";

function Parent1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      {/* Passing count as a prop */}
      <Child1 count={count} />
    </div>
  );
}

export default Parent1;