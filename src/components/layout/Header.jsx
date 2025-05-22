import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>TTRPG Compendium</h1>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rules" className={({ isActive }) => isActive ? 'active' : ''}>
                Rules
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/paths" className={({ isActive }) => isActive ? 'active' : ''}>
                Backgrounds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/classes" className={({ isActive }) => isActive ? 'active' : ''}>
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/guides" className={({ isActive }) => isActive ? 'active' : ''}>
                Class Guides
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
