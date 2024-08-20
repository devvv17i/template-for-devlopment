import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import DayNightTransition from "./components/dayNight.jsx";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";

function App() {
  return (
    <Router>
      <DayNightTransition />
      <Navbar />
      <Routes>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={() => <div>Home Page Content</div>} />
      </Routes>
    </Router>
  );
}

export default App;
