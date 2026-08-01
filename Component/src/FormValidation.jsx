import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    skills: [],
  });

  const [errors, setErrors] = useState({});

  // Handle input change (text, radio, dropdown)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox
  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => {
      const updatedSkills = prev.skills.includes(value)
        ? prev.skills.filter((skill) => skill !== value)
        : [...prev.skills, value];

      return { ...prev, skills: updatedSkills };
    });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Gender validation
    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    // City validation
    if (!formData.city) {
      newErrors.city = "Please select city";
    }

    // Skills validation
    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    setErrors(newErrors);

    // If no errors, return true
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully ✅");
      console.log("Form Data:", formData);
    }
  };

  return (
    <>
      <h1>React Form Validation</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        {/* Gender */}
        <div>
          <h3>Gender</h3>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>

          <p style={{ color: "red" }}>{errors.gender}</p>
        </div>

        {/* City */}
        <div>
          <h3>City</h3>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Noida">Noida</option>
            <option value="Etawah">Etawah</option>
            <option value="Delhi">Delhi</option>
          </select>
          <p style={{ color: "red" }}>{errors.city}</p>
        </div>

        {/* Skills */}
        <div>
          <h3>Skills</h3>
          <label>
            <input
              type="checkbox"
              value="JavaScript"
              onChange={handleCheckboxChange}
            />
            JavaScript
          </label>

          <label>
            <input
              type="checkbox"
              value="React"
              onChange={handleCheckboxChange}
            />
            React
          </label>

          <label>
            <input
              type="checkbox"
              value="Node.js"
              onChange={handleCheckboxChange}
            />
            Node.js
          </label>

          <p style={{ color: "red" }}>{errors.skills}</p>
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Live Form Data:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  );
}

export default FormValidation;
