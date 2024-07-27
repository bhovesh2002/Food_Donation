import React from "react";
import "./ImgDisplay.css";
import { Link, useNavigate } from "react-router-dom";

const ImgDisplay = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleDonateNowClick = () => {
    if (user) {
      // User is logged in, navigate to food donation route
      navigate("/dashboard");
    } else {
      // User is not logged in, navigate to signup route
      navigate("/signup");
    }
  };

  return (
    <div className="first-display-container">
      <div className="first-display">
        <div className="text">
          <h1 className="img-text">
            Feeding <span>Hope</span>
          </h1>
          <h3>Building Stronger Communities, One Meal at a Time.</h3>
          <button className="btn" onClick={handleDonateNowClick}>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgDisplay;
