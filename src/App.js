import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/footer";
import Instructions from "./Components/Instructions/instructions";

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="App">
      <div className="soft">
        <div className="firstCol">
          <Header setCards={setCards} />
          <Main cards={cards} setCards={setCards} />
          <Footer />
        </div>
        <div className="secondCol">
          <Instructions />
        </div>
      </div>
    </div>
  );
}

export default App;
