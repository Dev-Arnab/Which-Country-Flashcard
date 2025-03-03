import React from "react";
import { useState } from "react";
import Flashcard from "./flashcard";


const FlashCardList = () => {
    
    const flashcards = [
        {question: "Press the button for flashcards!", answer: "Start"},
        {question: "What is sthe capital of Italy?", answer : "Rome"},
        {question: "What is the capital of United Kingdom?", answer: "London"},
        {question: "What is the capital of Bangladesh?", answer: "Dhaka"},
        {question: "What is the capital of United States of America?", answer: "Washington DC"},
        {question: "Where is Opera House?", answer: "Sydney"},
        {question: "Which country is called the country of rising sun?", answer: "Japan" }
    ];
    
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setFlipped] = useState(false);

    const nextCard = () => {
        setCurrentCard(Math.floor(Math.random() * flashcards.length));
        setFlipped(false);
    }

    return (
        <div className="container">
            {/* <h2>Total cards: {flashcards.length}</h2> */}
            <Flashcard 
                card = {flashcards[currentCard]}
                isFlipped={isFlipped}
                setFlipped={setFlipped}
                />

            <button onClick={nextCard}>Next Card</button>
        </div>
    )
}

export default FlashCardList;


// import "./App.css";
// import { useState } from "react";

// const App = () => {

//   const flashcards = [
//     {question: "Press the button for flashcards!", answer: "Start"},
//     {question: "What is sthe capital of Italy?", answer : "Rome"},
//     {question: "What is the capital of United Kingdom?", answer: "London"},
//     {question: "What is the capital of Bangladesh?", answer: "Dhaka"},
//     {question: "What is the capital of United States of America?", answer: "Washington DC"},
//     {question: "Where is Opera House?", answer: "Sydney"},
//     {question: "Which country is called the country of rising sun?", answer: "Japan" }
//   ];

//   const [currentCard, setCurrentCard] = useState(0);
//   const [isFlipped, setFlipped] = useState(false);

//   const flipCard = () => setFlipped(!isFlipped);

//   const nextCard = () => {
//     setCurrentCard(Math.floor(Math.random() * flashcards.length));
//     setFlipped(false);
//   }

//   return (
//     <div className="App">

//       <div className="header">
//         <h1>Flashcards about various countries</h1>
//         <h2>Total cards: {flashcards.length}</h2>
//       </div>

//       <div className="card" onClick={flipCard}>
//         <h3>
//           {isFlipped ? flashcards[currentCard].answer : flashcards[currentCard].question}
//         </h3>
//       </div>

//       <button onClick={nextCard}>Next Card</button>

//     </div>
//   )
// }

// export default App;

