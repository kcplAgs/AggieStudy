import React from "react";
import './OpenEndedAnswer.css'

const OpenEndedAnswer = ({ openAnswer, setOpenAnswer, submitted }) => {
    return (
        <div className="open-answer">
            <textarea
                value={openAnswer}
                onChange={(e) => setOpenAnswer(e.target.value)}
                disabled={submitted}
                placeholder="Type your answer here..."
            />
        </div>
    );
}

export default OpenEndedAnswer;