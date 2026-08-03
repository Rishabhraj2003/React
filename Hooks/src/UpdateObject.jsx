import { useState } from "react";

function UpdateObject() {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
      />

      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
    </div>
  );
}

export default UpdateObject;