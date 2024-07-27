import React from "react";
import { FaCalendarAlt, FaCartArrowDown, FaHome } from "react-icons/fa";
import "./FoodCard.css";

const FoodCard = ({ name, quantity, date, address, tag, imageUrl }) => {
  return (
    <div>
      <div className="card">
        <p
          style={{
            position: "absolute",
            top: "0.5rem",
            left: "0.5rem",
            padding: "0.5rem 1rem",
            background: "#f5f5f5",
            color: "#333",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "0.5rem",
          }}
        >
          {tag ? tag : "food"}
        </p>
        <img
          className="foodcard-img"
          src={imageUrl || `https://source.unsplash.com/random/?${name}`}
          alt="Food Image"
        />
        <div className="card-content">
          <h2 className="food-title">{name}</h2>
          <div className="food-details">
            <ul className="icons">
              <li>
                <span className="icons-name">
                  <FaCartArrowDown />
                </span>
                : {quantity} kg
              </li>
              <li>
                <span className="icons-name">
                  <FaCalendarAlt />
                </span>
                : {date}
              </li>
              <li>
                <span className="icons-name">
                  <FaHome />
                </span>
                : {address}
              </li>
            </ul>
          </div>
          <button className="food-btn">Check Status</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
