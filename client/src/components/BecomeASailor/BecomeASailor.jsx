import React, { useState } from "react";
import "./BecomeASailor.css";
import Pattern1 from "../../assets/Pattern-1.png";
import Pattern2 from "../../assets/Pattern-2.png";
import Pattern3 from "../../assets/Pattern-3.png";
import Pattern4 from "../../assets/Pattern-4.png";

const BecomeASailor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    country: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form data submitted:", formData);
    try {
      const response = await fetch("http://localhost:4000/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log("submitted data to backend:", data);
      alert('Your data submitted successfully one of our team member will contact you')
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="become-main">
        <div className="become-content">
          <h1>Become a Sailor</h1>
          <br />
          <p>Used and supported in over the countries around the globe.<br />
            We’ll work with you to open more doors and close more sales across all verticals.</p>
        </div>
        <div className="become-form">
          <div className="name">
            <div className="f-name">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control placeholder1 mb-2"
                aria-describedby="FirstName"
                placeholder="enter first name"
              />
            </div>
            <div className="l-name">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control placeholder1 mb-2"
                aria-describedby="LastName"
                placeholder="enter last name"
              />
            </div>
          </div>
          <div className="email">
          <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control placeholder1 mb-2"
                    aria-describedby="emailHelp"
                    placeholder="enter email address"
                  />
          </div>
          <div className="phone-state">

            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control placeholder1 mb-2"
                placeholder="enter contact number"
              />
            </div>
            <div>
              <label className="">Select state</label>
              <br />
              <select
                className="form-control placeholder1 mb-2"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option className="form-option placeholder1" value="">
                  Select
                </option>
                <option className="form-option" value="State 1">
                  State 1
                </option>
                <option className="form-option" value="State 2">
                  State 2
                </option>
                <option className="form-option" value="State 3">
                  State 3
                </option>
              </select>
            </div>
          </div>
          <div className="country"> 
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control placeholder1"
                placeholder="enter your country"
              />
          </div>
          <div className="apply-div">
                    <button
                      type="submit"
                      className="applybtn  btn btn-primary apply-button"
                    >
                      Apply
                    </button>
                    <label className="privacy-element">
                      Privacy Policy
                    </label>
                </div>
        </div>

      </div>
    </>
  );
};

export default BecomeASailor;
