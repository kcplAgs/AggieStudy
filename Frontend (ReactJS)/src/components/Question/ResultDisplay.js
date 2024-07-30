import React from "react";
import parseAndRenderMath from "../Utils/MathParser";
import './ResultDisplay.css'

const ResultDisplay = ({ submitted, openEnded, isCorrect, setSubmitted, setSelectedAnswer, answers }) => {
    
    if(!submitted) return null;

    if(submitted && !openEnded){
        return (
            <div 
                onClick={() => {
                    setSubmitted(false);
                    setSelectedAnswer(null);
                }} 
                className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect ? 'Correct! Try again!' : 'Incorrect. Try again!'}
            </div>
        );
    }
    return (
        answers.map(answer => (
            <div 
                onClick={() => {
                    setSubmitted(false);
                    setSelectedAnswer(null);
                }}
                className="open-question-answer"> 
            
                {parseAndRenderMath(answer.answerText)}
            </div>
        ))
    );
}

export default ResultDisplay;