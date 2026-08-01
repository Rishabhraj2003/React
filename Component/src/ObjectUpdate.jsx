import { useState } from "react";

function ObjectUpdate() {
  const [user, setUser] = useState({
    name: "Rishabh Raj ",
    age: 22,
    city: "Etawah"
  });

  const updateName = () => {
    setUser({ ...user, name: "Rishabh" });
  };

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>

      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default ObjectUpdate;
