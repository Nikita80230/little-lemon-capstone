import React from "react";

import desktopLogo from "../../assets/images/desktopLogo.png";

const Header = () => {
  return (
    <header>
      <img src={desktopLogo} alt="logo" />
      <ul>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Menu
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Reservations
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Order Online
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Login
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
