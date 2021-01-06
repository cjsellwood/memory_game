import React from "react";
import Card from "./Card/Card";
import "./Game.css";

const Game = (props) => {
  // Create list set of animal cards
  const cardsArray = props.animals.map((animal) => {
    return (
      <Card
        key={animal.name}
        handleCardClick={props.handleCardClick}
        src={animal.src}
        name={animal.name}
      />
    );
  });

  return <div className="container">{cardsArray}</div>;
};

export default Game;
