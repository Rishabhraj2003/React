import { useState } from "react";

function HideAndSeek() {
  const [showName, setShowName] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px",
      }}
    >

      <h1 style={{ color: "blue" }}>React HideandSeeek Example</h1>

   
      <button
        onClick={() => setShowName(!showName)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showName ? "Remove" : "Display"}
      </button>


      {showName && (
        <h2
          style={{
            color: "red",
            marginTop: "20px",
          }}
        >
          Hello, Rishabh!
        </h2>
      )}

      {/* Footer */}
      <footer
        style={{
          marginTop: "250px",
          padding: "15px",
          backgroundColor: "#222",
          color: "white",
        }}
      >
        <p>© 2026 React Learning | Hide and Seek</p>
      </footer>
    </div>
  );
}

export default HideAndSeek;