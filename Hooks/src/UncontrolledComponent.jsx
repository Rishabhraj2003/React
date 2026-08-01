function UncontrolledComponent() {
  const handleForm = (event) => {
    event.preventDefault();
    console.log(event);
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    console.log("User Name:", user);
    console.log("Password:", pass);
  };

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter User Name" />
        <br />
        <input type="password" id="pass" placeholder="Enter Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledComponent;
