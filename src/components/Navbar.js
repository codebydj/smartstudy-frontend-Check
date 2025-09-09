import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import logo from "../assets/smartstudy-logo.png";
import homeIcon from "../assets/home-icon.png";
import messageIcon from "../assets/message-icon.png";
import aboutIcon from "../assets/about-icon.png";
import loginIcon from "../assets/login-icon.png";
import addUserIcon from "../assets/add-user-icon.png";
import menuIcon from "../assets/menu-icon.png";
import closeIcon from "../assets/close-icon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="SmartStudy Logo" className="logo-image" />
        </Link>
      </div>
      {/* Menu Toggle Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="Menu Icon"
          className="menu-icon"
        />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={homeIcon} alt="" className="navbar-icons" />
            Home
          </Link>
        </li>

        <li>
          <Link to="/latest-notes" onClick={() => setMenuOpen(false)}>
            <img src={messageIcon} alt="" className="navbar-icons" />
            Latest Notes
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <img src={aboutIcon} alt="" className="navbar-icons" />
            About Us
          </Link>
        </li>

        <li className="loginBtn LoginRegisterButton">
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <img src={loginIcon} alt="" className="navbar-icons " />
            Login
          </Link>
        </li>

        <li className="registerBtn LoginRegisterButton">
          <Link to="/register" onClick={() => setMenuOpen(false)}>
            <img src={addUserIcon} alt="" className="navbar-icons" />
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
