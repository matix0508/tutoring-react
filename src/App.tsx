import React from 'react';

import './App.scss';
import { Nav } from './components/Nav/Nav';
import { NavItem } from './components/NavItem/NavItem';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav>
        <NavItem name='Home' to='/' />
        <NavItem name='Lessons' to='lessons' />
        <NavItem name='Students' to='students' />
        <NavItem name='Payments' to='payments' />
      </Nav>

      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='lessons' element={<>Lessons</>} />
          <Route path='students' element={<>Students</>} />
          <Route path='payments' element={<>Payments</>} />
        </Routes>
        
      </main>
      <footer>
        Mateusz Wlekliński
      </footer>
    </div>
  );
}

export default App;
