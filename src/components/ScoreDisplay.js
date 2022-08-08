import React from "react";

const ScoreDisplay = ({ score, highScore }) => {
  return (
    <div className="score-display">
      <h3>High Score: {highScore}</h3>
      <h3>Current Score: {score}</h3>
    </div>
  );
};

export default ScoreDisplay;
