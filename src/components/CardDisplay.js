import React from "react";
import Cards from "./Cards";

const CardDisplay = ({
  setScore,
  selectedCards,
  setSelectedCards,
  cards,
  setCards,
}) => {
  return (
    <div className="display-container">
      <div className="card-display">
        {cards.map((card) => {
          return (
            <Cards
              setScore={setScore}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              name={card}
              cards={cards}
              setCards={setCards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardDisplay;
