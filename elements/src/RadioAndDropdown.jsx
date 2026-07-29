import React, { useState } from "react";

function  RadioAndDropdown() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <h2>Registration Form</h2>

      {/* Gender Radio Buttons */}
      <h3>Gender</h3>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>

      <hr />

      {/* City Dropdown */}
      <h3>Select City</h3>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">--Select City--</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
      </select>

      <hr />

      <h3>Selected Values</h3>

      <p>
        <strong>Gender:</strong> {gender}
      </p>

      <p>
        <strong>City:</strong> {city}
      </p>
    </div>
  );
}

export default RadioAndDropdown;