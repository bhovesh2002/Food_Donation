import React from "react";
import "./Card.css";

const Card = ({ name, des, img }) => {
  return (
    <div className="goal-card">
      <img src={img} alt="goal pic" />
      <div class="card-content">
        <h2 className="card-heading">{name}</h2>
        <p className="card-description">{des}</p>
      </div>
    </div>
  );
};

export default Card;
