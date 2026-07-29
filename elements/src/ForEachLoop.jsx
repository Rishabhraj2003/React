function ForEachLoop() {
  const cities = ["Delhi", "Mumbai", "Jaipur", "Hyderabad"];

  cities.forEach((city) => {
    console.log(city);
  });

  return (
    <div>
      <h1>City List</h1>

      {cities.map((city, index) => (
        <h2 key={index}>{city}</h2>
      ))}
    </div>
  );
}

export default ForEachLoop; 