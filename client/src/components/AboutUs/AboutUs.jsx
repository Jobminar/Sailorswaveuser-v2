import React, { useState } from "react";
import "./AboutUs.css";
import navyPic from "../../assets/navy-pic.jpeg";

const AboutUs = () => {


  return (
    <>
      <section id="about-us">
        <div className="total_about">
          <div className="about_us">
            <p id="about">About Us</p>
            <div className="para">
            We have applied for an RPSL license under the name Sailorswave Ship Management Private Limited, and the RPSL license is currently under process. Until the license is granted, we are unable to recruit Indian seafarers.
            </div>
            <div className="buttons">
              <button id="button1">Contact Us</button>
              {/* <button id="button2">Apply Now</button> */}
            </div>
          </div>
          <div>
            <img className="sailors" src={navyPic} alt="Navy Pic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
