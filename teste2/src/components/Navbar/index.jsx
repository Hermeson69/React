import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">BrandName</a>
        </div>
        <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Projetos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Dominios</a>
          </li>
        </ul>
        <div className="navbar-icons">
          <a className="nav-icon" href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="nav-icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="nav-icon" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <button>Contato</button>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
      </div>
    </nav>
  );
}

export default Navbar;