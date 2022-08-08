import React from "react";
import ScoreDisplay from "./ScoreDisplay";

const Header = ({ score, highScore }) => {
  return (
    <header className="app-header">
      <h2>Memory Game</h2>
      <ScoreDisplay score={score} highScore={highScore} />
    </header>
  );
};

export default Header;
