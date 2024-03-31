// Logout.js
import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>
        <Link to="/login">Logout</Link>
      </button>
    </div>
  );
};

export default Logout;
