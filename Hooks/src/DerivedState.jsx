import { useState } from "react";

function DerivedState() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleusers = () => {
    if (user.trim() === "") return;

    setUsers([...users, user]);
    setUser("");
  };

  const total = users.length;
  const lastuser = users[users.length - 1];
  const firstuser = users[0];
  const uniqueusers = [...new Set(users)].length;

  return (
    <div>
      <h1>Derived State</h1>
      <h2>Total Users: {total}</h2>
      <h2>Last User: {lastuser}</h2>
      <h2>First User: {firstuser}</h2>
      <h2>Unique Users: {uniqueusers}</h2>

      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button onClick={handleusers}>Add User</button>

      {users.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}
    </div>
  );
}

export default DerivedState;