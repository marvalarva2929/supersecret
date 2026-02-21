import React, { useState, useEffect } from 'react';
import './Trivia.css';

const Trivia = ({ setStage })  => {
    // useEffect(() => {
    //         if (percent === 100) {
    //             const timeout = setTimeout(() => {
    //                 setStage(1);
    //             }, 1000);
    //             return () => clearTimeout(timeout);
    //         }
    // }, [percent, setStage]);

    return (
        <div className = "Trivia">
            <p>The KGC has an extensive history dating back to November 2025. In order to protect the rest of your friends (and mainly yourself), you must recall where you came from.</p>
            <br></br>
            <p>
                <b>What was the second message ever sent in the KGCGC?</b>
            </p>

            <input></input>
        </div>
    );
}

export default Trivia;
