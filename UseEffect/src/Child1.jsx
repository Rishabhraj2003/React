import React, { useEffect } from "react";

function Child1({ count }) {

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Received Count: {count}</p>
    </div>
  );
}

export default Child1;