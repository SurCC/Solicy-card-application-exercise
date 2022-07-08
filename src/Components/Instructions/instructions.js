import React from "react";
import "./instructions.css";

export default function Instructions() {
  return (
    <div className="instructions">
      <div>
        <b>Press the "add card" button to add the new Card.</b>
      </div>
      <div>
        <b>Use the "sort cards" button to sort the Cards by the increase.</b>
      </div>
      <div>
        <b>Press an X icon on the top right to delete them.</b>
      </div>
    </div>
  );
}
