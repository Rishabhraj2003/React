import { SchoolContext } from "../SchoolContext";
import Class from "./Class";

function School() {
  const schoolData = {
    name: "St Mary's Inter College Etawah",
    principal: "Father Binoy Joshep",
    year: "2016-17",
    address: "Civil Lines,Etawah India"
  };

  return (
    <SchoolContext.Provider value={schoolData}>
      <div className="card school-card">
        <h1>{schoolData.name}</h1>
        <p><strong>Principal:</strong> {schoolData.principal}</p>
        <p><strong>Academic Year:</strong> {schoolData.year}</p>
        <p><strong>Address:</strong> {schoolData.address}</p>

        <Class />
      </div>
    </SchoolContext.Provider>
  );
}

export default School;