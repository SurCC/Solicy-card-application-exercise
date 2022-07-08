import React from "react";
import "./main.css";

export default function Main({ cards, setCards }) {
  const handleRemove = (index) => {
    setCards((cards) => cards.filter((item, i) => i !== index));
  };
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="mainContainerScrollbar">
          {cards.map((item, index) => (
            <div className="cards" key={index}>
              {item}
              <div className="removeCards" onClick={() => handleRemove(index)}>
                x
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
