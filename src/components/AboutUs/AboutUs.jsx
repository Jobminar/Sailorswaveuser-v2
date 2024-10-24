import React, { useState } from "react";
import "./AboutUs.css";
import navyPic from "../../assets/navy-pic.jpeg";
import emailIcon from "../../assets/Email-icon.png";
import phoneIcon from "../../assets/Phone-icon.png";
const AboutUs = () => {
  return (
    <div className="container">
      <section id="about-us">
        <div className="total_about">
          <div className="about_us">
            <p id="about">About Us</p>
            <div className="para">
              We have applied for an RPSL license under the name Sailorswave
              Ship Management Private Limited, and the RPSL license is currently
              under process. Until the license is granted, we are unable to
              recruit Indian seafarers.
            </div>
            <div className="contact-container">
              <div className="contact-item">
                <img src={emailIcon} alt="Email Icon" />
                <a href="mailto:info@sailorswave.com">info@sailorswave.com</a>
              </div>
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone Icon" />
                <a href="tel:+918790695737">+918790695737</a>
              </div>
              <br />
              <div className="contact-item">
                <img src={phoneIcon} alt="Phone Icon" />
                <a href="tel:+91 40-35174520">+91 40-35174520</a>
              </div>
            </div>

            <div className="buttons">
              <button id="button1">Contact Us</button>
              {/* <button id="button2">Apply Now</button> */}
            </div>
          </div>
          {/* <div>
            <img className="sailors" src={navyPic} alt="Navy Pic" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
