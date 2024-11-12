// Header.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './styles/App.css';

function Header() {


  return (
    <header className="header">
      <h1>Azion Travels</h1>
      <nav>
        <NavLink exact to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
              </NavLink>
              <NavLink to="/signup?mode=login" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Login
              </NavLink>
        <NavLink to="/booking" className={({ isActive }) => (isActive ? 'active' : '')}>
          Booking
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
