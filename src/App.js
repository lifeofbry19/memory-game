import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import CardDisplay from "./components/CardDisplay";

function App() {
  const [cards, setCards] = useState([
    "blue",
    "green",
    "red",
    "black",
    "brown",
    "orange",
    "coral",
    "beige",
    "purple",
    "dark cyan",
    "dark gray",
    "pink",
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <CardDisplay
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
        cards={cards}
        setCards={setCards}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
