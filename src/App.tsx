import React from 'react';

import './App.scss';
import { Nav } from './components/Nav/Nav';
import { NavItem } from './components/NavItem/NavItem';


function App() {
  return (
    <div className="App">
      <Nav>
        <NavItem name='Lessons' to='lessons' />
        <NavItem name='Students' to='students' />
        <NavItem name='Payments' to='payments' />
      </Nav>

      <main>
        <h1>Hello World</h1>
      </main>
      <footer>
        Mateusz Wlekliński
      </footer>
    </div>
  );
}

export default App;
