import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
        <img className="navbar-logo" src="../../../public/Design_sem_nome__2_-removebg-preview.png" alt="" />
          <Link to="/" className="navbar-brand">
          Portfolio
          </Link>
        </div>
        <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link to="/projetos" className="nav-link">Projetos</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Contato</Link>
          </li>
        </ul>


         <div className="navbar-icons">
          <a className="nav-icon" href="https://github.com/Hermeson69" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="nav-icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="nav-icon" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div> 
        {/* <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;