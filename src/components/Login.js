// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio"; // Import the Portfolio component

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    // Retrieve username and password from local storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if credentials match
    if (username === storedUsername && password === storedPassword) {
      // Set isLoggedIn to true in local storage
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true); // Update state to indicate user is logged in
    } else {
      alert("Invalid username or password");
    }
  };

  // Render the Portfolio component if user is logged in
  if (isLoggedIn) {
    return <Portfolio />;
  }

  return (
    <div>
      <h2>Login</h2>
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
