import {useState, useEffect} from 'react'

function UseEffect() {
const [count, setCount] = useState(0)

useEffect(() => {
  call();
}, [1]);

const call = () => {
  console.log("useEffect called");
};
return (
    <div>
      <h1>useEffect </h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
} 
export default UseEffect;