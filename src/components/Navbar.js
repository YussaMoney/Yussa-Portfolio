import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/YussaMoney.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary py-3 fixed-top fixed-nav">
      <div className="container-fluid container">
        <a className="navbar-logo" href="/">
          <img src={logo} className="logo" alt="author-logo" />
        </a>
        <button
          className="navbar-toggler bg-white border-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="text-primary" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fs-4 nav-center">
            <li className="nav-item">
              <a className="nav-link active text-primary" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
