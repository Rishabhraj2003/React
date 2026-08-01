import { useState } from "react";

function Toggle() {
  const [city, setCity] = useState("Noida");

  const changeCity = () => {
    if (city === "Noida") {
      setCity("Etawah");
    } else {
      setCity("Noida");
    }
  };

  return (
    <>
      <h1>Now I am in {city}</h1>
      <button onClick={changeCity}>Change City</button>
    </>
  );
}

export default Toggle ;
