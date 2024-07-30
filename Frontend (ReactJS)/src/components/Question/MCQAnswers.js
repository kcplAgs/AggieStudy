import React from "react";
import parseAndRenderMath from "../Utils/MathParser";
import './MCQAnswers.css'

const MCQAnswers = ({ answers, selectedAnswer, setSelectedAnswer, submitted }) => {

    if(!answers || answers.length === 0){
        return <div className="error">No answers available for this question.</div>;
    }

    return (
        <div className="answer-list">
            {answers.map(answer => (
                <button
                    key={answer.id}
                    className={`answer-item 
                        ${selectedAnswer?.id === answer.id ? 'selected' : ''} 
                        ${submitted && answer.correct ? 'correct' : ''} 
                        ${submitted && selectedAnswer?.id === answer.id && !answer.correct ? 'incorrect' : ''}`}
                    onClick={() => !submitted && setSelectedAnswer(answer)}
                    disabled={submitted}
                >
                    {parseAndRenderMath(answer.answerText)}
                </button>
            ))}
        </div>
    )
};

export default MCQAnswers;