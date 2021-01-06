import { useState } from "react";
import "./App.css";

import Game from "./components/Game/Game";
import elephant from "./images/elephant.jpg";
import rhinoceros from "./images/rhinoceros.jpg";
import giraffe from "./images/giraffe.jpg";
import tiger from "./images/tiger.jpg";
import lion from "./images/lion.jpg";
import hippopotamus from "./images/hippopotamus.jpg";
import zebra from "./images/zebra.jpg";
import cheetah from "./images/cheetah.jpg";
import gorilla from "./images/gorilla.jpg";
import buffalo from "./images/buffalo.jpg";
import antelope from "./images/antelope.jpg";
import meerkat from "./images/meerkat.jpg";

const App = () => {
  const animalsInitial = [
    {
      name: "Elephant",
      src: elephant,
    },
    {
      name: "Rhinoceros",
      src: rhinoceros,
    },
    {
      name: "Giraffe",
      src: giraffe,
    },
    {
      name: "Tiger",
      src: tiger,
    },
    {
      name: "Lion",
      src: lion,
    },
    {
      name: "Hippopotamus",
      src: hippopotamus,
    },
    {
      name: "Zebra",
      src: zebra,
    },
    {
      name: "Cheetah",
      src: cheetah,
    },
    {
      name: "Gorilla",
      src: gorilla,
    },
    {
      name: "Buffalo",
      src: buffalo,
    },
    {
      name: "Antelope",
      src: antelope,
    },
    {
      name: "Meerkat",
      src: meerkat,
    },
  ];

  const [animals, setAnimals] = useState(animalsInitial);

  // Winner State
  const [winner, setWinner] = useState(false);

  // Scores saved
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Which has been clicked
  const [clicked, setClicked] = useState([]);

  const handleCardClick = (e) => {
    const name = e.currentTarget.getAttribute("data-name");

    // Add to already clicked array if not in it
    if (!clicked.includes(name)) {
      setWinner(false);
      setClicked([...clicked, name]);
      setScore(score + 1);

      // Update best score if necessary
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }

      // Winner
      if (score + 1 === 12) {
        console.log("You Win");
        setWinner(true);
        setClicked([]);
        setTimeout(() => {
          setWinner(false);;
        }, 3000);

        setScore(0);
      }

      // Reset game if already clicked
    } else {
      console.log(score);
      if (score !== 12) {
        console.log("You Lose");
      } else {
      }
      setScore(0);
      setClicked([]);
    }

    // Shuffle array
    const newAnimals = [...animals]
    shuffleArray(newAnimals);
    setAnimals(newAnimals);
  };

  // Shuffle function from internet
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div>
      {winner ? <h1 className="winner">You Win</h1> : null}
      <header className="header">
        <h1>Animal Memory Game</h1>
        <div>
          <span>
            Score: {score} - Best: {bestScore}
          </span>
        </div>
      </header>
      <Game handleCardClick={(e) => handleCardClick(e)} animals={animals} />
    </div>
  );
};

export default App;
