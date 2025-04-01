import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/kpmg-logo_2.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`navbar ${isMobile ? "mobile-active" : ""}`}>
      <div className="navbar-content">
        {/* <h2 className="navbar-logo">KPMG</h2> */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-img" />
        </Link>
        <div className={`nav-links ${isMobile ? "active" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/analysis" className="nav-link">Analysis</Link>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
