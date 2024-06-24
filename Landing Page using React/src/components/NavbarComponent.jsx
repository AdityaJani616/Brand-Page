import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import brandLogo from '../Images/brand_logo.png';

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='container'>
        <div className='Logo'>
          <a href="/">
            <img src={brandLogo} alt='logo' />
          </a>
        </div>
        <ul className={`navUl ${menuOpen ? 'active' : ''}`}>
          <li><a href="/">MENU</a></li>
          <li><a href="/">LOCATION</a></li>
          <li><a href="/">ABOUT</a></li>
          <li><a href="/">CONTACT</a></li>
        </ul>
        <button className='loginButton'>Login</button>
        <div className='hamburger' onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
