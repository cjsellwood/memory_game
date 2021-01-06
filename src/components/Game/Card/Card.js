import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" onClick={props.handleCardClick} data-name={props.name}>
      <div>
        <img src={props.src} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
