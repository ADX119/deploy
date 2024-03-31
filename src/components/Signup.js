// Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Store username and password in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => console.log(setPassword(e.target.value))}
      />
      <button onClick={handleSignup()}>
        <Link to="/login">Signup</Link>
      </button>
    </div>
  );
};

export default Signup;
