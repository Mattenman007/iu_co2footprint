import React, { useEffect, useState } from 'react';
import logo from '../images/logo1.png';

const NavigationMenu = () => {
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const userLangDirection = document.documentElement.dir || 'ltr';
    setDirection(userLangDirection);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-white ${direction}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="small-image"/>Weltrettung e.V.
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ${direction === 'ltr' ? '' : 'ms-auto'}`}>
            <li className="nav-item">
            <a className="nav-link" href="#home" onClick={scrollToTop}>Startseite</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">Aktuelles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Über uns</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
