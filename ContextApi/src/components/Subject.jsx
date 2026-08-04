import { useContext } from "react";
import { SchoolContext } from "../SchoolContext";

function Subject() {
  const school = useContext(SchoolContext);

  return (
    <div className="card subject-card">
      <h5>Subjects</h5>
      <ul>
        <li>Mathematics</li>
        <li>Science</li>
        <li>English</li>
      </ul>

      <div className="school-info">
        <p>📌 School: {school.name}</p>
        <p>👨‍🏫 Principal: {school.principal}</p>
      </div>
    </div>
  );
}

export default Subject;