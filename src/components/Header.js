// src/components/Header.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for work dropdown toggle

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (isDropdownOpen) setIsDropdownOpen(false); // Close dropdown if nav closes
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeAllMenus = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
    document.body.style.overflow = '';
  };

  // Function to handle scroll and close menus
  const handleScrollToSection = (id) => {
    closeAllMenus(); // Close mobile nav and dropdown
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeAllMenus}>Sanduni Piyumika</Link>
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li> <a href="#about" onClick={() => handleScrollToSection('about')} className="nav-item-text">About</a></li>
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}> {/* Add active class */}
              <span className="nav-item-text" onClick={toggleDropdown}>Work <i className="arrow down"></i></span>
              <ul className="dropdown-content">
                <li><NavLink to="/web-projects" onClick={closeAllMenus}>Web Development</NavLink></li>
                <li><NavLink to="/ui-ux-projects" onClick={closeAllMenus}>UI/UX Design</NavLink></li>
              </ul>
            </li>
            <li> <a href="#contact" onClick={() => handleScrollToSection('contact')} className="nav-item-text">Contact</a></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleNav}>
          <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;