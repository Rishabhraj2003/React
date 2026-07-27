 function onclick() {
  function handleClick() {
    alert("Button clicked!");
    console.log("handleClick function called");
  }

  return (
    <div>
      <h2>Simple React Click Event</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;