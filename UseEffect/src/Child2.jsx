import React, { useEffect } from "react";

function Child2({ count }) {


  // 1. Mounting lifecycle
  useEffect(() => {
    console.log("Child2 Mounted");

  }, []);


  // 2. Updating lifecycle
  useEffect(() => {
    console.log("Count Updated:", count);

  }, [count]);


  // 3. Unmounting lifecycle
  useEffect(() => {

    return () => {
      console.log("Child2 Unmounted");
    };

  }, []);


  return (
    <div>
      <h2>Child2 Component</h2>
      <p>Count from Parent: {count}</p>
    </div>
  );
}

export default Child2;