import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        {/* Menu Icon */}
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navbar Items */}
        <ul className={menuOpen ? 'active' : ''}>
          <li className={getActiveClass('/')}><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className={getActiveClass('/product')}><Link to="/product" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li className={getActiveClass('/service')}><Link to="/service" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li className={getActiveClass('/contact')}><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li className={getActiveClass('/login')}><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
