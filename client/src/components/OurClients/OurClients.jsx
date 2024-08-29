import React from "react";
import "./OurClients.css";
import GrassLeft from "../../assets/Grass-Left.png";
import GrassRight from "../../assets/Grass-Right.png";

import Photo16 from "../../assets/Photo-16.png";
import Photo3 from "../../assets/Photo-3.png";
import Photo4 from "../../assets/Photo-4.png";
import Frame from "../../assets/Frame-1.png";
import Star from "../../assets/5star.png"

const OurClients = () => {
  return (
    <>
     
      <div className="div-background">
       
        <div className="jumbotron text-center  text-white">
          <h5 className="display-4 title-text-1">
            What Our Clients Say About Us
          </h5>
          
          <div className="review-container">
            <div className="review-top-con">
              <div >
                <img src={GrassLeft} className="feather1" alt="feather-1-image"/>
              </div>
              <div >
                <p id="rating">5.0 User Rating </p>
                <img src={Star} className="star-mobile" alt="star-icon"/>
              </div>
              <div >
                <img src={GrassRight} className="feather2"  alt="feather-2-image"/>
              </div>
            </div>
            <div className="review-bottom-con"> 
              <p className="helping">
                Helping 4,000 Peoples take beautiful screenshots everyday
              </p>
              <div className="m-clients">
                <img src={Frame} alt="..."  />
              </div>
            </div>
            
          </div>
        </div>


       {/* cards with highlight animation */}
      

        <div className="clients-con">
            <div className="clients-sub-con">
              <div className="clients-top">
                 <div className="card-image">
                    <img src={Photo16} alt="profile-icon"/>
                  </div>
                  <div className="clients-title">
                    <p>Raj</p>
                    <p>Senior Manager</p>
                  </div>
                  <div className="star-image">
                      <img src={Star} alt="star"/>
                  </div>
              </div> 
              <div className="clients-bottom">
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
              My experience at the Naval Institute was a mixed bag. On one hand, the training is rigorous and highly focused on building the skills needed for a successful naval career. The instructors are mostly veterans with a wealth of knowledge, and the facilities are modern and well-maintained
              </p>
              </div>   
            </div>
            <div className="clients-sub-con">
              <div className="clients-top">
                 <div className="card-image">
                    <img src={Photo4} alt="profile-icon"/>
                  </div>
                  <div className="clients-title">
                    <p>Varma</p>
                    <p>Junior Manager</p>
                  </div>
                  <div className="star-image">
                      <img src={Star} alt="star"/>
                  </div>
              </div> 
              <div className="clients-bottom">
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
              The Naval Institute is a remarkable place for anyone looking to build a career in naval service. The curriculum is comprehensive, covering everything from basic seamanship to advanced naval warfare tactics. The faculty is knowledgeable and supportive, always pushing you to achieve your best .
              </p>
              </div>   
            </div>
            <div className="clients-sub-con">
              <div className="clients-top">
                 <div className="card-image">
                    <img src={Photo3} alt="profile-icon"/>
                  </div>
                  <div className="clients-title">
                    <p>Jhon</p>
                    <p>Lead</p>
                  </div>
                  <div className="star-image">
                      <img src={Star} alt="star"/>
                  </div>
              </div> 
              <div className="clients-bottom">
              <p className="experience">It was a very good experience</p>
              <p className="card-text-1">
              I had the privilege of attending the Naval Institute, and it was an experience that shaped not only my career but also my character. The rigorous training, combined with world-class instructors who bring real-world experience, prepared me for every challenge in the naval field. The institute’s focus on discipline, leadership, and teamwork has had a lasting impact on my personal and professional life
              </p>
              </div>   
            </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
