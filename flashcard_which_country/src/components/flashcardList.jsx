import React from "react";
import { useState } from "react";
import Flashcard from "./flashcard";


const FlashCardList = () => {
    
    const flashcards = [
        {question: "Press the Next button for flashcards!", answer: "Start"},
        {question: "What is sthe capital of Italy?", answer : "Rome"},
        {question: "What is the capital of United Kingdom?", answer: "London"},
        {question: "What is the capital of Bangladesh?", answer: "Dhaka"},
        {question: "What is the capital of United States of America?", answer: "Washington DC"},
        {question: "Where is Opera House?", answer: "Sydney"},
        {question: "Which country is called the country of rising sun?", answer: "Japan" }
    ];
    
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setFlipped] = useState(false);
    const [userGuess, setUserGuess] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        if (userGuess.trim().toLowerCase() === flashcards[currentCard].answer.toLowerCase()) {
            setFeedback("Correct! ✅");
          } else {
            setFeedback("Incorrect ❌");
          }
    }

    const nextCard = () => {
        if (currentCard < flashcards.length - 1) {
          setCurrentCard(currentCard + 1);
        } else {
          setCurrentCard(0);
        }
        resetState();
      };

      const prevCard = () => {
        if (currentCard > 0) {
          setCurrentCard(currentCard - 1);
        } else {
          setCurrentCard(flashcards.length - 1);
        }
        resetState();
      };
    
      const resetState = () => {
        setFlipped(false);
        setUserGuess("");
        setFeedback("");
      };


    return (
        <div className="container">
            <h2>Total cards: {flashcards.length}</h2>
            <Flashcard card={flashcards[currentCard]} isFlipped={isFlipped} setFlipped={setFlipped} />
      
        <input 
            type="text" 
            value={userGuess} 
            onChange={(e) => setUserGuess(e.target.value)} 
            placeholder="Enter your answer"
        />
        <button onClick={handleSubmit}>Submit</button>
        <p>{feedback}</p>

        <button onClick={prevCard} disabled={currentCard === 0}>Back</button>
        <button onClick={nextCard}>Next</button>
        </div>
    )
}

export default FlashCardList;
