import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
import "./Header.css";
import logo from "../../assets/Sailors-Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const mobileNav = document.querySelector('.bar');
    if (!isOpen) {
      mobileNav.classList.add('open');
    } else {
      mobileNav.classList.remove('open');
    }
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
          <button className="apply-btn" onClick={() => { navigate("/ApplicationPage")}}>Apply now</button>
        </div>
      </div>

      {/* mobile nav bar */}
      <div className="mobile-nav">
            <div className="nav-mobile">
             <img src={logo} alt="logo"/>
            </div>
          
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
            <div className={`menu-items ${isOpen ? 'show' : ''}`}>
                <a href="#home">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </div>

    
    </>
  );
};

export default Header;
