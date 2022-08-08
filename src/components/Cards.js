import React from "react";

const Cards = ({ selectedCards, setSelectedCards, name, setScore }) => {
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
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3>{name ? name : "no name"}</h3>
    </div>
  );
};

export default Cards;
