import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import logo from "../../assets/Sailors-Logo.png";
import { useNavigate } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="float-contains">
        <div className="logo">
          <img src={logo} alt="Sailors Wave Logo" />
        </div>
        <div className="contact-info-header">
          <div className="contact-item">
            <img src={emailIcon} alt="Email Icon" />
            <span>sailorswaveshipmanagement@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>+91 9876543210</span>
          </div>
          <button className="apply-btn" onClick={() => navigate("/ApplicationPage")}>
            Apply now
          </button>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="nav-mobile">
          <img src={logo} alt="logo" />
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <div id="nav-items" className={`menu-items ${isOpen ? 'show' : ''}`}>
                <HashLink
                  to="/about#about-us"
                  className="text-decoration-none"
                >
                  <a className="nav-link  mx-4">About us</a>
                </HashLink>
                <HashLink
                  to="/services#services"
                  className="text-decoration-none"
                >
                   <a className="nav-link  mx-4">Services</a>
                </HashLink>
               
                <a className="nav-link  mx-4">Careers</a>
                <HashLink
                  to="/contactus#contact-us"
                  className="text-decoration-none"
                >
                   <a className="nav-link mx-4">Contact us</a>
                </HashLink>
        </div>
      </div>
    </>
  );
};

export default Header;
