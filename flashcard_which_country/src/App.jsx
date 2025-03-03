import "./App.css";
import { useState } from "react";
import FlashCardList from "./components/flashcardList";

const App = () => {

  return (
    <div className="App">

      <div className="header">
        <h1>Flashcards about various countries</h1>
      </div>

      <FlashCardList />

    </div>
  )
}

export default App;

