import React from "react";

import "./App.scss";
import { Nav } from "./components/Nav/Nav";
import { NavItem } from "./components/NavItem/NavItem";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Lessons } from "./pages/Lessons/Lessons";
import { Students } from "./pages/Students/Students";
import { Payments } from "./pages/Payments/Payments";

const pages = [
  {
    path: "/",
    label: "Home",
    component: <Home />,
  },
  {
    path: "/lessons",
    label: "Lessons",
    component: <Lessons />,
  },
  {
    path: "/students",
    label: "Students",
    component: <Students />,
  },
  {
    path: "/payments",
    label: "Payments",
    component: <Payments />,
  },
];

function App() {
  return (
    <div className="App">
      <Nav>
        {pages.map((page) => (
          <NavItem name={page.label} to={"/tutoring-react" + page.path} />
        ))}
      </Nav>
      <main>
        <Routes>
          {pages.map((page) => (
            <Route
              path={"/tutoring-react" + page.path}
              element={page.component}
            />
          ))}
        </Routes>
      </main>
      <footer>Mateusz Wlekliński</footer>
    </div>
  );
}

export default App;
