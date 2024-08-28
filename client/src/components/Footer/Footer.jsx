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
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(email);
  };
  return (
    <>
          <div className="footer-main">
              <div className="logo-secion">
                    <img src={logo} alt="logo"/>  
              </div>
        <div className="links-section">
          <div className="foo-col">
            <p className="list-head">COMPANY</p>
            <ul className="footer-list">
              <li>About Us</li>
              <li >Reviews</li>
              <li >Contact Us</li>
              <li >Careers</li>
            </ul>
          </div>
          <div className="foo-col">
           <p className="list-head">Our Services</p>
            <ul className="footer-list">
              <li >On shore Joining</li>
              <li >off shore Joining</li>
              <li >Training</li>
              <li >Placements</li>
            </ul>
          </div>
        </div>
        <div className="sm-section">
          <p>Follow Us</p>
          <div className="sm-icons">
            
              <img src={SocialIcon1} alt="facebook-icon" />
           
              <img src={SocialIcon2} alt="instagram-icon" />
           
              <img src={SocialIcon3} alt="twitte-icon" />
           
              <img src={SocialIcon4} alt="whatsapp-icon" />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
