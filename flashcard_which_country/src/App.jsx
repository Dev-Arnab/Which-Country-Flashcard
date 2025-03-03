// import "./App.css";
// import { useState } from "react";

// const App = () => {
//   return(
//     <div className="App">
//       <h1>Country Flashcards</h1>
//       <h3>Let's see how many can you guess correctly</h3>
//     </div>
//   )
// }


// export default App;

import "./App.css";
import { useState } from "react";

const App = () => {
  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the color of the sky?", answer: "Blue" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  const nextCard = () => {
    setCurrentCard(Math.floor(Math.random() * flashcards.length));
    setIsFlipped(false); // Reset to question side when switching cards
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Flashcards</h1>
        <h2>Total Cards: {flashcards.length}</h2>
      </div>
      <div className="card" onClick={flipCard}>
        <h2>{isFlipped ? flashcards[currentCard].answer : flashcards[currentCard].question}</h2>
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
}

export default App;
