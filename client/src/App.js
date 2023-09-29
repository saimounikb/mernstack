import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [sname, setStudentName] = useState("");
  const [tech, setTechnology] = useState("");
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const submitReview = () => {
    Axios.post("http://localhost:9000/aliens", {
      name: sname,
      tech: tech,
      sub: status,
    })
      .then(() => {
        alert("Data saved");
        // Reset the form after successful submission
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <form ref={formRef}>
          <label>
            <b>Student Name</b>
          </label>
          <input
            type="text"
            name="sname"
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
            required
          />
          <label>
            <b>Technology</b>
          </label>
          <input
            type="text"
            name="tech"
            onChange={(e) => {
              setTechnology(e.target.value);
            }}
            required
          />
          <label>
            <b>Status</b>
          </label>
          <input
            type="text"
            name="status"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            required
          />
          <button onClick={submitReview}>
            <b>Submit</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;