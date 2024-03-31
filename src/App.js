
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/logout" element={<Logout/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
