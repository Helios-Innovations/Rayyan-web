import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Nav() {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <nav>
        <ul>
          <li className={getActiveClass('/')}><Link to="/">Home</Link></li>
          <li className={getActiveClass('/product')}><Link to="/product">Products</Link></li>
          <li className={getActiveClass('/service')}><Link to="/service">Services</Link></li>
          <li className={getActiveClass('/contact')}><Link to="/contact">Contact</Link></li>
          <li className={getActiveClass('/login')}><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
