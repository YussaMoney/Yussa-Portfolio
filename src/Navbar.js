import React from "react";
import logo from "./images/YussaMoney.png";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-primary py-3 fixed-top fixed-nav">
      <div class="container-fluid container">
        <a class="navbar-logo" href="/">
          <img src={logo} className="logo" alt="author-logo" />
        </a>
        <button
          class="navbar-toggler bg-white border-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="text-primary" />
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav fs-4 nav-center">
            <li class="nav-item">
              <a class="nav-link active text-primary" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="experience">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

