import React, { useActionState } from "react";

function UseActionState() {
  // This function is called when the form is submitted
  const handleSubmit = (previousData, formData) => {
    const name = formData.get("username");
    const password = formData.get("password");

    console.log("Previous State:", previousData);
    console.log("Name:", name);
    console.log("Password:", password);

    // Return the new state
    return {
      name,
      password,
    };
  };

  // useActionState(actionFunction, initialState)
  const [data, action, pending] = useActionState(handleSubmit, {
    name: "",
    password: "",
  });

  return (
    <div>
      <h1>useActionState Hook</h1>

      <form action={action}>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
        />
        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <br />

        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>

      <hr />

      <h2>Submitted Data</h2>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Password:</strong> {data.password}
      </p>
    </div>
  );
}

export default UseActionState;