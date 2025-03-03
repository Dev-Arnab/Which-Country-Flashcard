import { useState } from "react";

const Flashcard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <h2>{flipped ? card.answer : card.question}</h2>
    </div>
  );
};

export default Flashcard;
