import React, { useState } from "react";
import "./Footer.css";
import logo from '../../assets/Footer-Sailors-Logo.png'
import FooterSlide from "../../assets/Footer-Slide-1.png";
import FooterSailorsLogo from "../../assets/Footer-Sailors-Logo.png";
import EmailIcon2 from "../../assets/Email-icon-2.png";
import SocialIcon1 from "../../assets/Social-icon-1.png";
import SocialIcon2 from "../../assets/Social-icon-2.png";
import SocialIcon3 from "../../assets/Social-icon-3.png";
import SocialIcon4 from "../../assets/Social-icon-4.png";
import SocialIcon5 from "../../assets/Social-icon-5.jpeg";
import SocialIcon6 from "../../assets/Social-icon-6.jpeg";

const Footer = () => {


  return (
    <>
     <div className="footer-main">
              <div className="logo-secion">
                    <img src={logo} alt="logo"/>  
                    <p>
                    Office Space No. 508, 5th floor, Prajay Princeton Towers, No. 11-15-14, Doctors Colony, L B Nagar, Saroornagar, Hyderabad, Telangana-500035,India
                   </p>
              </div>
      </div>
    </>
  )
};

export default Footer;
