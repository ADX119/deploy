// Portfolio.js
import React from "react";

const Portfolio = () => {
  const username = localStorage.getItem("username");

  return (
    <div>
      <h2>Portfolio</h2>
      <p>Welcome, {username}!</p>
      {/* Display other user data */}
    </div>
  );
};

export default Portfolio;
