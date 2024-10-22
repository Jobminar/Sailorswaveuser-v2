import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/Sailors-Logo.png'

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="float-contains header-main">
        <div className="logo">
        <img src={logo} alt="logo" className="main-logo"/>
        </div>
        <div className="contact-info-header">
          <div className="contact-item">
            <img src={emailIcon} alt="Email Icon" />
            <span>info@sailorswave.com</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <span>+91 9600638356</span>
          </div>
          {/* <button className="apply-btn" >
            Apply now
          </button> */}
        </div>
      </div>

      {/* Mobile nav bar */}
      {/* <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
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
      </div> */}
      <div className="mobile-container">
        <div className="topnav">
          <img src={logo} alt="logo" className="main-logo" />
          <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
            <FaBars />
          </a>
        </div>
        <div id="myLinks" className={isMenuOpen ? 'show' : ''}>
          <a> <Link to="/" className="text-decoration-none link-tag">
            <p className="nav-name">
              Home
            </p>
          </Link></a>
          <a><HashLink
            to="/about#about-us"
            className="text-decoration-none"
          >
            <p className="nav-name">About us</p>
          </HashLink></a>
          <a>  <HashLink
            to="/services#services"
            className="text-decoration-none"
          >
            <p className="nav-name">Services</p>
          </HashLink></a>
          <a><HashLink
            to="/contactus#contact-us"
            className="text-decoration-none"
          >
            <p className="nav-name">Careers</p>
          </HashLink></a>
          <a><HashLink
            to="/contactus#contact-us"
            className="text-decoration-none"
          >
            <p className="nav-name">Contact us</p>
          </HashLink></a>
        </div>
      </div>


    </>
  );
};

export default Header;
