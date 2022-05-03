import React from "react";

import "./App.scss";
import { Nav } from "./components/Nav/Nav";
import { NavItem } from "./components/NavItem/NavItem";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Lessons } from "./pages/Lessons/Lessons";
import { Students } from "./pages/Students/Students";
import { Payments } from "./pages/Payments/Payments";

function App() {
  return (
    <div className="App">
      <Nav>
        <NavItem name="Home" to="/tutoring-react/" />
        <NavItem name="Lessons" to="/tutoring-react/lessons" />
        <NavItem name="Students" to="/tutoring-react/students" />
        <NavItem name="Payments" to="/tutoring-react/payments" />
      </Nav>
      <main>
        <Routes>
          <Route path="/tutoring-react/" element={<Home />} />
          <Route path="/tutoring-react/lessons" element={<Lessons />} />
          <Route path="/tutoring-react/students" element={<Students />} />
          <Route path="/tutoring-react/payments" element={<Payments />} />
        </Routes>
      </main>
      <footer>Mateusz Wlekliński</footer>
    </div>
  );
}

export default App;
