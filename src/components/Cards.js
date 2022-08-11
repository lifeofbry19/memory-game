import React from "react";

const Cards = ({
  selectedCards,
  setSelectedCards,
  name,
  setScore,
  setCards,
  cards,
}) => {
  const handleClick = (e) => {
    if (selectedCards.includes(name)) {
      setScore(0);
      setSelectedCards([]);
    } else {
      setScore((prevVal) => prevVal + 1);
      setSelectedCards((prevVal) => {
        return [...prevVal, name];
      });
    }
    if (cards) {
      setCards((prevVal) => {
        return prevVal.sort((a, b) => 0.5 - Math.random());
      });
    }
  };
  let color;
  switch (name) {
    case "blue":
      color = "#20207b";
      break;
    case "green":
      color = "#1b441b";
      break;
    case "red":
      color = "#a81818";
      break;
    case "black":
      color = "black";
      break;
    case "brown":
      color = "#6a3c00";
      break;
    case "orange":
      color = "orange";
      break;
    case "coral":
      color = "coral";
      break;
    case "beige":
      color = "#c4c4a3";
      break;
    case "purple":
      color = "#480248";
      break;
    case "dark cyan":
      color = "darkcyan";
      break;
    case "dark gray":
      color = "#4f4f4f";
      break;
    case "pink":
      color = "pink";
      break;
  }

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <h3>{name ? name : "no name"}</h3>
    </div>
  );
};

export default Cards;
