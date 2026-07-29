import React, { useState } from "react";
function Checkboxes() {
  const [checkboxes, setCheckboxes] = useState({
    html: false,
    css: false,
    react: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="html"
          checked={checkboxes.html}
          onChange={handleChange}
        />
        HTML
      </label>

      <label>
        <input
          type="checkbox"
          name="css"
          checked={checkboxes.css}
          onChange={handleChange}
        />
        CSS
      </label>

      <label>
        <input
          type="checkbox"
          name="react"
          checked={checkboxes.react}
          onChange={handleChange}
        />
        React
      </label>

      <pre>{JSON.stringify(checkboxes, null, 2)}</pre>
    </div>
  );
}

export default Checkboxes;