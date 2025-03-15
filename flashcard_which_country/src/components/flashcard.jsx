import { useState } from "react";
import React from "react";


const Flashcard = ({card, isFlipped, setFlipped}) => {


    return (
        <div className="card" onClick={() => setFlipped((prev) => !prev)}>
            <h3>
                {isFlipped ? card.answer : card.question}
            </h3>
       </div>
    )
}

export default Flashcard;