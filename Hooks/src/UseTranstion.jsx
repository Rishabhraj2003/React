import { useState, useTransition } from "react";

function UseTransition() {
  const [data, setData] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Low-priority state update
    startTransition(() => {
      setData("Data Loaded");
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        Start Transition
      </button>

      {isPending && <p>Loading...</p>}

      <h2>{data}</h2>
    </div>
  );
}

export default UseTransition;