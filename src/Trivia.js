import React, { useState, useEffect } from 'react';
import './Trivia.css';

const Trivia = ({ setStage })  => {
    const [userInput, setUserInput] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (userInput === "Goon2") {
                setStage(2);
            } else{
                setUserInput("");
            }
        }
    }

    return (
        <div className = "Trivia">
            <p style = {{fontSize: "52px"}}>
                <b>KGC HISTORY</b>
            </p>
            <br></br>
            <p>The KGC has an extensive history dating back to November 2025. In order to protect the rest of your friends (and mainly yourself), you must recall where you came from.</p>
            <br></br>
            <p>
                <b>What was the second message ever sent in the KGCGC?</b>
            </p>

            <input value = {userInput} onChange = {(e) => setUserInput(e.target.value)} onKeyDown = {handleKeyDown} ></input>
        </div>
    );
}

export default Trivia;
